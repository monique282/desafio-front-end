import axios from "axios";
import { useEffect, useState } from "react";
import { All } from "../assets/Styles/Home";
import ListEmployeesReturn from "../Return/ListEmployeesReturn";
import { Employee } from "../Interface/Employee";
import ComponentThatOccupiesEmployeesTextAndSearchBar from "./ComponentThatOccupiesEmployeesTextAndSearchBar";

export default function Home() {
  const [list, setList] = useState<Employee[]>([]); 
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Employee[]>([]); 

  useEffect(() => {
    const urlRequest = `http://localhost:3000/employees`;

    axios.get<Employee[]>(urlRequest) 
      .then((response) => {
        setList(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  useEffect(() => {
    const filteredList = list.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilter(filteredList);
  }, [search]); 

  return (
    <All>
      <ComponentThatOccupiesEmployeesTextAndSearchBar setSearch={setSearch} search={search} />
      {filter.length === 0 && <ListEmployeesReturn list={list} />}
      {filter.length !== 0 && <ListEmployeesReturn list={filter} />}
    </All>
  );
}
