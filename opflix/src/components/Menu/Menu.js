import React,{Component} from 'react';
import logo from '../../assets/img/opflix-logo-verde.png';
import '../../components/Menu/Menu.css'
import { parseJwt } from "../../services/auth"
// import {Link} from 'react-router-dom'
// import { history, Role } from '@/_helpers';
// import { authenticationService } from '../../services';
// import { PrivateRoute } from '../../../src/index';
// import Administrador from '../../pages/Administrador/Administrador';
// import Home from '../../pages/Home/App';
// import Login from '../../pages/Login/Login'
import { Link } from 'react-router-dom';
class Menu extends Component{

    constructor(){
        super();
        this.state = {
            permissao: localStorage.getItem('usuario-opflix') != null ? parseJwt().sub : null,
            token: localStorage.getItem('usuario-opflix')
            
        }
        console.log(this.state.permissao)
    }
    // componentDidMount(){
    //     this.setState({permissao: parseJwt().TipoDeUsuario})
    // }
    // componentDidMount() {
    //     authenticationService.currentUser.subscribe(x => this.setState({
    //         currentUser: x,
    //         isAdmin: x && x.role === Role.Admin
    //     }));
    // }
    // logout() {
    //     authenticationService.logout();
    //     history.push('/login');
    // }


    render(){
        // const { currentUser, isAdmin } = this.state;
        
        {/* <div> */}
        {/* {currentUser &&
            <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link">Home</Link>
            {isAdmin && <Link to="/administradir" className="nav-item nav-link">Admin</Link>}
            <a onClick={this.logout} className="nav-item nav-link">Logout</a>
            </div>
            </nav>
        } */}
        {/* <div className="jumbotron"> */}
        {/* <div className="container">
        <div className="row">
        <div className="col-md-6 offset-md-3">
        <Route path="/" component={Home} />
        <Route path="/administrador" component={Administrador} />
        <Route path="/login" component={Login} />
        </div>
        </div>
        </div>
        {/* </div> */}
        {/* </div> */} 
        
    return(
        
        <nav>
        <img src={logo} className="logo"/>
              {(this.state.permissao === null) ? (
                  <div className="menuDeslogado">
                        
                        <Link to="/" class="home">Home</Link>
                        <Link to="/titulos">Ver Titulos</Link>
                        <Link to="/login">Login</Link>
                    
                    </div>
         
                ):'' 
            }
                {(this.state.permissao  === "ADMINISTRADOR") ?(

                    <div className="menuAdm">
    
                
                    <Link to="/" class="home">Home</Link>
                    <Link to="/titulos">Administrar</Link>
                    <Link to="/login">Logout</Link>
                </div>
                ):''
                }

                {(this.state.permissao  === "CLIENTE") ?(

                <div className="menuCliente">


                <Link to="/" class="home">Home</Link>
                <Link to="/titulos">Ver Titulos</Link>
                <Link to="/login">Logout</Link>
                </div>
                ):''
                }
            </nav>
        
        
        );
}
}
export default Menu;