import useSWR from "swr";

export default function PlayerList() {
  const { data = [] } = useSWR("/api/players");
  console.log(data);
  return (
    <>
      <h1>Hello Players:</h1>
      <ul>
        {data.map((player) => {
          return (
            <>
              <li key={player._id}>
                Name: {player.name} E-Mail:{player.email}
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
