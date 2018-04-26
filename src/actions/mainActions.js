import axios from 'axios';

export function searchSong(artist, song, local = false) {
    return (dispatch) => {
        dispatch({
            type: 'SEARCHING'
        });
        const url = 'https://api.lyrics.ovh/v1/' + artist + '/' + song;
        axios.get(url).then((res) => {
            dispatch({
                type: 'SET_SONG',
                payload: { artist, song, lyrics: res.data.lyrics }
            });
            document.title = `${song.toUpperCase()} - ${artist.toUpperCase()}`;
        }).catch((er) => {
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

export function setLocalSong(artist, song, lyrics, index) {
    document.title = `${song.toUpperCase()} - ${artist.toUpperCase()}`;
    return {
        type: 'SET_LOCAL_SONG',
        payload: {
            artist, song, lyrics, index
        }
    }
}