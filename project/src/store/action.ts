import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction<{city: string}>('offer/changeCity');

export const changeSorting = createAction<{sorting: string}>('main/changeSorting');
