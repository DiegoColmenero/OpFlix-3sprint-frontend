import React from 'react';
import logo from '../../assets/img/opflix-logo-verde.png';
import '../../components/Menu/Menu.css'

function Menu(){
    return(
        <header>
        <nav>
            <img src={logo} className="logo"/>
            <div className="menu">
                <a class="home">Home</a>
                <a href="">Ver Títulos</a>
                <a>Login</a>
            </div>
        </nav>
    </header>
    );
}
export default Menu;