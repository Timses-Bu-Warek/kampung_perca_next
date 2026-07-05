'use client';
import { type CldImageProps, CldImage as NextCldImage } from 'next-cloudinary';

const CldImage = (props: CldImageProps) => {
  return <NextCldImage {...props} />;
};

export default CldImage;
