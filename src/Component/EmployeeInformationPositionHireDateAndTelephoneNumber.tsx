import React from "react";
import {
  AssociatedSmallScreen,
  ResponseSmallScreen,
  TableDataSmallScreen,
  TitleSmallScreen,
} from "../assets/Styles/Home";
import formatPhoneNumber from "../Utils/FormatPhoneNumber";
import EmployeePositionDetails from "./EmployeePositionDetails";
import EmployeeJoiningDateDetails from "./EmployeeJoiningDateDetails";

const EmployeeInformationPositionHireDateAndTelephoneNumber: React.FC<{
  main: { job: string; admission_date: string; phone: string };
}> = ({ main }) => {
  return (
    <AssociatedSmallScreen>
      <EmployeePositionDetails job={main.job}/>
      <EmployeeJoiningDateDetails  admission_date={main.admission_date}/>
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
