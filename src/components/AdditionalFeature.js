import React from "react";
import { connect } from "react-redux";
import { buyFeature } from "../actions/index";

const AdditionalFeature = (props) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => {
          props.buyFeature(props.feature);
        }}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, { buyFeature })(AdditionalFeature);
