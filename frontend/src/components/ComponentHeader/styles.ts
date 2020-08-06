import styled from 'styled-components';

import Search from '../../assets/search.svg';

export const Container = styled.div``;

export const Header = styled.header`
  height: 46px;
  background: #292929;
  box-shadow: 0 1px 1px rgba(81, 85, 101, 0.3);
  position: relative;
  z-index: 1;
`;

export const Content = styled.div`
  max-width: 1170px;
  height: 100%;
  margin: 0 auto;
  padding: 0 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavHeader = styled.nav``;

export const UlHeader = styled.ul`
  display: flex;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    margin-left: 30px;

    font-size: 13px;
    color: #f5f8fa;
    font-weight: 500;

    img {
      margin-right: 7px;
    }
  }

  li:first-child {
    margin: 0;
  }
`;

export const SearchHeader = styled.div`
  display: flex;

  img {
    height: 34px;
    width: 34px;
    border-radius: 50%;
    margin: 0 15px;
  }
`;

export const InputHeader = styled.input`
  width: 220px;
  height: 35px;
  padding: 0 30px 0 12px;
  border-radius: 16px;

  border: 1px solid #8992be;
  color: #262e40;
  font-size: 12px;
  font-weight: 400;
  background: #e6ecf0 url(${Search}) no-repeat 190px center;
`;
