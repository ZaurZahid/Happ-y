import React, { Component } from "react";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import FooterNavigation from "../../components/Navigation/FooterNavigation/FooterNavigation";

class Layout extends Component {
  state = {
    sideDrawOpen: false
  };
  sideDrawFunc = () => {
    setTimeout(() => {
      this.setState({ sideDrawOpen: false });
    }, 300);//settimeout veriremki transition isleye bilsin
  };
  sideDrawOpen = () => {
    setTimeout(() => {
      this.setState(prevState => {
        return { sideDrawOpen: !prevState.sideDrawOpen };
      });
    }, 300);
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar drawerToogleOpen={this.sideDrawOpen} />
        {this.state.sideDrawOpen && ( //aciqdirsa goster
          <SideDrawer
            showing={this.state.sideDrawOpen}
            closed={this.sideDrawFunc}
          />
        )}
        <main className={classes.Content}>
          {/*  /* {this.props.children}  */}
          {/* <img
            style={{ width: "19rem" }}
            src="https://i.ytimg.com/vi/X8DjyG0BL7Y/maxresdefault.jpg"
            alt=""
          /> */}
          {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam vero eveniet rem, qui adipisci pariatur tenetur dolorem quos esse doloremque laborum officiis facere molestiae, corporis nostrum in temporibus nihil molestias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi debitis harum voluptas eaque rem obcaecati accusamus nulla iure repellat unde sequi rerum vel, tempore sit deserunt totam ipsa vitae dolores!
           */}
          {this.props.children}
        </main>
        <FooterNavigation />

      </React.Fragment>
    );
  }
}

export default Layout;
