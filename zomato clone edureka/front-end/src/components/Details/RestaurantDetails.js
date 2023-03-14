import React, { useState, useEffect } from 'react';
import Header from '../Common/Header'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams } from 'react-router-dom';
import '../../styles/RestaurantDetails.css'
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        overflow:'scroll'
    },
};

Modal.setAppElement('#root')

export default function RestaurantDetails() {
//Hook 
let{rName}=useParams()

const[isMenuModalOpen,setMenuModal]=useState(false)


const [restaurant,setRestaurant]=useState({})
const [Menu,setMenu]=useState([])
const [totalPrice,setTotalPrice]=useState(0)
// const [count,setCount]=useState(0);

//.........

//.........
let loadScript = async () => {
    const script = document.createElement('script')
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    document.body.appendChild(script);
    return true;  
  };


let makePayment =async ()=>{
let isLoaded = await loadScript()
if(!isLoaded){
  alert("Failed to Load SDK")
  return false;
};


let response = await fetch('http://localhost:9027/get-order-id', {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({amount: totalPrice})
})

let {order,status} = await response.json();
if(status === false){
  alert('Unable to create id, try again')
  return false;
}

var options = {
    "key": "rzp_test_RB0WElnRLezVJ5", // Enter the Key ID generated from the Dashboard
    "amount": order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": order.currency,
    "name": "Zomato Clone",
    "description": "Enjoy your day with this order",
    "image": "https://brandlogovector.com/wp-content/uploads/2021/02/Zomato-Logo.png",
    "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
    "profile": {
        "name": "Komal Narang",
        "email": "komalnarang666@gmail.com",
        "contact": "9878656435"
    },
   
};
try{
  var rzp1 = new window.Razorpay(options);
  rzp1.open();
}catch(error){
  alert('Something went wrong......... Try again')
} 
};
// .........

useEffect(()=>{
  fetch(`http://localhost:9027/restaurants/details/${rName}`)
  .then(Response=>Response.json())
  .then(data=>setRestaurant(data.data))
},[]) 

const getMenu=()=>{
  fetch(`http://localhost:9027/menu/${rName}`,{method:'GET'})
  .then(response=>response.json())
  .then((data)=>{
    data.data=data.data.map((value)=>{return{...value,qty:0}})
    setMenu(data.data)
  })

}

  const calPrice=(price)=>{
    let price1 = totalPrice+price;
    setTotalPrice(price1)
  }

  let CusineList=!(restaurant.Cuisine===undefined)&& (restaurant.Cuisine.length && <ul>
    {restaurant.Cuisine.map((item,index)=>(
    <li key={index}>{item.name}</li>
    ))}
    </ul>
  )
  return (
    <div>
    <Header />
    <div className='DetailsImg'>
        <img src={restaurant.thumb} width='100%' height="500px" alt='' />
    </div>
    <div>
        <br />
        <h2 className='heading'>{restaurant.name}
            <br />
            <button className='btn-p' onClick={() => { setMenuModal(true); getMenu() }} >Place Online Order</button>
        </h2>
    </div>
    <Tabs>
        <TabList>
            <Tab>Overview</Tab>
            <Tab>Contact</Tab>
        </TabList>

        <TabPanel>
            <div className='abouttheplace'>About this place</div>
            <div className='cuisine'>Cuisine</div>
            {CusineList}
            <div className='averageCost'>Average Cost</div>
            <div>&#8377;{restaurant.cost}</div>
        </TabPanel>
        <TabPanel>
            <div>Phone Number</div>
            <div>+91-123456789</div>
            <div>{restaurant.address}</div>
        </TabPanel>
    </Tabs>
      <Modal 
          isOpen={isMenuModalOpen}
          style={customStyles}
          >
          <h2 className='Menu'>Menu
                        <button className='btn btn-danger' onClick={() => setMenuModal(false)}>x</button>
                        <ul>
                            {
                                Menu.length && Menu.map((item, index) =>
                                    <li key={index} >
                                        <div className='isVeg'>
                                            <hr />
                                            {item.isVeg ? <span className='text-success'>Veg</span> : <span className='text-danger'>Non-Veg</span>}
                                        </div>
                                        <div className='itemName'>
                                            {item.itemName}
                                        </div>
                                        <div className='itemPrice'>
                                            {item.itemPrice}
                                            <span>
                                                &nbsp;
                                                <button
                                                    value={item.itemPrice}
                                                    onClick={(e) => {
                                                        setTotalPrice(
                                                            totalPrice >= 0 && totalPrice + Number(e.target.value)
                                                        );
                                                        // eslint-disable-next-line no-unused-vars
                                                        let _Menu = [...Menu];
                                                        _Menu[index].qty += 1
                                                        setMenu(_Menu)

                                                    }}
                                                    className="btn btn-outline-secondary btn-sm"
                                                >
                                                    +
                                                </button>
                                                &nbsp;
                                                {item.qty}
                                                &nbsp;
                                                {
                                                    item.qty <= 0 ? null :
                                                      <button
                                                            value={item.itemPrice}
                                                            onClick={(e) => {
                                                                setTotalPrice(
                                                                    totalPrice > 0 && totalPrice - Number(e.target.value)
                                                                );
                                                                let _Menu = [...Menu]; //reacreate a memory of array
                                                                _Menu[index].qty -= 1
                                                                setMenu(_Menu)

                                                            }}
                                                            className="btn btn-outline-secondary btn-sm"
                                                        >
                                                            -
                                                        </button>
                                                        }
                                            </span>
                                        </div>
                                        <div className='itemDescription'>
                                            {item.itemDescription}
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                        <hr />
                        <h3>
                            Total Price:{totalPrice}<button
                                disabled={totalPrice <= 0 ? true : false}
                                className={totalPrice <= 0 ? 'btn btn-danger' : 'btn btn-success'} style={{ float: 'right' }}
                               onClick={() => makePayment()}
                            >
                                {totalPrice <= 0 ? 'select Menu' : 'Pay Now'}
                            </button>
                        </h3>
                    </h2>

            
          </Modal>
    </div>
  )
}
