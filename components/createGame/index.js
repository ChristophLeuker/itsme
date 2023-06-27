import Form from "../createForm";

export default function CreateGame({ onSubmit }) {
  return (
    <>
      <Form onSubmit={onSubmit} formName={"CreateGameForm"} />
    </>
  );
}
