import {combineReducers} from 'redux';
import Objreducer from './Objreducer';

const rootReducer = combineReducers({
    post:Objreducer
});

export default rootReducer;