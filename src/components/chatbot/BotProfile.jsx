import React, { useEffect, useState } from 'react'

const BotProfile = () => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((res) => res.json())
            .then((data) => {
                setImageUrl(data.message);
            });
    }, [])

  return (
    <div>
        <img src={imageUrl} alt="" style={{width: '200px', height: '200px'}} />
    </div>
  )
}

export default BotProfile