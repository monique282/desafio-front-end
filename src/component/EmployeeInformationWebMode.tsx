import formatPhoneNumber from "../utils/FormatPhoneNumber";
import { Props } from "../Interface/Props";
import { Associate, TableData } from "../assets/Styles/Home";
import formatDate from "../utils/FormatDate";

const EmployeeInformationWebMode: React.FC<Props> = ({ list }) => {
  return (
    <>
      {list.map((main) => (
        <Associate key={main.id}>
          <TableData style={{ width: "80px" }}>
            <img src={main.image} alt="" />
          </TableData>
          <TableData>{main.name}</TableData>
          <TableData style={{ width: "130px" }}>{main.job}</TableData>
          <TableData style={{ width: "180px" }}>
            {" "}
            {formatDate(main.admission_date)}
          </TableData>
          <TableData style={{ width: "150px" }}>
            {formatPhoneNumber(main.phone)}
          </TableData>
        </Associate>
      ))}
    </>
  );
};

export default EmployeeInformationWebMode;
