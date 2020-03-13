import React from "react";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
  const pages=[
    {id:1,name:"Home",link:'/'},
    {id:2,name:"Luck Stories",link:'/luck-stories'},
    {id:3,name:"Videos",link:'/videos'},
    {id:4,name:"Quotes",link:'/quotes'},
    {id:5,name:"Movies",link:'/movies'},
    {id:6,name:"Events",link:'/events'},
    // {id:7,name:"Books",link:'/Books'},
    {id:7,name:"Pro",link:'/pro'},
    {id:8,name:"Logout",link:'/Logout'}
  ]
  return (
    <ul className={classes.NavigationItems}>
      {
        pages.map((page,index)=>  
          <NavigationItem link={page.link}  key={index}>{page.name}</NavigationItem>
         )
      } 
    </ul>
  );
};

export default NavigationItems;
