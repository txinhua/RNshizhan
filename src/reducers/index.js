import { combinReducers } from 'redux'
import bookReducer from './bookReducer'

const rootReducer = combinReducers({
    bookReducer
})

export default rootReducer
