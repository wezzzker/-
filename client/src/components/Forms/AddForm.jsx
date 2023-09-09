import React, { useState } from "react";
import { QueryClient, useMutation, useQueryClient } from "react-query";
import { createGame } from "../../services/gamesServices";
const AddForm = () => {
  const [err, setErr] = useState(null);
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newGame) => createGame(newGame, (e) => setErr(e)),
    {
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ["games"] }),
    }
  );
  //
  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fields = Object.fromEntries(formData);
    mutation.mutate(fields);

    event.target.reset();
  };
  return (
    <div className="bg-white p-4 flex flex-col items-center   rounded-md">
      <h3>Добавить данные</h3>
      <form onSubmit={onSubmit} className="flex flex-col py-7 gap-5">
        <input
          name="name"
          placeholder="Name"
          className=" border-[0.5px] p-1 bg-slate-50"
          type="text"
        />

        <input
          name="publId"
          placeholder="publisher id"
          className=" border-[0.5px] p-1 bg-slate-50"
          type="number"
        />
        {err && <p className="text-red-600">{err.message}</p>}
        <button
          type="submit"
          className="p-3 bg-slate-50 rounded-md text-slate-800 hover:bg-[#9AB168]/80 hover:text-white hover:scale-105 hover:font-medium transition-all ease-in duration-[250ms]"
        >
          Добавить
        </button>
      </form>
    </div>
  );
};

export default AddForm;
