import React from 'react'
import Card from '../Card'
import Button from '../Button'

const Location = () => {
  return (
    <div className='flex flex-row justify-center items-center'>
        <div className='grid gap-4 md:grid-cols-2 p-20 text-center'>
            <Card margin={'0 auto'}>
                <div className='text-white'>
                    <p>Where we work</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, esse totam deleniti reiciendis dolorem pariatur cumque asperiores. Placeat quisquam rerum nam dolor harum, at enim fugiat aut, deserunt quam eligendi.</p>
                </div>
            </Card>
            <div>
            
                <img class="h-auto max-w-full rounded-lg" src="https://stackoverflow.co/img/company/illo-new-york.png" alt="image description"/>
        
            </div>
        </div>
    </div>
  )
}

export default Location