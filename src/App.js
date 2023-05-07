import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Listado from "./components/Listado";
import Editar from "./components/Editar";
import Registro from "./components/Registro";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

const initialBd = [
  {
    id: 1,
    nombre: "Cocinar",
    descripcion: "Poner la comida en el horno",
    fecha: "2023-04-15",
    check:false,
  },
  {
    id: 2,
    nombre: "Arreglar cama",
    descripcion: "Colocar Tornillo en la pata de la cama",
    fecha: "2023-02-25",
    check:true,
  },
  {
    id: 3,
    nombre: "Comprar Comida",
    descripcion: "Ir al supermercado",
    fecha: "2020-08-26",
    check:false,
  }
]
const initailForm={     
    nombre:"",
    ids:null,
  };

function App() {
  
  const [db, setDb] = useState(initialBd);
  const [form, setForm] = useState(initailForm);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [check, setChecked] = useState(initialBd.check);
  
    const handleClickCheckbox=({target})=>{
      setChecked({
        ...check,
        [target.name]:!check[target.name]
      })
      
    }
    
  
  const handleChange=(e)=>{
    setForm({
        ...form,
        [e.target.name] :e.target.value,
    })
};
  const handleSubmit = (e) => {
    e.preventDefault();
    createUsuario(form)
  };
  const createUsuario = (data) => {
    data.id = Date.now();
    initailForm.nombre=form.nombre
    setForm([...db, data])
  };

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data])
  };
  const updateData = (data) => {
    let newData = db.map(el => el.id === data.id ? data : el);
    setDb(newData);
  };
  const deleteData = (id) => {
    let isDelete = window.confirm('Estas Seguro que quiere eliminar al empleado');
    if (isDelete) {
      let newData = db.filter(el => el.id !== id)
      setDb(newData)

    } else { return }
  };
  return (
    <BrowserRouter>{form.ids===null?<div></div>:
    <div>
      <nav class="navbar navbar-expand-sm bg-black navbar-dark">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to="/listado" class="nav-link">Listado Tarea</Link>
          </li>
          <li class="nav-item">
            <Link to="/Registar" class="nav-link">Registrar Tarea</Link>
          </li>
          <li class="nav-item">
            <Link to="/Editar" class="nav-link">Editar Tarea</Link>
          </li>
        </ul>
      </nav>
    </div>}
      
      
      <h1 class="text-center mt-2 mb-3" >{form.id===null?<div>Gestion De Tarea</div>:<div>Tarea para: {initailForm.nombre} </div> }</h1>
      <div class="container">
        <Routes>
          <Route path="/" element={<div>
            
            {form.ids===null?<div><h3 class="text-center">Rellene el campo de nombre  asi acceda al campo de tarea</h3>
            <form onSubmit={handleSubmit}>
                
                <div class="form-group">
                    <label  class="form-label">Nombre de Usuario :</label>
                    <input
                    class="form-control"
                    type="text"
                    name="nombre"
                    onChange={handleChange}
                    value={form.nombre}
                    required
                    />
                </div>
                <br/>
                <div class="d-flex justify-content-center">
                    <div><button  type="submit" class="btn btn-primary">Confirmar Usuario</button></div>
                    </div>
            </form>


            </div>:
            <Listado
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
            handleClickCheckbox={handleClickCheckbox}
          />      }                  
          </div>

          } />
          <Route path="/Registar" element={<Registro
            createData={createData}

          />} />
          <Route path="/Editar" element={<Editar data={db}
            setDataToEdit={setDataToEdit}
            updateData={updateData}
            dataToEdit={dataToEdit}
          />} />
          <Route path="/listado" element={<Listado
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />} />

        </Routes>
      </div>

    </BrowserRouter>
  );


}

export default App;
