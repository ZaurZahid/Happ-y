import React from "react";
import classes from "./FooterNavigation.css";
import FooterNavigationItem from "./FooterNavigationItem/FooterNavigationItem";

const FooterNavigation = () => {
  const a=[
    {
      id:1,
      name:"search",
      icon:"fas fa-search",
      link:'/search'
    }, {
      id:2,
      name:"bests",
      icon:"far fa-heart",
      link:'/loved'
    } ,{
      id:3,
      name:"listen",
      icon:"fas fa-headphones-alt",
      link:'/pro'
    } ,{
      id:4,
      name:"profile",
      icon: "far fa-user",
      link:'/profile' 
    }
  ]
  return (
    <footer className={classes.Footer}>
      <ul className={classes.FooterNavigation}>
      {a.map((n,index)=> 
        <FooterNavigationItem link={n.link}   key={index} icon={n.icon}>{n.name}</FooterNavigationItem>
       )}
      </ul>
    </footer>
  );
};

export default FooterNavigation;
