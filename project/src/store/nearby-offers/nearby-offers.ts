import {createSlice} from '@reduxjs/toolkit';
import {FetchStatus, NameSpace} from '../../const';
import {fetchNearbyOffersAction, fetchSingleOfferAction} from '../api-actions';
import {OfferType} from '../../types/offer-type';

type nearbyOffersType = {
  nearbyOffers: OfferType[] | null;
  nearbyOffersStatus: FetchStatus;
}

const initialState: nearbyOffersType = {
  nearbyOffers: null,
  nearbyOffersStatus: FetchStatus.Idle
};

export const nearbyOffers = createSlice({
  name: NameSpace.NearbyOffers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.nearbyOffersStatus = FetchStatus.Loading;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
        state.nearbyOffersStatus = FetchStatus.Success;
        // state.offers = action.payload;
        // state.isLoading = false;
      })
      .addCase(fetchNearbyOffersAction.rejected, (state) => {
        state.nearbyOffersStatus = FetchStatus.Failed;
        // state.offers = [];
        // state.isLoading = false;
        // state.noData = true;
      });
  }
});
