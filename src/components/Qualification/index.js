import React from 'react';
import { Waypoint } from 'react-waypoint';
import { RiBookMarkFill } from 'react-icons/ri';
import { RiBookFill } from 'react-icons/ri';
import { FaGraduationCap } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { FaWallet } from 'react-icons/fa';
import { RiPlantFill } from 'react-icons/ri';
import { FaBalanceScale } from 'react-icons/fa';

const qualifications = [
    { 
        key: 1, 
        icon: <RiBookMarkFill className="qualification-icon" size={54}/>, 
        title: <h2>Pós-Doutora em Direito</h2>, 
        institution: <p>URI - Universidade Regional Integrada do Alto Uruguai e das Missões</p>,
        location: <p>Santo Ângelo, RS</p> 
    },
    { 
        key: 2, 
        icon: <RiBookFill className="qualification-icon" size={54}/>,
        title: <h2>Doutora em Direito</h2>,
        institution: <p>UA - Universidade de Alicante</p>,
        location: <p>Alicante, Espanha</p>
    },
    { 
        key: 3, 
        icon: <RiBookFill className="qualification-icon" size={54}/>,
        title: <h2>Doutora em Direito</h2>, 
        institution: <p>UNIVALI - Universidade do Vale do Itajaí</p>,
        location: <p>Itajaí, SC</p> 
    },
    { 
        key: 4, 
        icon: <FaGraduationCap  className="qualification-icon" size={56}/>,
        title: <h2>Mestra em Direito</h2>,
        institution: <p>UNISC - Universidade de Santa Cruz do Sul</p>,
        location: <p>Santa Cruz do Sul, RS</p> 
    },
    { 
        key: 5, 
        icon: <MdWork  className="qualification-icon" size={54}/>, 
        title: <h2>Especialista em Direito do Trabalho</h2>, 
        institution: <p>UCB - Universidade Castelo Branco</p>, 
        location: <p>Rio de Janeiro, RJ</p>
    },
    { 
        key: 6, 
        icon: <FaWallet className="qualification-icon"size={48}/>,
        title: <h2>Especialista em Direito Previdênciário</h2>,
        institution: <p>UNOPAR - Universidade Norte do Paraná</p>,
        location: <p>Londrina, PR</p> 
    },
    { 
        key: 7, 
        icon: <RiPlantFill className="qualification-icon"size={54}/>, 
        title: <h2>Especialista em Direito Ambiental</h2>, 
        institution: <p>UNOPAR - Universidade Norte do Paraná</p>, 
        location: <p>Londrina, PR</p>
    },
    { 
        key: 8, 
        icon: <FaBalanceScale className="qualification-icon" size={54}/>, 
        title: <h2>Graduada em Direito</h2>,
        institution: <p>UPF - Universidade de Passo Fundo</p>,
        location: <p>Passo Fundo, RS</p>
    }
];

export default function Qualification() {
    return (
        <div className="qualification-bg">
            <div className="container">
                <div className="qualification-container">
                    <h1>Qualificações</h1>
                    <Waypoint onEnter={()=> Array.from(document.querySelectorAll(".qualification-item-even")).forEach(el => el.classList.add("enhanced"))}/>
                    <Waypoint onEnter={()=> Array.from(document.querySelectorAll(".qualification-item-odd")).forEach(el => el.classList.add("enhanced"))}/>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center flex-wrap">
                            {qualifications.map(item => 
                                (
                                    item.key % 2 === 0 
                                    ?
                                    <div key={item.key} className="qualification-item-even">
                                        <div className="qualification-content-even">
                                            {item.title}
                                            {item.institution}
                                            {item.location}
                                        </div>
                                        <div className="large-icon-bg">
                                            {item.icon}   
                                        </div>
                                    </div> 
                                    :
                                    <div key={item.key} className="qualification-item-odd">
                                        <div className="large-icon-bg">
                                            {item.icon}   
                                        </div>
                                        <div className="qualification-content-odd">
                                            {item.title}
                                            {item.institution}
                                            {item.location}
                                        </div>
                                    </div> 
                                )
                            )}
                        </div>
                    </div>
                </div>
                <div id="sugestoes"/>
            </div>
        </div>
    )
}
