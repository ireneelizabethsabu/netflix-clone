import React,{useState,useEffect} from 'react'
import { collection, query, where, getDocs, addDoc, onSnapshot} from "firebase/firestore";
import './Plans.css'
import db from '../../firebase'
import { useSelector } from 'react-redux';
import {selectUser} from '../../features/user/userSelector'
import {loadStripe} from '@stripe/stripe-js'

function Plans() {
    const [products, setProducts] = useState([]);
    const user = useSelector(selectUser);
    const [subscription, setSubscription] = useState(null); 

    useEffect(() => {
      const getSubscriptionData = async () => {
        const ref = query(collection(db,"customers",user.uid,"subscriptions"));
        const snapshot = await getDocs(ref);
        snapshot.forEach(async (doc) => {
          console.log();
          setSubscription({
            role: doc.data().role,
            renew_date: doc.data().current_period_end.seconds,
            period_start: doc.data().current_period_start,
          })
        });
      }
      getSubscriptionData();
    }, [user.uid]);
    

    useEffect(() => {
      const getData = async () => {
        const q = query(collection(db, "products"), where("active", "==", true));
        const querySnapshot = await getDocs(q);
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await getDocs(query(collection(productDoc.ref, "prices")));
          priceSnap.docs.forEach(price => {
              products[productDoc.id].prices = {
                  priceId: price.id,
                  priceData: price.data()
              }
          })
        });
        setProducts(products);
      }
      getData();           
    }, [])
    
    console.log(subscription);

  const loadCheckout = async (priceId) => {
      const docRef = await addDoc(collection(db,"customers",user.uid,"checkout_sessions"),{
          price: priceId,
          success_url: window.location.origin,
          cancel_url: window.location.origin
      });
      onSnapshot(docRef, async(snap) => {
        const {error, sessionId } = snap.data();
        if(error){
          alert("An error occured: ");
        }
        if(sessionId){
          const stripe = await loadStripe("pk_test_51MLkrGSGVOPNq25NcdYT3BMDd6Vwtxl9VFkrqkomRSyXXV6j0Ir6bYxkXk6A9SYD18V6XKBSSvBwQ01ZONKNXa7z00rhzKfXjd");
          stripe.redirectToCheckout({sessionId});
        }
     })
  }

  return (
    <div className='plans'>
        {subscription && <p className='renewal__date'>Renewal Date : {" "}{
        new Date(subscription?.renew_date * 1000).toLocaleDateString()}</p>}
        {Object.entries(products).map(([productId, productData]) => {
          const currentPlan = productData.name?.toLowerCase().includes(subscription?.role);
          return (
            <div className={`${currentPlan && "plan__card__disabled"} plan__card`} key={productId}>
                <div className='plan__info'>
                  <h4>{productData.name}</h4>
                  <h5>{productData.description}</h5>
                </div>
                <button onClick={() => !currentPlan && loadCheckout(productData.prices.priceId)} className='btn'>{currentPlan ? 'Current Plan' : 'Subscribe'}</button>
            </div>
          );
        })
        }
    </div>
  )
}

export default Plans