import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  height: 34px;
  width: 90px;
  font-weight: 500;
  background: #8992be;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  border: 0;
  color: #262e40;
  border-radius: 16px;

  &:hover {
    background: ${shade(0.2, '#8992be')};
  }
`;
