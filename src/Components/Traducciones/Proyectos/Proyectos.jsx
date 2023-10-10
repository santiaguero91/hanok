import { Typography } from "@mui/material";
import { ColumnDiv, ImgDiv, MainDiv, RowDiv, TextDiv } from "./ProyectosStyle";
import { typoh3bold, typoh6 } from "../../../utils/Fonts";
import { Swiper, SwiperSlide } from "swiper/react";
import ReadingWorkshop from "../../../assets/ReadingWorkshop.jpg";
import { Autoplay } from "swiper/modules";
import { EffectCreative } from "swiper/modules";

import "swiper/css";
const Proyectos = () => {
  return (
    <div>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        {/* First Img */}
        <SwiperSlide>
          <MainDiv>
            <ColumnDiv>
              <RowDiv>
                <ImgDiv>
                  <img
                    width="300px"
                    height="300px"
                    src={
                      "https://booksandbao.com/wp-content/uploads/2020/12/Untitled-design-1.jpg"
                    }
                  />
                </ImgDiv>
                <TextDiv>
                  <Typography variant="h5">
                    Lorem ipsum es el texto que se usa habitualmente en diseño
                    gráfico en demostraciones de tipografías o de borradores de
                    diseño para probar el diseño
                  </Typography>
                </TextDiv>
              </RowDiv>
            </ColumnDiv>
          </MainDiv>
        </SwiperSlide>
        {/* Second Img */}
        <SwiperSlide>
          <MainDiv>
            <ColumnDiv>
              <RowDiv>
                <ImgDiv>
                  <img
                    width="300px"
                    height="300px"
                    src="https://i.ytimg.com/vi/R-IJf9JJjno/sddefault.jpg"
                  />
                </ImgDiv>
                <TextDiv>
                  <Typography variant="h5">
                    Lorem ipsum es el texto que se usa habitualmente en diseño
                    gráfico en demostraciones de tipografías o de borradores de
                    diseño para probar el diseño
                  </Typography>
                </TextDiv>
              </RowDiv>
            </ColumnDiv>
          </MainDiv>
        </SwiperSlide>
        {/* Third Img */}
        <SwiperSlide>
          <MainDiv>
            <ColumnDiv>
              <RowDiv>
                <ImgDiv>
                  <img
                    width="300px"
                    height="300px"
                    src={
                      "https://s.wsj.net/public/resources/images/PJ-BX158_SLOWRE_GR_20140915163519.jpg"
                    }
                  />
                </ImgDiv>
                <TextDiv>
                  <Typography variant="h5">
                    Lorem ipsum es el texto que se usa habitualmente en diseño
                    gráfico en demostraciones de tipografías o de borradores de
                    diseño para probar el diseño
                  </Typography>
                </TextDiv>
              </RowDiv>
            </ColumnDiv>
          </MainDiv>
        </SwiperSlide>
      </Swiper>

      {/*       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      ></Swiper> */}

      {/* primera imagen  */}
      {/*       <MainDiv >
      <ColumnDiv>
      <RowDiv>
        <ImgDiv>
          <img width="300px" height="300px" src="https://i.ytimg.com/vi/R-IJf9JJjno/sddefault.jpg" />
        </ImgDiv>
        <TextDiv>
          <Typography variant="h5">
            Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
            en demostraciones de tipografías o de borradores de diseño para
            probar el diseño
          </Typography>
        </TextDiv>
      </RowDiv>
      </ColumnDiv>
      </MainDiv> */}

      {/* Segunda imagen  */}
    </div>
  );
};

export default Proyectos;
