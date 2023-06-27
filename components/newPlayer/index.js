import Form from "../newPlayerForm";

export default function CreateNewPlayer({ onSubmit }) {
  return (
    <>
      <Form onSubmit={onSubmit} formName={"CreateNewPlayerForm"} />
    </>
  );
}
