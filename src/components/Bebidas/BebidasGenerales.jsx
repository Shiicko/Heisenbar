import { productos } from "../Products/arrProductos";
import * as s from "./BebidasGeneralesStyle";

export const BebidasGenerales = () => {
  // Filtra solo las cervezas
  const cervezas = productos.filter(
    (producto) => producto.category === "Bebida Cervezas"
  );

  return (
    <s.CervezasContainer>
      <h2>Cervezas</h2>
      <s.CervezasGrid>
        {cervezas.map((cerveza) => (
          <s.CervezaCard key={cerveza.id}>
            <s.CervezaImage src={cerveza.image} alt={cerveza.name} />
            <s.CervezaInfo>
              <s.CervezaTitle>{cerveza.name}</s.CervezaTitle>
              <s.CervezaDescription>{cerveza.description}</s.CervezaDescription>
              <s.CervezaPrice>${cerveza.price}</s.CervezaPrice>
            </s.CervezaInfo>
          </s.CervezaCard>
        ))}
      </s.CervezasGrid>
    </s.CervezasContainer>
  );
};
