import React from "react";

interface ImgProps {
  src: string; 
  alt: string;
  width?: number | string; 
  height?: number | string; 
  className?: string;
  placeholderSrc?: string; 
  srcSet?: string; 
  sizes?: string; 
}

const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  className,
  placeholderSrc,
  srcSet,
  sizes,
}) => {
  return (
    <img
      src={placeholderSrc || src} 
      width={width} 
      height={height} 
      className={className || "w-full h-full object-cover"} 
      loading="lazy"
      srcSet={srcSet} 
      sizes={sizes} 
      onLoad={(e) => {
        if (placeholderSrc && e.currentTarget.src !== src) {
          e.currentTarget.src = src;
        }
      }}
    />
  );
};

export default Img;