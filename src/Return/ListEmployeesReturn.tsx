import React from "react";
import { AllEmployees } from "../assets/StylesPages/Home";
import AllEmployeesNameReturn from "./AllEmployeesNameReturn";
import AllEmployeesDateReturn from "./AllEmployeesDateReturn";
import AllEmployeesOfficeReturn from "./AllEmployeesOfficeReturn";
import AllEmployeesPhoneReturn from "./AllEmployeesPhoneReturn";
import AllEmployeesPhotographReturn from "./AllEmployeesPhotographReturn";

interface Employee {
  id: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

interface Props {
  list: Employee[];
}

const ListEmployeesReturn: React.FC<Props> = ({ list }) => {
  return (
    <AllEmployees>
      <AllEmployeesPhotographReturn list={list} />
      <AllEmployeesNameReturn list={list} />
      <AllEmployeesOfficeReturn list={list} />
      <AllEmployeesDateReturn list={list} />
      <AllEmployeesPhoneReturn list={list} />
    </AllEmployees>
  );
};

export default ListEmployeesReturn;
