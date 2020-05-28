import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img src="https://avatars3.githubusercontent.com/u/19882853?s=460&u=2ee7308cc528a29d8a3507d4644acfe7b98966fd&v=4"
        alt="Igor Cezatte"/>
        <div>
          <strong>igorcezatte/fastfeet</strong>
          <p>a new way to keep your body in movement</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img src="https://avatars3.githubusercontent.com/u/19882853?s=460&u=2ee7308cc528a29d8a3507d4644acfe7b98966fd&v=4"
        alt="Igor Cezatte"/>
        <div>
          <strong>igorcezatte/fastfeet</strong>
          <p>a new way to keep your body in movement</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img src="https://avatars3.githubusercontent.com/u/19882853?s=460&u=2ee7308cc528a29d8a3507d4644acfe7b98966fd&v=4"
        alt="Igor Cezatte"/>
        <div>
          <strong>igorcezatte/fastfeet</strong>
          <p>a new way to keep your body in movement</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>


  </>
  )
};

export default Dashboard;
