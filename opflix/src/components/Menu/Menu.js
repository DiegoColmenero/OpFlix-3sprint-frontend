import React,{Component} from 'react';
import logo from '../../assets/img/opflix-logo-verde.png';
import '../../components/Menu/Menu.css'
import {Link} from 'react-router-dom'
class Menu extends Component{

    render(){

        return(
            <header>
        <nav>
            <img src={logo} className="logo"/>
            <div className="menu">
                <Link to="/" class="home">Home</Link>
                <Link to="/titulos">Ver Títulos</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    </header>
    );
}
}
export default Menu;