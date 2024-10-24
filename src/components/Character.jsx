import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Character({ name, status, species, gender, image, id, location, origin }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            {/* Card Layout */}
            <article
                key={id}
                className="relative flex flex-col items-center gap-3 bg-gradient-to-b from-blue-800 to-blue-500 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 transform hover:scale-102 cursor-pointer p-4" // Ajustes realizados aquí
                onClick={toggleModal}
            >
                <div className="w-48 h-48 overflow-hidden rounded-full shadow-md">
                    <img
                        className="object-cover w-full h-full"
                        src={image}
                        alt={`${name}`}
                    />
                </div>
                <h2 className="text-2xl font-bold text-white">{name}</h2>
                <p className="text-white">{species} - {gender}</p>
                <p className={`text-white font-semibold ${status === 'Dead' ? 'text-red-500' : status === 'Alive' ? 'text-green-400' : 'text-gray-300'}`}>
                    {status}
                </p>
            </article>

            {/* Modal Layout */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
                    <div className="relative bg-white rounded-lg p-8 w-11/12 md:w-2/3 lg:w-1/2 shadow-xl transform transition-all duration-300">
                        <button
                            onClick={toggleModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-3xl font-bold"
                        >
                            &times;
                        </button>
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            <img
                                src={image}
                                alt={name}
                                className="rounded-lg w-48 h-48 object-cover md:w-64 md:h-64 shadow-lg"
                            />
                            <div className="flex flex-col space-y-4 text-gray-800">
                                <h2 className="text-4xl font-black">{name}</h2>
                                <p className="text-lg">{species} - {gender}</p>
                                <p className={`text-xl font-bold ${status === 'Dead' ? 'text-red-600' : status === 'Alive' ? 'text-green-500' : 'text-gray-500'}`}>
                                    {status}
                                </p>
                                <div>
                                    <h3 className="text-lg font-semibold">Last known location:</h3>
                                    <p>{location}</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">First seen in:</h3>
                                    <p>{origin}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
