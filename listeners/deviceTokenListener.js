import {onTokenReceived} from 'aws-amplify/push-notifications';
import store from '../redux/store';
import { updateToken } from '../redux/action';

const tokenReceivedHandler = token => {
  console.log('tokenReceivedHandler', token);
  store.dispatch(updateToken(token));
};

export const tokenListener = () => {
  console.log('tokenListener');
  return onTokenReceived(tokenReceivedHandler);
};