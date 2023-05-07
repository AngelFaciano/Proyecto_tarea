
import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';



const initailForm={     
    nombre:"",
    descripcion:"",
    fecha:"",
    check:false,
    id:null,
};
const Registro=({createData})=>{
    const [form, setForm] = useState(initailForm);
    const navigate = useNavigate();
    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name] :e.target.value,
        })
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        createData(form)
        navigate('/listado');
        handleReset();
    };
    const handleReset = (e) => {
        
        setForm(initailForm);

    };



    return <div>
            <h3 class="text-center">Registrar  Tareas</h3>
            <form onSubmit={handleSubmit}>
                
                <div class="form-group">
                    <label  class="form-label">Tarea :</label>
                    <input
                    class="form-control"
                    type="text"
                    name="nombre"
                    onChange={handleChange}
                    value={form.nombre}
                    required
                    />
                </div>
                <div class="form-group">
                    <label  class="form-label">descripcion :</label>
                    <input
                    class="form-control"
                    type="text"
                    name="descripcion"
                    onChange={handleChange}
                    value={form.descripcion}required  
                    />
                </div>
                <div class="form-group">
                    <label  class="form-label">fecha :</label>
                    <input
                    class="form-control"
                    type="date"
                    name="fecha"
                    onChange={handleChange}
                    value={form.fecha}required
                    />
                </div>
                <br/>
                <div class="d-flex justify-content-center">
                    <div><button  type="submit" class="btn btn-primary">Guardar Empleado</button> <button type="reset" class="btn btn-primary" onClick={handleReset}>Limpiar Campos</button></div>
                    </div>
            </form>

    </div>
}

export default Registro;