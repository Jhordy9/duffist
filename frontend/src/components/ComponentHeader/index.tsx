import React from 'react';

import {
  Container,
  Header,
  Content,
  NavHeader,
  UlHeader,
  SearchHeader,
  InputHeader,
} from './styles';
import Logo from '../../assets/logo.svg';
import Avatar from '../../assets/avatar.png';
import Home from '../../assets/home.svg';
import Notifications from '../../assets/notification.svg';
import Messages from '../../assets/message.svg';
import Button from '../Button/index';

const ComponentHeader: React.FC = () => {
  return (
    <Container>
      <Header>
        <Content>
          <NavHeader>
            <UlHeader>
              <li>
                <img src={Home} alt="Home" />
                Home
              </li>
              <li>
                <img src={Notifications} alt="Notifications" />
                Notifications
              </li>
              <li>
                <img src={Messages} alt="Messages" />
                Messages
              </li>
            </UlHeader>
          </NavHeader>
          <img src={Logo} alt="Logo" />

          <SearchHeader>
            <InputHeader type="text" placeholder="Search on Duffist" />
            <img src={Avatar} alt="Avatar" />
            <Button>Tweet</Button>
          </SearchHeader>
        </Content>
      </Header>
    </Container>
  );
};

export default ComponentHeader;
