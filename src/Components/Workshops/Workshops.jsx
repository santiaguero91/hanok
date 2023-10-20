import {
  ColumnDiv,
  FlagBkgd,
  FlowerBkgd,
  MainDiv,
  RowDiv,
} from "./WorkshopsStyle";
import {  Typh3bold} from "../../utils/Fonts";
import { useInView } from "react-intersection-observer";
import BookWs from "./WsBoxes/BookWs";
import AvWs from "./WsBoxes/AvWs";

const Workshops = ({ sectionWorkshop }) => {
  const [refanim, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <MainDiv id="Workshops" ref={sectionWorkshop}>
      <ColumnDiv>
        <Typh3bold variant="h3" ref={refanim}>
          TALLERES
        </Typh3bold>
        <RowDiv>
          <BookWs inView={inView}/>
          <AvWs inView={inView}/>
        </RowDiv>
      </ColumnDiv>
      <FlowerBkgd>
        <img
          width={"200px"}
          alt=""
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3b132966-e7ac-44d9-8443-603e44fbbafb/de19ay9-bfe886a1-b181-43d0-b3cb-6567f41dd1d6.jpg/v1/fill/w_800,h_1000,q_75,strp/korean_tiger_by_brothajeff_de19ay9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNiMTMyOTY2LWU3YWMtNDRkOS04NDQzLTYwM2U0NGZiYmFmYlwvZGUxOWF5OS1iZmU4ODZhMS1iMTgxLTQzZDAtYjNjYi02NTY3ZjQxZGQxZDYuanBnIiwiaGVpZ2h0IjoiPD0xMDAwIiwid2lkdGgiOiI8PTgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC8zYjEzMjk2Ni1lN2FjLTQ0ZDktODQ0My02MDNlNDRmYmJhZmJcL2Jyb3RoYWplZmYtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.ZlDCWm3iEsWLmls2g3UJJiN51sV8D_yv7zPnYVTYfhU"
        />
      </FlowerBkgd>
      <FlagBkgd>
        <img
          width={"200px"}
          alt=""
          src="https://cdn.britannica.com/49/1949-050-39ED83BA/Flag-South-Korea.jpg"
        />
      </FlagBkgd>
    </MainDiv>
  );
};

export default Workshops;
