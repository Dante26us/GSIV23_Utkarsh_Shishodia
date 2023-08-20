import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CastCards from "../../components/Card/CastCards";
import { checkScreen } from "../../components/utils";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export default function CastDetails({ castDetails }) {
  console.log(castDetails);
  return (
    <>
      <h2 className="castHeading">Cast Members</h2>
      <Swiper
        spaceBetween={10}
        slidesPerView={
          checkScreen() == "mob" ? 2 : checkScreen() == "tab" ? 3.2 : 8
        }
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {castDetails?.map((i) => (
          <SwiperSlide>
            <CastCards
              id={i.id}
              profile_path={i.profile_path}
              name={i.name}
              character={i.character}
              known_for_department={i.known_for_department}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
