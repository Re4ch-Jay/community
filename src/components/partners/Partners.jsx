import React from 'react'
import Card from '../Card'

const Partners = () => {
  return (
    <div className='bg-gray-600 px-20 pb-20' >
        <div className='mb-5'>
            <p className='mb-4 pt-10 text-4xl font-extrabold text-center md:text-5xl lg:text-6xl text-white'>Partners</p>
            <p className='text-center text-white'>We have more than 100 millions of developers. Here is some of our partners</p>
        </div>
        <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-2">
            <Card margin="16px 0">
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-full h-auto max-w-xl rounded-lg' style={{width: '80px', height: '80px'}} src="/images/partners/google.png"  alt="" />
                    <p className="text-lg font-meduim text-gray-500 lg:text-xl sm:px-16 xl:px-48 text-gray-400 mt-10">Google</p>
                </div>
            </Card>
            <Card margin="16px 0">
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-full h-auto max-w-xl rounded-lg' style={{width: '80px', height: '80px'}} src="/images/partners/facebook.png" alt="" />
                    <p className="text-lg font-meduim text-gray-500 lg:text-xl sm:px-16 xl:px-48 text-gray-400 mt-10">Facebook</p>
                </div>
            </Card>
            <Card margin="16px 0">
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-full h-auto max-w-xl rounded-lg' style={{width: '80px', height: '80px'}} src="/images/partners/instagram.png" alt="" />
                    <p className="text-lg font-meduim text-gray-500 lg:text-xl sm:px-16 xl:px-48 text-gray-400 mt-10">Instagram</p>
                </div>
            </Card>
            <Card margin="16px 0">
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-full h-auto max-w-xl rounded-lg' style={{width: '80px', height: '80px'}} src="/images/partners/twitter.png" alt="" />
                    <p className="text-lg font-meduim text-gray-500 lg:text-xl sm:px-16 xl:px-48 text-gray-400 mt-10">Google</p>
                </div>
            </Card>

            <Card margin="16px 0">
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-full h-auto max-w-xl rounded-lg' style={{width: '80px', height: '80px'}} src="/images/partners/laravel.png" alt="" />
                    <p className="text-lg font-meduim text-gray-500 lg:text-xl sm:px-16 xl:px-48 text-gray-400 mt-10">Laravel</p>
                </div>
            </Card>
            <Card margin="16px 0">
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-full h-auto max-w-xl rounded-lg' style={{width: '80px', height: '80px'}} src="/images/partners/react.png" alt="" />
                    <p className="text-lg font-meduim text-gray-500 lg:text-xl sm:px-16 xl:px-48 text-gray-400 mt-10">React</p>
                </div>
            </Card>
            <Card margin="16px 0">
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-full h-auto max-w-xl rounded-lg' style={{width: '80px', height: '80px'}} src="/images/partners/stackoverflow.png" alt="" />
                    <p className="text-lg font-meduim text-gray-500 lg:text-xl sm:px-16 xl:px-48 text-gray-400 mt-10">StackOverflow</p>
                </div>
            </Card>
            <Card margin="16px 0">
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-full h-auto max-w-xl rounded-lg' style={{width: '80px', height: '80px'}} src="/images/partners/github.png" alt="" />
                    <p className="text-lg font-meduim text-gray-500 lg:text-xl sm:px-16 xl:px-48 text-gray-400 mt-10">GitHub</p>
                </div>
            </Card>
        
        </div>
    </div>
  )
}

export default Partners