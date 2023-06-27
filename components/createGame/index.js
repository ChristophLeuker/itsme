import Form from "./Form";

export default function CreateGame({ onSubmit }) {
  return (
    <>
      <Form onSubmit={onSubmit} formName={"CreateGameForm"} />
    </>
  );
}
