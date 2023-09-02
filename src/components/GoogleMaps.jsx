import React from "react";

const GoogleMaps = () => {
  return (
    <div className="google-maps">
      <iframe
        className="google-maps"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d739.6061923847129!2d-63.943449380601514!3d-30.356846019357267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1693613473152!5m2!1ses-419!2sar"
        width="400"
        height="300"
        style={{ border: 1000 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMaps;
