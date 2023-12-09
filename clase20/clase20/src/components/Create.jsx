import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {collection, addDoc} from "firebase/firestore";
import {db} from "../firebaseConfig/firebase.js";



export const Create = () => {

    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [age, setAge] = useState("")
    const [power, setPower] = useState("")

    const navigate = useNavigate();

    const heroesCollection = collection(db, "heroes");

const createHeroe = async (e)=>{
    e.preventDefault();
    await addDoc(heroesCollection, {
        name: name,
        lastname: lastname,
        age: age,
        power: power,
    })
    navigate("/show");
}



return (
    <div className="container">
        <div className="row">
            <div className="col">
                <h1>Create Heroe</h1>
                <form onSubmit={createHeroe}>
                    <div className="mb-3">
                        <label className="form-label">NOMBRE</label>
                        <input className="form-control" type="text" onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">APELLIDO</label>
                        <input className="form-control" type="text" onChange={(e) => setLastname(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">EDAD</label>
                        <input className="form-control" type="text" onChange={(e) => setAge(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">PODER</label>
                        <input className="form-control" type="text" onChange={(e) => setPower(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-secondary">ACEPTAR</button>
                    <Link to="/" className="btn btn-danger">CANCELAR</Link> {/* poner /show */}
                </form>
            </div>
        </div>
    </div>

)
};