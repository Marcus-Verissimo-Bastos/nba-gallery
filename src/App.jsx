import { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";

const jogadoresIniciais = [
  { id: 1, nome: "LeBron James", foto: "/fotos/lebron.jpg" },
  { id: 2, nome: "Stephen Curry", foto: "/fotos/curry.avif" },
  { id: 3, nome: "Giannis Antetokounmpo", foto: "/fotos/giannis.jpg" },
  { id: 4, nome: "Luka Dončić", foto: "/fotos/doncic.avif" },
  { id: 5, nome: "Nikola Jokić", foto: "/fotos/jokic.jpg" },
  { id: 6, nome: "Jayson Tatum", foto: "/fotos/j_tatum.jpg" },
];

function App() {
  const [jogadores, setJogadores] = useState([]);

  useEffect(() => {
    setJogadores(jogadoresIniciais);
  }, []);

  return (
    <>
      <Header />
      <main className="grid">
        {jogadores.map((jogador) => (
          <Card key={jogador.id} nome={jogador.nome} foto={jogador.foto} />
        ))}
      </main>
    </>
  );
}

export default App;
