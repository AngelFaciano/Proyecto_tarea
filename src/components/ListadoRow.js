import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { format  } from 'date-fns'

const ListadoRow = ({el,deleteData}) =>{
    
    
    return <tr>
        <th scope="row"><input
                    class="ml-2"
                    type="checkbox"
                    name="check"
                    checked={el.check}
                    />{el.nombre}</th>
        <td>{el.descripcion}</td>
        <td>{format  ( Date.parse(el.fecha+'T00:00:00'), 'dd-MM-yyyy')}</td>
        <th scope="col"><button class="btn btn-outline-danger"
        onClick={()=>deleteData(el.id)}>X</button></th>
    </tr>
    
}

export default ListadoRow;