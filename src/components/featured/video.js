/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/image';
const Video = () => {
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
