// import { combineReducers } from 'redux'
import reduceReducers from 'reduce-reducers';

import * as ACTION from './actions'

/* Modal reducer */
const initialState = {
    isLoading: false,
    isLoggedIn: false,
    modalState: {
        type: null,
        error: null,
    },
    userData: null,
    error: null,
    accessToken: null,
};
function modalState(state = initialState, action) {
    switch (action.type) {
        case ACTION.SHOW_MODAL:
            // return Object.assign({}, state, {
            //     modalState: Object.assign({}, state.modalState, { type: action.modalType }),
            // });
            return Object.assign({}, state, {
                modalState: { type: action.modalType, error: null },
            });
        case ACTION.HIDE_MODAL:
            return Object.assign({}, state, {
                modalState: { type: null },
            });
        default:
            return state;
    }
}

/* Register reducer */
function register(state = initialState, action) {
    switch (action.type) {
        case ACTION.REGISTER_REQUEST:
            return Object.assign({}, state, { isLoading: true });
        case ACTION.REGISTER_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                modalState: Object.assign({}, state.modalState, { error: null }),
            });
        case ACTION.REGISTER_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                modalState: Object.assign({}, state.modalState, { error: action.error }),
            });
        default:
            return state;
    }
}

/* Login reducer */
function login(state = initialState, action) {
    switch (action.type) {
        case ACTION.LOGIN_REQUEST:
            return Object.assign({}, state, { isLoading: true });
        case ACTION.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                isLoggedIn: true,
                modalState: Object.assign({}, state.modalState, { error: null }),
                accessToken: action.accessToken,
            });
        case ACTION.LOGIN_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                isLoggedIn: false,
                modalState: Object.assign({}, state.modalState, { error: action.error }),
                accessToken: null,
            });
        case ACTION.LOGOUT:
            return Object.assign({}, state, {
                isLoading: false,
                isLoggedIn: false,
                modalState: Object.assign(state.modalState, { error: null }),
                accessToken: null,
                userData: null,
            });
        default:
            return state;
    }
}

/* User reducer */
function userState(state = initialState, action) {
    switch (action.type) {
        case ACTION.FETCH_USER_REQUEST:
            return Object.assign({}, state, { isLoading: true });
        case ACTION.FETCH_USER_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                userData: action.userData,
                error: null,
            });
        case ACTION.FETCH_USER_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                userData: null,
                error: action.error,
            });
        default:
            return state;
    }
}

const rootReducer = reduceReducers(
    modalState,
    register,
    login,
    userState,
);

export default rootReducer;
