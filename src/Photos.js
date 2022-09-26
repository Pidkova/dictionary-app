import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos section">
        <div className="row mt-3">
          {props.photos.map(function(photo, index) {
            return (
              <div className="col-md-4 col-sm-6" key={index}>
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={photo.src.landscape}
                    alt="Visual display of searching word"
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
