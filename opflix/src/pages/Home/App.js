import React,{Component} from 'react';
import Menu from '../../components/Menu/Menu';
import Rodape from '../../components/Rodape/Rodape';
import './App.css';
import { parseJwt } from "../../services/auth"
import { Link } from 'react-router-dom';
import opflix from '../../assets/img/banner-opflix.png';
import vikings from '../../assets/img/banner-vikings.png'
import viuva from '../../assets/img/banner-viuvanegra.png'
import joker from '../../assets/img/banner-joker.png'


class App extends Component{

  constructor(){
      super();
     
      this.state = {
          pagina_atual: 0
      }
    }
    
    componentDidMount(){
      this.showSlides();
      // console.log(parseJwt())
    }

    showSlides = () =>  {
      // var i;
      // var slides = document.getElementsByClassName("mySlides");

        // slides[i].style.display = "none";
        // this.setState({pagina_atual: i})

      if (this.state.pagina_atual > 2) {this.state.pagina_atual = -1}
      // slides[slideIndex-1].style.display = "block";
      setTimeout(() => {
        let pagina = this.state.pagina_atual;
        pagina++;
        this.setState({pagina_atual: pagina})
        this.showSlides();
      }, 5500);
    }

// }
// function App(){

  render(){
  return (
    <div className="App">
      {/* <Script> */}
    {/* {showSlides()

    } */}
      <Menu/>

      <div className="slideshow-container">
        
          {/* PRIMEIRO SLIDE */}
        <div className={`${this.state.pagina_atual === 0 ? "" : "mySlides" } fade`}>
          <img src={opflix} style={{
            display: (this.state.pagina_atual === 0) ? 'block': 'none',
            width: "100%"
          }} />
          <div className="text1">Só na OpFlix você fica dentro de tudo sobre os próximos lançamentos,<br />suas respectivas produtoras, categorias,<br />quando e onde estão disponíveis, e muito mais!</div>
        </div>

          {/* SEGUNDO SLIDE */}
          <div className={`${this.state.pagina_atual === 1 ? "" : "mySlides" } fade`}>
            <img src={vikings} style={{
              display : (this.state.pagina_atual === 1) ? 'block' : 'none',
              width: "100%"
            }} />
            <div className="text">A 6ª temporada de Vikings estará disponível no dia 06/12 nos canais da History</div>
          </div>

          {/* TERCEIRO SLIDE */}
          <div className={`${this.state.pagina_atual === 2 ? "" : "mySlides" } fade`}>
            <img src={viuva} style={{
              display : (this.state.pagina_atual === 2) ? 'block' : 'none',
              width: "100%"
            }} />
            <div className="text">Viúva Negra vai aos cinemas em 2020</div>
          </div>

          {/* QUARTO SLIDE */}
          <div className={`${this.state.pagina_atual === 3 ? "" : "mySlides" } fade`}>
            <img src={joker} style={{
              display : (this.state.pagina_atual === 3) ? 'block' : 'none',
              width: "100%"
            }} />
            <div className="text">The Joker já está disponível nos cinemas</div>
          </div>


      </div>
    
      {/* </Script> */}
          <Rodape/>
    </div>

  );
}
}

export default App;
