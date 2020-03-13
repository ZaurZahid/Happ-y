import React from "react";
import classes from "./Pro.css";

const Pro = () => {
  return (
    <div>
      <h4 className={classes.Improve}>Wanna improve yourSelf?</h4>
      <h3 className={classes.Perfecto}>
        <span>&#128515;</span> Perfecto <span>&#128517;</span>
      </h3>
      <div className={classes.Accessibility}>
        <div className={classes.AccessTo}>
          <i className="fas fa-award" style={{ color: "#4dff00" }}></i>
          <h2>write your luck story</h2>
          <p>Writting and sharing your inspirtaional success story</p>
        </div>
        <div className={classes.AccessTo}>
          <i
            className="fas fa-book-open"
            style={{ color: "rgb(218, 129, 0)" }}
          ></i>
          <h2>access more books</h2>
          <p>Reading new,paid,inspirational books</p>
        </div>
        <div className={classes.AccessTo}>
          <i className="fab fa-audible" style={{ color: "#a2650c" }}></i>
          <h2>access audidable books</h2>
          <p>Listening new,paid,inspirational audio books</p>
        </div>
        <div className={classes.AccessTo}>
          <i className="fas fa-bus" style={{ color: "rgb(42, 42, 255)" }}></i>
          <h2>use Todo-map</h2>
          <p>
            With Todo-Map you can check your dreams everyday and do your daily
            works
          </p>
        </div>
        <div className={classes.AccessTo}>
          <i className="fas fa-image" style={{ color: "#f73030" }}></i>
          <h2>motivational pictures</h2>
          <p>This is bonus for you</p>
        </div>
      </div>
      <div className={classes.Prices}>
        <div className={classes.Price}>
          <div className={classes.Logo}>
            <img
              src="https://images.ctfassets.net/go6kr6r0ykrq/1HPOq4ZQXsuAcYuj6tlxoV/048dacff116d4bc6608030976b60465b/Basic_Icon.png"
              alt=""
            />
          </div>
          <div className={classes.Summary}>
            <h3>Basic</h3>
          </div>
          <div className={classes.Pricing}>$15/month</div>
          <button className={classes.Try} id={classes.Basic}>Try Basic</button>
        </div>
        <div className={classes.Price}>
          <div className={classes.Logo}>
           <img
              src="https://images.ctfassets.net/go6kr6r0ykrq/7z5j7gm4YKM0nDSRhvna8F/00545fe7ef98d1c660f2cb7aba17cc77/Teams_Icon.svg"
              alt=""
              style={{height: '2rem'}}
            />
          </div>
          <div className={classes.Summary}>
            <h3>Popular</h3>
          </div>
          <div className={classes.Pricing}>$30/half year</div>
          <button className={classes.Try} id={classes.Popular}>Try Popular</button>
        </div>
        <div className={classes.Price}>
          <div className={classes.Logo}>
            <img
              src="https://images.ctfassets.net/go6kr6r0ykrq/5aJY0ENOIrqKTZgqRhjoxM/832778d016b05bbafadae748f4f9fa7d/Pro_Icon.svg"
              alt=""
            /> 
          </div>
          <div className={classes.Summary}>
            <h3>Professional</h3>
          </div>
          <div className={classes.Pricing}>$100/year</div>
          <button className={classes.Try} id={classes.Professional}>Try Pro</button>
        </div>
      </div>
    </div>
  );
};

export default Pro;
