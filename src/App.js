import NavBAR from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
function App() {
  return (
    <div className="App">
      <NavBAR/>
      <ItemListContainer greeting={"Proximamente contaremos con nuevos productos"}/>
    </div>
  );
}

export default App;
