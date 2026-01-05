'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const { t, locale } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    tripLength: '',
    travelDate: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-peru-earth to-peru-terracotta py-16 lg:py-24">
        <div className="container-peru text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-peru">
          <div className="lg:flex lg:gap-16">
            {/* Contact Form */}
            <div className="lg:flex-1 mb-12 lg:mb-0">
              {submitted ? (
                <div className="bg-peru-jungle/10 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-peru-jungle rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-peru-earth mb-4">
                    {locale === 'es' ? '¡Mensaje Enviado!' : 'Message Sent!'}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {locale === 'es'
                      ? 'Gracias por contactarnos. Te responderemos dentro de 24 horas.'
                      : 'Thank you for contacting us. We\'ll get back to you within 24 hours.'}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary"
                  >
                    {locale === 'es' ? 'Enviar Otro Mensaje' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-display font-bold text-peru-earth mb-6">
                    {locale === 'es' ? 'Envíanos un Mensaje' : 'Send Us a Message'}
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.name')} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="input-field"
                        placeholder={locale === 'es' ? 'Tu nombre completo' : 'Your full name'}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.email')} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="input-field"
                        placeholder={locale === 'es' ? 'tu@email.com' : 'you@email.com'}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {locale === 'es' ? 'Duración del Viaje' : 'Trip Length'}
                      </label>
                      <select
                        name="tripLength"
                        value={formData.tripLength}
                        onChange={handleChange}
                        className="input-field"
                      >
                        <option value="">{locale === 'es' ? 'Seleccionar...' : 'Select...'}</option>
                        <option value="5">5 {t('itineraries.days')}</option>
                        <option value="7">7 {t('itineraries.days')}</option>
                        <option value="10">10 {t('itineraries.days')}</option>
                        <option value="14">14 {t('itineraries.days')}</option>
                        <option value="21+">21+ {t('itineraries.days')}</option>
                        <option value="custom">{locale === 'es' ? 'Personalizado' : 'Custom'}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {locale === 'es' ? 'Fecha Aproximada' : 'Approximate Travel Date'}
                      </label>
                      <input
                        type="month"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.subject')} *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="input-field"
                      placeholder={locale === 'es' ? '¿En qué podemos ayudarte?' : 'How can we help?'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.message')} *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="input-field resize-none"
                      placeholder={locale === 'es'
                        ? 'Cuéntanos sobre tu familia, intereses y lo que esperas de tu viaje a Perú...'
                        : 'Tell us about your family, interests, and what you hope for from your Peru trip...'}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    <Send className="w-4 h-4 mr-2" />
                    {t('contact.send')}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <aside className="lg:w-96">
              <div className="bg-peru-sand rounded-2xl p-8 mb-6">
                <h3 className="text-xl font-display font-bold text-peru-earth mb-6">
                  {t('contact.info_title')}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-peru-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-peru-gold" />
                    </div>
                    <div>
                      <div className="font-medium text-peru-earth">Email</div>
                      <a href="mailto:hello@familytravelperu.com" className="text-gray-600 hover:text-peru-terracotta">
                        hello@familytravelperu.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-peru-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-peru-gold" />
                    </div>
                    <div>
                      <div className="font-medium text-peru-earth">{locale === 'es' ? 'Teléfono' : 'Phone'}</div>
                      <a href="tel:+51999999999" className="text-gray-600 hover:text-peru-terracotta">
                        +51 999 999 999
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-peru-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-peru-gold" />
                    </div>
                    <div>
                      <div className="font-medium text-peru-earth">WhatsApp</div>
                      <a href="https://wa.me/51999999999" className="text-gray-600 hover:text-peru-terracotta">
                        +51 999 999 999
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-peru-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-peru-gold" />
                    </div>
                    <div>
                      <div className="font-medium text-peru-earth">{locale === 'es' ? 'Ubicación' : 'Location'}</div>
                      <p className="text-gray-600">
                        Lima, Peru
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-peru-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-peru-gold" />
                    </div>
                    <div>
                      <div className="font-medium text-peru-earth">{locale === 'es' ? 'Horario' : 'Hours'}</div>
                      <p className="text-gray-600">
                        {locale === 'es' ? 'Lun - Vie: 9am - 6pm (GMT-5)' : 'Mon - Fri: 9am - 6pm (GMT-5)'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-peru-earth text-white rounded-2xl p-8">
                <h3 className="text-xl font-display font-bold mb-4">
                  {locale === 'es' ? '¿Respuesta Rápida?' : 'Quick Response?'}
                </h3>
                <p className="text-white/80 mb-4">
                  {locale === 'es'
                    ? 'Para respuestas inmediatas, contáctanos por WhatsApp.'
                    : 'For immediate responses, reach out via WhatsApp.'}
                </p>
                <a
                  href="https://wa.me/51999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full text-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
