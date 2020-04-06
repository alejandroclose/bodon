import React, { useContext, useState } from "react"
import { useFormik } from "formik"
import gql from "graphql-tag"
import { useMutation } from "@apollo/react-hooks"

import "./attendee-form.css"

const ADD_ATTENDEE = gql`
  mutation addAttendee(
    $name: String!
    $preboda: Boolean
    $autocar: Boolean
    $boda: Boolean
    $noviene: Boolean
    $plusone: String
    $food: String
    $otros: String
  ) {
    addAttendee(
      name: $name
      preboda: $preboda
      autocar: $autocar
      boda: $boda
      noviene: $noviene
      plusone: $plusone
      food: $food
      otros: $otros
    ) {
      id
      name
    }
  }
`

const AtendeeForm = () => {
  const [addAttendee, { data }] = useMutation(ADD_ATTENDEE)

  const formik = useFormik({
    initialValues: {
      name: "",
      preboda: false,
      autocar: false,
      boda: false,
      noviene: false,
      plusone: "",
      food: "",
      otros: "",
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
      console.log(values.name)
      addAttendee({
        variables: {
          name: values.name,
          preboda: values.preboda,
          autocar: values.autocar,
          boda: values.boda,
          noviene: values.noviene,
          plusone: values.plusone,
          food: values.food,
          otros: values.otros,
        },
      })
    },
  })

  return (
    <div>
      <form className="attendee-form" onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Nombre y Apellidos</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor="preboda">Comida pre-boda</label>
        <input
          id="preboda"
          name="preboda"
          type="checkbox"
          onChange={formik.handleChange}
          value={formik.values.preboda}
        />
        <label
          className={formik.values.preboda ? "autocar" : "hidden"}
          htmlFor="autocar"
        >
          ¿Autocar?>
          <input
            id="autocar"
            name="autocar"
            type="checkbox"
            onChange={formik.handleChange}
            value={formik.values.autocar}
          />
        </label>
        <label htmlFor="boda">Boda</label>
        <input
          id="boda"
          name="boda"
          type="checkbox"
          onChange={formik.handleChange}
          value={formik.values.boda}
        />
        <label htmlFor="noviene">No podré ir</label>
        <input
          id="noviene"
          name="noviene"
          type="checkbox"
          onChange={formik.handleChange}
          value={formik.values.noviene}
        />
        <label htmlFor="plusone">¿Quién te acompaña?</label>
        <textarea
          id="plusone"
          name="plusone"
          type="input"
          onChange={formik.handleChange}
          value={formik.values.plusone}
        />

        <label htmlFor="food">
          ¿Tienes alguna petición alimentaria especial?
        </label>
        <textarea
          id="food"
          name="food"
          type="input"
          onChange={formik.handleChange}
          value={formik.values.food}
        />
        <label htmlFor="otros">Otros</label>
        <textarea
          id="otros"
          name="otros"
          type="input"
          onChange={formik.handleChange}
          value={formik.values.otros}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AtendeeForm
