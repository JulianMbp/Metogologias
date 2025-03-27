// pages/index.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaArchive, FaCar, FaCog } from 'react-icons/fa'; // Importa los iconos desde react-icons
export default function Home() {
  return (
    <div className="bg-blue-50 text-gray-800">
      {/* Header */}
      <header className="bg-blue-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-5">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Divinos Espumosos</div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-blue-200 transition">Inicio</Link>
              <Link href="/nuestros-servicios" className="hover:text-blue-200 transition">Servicios</Link>
              <Link href="/sobre-nosotros" className="hover:text-blue-200 transition">Nosotros</Link> 
            </nav>
            <button className="md:hidden text-xl">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <main className="max-w-7xl mx-auto p-6">
        {/* Intro */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Bienvenidos a tu Lavadero de Confianza</h2>
          <p className="text-lg mb-4">
            Nos especializamos en brindarte un servicio de calidad para el cuidado de tu vehículo.
          </p>
          <p className="text-lg mb-4">
            ¡Confía en nosotros para mantener tu carro como nuevo!
          </p>
        </section>

        {/* Servicios */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Servicio Lavado Exterior */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-blue-100 transition-all">
            <Image
                  src="/hola/image.png"
                  alt="Lavado Exterior"
                  width={500}
                  height={320}
                  className="w-full h-40 object-cover mb-4 rounded-lg"
                />
              <FaCar className="text-4xl mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Lavado Exterior</h3>
              <p>Limpieza detallada del exterior de tu carro para un acabado brillante y duradero.</p>
            </div>

            {/* Servicio Lavado Interior */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-blue-100 transition-all">
                <Image
                  src="/image.png"
                  alt="Lavado Interior"
                  width={500}
                  height={320}
                  className="w-full h-40 object-cover mb-4 rounded-lg"
                />
              <FaCog className="text-4xl mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Lavado Interior</h3>
              <p>Aspirado, limpieza de tapicerías y detallado del interior de tu vehículo.</p>
            </div>

            {/* Servicio Lavado Completo */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-blue-100 transition-all">
              <Image
                src="/hola/image.png"
                alt="Lavado Completo"
                width={500}
                height={320}
                className="w-full h-40 object-cover mb-4 rounded-lg"
              />
              <FaArchive className="text-4xl mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Lavado Completo</h3>
              <p>Combinación de lavado exterior e interior para un cuidado total de tu vehículo.</p>
            </div>
          </div>
        </section>

        {/* Precios */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6">Nuestros Precios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-blue-100 transition-all">
              <h3 className="text-xl font-semibold mb-2">Lavado Exterior</h3>
              <p className="text-2xl font-semibold text-blue-600">$15.00</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-blue-100 transition-all">
              <h3 className="text-xl font-semibold mb-2">Lavado Interior</h3>
              <p className="text-2xl font-semibold text-blue-600">$20.00</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-blue-100 transition-all">
              <h3 className="text-xl font-semibold mb-2">Lavado Completo</h3>
              <p className="text-2xl font-semibold text-blue-600">$30.00</p>
            </div>
          </div>
        </section>

        
      </main>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-6 text-center">
        <p>&copy; 2025 Lavadero de Carros. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
