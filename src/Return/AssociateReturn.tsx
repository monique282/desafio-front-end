import formatPhoneNumber from "../Functionality/FormatPhoneNumber";
import { Props } from "../Interface/Props";
import { Associate, TableData } from "../assets/StylesPages/Home";

const AssociateReturn: React.FC<Props> = ({ list }) => {
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
            {new Date(main.admission_date).toLocaleDateString()}
          </TableData>
          <TableData style={{ width: "150px" }}>
            {formatPhoneNumber(main.phone)}
          </TableData>
        </Associate>
      ))}
    </>
  );
};

export default AssociateReturn;
