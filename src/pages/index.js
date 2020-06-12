import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Divider from "../components/divider"
import Event from "../components/event"
import SingleEvent from "../components/single-event"
import Confirmation from "../components/confirmation"
import DressCode from "../components/dresscode"
import Guestbook from "../components/guestbook"
import Contact from "../components/contact"

import Masia from "../images/masia.png"
import Iglesia from "../images/iglesia.png"

export default () => {

  return (
    <Layout>
      <Hero />
      <Divider />
      {/* <Event
        id="evento"
        title="LA PRE-BODA"
        desc="Para calentar motores y dar la bienvenida a los que vienen de fuera"
        img={<img className="event-image" src={Masia}></img>}
        infoTitle="Comida de bienvenida"
        schedule="13:30h, Jueves 15 de Octubre de 2020"
        location="TBD"
        address=""
        mobility="Se facilitará servicio de autocar desde el centro de Barcelona y de regreso."
        map="Mapa e indicaciones"
        mapLink="https://www.google.com/maps/place/Passatge+Sant+Joan,+08348+Cabrils,+Barcelona/@41.5209197,2.3823943,17z/data=!3m1!4b1!4m5!3m4!1s0x12a4b4213b268661:0x3d904ff5ded2049c!8m2!3d41.5209203!4d2.3844475"
      /> */}
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
        mapLink="https://www.google.com/maps/place/Bas%C3%ADlica+dels+Sants+M%C3%A0rtirs+Just+i+Pastor/@41.3828179,2.1760105,17z/data=!3m1!4b1!4m5!3m4!1s0x12a4a2f8dc412f27:0x10cb34ec22f1c0e4!8m2!3d41.3828139!4d2.1782045"
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
        mapLink="https://www.google.com/maps/place/Masia+Ribas+ahora+es+La+Centenaria+1779+-+Unique+events/@41.3005078,1.995518,17z/data=!3m1!4b1!4m5!3m4!1s0x12a49d29b587cec7:0x13e5b9b43d7af993!8m2!3d41.3005038!4d1.997712"
      />
      <Confirmation />
      <DressCode />
      <Guestbook />
      <Contact />
    </Layout>
  )
}