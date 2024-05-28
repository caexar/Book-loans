import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";

const initialDb = [ //base de dato con ejemplos previamente llenados
  {
    id: 1123123,
    nombre: "cesar",
    apellido: "ceveriche",
    titulo: "libro1",
    autor: "autor1",
    editorial: "editorial1",
    año: "2021",

  },
  {
    id: 1123124,
    nombre: "leonardo",
    apellido: "perez",
    titulo: "libro2",
    autor: "autor2",
    editorial: "editorial2",
    año: "2022",
  },
  {
    id: 1123125,
    nombre: "luis",
    apellido: "osorio",
    titulo: "libro3",
    autor: "autor3",
    editorial: "editorial3",
    año: "2023",
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb); 
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => { //crear datos
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => { //actializar datos
    let newData = db.map((elemento) => (elemento.id === data.id ? data : elemento));
    setDb(newData);
  };

  const deleteData = (id) => { //eliminar datos
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let newData = db.filter((data) => data.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div>
        <Form
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <Table
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
    </div>
  );
};

export default CrudApp;
