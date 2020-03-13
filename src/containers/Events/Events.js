import React, { useState, useEffect } from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";
import { connect } from "react-redux";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
import axios from "../../axios-happy";

import { initEvents,deletingEventFromStore } from "../../store/actions"; /* action */
import { cutText } from "../../components/UI/SomeFuncs";
import classes from "./Events.css";

const Events = props => {
  useEffect(() => {
    props.onInitEvents();
  }, []);

  useEffect(() => {
    return () => {
      //   console.log("unmount");
      props.deletingEventsFromStore(); //hemde basqa page -e kecende ele
    };
  }, []);

  const [showingInfoWindow, setShowingInfoWindow] = useState(true);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});

  const onMarkerClick = (props, marker, e) => {
    // console.log(props, marker);
    setShowingInfoWindow(true);
    setActiveMarker(marker);
    setSelectedPlace(props);
    // console.log(props)
  };
  const onMapClicked = props => {
    if (showingInfoWindow) {
      setShowingInfoWindow(false);
      setActiveMarker(null);
    }
    // alert(showingInfoWindow)
  };

  var iconBase =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/";

  var icons = {
    library: {
      icon: iconBase + "parking_lot_maps.png"/* library_maps */
    },
    info: {
      icon: iconBase + "info-i_maps.png"
    }
  };
  let eventSummary = (
    <Map
      google={props.google}
      onClick={onMapClicked}
      zoom={7}
      initialCenter={{
        lat: 40.43,
        lng: 49.83
      }}
      center={{
        lat: 40.43,
        lng: 49.83
      }}
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      {props.events &&
        props.events.map(event => (
          <Marker
            key={event.id}
            id={event.id}
            name={event.name}
            date={event.date}
            desc={event.desc}
            link={event.link}
            onClick={onMarkerClick}
            icon={event.icon?icons[event.icon].icon:''}
            position={{
              lat: event.location.latitute,
              lng: event.location.longitute
            }}
          />
        ))}
      <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
        <div className={classes.infoMarker}>
          <h3>
            <i className="fa fa-user"></i>
            <a href={selectedPlace.link} target="_blank">
              <span
                style={{
                //   color: "#42a5f5",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  fontStyle: "italic"
                }}
              >
                {selectedPlace.name}
              </span>
            </a>
          </h3>
          <h3>
            <i className="fa fa-calendar"></i>
            <span>{selectedPlace.date}</span>
          </h3>
          <h3>
          <i className="fa fa-info"></i>
            <span>
              {selectedPlace.desc && cutText(selectedPlace.desc, 100)}
            </span>
          </h3>
        </div>
      </InfoWindow>
    </Map>
  );
  if (props.loading) {
    eventSummary = props.error ? <h4>Events Cant be loaded</h4> : <Spinner />;
    // quoteSummary = props.error ? <h4>Quotes Cant be loaded</h4> : <Quote2 />;
  }
  return <div className={classes.Map}>{eventSummary}</div>;
};

const mapStateToProps = state => {
  return {
    events: state.events.events,
    error: state.events.error,
    loading: state.events.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onInitEvents: () => dispatch(initEvents()),
    deletingEventsFromStore: () => dispatch(deletingEventFromStore())
  };
};
export default GoogleApiWrapper({
  apiKey: "AIzaSyDgW0zT4CACLZbvvegfJmEuxBNlAYfaujM"
})(
  connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Events, axios))
);
