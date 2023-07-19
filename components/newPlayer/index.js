import Form from "../newPlayerForm";

export default function CreateNewPlayer({ onSubmit, disabled }) {
  return (
    <>
      <Form
        onSubmit={onSubmit}
        formName={"CreateNewPlayerForm"}
        disabled={disabled}
      />
    </>
  );
}
