import React from 'react'
import {ImQuotesLeft} from 'react-icons/im'

const ReviewCard = (props) => {
  return (
    <div className='flex flex-col  w-full lg:w-2/6 border-2 border-DarkColor p-3 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:bg-PrimaryColor '>
        <div>
            <ImQuotesLeft size={25}/>
            <h1 className='text-xl font-semibold text-ExtraDarkColor pt-4 '>{props.name}</h1>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa eligendi deserunt rerum nostrum. Deleniti delectus pariatur nostrum necessitatibus impedit quibusdam inventore, expedita ea commodi, itaque architecto harum laborum magnam sint?</p>
    </div>
  )
}

export default ReviewCard