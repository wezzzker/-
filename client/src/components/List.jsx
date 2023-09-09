import React from "react";

const List = ({ games }) => {
  return (
    <ul>
      {games.map((key, data) => {
        return <li key={key}>{data.game_id}</li>;
      })}
    </ul>
  );
};

export default List;
