import React from "react";
import Title from "../../components/Title";
import Conteudo from "../../components/Conteudo";
import "./home.css";

const Home = () => {
    return (
        <div className="home-container" style={{ marginBottom: "24px" }}>
            <div className="capa" style={{ marginBottom: 40 }}></div>
            <div className="home-content">
                <Title title="Sobre Nós" />
                <Conteudo content="O Laboratório de Análises Moleculares (LAM/Saúde Humana) faz parte do Complexo Laboratorial da Saúde do Câmpus Universitário de Palmas/UFT e tem como objetivo oferecer o suporte aos cursos da área da saúde." />
                <Conteudo content="O LAM/Saúde Humana conta com a seguinte infraestrutura: computadores, notebooks, máquina de gelo, forno de hibridização, aparatos para eletroforese de ácidos nucleicos e proteínas, sistema de fotodocumentação, quantificador de ácidos nucleicos (Nanodrop One), termociclador, termociclador para RT-qPCR (Applied Biosystems) modelo 7500 Fast, agitador magnético, balança, autoclaves, centrífugas refrigeradas, microcentrífuga, destilador, sistema de água-ultrapura, estufa para secagem e esterilização, capelas de fluxo laminar, capela de exaustão, jogos de pipetas, micropipeta multicanal, banho-maria com agitação e controle de temperatura, geladeiras, freezers e um ultrafeezer (-80)." />
            </div>
        </div>
    );
};

export default Home;
