import React from "react";

const MapBox = () => {
  return (
    <div className="map-box">
      <iframe
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.185034317357!2d-73.1440124234464!3d40.735953836148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8343152d46e33%3A0xb3c5d8f3df5e87e0!2s148%20Edgewood%20Ave%2C%20Oakdale%2C%20NY%2011769%2C%20EE.%20UU.!5e0!3m2!1ses-419!2spe!4v1712795555708!5m2!1ses-419!2spe"
        style={{ border: 0 }}
        aria-hidden={false}
        tabIndex={0}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapBox;
