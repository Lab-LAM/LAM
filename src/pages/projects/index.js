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
                content="O RTA easy é um software para cálculo de expressão gênica que proporciona a
                opção da utilização dos métodos mais conhecidos e utilizados pela comunidade
                científica.
                No RTA easy você será capaz de analisar seu experimento com vários genes
                alvos e diversos genes de referência de uma só vez, dado que a inclusão de
                múltiplas amostras de referências resulta em produtos mais precisos.
                No RTA você irá gerar o modelo de planilha para inserir os dados do experimento, e selecionará o modelo de sua preferência para o cálculo.
                Com seus dados analisados você poderá escolher como exportar os resultados, seja ele em forma textual .txt, gráfico .png e documento .pdf"
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
