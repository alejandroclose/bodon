import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Event from "../components/event"
import SingleEvent from "../components/single-event"

import Masia from "../../public/static/masia.png"
import Iglesia from "../../public/static/iglesia.png"

export default () => {

  return (
    <Layout>
      <Hero />
      <Event
        id="evento"
        title="LA PRE-BODA"
        desc="Para calentar motores y dar la bienvenida a los que vienen de fuera"
        img={<img className="event-image" src={Masia}></img>}
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
        img={<img className="event-image" src={Iglesia}></img>}
        infoTitle="La Ceremonia"
        schedule="12:30h, Sábado, 17 de Octubre de 2020"
        location="Basílica de los Santos Mártires Justo y Pastor"
        address="Plaça de Sant Just, s/n, 08002 Barcelona"
        mobility="Se facilitará servicio de autocar desde el centro de Barcelona a la Iglesia y, después de la ceremonia, desde la Iglesia a la Masía Ribas."
        map="Mapa e indicaciones"
        mapLink=""
      />
      <SingleEvent
        id="evento"
        img={<img className="event-image" src={Masia}></img>}
        infoTitle="La Celebración"
        schedule="14:00h, Sábado, 17 de Octubre de 2020"
        location="Masía Ribas"
        address="Manuel Carrasco i Formiguera 08850 Gavà, Barcelona"
        mobility="Se facilitará servicio de autocar desde la Iglesia a la Masía Ribas y de regreso al centro de Barcelona a varias horas de la noche."
        map="Mapa e indicaciones"
        mapLink=""
      />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}