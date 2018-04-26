import axios from 'axios';

export function searchSong(artist, song) {
    return (dispatch) => {
        dispatch({
            type: 'SEARCHING'
        });
        axios.get('https://api.lyrics.ovh/v1/'+artist+'/'+song)
        .then((res) => {
            dispatch({
                type: 'SET_SONG',
                payload: { artist, song, lyrics: res.data.lyrics }
            });
            document.title = `${song.toUpperCase()} - ${artist.toUpperCase()}`;
        })
        .catch((er) => {
            dispatch({
                type: 'SET_NOT_FOUND'
            });
            document.title = 'LYRICS FINDER';
        });
    }
}

export function reorderHistory(index) {
    return {
        type: 'REORDER_HISTORY',
        payload: index
    };
}

export function reset() {
    document.title = 'LYRICS FINDER';
    return {
        type: 'RESET'
    }
}