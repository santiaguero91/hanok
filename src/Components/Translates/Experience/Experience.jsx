import webtoon from "../../../assets/webtoon.png";
import film from "../../../assets/films.png";
import books from "../../../assets/books.png";
import { typoh3bold } from "../../../utils/Fonts";
import { Typography } from "@mui/material";
import { MainDiv, RowDiv } from "./ExperienceStyle";
import React, { useState, useEffect } from 'react';

const Experience = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <MainDiv>
      <Typography variant="h4" style={typoh3bold}>
        Contamos con amplia experiencia en la traduccion de :
      </Typography>
      <RowDiv>
        <img
          width="100px"
          height="100px"
          alt=""
          src={webtoon}
          title="Webtoons"
        />
        <img width="100px" height="100px" alt="" src={film} title="Film" />
        <img width="100px" height="100px" alt="" src={books} title="Books" />
      </RowDiv>
      
      <div
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
      }}
    >
      This div follows your mouse!
    </div>
    </MainDiv>
  );
};

export default Experience;
