import React from "react";
import { ICard } from "interfaces/card.interface";

import * as S from "./styles";

const Card = ({ dados }: ICard) => {
  return (
    <S.Card>
      {dados && (
        <div key={dados.id}>
          <h4>
            <>
              {dados.nome} - {dados.data}
            </>
          </h4>
          <h3> {dados.titulo}</h3>
          <h3> {dados.mensagem}</h3>
          <div>
            {dados.topico.((topic: { id: React.Key | null | undefined; item: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
              <span key={topic.id}>{topic.item}</span>
            ))}
          </div>
        </div>
      )}
    </S.Card>
  );
};

export default Card;
