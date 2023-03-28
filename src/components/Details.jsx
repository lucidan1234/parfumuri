import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from "react-responsive-carousel"
import './style/Details.css'



const Details = () => {

    const { id } = useParams()
    const [parfumes, setParfumes] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('../data.json')
            const response = await res.json()
            setParfumes(response.filter(p => Number(p.id) === Number(id)))
        }

        fetchData()
    }, [id])
    return (
        <div className="container">
            <div className="carousel">
                <Carousel autoPlay={true} interval={2000} infiniteLoop={true} axis="horizontal" renderThumbs={() => { }}>
                    {parfumes.map(e => e.imagesDetail.map((e, key) => {
                        return (
                            <div key={key} >
                                <img src={e.img} />
                                <p className="legend">{e.name}</p>
                            </div>
                        )
                    })
                    )}
                </Carousel>


            </div>
            <div className="Details">
                {parfumes?.map((e, key) => {
                    return (
                        <span key={key}>{e.longDescription}</span>
                    )
                })}
            </div>
            <div className="reviews">
                {parfumes?.map(e => e.reviews.map((i, key) => {
                    return (
                        <div key={key}>
                            <span>{i.name}</span>
                            <span>{i.comment}</span>
                        </div>
                    )
                })
                )}
            </div>

        </div>
    )
}


export default Details