/* eslint-disable react/jsx-indent */
import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...rest
}) => (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );

export default Button;
