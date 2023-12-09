import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase.js";


export const Edit = () => {

    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [age, setAge] = useState("")
    const [power, setPower] = useState("")

    const navigate = useNavigate();

    const { id } = useParams();

    const update = async (e) => {
        e.preventDefault();
        const heroeDoc = doc(db, "heroes", id);

        const data = {
            name: name,
            lastname: lastname,
            age: age,
            power: power,
        };

        await updateDoc(heroeDoc, data);
        navigate("/"); //en la de tragos poner /show
    };

    const getHeroesById = async (id) => {
        const heroeDoc = await getDoc(doc(db, "heroes", id));

        if (heroeDoc.exists()) {
            setName(heroeDoc.data().name);
            setLastname(heroeDoc.data().lastname);
            setAge(heroeDoc.data().age);
            setPower(heroeDoc.data().power);
        } else {
            console.log("No existe el dato");
        }
    };

    // Use Effect
    useEffect(() => {
        getHeroesById(id);
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Edit Heroe</h1>
                    <form onSubmit={update}>
                        <div className="mb-3">
                            <label className="form-label">NOMBRE</label>
                            <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">APELLIDO</label>
                            <input className="form-control" type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">EDAD</label>
                            <input className="form-control" type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">PODER</label>
                            <input className="form-control" type="text" value={power} onChange={(e) => setPower(e.target.value)} />
                        </div>

                        <button type="submit" className="btn btn-secondary">EDITAR</button>
                    </form>
                </div>
            </div>
        </div>

    )
};