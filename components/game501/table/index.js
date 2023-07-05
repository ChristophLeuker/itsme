import { TableCell, InputNumber } from "../../game501";

export default function TableUnit({
  fieldname,
  ariaLabel,
  handleSubmit,
  result,
}) {
  return (
    <>
      <TableCell>
        <label htmlFor={fieldname} />
        <InputNumber
          type="number"
          name={fieldname}
          aria-label={ariaLabel}
          onKeyDown={handleSubmit}
        />
      </TableCell>
      <TableCell>{result}</TableCell>
    </>
  );
}
