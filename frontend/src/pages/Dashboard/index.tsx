import React from 'react';

import { Container, Content, Banner } from './styles';
import ComponentHeader from '../../components/ComponentHeader/index';
import ComponentBar from '../../components/ComponentBar/index';
import ComponentAsideAndTimeline from '../../components/ComponentAsideAndTimeline/index';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <ComponentHeader />
      <Content>
        <Banner />
        <ComponentBar />
        <ComponentAsideAndTimeline />
      </Content>
    </Container>
  );
};

export default Dashboard;
