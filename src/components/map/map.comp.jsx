// Misc
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = withScriptjs(withGoogleMap(({ location }, props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: location.lat, lng: location.long }}
  >
    {<Marker position={{ lat: location.lat, lng: location.long }} />}
  </GoogleMap>
));

const Map = ({ location }) => {

  return (
    <MyMapComponent
      location={location}
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `21.8rem` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
};

export default Map;