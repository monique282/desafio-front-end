import { HeaderEmployees, TableNames } from "../assets/Styles/Home";

const TableHeaderInWebMode = () => {
  return (
    <HeaderEmployees>
      <TableNames style={{ width: "80px" }}>FOTO</TableNames>
      <TableNames>NOME</TableNames>
      <TableNames style={{ width: "130px" }}>CARGO</TableNames>
      <TableNames>DATA DE ADMISSÃO</TableNames>
      <TableNames style={{ width: "150px" }}>TELEFONE</TableNames>
    </HeaderEmployees>
  );
};

export default TableHeaderInWebMode;
