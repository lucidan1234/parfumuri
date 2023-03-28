import React, { useState, useEffect } from 'react';
import './style/Home.css';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';


function Home() {
    const [parfumes, setParfumes] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('../data.json')
            const response = await res.json()
            setParfumes(response)
        }
        fetchData()
    }, [])
    return (
        <div>
            <Navbar />
            <div className='content'>

                <h1>Parfumes</h1>
                <p>Here you can find the latest and most popular parfumes.</p>
                <div className='container'>
                    {parfumes.map((parfume, key) => (

                        <div key={key} className="card" onClick={() => navigate(`/details/${parfume.id}`)
                        }>

                            <img src={parfume.image} alt={parfume.name} />
                            <h2>{parfume.name}</h2>
                            <p>{parfume.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
