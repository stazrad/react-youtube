// PACKAGES //
import _ from 'lodash';
import React, { Component } from 'react';
import { render } from 'react-dom';
import YTSearch from 'youtube-api-search';

// COMPONENTS //
import SearchBar   from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList   from './components/video_list';

// CONSTANTS //
const API_KEY = 'AIzaSyAiqJS5MKVBokDnhw2mNXKkUUEx9k3iHdI';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.onSearch('rocket league');

        this.onSearch = this.onSearch.bind(this);
        this.onSelectVideo = this.onSelectVideo.bind(this);
    }

    onSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }

    onSelectVideo(video) {
        this.setState({selectedVideo:video})
    }

    render() {
        const videoSearch = _.debounce((term) => { this.onSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearch={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onSelectVideo={this.onSelectVideo}
                    videos={this.state.videos} />
            </div>
        );
    };
}

render(<App />, document.querySelector('.container'));
