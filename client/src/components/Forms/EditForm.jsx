import React, { useState } from "react";
import { QueryClient, useMutation, useQueryClient } from "react-query";
import { editGames } from "../../services/gamesServices";
///////////////////
const EditForm = () => {
  const queryClient = useQueryClient();
  const [err, setErr] = useState();

  const mutation = useMutation((game) => editGames(game, (e) => setErr(e)), {
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["games"] }),
  });
  //
  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    mutation.mutate(data);

    event.target.reset();
  };
  //
  return (
    <div className="bg-white p-4 flex flex-col items-center   rounded-md">
      <h3>Изменить данные</h3>
      <form
        onSubmit={onSubmit}
        className="flex flex-col py-7 gap-5 max-w-[240px]"
      >
        <input
          name="idGame"
          placeholder="Game id"
          className=" border-[0.5px] p-1 bg-slate-50"
          type="text"
        />
        <input
          name="name"
          placeholder="New name"
          className=" border-[0.5px] p-1 bg-slate-50"
          type="text"
        />

        <input
          name="publId"
          placeholder="publisher id"
          className=" border-[0.5px] p-1 bg-slate-50"
          type="number"
        />
        {err && <p className="text-red-600 text-center">{err.message}</p>}
        <button
          type="submit"
          className="p-3 bg-slate-50 rounded-md text-slate-800 hover:bg-[#FFCF5D]/80 hover:text-white hover:scale-105 hover:font-medium transition-all ease-in duration-[250ms]"
        >
          Сохранить
        </button>
      </form>
    </div>
  );
};

export default EditForm;
