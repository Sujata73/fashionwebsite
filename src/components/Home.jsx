import React from 'react'

const Home = () => {
  return (
    <div className='  min-h-screen flex  flex-col justify-center  lg:flex-row items-center lg:px-32 px-5 lg:pt-10 pt-24 bg-PrimaryColor'>
        <div className='space-y-4'>
            <h1 className='text-5xl font-semibold text-ExtraDarkColor w-full lg:w-3/4 '>Discovering And Defining Your Own Fashion!</h1>
            <p className='w-full lg:w-3/4 text-DarkColor font-medium'>Each item is a carefully chosen masterpiece, promising not  just fashion but a reflection of your unique style</p>
            <button className=' bg-ExtraDarkColor text-white px-4 py-2 font-medium active:bg-amber-800 '>
                shop now
            </button>
        </div>
        <div className='bg-DarkColor p-5 rounded-tr-[290px] rounded-tl-3xl rounded-br-3xl '>
            <img  className="-ml-5 -mb-5" width={600} src={require('../assets/hero (1).png')}/>
        </div>
    </div>
  )
}

export default Home