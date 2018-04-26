const initialState = {
    artist: '',
    song: '',
    local: false,
    history: []
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SONG":
            var { artist, song, lyrics } = action.payload;
            let historyToPush = [{ artist, song, lyrics: action.payload.lyrics }];
            if(state.history.length > 0){
                let {history} = state; 
                let first = history[0]
                if (first.artist === artist && first.song === song){
                    historyToPush = []
                }
            }
            state = {
                ...state,
                artist,
                song,
                lyrics,
                found: true,
                searching: false,
                local: false,
                history: [
                    ...historyToPush.concat(...state.history).slice(0, 5)
                ]
            }
            break;
        case 'SET_LOCAL_SONG':
            var { artist: a, song: s, lyrics: l, index } = action.payload;
            let { history } = state;
            let obj = history[index];
            const h3 = history.slice(0, index).concat(history.slice(index + 1));
            state = {
                ...state,
                artist: a,
                song: s,
                lyrics: l,
                found: true,
                searching: false,
                local: true,
                history: [
                    obj,
                    ...h3
                ]
            }
            break;
        case 'SET_NOT_FOUND':
            state = {
                ...state,
                found: false,
                searching: false,
                local: false
            }
            break;
        case 'SEARCHING':
            state = {
                ...state,
                searching: true,
                local: false
            }
            break;
        case 'REORDER_HISTORY':
            const h = state.history;
            const i = action.payload;
            const h2 = h.slice(0, i).concat(h.slice(i + 1));
            state = {
                ...state,   
                history: [...h2]
            }
            break;
        case 'RESET':
            state = {
                ...initialState,
                history: state.history
            };
            break;
        default:
            break;
    }
    return state;
};

export default mainReducer;