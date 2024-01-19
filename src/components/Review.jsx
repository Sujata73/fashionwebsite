import React from 'react'
import ReviewCard from './layouts/ReviewCard'


const Review = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 -mt-40'>
        <h1 className='font-semibold text-center text-ExtraDarkColor text-4xl lg:mt-14 mt-24'>Feedback Corner</h1>
        <div className='flex flex-col items-center xl:flex-row gap-5 justify-center py-4 my-8'>
            <ReviewCard name="Sujata Shestha"/>
            <ReviewCard name="Bhumika Parajuli"/>
            <ReviewCard name="Manisha Gautam"/>
        </div>
    </div>
  )
}

export default Review