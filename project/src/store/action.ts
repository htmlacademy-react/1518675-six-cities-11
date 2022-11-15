import {createAction} from '@reduxjs/toolkit';

// export const filterOffers = createAction('offer/filter', (value) => {
//   return {
//     payload: value
//   }
// });

export const filterOffers = createAction<{city: string}>('offer/filter');
