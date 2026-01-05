'use client';

import { useI18n } from '@/lib/i18n';

export default function PrivacyPage() {
  const { locale } = useI18n();

  return (
    <div className="py-16 lg:py-24">
      <div className="container-peru">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-display font-bold text-peru-earth mb-8">
            {locale === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
          </h1>

          <p className="text-gray-600 mb-8">
            {locale === 'es' ? 'Última actualización: Enero 2024' : 'Last updated: January 2024'}
          </p>

          <h2 className="text-2xl font-display font-bold text-peru-earth mt-8 mb-4">
            {locale === 'es' ? 'Información que Recopilamos' : 'Information We Collect'}
          </h2>
          <p className="text-gray-700 mb-4">
            {locale === 'es'
              ? 'Recopilamos información que nos proporcionas directamente, como tu nombre, correo electrónico y preferencias de viaje cuando nos contactas o reservas un itinerario.'
              : 'We collect information you provide directly to us, such as your name, email address, and travel preferences when you contact us or book an itinerary.'}
          </p>

          <h2 className="text-2xl font-display font-bold text-peru-earth mt-8 mb-4">
            {locale === 'es' ? 'Cómo Usamos tu Información' : 'How We Use Your Information'}
          </h2>
          <p className="text-gray-700 mb-4">
            {locale === 'es'
              ? 'Utilizamos la información recopilada para procesar tus reservas, enviar actualizaciones sobre tu viaje, mejorar nuestros servicios y comunicarnos contigo.'
              : 'We use the information we collect to process your bookings, send updates about your trip, improve our services, and communicate with you.'}
          </p>

          <h2 className="text-2xl font-display font-bold text-peru-earth mt-8 mb-4">
            {locale === 'es' ? 'Protección de Datos' : 'Data Protection'}
          </h2>
          <p className="text-gray-700 mb-4">
            {locale === 'es'
              ? 'Implementamos medidas de seguridad diseñadas para proteger tu información personal contra acceso no autorizado y uso indebido.'
              : 'We implement security measures designed to protect your personal information from unauthorized access and misuse.'}
          </p>

          <h2 className="text-2xl font-display font-bold text-peru-earth mt-8 mb-4">
            {locale === 'es' ? 'Contacto' : 'Contact'}
          </h2>
          <p className="text-gray-700">
            {locale === 'es'
              ? 'Si tienes preguntas sobre esta política de privacidad, contáctanos en hello@familytravelperu.com.'
              : 'If you have questions about this privacy policy, contact us at hello@familytravelperu.com.'}
          </p>
        </div>
      </div>
    </div>
  );
}
