import React from 'react'

export default function Pizza(props) {
    const {pizaas} = props;
    const onAdd = props.onAdd;
    console.log("pizaas",pizaas);
    function itemsListing() {    
        return pizaas.map((item) => {
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
                            <button className='bg-red-600 p-1 text-white rounded mt-2' onClick={() => onAdd(item)}>
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
