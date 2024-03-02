import React from "react";
import {
  ResponseSmallScreen,
  TableDataSmallScreen,
  TitleSmallScreen,
} from "../assets/Styles/Home";

const EmployeePositionDetails: React.FC<{ job: string }> = ({ job }) => {
  return (
    <>
      <TableDataSmallScreen>
        <TitleSmallScreen>Cargo</TitleSmallScreen>
        <ResponseSmallScreen>{job}</ResponseSmallScreen>
      </TableDataSmallScreen>{" "}
    </>
  );
};

export default EmployeePositionDetails;
