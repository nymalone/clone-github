import React from 'react';

import { Container } from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link  className={'username'} to={'/nymalone'}>
          nymalone
        </Link>

        <span>/</span>

        <Link  className={'reponame'} to={'/nymalone/aprova-ai-client'}>
          aprova-ai-client
        </Link>
      </Breadcrumb>

      <p>Projeto final desenvolvido no bootcamp Web Development Fullstack da IRONHACK - premiado como um dos melhores projetos.</p>
    </Container>
  )
}

export default Repo;
