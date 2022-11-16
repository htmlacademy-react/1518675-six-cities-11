import {createAction} from '@reduxjs/toolkit';

// export const filterOffers = createAction('offer/filter', (value) => {
//   return {
//     payload: value
//   }
// });

export const changeCity = createAction<{city: string}>('offer/changeCity');
