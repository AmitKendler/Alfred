import OneSignal from 'react-native-one-signal';

const onRecieved = (notification) => {
  console.log("Notification received: ", notification);
};

const onOpened = (openResult) => {
  console.log('Message: ', openResult.notification.payload.body);
  console.log('Data: ', openResult.notification.payload.additionalData);
  console.log('isActive: ', openResult.notification.isAppInFocus);
  console.log('openResult: ', openResult);
}

const onRegistered = (notifData) => {
  console.log("Device had been registered for push notifications!", notifData);
}

const onIds = (device) => {
  console.log('Device info: ', device);
}

export default (onNotif) => {
  OneSignal.addEventListener('received', onRecieved);
  OneSignal.addEventListener('opened', () => onNotif);
  OneSignal.addEventListener('registered', onRegistered);
  OneSignal.addEventListener('ids', onIds);
}
