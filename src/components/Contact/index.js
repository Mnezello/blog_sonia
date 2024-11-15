import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import Loader from '../Loader';
import { Waypoint } from 'react-waypoint';
import { useForm } from 'react-hook-form';
import { FiAlertCircle } from 'react-icons/fi';
import { BsCheck2All } from 'react-icons/bs';
import { FiAlertTriangle } from 'react-icons/fi';

export default function Contact() {

    const [loader, setLoader] = useState(false);

    const [mailSent, setMailSent] = useState(false);

    const [mailError, setMailError] = useState(false);

    const { 
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({
        mode: 'onChange',
    });

    const API_PATH = 'https://www.soniadecarvalho.com.br/api/controllers/controllerForm.php';

    const onSubmit = (data) => {
        
        console.log(data);

        setLoader(true);
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: data
        })
        .then(result => {
            //success
            setLoader(false);
            setMailSent(true);
            console.log(result);
            reset();
        })
        .catch(error => {
            //error
            setLoader(false);
            setMailError(true);
            console.log(error);
        }); 
    };

    return (
        <div className="container">
            <div className="contact-container">
                <h1>Contato</h1>
                <Waypoint onEnter={()=> Array.from(document.querySelectorAll(".contact-form")).forEach(el => el.classList.add("enhanced"))}/>
                <div className="row">
                    <div className="col-12">
                        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className={errors.name ? "contact-input-error" : "contact-input"} 
                                type="text" 
                                placeholder="Nome"
                                {...register("name", { 
                                    required: "Insira o seu nome", 
                                    maxLength: {
                                        value: 60,
                                        message: "Insira no máximo 60 caracteres"
                                    },  
                                    pattern: {
                                        value: /^[a-zA-Z,.?!$ ãâáõôóíçéúàÀÁÉÍÓÚÃÕ]+$/i,
                                        message: "Deve conter apenas letras"
                                    }
                                })}
                            />
                            <div className={errors.name ? "input-error" : ""}>
                                {errors.name && <FiAlertCircle className="error-icon"/>}
                                {errors.name && errors.name.message}
                            </div>

                            <input
                                    className={errors.email ? "contact-input-error" : "contact-input"} 
                                type="email"
                                placeholder="E-mail" 
                                {...register("email", {
                                    required: "Insira o seu e-mail",
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                        message: "E-mail inválido"
                                    } 
                                })}
                            />
                            <div className={errors.email ? "input-error" : ""}>
                                {errors.email && <FiAlertCircle className="error-icon"/>}    
                                {errors.email && errors.email.message}
                            </div>

                            <textarea
                                className={errors.text ? "contact-input-message-error" : "contact-input-message"} 
                                type="text"
                                placeholder="Mensagem"  
                                {...register("text", { 
                                    required: "Digite sua mensagem",
                                    maxLength: {
                                        value: 250,
                                        message: "Insira no máximo 500 caracteres"
                                    },  
                                    pattern: {
                                        value: /^[a-zA-Z,.0-9;?!"'$ ãâáõôóíçéúàÀÁÉÍÓÚÃÕ]+$/i,
                                        message: "Deve conter apenas letras e pontuação"
                                    }
                                })}                                    
                            />
                            <div className={errors.text ? "input-error" : ""}>
                                {errors.text && <FiAlertCircle className="error-icon"/>} 
                                {errors.text && errors.text.message}
                            </div>

                            <button
                                className="input-submit" 
                                type="submit"
                                placeholder="ENVIAR"
                            >
                                ENVIAR
                            </button>
                        </form>

                        <Modal
                            className="contact-modal"
                            ariaHideApp={false}
                            isOpen={loader}
                            onRequestClose={() => setLoader(!loader)}
                            >
                            <Loader />
                        </Modal>
                        
                        <Modal
                            className="contact-modal"
                            ariaHideApp={false}
                            isOpen={mailSent}
                            onRequestClose={() => setMailSent(!mailSent)}
                            >
                            <div className="modal-container">
                                <h2 className="success-title"><BsCheck2All/> Mensagem enviada com sucesso!</h2>
                                <p>Em breve responderemos para o seu e-mail, obrigada.</p>
                                <button className="modal-close-button" onClick={() => setMailSent(!mailSent)}>OK</button>
                            </div>
                        </Modal>
                        
                        <Modal
                            className="contact-modal"
                            ariaHideApp={false}
                            isOpen={mailError}
                            onRequestClose={() => setMailError(!mailError)}
                            >
                            <div className="modal-container">
                                <h2 className="failure-title"><FiAlertTriangle size={26}/> Mensagem não enviada!</h2>
                                <p>Verifique sua conexão com a internet ou tente mais tarde.</p>
                                <button className="modal-close-button" onClick={() => setMailError(!mailError)}>OK</button>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}
