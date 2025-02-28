import React from 'react'

const RevenueCard = ({
    title,
    orderCount,
    amount
}) => {

  return (
    <div className='bg-white rounded shadow-md p-5'>
        <div className='text-zinc-500 font-semibold'>
            {title}
            <span className='ml-4'>?</span>
        </div>
        <div className='flex pt-4 justify-between items-center'>
            <div className='font-semibold text-2xl '>
            ₹ {amount}
            </div>
            {orderCount ? <div className='flex items-center cursor-pointer underline'>
                 <a className='text-blue-700 font-medium' href="#">{orderCount} Orders</a> 
                <span className='text-blue-500'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg></span>
   
            </div> : null}
        </div>
    </div>
  )
}

export default RevenueCard