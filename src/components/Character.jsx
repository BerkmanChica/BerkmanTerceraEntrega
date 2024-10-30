import React, { useState } from 'react';
import { FaUsers, FaHandSparkles, FaLeaf } from 'react-icons/fa'; // Asegúrate de instalar react-icons

const Character = ({ character }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + character.images.length) % character.images.length);
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % character.images.length);
    };

    return (
        <div className="character-details p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:shadow-2xl max-w-lg mx-auto">
            <h1 className="text-4xl font-bold text-orange-600 text-center mb-4">{character.name}</h1>
            
            {/* Carrusel de imágenes */}
            <div className="images relative mb-6 overflow-hidden rounded-lg">
                {character.images.length > 0 ? (
                    <img 
                        src={character.images[currentImageIndex]} 
                        alt={`${character.name} image`} 
                        className="w-full h-auto transition-transform duration-500 ease-in-out transform hover:scale-105" 
                    />
                ) : (
                    <img 
                        src="default-image-url.jpg" 
                        alt="Imagen predeterminada" 
                        className="w-full h-auto rounded-lg shadow-lg" 
                    />
                )}
                {character.images.length > 1 && (
                    <>
                        <button 
                            onClick={handlePrevImage} 
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-600 text-white p-2 rounded-full shadow-lg hover:bg-orange-500 transition duration-300"
                        >
                            &#10094;
                        </button>
                        <button 
                            onClick={handleNextImage} 
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-600 text-white p-2 rounded-full shadow-lg hover:bg-orange-500 transition duration-300"
                        >
                            &#10095;
                        </button>
                    </>
                )}
            </div>
            
            {/* Sección de Debut */}
            <div className="bg-gray-100 p-4 rounded-lg shadow mb-4">
                <h2 className="text-3xl font-bold text-orange-600 mb-2 flex items-center">
                    <FaHandSparkles className="mr-2" /> Debut
                </h2>
                <ul className="list-disc list-inside">
                    {Object.entries(character.debut).map(([key, value]) => (
                        <li key={key}>
                            <span className="font-semibold">{key.charAt(0).toUpperCase() + key.slice(1)}:</span> {value}
                        </li>
                    ))}
                </ul>
            </div>
            
            {/* Sección de Familia */}
            <div className="bg-gray-100 p-4 rounded-lg shadow mb-4">
                <h2 className="text-3xl font-bold text-orange-600 mb-2 flex items-center">
                    <FaUsers className="mr-2" /> Familia
                </h2>
                console.log(character.sex);
                
                
                <ul className="list-disc list-inside">
                    {Object.entries(character.family).map(([relation, name]) => (
                        <li key={relation}>
                            <span className="font-semibold">{relation.charAt(0).toUpperCase() + relation.slice(1)}:</span> {name}
                        </li>
                    ))}
                </ul>
            </div>
            
            {/* Sección de Jutsu */}
            <div className="bg-gray-100 p-4 rounded-lg shadow mb-4">
                <h2 className="text-3xl font-bold text-orange-600 mb-2 flex items-center">
                    <FaHandSparkles className="mr-2" /> Jutsu
                </h2>
                <ul className="list-disc list-inside">
                    {character.jutsu.map((jutsu, index) => (
                        <li key={index}>{jutsu}</li>
                    ))}
                </ul>
            </div>
            
            {/* Sección de Tipo de Naturaleza */}
            <div className="bg-gray-100 p-4 rounded-lg shadow mb-4">
                <h2 className="text-3xl font-bold text-orange-600 mb-2 flex items-center">
                    <FaLeaf className="mr-2" /> Tipo de Naturaleza
                </h2>
                <ul className="list-disc list-inside">
                    {character.natureType.map((type, index) => (
                        <li key={index}>{type}</li>
                    ))}
                </ul>
            </div>

            {/* Agrega más secciones según sea necesario */}
        </div>
    );
};

export default Character;
