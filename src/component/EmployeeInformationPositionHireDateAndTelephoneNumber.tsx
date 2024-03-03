import React from "react";
import { AssociatedSmallScreen } from "../assets/Styles/Home";
import EmployeePositionDetails from "./EmployeePositionDetails";
import EmployeeJoiningDateDetails from "./EmployeeJoiningDateDetails";
import EmployeePhoneDetails from "./EmployeePhoneDetails";

const EmployeeInformationPositionHireDateAndTelephoneNumber: React.FC<{
  main: { job: string; admission_date: string; phone: string };
}> = ({ main }) => {
  return (
    <AssociatedSmallScreen>
      <EmployeePositionDetails job={main.job} />
      <EmployeeJoiningDateDetails admission_date={main.admission_date} />
      <EmployeePhoneDetails phone={main.phone} />
    </AssociatedSmallScreen>
  );
};

export default EmployeeInformationPositionHireDateAndTelephoneNumber;
