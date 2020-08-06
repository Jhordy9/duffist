import React from 'react';

import {
  Container,
  TimelineNav,
  Tweets,
  TweetInfo,
  TweetAction,
} from './styles';
import Avatar from '../../../assets/avatar.png';
import Comments from '../../../assets/comments.svg';
import Retweet from '../../../assets/retweet.svg';
import Like from '../../../assets/like.svg';

const Timeline: React.FC = () => {
  return (
    <Container>
      <TimelineNav>
        <a href="/">Tweets</a>
        <a href="/">Tweets and replies</a>
        <a href="/">Medias</a>
      </TimelineNav>

      <Tweets>
        <li>
          <img src={Avatar} alt="Avatar" />
          <TweetInfo>
            <strong>
              Benoit Vrins <span>@Exibit</span>
            </strong>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              laborum expedita dolorum earum magni dolorem! Explicabo, maiores
              aliquam. Sunt libero iure recusandae, illo dicta nisi ut expedita.
              In, deserunt architecto!
            </p>
            <TweetAction>
              <a href="/">
                <img src={Comments} alt="Comments" />5
              </a>
              <a href="/">
                <img src={Retweet} alt="Retweet" />4
              </a>
              <a href="/">
                <img src={Like} alt="Like" />3
              </a>
            </TweetAction>
          </TweetInfo>
        </li>
        <li>
          <img src={Avatar} alt="Avatar" />
          <TweetInfo>
            <strong>
              Benoit Vrins <span>@Exibit</span>
            </strong>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              laborum expedita dolorum earum magni dolorem! Explicabo, maiores
              aliquam. Sunt libero iure recusandae, illo dicta nisi ut expedita.
              In, deserunt architecto!
            </p>
            <TweetAction>
              <a href="/">
                <img src={Comments} alt="Comments" />5
              </a>
              <a href="/">
                <img src={Retweet} alt="Retweet" />4
              </a>
              <a href="/">
                <img src={Like} alt="Like" />3
              </a>
            </TweetAction>
          </TweetInfo>
        </li>
        <li>
          <img src={Avatar} alt="Avatar" />
          <TweetInfo>
            <strong>
              Benoit Vrins <span>@Exibit</span>
            </strong>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              laborum expedita dolorum earum magni dolorem! Explicabo, maiores
              aliquam. Sunt libero iure recusandae, illo dicta nisi ut expedita.
              In, deserunt architecto!
            </p>
            <TweetAction>
              <a href="/">
                <img src={Comments} alt="Comments" />5
              </a>
              <a href="/">
                <img src={Retweet} alt="Retweet" />4
              </a>
              <a href="/">
                <img src={Like} alt="Like" />3
              </a>
            </TweetAction>
          </TweetInfo>
        </li>
        <li>
          <img src={Avatar} alt="Avatar" />
          <TweetInfo>
            <strong>
              Benoit Vrins <span>@Exibit</span>
            </strong>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              laborum expedita dolorum earum magni dolorem! Explicabo, maiores
              aliquam. Sunt libero iure recusandae, illo dicta nisi ut expedita.
              In, deserunt architecto!
            </p>
            <TweetAction>
              <a href="/">
                <img src={Comments} alt="Comments" />5
              </a>
              <a href="/">
                <img src={Retweet} alt="Retweet" />4
              </a>
              <a href="/">
                <img src={Like} alt="Like" />3
              </a>
            </TweetAction>
          </TweetInfo>
        </li>
        <li>
          <img src={Avatar} alt="Avatar" />
          <TweetInfo>
            <strong>
              Benoit Vrins <span>@Exibit</span>
            </strong>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              laborum expedita dolorum earum magni dolorem! Explicabo, maiores
              aliquam. Sunt libero iure recusandae, illo dicta nisi ut expedita.
              In, deserunt architecto!
            </p>
            <TweetAction>
              <a href="/">
                <img src={Comments} alt="Comments" />5
              </a>
              <a href="/">
                <img src={Retweet} alt="Retweet" />4
              </a>
              <a href="/">
                <img src={Like} alt="Like" />3
              </a>
            </TweetAction>
          </TweetInfo>
        </li>
        <li>
          <img src={Avatar} alt="Avatar" />
          <TweetInfo>
            <strong>
              Benoit Vrins <span>@Exibit</span>
            </strong>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              laborum expedita dolorum earum magni dolorem! Explicabo, maiores
              aliquam. Sunt libero iure recusandae, illo dicta nisi ut expedita.
              In, deserunt architecto!
            </p>
            <TweetAction>
              <a href="/">
                <img src={Comments} alt="Comments" />5
              </a>
              <a href="/">
                <img src={Retweet} alt="Retweet" />4
              </a>
              <a href="/">
                <img src={Like} alt="Like" />3
              </a>
            </TweetAction>
          </TweetInfo>
        </li>
      </Tweets>
    </Container>
  );
};

export default Timeline;
