import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos} from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';


const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={'nymalone'}
            name={'Nykolle Malone'}
            avatarUrl={'https://avatars2.githubusercontent.com/u/54912285?v=4'}
            followers={139}
            following={31}
            company={'Sami'}
            location={'São Paulo, Brazil'}
            email={'malone.nykolle@gmail.com'}
            blog={'linkedin.com/in/nykollemalone'}
          />

        </LeftSide>
        <RightSide>
          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard
                  key={n}
                  username={'nymalone'}
                  reponame={'aprova-ai-client'}
                  description={'Projeto final desenvolvido no bootcamp Web Development Fullstack da IRONHACK - premiado como um dos melhores projetos.'}
                  language={n % 3 === 0 ? 'Javascript' : 'TypeScript'}
                  stars={9}
                  forks={3}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;
