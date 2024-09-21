import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand navbar-custom" href="#"><img className="logo"src="/images/logo.png" alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-list">
                    <li className="nav-item ">
                    <a className="nav-link active " aria-current="page" href="#">Market</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Exchange</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Tutorials</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Wallet</a>
                    </li>
                    <li className="nav-item">
                    <button className="btn btn-outline-primary" type="submit">login</button>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    );
}

export default Navbar;
