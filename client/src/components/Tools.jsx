import React, { useState } from "react";
import {
  BsFillPencilFill,
  BsFillTrashFill,
  BsDatabaseFillAdd,
} from "react-icons/bs";
import Modal from "./Modal";
import AddForm from "./Forms/AddForm";
import EditForm from "./Forms/EditForm";
import DeleteForm from "./Forms/DeleteForm";
const Tools = () => {
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState();
  const [remove, setRemove] = useState();
  return (
    <div className="w-full h-[45px] flex    gap-5">
      <button
        onClick={() => setAdd(true)}
        className="p-3 rounded-lg text-slate-800 hover:bg-[#9AB168]/80 hover:text-white hover:scale-110 transition-all ease-in duration-[250ms]"
      >
        <BsDatabaseFillAdd size={20} />
      </button>
      {add && (
        <Modal modal={add} setModal={setAdd}>
          <AddForm />
        </Modal>
      )}
      <button
        onClick={() => setEdit(true)}
        className="p-3 rounded-lg text-slate-800 hover:bg-[#FFCF5D]/80 hover:text-white hover:scale-110 transition-all ease-in duration-[250ms]"
      >
        <BsFillPencilFill size={20} />
      </button>
      {edit && (
        <Modal modal={edit} setModal={setEdit}>
          <EditForm />
        </Modal>
      )}

      <button
        onClick={() => setRemove(true)}
        className="p-3 rounded-lg text-slate-800 hover:bg-[#FF824D]/80  hover:text-white hover:scale-110 transition-all ease-in duration-[250ms]"
      >
        <BsFillTrashFill size={20} />
      </button>
      {remove && (
        <Modal modal={remove} setModal={setRemove}>
          <DeleteForm />
        </Modal>
      )}
    </div>
  );
};

export default Tools;
