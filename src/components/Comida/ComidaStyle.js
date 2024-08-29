import styled from "styled-components";

export const ComidaContainer = styled.div`
  padding: 20px;
  color: #fff;
  text-align: center;

  header {
    margin-bottom: 20px;

    h2 {
      font-size: 2.5em;
      margin-bottom: 10px;
      color: #ffcc00;
      font-family: "Courier New", Courier, monospace;
    }

    p {
      font-size: 1.2em;
    }
  }

  nav {
    margin-bottom: 20px;

    ul {
      display: flex;
      justify-content: center;
      gap: 10px;
      list-style: none;
      padding: 0;

      li {
        margin: 0 5px;
      }
    }
  }

  h3 {
    font-size: 2em;
    margin-bottom: 20px;
    color: #ffcc00;
  }

  /* Diseño móvil */
  @media (max-width: 768px) {
    nav ul {
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }

    nav li {
      margin: 0;
    }

    CategoriaLink {
      font-size: 1em;
      padding: 8px 15px;
    }

    Grid {
      gap: 15px;
    }

    Card {
      width: 100%;
      max-width: 300px;
      height: auto;
    }
  }
`;

export const CategoriaLink = styled.a`
  cursor: pointer;
  color: ${(props) => (props.active ? "#ffcc00" : "#fff")};
  text-decoration: none;
  font-size: 1.2em;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #444;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const Card = styled.div`
  background: #444;
  border-radius: 8px;
  overflow: hidden;
  width: 250px;
  height: 350px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s;
`;

export const Info = styled.div`
  padding: 15px;
  text-align: left;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  opacity: 0; /* Oculta el texto por defecto */
  transition: opacity 0.3s;
  z-index: 2; /* Asegura que el texto esté sobre la imagen */

  ${Card}:hover & {
    opacity: 1; /* Muestra el texto al hacer hover */
  }
`;

export const Title = styled.h3`
  font-size: 1.5em;
`;

export const Description = styled.p`
  margin: 0 0 10px 0;
`;

export const Price = styled.span`
  font-size: 1.2em;
  font-weight: bold;
  color: #ffcc00;
`;
