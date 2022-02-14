import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRef, useState } from 'react';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const Placeholder = ({ setClickedPlay, setPlaying }) => {
    return (
        <div
            className="relative cursor-pointer max-h-[348px]"
            onClick={(e) => {
                setClickedPlay(true);
                setPlaying(true);
            }}>
            <div className="absolute z-10 h-full  w-full flex items-center justify-center">
                <Image src="/play-btn.png" height={160} width={160} quality={100} />
            </div>

            <Image src="/placeholder-video-homepage.png" height={348} width={548} quality={80} />
        </div>
    );
};

const Video = () => {
    const [playing, setPlaying] = useState(false);
    const [hovering, setHover] = useState(false);
    const [clickedPlay, setClickedPlay] = useState(false);
    const vidRef = useRef(null);

    return (
        <div className="relative">
            <Image
                alt="browser frame image"
                src="/browser-frame.png"
                // placeholder="blur"
                width={548}
                height={26}
            />
            <div className="relative -mt-2 max-w-[548px] max-h-[348px] shadow-lg rounded-lg">
                {clickedPlay ? (
                    <div className="relative homepage-video" style={{ paddingTop: '56.25%' }}>
                        <ReactPlayer
                            playing={playing}
                            ref={vidRef}
                            controls={true}
                            url="./jesse_demo.mp4"
                            onPlay={() => {}}
                            onClickPreview={() => setPlaying(true)}
                            width="100%"
                            height="100%"
                            className="absolute top-0 left-0"
                        />
                    </div>
                ) : (
                    <Placeholder setClickedPlay={setClickedPlay} setPlaying={setPlaying} />
                )}
            </div>
        </div>
    );
};

export default Video;
