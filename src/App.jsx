import { useState } from "react";
import { Fundation } from "./components/Fundation/Fundation";
import { Header } from "./components/Header/Header";
import { Modals } from "./components/Modals/Modals";
import { ThemeContext } from "./context/useContext";
import { Questions } from "./components/Questions/Questions";
import { Request } from "./components/Request/Request";
import { Footer } from "./components/Footer/Footer";


export const App = () => {

  const [openModal, setOpenModal] = useState(0);

  return (
    <ThemeContext.Provider value={{
      openModal,
      setOpenModal,
    }}>
      <Header />
      <Fundation />
      <Questions />
      <Request />
      <Footer />
      <Modals />
    </ThemeContext.Provider>
  )
}

