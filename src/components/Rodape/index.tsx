import React from "react";
import { BsInstagram } from "react-icons/bs";
import * as S from "./styles";

const Rodape = () => {
  return (
    <S.Rodape>
      <div className="content">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
      </div>
    </S.Rodape>
  );
};

export default Rodape;
