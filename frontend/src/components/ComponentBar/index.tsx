import React from 'react';

import { Container, Bar, ContentBar, UlBar, Actions } from './styles';
import More from '../../assets/more.svg';
import Button from '../Button/index';

const ComponentBar: React.FC = () => {
  return (
    <Container>
      <Bar>
        <ContentBar>
          <UlBar>
            <li>
              <span>Tweets</span>
              <strong>1234</strong>
            </li>
            <li>
              <span>Followings</span>
              <strong>459</strong>
            </li>
            <li>
              <span>Followers</span>
              <strong>392</strong>
            </li>
            <li>
              <span>Favorites</span>
              <strong>120</strong>
            </li>
          </UlBar>
          <Actions>
            <Button style={{ marginRight: 20 }}>Follow</Button>
            <img src={More} alt="More" />
          </Actions>
        </ContentBar>
      </Bar>
    </Container>
  );
};

export default ComponentBar;
