import React,{Component} from 'react';
import { parseJwt } from "../../services/auth"
import Menu from '../../components/Menu/Menu';
import Rodape from '../../components/Rodape/Rodape';
import './Titulos.css';
import Up from '../../assets/img/up.png'
import Dark from '../../assets/img/dark.png'
import HouseOfCards from '../../assets/img/house-of-cards.png'
import Cosmos from '../../assets/img/cosmos.png'
import DrEstranho from '../../assets/img/dr-estranho.png'
import Twd from '../../assets/img/twd.png'
import MaldicaoResidenciaHill from '../../assets/img/maldicao-residencia-hill.png'
import ViuvaNegra from '../../assets/img/viuva-negra.png'
import Simpsons from '../../assets/img/simpsons.png'
import Pianista from '../../assets/img/pianista.png'
import DetonaHalph from '../../assets/img/detona-halph.png'
import MorganFreeman from '../../assets/img/historia-deus.png'
import ReiLeao from '../../assets/img/rei-leao.png'
import Git from '../../assets/img/git.png'
import BreakingBad from '../../assets/img/breaking-bad.png'
import ReiLeao2 from '../../assets/img/rei-leao2.png'
import LaCasaDePapel from '../../assets/img/la-casa-de-papel.png'
import ToyStory4 from '../../assets/img/toy-story4.png'
import Deadpool from '../../assets/img/deadpool.png'
import Guardioes from '../../assets/img/guardioes.png'
import BeeMovie from '../../assets/img/bee-movie.png'
class Titulos extends Component{
    
    constructor(){
        super();
        this.state = {
            lista:[],
            

        }
    }

    componentDidMount(){
      fetch('http://localhost:5000/api/titulos')
      .then(response => response.json())
      .then(data => this.setState({ lista: data}));
      
      }
    
      






    render(){
        return(
            <div>
                <Menu/>
                <div className="conteudo">

                
                <div className="branco">
                <h1>AQUI ESTÃO TODOS OS TÍTULOS E SEUS ATRIBUTOS</h1>
                <div className="legenda">


                  <h3 className="l0">Nome</h3>
                  <h3 className="l1">Sinópse</h3>
                  <h3 className="l2">Duração (h)</h3>


                  <h3 className="l3">Data de<br/> Lançamento</h3>
                  <h3 className="l4">Classificação</h3>
                  <h3 className="l5">Categoria</h3>

                  <h3 className="l6">Plataforma</h3>
                  <h3 className="l7">Produtora</h3>
                  <h3 className="l8">Tipo de <br/>título</h3>
                </div>

                {this.state.lista.map(element =>{
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
      
              
                              </div>
                  <h2 className="trailers">Veja os trailers!</h2>
            
            <div className='informacoes_titulo'>


                        <div className="d1">
                          

                            <div className='q1'>
                            
                              <img src={Up}/>
                                <a href="https://www.youtube.com/watch?v=BDCSncUZxvs"  target="_blank">Up Altas Aventuras</a>
                         
                              
                            </div>
                            <div className='q2'>
                              <img src={Dark}/>
                              <a href="https://www.youtube.com/watch?v=rrwycJ08PSA">Dark</a>
                            </div>
                            <div className="q3">
                              <img src={HouseOfCards}/>
                              <a href="https://www.youtube.com/watch?v=2OdjW2WSfp8">House of Crads</a>

                            </div>
                              
                        </div>
                              <br/>
                        <div className="d2">
                            <div className="q4">
                              

                              <img src={Cosmos}/>
                              <a href="https://www.youtube.com/watch?v=DiVN-GFYLGo">Cosmos</a>
                            </div>
                            <div className="q5">

                              <img src={DrEstranho}/>
                              <a href="https://www.youtube.com/watch?v=YUfWrIcX4zw">Dr. Estranho</a>
                            </div>
                            <div className="q6">
                              <img src={Twd}/>
                              <a href="https://www.youtube.com/watch?v=DHQzM5Ee4cw">The Walking Dead</a>

                            </div>
                        </div>
                              <br/>
                        <div className="d3">
                            <div className="q7">

                              <img src={MaldicaoResidenciaHill}/>
                              <a href="https://www.youtube.com/watch?v=di2hosfnjnE">A maldição<br/> da residência Hill</a>
                            </div>
                            <div className='q8'>
                                
                              <img src={ViuvaNegra}/>
                              <a href="https://www.youtube.com/watch?v=d1UE3uWU14Y">Viuva Negra</a>
                            </div>
                            <div className='q9'>
                                
                              <img src={Simpsons}/>
                              <a href="https://www.youtube.com/watch?v=_UlD0AbDYGU">Os Simpsons</a>
                            </div>
                        </div>
                              <br/>
                        <div className="d4">
                            <div className="q10">

                              <img src={Pianista}/>
                              <a href="https://www.youtube.com/watch?v=BFwGqLa_oAo">O Pianista</a>
                            </div>
                            <div className="q11">

                              <img src={DetonaHalph}/>
                              <a href="https://www.youtube.com/watch?v=MsoG4LnjhL0">Detona Ralph</a>
                            </div>
                            <div className="q12">

                              <img src={MorganFreeman}/>
                              <a href="https://www.youtube.com/watch?v=5A0_VvldLYA">A história de Deus <br/>com Morgan Freeman</a>
                            </div>
                        </div>
                              <br/>
                        <div className="d5">
                            <div className="q13">

                              <img src={ReiLeao}/>
                              <a href="https://www.youtube.com/watch?v=rHiHRhbTv-Q">Rei Leão</a>
                            </div>
                            <div className="q14">

                              <img src={Git}/>
                              <a href="https://www.youtube.com/watch?v=UbJLOn1PAKw">O git Perfeito</a>
                            </div>
                            <div className="q15">

                              <img src={BreakingBad}/>
                              <a href="https://www.youtube.com/watch?v=HhesaQXLuRY">Breaking Bad</a>
                            </div>
                        </div>
                              <br/>
                        <div className="d6">
                          <div className="q16">

                              <img src={ReiLeao2}/>
                              <a href="https://www.youtube.com/watch?v=WBDAsucUg58">Rei Leão 2</a>
                          </div>
                          <div className="q17">

                              <img src={LaCasaDePapel}/>
                              <a href="https://www.youtube.com/watch?v=VaqMTLNhSvM">La Casa De Papel</a>
                          </div>
                          <div className="q18">

                              <img src={ToyStory4}/>
                              <a href="https://www.youtube.com/watch?v=76CslX-q5C4">Toy Story 4</a>
                          </div>
                              
                        </div>
                              <br/>
                        <div className="d7">
                          <div className="q19">

                              <img src={Deadpool}/>
                              <a href="https://www.youtube.com/watch?v=a7t-avKlpkc">Deadpool</a>
                          </div>
                          <div className="q20">

                              <img src={Guardioes}/>
                              <a href="https://www.youtube.com/watch?v=4-i8nTNSQFI">Guardiões da Galáxia</a>
                          </div>
                          <div className="q21">

                              <img src={BeeMovie}/>
                              <a href="https://www.youtube.com/watch?v=VONRQMx78YI">Bee Movie</a>
                          </div>
                        </div>


            </div>
                        
          </div>
                <Rodape/>
            </div>
        );
    }
}
export default Titulos;