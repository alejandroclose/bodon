import React, { useContext, useState } from "react"
import { useFormik } from "formik"
import gql from "graphql-tag"
import { useMutation } from "@apollo/react-hooks"
import * as yup from "yup"

import "./attendee-form.css"

import Autocar from "../images/autocar.png"

const ADD_ATTENDEE = gql`
  mutation addAttendee(
    $name: String!
    $preboda: Boolean
    $autocarpre: Boolean
    $boda: Boolean
    $autocarboda: Boolean
    $noviene: Boolean
    $plusone: String
    $food: String
    $otros: String
  ) {
    addAttendee(
      name: $name
      preboda: $preboda
      autocarpre: $autocarpre
      boda: $boda
      autocarboda: $autocarboda
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

yup.object({
  terms: yup.boolean().oneOf([true], "Must Accept Terms and Conditions"),
})

let validationSchema = yup
  .object({
    name: yup
      .string()
      .required("Necesitamos tu nombre completo para apuntarte en la lista"),
    preboda: yup.boolean(),
    boda: yup.boolean(),
    noviene: yup.boolean(),
  })
  .test("myCustomCheckboxTest", null, obj => {
    if (obj.preboda || obj.boda || obj.noviene) {
      return true
    }
    return new yup.ValidationError(
      "Elige si podrás acompañarnos o no podrás venir",
      null,
      "myCustomFieldName"
    )
  })

const AtendeeForm = props => {
  const [addAttendee, { data }] = useMutation(ADD_ATTENDEE)

  function validate(values) {
    const errors = {}
    if (!values.name) {
      errors.name = "attendee-name required "
    }
    if (!(values.preboda || values.boda || values.noviene)) {
      errors.eventos = "attendee-checkbox required"
    }

    return errors
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      preboda: false,
      autocarpre: false,
      boda: false,
      autocarboda: false,
      noviene: false,
      plusone: "",
      food: "",
      otros: "",
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
      console.log(values.name)
      addAttendee({
        variables: {
          name: values.name,
          preboda: values.preboda,
          autocarpre: values.autocarpre,
          boda: values.boda,
          autocarboda: values.autocarboda,
          noviene: values.noviene,
          plusone: values.plusone,
          food: values.food,
          otros: values.otros,
        },
      }).then(formik.resetForm())
    },
  })

  return (
    <div>
      <form className="attendee-form" onSubmit={formik.handleSubmit}>
        <label className="attendee-label" htmlFor="name">
          Nombre y Apellido*
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Introduce tu nombre y apellido*"
            onChange={formik.handleChange}
            value={formik.values.name}
            className={
              formik.errors.name ? "attendee-name required" : "attendee-name"
            }
          />
        </label>
        <div name="eventos" className="attendee-label">
          ¿A qué eventos vendrás?*
        </div>
        <label className="attendee-label-cb" htmlFor="preboda">
          <input
            id="preboda"
            name="preboda"
            type="checkbox"
            onChange={formik.handleChange}
            checked={formik.values.preboda}
            className={
              formik.errors.eventos
                ? "attendee-checkbox required"
                : "attendee-checkbox"
            }
            disabled={formik.values.noviene ? "disabled" : ""}
          />
          <div>Comida pre-boda</div>
        </label>
        <label
          className={formik.values.preboda ? "autocar-label" : "form-hidden"}
          htmlFor="autocarpre"
        >
          <div className="autocar-list">
            <div className="autocar-line"></div>
          </div>
          <div className="autocar-icon">
            <img src={Autocar} />
          </div>
          <div>¿Necesitarás servicio de autocar?</div>
          <input
            id="autocarpre"
            name="autocarpre"
            type="checkbox"
            onChange={formik.handleChange}
            checked={formik.values.autocarpre}
            className="autocar-checkbox"
          />
        </label>
        <label className="attendee-label-cb" htmlFor="boda">
          <input
            id="boda"
            name="boda"
            type="checkbox"
            onChange={formik.handleChange}
            checked={formik.values.boda}
            className={
              formik.errors.eventos
                ? formik.errors.eventos
                : "attendee-checkbox"
            }
            disabled={formik.values.noviene ? "disabled" : ""}
          />
          Boda
        </label>
        <label
          className={formik.values.boda ? "autocar-label" : "form-hidden"}
          htmlFor="autocarboda"
        >
          <div className="autocar-list">
            <div className="autocar-line"></div>
          </div>
          <div className="autocar-icon">
            <img src={Autocar} />
          </div>
          <div>¿Necesitarás servicio de autocar?</div>
          <input
            id="autocarboda"
            name="autocarboda"
            type="checkbox"
            onChange={formik.handleChange}
            checked={formik.values.autocarboda}
            className="autocar-checkbox"
          />
        </label>

        <label
          className={
            formik.values.preboda || formik.values.boda
              ? "form-hidden"
              : "attendee-label-cb"
          }
          htmlFor="noviene"
        >
          <input
            id="noviene"
            name="noviene"
            type="checkbox"
            disabled={
              formik.values.preboda || formik.values.boda ? "disabled" : ""
            }
            onChange={formik.handleChange}
            checked={formik.values.noviene}
            className={
              formik.errors.eventos
                ? formik.errors.eventos
                : "attendee-checkbox"
            }
          />
          No podré ir
        </label>
        <label
          className={
            formik.values.preboda || formik.values.boda
              ? "attendee-label"
              : "form-hidden"
          }
          htmlFor="plusone"
        >
          ¿Quién te acompaña?
          <textarea
            id="plusone"
            name="plusone"
            type="input"
            placeholder="Indica el nombre de tu acompañante"
            onChange={formik.handleChange}
            value={formik.values.plusone}
            className="attendee-input"
          />
        </label>
        <label
          className={
            formik.values.preboda || formik.values.boda
              ? "attendee-label"
              : "form-hidden"
          }
          htmlFor="food"
        >
          ¿Tienes alguna petición alimentaria especial?
          <textarea
            id="food"
            name="food"
            type="input"
            placeholder="Especifica cuál"
            onChange={formik.handleChange}
            value={formik.values.food}
            className="attendee-input"
          />
        </label>
        <label className="attendee-label" htmlFor="otros">
          ¿Quieres dejarnos algún mensaje?
          <textarea
            id="otros"
            name="otros"
            type="input"
            onChange={formik.handleChange}
            value={formik.values.otros}
            className="attendee-input"
          />
        </label>
        <button className="submit-btn" type="submit">
          CONFIRMAR
        </button>
        <div className="error-msg">
          {formik.errors.eventos || formik.errors.name
            ? "* Rellena los campos obligatorios"
            : null}
        </div>
      </form>
    </div>
  )
}

export default AtendeeForm
