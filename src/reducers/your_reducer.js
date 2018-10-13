import { STARTER_REDUCER } from '../constants';

export default (state = [], action) => {
    switch(action.type) {
        case STARTER_REDUCER:
            return action;
        default:
            return state;
    }
}