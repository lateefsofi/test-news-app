
import { GET_ARTICLE_ERR, GET_ARTICLE_RESPONSE  } from "./action-types";
import { END_POINTS } from "../constants";
import { getApiCall } from "../services/web-api-service";

export const getArticlesAction = () =>
  function(dispatch, getStore) {
    const articleList = getStore().articles.articlesList;
    if(articleList && articleList.length>0) {
      return Promise.resolve()
    }
    return getApiCall(END_POINTS.articleList)
      .then(response => {
        dispatch({
          type: GET_ARTICLE_RESPONSE,
          payload: response && response.data && response.data.articles ? response.data.articles: []
        })
      })
      .catch(err => {
        dispatch({
          type: GET_ARTICLE_ERR
        })
      }) 
  }