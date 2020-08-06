import styled from 'styled-components';

export const Container = styled.aside`
  max-width: 290px;
  padding: 15px;
  margin-top: 10px;

  background: #292929;
`;

export const Follow = styled.div``;

export const FollowTitle = styled.div`
  display: flex;
  align-items: baseline;

  strong {
    font-size: 18px;
    font-weight: 500;
    color: #f5f8fa;
  }

  a {
    font-size: 12px;
    color: #8992be;
    text-decoration: none;
    position: relative;
    padding-left: 10px;
  }

  a::before {
    content: '';
    width: 2px;
    height: 2px;
    border-radius: 50%;
    margin: 0 5px;
    background: #f5f8fa;
    position: absolute;
    left: 0;
    top: 6px;
  }
`;

export const FollowList = styled.ul`
  list-style: none;

  margin-top: 10px;

  li {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccd6dd;
    padding-bottom: 10px;
    margin-bottom: 10px;

    > a {
      text-decoration: none;
      color: #ccd6dd;
      font-size: 12px;
    }
  }

  :last-child {
    li {
      padding-bottom: 0;
      margin-bottom: 0;
      border: 0 !important;
    }
  }
`;

export const FollowProfile = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
`;

export const FollowInfo = styled.div`
  margin-left: 5px;
  display: flex;
  flex-direction: column;

  strong {
    font-weight: 500;
    font-size: 14px;
    color: #f5f8fa;

    span {
      font-weight: 400;
      color: #9a9a9a;
    }
  }
`;
