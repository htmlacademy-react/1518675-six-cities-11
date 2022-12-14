import {createAction} from '@reduxjs/toolkit';
import {Url} from '../const';

export const redirectToRoute = createAction<Url>('router/redirectToRoute');
