import { STARTER_REDUCER } from '../constants';

export function reducerAction(param) {
    const action = {
        type: STARTER_REDUCER,
        param
    }
    return action;
}