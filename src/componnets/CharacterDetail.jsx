import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./../../src/App.css";

const BASE_URL = "https://rickandmortyapi.com/api/character/";

const CharacterDetail = () => {
  const { id } = useParams(); 
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`${BASE_URL}${id}`);
        setCharacter(response.data);
      } catch (error) {
        console.error("Error fetching character details:", error);
      }
    };

    fetchCharacter();
  }, [id]);

  if (!character) return <p>Loading...</p>;

  const getStatusClass = (status) => {
    if (status === "Alive") return "status-alive";
    if (status === "Dead") return "status-dead";
    return "status-unknown";
  };

  return (
    <div className="character-detail">
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p className={`status ${getStatusClass(character.status)}`}>
         {character.status}
      </p>
      <p>Gender: {character.gender}</p>
      <p>Location: {character.location.name}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Species: {character.species}</p>
    </div>
  );
};

export default CharacterDetail;
