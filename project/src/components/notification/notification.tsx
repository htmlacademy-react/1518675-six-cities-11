import {useAppDispatch, useAppSelector} from '../../hooks';
import {getNotifications} from '../../store/notifications/selectors';
import {toast} from 'react-toastify';
import {Notification as INotification} from '../../types/notification';
import {clearNotification} from '../../store/notifications/notifications';

function Notification(): JSX.Element {
  const notifications = useAppSelector(getNotifications);
  const dispatch = useAppDispatch();

  const renderNotification = () => {
    notifications.forEach((notification: INotification) => {
      const toastOptions = {
        autoClose: notification.duration || 4000,
        toastId: notification.id,
        onClose: () => dispatch(clearNotification(notification.id)),
      };

      switch (notification.type) {
        case 'error':
          toast.error(notification.message, toastOptions);
          break;
        case 'success':
          toast.success(notification.message, toastOptions);
          break;
        case 'info':
          toast.info(notification.message, toastOptions);
          break;
        case 'warning':
          toast.warning(notification.message, toastOptions);
          break;
        default:
          return null;
      }
    });
  };

  return <>{renderNotification()}</>;
}

export default Notification;
