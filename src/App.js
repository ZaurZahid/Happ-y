/* Bu proyekt Zaur Aliyev terefinden 16.02.20 ci ilde basladilmisdir 
ve dunyanin en lazimli,gelirli app i kimi ginnesin rekordlar kitabina dusmusdur
Millete ,Xalqa xeyirli olsun :-)  */

import React from 'react';
import { Switch, Route,  Redirect } from "react-router-dom";

import Layout from "./containers/Layout/Layout";


/* containers */
import Home from './containers/Home/Home'
import LuckStories from './containers/LuckStories/LuckStories'
import Story from './containers/LuckStories/Story/Story'
import Quotes from './containers/Quotes/Quotes'
import Videos from './containers/Videos/Videos'
import SingleVideo from './containers/Videos/SingleVideo/SingleVideo'
import Movies from './containers/Movies/Movies'
import SingleMovie from './containers/Movies/SingleMovie/SingleMovie'
import Pro from './containers/Pro/Pro'
import Loved from './containers/FootNavContainers/Loved/Loved'
import Events from './containers/Events/Events'

function App() {
  let routes = (
    <Switch>
      <Route path="/luck-stories" exact component={LuckStories} /> 
      <Route path="/luck-stories/:story" component={Story} /> 
      <Route path="/quotes" exact component={Quotes} />  
      <Route path="/videos" exact component={Videos} />  
      <Route path="/videos/:video" exact component={SingleVideo} />  
      <Route path="/movies" exact component={Movies} />  
      <Route path="/movies/:movie" exact component={SingleMovie} />  
      <Route path="/pro" exact component={Pro} />  
      <Route path="/events" exact component={Events} />  
      <Route path="/loved" exact component={Loved} />  
      <Route path="/" exact component={Home} />
      <Redirect to="/" /> {/* tapmadiqda yuxaridaki routu / bura qaytar  */}
    </Switch>
  );
  return (
    <div className="singlePage">
     <Layout>{routes}</Layout>
    </div>
  );
}

export default App;
