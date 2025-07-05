//impotando itens do componente ItemLista.jsx
import ItemLista from "./ItemLista";
//importando dois hooks o useState e o useRef
import { useState, useRef } from "react";

//funcao principal 
function App() {
  //uso do useState
  //listaMercado sera a lista que sera dada como inicio
  //setListaMercado é afuncao de set de mudar o estado da lista
  const [listaMercado, setListaMercado] = useState([]);
  //uso do ref
  //inputAdicionar utilizado para refenciar um elemento e interagir com ele diretamente
  const inputAdicionar = useRef();

  //funcao de adicionar item a lista
  //a funcao utilizar o useRef inputAdionar
  //para que atualize a lista e mantenha o valor adicionado 
  const adicionarElementoNaLista = () => {
    //get da listaMercado atual
    const novaLista = [...listaMercado];
    //atribuindo o valor do input dado pelo usuario ao valorInput
    //utilizando o current.value para conseguir armazenar
    const valorInput = inputAdicionar.current.value;

    //verificacao se o input dado pelo usuario esta vazio
    //se nao vazio atribui o elemento dado no input a novaLista
    if (valorInput) {
      //add elemento a novaLista via .push
      novaLista.push(valorInput);
      //uso do useState 
      //seta a listaMercado para a novaLista
      setListaMercado(novaLista);
      //zera o input do usuario para proxima adicao
      inputAdicionar.current.value = "";
    }
  };

  //return que retorna apenas um item, mas podendo ter varios itens dentro desse unico item
  return (
    //div principal com as class do tailwind
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
