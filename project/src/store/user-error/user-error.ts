import {UserError} from '../../types/data-type';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
// import {setError} from '../action';

const initialState: UserError = {
  error: null
};

export const userError = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // .addCase(setError, (state, action) => {
      //   state.error = action.payload;
      // });
  }
});
