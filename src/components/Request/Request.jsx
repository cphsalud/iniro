import { useRef } from "react";
import { RequestContent } from "../../styles/RequestStyle"
import emailjs from '@emailjs/browser'
import { useState } from "react";
import { Images } from "../Functions/Images";
import logo from '../../assets/logos/logowb.svg';
import { Spinner } from "../Loader/Spinner";

export const Request = () => {

    const form = useRef();

    const [status, setStatus] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [validate, setValidate] = useState(false);

    const sendEmail = (e) => {

        e.preventDefault();
        setValidate(true)
        emailjs.sendForm("service_vcyfz7c", "template_8rj7njx", form.current, 'r_hiB7WWTkcuYdfUr', {
            from_name: name,
            to_name: email,
            message: "asasdasdada",
        })
            .then((result) => {
                setStatus(result.status)
                setValidate(false)
            }, (error) => {
                console.log(error.text);
            });
    }



    return (
        <RequestContent id="postular">
            <main>
                <div className="box">
                    <h1>Requisitos para postular</h1>
                    <ul>
                        <li>
                            <h3>
                                Salud general compatible con procedimientos quirúrgicos
                            </h3>
                        </li>
                        <li>
                            <h3>
                                Salud oral adecuada para la instalación de los implantes
                            </h3>
                        </li>
                        <li>
                            <h3>
                                No fumar
                            </h3>
                        </li>
                    </ul>
                </div>
                <div className="box">
                    <div className="form-content">
                        {status === 200 ? (
                            <>
                                <div className="panel-form">
                                    <div className="panel-content">
                                        <h1>Mensaje enviado</h1>
                                        {Images(logo)}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="title">Postular</div>
                                    <div className="items">
                                        <input type="text" name="to_name" onChange={(e) => setName(e.target.value)} placeholder="Nombre y apellido" id="" required />
                                    </div>
                                    <div className="items">
                                        <input type="email" name="from_name" onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico" id="" required />
                                    </div>
                                    <div className="items">
                                        <input type="text" name="to_name" placeholder="Teléfono" id="" required />
                                    </div>
                                    <div className="items">
                                        <p>¿Por qué te gustaría postular a nuestros programas?</p>
                                        <textarea name="message" cols="30" placeholder="Escribe aquí" rows="10"></textarea>
                                    </div>
                                    <button type="submit" style={(validate === true) ? { 'background': '#ffba19' } : null} value="Send">{(validate === true) ? <Spinner /> : 'Enviar postulación'}</button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </main>
        </RequestContent>
    )
}
