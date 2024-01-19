import React from 'react'

const Collection = () => {
  return (
    <div className='h-screen lg:h-[70vh] flex flex-col lg:flex-row items-center bg-PrimaryColor mt-14 lg:px-32 px-5 '>
        <div className='flex justify-center w-full lg:w-3/4 pt-6'>
<img src={require('../assets/collection.png')}/>
        </div>
        <div className='w-full lg:w-2/4 space-y-4 pt-5 text-center lg:text-start'><h1 className='text-4xl font-semibold text-ExtraDarkColor'>Best Summer Colletions</h1>
        <h3>Sale Get Up To 60%</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed officia ea sunt culpa ab odio modi. Voluptates, quibusdam. Alias pariatur accusamus assumenda non. Animi, aspernatur? Facere voluptatum totam eos sint!</p>
        <button className='bg-ExtraDarkColor text-white px-4 py-2 font-medium active:bg-amber-800'>Shop Now</button>
        </div>
    </div>
  )
}

export default Collection