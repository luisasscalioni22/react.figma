import React from "react";
import galeria from "assets/img/image 6.png";
import * as S from "./styles";
import { CardComponent } from "components";
import dados from "services/dados";

const Home = () => {
  return (
    <S.Home>
      <picture>
        <img src={galeria} alt="Imagens principais" />
      </picture>
      <aside>
        {dados && dados.map((item) => <CardComponent dados={item} />)}
      </aside>
    </S.Home>
  );
};

export default Home;
