import React from 'react'
import {useHistory} from "react-router-dom";

export default function Home(props) {
    const {items} = props;
    const history = useHistory();
    function itemsListing() {
        console.log('items', items);
        return items.map((item) => {
            return (
                <div key={item.name} className='w-40 m-4 border rounded-lg items cursor-pointer' onClick={()=>history.push(`/${item.name}`)}>
                    <div>
                        <img src={item.image}className='w-40 max-h-32 rounded-t-lg' alt='item pic'></img>
                    </div>
                    {item.name}
                </div>)
        });
    }
    return (
        <div className='flex justify-center items-center mt-8'>
            {itemsListing()}
        </div>
    )
}
