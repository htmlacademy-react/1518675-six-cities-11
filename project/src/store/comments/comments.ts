import {createSlice} from '@reduxjs/toolkit';
import {FetchStatus, NameSpace} from '../../const';
import {CommentType} from '../../types/comment-type';
import {fetchCommentsAction} from '../api-actions';

type CommentsType = {
  comments: CommentType[];
  commentsStatus: FetchStatus;
}

const initialState: CommentsType = {
  comments: [],
  commentsStatus: FetchStatus.Idle
};

export const comments = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsAction.pending, (state) => {
        state.commentsStatus = FetchStatus.Loading;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.commentsStatus = FetchStatus.Success;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.comments = [];
        state.commentsStatus = FetchStatus.Failed;
      });
  }
});
