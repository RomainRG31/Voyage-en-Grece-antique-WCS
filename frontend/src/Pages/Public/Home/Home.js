import React, { useEffect, useState } from 'react';
import './Home.css';
import ApiService from "@/_Service/Api.argonautes.js";

import Card from "@/Components/Card/Card";

const Home = () => {

    const [Users, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [load, setLoad] = useState(false)


    useEffect(() => {
        getInfo();
        return
    }, [load])

    const getInfo = async () => {
        await ApiService.GetAllUser()
            .then((data) => {
                setUser(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const SendApi = (e) => {
        e.preventDefault()

        let ArrayUser = {
            name: e.target[0].value
        }
        ApiService.CreateUser(ArrayUser)
            .then(() => {
                setLoad(l => !l)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    if (isLoading) return (<h3>Chargement...</h3>)
    return (
        <section className="SectionAccueil">
            <h2>Ajouter un(e) Argonaute</h2>

            <form className="new-member-form" onSubmit={SendApi}>
                <label htmlFor="name">Nom de l'Argonaute</label>
                <input id="name" name="name" type="text" placeholder="Charalampos" />
                <button type="submit">Envoyer</button>
            </form>

            <h3>Membres de l'équipage</h3>
            <ul className='equipage-list'>
                {
                    Users.map((user) =>
                        <Card key={user._id} name={user.name} />
                    )
                }
            </ul>
        </section>
    );
}

export default Home;
































