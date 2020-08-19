import React from "react";
import { Link } from 'react-router-dom';

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from "./styles";

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className={"username"} to={"/nymalone"}>
          nymalone
        </Link>

        <span>/</span>

        <Link className={"reponame"} to={"/nymalone/aprova-ai-client"}>
          aprova-ai-client
        </Link>
      </Breadcrumb>

      <p>
        Projeto final desenvolvido no bootcamp Web Development Fullstack da
        IRONHACK - premiado como um dos melhores projetos.
      </p>
      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>3</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={"https://github.com/nymalone/aprova-ai-client"}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
