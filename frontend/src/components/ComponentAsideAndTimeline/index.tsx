import React from 'react';

import { Container } from './styles';
import AsideLeft from './AsideLeft/index';
import Timeline from './Timeline/index';
import AsideRight from './AsideRight/index';

const ComponentAside: React.FC = () => {
  return (
    <Container>
      <AsideLeft />
      <Timeline />
      <AsideRight />
    </Container>
  );
};

export default ComponentAside;
