import { MainDiv, RowDiv } from "./FirstFooterStyle";
import { AiOutlineMail } from "react-icons/ai";

const FirstFooter = () => {
    
    return (
      <MainDiv>
        <RowDiv>
            <div><AiOutlineMail/> Contact Me</div>
            <div> Icons </div>
        </RowDiv>
  
      </MainDiv> 
    );
  };
  
  export default FirstFooter;