import {configureStore, combineReducers} from '@reduxjs/toolkit'
import UserSlice from '../Reducer/UserReducer'
import ProductSlice from '../Reducer/ProductReducer'

//combine reducer
const projectReducer = combineReducers({
    users: UserSlice.reducer,
    product: ProductSlice.reducer
})

const AppStore =  configureStore({
    reducer: projectReducer,
    devTools: true
})

export default AppStore