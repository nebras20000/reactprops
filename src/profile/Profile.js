import React from "react";
import PropTypes from "prop-types";

function Profile(props) {
  return (
    <div>
      <div>
        <h1>Name : {props.names}</h1>
        <h1>Bio : {props.bio}</h1>
        <h1>Profession : {props.profession}</h1>
        <img src={props.children} />
        <button onClick={() => props.alerrt(props.names)}>Click me</button>
      </div>
    </div>
  );
}

Profile.defaultProps = {
  names: "User",
  bio: "Hi i am user",
  profession: "user profession",
};

Profile.propTypes = {
  names: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  alerrt: PropTypes.func,
};
export default Profile;
