/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className="h-14 bg-black flex fixed z-50 w-full text-white items-center justify-between">
          <img src="http://localhost:3000/images/logo.png" alt="" className="w-16 h-12"  />
          <div className="flex items-center space-x-5">
                <h4 className="text-xl font-bold"><Link href={"/"} >Home</Link></h4> 
                <h4 className="text-xl font-bold">Crypto</h4>
                <h4 className="text-xl font-bold">NFT</h4>
          </div>  
    </div>
  )
}

export default Header