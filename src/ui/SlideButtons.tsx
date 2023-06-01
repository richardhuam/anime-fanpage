import { FC, MutableRefObject } from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import SwiperCore from 'swiper';

interface Props {
  swiperRef: MutableRefObject<SwiperCore | undefined>;
  isTransparent?: boolean;
}

export const NextSlideButton: FC<Props> = ({ swiperRef, isTransparent }) => {
  return (
    <button
      className={`absolute right-0 top-[45%] rounded-full hidden xl:flex h-10 w-10 items-center justify-center transition-colors ease-in-out ${
        isTransparent
          ? 'bg-[#EAEAEA33] hover:bg-[#cac9c933] text-white'
          : 'bg-white border-gray-100 border-1 shadow-slide-button'
      }`}
      onClick={() => swiperRef.current?.slideNext()}
    >
      <IoChevronForwardOutline />
    </button>
  );
};

export const PrevSlideButton: FC<Props> = ({ swiperRef, isTransparent }) => {
  return (
    <button
      className={`absolute left-0 top-[45%] rounded-full hidden xl:flex h-10 w-10 items-center justify-center transition-colors ease-in-out ${
        isTransparent
          ? 'bg-[#EAEAEA33] hover:bg-[#cac9c933] text-white'
          : 'bg-white border-gray-100 border-1 shadow-slide-button'
      }`}
      onClick={() => swiperRef.current?.slidePrev()}
    >
      <IoChevronBackOutline />
    </button>
  );
};
