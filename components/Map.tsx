"use client";
import RPLogo from "../app/assets/images/RoscoLogo.png";
//Map component Component from library
import { GoogleMap, Marker } from "@react-google-maps/api";
// Import custom styles to customize the style of Google Map
import styles from "../app/(site)/assets/GoogleMapStyles.json";

//K2's coordinates
const defaultMapCenter = {
  lat: 51.50905830872913,
  lng: -0.14043260793980805,
};

//Default zoom level, can be adjusted
const defaultMapZoom = 14;

//Map options
const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  mapTypeId: "roadmap",
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
  styles: styles, // change default map styles
};

const MapComponent = () => {
  return (
    <div className="w-full h-full">
      <GoogleMap
        mapContainerClassName="absolute w-full small:w-[calc(100%-17px)] small:right-0 small:left-auto top-[17px] h-[calc(100%-34px)]"
        // mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      >
        <Marker
          position={{ lat: 51.50905830872913, lng: -0.14043260793980805 }}
          // label={"Label onTop? pls"}
          // label={{
          //   text: "Label with Icon",
          //   className: "marker-label",
          // }}
        />
      </GoogleMap>
    </div>
  );
};

export { MapComponent };
