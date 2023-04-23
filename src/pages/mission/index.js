import React from "react";
import Title from "../../components/Title";
import Conteudo from "../../components/Conteudo";
import "./mission.css";

const Missão = () => {
    return (
        <div className="mission">
            <Title title="Missão" />
            <Conteudo content="Viabilizar a realização de aulas práticas e o desenvolvimento de pesquisas biotecnológicas, voltadas para a criação de produtos, processos e serviços na área da saúde, por meio da disponibilidade de estrutura laboratorial." />
        </div>
    );
};

export default Missão;
