import axios from "axios";
import { useEffect, useState } from "react";
import { All } from "../assets/StylesPages/Home";
import EmployeesReturn from "../Return/EmployeesReturn";
import ListEmployeesReturn from "../Return/ListEmployeesReturn";

export default function Home() {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const urlRequest = `http://localhost:3000/employees`;

    const promise = axios.get(urlRequest);
    promise.then((response) => {
      setList(response.data);
      console.log(response.data);
    });
    promise.catch((err) => {
      console.log(err.response);
    });
  }, []);

  return (
    <All>
      <EmployeesReturn search={search} setSearch={setSearch} />
      <ListEmployeesReturn list={list} />
    </All>
  );
}
