import {createSlice} from '@reduxjs/toolkit';
import {FetchStatus, NameSpace} from '../../const';
import {CommentType} from '../../types/comment-type';
import {fetchCommentsAction, newCommentAction} from '../api-actions';
import {NewComment} from '../../types/data-type';

type CommentsType = {
  comments: CommentType[];
  commentsStatus: FetchStatus;
  newComment: NewComment | null;
  newCommentStatus: FetchStatus;
}

const initialState: CommentsType = {
  comments: [],
  newComment: null,
  commentsStatus: FetchStatus.Idle,
  newCommentStatus: FetchStatus.Idle
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
      })
      .addCase(newCommentAction.pending, (state) => {
        state.newCommentStatus = FetchStatus.Loading;
      })
      .addCase(newCommentAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.newCommentStatus = FetchStatus.Success;
      })
      .addCase(newCommentAction.rejected, (state) => {
        state.comments = [];
        state.newCommentStatus = FetchStatus.Failed;
      });
  }
});
