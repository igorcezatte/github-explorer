import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHub Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
        Voltar
      </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://avatars3.githubusercontent.com/u/19882853?s=460&u=2ee7308cc528a29d8a3507d4644acfe7b98966fd&v=4" alt="foto" />
          <div>
            <strong>igorcezatte/gobarber</strong>
            <p>descrição</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>2</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>0</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="123123">
          <div>
            <strong>123123</strong>
            <p>123123</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
