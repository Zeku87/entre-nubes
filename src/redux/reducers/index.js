import {combineReducers} from 'redux';
import { hasErrored, isLoading, weather, city} from './items';

export default combineReducers({
    weather,
    city,
    isLoading,
    hasErrored
});