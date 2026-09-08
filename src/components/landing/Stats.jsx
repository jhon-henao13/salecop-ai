import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';

const stats = [
  { value: "500+", label: "Negocios Activos" },
  { value: "2M+", label: "Transacciones/Mes" },
  { value: "98%", label: "Satisfacción" },
  { value: "24/7", label: "Soporte Técnico" }
];

export default function Stats() {
  return (
    <section id="stats" className="py-20 bg-salecop-deepbrown text-salecop-cream relative overflow-hidden">
      {/* Fondo con patrón más sutil y degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-salecop-black/50 to-transparent"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <Container className="relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-salecop-cream/10">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-salecop-orange mb-2">{stat.value}</div>
              <div className="text-salecop-cream/70 font-medium text-sm md:text-base uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}