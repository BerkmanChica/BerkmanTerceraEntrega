export default function About() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-purple-500 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Berkman Andres Chica Martinez</h1>
        <p className="text-lg text-gray-600 mb-4">¡Bienvenido a mi perfil! Aquí encontrarás información relevante sobre mí.</p>
        <div className="mt-4">
          <p className="text-gray-500">Estudiante en la Universidad de la Amazonia</p>
          <p className="text-gray-500">Apasionado por la tecnología y el desarrollo de software</p>
        </div>
      </div>
    </div>
  );
}
