import React from 'react'
import Card from '../Card'
const Statistics = () => {
  return (
    <div className='grid gap-4 md:grid-cols-2 my-20 p-20'>
        <video className="w-full h-auto border border-gray-200 rounded-lg border-gray-700" src='/videos/vdo1.mp4' autoPlay muted loop>
        </video>
        <Card>
            <p className='text-white'>Stack Overflow helps people find the answers they need, when they need them. We're best known for our public Q&A platform that over 100 million people visit every month to ask questions, learn, and share technical knowledge.</p>
        
            <div className='mt-10'>  
                <div className="gap-8 sm:grid sm:grid-cols-2">
                    <div>
                        <dl>
                            <dt className="text-sm font-medium text-gray-500 text-gray-400">Staff</dt>
                            <dd className="flex items-center mb-3">
                                <div className="w-full bg-gray-200 rounded h-2.5 bg-gray-700 mr-2">
                                    <div className="bg-blue-600 h-2.5 rounded bg-blue-500" style={{width:"88%"}}></div>
                                </div>
                                <span className="text-sm font-medium text-gray-500 text-gray-400">8.8</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt className="text-sm font-medium text-gray-500 text-gray-400">Comfort</dt>
                            <dd className="flex items-center mb-3">
                                <div className="w-full bg-gray-200 rounded h-2.5 bg-gray-700 mr-2">
                                    <div className="bg-blue-600 h-2.5 rounded bg-blue-500" style={{width:"88%"}}></div>
                                </div>
                                <span className="text-sm font-medium text-gray-500 text-gray-400">8.9</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt className="text-sm font-medium text-gray-500 text-gray-400">Free WiFi</dt>
                            <dd className="flex items-center mb-3">
                                <div className="w-full bg-gray-200 rounded h-2.5 bg-gray-700 mr-2">
                                    <div className="bg-blue-600 h-2.5 rounded bg-blue-500" style={{width:"88%"}}></div>
                                </div>
                                <span className="text-sm font-medium text-gray-500 text-gray-400">8.8</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt className="text-sm font-medium text-gray-500 text-gray-400">Facilities</dt>
                            <dd className="flex items-center">
                                <div className="w-full bg-gray-200 rounded h-2.5 bg-gray-700 mr-2">
                                    <div className="bg-blue-600 h-2.5 rounded bg-blue-500" style={{width:"88%"}}></div>
                                </div>
                                <span className="text-sm font-medium text-gray-500 text-gray-400">5.4</span>
                            </dd>
                        </dl>
                    </div>
                    <div>
                        <dl>
                            <dt className="text-sm font-medium text-gray-500 text-gray-400">Value for money</dt>
                            <dd className="flex items-center mb-3">
                                <div className="w-full bg-gray-200 rounded h-2.5 bg-gray-700 mr-2">
                                    <div className="bg-blue-600 h-2.5 rounded bg-blue-500" style={{width:"88%"}}></div>
                                </div>
                                <span className="text-sm font-medium text-gray-500 text-gray-400">8.9</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt className="text-sm font-medium text-gray-500 text-gray-400">Cleanliness</dt>
                            <dd className="flex items-center mb-3">
                                <div className="w-full bg-gray-200 rounded h-2.5 bg-gray-700 mr-2">
                                    <div className="bg-blue-600 h-2.5 rounded bg-blue-500" style={{width:"88%"}}></div>
                                </div>
                                <span className="text-sm font-medium text-gray-500 text-gray-400">7.0</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt className="text-sm font-medium text-gray-500 text-gray-400">Location</dt>
                            <dd className="flex items-center">
                                <div className="w-full bg-gray-200 rounded h-2.5 bg-gray-700 mr-2">
                                    <div className="bg-blue-600 h-2.5 rounded bg-blue-500" style={{width:"88%"}}></div>
                                </div>
                                <span className="text-sm font-medium text-gray-500 text-gray-400">8.9</span>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </Card>
    </div>
  )
}

export default Statistics