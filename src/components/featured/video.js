/* eslint-disable jsx-a11y/click-events-have-key-events */
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRef, useState } from 'react';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const Placeholder = ({ setClickedPlay, setPlaying }) => {
    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
            className="relative cursor-pointer max-h-[348px]"
            onClick={() => {
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
            <div className="relative -mt-2 max-w-[548px] max-h-[348px] shadow-lg rounded-lg">
                <Image
                    src="/assets/telegram-demo.gif"
                    alt="loading..."
                    width="1920"
                    height="1080"
                />
            </div>
        </div>
    );
};

export default Video;
