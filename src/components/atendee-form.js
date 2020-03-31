import React from 'react';
import { useFormik } from 'formik';

const AtendeeForm = () => {
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
        <label htmlFor="autocar">Autocar</label>
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
      </form>
      <button type="submit">Submit</button>
    </div>
  );
};

export default AtendeeForm;