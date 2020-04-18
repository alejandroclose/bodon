import React, { useState } from "react"
import { useFormik } from "formik"
import gql from "graphql-tag"
import { useMutation } from "@apollo/react-hooks"
import * as yup from "yup"

import "./guestbook.css"

import Pen from "./assets/pen.svg"

const ADD_NOTE = gql`
  mutation addNote($name: String!, $message: String!) {
    addNote(name: $name, message: $message) {
      id
      name
    }
  }
`

let validationSchema = yup.object({
  name: yup.string().required("Dejarnos tu nombre es obligatorio"),
  message: yup.string().required("¿Quieres dejarnos un mensaje?"),
})

const Guestbook = props => {
  const [formSent, setFormSent] = useState(false)
  const [notes, setNotes] = useState([])

  const [addNote, { data }] = useMutation(ADD_NOTE)

  function validate(values) {
    const errors = {}
    if (!values.name) {
      errors.name = "note-name required "
    }
    if (!values.message) {
      errors.message = "note-message required "
    }

    return errors
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      message: "",
    },
    validate,
    onSubmit: values => {
      setFormSent(true)
      addNote({
        variables: {
          name: values.name,
          message: values.message,
        },
      }).then(
        window.setTimeout(() => {
          formik.resetForm()
          setFormSent(false)
        }, 5000)
      ).then(
        setNotes([formik.values], ...notes)
      )
    },
  })

  return (
    <div className="note">
      <h2 className="note-title">LIBRO DE VISITA</h2>
      <div className="note-content">
        <div className="note-icon">
          <Pen />
        </div>
        <form className="note-form" onSubmit={formik.handleSubmit}>
          <div className="note-label">¡Déjanos un mensaje! :)</div>
          <label className="note-label" htmlFor="name">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Introduce tu nombre*"
              onChange={formik.handleChange}
              value={formik.values.name}
              className={
                formik.errors.name ? "note-name required" : "note-name"
              }
            />
          </label>
          <label className="note-label" htmlFor="message">
            <textarea
              id="message"
              name="message"
              type="input"
              placeholder="Déjanos tu mensaje"
              onChange={formik.handleChange}
              value={formik.values.message}
              className="note-input"
            />
          </label>

          <div className={formSent ? "success" : "form-hidden"}>
            <div>¡Gracias por tu mensaje!</div>
          </div>
          <div className="error-note-msg">
            {formik.errors.eventos || formik.errors.name
              ? "* Rellena los campos obligatorios"
              : null}
          </div>
          <div className="submit-note">
            <button className="submit-note-btn" type="submit">
              PUBLICAR
            </button>
          </div>
        </form>
      </div>
      <div className="wall">
        <ul>
            {notes.maps(note => (
              <li>note</li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Guestbook
