import {
  getBadgeCount,
  setBadgeCount,
  onNotificationReceivedInForeground,
  onNotificationReceivedInBackground,
  onNotificationOpened
} from 'aws-amplify/push-notifications';

const notificationReceivedHandler = async notification => {
  console.log('notificationReceivedHandler', notification);
  
  let current_notification_count = await getBadgeCount();
  await setBadgeCount(current_notification_count + 1);
};

export const foregroundNotificationListener = () => {
  return onNotificationReceivedInForeground(notificationReceivedHandler);
};

export const backgroundNotificationListener = () => {
  onNotificationReceivedInBackground(notificationReceivedHandler);
};

const notificationOpenedHandler = notification => {
  console.log('notificationOpenedHandler', notification);
};

export const onNotificationOpenedListener = () => {
  return onNotificationOpened(notificationOpenedHandler);
};
