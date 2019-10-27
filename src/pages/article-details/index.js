import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Loader from "../../common/loader";

import './article-details.css';

export const ArticleDetails = (props) => {
  const { itemIndex } = useParams()
  const [ isLoading, setIsLoadingState] = useState(true);
  const history = useHistory();

  useEffect(()=>{
    props.getArticlesAction()
      .then(()=>{
        setIsLoadingState(false);
      })
      .catch(() => {
        setIsLoadingState(false);
        backToArticleList();
      })
  }, [])

  const backToArticleList = () => {
    history.push(`/`)
  }

  const getImage= urlToImage => <img src={urlToImage} />;
  const getArticleDetails= () => {
    if(!isLoading &&(!props.articlesList || props.articlesList.length <= ~~itemIndex)) {
      return backToArticleList();
    }
    const articleDetails = props.articlesList[itemIndex];
    return (<React.Fragment>
      <Link to="/">Go Back</Link>
      {
        isLoading? <Loader /> : <React.Fragment>
            <h3>
              { articleDetails.title}
            </h3>
            <p className="name-date-container">
              <span> Source: <b> { articleDetails.source.name } </b> </span>
              <span> Published At: <b> { articleDetails.publishedAt } </b> </span>
            </p>
            <p className="paragraph"> {  articleDetails.description } </p>
            { articleDetails.urlToImage &&  getImage(articleDetails.urlToImage) }
            <p className="paragraph"> { articleDetails.content} </p>

          </React.Fragment>
      }
    </React.Fragment>);
  }

  return (
    <div className="container">
      {getArticleDetails()}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ...state.articles
  }
}

export default connect(mapStateToProps, {...actions})(ArticleDetails);