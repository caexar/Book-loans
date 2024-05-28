import React from "react";

const CrudTableRow = ({ elemento, setDataToEdit, deleteData }) => {
  let { id, nombre, apellido, titulo, autor, editorial, año } = elemento; //contiene todos los datos suministrado al momento de crear la tarea en el CRUD

  return (
    <tr>
      
      <td>{nombre}</td>
      <td>{apellido}</td>
      <td>{titulo}</td>
      <td>{autor}</td>
      <td>{editorial}</td>
      <td>{año}</td>
      <td>
        <button className="btn btn-primary" onClick={() => setDataToEdit(elemento)}>Editar</button>
        <button className="btn btn-danger" onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};


export default CrudTableRow;
