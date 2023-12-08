import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase.js";


export const Edit = () => {

const [name, setName] = useState("")
const [lastname, setLastname] = useState("")
const [age, setAge] = useState("")
const [power, setPower] = useState("")

const navigate = useNavigate();

const {id} = useParams();

const update = async(e) => {
    e.preventDefault();
    const heroeDoc = doc (db, "heroes", id);

    const data = {
        name: name,
        lastname: lastname,
        age: age,
        power: power
    };

    await updateDoc (heroeDoc, data)
    navigate ("/") //en la de tragos poner /show

    const getHeroesById = async (id) =>{
        const heroeDoc = await getDoc (doc(db, "heroes", id));

        if (heroeDoc.exists()){
            setName(heroeDoc.data().name);
            setLastname(heroeDoc.data().lastname);
            setAge(heroeDoc.data().age);
            setPower(heroeDoc.data().power);
        }else{
            alert("No existe el dato");
        }
    }
};

    // Use Effect
    useEffect(() => {
        getHeroesById(id);
    }, []);

    return (
        <h1>Aca se van a editar los documentos</h1>
    )
}