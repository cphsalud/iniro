import { QuestionsContent } from "../../styles/QuestionStyle";
import { Images } from "../Functions/Images";
import arrow from '../../assets/icons/arrow.svg'
import minus from '../../assets/icons/minus.svg'
import { useState } from "react";

export const Questions = () => {

    const [openCollapse, setOpenCollapse] = useState(0)
    const [openCollapseTwo, setOpenCollapseTwo] = useState(0)
    const [openCollapseThree, setOpenCollapseThree] = useState(0)
    const [openCollapseFour, setOpenCollapseFour] = useState(0)
    const [openCollapseFive, setOpenCollapseFive] = useState(0)

    return (
        <QuestionsContent id="preguntas">
            <main>
                <div className="title">
                    <h1>Preguntas frecuentes</h1>
                </div>
                <div className="question-wrap">
                    <div className="item">
                        <div className="title-item">
                            <p>¿De qué son los implantes?</p>
                            <div className="img">
                                {openCollapse === 0 ? (
                                    <div onClick={() => setOpenCollapse(1)}>{Images(arrow)}</div>
                                ) : (
                                    <div onClick={() => setOpenCollapse(0)}>{Images(minus)}</div>
                                )}
                            </div>
                        </div>
                        <div className="txt-1 animate__animated animate__fadeIn" style={openCollapse === 1 ? { 'maxHeight': '400px' } : null}>
                            <p>
                                Los implantes están hechos de <strong>titanio,</strong> metal <strong>biocompatible,</strong> que
                                permite que el <strong>hueso se adhiera y se integre</strong> bien a su superficie,
                                otorgándole gran <strong>estabilidad y resistencia.</strong>
                            </p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="title-item">
                            <p>¿De qué material es la corona del implante?</p>
                            <div className="img">
                                {openCollapseTwo === 0 ? (
                                    <div onClick={() => setOpenCollapseTwo(1)}>{Images(arrow)}</div>
                                ) : (
                                    <div onClick={() => setOpenCollapseTwo(0)}>{Images(minus)}</div>
                                )}
                            </div>
                        </div>
                        <div className="txt-2" style={openCollapseTwo === 1 ? { 'maxHeight': '3000px' } : null}>
                            <p>
                                Los técnicos dentales del laboratorio de <strong>CPH Salud</strong> realizan las coronas en un material llamado disilicato de litio de la marca <strong>Rosetta (certificada por la FDA y CE).</strong> Es un material cerámico que tiene excelentes propiedades estéticas y de resistencia.
                            </p>

                        </div>
                    </div>
                    <div className="item">
                        <div className="title-item">
                            <p>¿En cuánto tiempo estará listo mi implante?</p>
                            <div className="img">
                                {openCollapseThree === 0 ? (
                                    <div onClick={() => setOpenCollapseThree(1)}>{Images(arrow)}</div>
                                ) : (
                                    <div onClick={() => setOpenCollapseThree(0)}>{Images(minus)}</div>
                                )}
                            </div>
                        </div>
                        <div className="txt-3" style={openCollapseThree === 1 ? { 'maxHeight': '1000px' } : null}>
                            <p>
                                El proceso de colocación del implante se divide en <strong>5 etapas,</strong> que
                                culminan alrededor de <strong>4 meses</strong> después de la cirugía de instalación del
                                implante.
                            </p>

                            <ul>
                                <li>
                                    <p><strong>Evaluación clínica inicial:</strong> para determinar que tu salud oral esté en excelentes condiciones e indicarte un scanner 3D para evaluar tu cantidad de hueso.</p>
                                </li>
                                <li>
                                    <p>
                                        <strong>Etapa quirúrgica:</strong> cirugía mínimamente invasiva, bajo anestesia local. Al finalizar se te indicará volver a control post-operatorio en 7 días más y luego a 3 controles mensuales.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>Etapa de conexión:</strong> al cumplirse el 3er mes de la cirugía te tomaremos una Rx panorámica de control y se realizará una pequeña incisión bajo anestesia local para exteriorizar la parte superior del implante y colocar un aditamento metálico llamado “pilar de cicatrización” que ayudará a que la encía cicatrice con una forma estética y natural, para que nadie note que llevas un implante.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>Etapa de rehabilitación:</strong> 7 o 10 días después, se tomarán moldes de tus dientes y del implante que serán enviados a nuestro laboratorio donde fabricarán la corona dental final.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>Etapa de instalación de la corona final:</strong> luego de algunas pruebas enviadas por el laboratorio se comprobará que la corona cumpla con la estética y la función esperadas, de ser así se instalará, con lo que podrás sonreír y masticar con confianza.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="item">
                        <div className="title-item">
                            <p>¿Como debo cuidar mis implantes?</p>
                            <div className="img">
                                {openCollapseFour === 0 ? (
                                    <div onClick={() => setOpenCollapseFour(1)}>{Images(arrow)}</div>
                                ) : (
                                    <div onClick={() => setOpenCollapseFour(0)}>{Images(minus)}</div>
                                )}
                            </div>
                        </div>
                        <div className="txt-4" style={openCollapseFour === 1 ? { 'maxHeight': '400px' } : null}>
                            <ul>
                                <li>
                                    <p>
                                        Lo más importante es tener una excelente higiene oral: cepillar tus dientes e implantes después de cada comida y usar hilo dental todos los días.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Acudir a controles odontológicos y limpiezas al menos
                                        cada 6 meses.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        No abrir cosas con los dientes.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Evitar fumar.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Usar plano de estabilización oclusal si sufres de apretamiento dentario.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>Presta atención a señales de alerta:</strong> si sientes dolor, inflamación o sensibilidad en la zona del implante, o si sientes que el implante se mueve o afloja, debes acudir con tu dentista de inmediato.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="item">
                        <div className="title-item">
                            <p>¿Ofrecen algún tipo de garantía?</p>
                            <div className="img">
                                {openCollapseFive === 0 ? (
                                    <div onClick={() => setOpenCollapseFive(1)}>{Images(arrow)}</div>
                                ) : (
                                    <div onClick={() => setOpenCollapseFive(0)}>{Images(minus)}</div>
                                )}
                            </div>
                        </div>
                        <div className="txt-2" style={openCollapseFive === 1 ? { 'maxHeight': '3000px' } : null}>
                            <p>
                                Las garantías de la cirugía de implantes son otorgadas por la
                                clínica que presta el servicio de implantología, que en este caso
                                son nuestros amigos de Cph Salud.
                            </p>
                            <p>
                                Para más información visita su sitio web haciendo clic <a href="https://cphsalud.cl/informacion-paciente" target="_blank" rel="noreferrer">aquí</a>
                            </p>

                        </div>
                    </div>
                </div>
            </main>
        </QuestionsContent>
    )
}
