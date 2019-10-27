import React, { useState, useEffect } from 'react';
import { connect  } from "react-redux";
import { useHistory } from "react-router-dom";
import { Loader } from "../../common/loader";
import * as actions from "../../store/actions";

import './article-list.css';

export const ArticleList = (props) => {
  const [isLoading, setIsLoadingState] = useState(true)
  const history = useHistory();
  useEffect(() => {
    props.getArticlesAction()
      .then(()=>{
        setIsLoadingState(false);
      })
      .catch(() => {
        setIsLoadingState(false);
      })
  }, []);

  const viewArticleDetails = itemIndex => {
    history.push(`/article-details/${itemIndex}`)
  }

  const getArticleList = () => props.articlesList.map(
      (item, index) => (<li 
        key={`article-tem-${index}`} 
        title="Click to view the article"
        onClick={()=>viewArticleDetails(index)}
        >
        <div>{item.title}</div>
      </li>)
    );

  return (
    <div className="container ">
    <h3>News Articles</h3>
      {
        isLoading? <Loader /> : <React.Fragment>
          <ul className="article-list-container">
            {getArticleList()}
          </ul>
        </React.Fragment>
      }
      
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ...state.articles
  }
}

export default connect(mapStateToProps, {...actions})(ArticleList);