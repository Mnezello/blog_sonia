import React from 'react';
import { Waypoint } from 'react-waypoint';
import { IoIosPaper } from 'react-icons/io';
import { IoSchoolSharp } from 'react-icons/io5';
import { ImSearch } from 'react-icons/im';
import { GiOpenBook } from 'react-icons/gi';

const services = [
    { key: 1, icon: <IoIosPaper className="service-icon" size={40}/>, description: "Artigos científicos, TCCs, monografias, resumos, resenhas, papers e posters" },
    { key: 2, icon: <IoSchoolSharp className="service-icon" size={42}/>, description: "Projetos de pesquisa de mestrado, doutorado e pós doutorado" },
    { key: 3, icon: <ImSearch className="service-icon" size={40}/>, description: "Revisão ortográfica e gramatical de trabalhos acadêmicos" },
    { key: 4, icon: <div id="abnt-icon"/>, description: "Correção e formatação conforme normas da ABNT" },
    { key: 5, icon: <div id="lattes-icon"/>, description: "Preenchimento do currículo lattes" },
    { key: 6, icon: <GiOpenBook className="service-icon" size={42}/> , description: "Indicação de obras literárias e autores" }
];

export default function Consultancy() {
    return (
        <div className="consultancy-bg">
            <div className="container">
                <div className="consultancy-container">
                    <h1>Consultoria</h1>
                    <Waypoint onEnter={()=> Array.from(document.querySelectorAll(".consultancy-item")).forEach(el => el.classList.add("enhanced"))}/> 
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center flex-wrap" >
                            {services.map(item => (
                                <div key={item.key} className="consultancy-item">
                                    <div className="icon-bg">
                                        {item.icon}   
                                    </div>
                                    <div className="service-description">
                                        {item.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div id="qualificacoes"/>
        </div>
    )
}
