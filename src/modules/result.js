import axios from 'axios';
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// States & Variables

// const initialState = {
//   isLoading: false,
//   payload: [],
//   detailIsLoading: false,
//   detailPayload: [],
// };

const initialState = {
  posts: {
    isLoading: false,
    data: [],
    error: null,
  },
  post: {
    isLoading: false,
    data: [],
    error: null,
  },
};

// Action Types
const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

// Action Creators
export const loadAll = createAction(GET_POSTS);

// Action Functions
export const getPosts = () => async (dispatch) => {
  dispatch({ type: GET_POSTS });
  try {
    const response = await axios.get('http://testapi.hits.ai/result/');
    console.dir(response);
    dispatch({ type: GET_POSTS_SUCCESS, response: response.data });
  } catch (e) {
    dispatch({ type: GET_POSTS_ERROR, error: e });
  }
};

export const getPost = (name) => async (dispatch) => {
  dispatch({ type: GET_POST }); // 요청이 시작됨
  try {
    const response = await axios.get(`http://testapi.hits.ai/result/${name}`);
    console.dir(response);
    dispatch({ type: GET_POST_SUCCESS, response: response.data });
  } catch (e) {
    dispatch({ type: GET_POST_ERROR, error: e });
  }
};

// Reducer
const result = handleActions(
  {
    [GET_POSTS]: (state, action) => {
      return produce(state, (draft) => {
        draft.posts.isLoading = true;
      });
    },
    [GET_POSTS_SUCCESS]: (state, action) => {
      return produce(state, (draft) => {
        draft.posts.isLoading = false;
        draft.posts.data = action.response;
      });
    },
    [GET_POST]: (state, action) => {
      return produce(state, (draft) => {
        draft.post.isLoading = true;
      });
    },
    [GET_POST_SUCCESS]: (state, action) => {
      return produce(state, (draft) => {
        draft.post.isLoading = false;
        draft.post.data = action.response;
      });
    },
  },
  initialState
);
export default result;
