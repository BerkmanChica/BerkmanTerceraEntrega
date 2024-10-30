import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Character from "../components/Character"; // Asegúrate de que este componente esté correctamente importado

export default function DetailsPage({ data }) {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundCharacter = data.find(item => item.id.toString() === id); // Busca el personaje por ID
    setCharacter(foundCharacter);
    setLoading(false);
  }, [id, data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!character) {
    return <div>No character found</div>; // Manejo si no se encuentra el personaje
  }

  return (
    <Character character={character} /> // Pasa el objeto de personaje completo
  );
}
