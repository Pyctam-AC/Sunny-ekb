import { FC, useEffect, useRef } from 'react';
import styles from './PromoVideo.module.scss';
import videoSrc from '../../assets/videos/video_schastlivaya_2.mp4';

const PromoVideo: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnd = () => {
      // По окончании видео, останавливаем воспроизведение
      if (videoElement) {
        videoElement.pause();
      }
    };

    const handleCanPlay = () => {
      // Когда видео готово к воспроизведению, начинаем воспроизведение
      videoElement?.play();
    };

    // Устанавливаем обработчики событий
    videoElement?.addEventListener('ended', handleVideoEnd);
    videoElement?.addEventListener('canplay', handleCanPlay);

    // Автоматически воспроизводим видео через 3 секунды
    const timeoutId = setTimeout(() => {
      if (videoElement) {
        videoElement.play();
      }
    }, 1000);

    // Очищаем таймаут и обработчики событий при размонтировании компонента
    return () => {
      clearTimeout(timeoutId);
      videoElement?.removeEventListener('ended', handleVideoEnd);
      videoElement?.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  return (
    <div className={styles.containerVideo}>
      <video
        ref={videoRef}
        className={styles.PromoVideo}
        /* controls */ preload="metadata">
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};

export default PromoVideo;


