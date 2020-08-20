import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, GithubLogo, SearchForm} from './styles';
import { ThemeName } from '../../styles/theme';

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    navigate('/' + search.toLowerCase().trim())
  }

  function toggleTheme() {
    // vou fazer uma condicional -> se o nome do tema ja for ligth eu vou trocar pra dark, se for dar vou trocar pra light
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  }

  return (
    <Container>
      <GithubLogo onClick={toggleTheme} />
      <SearchForm onSubmit={handleSubmit}>
        <input
          placeholder="Enter username or Repo..."
          value={search}
          onChange={e => setSearch(e.currentTarget.value)}
        />
      </SearchForm>
    </Container>
  );
}

export default Header;
