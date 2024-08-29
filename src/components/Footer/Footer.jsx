import { FaWhatsapp } from "react-icons/fa";
import * as s from "./FooterStyle";

export const Footer = () => {
  return (
    <s.FooterContainer id="Contact">
      <s.FooterContent>
        <s.Location>
          <h3>Ubicación</h3>
          <p>📍 Nva. Cba</p>
        </s.Location>
        <s.Contact>
          <h3>Reserva</h3>
          <p>Contáctanos por WhatsApp:</p>
          <a
            href="https://api.whatsapp.com/send?phone=5493512076995&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={30} color="#25D366" />
          </a>
        </s.Contact>
      </s.FooterContent>
      <s.FooterBottom>
        <s.FooterNav>
          <s.FooterLink href="#home">Inicio</s.FooterLink>
        </s.FooterNav>
        <p>
          &copy; {new Date().getFullYear()} Breaking Bar. Todos los derechos
          reservados.
        </p>
      </s.FooterBottom>
    </s.FooterContainer>
  );
};
