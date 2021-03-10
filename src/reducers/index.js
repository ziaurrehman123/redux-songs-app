
import {combineReducers} from 'redux'
import { selectSong } from "../actions";

const songReducer = ()=>{
    return[
        {
            title:'abcd',
            duration:"2:03"
        },
        {
            title:'defg',
            duration:"4:03"
        },
        {
            title:'hijk',
            duration:"3:03"
        },
        {
            title:'lmnop',
            duration:"5:03"
        }
    ];
};

const selectedSongReducer =(selectedSong=null, action)=>{
    if (action.type==="SONG_SELECTED"){
return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});

