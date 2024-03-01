import React from "react";
import {
  AssociatedSmallScreen,
  ResponseSmallScreen,
  TableDataSmallScreen,
  TitleSmallScreen,
} from "../assets/Styles/Home";
import formatPhoneNumber from "../Utils/FormatPhoneNumber";

const EmployeeInformationPositionHireDateAndTelephoneNumber: React.FC<{
  main: { job: string; admission_date: string; phone: string };
}> = ({ main }) => {
  return (
    <AssociatedSmallScreen>
      <TableDataSmallScreen>
        <TitleSmallScreen>Cargo</TitleSmallScreen>
        <ResponseSmallScreen>{main.job}</ResponseSmallScreen>
      </TableDataSmallScreen>{" "}
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
