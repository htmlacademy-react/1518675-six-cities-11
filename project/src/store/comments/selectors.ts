import {createSelector} from '@reduxjs/toolkit';
import {FetchStatus, NameSpace} from '../../const';
import {State} from '../../types/state';
import {CommentType} from '../../types/comments-type';

export const getComments = (state: State): CommentType[] => state[NameSpace.Comments].comments;
export const getStatus = (state: State): FetchStatus => state[NameSpace.Comments].commentsStatus;

export const getCommentsStatus = createSelector([getStatus], (status) => ({
  isLoading: status === FetchStatus.Loading,
  isSuccess: status === FetchStatus.Success,
  isError: status === FetchStatus.Failed
}));
