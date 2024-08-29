import * as s from "./HeaderStyled";

export const Header = () => {
  return (
    <>
      <s.HeaderContainer>
        <s.Logo>
          <img src="/heisen.png" alt="Breaking Bar Logo" />
        </s.Logo>
        <s.NavLinks>
          <a href="#home">Inicio</a>
          <a href="#Lab">Lab</a>
          <a href="#Contact">Reserva</a>
        </s.NavLinks>
      </s.HeaderContainer>
    </>
  );
};
