import * as actionTypes from './action-types';

const initialState = {
    articlesList: []
}
const articles = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.GET_ARTICLE_REQUEST:
      case actionTypes.GET_ARTICLE_ERR:
        return {
          ...state,
          articlesList: []
        }
      case actionTypes.GET_ARTICLE_RESPONSE:
        return {
          ...state,
          articlesList: action.payload
        }
      default:
        return state
    }
  }

  export default articles;
