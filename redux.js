const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    url: '',
    datas: [],
}

// Reducers 
const rootReducer = (state = initialState, action) => {
    console.log(action.type)
    switch(action.type){
        case "SET_URL": 
            return {
                ...state,
                url: state.url = 'url baru'
            }
            break;
        case "GET_DATA_FROM_DB":
            action.newData.map(data => {
                state.datas.push(data)
            })
            return {
                ...state
            }
            break;
        default:
            return {
                ...state
            }
    }
    return state;
}

// Store
const store = createStore(rootReducer);

// Subscription
store.subscribe(() => {
    console.log('STORE CHANGED: \n', store.getState())
})

// Dispatch Action
store.dispatch({
    type: "GET_DATA_FROM_DB",
    newData: [
        {
            ok: true,
            result: {
                code: "KCveN",
                short_link: "shrtco.de/KCveN",
                full_short_link: "https://shrtco.de/KCveN",
                short_link2: "9qr.de/KCveN",
                full_short_link2: "https://9qr.de/KCveN",
                share_link: "shrtco.de/share/KCveN",
                full_share_link: "https://shrtco.de/share/KCveN",
                original_link: "http://example.org/very/long/link.html"
            }
        },
        {
            ok: true,
            result: {
                code: "KCveN",
                short_link: "shrtco.de/KCveN",
                full_short_link: "https://shrtco.de/KCveN",
                short_link2: "9qr.de/KCveN",
                full_short_link2: "https://9qr.de/KCveN",
                share_link: "shrtco.de/share/KCveN",
                full_share_link: "https://shrtco.de/share/KCveN",
                original_link: "http://example.org/very/long/link.html"
            }
        },
        {
            ok: true,
            result: {
                code: "KCveN",
                short_link: "shrtco.de/KCveN",
                full_short_link: "https://shrtco.de/KCveN",
                short_link2: "9qr.de/KCveN",
                full_short_link2: "https://9qr.de/KCveN",
                share_link: "shrtco.de/share/KCveN",
                full_share_link: "https://shrtco.de/share/KCveN",
                original_link: "http://example.org/very/long/link.html"
            }
        }
    ]
})