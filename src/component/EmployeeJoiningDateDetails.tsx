import React from "react";
import {
  ResponseSmallScreen,
  TableDataSmallScreen,
  TitleSmallScreen,
} from "../assets/Styles/Home";

const EmployeeJoiningDateDetails: React.FC<{ admission_date: string }> = ({
  admission_date,
}) => {
  return (
    <>
      <TableDataSmallScreen>
        {" "}
        <TitleSmallScreen>Data de admissão</TitleSmallScreen>
        <ResponseSmallScreen>
          {" "}
          {new Date(admission_date).toLocaleDateString()}
        </ResponseSmallScreen>
      </TableDataSmallScreen>{" "}
    </>
  );
};

export default EmployeeJoiningDateDetails;
