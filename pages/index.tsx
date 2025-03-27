import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Divinos Espumosos | Cuidado profesional para tu vehículo</title>
        <meta name="description" content="Divinos Espumosos - Servicio premium de lavado y detallado de vehículos" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

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

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Brillo y cuidado excepcional para tu vehículo
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                En Divinos Espumosos transformamos tu experiencia de lavado con atención al detalle y productos premium.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/agendar-cita" 
                  className="bg-white text-blue-700 hover:bg-blue-50 transition px-6 py-3 rounded-lg font-semibold text-center">
                  Agendar cita
                </Link>
                <Link href="/nuestros-servicios" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-700 transition px-6 py-3 rounded-lg font-semibold text-center">
                  Explorar servicios
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-lg h-80 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/image.png"
                  alt="Automóvil de lujo limpio y brillante"
                  width={500}
                  height={320}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Por qué elegirnos */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">¿Por qué elegir Divinos Espumosos?</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fas fa-award"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Calidad Premium</h3>
                <p className="text-gray-600">Usamos productos de alta calidad para resultados superiores.</p>
              </div>
              
              <div className="text-center p-4">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fas fa-clock"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Servicio Rápido</h3>
                <p className="text-gray-600">Respetamos tu tiempo con servicios eficientes y puntuales.</p>
              </div>
              
              <div className="text-center p-4">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fas fa-leaf"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Eco-Friendly</h3>
                <p className="text-gray-600">Comprometidos con el medio ambiente y productos sostenibles.</p>
              </div>
              
              <div className="text-center p-4">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fas fa-users"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Equipo Profesional</h3>
                <p className="text-gray-600">Personal capacitado y apasionado por el cuidado automotriz.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Lo que dicen nuestros clientes</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">&ldquo;Increíble servicio. Mi auto quedó como nuevo y el personal es muy amable. Definitivamente regresaré.&rdquo;</p>
                <div className="font-medium">Carlos Rodríguez</div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">&ldquo;La atención al detalle es impresionante. El interior de mi auto nunca había quedado tan limpio. Altamente recomendado.&rdquo;</p>
                <div className="font-medium">Laura Martínez</div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">&ldquo;Profesionales en todo sentido. La protección cerámica que aplicaron a mi auto ha sido una excelente inversión.&rdquo;</p>
                <div className="font-medium">Andrés Suárez</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-700 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">¿Listo para transformar tu vehículo?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Agenda una cita hoy mismo y experimenta el servicio premium de Divinos Espumosos.
            </p>
            <Link href="/contacto" 
              className="bg-white text-blue-700 hover:bg-blue-50 transition px-8 py-3 rounded-lg font-semibold inline-block">
              Contáctanos ahora
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Divinos Espumosos</h3>
              <p className="text-gray-400">
                Expertos en el cuidado y embellecimiento automotriz desde 2018.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li><Link href="/nuestros-servicios" className="text-gray-400 hover:text-white transition">Servicios</Link></li>
                <li><Link href="/sobre-nosotros" className="text-gray-400 hover:text-white transition">Nosotros</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white transition">Blog</Link></li>
                <li><Link href="/faqs" className="text-gray-400 hover:text-white transition">FAQs</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Horario</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Lunes a Viernes: 8:00 - 19:00</li>
                <li>Sábado: 8:00 - 17:00</li>
                <li>Domingo: 9:00 - 14:00</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li><i className="fas fa-map-marker-alt mr-2"></i> Av. Principal #123</li>
                <li><i className="fas fa-phone mr-2"></i> (555) 123-4567</li>
                <li><i className="fas fa-envelope mr-2"></i> info@divinosespumosos.com</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Divinos Espumosos. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}