import { combineReducers } from "redux";
import searchReducer from '../reducers/searchReducer'
import itemReducer from '../reducers/itemReducer'
import { userReducer } from '../reducers/userReducer'
const rootReducer = combineReducers({
	searchReducer: searchReducer,
	itemReducer: itemReducer,
	userReducer: userReducer
})

export default rootReducer;