import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import HomeActions from '../Redux/HomeRedux'

export function* getHome(api, action) {
    //   const { username } = action
    // make the call to the api
    const response = yield call(api.getHomeApi)
    console.log(response.data, "RES")

    if (response.ok) {
        // const firstUser = path(['data', 'items'], response)[0]
        // const avatar = firstUser.avatar_url
        // do data conversion here if needed
        yield put(HomeActions.HomeRequest(response.data))
    } else {
        yield put(HomeActions.HomeFailure())
    }
}
