import React,{Component} from 'react';
import Menu from '../../components/Menu/Menu'
import '../Login/Login.css'
import logo from '../../assets/img/opflix-logo-verde.png';

import Axios from 'axios';

class Login extends Component{

    constructor(){
        super();
        this.state = {
            email:  "",
            senha:  "",
            erro:   ""
        }
    }

    atualizaEstadoEmail = (event) =>{
        this.setState({email: event.target.value}) 
    }

    atualizaEstadoSenha = (event) =>{
        this.setState({senha: event.target.value})
    }

    efetuarLogin = (event) =>{
        event.preventDefault();
        // console.log(this.state);
        Axios.post("http://localhost:5000/api/login", {
            email: this.state.email,
            senha: this.state.senha 
        })

        .then(response => {
            if (response.status === 200) {
                console.log(response.data)
                localStorage.setItem("usuario-opflix",response.data.token);
                this.props.history.push('/titulos');
            }else{
                console.log('Erro')
            }
        })
        .catch(erro => {
            
            this.setState({erro: "Usuário ou senha inválidos"});
            console.log(erro)
        });
    }

    
    render(){
        return(
            <div id="login__loginA">



            <section className="container_flex">


      <div className="item__login">
        <div className="row">

          <div className="item" id="item__title">
              <img src={logo}/>
            <p className="text__login" id="item__description">
              Bem-vindo! Faça login <br/>para acessar sua conta.
            </p>
          </div>
          <form className="form"onSubmit={this.efetuarLogin}>
            <div className="item">
              <input
                className="input__login"
                placeholder="Email"
                onInput={this.atualizaEstadoEmail}
                type="text"
                name="username"
                id="login__email"
                />
                <p className="text__login"
                    style={{color: "red", textAlign: "center"}}               
                    >
                    {this.state.erro}
                </p>
            </div>
            <div className="item">
              <input
                className="input__login"
                placeholder="Senha"
                onInput={this.atualizaEstadoSenha}
                type="password"
                name="password"
                id="login__password"
                />
            </div>
            <div className="item">
              <button className="button"><span>Login </span></button>
            </div>
          </form>
        </div>
      </div>
    </section>
                </div>
    );
    
    }
    
}

export default Login