import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';

import ProfileData from '../../components/ProfileData';

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

        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;
