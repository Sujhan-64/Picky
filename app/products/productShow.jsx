import React from 'react'
import { Productitems } from '../data/data'
import Image from 'next/image'
import Link from 'next/link'
const ProductShow = (props) => {
  return (
    <div>
      <div className='flex flex-wrap gap-3.5'>
        {Productitems.map((item) =>(
          <Link key = {item.id} href='/finalProduct'>
              <div>
                <div key={item.id} className="flex flex-col w-[250px] h-[300px] bg-white border rounded-sm 
                border-black overflow-hidden shadow-inner hover:shadow-xl transition-shadow">
                      <div className='flex-grow'>
                          <Image src={item.content} alt="#" className="w-full h-full object-cover transform
                          transition-transform duration-300 hover:scale-105"/>
                      </div>
                </div>
                
                {/*product description and price*/}
                <div>
                    <p>{item.price}</p>
                </div>
              </div>
          </Link>
      ))} 
      </div>


    </div>
  )
}

export default ProductShow

/*Improvements for future : 
    ->create a component for the product tiles and reuse it in both this and category box in main
    -> get prices from server
    -> each project image must have offer image
*/