import React from 'react'
import Table from 'react-bootstrap/Table';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeToCart } from '../redux/App/features/cartSlice';
import { useEffect, useState } from 'react';



const CartDetails = () => {

    const { carts } = useSelector((state) => state.allCart);
    console.log(carts)

    const [totalprice, setPrice] = useState(0);
    const [totalquantity, setTotalQuantity] = useState(0);



    const dispatch = useDispatch();

    const handleIncrement = (e) => {
        dispatch(addToCart(e))
        console.log(carts[0].qnty)
    }
    const handleDecrement = (e) => {
        dispatch(removeToCart(e))
    }

    const total = () => {
        let totalprice = 0
        carts.map((ele, ind) => {
            totalprice = ele.price * ele.qnty + totalprice
        });
        setPrice(totalprice)
    }



    const countquantity = () => {
        let totalquantity = 0
        carts.map((ele, index) => {
            totalquantity = ele.qnty + totalquantity
        });
        setTotalQuantity(totalquantity)
    }



    useEffect(() => {
        total()

    }, [total])

    useEffect(() => {
        countquantity()
    }, [countquantity])


    return (
        <div >
            <div className="card-header">
                <div className='cal'>
                    <h5>Cart Calculation{carts.length > 0 ? `(${carts.length})` : ""}</h5>

                </div>


                <div className='cal3' >

                    <Table striped bordered hover className='table cart-table mb-0 table-responsive-sm'>
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>Product</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th className='text-right'>Total Amount</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                carts.map((products, index) => {

                                    return (
                                        <tr>
                                            <td>
                                                <button onClick={() => { handleDecrement(products.id); console.log(products) }}>
                                                    ❌
                                                </button>
                                            </td>
                                            <td>
                                                <div className='cal4'>
                                                    <img src={products.poster} alt="product-name"></img>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h6 className="product-name">{products.name}</h6>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <h6 className="product-price"> ₹{products.price}</h6>
                                                </div>
                                            </td>
                                            <td>
                                                <button onClick={() => { handleIncrement(products); console.log(products) }}>➕</button>
                                                <input type="text" className='qty-input-box' value={products.qnty} disabled></input>
                                                <button onClick={() => { handleDecrement(products.id); console.log(products) }}>➖</button>
                                            </td>
                                            <td className='text-right'>₹ {products.qnty * products.price}</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                        < tfoot>
                            <tr>
                                <th>&nbsp;</th>
                                <th colSpan={3}>&nbsp;</th>
                                <th>Items In Cart <span className='ml-2 mr-2'>:</span><span className='text-danger'>{totalquantity}</span></th>
                                <th className='text-right'>Total Price<span className='ml-2 mr-2'>:</span><span className='text-danger'>₹{totalprice}</span></th>
                            </tr>
                        </tfoot>
                    </Table>
                </div>




            </div>

        </div>
    )
}
export default CartDetails