import { FundationContent } from "../../styles/FundationStyle";
import { Images } from "../Functions/Images";
import logo from '../../assets/logos/logowb.svg';
import plus from '../../assets/icons/plus.svg';
import { useContext } from "react";
import { ThemeContext } from "../../context/useContext";
import { useEffect } from "react";

export const Fundation = () => {

    const { openModal, setOpenModal } = useContext(ThemeContext)

    useEffect(() => {

        if (openModal == !undefined) {
            document.body.classList.add('block-scroll');
        } else {
            document.body.classList.remove('block-scroll');
        }

    })

    useEffect(() => {

    }, [openModal])

    return (
        <FundationContent>
            <main>
                <div className="boxes">
                    <div className="box">
                        <div className="text">
                            <br />
                        </div>
                        <div className="text">
                            <h1>FUNDACIÓN <strong>INIRO</strong></h1>
                            <h3>Conoce nuestros programas <strong>odontológicos</strong></h3>
                        </div>
                        <div className="text">
                            {Images(logo)}
                            <p>Entendemos que la salud oral es uno de los pilares de tu <strong>salud integral, por eso estamos comprometidos a ayudarte.</strong></p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-items">
                            <div className="text">
                                <div className="img" onClick={() => setOpenModal(1)}>
                                    {Images(plus)}
                                </div>
                                <div className="txt">
                                    <h3>Nuestros Programas</h3>
                                </div>
                            </div>
                        </div>
                        <div className="box-items">
                            <div className="text">
                                <div className="img" onClick={() => setOpenModal(2)}>
                                    {Images(plus)}
                                </div>
                                <div className="txt">
                                    <h3>Quiénes somos</h3>
                                </div>
                            </div>
                        </div>
                        <div className="box-items">
                            <div className="items">
                                <h3>Misión</h3>
                                <div onClick={() => setOpenModal(3)}>
                                    {Images(plus)}
                                </div>
                            </div>
                            <div className="items">
                                <h3>Compromiso</h3>
                                <div onClick={() => setOpenModal(4)}>
                                    {Images(plus)}
                                </div>
                            </div>
                            <div className="items">
                                <h3>Modelo de acción</h3>
                                <div onClick={() => setOpenModal(5)}>
                                    {Images(plus)}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </FundationContent>
    )
}
