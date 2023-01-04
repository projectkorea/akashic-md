import axios from 'axios';
import { handleActions } from 'redux-actions';
import produce from 'immer';

// States

const initialState = {
  posts: {
    isLoading: true,
    data: [],
    error: null,
  },
  post: {
    data: {},
    error: null,
  },
  selected: [],
  searched: {
    isSearching: false,
    data: [],
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
const FILTER_BY_ID = 'FILTER_BY_ID';
const SELECT = 'SELECT';
const SELECT_CANCEL = 'SELECT_CANCEL';
const SELECT_ALL = 'SELECT_ALL';
const SELECT_ALL_CANCEL = 'SELECT_ALL_CANCEL';
const SEARCH = 'SEARCH';
const SEARCH_RESET = 'SEARCH_RESET';

// Action Functions

export const getPosts = () => async (dispatch) => {
  dispatch({ type: GET_POSTS });
  try {
    const response = await axios.get('http://testapi/result/');
    const formatted = rounding(response.data);
    dispatch({ type: GET_POSTS_SUCCESS, response: formatted });
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
      const response = await axios.get(`http://testapi/result/${name}`);
      const formatted = rounding(response.data);
      const person = { name, data: formatted };
      dispatch({ type: GET_POST_SUCCESS, person });
    } catch (e) {
      dispatch({ type: GET_POST_ERROR, error: e });
    }
  }
};

export const filterByColumn = (option) => (dispatch, getState) => {
  const { result } = getState();
  const postsData = result.posts.data;
  const searched = result.searched;
  const searchedData = searched.data;
  const data = searched.isSearching ? searchedData : postsData;
  const { colNum, isDesc } = option;

  const filtered = data
    .slice()
    .sort((a, b) => (isDesc ? a[colNum] - b[colNum] : b[colNum] - a[colNum]));

  dispatch({ type: FILTER, filtered });
};

export const filterByColumnId = (option) => (dispatch, getState) => {
  const { colNum, isDesc, name } = option;
  const { result } = getState();
  const data = result.post.data[name];

  const filtered = data
    .slice()
    .sort((a, b) => (isDesc ? a[colNum] - b[colNum] : b[colNum] - a[colNum]));

  dispatch({ type: FILTER_BY_ID, filtered, name });
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

      dispatch({ type: SELECT_ALL_CANCEL, newSelected });
    }
  };

export const searchWords = (words) => (dispatch, getState) => {
  const { result } = getState();
  const postsData = result.posts.data;
  const searchedData = result.searched.data;

  const newSearchedData = postsData
    .filter((item) => item[0].toLowerCase().includes(words.toLowerCase()))
    .filter((item) => {
      // 이미 있는 searchedData랑 겹치는지 확인
      let flag = true;
      for (let val of searchedData) {
        if (val[0] === item[0] && val[1] === item[1] && val[2] === item[2]) {
          flag = false;
        }
      }
      return flag;
    });
  const merged = newSearchedData.concat(searchedData);

  dispatch({ type: SEARCH, merged });
};

export const resetSearch = () => (dispatch) => {
  dispatch({ type: SEARCH_RESET });
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
      return produce(state, (draft) => {});
    },
    [GET_POST_SUCCESS]: (state, action) => {
      return produce(state, (draft) => {
        const { name, data } = action.person;
        draft.post.data[name] = data;
      });
    },
    [GET_POST_SUCCESS_ALREADY]: (state, action) => {
      return produce(state, (draft) => {});
    },
    [FILTER]: (state, action) => {
      return produce(state, (draft) => {
        draft.searched.isSearching
          ? (draft.searched.data = action.filtered)
          : (draft.posts.data = action.filtered);
      });
    },
    [FILTER_BY_ID]: (state, action) => {
      return produce(state, (draft) => {
        const { name } = action;
        draft.post.data[name] = action.filtered;
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
    [SEARCH]: (state, action) => {
      return produce(state, (draft) => {
        draft.searched.isSearching = true;
        draft.searched.data = action.merged;
      });
    },
    [SEARCH_RESET]: (state, action) => {
      return produce(state, (draft) => {
        draft.searched.isSearching = false;
        draft.searched.data = [];
      });
    },
  },
  initialState
);
export default result;
