import React, { useState, useEffect } from "react";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Button from "../../../components/UI/Button/Button";
import classes from "./Story.css";
import axios from "../../../axios-happy";
import useMyCustomHookForStories from "../../../store/actions/hook";

const Story = ({ match, history }) => { 

  useEffect(() => {
    fetchItems();
  }, []);

  const { loading,stories,  error, sendRequest,heartStory,markStory } = useMyCustomHookForStories();
  const fetchItems = () => {
    sendRequest(`/luck-stories/${match.params.story}.json`,  match.params.story); 
 
  /*   setLoading(true);
    axios
      .get(`/luck-stories/${match.params.story}.json`)
      .then(response => {
        setStory(response.data);
        setLoading(false);
      })
      .catch(err => setError(err)); */
  };
  // console.log(stories); //2 dene gosterir sebebi odurki setXYZ  olanda render olur herdefe problem deyil

  const goBackPreviosPage = () => {
    history.replace(`/luck-stories`);
  };
  const marked=(id,val)=>{
     markStory(id,val)
  }
  const hearted=(id,val)=>{
    heartStory(id,val)
  }  
  let storySummary = ( 
    <div className={classes.Story}>
      {stories.map(story=>
        <React.Fragment key={story.id}>
          <i className="fas fa-share-alt" style={{right:"20%"}}></i> 
          <i onClick={()=>marked(match.params.story,!story.mark)} className={story.mark ? "fas fa-bookmark" : "far fa-bookmark"} ></i>
          <img className={classes.Story_Img} src={story.img_url} alt="" />
          <div className={classes.Story_Content}  key={match.params.story}>
            <h4 className={classes.header}>The Success Story of {story.name}</h4>
            <i onClick={()=>hearted(match.params.story,!story.heart)} className={story.heart ? "fas fa-heart" : "far fa-heart"} ></i> {/* //vuranda ustune far ele */}
            <p className={classes.Content}>{story.story}</p>
            <div className={classes.Learnt}>
            <h5>What we learnt:</h5> 
              <p>{story.message}</p>
            </div>
          </div>
            <Button btnType="Success" clicked={goBackPreviosPage}>Back</Button> 
        </React.Fragment> 
        )}
    </div>
  );

  if (loading) {
    storySummary = error ? <h4>Story Cant be loaded</h4> : <Spinner />;
  }

  return (
    <React.Fragment> 
      {storySummary}
    </React.Fragment>
  );
};

export default withErrorHandler(Story, axios);
