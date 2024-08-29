import { BebidasGenerales } from "./components/Bebidas/BebidasGenerales";
import { Comida } from "./components/Comida/Comida";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Productos } from "./components/Products/Productos";

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Productos />
      <BebidasGenerales />
      <Comida />
      <Footer />
    </>
  );
};
