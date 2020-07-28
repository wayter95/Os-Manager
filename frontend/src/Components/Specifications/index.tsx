import React, { useState } from "react";
import Modal from "../Modal";

import "./style.css";

const Specifications: React.FC = () => {
  const [isVisible, setVisible] = useState(false);
  const [sector, setSector] = useState("");
  const [equipament, setEquipament] = useState("");
  const [motive, setMotive] = useState("");
  const [urgency, setUrgency] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();

    setVisible(true);
  }
  return (
    <div id="component-specifications">
      <h2>Especificações de equipamento</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="sector">Setor:*</label>
        <input
          type="text"
          value={sector}
          onChange={(e) => setSector(e.target.value)}
        />

        <label htmlFor="equipament">Equipamento:*</label>
        <input
          type="text"
          value={equipament}
          onChange={(e) => setEquipament(e.target.value)}
        />

        <label htmlFor="Motive">Motivo:*</label>
        <input
          type="text"
          placeholder="Para qual motivo o equipamento ira servir"
          value={motive}
          onChange={(e) => setMotive(e.target.value)}
        />

        <label htmlFor="Urgency">Urgencia:*</label>
        <select
          name=""
          id=""
          value={urgency}
          onChange={(e) => setUrgency(e.target.value)}
        >
          <option value="low">Baixa</option>
          <option value="mean">Media</option>
          <option value="high">Alta</option>
        </select>

        <label htmlFor="Description">Descrição:*</label>
        <textarea
          placeholder="Ex: Um computador da 4° geração com 8gb de RAM, 1tb de hdd..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Salvar</button>
      </form>
      {isVisible ? (
        <Modal>
          <h1>Deseja gerar este documento?</h1>
          <div className="btns">
            <button className="save" type="button">
              Salvar
            </button>
            <button className="exit" onClick={() => setVisible(false)}>
              Cancelar
            </button>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default Specifications;
