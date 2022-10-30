import { useEffect, useState } from "react";
import "./App.css";
import ActorProfile from "./components/ActorProfile";
import ListActor from "./components/ListActor";
import Search from "./components/Search";

const App = () => {
  const [actors, setActors] = useState([]);
  const [keyword, setKeyword] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters")
      .then((response) => response.json())
      .then((data) => setActors(data));
  }, [keyword]);

  const id = actors.forEach((item, i) => {
    item.id = i + 1;
  });

  const filterActors = () => {
    const filteredActors = actors.filter((actors) => {
      if (keyword === "") {
        return actors;
      }

      const newActor = actors.name.toLowerCase().includes(keyword.toLowerCase());
      return newActor;
    });
    setActors(filteredActors)
  };

  return (
    <div className="App">
      <Search keyword={keyword} setKeyword={setKeyword} filterActors={filterActors}/>
      <ListActor actors={actors} id={id} />
    </div>
  );
};

export default App;
