import Iframe from './iframe';
// Hooks
import useYoutubePlaylist from '../hooks/useYoutubePlaylist';

const Videos = ({ playlist }) => {
    const data = useYoutubePlaylist(playlist);
    return (
        <div
            className={`flex items-start gap-3 overflow-y-auto scrollbar scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-codeEditorBtn scrollbar-track-gray`}>
            {data?.map((vid) => {
                return (
                    <Iframe
                        key={vid?.contentDetails?.videoId}
                        id={vid?.contentDetails?.videoId}
                        snippet={vid?.snippet}
                    />
                );
            })}
        </div>
    );
};

export default Videos;
