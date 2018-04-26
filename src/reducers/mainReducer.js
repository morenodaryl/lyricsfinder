const initialState = {
    artist: '',
    song: '',
    history: []
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SONG":
            const {artist, song, lyrics} = action.payload;
            let historyToPush = [{ artist, song, lyrics }];
            if(state.history.length > 0){
                const {history} = state; 
                const first = history[0]
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
                history: [
                    ...historyToPush, 
                    ...state.history.slice(0,4)
                ]
            }
            break;
        case 'SET_NOT_FOUND':
            state = {
                ...state,
                found: false,
                searching: false
            }
            break;
        case 'SEARCHING':
            state = {
                ...state,
                searching: true
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