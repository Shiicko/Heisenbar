import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: black;
  color: #fff;
  padding: 20px;
  text-align: center;
  position: relative;
  bottom: 0;
  width: auto;
  margin-top: 60px;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const Location = styled.div`
  h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
    color: #ffcc00;
    font-family: "Courier New", Courier, monospace;
  }

  p {
    font-size: 1.1em;
    margin: 0;
  }
`;

export const Contact = styled.div`
  h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
    color: #ffcc00;
    font-family: "Courier New", Courier, monospace;
  }

  p {
    font-size: 1.1em;
    margin: 0;
  }

  a {
    font-size: 1.2em;
    color: #ffcc00;
    text-decoration: none;
    display: block;
    margin-top: 10px;
    transition: color 0.3s;

    &:hover {
      color: #e5e5e5;
    }
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #444;
  padding-top: 10px;
  font-size: 0.9em;

  p {
    margin: 0;
  }
`;

export const FooterNav = styled.nav`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
`;

export const FooterLink = styled.a`
  color: #ffcc00;
  text-decoration: none;
  font-size: 1.2em;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #444;
  }
`;
