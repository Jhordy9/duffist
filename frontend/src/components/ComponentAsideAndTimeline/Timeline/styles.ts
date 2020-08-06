import styled from 'styled-components';

export const Container = styled.section`
  flex: 1;
  background: #292929;
  margin: 10px 20px 0;
`;

export const TimelineNav = styled.nav`
  border-bottom: 1px solid #8992be;
  padding: 10px 15px;

  a {
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    color: #8992be;
    margin-left: 20px;
  }

  a:first-child {
    margin-left: 0;
  }
`;

export const Tweets = styled.ul`
  list-style: none;

  li {
    border-bottom: 1px solid #8992be;
    padding: 10px 15px;
    display: flex;

    > img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
  }
`;

export const TweetInfo = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;

  strong {
    font-size: 14px;
    font-weight: 500;

    span {
      font-weight: 400;
      color: #9a9a9a;
    }
  }

  p {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const TweetAction = styled.div`
  display: flex;
  margin-top: 20px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #8992be;
    font-weight: 500;
    font-size: 12px;
    margin-left: 30px;

    img {
      margin-right: 4px;
    }
  }

  a:first-child {
    margin-left: 0;
  }
`;
