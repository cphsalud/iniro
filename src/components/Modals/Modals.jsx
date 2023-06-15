import { ModalContent } from "../../styles/Modal"
import { useEffect } from "react"
import { useContext } from "react"
import { ThemeContext } from "../../context/useContext"
import { Images } from "../Functions/Images"
import fonasa from '../../assets/logos/fonasa.svg'
import close from '../../assets/icons/close.svg'

export const Modals = () => {

    const { openModal, setOpenModal } = useContext(ThemeContext);

    useEffect(() => {

    }, [openModal])

    return (
        <>
            {(openModal === 1 || openModal === 2 || openModal === 3 || openModal === 4 || openModal === 5) ? (
                <ModalContent>
                    <div className="bg" onClick={() => setOpenModal(undefined)}></div>
                    <div className="card">
                        <div className="close">
                            <div onClick={() => setOpenModal(undefined)}>
                                {Images(close)}
                            </div>
                        </div>
                        <div className="title-card">

                            {openModal === 1 ? (
                                <h1>Nuestros Programas</h1>
                            ) : null}

                            {openModal === 2 ? (
                                <h1>Quiénes somos</h1>
                            ) : null}

                            {openModal === 3 ? (
                                <h1>Misión</h1>
                            ) : null}

                            {openModal === 4 ? (
                                <h1>Compromiso</h1>
                            ) : null}

                            {openModal === 5 ? (
                                <h1>Modelo de acción</h1>
                            ) : null}

                        </div>
                        <div className="text">
                            {openModal === 1 ? (
                                <>
                                    <h4>Programa Nacional de <strong>Implantología</strong></h4>
                                    <p>El programa se basa en la <strong>instalación de 1 a 4 implantes rehabilitados con sus coronas,</strong> excluyendo cirugías complementarias, como por ejemplo injertos de hueso.</p>
                                    <p>El implante unitario con su corona tendrá un valor de $390.000 (máximo 4 unidades por persona).</p>
                                    <p>La garantía será otorgada por la clínica responsable de entregar el programa.</p>
                                    <h4>Beneficios del programa</h4>
                                    <p>Trabajamos con <strong>implantes certificados por la FDA y CE (marcas MegaGen y NeoBiotech)</strong> y con coronas de <strong>disilicato de litio,</strong> material que otorga  <strong>alta estética y gran resistencia</strong> (marca Rosetta-HassBio, certificada por la FDA).</p>
                                    <p>Nuestro compromiso es ofrecer una <strong>atención odontológica óptima</strong> basada en insumos y tecnología con <strong>altos estándares de calidad,</strong> de la mano de profesionales con <strong>vasta experiencia.</strong></p>
                                    <h4>Programa Nacional de Sobredentaduras</h4>
                                    <p>Este programa consiste en la <strong>instalación de 2 implantes certificados</strong> por la FDA y CE <strong>(marcas MegaGen y NeoBiotech)</strong>  con el objeto de mejorar la <strong>retención</strong> de <strong>prótesis totales inferiores</strong> (mandíbula) que <strong>ya posee</strong> el paciente.</p>
                                    <p>Nuestro compromiso es ofrecer una atención odontológica óptima basada en insumos y tecnología con altos estándares de calidad, de la mano de profesionales con vasta experiencia.</p>
                                    <p>Antes de la instalación de los implantes se debe <strong>verificar el estado de la prótesis</strong> inferior, para asegurarnos que esté en <strong>buenas condiciones</strong> para el procedimiento.</p>
                                    <h4>¿A quién van dirigidos nuestros programas?</h4>
                                    <p>Personas <strong>mayores de 18 años</strong> que sean beneficiarios de <strong>FONASA.</strong></p>
                                    {Images(fonasa)}
                                </>
                            ) : null}

                            {openModal === 2 ? (
                                <>
                                    <p>Fundación privada <strong>sin fines de lucro,</strong> destinada a ser motivo de alegrías en base al <strong>desarrollo de programas de odontología social</strong> para los diversos sectores del país.</p>
                                    <p>Fomentamos la <strong>atención</strong> en las áreas de <strong>implantología y rehabilitación oral.</strong> Desarrollando actividades informativas sobre salud dental para la sociedad.</p>
                                </>
                            ) : null}

                            {openModal === 3 ? (
                                <>
                                    <p><strong>INIRO</strong> nace gracias a un grupo de <strong>profesionales que detectaron una necesidad real</strong> en un segmento de la población asociado a <strong>sectores vulnerables</strong> los que muchas veces <strong>no cuentan con las condiciones económicas</strong> necesarias para poder acceder a la salud dental privada.</p>
                                    <p><strong>Nuestro desafío</strong> constante es lograr <strong>devolver la sonrisa y la confianza</strong> a todas las personas que han visto afectada su salud bucal por diferentes circunstancias.</p>
                                </>
                            ) : null}

                            {openModal === 4 ? (
                                <>
                                    <p>Nos comprometemos a <strong>entregar orientación a cada uno de nuestros pacientes,</strong> no solo clínica si no también psicológica y humana.</p>
                                    <p><strong>Garantizamos</strong> además una atención odontológica <strong>óptima</strong> basada en insumos y <strong>tecnología</strong> con altos estándares de <strong>calidad,</strong> de la mano de profesionales con <strong>vasta experiencia.</strong></p>
                                </>
                            ) : null}

                            {openModal === 5 ? (
                                <>
                                    <p>Nuestro modelo de <strong>acción</strong> se sustenta en la <strong>alianza</strong> con el equipo de <strong>especialistas de la clínica dental Cph Salud,</strong> quienes cuentan con <strong>gran experiencia</strong> en las áreas de <strong>implantología y rehabilitación oral,</strong> además de una excelente <strong>calidad humana</strong> y cercanía.</p>
                                    <p>Actualmente la fundación lleva <strong>más de 3.500 implantes realizados</strong> exitosamente, logrando <strong>devolver sonrisas</strong> a nuestros beneficiarios y mejorando su <strong>calidad de vida.</strong></p>
                                </>
                            ) : null}

                        </div>
                    </div>
                </ModalContent>
            ) : null}
        </>
    )
}
