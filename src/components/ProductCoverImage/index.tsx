import Image from 'next/image';

type ProductCoverImageProps = {
  imageProps: React.ComponentProps<typeof Image>;
};

export function ProductCoverImage({ imageProps }: ProductCoverImageProps) {
  return <Image {...imageProps} alt={imageProps.alt} className='rounded-[5px]' />;
}
