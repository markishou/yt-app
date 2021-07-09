import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

    const App = () => {
        const [ selectedVideo, setSelectedVideo ] = useState(null);
        const [ videos, search ] = useVideos('Kanye');
        
        useEffect(() => {
            setSelectedVideo(videos[0]);
        }, [videos])

        //Because the component is calling a function (search) that updates a piece of state the component will still re render
        
        return (
            <div className="ui container">
                <div className="ui segment">
                    <div className="ui huge header">
                        Yootube
                    </div>
                </div>
                <SearchBar onFormSubmit={search} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={videos} onVideoSelect={setSelectedVideo}/>
                        </div>                       
                    </div>
                </div>
            </div>
        );
    }



//ui container className makes a margin on the sides of the searchbar so it doesnt fill the whole screen

export default App;