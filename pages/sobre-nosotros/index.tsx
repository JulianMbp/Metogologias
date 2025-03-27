import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-blue-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-5">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Divinos Espumosos</div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-blue-200 transition">
                Inicio
              </Link>
              <Link href="/nuestros-servicios" className="hover:text-blue-200 transition">
                Servicios
              </Link>
              <Link href="/sobre-nosotros" className="hover:text-blue-200 transition">
                Nosotros
              </Link>
            </nav>
            <button className="md:hidden text-xl">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow p-6 bg-gray-50">
        {/* Welcome Section */}
        <section className="text-center py-12">
          <h2 className="text-4xl font-semibold text-blue-600">Divinos Espumosos</h2>
          <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
            En Divinos Espumosos, nos especializamos en brindarte un servicio de calidad para el cuidado de tu vehículo. Con nuestra experiencia y dedicación, tu carro recibirá el tratamiento que merece, dejándolo como nuevo.
          </p>
          <p className="mt-2 text-xl text-gray-700">¡Confía en nosotros para mantener tu carro en su mejor estado!</p>
        </section>

        {/* Services Section */}
        <section id="services" className="mt-16 bg-white py-12 shadow-md rounded-lg">
        <h3 className="text-3xl font-semibold text-blue-600 text-center">Servicios que Ofrecemos</h3>
        
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h4 className="text-2xl font-semibold text-blue-600 mb-4">Lavado exterior e interior</h4>
            <p className="text-gray-700">Nos encargamos del lavado detallado de todo el exterior e interior de tu vehículo, dejándolo impecable.</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">

            <h4 className="text-2xl font-semibold text-blue-600 mb-4">Detallado de motor</h4>
            <p className="text-gray-700">Realizamos el detallado y limpieza profunda del motor para mantenerlo en óptimas condiciones.</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">

            <h4 className="text-2xl font-semibold text-blue-600 mb-4">Tratamiento de ceras y protecciones</h4>
            <p className="text-gray-700">Aplicamos ceras y productos especiales para proteger la pintura y mantener tu vehículo como nuevo.</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">

            <h4 className="text-2xl font-semibold text-blue-600 mb-4">Servicio de aspirado profundo</h4>
            <p className="text-gray-700">Aspiramos profundamente el interior de tu vehículo, eliminando polvo y suciedad de cada rincón.</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">

            <h4 className="text-2xl font-semibold text-blue-600 mb-4">Cancha de tejo</h4>
            <p className="text-gray-700">Además de cuidar tu vehículo, te ofrecemos un espacio para disfrutar de una divertida partida de tejo.</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <Image
              src="/hola/image.png"
              alt="Mesa de Billar"
              width={500}
              height={320}
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h4 className="text-2xl font-semibold text-blue-600 mb-4">Mesa de Billar</h4>
            <p className="text-gray-700">Además de cuidar tu vehículo, te ofrecemos un espacio para disfrutar de una divertida partida de billar.</p>
          </div>
        </div>
      </section>


        {/* Contact Section */}
        <section id="contact" className="mt-16 text-center">
          <h3 className="text-3xl font-semibold text-blue-600">¿Tienes Preguntas? Contáctanos</h3>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Si tienes alguna pregunta o deseas más información sobre nuestros servicios, no dudes en contactarnos. ¡Estamos aquí para ayudarte y asegurarnos de que tu vehículo esté en las mejores manos!
          </p>
          <Link href="/contacto">
            <button className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-300">
              Contáctanos
            </button>
          </Link>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-6 text-center">
        <p>&copy; 2025 Divinos Espumosos </p>
      </footer>
    </div>
  );
}
