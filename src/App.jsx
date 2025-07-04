import ItemLista from "./ItemLista";
import { useState, useRef } from "react";

function App() {
  // const listaMercado = ['Banana', 'Maca', 'Carne'];
  const [listaMercado, setListaMercado] = useState([]);
  const inputAdicionar = useRef();

  const adicionarElementoNaLista = () => {
    const novaLista = [...listaMercado];
    const valorInput = inputAdicionar.current.value;

    if (valorInput) {
      novaLista.push(valorInput);
      setListaMercado(novaLista);
      inputAdicionar.current.value = "";
    }
  };

  return (
    <div className="flex w-full max-w-96 flex-col items-center gap-4">
      <h1 className="text-3xl font-bold">Lista de Mercado</h1>
      <div className="flex w-full gap-2">
        <input
          className=" w-full border border-gray-600 rounded-md px-2"
          ref={inputAdicionar}
          type="text"
          placeholder="Digite um item"
        />
        <button
          className="rounded-md bg-gray-800 hover:bg-gray-500 text-white px-2 cursor-pointer transition"
          onClick={adicionarElementoNaLista}
        >
          Adicionar
        </button>
      </div>

      {listaMercado.length > 0 ? (
        <ul className="flex w-full flex-col gap-2">
          {listaMercado.map((itemLista, index) => (
            <ItemLista
              key={index}
              itemLista={itemLista}
              listaMercado={listaMercado}
              setListaMercado={setListaMercado}
            />
          ))}
        </ul>
      ) : (
        <p>Voce nao tem nenhum item na lista</p>
      )}
    </div>
  );
}

export default App;
