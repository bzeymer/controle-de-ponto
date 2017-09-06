import { TOGGLE_NAV } from '../actions/nav';

export default function (state = {
                                    open: false,
                                    selectedPath: "/"
                                }, action) {
    switch (action.type) {
        case TOGGLE_NAV:
            let newNavState = Object.assign({}, state);
            newNavState.open = !newNavState.open;
            return newNavState;
        default:
            return state;
    }
}
