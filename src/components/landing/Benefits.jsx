import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Container from '../ui/Container';

export default function Benefits() {
  const benefits = [
    "Reducción del 30% en mermas de inventario",
    "Cierre de caja automático en segundos",
    "Integración directa con facturación electrónica DIAN",
    "Gestión multi-sucursal desde un solo dashboard"
  ];

  return (
    <section id="benefits" className="py-24 bg-salecop-black relative overflow-hidden">
      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-salecop-orange/30 to-transparent"></div>
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative aspect-square w-full max-w-md mx-auto">
              {/* Efecto de brillo detrás de la imagen */}
              <div className="absolute inset-0 bg-salecop-orange/20 rounded-3xl transform rotate-6 blur-2xl"></div>
              <div className="absolute inset-0 bg-salecop-orange rounded-3xl transform rotate-6 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800" 
                alt="Comerciante usando POS" 
                className="relative z-10 rounded-3xl object-cover w-full h-full shadow-2xl border border-salecop-gray/20"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Optimiza tu operación de principio a fin</h2>
            <p className="text-lg text-salecop-silver/80 mb-8 leading-relaxed">
              Salecop AI no es solo un registro de ventas, es un administrador inteligente que cuida tus márgenes mientras tú te enfocas en hacer crecer el negocio.
            </p>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-salecop-orange flex-shrink-0" size={24} />
                  <span className="text-salecop-cream font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}