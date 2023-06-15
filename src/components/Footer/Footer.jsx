import { Images } from "../Functions/Images";
import logo from '../../assets/logos/logowb.svg'
import { FooterContent } from "../../styles/Footer";

export const Footer = () => {

    const today = new Date()

    return (
        <FooterContent>
            <main>
                <div className="box">
                    <p>Copyright © {today.getFullYear()} | Fundación INIRO Todos los derechos reservados</p>
                </div>
                <div className="box">
                    {Images(logo)}
                </div>
            </main>
        </FooterContent>
    )
}
