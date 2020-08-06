import styled from 'styled-components';

export const Container = styled.aside`
  width: 260px;
`;

export const Profile = styled.div`
  > img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 4px solid #008000;
    margin-top: -130px;
  }
`;

export const ProfileName = styled.h1`
  font-size: 21px;
  color: #f5f8fa;
  margin-top: 10px;
  font-weight: 500;
`;

export const ProfileUser = styled.span`
  font-size: 14px;
  color: #f5f8fa;
`;

export const ProfileBio = styled.p`
  margin-top: 15px;

  font-size: 14px;
  color: #f5f8fa;
`;

export const ProfileInfos = styled.ul`
  margin-top: 20px;
  list-style: none;

  li {
    font-size: 14px;
    color: #f5f8fa;

    display: flex;
    align-items: center;

    margin-top: 5px;

    img {
      margin-right: 10px;
    }
  }

  li:first-child {
    margin: 0;
  }
`;

export const ProfileWidget = styled.div`
  margin-top: 20px;

  strong {
    font-weight: 400;
    color: #f5f8fa;
    font-size: 14px;

    img {
      margin-right: 10px;
    }
  }
`;

export const ProfileFollowers = styled.div``;

export const FollowersList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  li {
    margin: 0 5px 5px 0;
    flex: 1 0 auto;

    img {
      margin-top: 15px;
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
  }
`;

export const ProfileImages = styled.div`
  margin-top: 20px;
`;

export const ImagesList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  li {
    margin: 0 5px 5px 0;
    flex: 1 0 auto;

    img {
      margin-top: 15px;
      width: 80px;
      height: 80px;
      border-radius: 8px;
    }
  }
`;
