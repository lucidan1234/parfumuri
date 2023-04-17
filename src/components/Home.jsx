import React, { useState, useEffect } from 'react';
import './style/home.css';
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';
import Search from './search';
import { useContext } from 'react';
import { globalContext } from './Context/context';



function Home() {
    const [order, setOrder] = useContext(globalContext)
    const [parfumes, setParfumes] = useState([])
    const [searchParfume, setSearchParfume] = useState('')
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
        <>
            <Navbar />
            <div className='search-bar'><Search handleSearchParfume={setSearchParfume} /></div>
            <div className='content'>
                <h1>Parfumes</h1>
                <p>Here you can find the latest and most popular parfumes.</p>
                <div className='container'>
                    {parfumes.filter(parfume => parfume.name.toLowerCase().includes(searchParfume.toLowerCase())).map((parfume, key) => (

                        <div key={key} className="card" >

                            <img src={parfume.image} alt={parfume.name} onClick={() => navigate(`/details/${parfume.id}`)
                            } />
                            <h2>{parfume.name}</h2>
                            <p>{parfume.description}</p>
                            <button className='btn' onClick={() => {
                                setOrder(prev => [
                                    ...prev,
                                    {
                                        ...parfume,
                                        quantity: 1
                                    }
                                ])
                            }}>Buy</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;
