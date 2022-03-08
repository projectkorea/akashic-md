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
  selected: [],
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
const SELECT = 'SELECT';
const SELECT_CANCEL = 'SELECT_CANCEL';
const SELECT_ALL = 'SELECT_ALL';
const SELECT_ALL_CANCEL = 'SELECT_ALL_CANCEL';

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

export const toggleSelect = (name, id) => (dispatch, getState) => {
  const {
    result: { selected },
  } = getState();

  const selectedId = { [name + id]: [name, id] };
  const isSelected = selected.some(
    (item) =>
      Object.values(item)[0][0] === name && Object.values(item)[0][1] === id
  );

  if (!isSelected) {
    dispatch({ type: SELECT, selectedId });
  } else {
    // filter
    const newSelected = selected.filter(
      (item) =>
        !(
          Object.values(item)[0][0] === name && Object.values(item)[0][1] === id
        )
    );
    dispatch({ type: SELECT_CANCEL, newSelected });
  }
};

export const toggleSelectAll =
  (isSelectedAll, name) => (dispatch, getState) => {
    const {
      result: {
        selected,
        post: { data },
      },
    } = getState();
    const selectList = data[name];

    if (isSelectedAll) {
      const selectedList = selected
        .filter((item) => Object.values(item)[0][0] === name)
        .map((item) => Object.values(item)[0][1]);

      const willBeSelect = selectList
        .filter((item) => !selectedList.includes(item[0]))
        .map((item) => ({ [name + item[0]]: [name, item[0]] }));

      dispatch({ type: SELECT_ALL, willBeSelect });
    } else {
      const newSelected = selected.filter(
        (item) => !(Object.values(item)[0][0] === name)
      );
      console.log(newSelected);

      dispatch({ type: SELECT_ALL_CANCEL, newSelected });
    }
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
    [SELECT]: (state, action) => {
      return produce(state, (draft) => {
        draft.selected.push(action.selectedId);
      });
    },
    [SELECT_CANCEL]: (state, action) => {
      return produce(state, (draft) => {
        draft.selected = action.newSelected;
      });
    },
    [SELECT_ALL]: (state, action) => {
      return produce(state, (draft) => {
        action.willBeSelect.forEach((item) => {
          draft.selected.push(item);
        });
      });
    },
    [SELECT_ALL_CANCEL]: (state, action) => {
      return produce(state, (draft) => {
        draft.selected = action.newSelected;
      });
    },
  },
  initialState
);
export default result;
