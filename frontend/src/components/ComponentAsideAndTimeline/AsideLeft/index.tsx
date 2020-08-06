import React from 'react';

import {
  Container,
  Profile,
  ProfileName,
  ProfileUser,
  ProfileBio,
  ProfileInfos,
  ProfileWidget,
  ProfileFollowers,
  FollowersList,
  ProfileImages,
  ImagesList,
} from './styles';
import Avatar from '../../../assets/avatar.png';
import Place from '../../../assets/place.svg';
import Url from '../../../assets/url.svg';
import Joined from '../../../assets/joined.svg';
import Born from '../../../assets/born.svg';
import Followers from '../../../assets/followers.svg';
import Pictures from '../../../assets/images.svg';
import Example from '../../../assets/profile-glyph-black-icon-vector.jpg';

const AsideLeft: React.FC = () => {
  return (
    <Container>
      <Profile>
        <img src={Avatar} alt="Avatar" />
        <ProfileName>Jhordy Isensee</ProfileName>
        <ProfileUser>@jhordy</ProfileUser>
        <ProfileBio>Developer Node.js | ReactJS | React Native</ProfileBio>

        <ProfileInfos>
          <li>
            <img src={Place} alt="Place" />
            Porto, Portugal
          </li>
          <li>
            <img src={Url} alt="Url" />
            github.com/jhordy9
          </li>
          <li>
            <img src={Joined} alt="Joined" />
            Joined August 2020
          </li>
          <li>
            <img src={Born} alt="Born" />
            Born the 09th of March 1995
          </li>
        </ProfileInfos>

        <ProfileWidget>
          <ProfileFollowers>
            <strong>
              <img src={Followers} alt="Followers" />
              73 followers that you know
            </strong>
            <FollowersList>
              <li>
                <img src={Example} alt="Example" />
              </li>
              <li>
                <img src={Example} alt="Example" />
              </li>
              <li>
                <img src={Example} alt="Example" />
              </li>
              <li>
                <img src={Example} alt="Example" />
              </li>
              <li>
                <img src={Example} alt="Example" />
              </li>
              <li>
                <img src={Example} alt="Example" />
              </li>
              <li>
                <img src={Example} alt="Example" />
              </li>
              <li>
                <img src={Example} alt="Example" />
              </li>
              <li>
                <img src={Example} alt="Example" />
              </li>
              <li>
                <img src={Example} alt="Example" />
              </li>
            </FollowersList>
          </ProfileFollowers>

          <ProfileImages>
            <strong>
              <img src={Pictures} alt="Pictures" />
              166 photos and videos
            </strong>
            <ImagesList>
              <li>
                <img src={Example} alt="Example" />
              </li>
              <li>
                <img src={Example} alt="Example" />
              </li>
              <li>
                <img src={Example} alt="Example" />
              </li>
              <li>
                <img src={Example} alt="Example" />
              </li>
              <li>
                <img src={Example} alt="Example" />
              </li>
              <li>
                <img src={Example} alt="Example" />
              </li>
            </ImagesList>
          </ProfileImages>
        </ProfileWidget>
      </Profile>
    </Container>
  );
};

export default AsideLeft;
