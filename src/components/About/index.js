import React from 'react';
import Typewriter from 'typewriter-effect';
import { CgMouse } from 'react-icons/cg';
import { BsHandIndexFill } from 'react-icons/bs';
import { BsChevronDoubleDown } from 'react-icons/bs';

export default function About() {
    return (
        <div>
            <div className="about-bg"/>
            <div className="bg-overlay"/>
            <div className="container">
                <div className="about-container" id="sobremim">
                    <div className="photo-container">
                        <div className="photo-circle"/>
                    </div>
                    <div className="about-main">
                        <h2>Profª. Dra.</h2>
                        <h1>SONIA A. DE CARVALHO</h1>
                        <div className="typing-text">
                            <div className="static-text">Consultoria em </div>
                            <Typewriter
                                options={{
                                    strings: [
                                        "artigos", 
                                        "TCCs", 
                                        "resumos", 
                                        "projeto de pesquisa", 
                                        "trabalho acadêmico",
                                        "currículo Lattes"
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="contact-bt-container">
                    <a href="#contato">CONTATO</a>
                </div>
                <div className="mouse-scroll" id="consultoria">
                    <CgMouse size="26px" className="mouse-icon"/>
                    <BsHandIndexFill size="22px" className="hand-icon"/>
                    <BsChevronDoubleDown size="18px" />
                </div>
            </div>
        </div>
    )
}
