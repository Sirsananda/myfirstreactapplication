import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const LeftText = () => {
    return (
        <div className='h-full flex flex-col justify-between w-1/3 m-18 justify'>
            <div>
                <h3 className='text-3xl font-bold'>Prospective customer segmentation</h3>
                <p className='py-2'>Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups</p>
            </div>
            <div className='text-8xl'>
                <ArrowUpRight className='w-8 h-8 my-10 text-black' />
            </div>
        </div>
    )
}

export default LeftText