import { useEffect, useState } from 'react';

const useYoutubePlaylist = (playlist) => {
    const [videos, setVideos] = useState([]);

    // CHANGE API KEY

    useEffect(() => {
        const fetchVids = async () => {
            let res = await fetch(
                `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&playlistId=${playlist}&key=AIzaSyCKE1OUJCt4w-N7msonuGg8nyKdwYcWnnM`
            ) // Integration Playlist
                .then((res) => res.json())
                .then((res) => {
                    return setVideos(res.items);
                });
        };

        fetchVids();
    }, []);

    return videos;
};

export default useYoutubePlaylist;
