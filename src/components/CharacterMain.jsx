import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function CharacterMain({ character }) {
    return (
        <Link to={`/character/${character.id}`} className="flex items-center border p-4 rounded-lg hover:bg-gray-100 transition duration-200">
            {character.images.length > 0 ? (
                <img 
                    src={character.images[0]} 
                    alt={`${character.name} - Imagen`} 
                    className="w-32 h-auto rounded-lg mr-4 shadow-lg" 
                />
            ) : (
                <img 
                    src="default-image-url.jpg" 
                    alt="Imagen predeterminada" 
                    className="w-32 h-auto rounded-lg mr-4 shadow-lg" 
                />
            )}
            <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-orange-600 font-naruto">{character.name}</h2>
                <p className="text-sm text-gray-700">Sexo: {character.sex || 'No disponible'}</p>
                <p className="text-sm text-gray-700">Fecha de nacimiento: {character.birthdate || 'No disponible'}</p>
            </div>
        </Link>
    );
}

CharacterMain.propTypes = {
    character: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string),
        sex: PropTypes.string,
        birthdate: PropTypes.string,
    }).isRequired,
};
