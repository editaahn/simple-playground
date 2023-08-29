import { FC, useCallback, useEffect, useRef, useState } from 'react';

type ScrollImageAnimationProps = {
  getImageUrl: (frame: number) => string;
  frameCount: number;
  showOnFull?: boolean;
};

// TO-DO: image preload
export const ScrollImageAnimation: FC<ScrollImageAnimationProps> = ({
  getImageUrl,
  frameCount,
  showOnFull,
}) => {
  const getImageUrlRef = useRef(getImageUrl);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasContextRef = useRef<CanvasRenderingContext2D | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imageList = useRef<HTMLImageElement[]>([]);
  const [isVisible, setIsVisible] = useState(!showOnFull);

  const loadImage = useCallback(
    async (frame: number): Promise<HTMLImageElement> => {
      let currentImage = imageList.current[frame];

      if (!currentImage) { // Loading images 
        const image = new Image();
        image.src = getImageUrlRef.current(frame);
        imageList.current[frame] = image;
        currentImage = image;
      }

      await currentImage.decode(); // Waiting for parsing its data and preparing it for rendering on a canvas or displaying

      return currentImage;
    },
    [getImageUrlRef]
  );

  const resize = useCallback(() => {
    canvasRef.current!.width = window.innerWidth;
    canvasRef.current!.height = window.innerHeight;
  }, []);

  const getCurrentScrollFrame = useCallback(() => {
    const containerTop = containerRef.current?.offsetTop || 0;
    const canvasHeight = canvasRef.current?.height || 0;
    const containerHeight = containerRef.current?.offsetHeight || 1;
    const scrollTop = window.scrollY;
    const scrollFraction = Math.max(0, Math.min(1, (scrollTop - containerTop) / (containerHeight - canvasHeight)));
    return Math.floor(scrollFraction * (frameCount - 1));
  }, [frameCount]);

  const updateFrameValue = useCallback(() => {
    const currentFrameCount = getCurrentScrollFrame();
    const isFrameValid = currentFrameCount >= 0 && currentFrameCount < frameCount;

    if (showOnFull) {
      setIsVisible(isFrameValid);
    }

    if (isFrameValid) {
      loadImage(currentFrameCount).then((image) => {
        canvasContextRef.current?.drawImage(image, 0, 0, canvasRef.current!.width, canvasRef.current!.height);
      });
    }
  }, [frameCount, getCurrentScrollFrame, loadImage, showOnFull]);

  const onCanvasReady = (canvas: HTMLCanvasElement | null) => {
    if (!canvas) return;

    canvasRef.current = canvas;
    const context = canvas.getContext('2d');
    canvasContextRef.current = context;

    if (context) {
      context.imageSmoothingEnabled = true;
    }
  };

  useEffect(() => {
    const scrollListener = () => {
      updateFrameValue();
    };
    const resizeListener = () => {
      canvasRef.current!.width = window.innerWidth;
      canvasRef.current!.height = window.innerHeight;
      updateFrameValue();
    };

    // Ensuring not calling event.preventDefault(), in order to enhance scrolling speed
    window.addEventListener('scroll', scrollListener, { passive: true });
    window.addEventListener('resize', resizeListener);

    // Initial rendering
    resize();
    updateFrameValue();

    return () => {
      window.removeEventListener('scroll', scrollListener);
      window.removeEventListener('resize', resizeListener);
    };
  }, [resize, updateFrameValue]);

  return (
    <div style={{ position: 'relative', height: '100%' }} ref={containerRef}>
      <div style={{ position: 'sticky', top: 0, visibility: isVisible ? 'visible' : 'hidden' }}>
        <canvas ref={onCanvasReady} width="100%" height="100%" />
      </div>
    </div>
  );
};
