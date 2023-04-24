import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListadoRow from "./ListadoRow";
import { useNavigate } from 'react-router-dom';


const Listado = ({data,deleteData,handleClickCheckbox }) =>{

  const navigate = useNavigate();
  const handlenavigate=(e)=>{
    navigate('/Editar');
  };
  const handlenavigates=(e)=>{
    navigate('/Registar');
  };
    return <div>
        <h2 class="text-center mb-3">Lista De Tarea</h2>
        <table class="table table-striped">
<thead class="table-dark">
  <tr>
    <th scope="col">Tarea</th>
    <th scope="col">Descripcion</th>
    <th scope="col">Fecha</th>
    <th scope="col">Borrar</th>
  </tr>
</thead>
<tbody>
  {data.legth===0?<tr><td colSpan="3">Sin datos</td></tr>:data.map(el=>
   <ListadoRow key={el.id} el={el} deleteData={deleteData} setChecked={handleClickCheckbox}/>)}
</tbody>
        </table>

        <h3>Para editar la Tarea o marcar como realizada <button type="submit" onClick={handlenavigate}class="btn btn-success">haga click aqui</button></h3>
        <h3>Para agregar una Tarea nueva a realizar <button type="submit" onClick={handlenavigates}class="btn btn-primary">haga click aqui</button></h3>  
    </div>;
};
export default Listado;

