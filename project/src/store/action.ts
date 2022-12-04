import {createAction} from '@reduxjs/toolkit';
import {APIRoute} from '../const';

export const redirectToRoute = createAction<APIRoute>('user/redirectToRoute');
