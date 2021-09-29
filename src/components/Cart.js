import React from 'react'
import {useHistory} from "react-router-dom";

export default function Cart(props) {
    const { cartItems } = props;
    const { onAdd } = props;
    const { onRemove } = props;
    const {order} =props;
    const history= useHistory();
    function handleCartClick(){
        order();
        history.push('/');
    }
    console.log("cartItems", cartItems);
    return (
        <div className="page">
            <h3 >Cart Items</h3>
            <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
            {cartItems.map((item, index) => {
                return (
                    <div key={item._id} className='flex justify-center'>
                        <div className='flex space-x-4 items-center h-40 w-1/2 border m-2'>
                            <div className='h-40 flex-1'><img src={item.image} className='h-full' alt='pic'></img></div>
                            <div className='item-container flex-1'><p className='font-bold'>{item.name}</p>
                                <p className='font-extralight'>{item.description}</p>
                                <p className='font-bold'>Price: <span className='font-normal'>Rs.{item.price}</span></p>
                                <p>Qty: {item.qty}</p>
                            </div>
                            <div className='flex-1'>
                                <button onClick={() => onAdd(item)} className='bg-red-600 p-1 text-white rounded m-1'>Add</button>
                                <button onClick={() => onRemove(item)} className='bg-red-600 p-1 text-white rounded m-1'>Remove</button>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div>
                <button className='bg-red-600 p-1 text-white rounded m-2' onClick={handleCartClick}>Place Order</button>
            </div>
        </div>
    )
}
