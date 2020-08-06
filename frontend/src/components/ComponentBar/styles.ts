import styled from 'styled-components';

export const Container = styled.div``;

export const Bar = styled.section`
  height: 59px;
  background: #292929;
  box-shadow: 0 1px 1px rgba(81, 85, 101, 0.3);
`;

export const ContentBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 285px;

  height: 100%;
  margin: 0 auto;
  max-width: 1110px;
`;

export const UlBar = styled.ul`
  list-style: none;
  display: flex;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 15px;

    span {
      color: #f5f8fa;
      font-size: 12px;
      font-weight: 500;
    }

    strong {
      font-size: 18px;
      color: #f5f8fa;
      font-weight: 500;
      margin-top: 2px;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
`;
