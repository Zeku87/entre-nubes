import {combineReducers} from 'redux';
import { hasErrored, isLoading, weather, city, forecast} from './items';

export default combineReducers({
    weather,
    forecast,
    city,
    isLoading,
    hasErrored
});