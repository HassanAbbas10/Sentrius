import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ImgProps {
  src: string;                
  alt: string;                
  width?: number | string;   
  height?: number | string;   
  className?: string;       
  placeholderSrc?: string;    
}

const Img: React.FC<ImgProps> = ({ src, alt, width, height, className, placeholderSrc }) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      effect="blur" 
      className={className}
      placeholderSrc={placeholderSrc} 
    />
  );
};

export default Img;