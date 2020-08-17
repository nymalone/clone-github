import React from "react";
import { Link } from "react-router-dom";

import { Container, Topside, RepoIcon, Botside, StarIcon, ForkIcon } from "./styles";

interface Props {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
}

const RepoCard: React.FC<Props> = ({
  username,
  reponame,
  description,
  language,
  stars,
  forks,
}) => {
  // se a linguagem do repositorio for existente eu vou passar o nome da linguagem em lowercase pro css cuidar da cor
  // e se não tiver uma linguagem definida vou colocar a cor other
  const languageClass = language ? language.toLowerCase() : "other";

  return (
    <Container>
      <Topside>
        <header>
          <RepoIcon />
          <Link to={`/${username}/${reponame}`}>{reponame}</Link>
        </header>

        <p>{description}</p>
      </Topside>
      <Botside>
        <ul>
          <li>
            <div className={`language ${languageClass}`} />
            <span>{language}</span>
          </li>
          <li>
            <StarIcon />
            <span>{stars}</span>
          </li>
          <li>
            <ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </Botside>
    </Container>
  );
};

export default RepoCard;
