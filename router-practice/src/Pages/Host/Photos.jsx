import React from 'react'
import { useOutletContext } from 'react-router-dom';

const Photos = () => {
  const {currentVan} =useOutletContext();

  return (
    <section>
      <img src={ currentVan.imageUrl } className='host-van-detail-image' />
    </section>
  )
}

export default Photos
