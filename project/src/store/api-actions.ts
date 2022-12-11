import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
// import {requireAuthorization, setError} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, Url} from '../const';
import {AuthData, UserData} from '../types/data-type';
import {OfferType} from '../types/offer-type';
// import {store} from './';
import {redirectToRoute} from './action';
import {CommentPayload, CommentType} from '../types/comment-type';
import {pushNotification} from './notifications/notifications';

export const clearErrorAction = createAsyncThunk(
  'data/clearError',
  () => {
    // setTimeout(
    //   () => store.dispatch(setError(null)),
    //   TIMEOUT_SHOW_ERROR
    // );
  },
);

export const fetchOffersAction = createAsyncThunk<OfferType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<OfferType[]>(APIRoute.Hotels);
      return data;
    } catch (err) {
      dispatch(pushNotification({type: 'error', message: 'Error loading offers'}));
      throw err;
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    await api.get(APIRoute.Login);
  }
);

export const fetchSingleOfferAction = createAsyncThunk<OfferType, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchSingleOffer',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferType>(`/hotels/${id}`);
    return data;
  },
);

export const loginAction = createAsyncThunk<string, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(redirectToRoute(Url.Main));
      return data.email;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

export const fetchCommentsAction = createAsyncThunk<CommentType[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchComments',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<CommentType[]>(`/comments/${id}`);
    return data;
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<OfferType[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchNearbyOffers',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferType[]>(`/hotels/${id}/nearby`);
    return data;
  },
);

export const newCommentAction = createAsyncThunk<CommentType[], CommentPayload, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'newComment',
  async ({comment: comment, rating, id}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<CommentType[]>(`/comments/${id}`, {comment, rating});
      return data;
    } catch (err) {
      dispatch(pushNotification({ type: 'error', message: 'Error sending comment. Please try again'}));
      throw err;
    }
  }
);

export const fetchFavoritesAction = createAsyncThunk<OfferType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFavorites',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<OfferType[]>('/favorite');
      return data;
    } catch (err) {
      dispatch(pushNotification({type: 'error', message: 'Error loading favorites'}));
      throw err;
    }
  },
);


export const changeFavoriteAction = createAsyncThunk<OfferType, OfferType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'changeFavoriteAction',
  async ({id, isFavorite}, {dispatch, extra: api}) => {
    const url = isFavorite ? '0' : '1';
    const {data} = await api.post<OfferType>(`/favorite/${id}/${url}`);
    return data;
  },
);
