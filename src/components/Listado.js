import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListadoRow from "./ListadoRow";

const Listado = ({data,deleteData,handleClickCheckbox }) =>{

  
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
    </div>;
};
export default Listado;

