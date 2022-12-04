import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';


const initialState = {

};

export const UserComments = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    // .addCase(setError, (state, action) => {
    //   state.error = action.payload;
    // })
    ;
  }
});
