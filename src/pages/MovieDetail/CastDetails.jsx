import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CastCards from "../../components/Card/CastCards";

export default function CastDetails({ castDetails }) {
  console.log(castDetails);
  return (
    <>
      <h2 className="castHeading">Cast Members</h2>
      <Swiper
        spaceBetween={10}
        slidesPerView={6}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
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
