import React, { useState } from "react";
import Navbar from "./navbar";
import "./style/order.css";
import { useContext } from 'react';
import { globalContext } from './Context/context';
import { useReducer } from "react";

const Order = () => {
    const [order] = useContext(globalContext)

    function reducer(state, action) {
        switch (action.type) {
            case 'increment': {
                return {
                    ...state,
                    newCart: state.cart.filter(e => e.id === action.id ? (e.quantity++) : e.quantity),
                    newCartSum: state.cart.map(e => e.price * e.quantity)
                };
            }
            case 'decrement': {
                return {
                    ...state,
                    newCart: state.cart.filter(e => e.id === action.id ? (e.quantity--) : e.quantity),
                    newCartSum: state.cart.map(e => e.price * e.quantity)

                };
            }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, { cart: order });
    const [see, setSee] = useState(false)
    return (
        <div>
            <Navbar />


            {see ? <h1 className="sended">Your order was successfuly sended!!</h1> :
                <div>
                    <div>
                        {order.map((e, i) => {
                            console.log(e.price)
                            return (
                                <div className="product" key={i}>

                                    <button onClick={() => {
                                        dispatch({
                                            type: "decrement",
                                            ...e
                                        })
                                    }}>-</button> &nbsp;&nbsp;&nbsp;

                                    Cantitate: {e.quantity} &nbsp;&nbsp;&nbsp;<button onClick={() => {
                                        dispatch({
                                            type: "increment",
                                            ...e
                                        })
                                    }}>+</button>
                                    &nbsp;&nbsp;&nbsp; {e.name} &nbsp;
                                    - PRET : {e.price + " RON"}


                                </div>
                            )
                        })}
                        <span className="total">TOTAL: {state.newCartSum ? state.newCartSum?.reduce((a, b) => a + b, 0) + "RON" : 0 + "RON"}</span>
                    </div>


                    <div className="order-container">
                        <div className="set-name">
                            <label className="name-street">Street and number *</label>
                            <input type="text" className="name-street" placeholder="Street name, number, etc." />
                        </div>
                        <br />
                        <div className="city">
                            <label className="citys">City *</label>
                            <input type="text" className="citys" placeholder="city" />
                        </div>
                        <br />

                        <div className="telephone">
                            <label className="telephone-content">Telephone *</label>
                            <input type="number" className="telephone-content" placeholder="number" />


                        </div>
                        <br />

                        <div className="set-email">
                            <label className="emails">Email_address *</label>
                            <input type="email" className="email" placeholder="Email" />
                        </div>

                        <button type="submit" className="button" onClick={() => {
                            setSee(true)
                            setTimeout(() => {
                                window.location.reload(true);
                            }, 2000)
                        }}>Place the order</button>
                    </div>
                </div>
            }






        </div >



    );
};

export default Order;