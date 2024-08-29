import * as s from "./ProductoStyled";
import { bebidasEspeciales } from "./arrProductos";

export const Productos = () => {
  return (
    <s.BebidasContainer id="Lab">
      <h2>Bebidas Especiales</h2>
      <s.BebidasGrid>
        {bebidasEspeciales.map((bebida, index) => (
          <s.BebidaCard key={index}>
            <s.BebidaImage
              src={bebida.image}
              alt={bebida.name}
              loading="lazy"
            />
            <s.BebidaInfo>
              <s.BebidaTitle>{bebida.name}</s.BebidaTitle>
              <s.BebidaDescription>{bebida.description}</s.BebidaDescription>
              <s.BebidaPrice>${bebida.price}</s.BebidaPrice>
            </s.BebidaInfo>
          </s.BebidaCard>
        ))}
      </s.BebidasGrid>
    </s.BebidasContainer>
  );
};
