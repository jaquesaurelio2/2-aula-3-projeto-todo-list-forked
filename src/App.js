/**
  - Faça a componentização dessa aplicação
  - Crie componentes para o formulário e para os itens da lista
 */

import * as React from "react";
import "./styles.css";
import todos from "../data";

export default function App() {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div>
        <form>
          <input
            required
            type="text"
            name="title"
            placeholder="O que há para fazer hoje?"
          />
          <button>Salvar</button>
        </form>
      </div>
      <div style={{ display: "flex" }}>
        <input type="checkbox" />
        <p>título</p>
      </div>
    </div>
  );
}
