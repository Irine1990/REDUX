
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';




function Navbar() {


    const carts = useSelector((state) => state.allCart.carts)
    console.log(carts);
    return (
        <div className="nav">
            <Link to="/">HOME</Link>
            <Link to="/cart"><span products-count={carts.length}><Button variant="primary">🛒Cart<Badge bg="secondary">{carts.reduce((ele, c) => ele + c.qnty, 0)}</Badge></Button></span></Link>


        </div>
    );
};

export default Navbar;