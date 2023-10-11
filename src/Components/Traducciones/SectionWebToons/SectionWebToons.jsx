import { Typography } from "@mui/material";
import { ColumnDiv, ImgDiv, MainDiv, NoteBkgd, RowDiv, TextDiv, WebTonBkgd } from "./SectionWebToonsStyle";
import { typoh3bold, typoh5 } from "../../../utils/Fonts";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import webtoon from "../../../assets/webtoon.png"
const SectionWebToons = () => {

    const [refanim, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });


  return (
    <MainDiv>
      <ColumnDiv>
        <Typography variant="h4" style={typoh3bold}>
          Traduccion de Webtoons
        </Typography>
        <RowDiv
          
        >
          <TextDiv>
            <Typography variant="h3" style={typoh5}>
              Amplia experiencia en la traduccion de webtoons.
            </Typography>
          </TextDiv>
        </RowDiv>
      </ColumnDiv>
      <WebTonBkgd
      component={motion.div}
      ref={refanim}
      initial={{ opacity: 0, y: 100, x :1}}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 100,
        x: inView ? 0 : 1
      }}
      transition={{ duration: 1.5 }}>
                <img width={"40%"} src={webtoon} />
            </WebTonBkgd>
    </MainDiv>
  );
};

export default SectionWebToons;
