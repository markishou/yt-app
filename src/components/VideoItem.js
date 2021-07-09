import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {



    return (
        <div onClick={() => onVideoSelect(video)}className="video-item item">
            <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    )
};

//When we want to communicate from child to parent we usually use a call back.
//When we want to communicate form parent to child we usually use the props system

export default VideoItem;