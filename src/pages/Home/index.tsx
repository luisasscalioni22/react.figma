import React, { useEffect, useState } from "react";
import carrousel from "assets/img/carrousel.png";
import * as S from "./styles";
import { CardComponent } from "components";
import { apiLegenda } from "services/data";
import { ILegendaData } from "interfaces/legenda.interface";

const Home = () => {
  const [messages, setMessage] = useState<ILegendaData[]>()
  useEffect(() => {
    const fetchData = async () => {
      const response = await apiLegenda.index()
      setMessage(response.data)
    }
    fetchData()
  }, [])

  return (
    <S.Home>
      <picture>
        <img src={carrousel} alt="Imagens principais" />
      </picture>
      <aside>
        {messages && messages.map((item) => <CardComponent key={item.id} dados={item} />)}
      </aside>
    </S.Home>
  );
};

export default Home;