import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonster, setFileteredMonster] = useState(monsters);
  const { data, status } = useQuery("users", fetchUsers);

  console.log(data);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => setMonsters(users));
  // }, []);

  useEffect(() => {
    const newfilteredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFileteredMonster(newfilteredMonster);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="App-Title">Monsters Rolodex</h1>

      <SearchBox
        className="searchBox monster-searchBox"
        onChangeHandler={onSearchChange}
        placeHolder="Search Here"
      />

      <CardList monsters={filteredMonster} />
    </div>
  );
};

export default App;
