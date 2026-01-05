'use client';

import { useI18n } from '@/lib/i18n';

export default function TermsPage() {
  const { locale } = useI18n();

  return (
    <div className="py-16 lg:py-24">
      <div className="container-peru">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-display font-bold text-peru-earth mb-8">
            {locale === 'es' ? 'Términos de Servicio' : 'Terms of Service'}
          </h1>

          <p className="text-gray-600 mb-8">
            {locale === 'es' ? 'Última actualización: Enero 2024' : 'Last updated: January 2024'}
          </p>

          <h2 className="text-2xl font-display font-bold text-peru-earth mt-8 mb-4">
            {locale === 'es' ? 'Aceptación de Términos' : 'Acceptance of Terms'}
          </h2>
          <p className="text-gray-700 mb-4">
            {locale === 'es'
              ? 'Al acceder y utilizar Family Travel Peru, aceptas estar sujeto a estos términos de servicio.'
              : 'By accessing and using Family Travel Peru, you agree to be bound by these terms of service.'}
          </p>

          <h2 className="text-2xl font-display font-bold text-peru-earth mt-8 mb-4">
            {locale === 'es' ? 'Reservas y Pagos' : 'Bookings and Payments'}
          </h2>
          <p className="text-gray-700 mb-4">
            {locale === 'es'
              ? 'Todas las reservas requieren un depósito. Los términos de pago específicos se proporcionarán al momento de la reserva.'
              : 'All bookings require a deposit. Specific payment terms will be provided at the time of booking.'}
          </p>

          <h2 className="text-2xl font-display font-bold text-peru-earth mt-8 mb-4">
            {locale === 'es' ? 'Cancelaciones' : 'Cancellations'}
          </h2>
          <p className="text-gray-700 mb-4">
            {locale === 'es'
              ? 'Las políticas de cancelación varían según el itinerario. Consulta los términos específicos de tu reserva.'
              : 'Cancellation policies vary by itinerary. Please refer to the specific terms of your booking.'}
          </p>

          <h2 className="text-2xl font-display font-bold text-peru-earth mt-8 mb-4">
            {locale === 'es' ? 'Responsabilidad' : 'Liability'}
          </h2>
          <p className="text-gray-700 mb-4">
            {locale === 'es'
              ? 'Family Travel Peru actúa como intermediario de servicios turísticos. Recomendamos contratar un seguro de viaje.'
              : 'Family Travel Peru acts as an intermediary for travel services. We recommend purchasing travel insurance.'}
          </p>

          <h2 className="text-2xl font-display font-bold text-peru-earth mt-8 mb-4">
            {locale === 'es' ? 'Contacto' : 'Contact'}
          </h2>
          <p className="text-gray-700">
            {locale === 'es'
              ? 'Para consultas sobre estos términos, contáctanos en hello@familytravelperu.com.'
              : 'For inquiries about these terms, contact us at hello@familytravelperu.com.'}
          </p>
        </div>
      </div>
    </div>
  );
}
