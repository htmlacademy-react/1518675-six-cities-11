import {Notification} from '../../types/notification';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {nanoid} from 'nanoid';

type NotificationType = {
  notifications: Notification[];
}

const initialState: NotificationType = {
  notifications: []
};

export const notifications = createSlice ({
  name: NameSpace.Notifications,
  initialState,
  reducers: {
    pushNotification: (state, action: PayloadAction<Omit<Notification, 'id'>>) => {
      const id = nanoid();
      state.notifications.push({id, ...action.payload});
    },
    clearNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter((item) => item.id !== action.payload);
    }

  }
});

export const {pushNotification, clearNotification} = notifications.actions;
