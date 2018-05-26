import {combineReducers} from 'redux';
import { hasErrored, isLoading, weatherIcon} from './items';

export default combineReducers({
    weatherIcon,
    isLoading,
    hasErrored
});