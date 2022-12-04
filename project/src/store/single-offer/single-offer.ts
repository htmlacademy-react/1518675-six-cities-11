import {createSlice} from '@reduxjs/toolkit';
import {FetchStatus, NameSpace} from '../../const';
import {fetchSingleOfferAction} from '../api-actions';
import {OfferType} from '../../types/offer-type';

type SingleOfferType = {
  offer: OfferType | null;
  offerStatus: FetchStatus;
}

const initialState: SingleOfferType = {
  offer: null,
  offerStatus: FetchStatus.Idle
};

export const singleOffer = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSingleOfferAction.pending, (state) => {
        state.offerStatus = FetchStatus.Loading;
      })
      .addCase(fetchSingleOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.offerStatus = FetchStatus.Success;
        // state.offers = action.payload;
        // state.isLoading = false;
      })
      .addCase(fetchSingleOfferAction.rejected, (state) => {
        state.offerStatus = FetchStatus.Failed;
        // state.offers = [];
        // state.isLoading = false;
        // state.noData = true;
      });
  }
});
