import { MainDiv } from "./WsSwipperStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import ReadingWorkshop from "../../../assets/ReadingWorkshop.jpg"
// Import Swiper React components
// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';
const WsSwipper = () => {
  return (
    <MainDiv>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide >
          <img width="450px" height="450px" src={ReadingWorkshop} />
        </SwiperSlide>
        <SwiperSlide><img width="450px" height="450px" src={"https://booksandbao.com/wp-content/uploads/2020/12/Untitled-design-1.jpg"} /></SwiperSlide>
        <SwiperSlide><img width="450px" height="450px" src={"https://s.wsj.net/public/resources/images/PJ-BX158_SLOWRE_GR_20140915163519.jpg"} /></SwiperSlide>
      </Swiper>
    </MainDiv>
  );
};

export default WsSwipper;
