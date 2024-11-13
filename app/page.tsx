import React from 'react'
import Header from "@/components/header";
import Image from  "next/image" 
function homepage () {
  return (
    <div  className='max-h-screen'>
    <div>
      <Header/>
    </div>
    <main className='flex justify-between items-center px-[130px] py-20'>
<div className='w-1/2'>
<h3 className='text-[40px] font-bold tracking-[2.5%] font-serif left-[176px] w-[496px] top-[316px] text-black'>
IMPECCABLE CRAFTSMANSHIP AND FINESSE
</h3>
<p className='text-brown left-[171px] text-[25px] font-serif font-[500px] my-4 '>
An example of intricate workmanship and detail, elegant necklaces and 
long and short chains form a part of our desirable collection.
</p><br/>
<button className='w-88 h-58 text-white text-xl top-[730px] left-[176px] font-serif
px-7 py-2 gap-10 rounded bg-brown '>
  Explore Now
</button>
</div>
<div className='w-2/5 h-2/6'>
<Image className='flex justify-between items-center ml-25 left-[1164px] top-[198px] -mt-6 mb-6 '
src = '/img.svg'
alt = 'women wearing jewellery'
height={647}
width={462}>
</Image>
</div>
    </main>
    </div>
  )
}

export default homepage
