import React from 'react';
import '../../components/Rodape/Rodape.css'
import facebook from '../../assets/img/facebook_branco.png'
import twitter from '../../assets/img/twitter_branco.png'
import whats from '../../assets/img/whats_branco.png'

function Rodape(){
return(
<footer>
    <div class="redes_sociais">
        <img class="facebook" src={facebook} width="40px"/>
        <img class="twitter" src={twitter} width="40px"/>
        <img class="whats" src={whats} width="40px"/>
    </div>
    <p>Imagens meramente ilustrativas. Copyright 2019 © Senai OpFlix – Todos os direitos reservados.<br/> É proibida a reprodução parcial ou total do conteúdo desse site.
            SENAI INFORMÁTICA SÃO PAULO S.A - CNPJ: 26.896.348/0001-00</p>
</footer>
)

    
}
export default Rodape; 
