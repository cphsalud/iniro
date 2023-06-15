import { HeaderContent } from "../../styles/HeaderStyle";
import { Images } from "../Functions/Images";
import { ButtonWs } from "../../styles/Buttons/ButtonWs";
import logo from '../../assets/logos/logo.svg';
import ws from '../../assets/icons/ws.svg';


export const Header = () => {
    return (
        <HeaderContent>
            <main>
                <nav>
                    <div className="logo">
                        <a href="/">
                            {Images(logo)}
                        </a>
                    </div>
                    <ul>
                        <li>
                            <a href="#preguntas">
                                <p>Preguntas frecuentes</p>
                            </a>
                        </li>
                        <li>
                            <a href="#postular">
                                <p>Postular</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/56962077579" target="_blank" rel="noreferrer">
                                <ButtonWs>Contacto {Images(ws)}</ButtonWs>
                            </a>
                        </li>
                    </ul>
                </nav>
            </main>
        </HeaderContent>
    )
}
