import React from "react";
import Title from "../../components/Title";
import Faces from "../../components/faces";
import Icons from "../../components/Icons";
import Maps from "../../components/Maps";
import "./contact.css";

const Contato = () => {
    return (
        <div className="container-contact">
            <Title title="Como você prefere falar com a gente?" />
            <div className="contact-faces">
                <Faces foto="images/equipe/Gessi.jpeg" />
                <Faces foto="images/equipe/Horllys.jpeg" />
                <Faces foto="images/equipe/Karolyne.jpeg" />
                <Faces foto="images/equipe/Matheus.jpeg" />
                <Faces foto="images/equipe/Roney.jpeg" />
            </div>
            <Icons />
            <div className="contact-find">
                <p>Nos Encontre</p>
            </div>
            <div className="contact-map">
                <Maps />
            </div>
        </div>
    );
};

export default Contato;
