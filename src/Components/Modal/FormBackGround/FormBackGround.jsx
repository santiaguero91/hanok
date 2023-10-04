import {
    MouseParallaxContainer,
    MouseParallaxChild,
  } from "react-parallax-mouse";
import { LogInDiv, MainLandingDiv } from "./TestStyle";


const FormBackGround = () => {

    const styles = {
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
      };
    
      return (
        <MainLandingDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <LogInDiv>
          </LogInDiv>
    
          <MouseParallaxContainer
            globalFactorX={0.2}
            globalFactorY={0.1}
            containerStyle={styles}
          >
            <MouseParallaxChild factorX={0.3} factorY={0.5} containerStyle={styles}>
              <img src="https://media.istockphoto.com/id/183752521/photo/bi-bim-bap.jpg?s=612x612&w=0&k=20&c=kK9ZtpnqNhG38QUZ-dRDd6eBlf-jj4XAVXQb6LRPEmk=" className="photo1" />
              <img src="https://www.wendywutours.co.nz/resource/upload/2072/gyeongbok-palace-banner.jpg.webp" className="photo2" />
              <img src="https://media.istockphoto.com/id/579410588/es/foto/isla-de-jeju.jpg?s=612x612&w=0&k=20&c=Ez_TpO3ElSWRUO4R69PmEbuY-XVuEbrAtLuYSfijDf8=" className="photo5" />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.7} factorY={0.8}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Teheran-ro_Yeongdong-daero_crossing_7.jpg/800px-Teheran-ro_Yeongdong-daero_crossing_7.jpg" className="photo6" />
              <img src="https://assets-cdn.vam.ac.uk/2022/10/12/13/25/23/54a310e2-84b9-474d-9539-328daac30f71/320.jpg" className="photo8" />
            </MouseParallaxChild>
    
            <MouseParallaxChild factorX={0.5} factorY={0.3}>
              <img src="https://media.istockphoto.com/id/610231902/photo/seoul-cheonggyechon-stream-park-and-bridge-at-night.jpg?s=612x612&w=0&k=20&c=HjvKP-0YQbYZExRUijrJewdD-Sm901aMnQR7OlDbDZU=" className="photo3" />
              <img src="https://i.pinimg.com/originals/36/4a/aa/364aaa82f65a7f7df03f0ff087356c79.jpg" className="photo7" />
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </MainLandingDiv>
      );
    }

    export default FormBackGround;