import { useState } from "react";
import { comida } from "../Comida/arrComida";
import * as s from "./ComidaStyle";

export const Comida = () => {
  const categorias = [
    "Menú Diario",
    "Menú Infantil",
    "Vegetarianos",
    "Platos Especiales",
  ];
  const [categoriaSeleccionada, setCategoriaSeleccionada] =
    useState("Menú Diario");

  const filtrarComida = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  return (
    <s.ComidaContainer>
      <header>
        <h2>Comida</h2>
        <p>Explora nuestra deliciosa selección de platos.</p>
      </header>

      <nav>
        <ul>
          {categorias.map((categoria) => (
            <li key={categoria}>
              <s.CategoriaLink
                href={`#${categoria.toLowerCase().replace(/ /g, "-")}`}
                onClick={() => filtrarComida(categoria)}
                active={categoriaSeleccionada === categoria}
              >
                {categoria}
              </s.CategoriaLink>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <h3>{categoriaSeleccionada}</h3>
        <s.Grid>
          {comida
            .filter((item) => item.category === categoriaSeleccionada)
            .map((item) => (
              <s.Card key={item.id}>
                <s.Image src={item.image} alt={item.name} />
                <s.Info>
                  <s.Title>{item.name}</s.Title>
                  <s.Description>{item.description}</s.Description>
                  <s.Price>${item.price}</s.Price>
                </s.Info>
              </s.Card>
            ))}
        </s.Grid>
      </div>
    </s.ComidaContainer>
  );
};

export default Comida;
