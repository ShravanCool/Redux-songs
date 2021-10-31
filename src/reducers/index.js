import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Title 1', duration: '4:05' },
        { title: 'Title 2', duration: '2:05' },
        { title: 'Title 3', duration: '3:05' },
        { title: 'Title 4', duration: '1:05' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
