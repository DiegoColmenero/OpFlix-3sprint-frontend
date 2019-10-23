import React,{Component} from 'react';
import Menu from '../../components/Menu/Menu'
import './Administrador.css';



class Administrador extends Component{


    constructor(){
        super();
        this.state = {
            lista:[],
            listaTitulo:[],
            categoria: '',
            nome: '',
            sinopse: '',
            duracao: '',
            dataLancamento: '',
            classificacao: '',
            nomeCategoria: '',
            nomePlataforma: '',
            nomeProdutora: '',
            nomeTipoTitulo: '',
            sucesso: '',
            idCategoria: '',
            token: localStorage.getItem('usuario-opflix')

            
        }
    }


    //CATEGORIAS
    componentDidMount(){
      fetch('http://localhost:5000/api/categorias')
      .then(response => response.json())
      .then(data => this.setState({ lista: data}));
      
      }
      atualizarCategoria = (e) =>{
        e.preventDefault();
        this.setState({categoria: e.target.value});
        
      }
       
      adicionarItem = () =>{
        fetch('http://localhost:5000/api/categorias',{
          method: 'POST', body: JSON.stringify({categoria: this.state.categoria}),
          headers: {"Accept": "application/json",
                    "Authorization": "Bearer " + this.state.token}
        })
          .then(response => response.json())
          .then(data => console.log(data))
          // .then(fetch(this.adicionaCategoriaNaLista))
          .catch(error => console.log(error));
  
        
      };
      deletarCategoria = (e) =>{
        fetch('http://localhost:500/api/categorias/' + e.idCategoria,{
          method: 'DELETE', headers:{"Accept" : "application/json",
          "Authorization" : "Bearer " + this.state.token}

        })
      }

      //TITULOS
      verTitulos = () =>{
        fetch('http://localhost:5000/api/titulos')
        .then(response => response.json())
        .then(data => this.setState({ listaTitulo: data}));
      }

        atualizarNome = (e) =>{
            e.preventDefault();
            this.setState({nome: e.target.value});
            console.log(this.state.nome)
        }
        atualizarSinopse = (e) =>{
            e.preventDefault();
            this.setState({sinopse: e.target.value});
            console.log(this.state.sinopse)
        }
        atualizarDuracao = (e) =>{
            e.preventDefault();
            this.setState({duracao: e.target.value});
        }
        atualizarDataLancamento = (e) =>{
            e.preventDefault();
            this.setState({dataLancamento: e.target.value});
        }
        atualizarClassificacao = (e) =>{
            e.preventDefault();
            this.setState({classificacao: e.target.value});
        }
        atualizarNomeCategoria = (e) =>{
            e.preventDefault();
            this.setState({nomeCategoria: e.target.value});
        }
        atualizarNomePlataforma = (e) =>{
            e.preventDefault();
            this.setState({nomePlataforma: e.target.value});
        }
        atualizarNomeProdutora = (e) =>{
            e.preventDefault();
            this.setState({nomeProdutora: e.target.value});
        }
        atualizarNomeTipoTitulo = (e) =>{
            e.preventDefault();
            this.setState({nomeTipoTitulo: e.target.value});
        }

        adicionaTituloNaLista = (e) =>{
            fetch('http://localhost:5000/api/tiutlos')
              .then(response => response.json())
              .then(data => this.setState({ listaTitulo: data}))
              .catch(error => console.log(error));
          }  

          adicionarItemTitulo = (e) =>{
            console.log(this.state.nome, this.state.sinopse, this.state.duracao, this.state.classificacao)
            fetch('http://localhost:5000/api/titulos',{
              method: 'POST', body: JSON.stringify({
                nome: this.state.nome,
                sinopse: this.state.sinopse,
                duracao: Number(this.state.duracao),
                dataLancamento: this.state.dataLancamento,
                classificacao: this.state.classificacao,
              
                idCategoria: Number (this.state.nomeCategoria),
                idPlataforma: Number(this.state.nomePlataforma),
                idProdutora: Number(this.state.nomeProdutora),
                idTipoTitulo: Number(this.state.nomeTipoTitulo)
            }),
              headers: {"Accept": "application/json",
                        "Authorization": "Bearer " + this.state.token}
            })
              .then(response => response.json())
              .then(data => console.log(data))
              .then(fetch(this.adicionaTituloNaLista))
              .then(sucesso => {
                this.setState({sucesso: "Titulo cadastrado com sucesso!"});
            })
              .catch(error => console.log(error));
      
            
          };
        
    
    render(){
        return(
            <div>
                <Menu/>
                <h1 className="titulo_categoria">Categorias</h1>
                              <div className="cadastro">

                                  <h2>Cadastrar <br/>Categoria</h2>
                                  <form>
                                    <input type="text" 
                                    className="digitarCategoria" 
                                    value={this.state.categoria} 
                                    onChange={this.atualizarCategoria}>
                                    </input>
                                    <button
                                    id="administrador__button"
                                    onClick={this.adicionarItem}
                                    >
                                    <span>Cadastrar </span></button>
                                   
                                  </form>
                              </div>
                              {this.state.lista.map(element =>{
                                return(
                                  <div className="categorias">
                                                      <h4>{element.categoria}</h4>
                                                      
              
                                                  </div>
              
                                                  
                                              )
                                            })}
                              
                                    <button
                                    id="administrador__buttonBuscarTitulos"
                                    onClick={this.verTitulos}
                                    >
                                    <span>Ver Titulos </span></button>
                {this.state.listaTitulo.map(element =>{
                  return(
                    <div className="titulinhos">
                                        <h4 className="primeiro">{element.nome}</h4>
                                        <h4 className="e1">{element.sinopse}</h4>
                                        <h4 className="e2">{element.duracao}</h4>
                                        <h4 className="e3">{element.dataLancamento}</h4>
                                        <h4 className="e4">{element.classificacao}</h4>
                                        <h4 className="e5">{element.nomeCategoria}</h4>
                                        <h4 className="e6">{element.nomePlataforma}</h4>
                                        <h4 className="e7">{element.nomeProdutora}</h4>
                                        <h4 className="e8">{element.nomeTipoTitulo}</h4>

                                    </div>
                                )
                              })}

                              <div className="cadastrar_titulo">
                                <h1>Cadastrar Titulo</h1>
                            <input type="text" 
                                    className="nome" 
                                    placeholder="Nome" 
                                    value={this.state.nome} 
                                    onChange={this.atualizarNome}>   
                            </input>
                            <input type="text" 
                                    className="sinopse" 
                                    placeholder="Sinópse" 
                                    value={this.state.sinopse} 
                                    onChange={this.atualizarSinopse}>   
                            </input>
                            <input type="text" 
                                    className="duracao" 
                                    placeholder="Duração" 
                                    value={this.state.duracao} 
                                    onChange={this.atualizarDuracao}>   
                            </input>
                            <input type="text" 
                                    className="nomeCategoria" 
                                    placeholder="Categoria" 
                                    value={this.state.nomeCategoria} 
                                    onChange={this.atualizarNomeCategoria}>   
                            </input>
                            <input type="text" 
                                    className="nomePlataforma" 
                                    placeholder="Plataforma" 
                                    value={this.state.nomePlataforma} 
                                    onChange={this.atualizarNomePlataforma}>   
                            </input>
                            <input type="text" 
                                    className="nomeProdutora" 
                                    placeholder="Produtora" 
                                    value={this.state.nomeProdutora} 
                                    onChange={this.atualizarNomeProdutora}>   
                            </input>
                            <input type="text" 
                                    className="nomeTipoTitulo" 
                                    placeholder="Tipo de Titulo" 
                                    value={this.state.nomeTipoTitulo} 
                                    onChange={this.atualizarNomeTipoTitulo}>   
                            </input>
                            <label>Data de Lançamento</label>
                            <input type="date" 
                                    className="data"  
                                    value={this.state.dataLancamento} 
                                    onChange={this.atualizarDataLancamento}>   
                            </input>               
                            <label>Classificação</label>   
                            <select className="classificacao" 
                                    placeholder="Classificação"
                                    value={this.state.classificacao}
                                    onChange={this.atualizarClassificacao}>
                                    <option value="L">L</option>
                                    <option value="10+">10+</option>
                                    <option value="12+">12+</option>
                                    <option value="14+">14+</option>
                                    <option value="16+">16+</option>
                                    <option value="18+">18+</option>
                            </select>
                            {/* <p className="text"
                    style={{color: "green", textAlign: "center"}}               
                    > */}
                    {/* {this.state.sucesso} */}
                {/* </p> */}
                            <button
                                    id="administrador__buttonCadastrar"
                                    onClick={this.adicionarItemTitulo}
                                    >
                                    <span>Cadastrar </span></button>
                           


                              </div>
                <div className="deletar_categoria">
                  <label>Deletar Categoira</label>
                  <select>
                  {this.state.lista.map(element =>{
                    return(
                      // <div className="selecionar_as_categorias">
                                  <option value={element.idCategoria}>{element.categoria}</option>
                                  // </div>
                                )})}
                      </select>
                      <button
                                    id="administrador__buttonCadastrar"
                                    onClick={this.deletarCategoria}
                                    >
                                    <span>Deletar </span></button>
                </div>
            </div>
        );
    }
}
export default Administrador