import React, { useEffect } from "react";
import LuckStory from "./LuckStory/LuckStory";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./LuckStories.css";
import axios from "../../axios-happy";
import useMyCustomHookForStories from "../../store/actions/hook";

const LuckStories = props => {
  useEffect(() => {
    getStories();
  }, []);
  /* actionsda ve reducerdekilerde isleyir islede bilerik */
  const { loading,stories,  error, sendRequest } = useMyCustomHookForStories();/* it is my custom hook */

  //switch the page to the /id
  const goToLuckStory = index => {
    props.history.replace(`/luck-stories/${index}`);
  };
  //useDispatchToProps yerine
  // const dispatch = useDispatch();
  const getStories = () => {
    sendRequest(`/luck-stories.json`) 
  };
  //reduxda bele olur
  
  // //useStateToProps yerine 
  // const stories = useSelector(state => {
  //   return state.stories.stories;
  // });
  // const error = useSelector(state => {
  //   return state.stories.error;
  // });
  // const loading = useSelector(state => {
  //   return state.stories.loading;
  // });

  let storySummary = (
    <div className={classes.mainBoxes}>
      {stories.map(story => (
        <LuckStory
          key={story.id}
          name={story.name}
          img_url={story.img_url}
          goToLuckStory={() => goToLuckStory(story.id)}
        />
      ))}
    </div>
  );

  if (loading) {
    storySummary = error ? <h4>Stories Cant be loaded</h4> : <Spinner />;
  }

  return (
    <React.Fragment>
      <h3 className={classes.Heading}>LuckStories </h3>
      {storySummary}
    </React.Fragment>
  );
};
export default withErrorHandler(LuckStories, axios);
