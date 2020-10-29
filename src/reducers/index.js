import { combineReducers } from "redux"

const songsReducer = () => {
    return [
        { title: "Smells Like Teen Spirit", duration: "3:00",},
        {title: "No Scrubs", duration: "3:05",},
        {title: "Drop It Like It's Hot", duration: "3:30",},
        {title: "Baby Got Back", duration: "2:55",}
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
 if (action.type === "SONG_SELECTED") {
     return action.payload;
 }
 return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})