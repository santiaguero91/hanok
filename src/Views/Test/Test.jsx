
const Test = () => {

    
      return (
        <MainLandingDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >

          
        </MainLandingDiv>
      );
    }

export default Test;