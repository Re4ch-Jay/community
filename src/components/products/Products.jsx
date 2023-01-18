import React from 'react'
import Card from '../Card'

const Products = () => {
  return (
    <div className='p-20'>
        <div>
            <h3 className='text-white text-center'>Community</h3>
        </div>
        <div className='border-top'></div>
        <div>
            <h3 className='text-white text-center'>Additional products that reach and engage developers & technologists…</h3>
        </div>

        <div>
            <div className='grid gap-4 md:grid-cols-2 my-5'>
                <Card>

                </Card>
                <Card>
                    
                </Card>
            </div>
            <Card>
                    
            </Card>
        </div>

    </div>
  )
}

export default Products