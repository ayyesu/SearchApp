import React from "react";
import ActorProfile from "./ActorProfile";

const ListActor = ({ actors, id }) => {
  return (
    <>
      <div>
        <h2 className="title">Harry Potter Characters - {actors.length}</h2>
        {actors &&
          actors.map((actor) => (
              <ActorProfile key={actor.id} actor={actor} />
          ))}
      </div>
    </>
  );
};

export default ListActor;
