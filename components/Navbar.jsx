import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react';
import { AiOutlineShoppingCart , AiFillCloseCircle , AiOutlinePlusCircle ,AiOutlineMinusCircle} from 'react-icons/ai';
import {BsFillBagCheckFill} from 'react-icons/bs';
const Navbar = () => {
    const togglecart = ()=>{
       if(ref.current.classList.contains('hidden')){
           ref.current.classList.remove('hidden')
           ref.current.classList.add('translate-x-0')
       }
    
    else if(!ref.current.classList.contains('hidden')){
        ref.current.classList.remove('translate-x-0')
        ref.current.classList.add('hidden')
    }
 }
    const ref = useRef()
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-xl'>
        <div className="logo flex mx-5">
          <Link href={"/"}>
              <a> 
              <Image src="/logo.png" width={30} height={30}/>  
           <span className='ml-2 text-3xl font-bold text-pink-400'>codeswear.com</span>
              </a>
          </Link>
        </div>
        <div className="nav">
            <ul className='flex items-center space-x-2 font-semibold md:text-md'>
                <Link href={"/tshirts"}><a><li>Tshirts</li></a></Link>
                <Link href={"/hoodies"}><a><li>Hoodies</li></a></Link>
                <Link href={"/stickers"}><a><li>Stickers</li></a></Link>
                <Link href={"/mugs"}><a><li>Mugs</li></a></Link>

            </ul>
        </div>
        <div onClick={togglecart}  className="cart  cursor-pointer absolute right-0 top-4 mx-5">
           <AiOutlineShoppingCart className='text-xl md:text-3xl'/>
        </div>
        <div ref={ref} className="sidebar hidden  w-72 h-full absolute top-0 right-0 bg-pink-100 px-8 py-10 transform transition-transform ">
            <h2 className='font-bold text-xl text-center'>shopping cart</h2>
            <span onClick={togglecart} className="absolute top-5 right-2 cursor-pointer text-2xl text-red-700"><AiFillCloseCircle/></span>
        
        <ol className='list-decimal font-semibold'>
           <li>
               <div className="item flex my-5">
               <div className='w-2/3 font-semibold'>Tshirts - wear the code</div>
               <div className='w-1/3 font-semibold flex items-center justify-center text-lg'><AiOutlineMinusCircle className='cursor-pointer text-pink-500'/><span className='mx-2 text-sm'>1</span><AiOutlinePlusCircle className='cursor-pointer text-pink-500'/></div>
               </div>
           </li> 

            <li>
               <div className="item flex my-5">
               <div className='w-2/3 font-semibold'>Tshirts - wear the code</div>
               <div className='w-1/3 font-semibold flex items-center justify-center text-lg'><AiOutlineMinusCircle className='cursor-pointer text-pink-500'/><span className='mx-2 text-sm'>1</span><AiOutlinePlusCircle className='cursor-pointer text-pink-500'/></div>
               </div>
           </li>

             <li>
               <div className="item flex my-5">
               <div className='w-2/3 font-semibold'>Tshirts - wear the code</div>
               <div className='w-1/3 font-semibold flex items-center justify-center text-lg'><AiOutlineMinusCircle className='cursor-pointer text-pink-500'/><span className='mx-2 text-sm'>1</span><AiOutlinePlusCircle className='cursor-pointer text-pink-500'/></div>
               </div>
           </li>

             <li>
               <div className="item flex my-5">
               <div className='w-2/3 font-semibold'>Tshirts - wear the code</div>
               <div className='w-1/3 font-semibold flex items-center justify-center text-lg'><AiOutlineMinusCircle className='cursor-pointer text-pink-500'/><span className='mx-2 text-sm'>1</span><AiOutlinePlusCircle className='cursor-pointer text-pink-500'/></div>
               </div>
           </li>

             <li>
               <div className="item flex my-5">
               <div className='w-2/3 font-semibold'>Tshirts - wear the code</div>
               <div className='w-1/3 font-semibold flex items-center justify-center text-lg'><AiOutlineMinusCircle className='cursor-pointer text-pink-500'/><span className='mx-2 text-sm'>1</span><AiOutlinePlusCircle className='cursor-pointer text-pink-500'/></div>
               </div>
           </li>

             <li>
               <div className="item flex my-5">
               <div className='w-2/3 font-semibold'>Tshirts - wear the code</div>
               <div className='w-1/3 font-semibold flex items-center justify-center text-lg'><AiOutlineMinusCircle className='cursor-pointer text-pink-500'/><span className='mx-2 text-sm'>1</span><AiOutlinePlusCircle className='cursor-pointer text-pink-500'/></div>
               </div>
           </li>
              
        </ol>
        
<div className="flex">
<button className="flex mr-2 text-white bg-pink-500 border-0 p-2 focus:outline-none hover:bg-pink-600 rounded text-sm"><BsFillBagCheckFill className='m-1'/>Checkout</button>
<button className="flex mr-2 text-white bg-pink-500 border-0 p-2 focus:outline-none hover:bg-pink-600 rounded text-sm"><BsFillBagCheckFill className='m-1'/>Clear Cart</button>
</div>

        </div>
    </div>
)
}
export default Navbar



