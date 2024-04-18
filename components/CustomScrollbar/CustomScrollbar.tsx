// import { ReactNode } from 'react';

// import SimpleBarReact from 'simplebar-react';

// import 'simplebar/dist/simplebar.min.css';

// type ScrollProps = {
//   children: ReactNode;
// };

// export const CustomScrollbar = ({ children }: ScrollProps) => {
//   return (
//     <SimpleBarReact className="h-[254px] md:h-[274px] xl:h-[288px] w-full overflow-x-auto">
//       {children}
//     </SimpleBarReact>
//   );
// };

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';

import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';

export const CustomScrollbar = () => {
  return (
    <Swiper
      direction="horizontal"
      slidesPerView="auto"
      freeMode={true}
      scrollbar={{ draggable: true }}
      mousewheel={true}
      style={{ height: '300px', display: 'flex' }}
      modules={[FreeMode, Scrollbar, Mousewheel]}
    >
      <SwiperSlide>
        <div>
          <p>Слайд 1</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <p>Слайд 2</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
