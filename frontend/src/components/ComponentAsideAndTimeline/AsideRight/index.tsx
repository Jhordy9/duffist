import React from 'react';

import {
  Container,
  Follow,
  FollowTitle,
  FollowList,
  FollowProfile,
  FollowInfo,
} from './styles';

import Avatar from '../../../assets/avatar.png';
import Button from '../../Button/index';

const AsideRight: React.FC = () => {
  return (
    <Container>
      <Follow>
        <FollowTitle>
          <strong>Who to follow</strong>
          <a href="/">Refresh</a>
          <a href="/">View all</a>
        </FollowTitle>

        <FollowList>
          <li>
            <FollowProfile>
              <img src={Avatar} alt="Avatar" />
              <FollowInfo>
                <strong>
                  Spade <span>@spade_be</span>
                </strong>
                <Button style={{ height: 27, marginTop: 4 }}>Follow</Button>
              </FollowInfo>
            </FollowProfile>
            <a href="/">x</a>
          </li>
        </FollowList>
        <FollowList>
          <li>
            <FollowProfile>
              <img src={Avatar} alt="Avatar" />
              <FollowInfo>
                <strong>
                  Spade <span>@spade_be</span>
                </strong>
                <Button style={{ height: 27, marginTop: 4 }}>Follow</Button>
              </FollowInfo>
            </FollowProfile>
            <a href="/">x</a>
          </li>
        </FollowList>
        <FollowList>
          <li>
            <FollowProfile>
              <img src={Avatar} alt="Avatar" />
              <FollowInfo>
                <strong>
                  Spade <span>@spade_be</span>
                </strong>
                <Button style={{ height: 27, marginTop: 4 }}>Follow</Button>
              </FollowInfo>
            </FollowProfile>
            <a href="/">x</a>
          </li>
        </FollowList>
      </Follow>
    </Container>
  );
};

export default AsideRight;
