import {combineReducers} from 'redux';
import { hasErrored, isLoading, weatherConditions} from './items';

export default combineReducers({
    weatherConditions,
    isLoading,
    hasErrored
});