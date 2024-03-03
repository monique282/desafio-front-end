import React from "react";
import {
  ResponseSmallScreen,
  TableDataSmallScreen,
  TitleSmallScreen,
} from "../assets/Styles/Home";
import formatDate from "../utils/FormatDate";

const EmployeeJoiningDateDetails: React.FC<{ admission_date: string }> = ({
  admission_date,
}) => {
  return (
    <>
      <TableDataSmallScreen>
        {" "}
        <TitleSmallScreen>Data de admissão</TitleSmallScreen>
        <ResponseSmallScreen> {formatDate(admission_date)}</ResponseSmallScreen>
      </TableDataSmallScreen>{" "}
    </>
  );
};

export default EmployeeJoiningDateDetails;
