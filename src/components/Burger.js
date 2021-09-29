import React from 'react'

export default function Burger(props) {
    const {burgers} = props;
    const onAdd = props.onAdd;
    function itemsListing() {
        return burgers.map((item,index) => {
            return (
                <div key={item.name} className='inline-flex m-4 border w-2/4 h-40 rounded items' >
                    <div className='flex flex-col items-start w-3/4 h-full mt-4 ml-4'>
                        <div>
                            {item.name}
                        </div>
                        <div>
                            Rs: {item.price}
                        </div>
                        <div>
                            {item.description}
                        </div>
                        <div className=' '>
                            <button className='bg-red-600 p-1 text-white rounded mt-1' onClick={() => onAdd(item)}>
                                Order
                            </button>
                        </div>
                    </div>
                    <div className='w-1/4'>
                        <img src={item.image} className=' h-full w-full rounded-r' alt='item pic'></img>
                    </div>

                </div>)
        });
    }
    return (
        <div className='flex flex-col justify-center items-center'>
            {itemsListing()}
        </div>
    )
}
