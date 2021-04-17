import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

function Cadastrar(){
  return  <section className="padding-5 ">
            <label htmlfor="email">Email:</label>
            <input type="text" placeholder="Digite seu email" name="email" id="email" className="input white  border-bottom-red-focus " />
            <label htmlfor="senha">Senha:</label>
            <input type="password" placeholder="Digite sua senha" name="senha" id="senha" className="input white border-bottom-red-focus" />

            <a className="btn btn-success btn-block">
              <FontAwesomeIcon icon={faSave} /> Save
            </a>
          </section>;
}

export default Cadastrar;