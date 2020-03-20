import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Event from "../components/event"

import Masia from "../components/assets/masia.svg"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Event
      id="evento"
      title="LA PRE-BODA"
      desc="Para calentar motores y dar la bienvenida a los que vienen de fuera"
      img={<Masia/>}
      infoTitle="Comida de bienvenida"
      schedule="13:30h, Jueves 15 de Octubre de 2020"
      location="Cabrils"
      address="Passatge Sant Joan, 08348 Cabrils, Barcelona"
      mobility="Se facilitará servicio de autocar desde el centro de Barcelona a la casa de Cabrils y de regreso."
      map="Mapa e indicaciones"
      mapLink=""
    />
    <Event
      id="evento"
      title="LA BODA"
      desc="¡El gran día!"
      img={<Masia/>}
      infoTitle="La Ceremonia"
      schedule="12:30h, Sábado, 17 de Octubre de 2020"
      location="Basílica de los Santos Mártires Justo y Pastor"
      address="Plaça de Sant Just, s/n, 08002 Barcelona"
      mobility="Se facilitará servicio de autocar desde el centro de Barcelona a la Iglesia y, después de la ceremonia, desde la Iglesia a la Masía Ribas."
      map="Mapa e indicaciones"
      mapLink=""
    />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
