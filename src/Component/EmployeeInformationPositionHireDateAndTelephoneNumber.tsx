import React from "react";
import {
  AssociatedSmallScreen,
  ResponseSmallScreen,
  TableDataSmallScreen,
  TitleSmallScreen,
} from "../assets/Styles/Home";
import formatPhoneNumber from "../Utils/FormatPhoneNumber";
import EmployeePositionDetails from "./EmployeePositionDetails";

const EmployeeInformationPositionHireDateAndTelephoneNumber: React.FC<{
  main: { job: string; admission_date: string; phone: string };
}> = ({ main }) => {
  return (
    <AssociatedSmallScreen>
      <EmployeePositionDetails job={main.job}/>
      <TableDataSmallScreen>
        {" "}
        <TitleSmallScreen>Data de admissão</TitleSmallScreen>
        <ResponseSmallScreen>
          {" "}
          {new Date(main.admission_date).toLocaleDateString()}
        </ResponseSmallScreen>
      </TableDataSmallScreen>{" "}
      <TableDataSmallScreen>
        {" "}
        <TitleSmallScreen>Telefone</TitleSmallScreen>
        <ResponseSmallScreen>
          {" "}
          {formatPhoneNumber(main.phone)}
        </ResponseSmallScreen>
      </TableDataSmallScreen>{" "}
    </AssociatedSmallScreen>
  );
};

export default EmployeeInformationPositionHireDateAndTelephoneNumber;
