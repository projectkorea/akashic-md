import axios from 'axios';
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// States
const initialState = {
  posts: {
    isLoading: false,
    data: [],
    error: null,
  },
  post: {
    isLoading: false,
    data: {
      //  철수: [[1.2], [3,4], [5,6], [7,8] ] ,
      // { 영희: [1, 2] },
      // { 준하: [1, 2] },
      // { 윤정: [1, 2] },
    },
    error: null,
  },
};

// Action Types
const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_SUCCESS_ALREADY = 'GET_POST_SUCCESS_ALREADY';
const GET_POST_ERROR = 'GET_POST_ERROR';
const FILTER = 'FILTER';

// Action Creators
export const loadAll = createAction(GET_POSTS);

// Action Functions
export const getPosts = () => async (dispatch) => {
  dispatch({ type: FILTER });
  try {
    const response = await axios.get('http://testapi.hits.ai/result/');
    const formated = rounding(response.data);
    dispatch({ type: GET_POSTS_SUCCESS, response: formated });
  } catch (e) {
    dispatch({ type: GET_POSTS_ERROR, error: e });
  }
};

export const getPost = (name) => async (dispatch, getState) => {
  const {
    result: { post },
  } = getState();
  dispatch({ type: GET_POST });
  if (post.data[name]) {
    dispatch({ type: GET_POST_SUCCESS_ALREADY });
  } else {
    try {
      const response = await axios.get(`http://testapi.hits.ai/result/${name}`);
      const formated = rounding(response.data);
      const person = { name, data: formated };
      dispatch({ type: GET_POST_SUCCESS, person });
    } catch (e) {
      dispatch({ type: GET_POST_ERROR, error: e });
    }
  }
};

export const filterByColumn = (option) => (dispatch, getState) => {
  const {
    result: {
      posts: { data },
    },
  } = getState();

  const { colNum, isDesc } = option;

  const filtered = data
    .slice()
    .sort((a, b) => (isDesc ? a[colNum] - b[colNum] : b[colNum] - a[colNum]));
  console.log(filtered);
  dispatch({ type: FILTER, filtered });
};

// extra Function
const rounding = (data) =>
  data.map((item) => [item[0], item[1].toFixed(5), item[2].toFixed(5)]);

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
        const { name, data } = action.person;
        draft.post.data[name] = data;
      });
    },
    [GET_POST_SUCCESS_ALREADY]: (state, action) => {
      return state;
    },
    [FILTER]: (state, action) => {
      return produce(state, (draft) => {
        draft.posts.data = action.filtered;
      });
    },
  },
  initialState
);
export default result;
