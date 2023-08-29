import { ScrollImageAnimation } from '@libs';
import { scrollImageSources } from '../constants/scroll-image-sources'

const MAX_LENGTH = 80;

const getImageUrl = (frame: number) => {
  const frameWithPadding = frame >= 10 ? frame : '0' + frame;
  return `https://i.postimg.cc/${scrollImageSources[frame]}/frame-${frameWithPadding}-delay-0-05s.png`;
}

export const ScrollImageAnimationPage: React.FC = () => {
  return (
    <div style={{ height: '500vh' }}>
      <h1>Scroll Image Animation Test</h1>
      <ScrollImageAnimation
        getImageUrl={getImageUrl}
        frameCount={MAX_LENGTH}
        showOnFull={true}
      />
      <div style={{ backgroundColor: 'gray', height: 200, width: '100%' }}>The end!</div>
    </div>
  );
};
