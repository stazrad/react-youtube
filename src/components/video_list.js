// PACKAGES //
import React from 'react';

// COMPONENTS //
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video, i) => {
        return (
            <VideoListItem
                key={video.etag}
                onSelectVideo={props.onSelectVideo}
                video={video} />
        );
    });

    return (
        <ul className='col-md-4 list-group'>
            {videoItems}
        </ul>
    );
}

export default VideoList;
