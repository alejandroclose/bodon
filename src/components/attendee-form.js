import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const ADD_ATTENDEE = gql`
  mutation addAttendee(
    $name: String!
    $preboda: Boolean
    $autocar: Boolean
    $boda: Boolean
    $noviene: Boolean
    $vegano: Boolean
    $vegetariano: Boolean
    $gluten: Boolean
    $lactosa: Boolean
    $otros: String){
      id
    }
`;


const AtendeeForm = () => {

  const [addAttendee, { data }] = useMutation(ADD_ATTENDEE);

  const formik = useFormik({
    initialValues: {
      name: "",
      preboda: false,
      autocar: false,
      boda: false,
      noviene: false,
      vegano: false,
      vegetariano: false,
      gluten: false,
      lactosa: false,
      otros: "",
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      addAttendee({
        name: values.name, 
        preboda: values.preboda,
        autocar: values.autocar,
        boda: values.boda,
        noviene: values.noviene,
        vegano: values.vegano,
        vegetariano: values.vegetariano,
        gluten: values.gluten,
        lactosa: values.lactosa,
        otros: values.otros })

    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
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
        <label htmlFor="autocar">¿Autocar?</label>
        <input
          id="autocar"
          name="autocar"
          type="checkbox"
          onChange={formik.handleChange}
          value={formik.values.autocar}
        />
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
        <label htmlFor="vegano">Vegano</label>
        <input
          id="vegano"
          name="vegano"
          type="checkbox"
          onChange={formik.handleChange}
          value={formik.values.vegano}
        />
        <label htmlFor="vegetariano">Vegetariano</label>
        <input
          id="vegetariano"
          name="vegetariano"
          type="checkbox"
          onChange={formik.handleChange}
          value={formik.values.vegetariano}
        />
        <label htmlFor="gluten">Gluten</label>
        <input
          id="gluten"
          name="gluten"
          type="checkbox"
          onChange={formik.handleChange}
          value={formik.values.gluten}
        />
        <label htmlFor="lactosa">Lactosa</label>
        <input
          id="lactosa"
          name="lactosa"
          type="checkbox"
          onChange={formik.handleChange}
          value={formik.values.lactosa}
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
  );
};

export default AtendeeForm;