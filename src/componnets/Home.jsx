import React, { useState, useEffect } from "react";
import { fetchCharacters } from "../services/apiService";
import "./../../src/App.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); 

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters(searchQuery);
      setCharacters(data);
    };

    getCharacters();
  }, [searchQuery]);

  useEffect(() => {
    const loadInitialCharacters = async () => {
      const data = await fetchCharacters("");
      setCharacters(data);
    };

    loadInitialCharacters();
  }, []);

  const handleImageClick = (id) => {
    navigate(`/character/${id}`); 
  };

  return (
    <div>
      <h1>Characters</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search characters..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={() => setSearchQuery(query)}>Search</button>
      </div>

      <div className="characters-grid">
        {characters.length > 0 ? (
          characters.map((character) => (
            <div className="character-card" key={character.id}>
              <div
                className={`status-overlay ${
                  character.status === "Alive"
                    ? "alive"
                    : character.status === "Dead"
                    ? "dead"
                    : "unknown"
                }`}
              >
                {character.status}
              </div>
              <img
                src={character.image}
                alt={character.name}
                onClick={() => handleImageClick(character.id)} 
              />
              <h3>{character.name}</h3>
              <p>Last known location: {character.location.name}</p>
            </div>
          ))
        ) : (
          <p className="no-characters">No characters found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
