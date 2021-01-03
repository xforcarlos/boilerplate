import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    HomeRequest: ["data"],
    HomeSuccess: ["payload"],
    HomeFailure: null
})

export const HomeTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    data: null,
    fetching: null,
    error: null,
    payload: []
})

/* ------------- Selectors ------------- */

export const HomeSelectors = {
    selectHome: state => state.data
}

/* ------------- Reducers ------------- */

// request the avatar for a user
export const request = (state, { data }) =>
    state.merge({ fetching: true, data, payload: [] })

// successful avatar lookup
export const success = (state, action) => {
    const { payload } = action
    return state.merge({ fetching: false, error: null, payload })
}

// failed to get the avatar
export const failure = (state) =>
    state.merge({ fetching: false, error: true, payload: [] })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.HOME_REQUEST]: request,
    [Types.HOME_SUCCESS]: success,
    [Types.HOME_FAILURE]: failure
})
