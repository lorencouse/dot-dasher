import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <Image
      src='/images/dot-dasher-logo.png'
      alt='Dot Dasher Logo'
      className='rounded-full mx-2'
      width={40}
      height={40}
    />
  );
};

export default Logo;
