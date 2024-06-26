import React, { useState, useEffect } from "react";

const initailForm = { //inicializamos las variables del formulario
  nombre: "",
  apellido: "",
  titulo: "",
  autor: "",
  editorial: "",
  año: "",
  id: null,
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initailForm);

  useEffect(() => { //editar datos cambiando el funcionamiento de los componentes
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initailForm);
    }
  }, [dataToEdit]);

  const handleChange = (data) => { //se dispara cuando hay un cambio en los campos de entrada (input) del formulario
    setForm({
      ...form,
      [data.target.name]: data.target.value,
    });
  };

  const handleSubmit = (data) => { //sirve para manejar la presentacion de un formulario(al mandar dato con un submit)
    data.preventDefault();

    if (!form.nombre || !form.apellido || !form.titulo || !form.autor || !form.editorial || !form.año) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = () => { //se utiliza para restablecer los valores
    setForm(initailForm);
    setDataToEdit(null);
  };

  return (
    <div className="container justify-content-center text-center">
      <h3 className="text-center mb-3">Sección de Préstamos de libros</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.nombre}
          className="form-control mb-3"
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          onChange={handleChange}
          value={form.apellido}
          className="form-control mb-3"
        />
        <input
          type="text"
          name="titulo"
          placeholder="Titulo"
          onChange={handleChange}
          value={form.titulo}
          className="form-control mb-3"
        />
        <input
          type="text"
          name="autor"
          placeholder="Autor"
          onChange={handleChange}
          value={form.autor}
          className="form-control mb-3"
        />
        <input
          type="text"
          name="editorial"
          placeholder="Editorial"
          onChange={handleChange}
          value={form.editorial}
          className="form-control mb-3"
        />
        <input
          type="text"
          name="año"
          placeholder="Año"
          onChange={handleChange}
          value={form.año}
          className="form-control mb-3"
        />
        <input className="btn btn-success mb-3" type="submit" value="Registrar préstamo" />
      </form>
    </div>
  );
};

export default CrudForm;
