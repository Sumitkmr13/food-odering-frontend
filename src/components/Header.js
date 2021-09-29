import React from 'react'
import {FaShoppingCart} from 'react-icons/fa';
import {Link, useHistory} from "react-router-dom";

export default function Header(props) {
    const {countCartItems} = props;
    const history= useHistory();
    function handleCartClick(){
        history.push('/Cart');
    }
    return (
        <div>
            <header className='w-full h-12 bg-red-600 font-bold text-xl text-white header'><Link to='/'><center ><span className=''>Food Odering</span></center></Link>
            <span className='flex float-right cursor-pointer cart' onClick={handleCartClick}><FaShoppingCart/> <span className='leading-none ml-1'>{countCartItems}</span></span>
            </header>
        </div>
    )
}
