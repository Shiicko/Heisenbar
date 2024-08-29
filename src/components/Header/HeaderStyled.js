import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #0c0c0c69;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Logo = styled.div`
  img {
    height: 50px;
  }
`;

export const NavLinks = styled.nav`
  a {
    color: #fff;
    text-decoration: none;
    margin: 0 15px;
    font-size: 1em;
    transition: background-color 0.3s ease, padding 0.3s ease,
      border-radius 0.3s ease;

    &:hover {
      background-color: #ffcc00;
      padding: 10px;
      border-radius: 10px;
    }
  }
  @media (max-width: 768px) {
    a {
      display: none;
    }
  }
`;
