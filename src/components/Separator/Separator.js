import React from 'react'
import Image from 'next/image';
import images from "../../constants/images";


const Separator = () => {
  return <div>
    <div className="app__bg-separator">
      <Image
        className='app__bg-separator-img'
        src={images.cwiczenia}
        alt=''
      />
    </div>
  </div>;
}

export default Separator