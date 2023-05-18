import React from "react";
import Title from "../../components/Title";
import Equipe from "../../components/Equipe";
import "./team.css";

const Team = () => {
    return (
        <div className="team-back">
            <Title title="Conheça nossa Equipe" />
            <div className='team' >
                <Equipe
                    nome="Gessi Carvalho de Araujo Santos"
                    funcao="Coordenadora do LAM"
                    foto="images/equipe/Gessi.jpeg"
                    enail="cgessi@uft.edu.br"
                    curriculo="http://lattes.cnpq.br/9018854010856582"
                    orcid="https://orcid.org/0000-0001-5091-2903"
                />
                <Equipe
                    nome="Horllys Gomes Barreto"
                    funcao="Doutor em Biotecnologia Vegetal"
                    foto="images/equipe/Horllys.jpeg"
                    enail="horllys@uft.edu.br"
                    curriculo="http://lattes.cnpq.br/2644974066903259"
                    researchgate="https://www.researchgate.net/profile/Horllys-Barreto"
                    orcid="https://orcid.org/0000-0001-7236-6296"
                />
                <Equipe
                    nome="Karolyne Botelho Marques Silva"
                    funcao="Doutoranda em Biodiversidade e Tecnologia"
                    foto="images/equipe/Karolyne.jpeg"
                    enail="karolynebmsilva@gmail.com"
                    curriculo="http://lattes.cnpq.br/9539413855630115"
                    researchgate="https://www.researchgate.net/profile/Karolyne-Silva-2"
                    orcid="https://orcid.org/0009-0002-5584-9055"
                />
                <Equipe
                    nome="Matheus Martins Daude"
                    funcao="Doutorando em Biodiversidade e Biotecnologia"
                    foto="images/equipe/Matheus.jpeg"
                    enail="matheusdaude@gmail.com"
                    curriculo="http://lattes.cnpq.br/9905908905150105"
                    researchgate="https://www.researchgate.net/profile/Matheus-Martins-Daude"
                    orcid="https://orcid.org/0000-0001-6978-493X"
                />
                <Equipe
                    nome="Jaderson Roney Gomes de Oliveira"
                    funcao="Doutorando em Biodiversidade e Biotecnologia"
                    foto="images/equipe/Roney.jpeg"
                    enail="aderson.roney@uft.edu.br"
                    curriculo="http://lattes.cnpq.br/7074155224161304"
                    researchgate="https://www.researchgate.net/profile/Jaderson-Gomes-De-Oliveira"
                    orcid="https://orcid.org/0000-0001-8374-992X"
                />
                <Equipe
                    nome="Melissa Barbosa Fonseca Moraes"
                    funcao="Doutoranda em Biodiversidade e Biotecnologia"
                    foto="images/equipe/Melissa.jpeg"
                    enail="mbarbosal@yahoo.com.br"
                    curriculo="http://lattes.cnpq.br/0910548803238254"
                    researchgate="https://www.researchgate.net/profile/Melissa-Moraes-5"
                    orcid="https://orcid.org/0000-0002-3531-7337"
                />
                <Equipe
                    nome="Gizela Maria de Araújo Sousa"
                    funcao="Mestranda em Agroenergia Digital"
                    foto="images/equipe/Gizela.jpeg"
                    enail="gizasousa@uft.edu.br"
                    curriculo="https://lattes.cnpq.br/7890314400119083"
                    researchgate="https://www.Researchgate.net/profile/Gizela-Maria-Araujo-Sousa"
                    orcid="https://orcid.org/0000-0001-6595-8533"
                />
                <Equipe
                    nome="Ivo Pontes Araújo"
                    funcao="Mestrando em Agroenergia Digital"
                    foto="images/equipe/Ivo.jpeg"
                    enail="ivo.pontes@uft.edu.br"
                    curriculo="http://lattes.cnpq.br/9720886435430649"
                    researchgate="https://www.researchgate.net/profile/Ivo-Pontes-Araujo"
                    orcid="https://orcid.org/0000-0002-7216-3656"
                />
                <Equipe
                    nome="Lucas Teixeira Siriano"
                    funcao="Graduando em Medicina"
                    foto="images/equipe/Lucas.jpeg"
                    enail="lucas33med@gmail.com"
                    curriculo="http://lattes.cnpq.br/1001187736881854"
                />
                <Equipe
                    nome="Renata Alcanfor Concentino"
                    funcao="Aluna de Iniciação Científica"
                    foto="images/equipe/Renata.jpeg"
                    enail="renata.concentino@mail.uft.edu.br"
                    curriculo="http://lattes.cnpq.br/4332321617483500"
                />
                <Equipe
                    nome="Edson Almeida Silva Júnior"
                    funcao="Aluno de Iniciação Científica"
                    foto="images/equipe/Edson.jpeg"
                    enail="junior.edson@uft.edu.br"
                    curriculo="https://lattes.cnpq.br/8250178537011574"
                    researchgate="https://www.researchgate.net/profile/Edson-Junior-43"
                    orcid="https://orcid.org/0009-0002-4258-0480"
                />
            </div>
        </div>
    );
};

export default Team;
