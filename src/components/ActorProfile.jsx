import React from "react";

const ActorProfile = ({ actor }) => {
  return (
    <div className="profile">
      <div className="pic">
        <img src={actor.image} alt={actor.name}></img>
      </div>
      <div>
        <h2>{actor.name}</h2>
        <p className="status-species">
          <span
            className={
              "status " +
              (actor.alive === true
                ? "alive"
                : actor.alive === false
                ? "dead"
                : "unknown")
            }
          >
            {actor.alive}
          </span>{" "}
          -<span className="species">{actor.species}</span>
        </p>
        <p className="gender">
          <span className="desc">Gender: </span>
          {actor.gender}
        </p>
        <p className="location">
          <span className="desc">Ancestry: </span>
          {actor.ancestry}
        </p>
      </div>
    </div>
  );
};

export default ActorProfile;
