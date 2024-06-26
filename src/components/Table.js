import React from "react";
import TableRow from "./TableRow";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div className="container justify-content-center text-center">
      <h3 className="text-center mb-3">Listar de préstamos registrados</h3>
      <table className="table table-hover table-primary">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Titulo</th>
            <th scope="col">Libro</th>
            <th scope="col">Autor</th>
            <th scope="col">Editorial</th>
            <th scope="col">Año</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((elemento) => (
              <TableRow
                key={elemento.id}
                elemento={elemento}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
