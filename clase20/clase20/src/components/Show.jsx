/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase.js";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const mySwal = withReactContent(Swal);

export const Show = () => {

    // Configurar useState (hook)
    const [heroes, setHeroes] = useState([]);
    // Referenciar a la base de datos de firebase
    const heroesCollection = collection(db, "heroes");
    // Funcion para mostrar todos los documentos
    const getHeroes = async () => {
        const data = await getDocs(heroesCollection);
        /* console.log(data.docs);  */
        setHeroes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        /* console.log(heroes); */
    }
    // Funcion para eliminar un documento
    const deleteHeroe = async (id) => {
        const heroesDoc = doc(db, "heroes", id);
        await deleteDoc(heroesDoc);
        getHeroes();
    }

    // Funcion para sweetalert2 (confirmar/eliminar documento)
    const confirmDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteHeroe(id);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    };

    // Use Effect
    useEffect(() => {
        getHeroes();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="d-grid gap-2">
                            <Link to="/create" className="btn btn-secondary">CREAR</Link>
                        </div>

                        <table className="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Edad</th>
                                    <th>Superpoder</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>

                                {heroes.map((heroe) => (
                                    <tr>
                                        <td >{heroe.name}</td>
                                        <td>{heroe.lastname}</td>
                                        <td>{heroe.age}</td>
                                        <td>{heroe.power}</td>
                                        <td>
                                            <Link to={`edit/${heroe.id}`} className="btn btn-light">
                                                <i className="fa-sharp fa-solid fa-pencil"></i>
                                            </Link>                      
                                            <button className="btn btn-danger" onClick={() => confirmDelete(heroe.id)}>
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )

                                )}



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )

};