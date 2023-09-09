import React, { useState } from "react";
import Modal from "../components/Modal";

const DataPage = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <button className="bg-slate-400 p-2" onClick={() => setModal(true)}>
        open
      </button>
      <Modal setModal={setModal} modal={modal}>
        <div className="bg-white">MODAL</div>
      </Modal>
    </div>
  );
};

export default DataPage;
