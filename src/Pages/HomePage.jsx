import PropTypes from 'prop-types';
import CharacterMain from "../components/CharacterMain";

export default function HomePage({ data }) {
    return (
        <div className="grid grid-cols-1 gap-4 mt-4">
            {data.map(item => {
                const characterImages = item.images.length > 0 ? item.images : ['default-image-url.jpg']; // Placeholder for images
                
                return (
                    <CharacterMain
                        key={item.id} // Ensure id is unique
                        character={{
                            id: item.id,
                            name: item.name,
                            images: characterImages, // Updated images
                            sex: item.sex,
                            birthdate: item.birthdate,
                        }} 
                    />
                );
            })}
        </div>
    );
}

HomePage.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            images: PropTypes.arrayOf(PropTypes.string),
            sex: PropTypes.string,
            birthdate: PropTypes.string,
        })
    ).isRequired,
};
