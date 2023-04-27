import React from "react";
import Title from "../../components/Title";
import Projeto from "../../components/Projeto";
import "./projects.css";

const Projetos = () => {
    return (
        <section className="project-back">
            <Title title="Conheça nossas ferramentas" />
            <Projeto
                title="RTAeasy"
                url="images/logo_rtaeasy.png"
                site="https://rta-easy-mocha.vercel.app/"
                content="O RTAeasy é um software para o cálculo de expressão gênica de experimentos desenvolvidos via PCR em Tempo Real, com transcrição reversa (RT-qPCR), que permite a utilização dos dois modelos matemáticos mais conhecidos e utilizados pela comunidade científica."
            />
            <Projeto
                title="RGeasy"
                url="images/rgeasy-png.png"
                site="http://rgeasy.com.br/"
                content="O RGeasy tem por objetivo auxiliar na seleção de genes de referência, para estudos de expressão gênica por RT-qPCR de forma facilitada, uma vez que as informações, como valores de Cq’s exigidas por outras ferramentas, não são solicitados no momento da busca, pois informações como essas são previamente disponibilizadas pelos pesquisadores que desenvolvem trabalhos de validação de genes de referência, que possibilitam a classificação de genes de referências para diferentes combinações de condições ou tratamentos, muitas vezes, não abordadas nos estudos. O RGeasy utiliza o algoritmo RefFinder (XIE et al, 2012), para a classificação dos genes, resultando, ao final, em um ranking com os genes de referência mais estáveis e, ainda, disponibiliza conjuntos de primers dos genes selecionados.."
            />
        </section>
    );
};

export default Projetos;
