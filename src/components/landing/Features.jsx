import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Box, BarChart3, Sparkles, ArrowRight } from 'lucide-react';

const featuresData = [
  {
    title: 'Ventas',
    description: 'Registra tus ventas en segundos, con múltiples métodos de pago y total control.',
    icon: ShoppingBag,
  },
  {
    title: 'Inventario',
    description: 'Lleva el control de tu stock en tiempo real y evita quiebres de productos.',
    icon: Box,
  },
  {
    title: 'Reportes',
    description: 'Conoce el rendimiento de tu negocio con informes claros y detallados.',
    icon: BarChart3,
  },
  {
    title: 'IA Asistente',
    description: 'Recibe recomendaciones personalizadas para aumentar tus ventas y mejorar tu operación.',
    icon: Sparkles,
  },
];

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="features" className="relative py-28 bg-salecop-black text-white overflow-hidden">
      {/* Luz ambiental sutil en el fondo */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-salecop-orange/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado de Sección */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-salecop-orange uppercase mb-4 block">
            CARACTERÍSTICAS
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight mb-6 tracking-tight">
            Todo lo que necesitas <br className="hidden sm:inline" />
            para llevar tu negocio al siguiente nivel.
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 font-normal leading-relaxed">
            Un sistema completo, diseñado para hacer tu día más fácil, seguro y productivo.
          </p>
        </motion.div>

        {/* Rejilla 2x2 de Características */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-x-12 gap-y-12 max-w-4xl"
        >
          {featuresData.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="group flex flex-col items-start p-2 rounded-2xl transition-all duration-300"
              >
                {/* Contenedor del Icono con borde naranja neón */}
                <div className="w-14 h-14 rounded-2xl bg-salecop-black border border-salecop-orange/40 flex items-center justify-center mb-5 shadow-lg shadow-salecop-orange/5 group-hover:border-salecop-orange group-hover:shadow-salecop-orange/20 group-hover:scale-105 transition-all duration-300">
                  <Icon className="w-6 h-6 text-salecop-orange" />
                </div>

                {/* Título de la característica */}
                <h3 className="text-2xl font-medium text-white mb-3 tracking-wide group-hover:text-salecop-cream transition-colors">
                  {feature.title}
                </h3>

                {/* Descripción */}
                <p className="text-base text-gray-400 font-normal leading-relaxed max-w-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enlace inferior de interacción */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <a 
            href="#system" 
            className="inline-flex items-center gap-2 text-salecop-orange hover:text-salecop-cream font-medium text-base group transition-colors duration-300"
          >
            <span>Conoce más sobre el sistema</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}