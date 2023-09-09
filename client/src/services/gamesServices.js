import axios from "axios";

export const gamesColums = [
  { headerName: "Id", field: "game_id" },
  { headerName: "Name", field: "game_name" },
  { headerName: "Publisher", field: "fk_publ_id" },
];

export async function gamesDatasource(page) {
  const data = await axios.get(
    `http://localhost:5000/api/games?page=${page}&limit=5`
  );
  return data;
}

export async function checkGames() {
  const { data } = await axios.get("http://localhost:5000/api/games/check");
  return data.count;
}

export async function createGame(data, setErr) {
  return axios
    .post("http://localhost:5000/api/games/", data)
    .catch(function (error) {
      if (error.response) {
        setErr(error.response.data);
      }
    });
}
export async function editGames(data, setErr) {
  const { idGame, name, publId } = data;
  const game = {};
  Object.assign(game, { name, publId });
  if (!idGame.length) {
    setErr({ message: "Введите game id" });
  } else {
    return axios
      .put(`http://localhost:5000/api/games/${idGame}`, game)
      .catch(function (error) {
        if (error.response) {
          setErr(error.response.data);
        }
      });
  }
}

export async function removeGame(data, setErr) {
  const { id } = data;
  if (!id.length) {
    setErr({ message: "Введите id" });
  } else {
    return axios
      .delete(`http://localhost:5000/api/games/${id}`)
      .catch(function (error) {
        if (error.response) {
          setErr(error.response.data);
        }
      });
  }
}
