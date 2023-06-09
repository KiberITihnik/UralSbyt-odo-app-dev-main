import React, { FC } from 'react';
import styles from './youtube-embed.module.css';
import classNames from 'classnames';
import YouTube from 'react-youtube';

export type YoutubeEmbedPropsType = {
  embedId: string;
  rotate?: boolean;
};

const YoutubeEmbed: FC<YoutubeEmbedPropsType> = ({ embedId, rotate = false }) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (e: any) => {
    // console.log(e.target);
  };

  return (
    // <div className={styles.videoResponsive}>
    //   <iframe
    //     width="560"
    //     height="315"
    //     src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
    //     title="YouTube video player"
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //     allowFullScreen
    //   />
    // </div>

    <YouTube
      videoId={embedId}
      opts={opts}
      onReady={onReady}
      className={classNames({
        [styles.rotate]: rotate,
      })}
    />
  );
};

export default YoutubeEmbed;
