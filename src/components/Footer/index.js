import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsChevronDoubleUp } from 'react-icons/bs';

export default function Footer() {
    return (
        <div className="container">
            <a href="#sobremim" className="return-top">
                <BsChevronDoubleUp size="22px" />
            </a>
            <div className="footer-container"> 
                <div className="row">
                    <div className="col-12 d-flex flex-column justify-content-center align-items-center" >
                        <div className="footer-links">
                            <a 
                                href="https://instagram.com/decarvalhosoniaaparecida?utm_medium=copy_link" 
                                className="footer-icon-bg"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <AiFillInstagram size={42}/> 
                            </a>
                            <a 
                                href="http://lattes.cnpq.br/7869643396183113" 
                                className="footer-icon-bg"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <div id="footer-lattes-icon"/>
                            </a>
                            <a 
                                href="https://br.linkedin.com/in/sonia-aparecida-de-carvalho-7357b692" 
                                className="footer-icon-bg" 
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <AiFillLinkedin size={40}/>
                            </a>
                        </div>
                        <div className="footer-text">
                            Sonia de Carvalho. Todos os direitos reservados.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
