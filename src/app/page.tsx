//Página principal
//Bienvenida, Menu, Call to action, Contacto/Footer

import Contacto from "@/components/contacto";
import CallToAction from "@/components/cta";
import Principal from "@/components/principal";
import Productos from "@/components/productos";

export default function Home() {
  return (
    <main className="main">
      <Principal />
      <Productos />
      <CallToAction />
      <Contacto />
    </main>
  );
}
