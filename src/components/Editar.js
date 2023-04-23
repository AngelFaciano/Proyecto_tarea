import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { format } from 'date-fns'
import Editarrow from "./Editarrow";

const initailForm = {
    nombre: "",
    descripcion: "",
    fecha: "",
    check: "",
    id: null,
};
const Editar = ({ data, updateData, dataToEdit, setDataToEdit }) => {
    const [form, setForm] = useState(initailForm);
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.checked,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateData(form)
        handleReset();
    };
    const handleReset = (e) => {
        setDataToEdit(null);
        setForm(initailForm);

    };

    useEffect(() => {
        if (dataToEdit) {
            setForm(dataToEdit);
        } else {
            setForm(initailForm);
        }
    }, [dataToEdit])

    return <div>{form.id === null ?
        <div>
            <h2 class="text-center mb-3">Eliga una Tarea para editar</h2>
            <table class="table table-striped">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">Tarea</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">fecha</th>
                        <th scope="col">Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {data.legth === 0 ? <tr><td colSpan="3">Sin datos</td></tr> : data.map(el =>
                        <Editarrow key={el.id} el={el} setDataToEdit={setDataToEdit} />

                    )}
                </tbody>
            </table>
        </div> : <div>
            <h2 class="text-center mb-2">Editar Empleao</h2>
            <table class="table table-striped">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">Tarea</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">fecha</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <th scope="row"><input
                    class="ml-2"
                    type="checkbox"
                    name="check"
                    checked={form.check}
                    />{form.nombre}</th>
                        <td>{form.descripcion}</td>
                        <td>{format(Date.parse(form.fecha + 'T00:00:00'), 'dd-MM-yyyy')}</td>
                    </tr>
                </tbody>
            </table>
            <form onSubmit={handleSubmit}>
                <div class="form-group mt-2 mb-2">

                    <label class="form-check-label ml-2" for="flexCheckDefault">Estado de la tarea : </label>
                    <input class="form-check-input" type="checkbox" name="check"
                        onClick={handleChange} checked={form.check} id="flexCheckDefault" />
                </div>
                <div class="form-group">
                    <label class="form-label">Tarea :</label>
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
                    <label class="form-label">descripcion :</label>
                    <input
                        class="form-control"
                        type="text"
                        name="descripcion"
                        onChange={handleChange}
                        value={form.descripcion} required
                    />

                </div>
                <div class="form-group">
                    <label class="form-label">fecha :</label>
                    <input
                        class="form-control"
                        type="date"
                        name="fecha"
                        onChange={handleChange}
                        value={form.fecha} required
                    />
                </div>
                <br />
                <div class="d-flex justify-content-center">
                    <div><button type="submit" class="btn btn-success" onClick={updateData}>Editar Tarea</button> <button type="reset" class="btn btn-success" onClick={handleReset}>Limpiar Campos</button></div>
                </div>
            </form>
        </div>}
    </div>;
}

export default Editar;
