// src/FavoritesContext.jsx
import React, { createContext, useState } from 'react';
import { db } from './firebase'; // Asegúrate de que esta importación sea correcta

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = async (character) => {
        try {
            await db.collection('favorites').add({
                name: character.name,
                birthday: character.birthday, // Cambia esto según tu estructura de datos
                createdAt: new Date(),
            });

            setFavorites((prevFavorites) => [...prevFavorites, character]);
        } catch (error) {
            console.error("Error adding favorite: ", error);
        }
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};
