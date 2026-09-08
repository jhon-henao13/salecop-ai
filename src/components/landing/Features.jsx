import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Zap, WifiOff, BarChart3 } from 'lucide-react';
import Container from '../ui/Container';
import Card from '../ui/Card';

const features = [
  {
    title: 'IA Predictiva',
    description: 'Pronostica el volumen de ventas y optimiza tu inventario antes de que se agote.',
    icon: BrainCircuit,
    color: 'text-salecop-orange',
    bg: 'bg-salecop-orange/10'
  },
  {
    title: 'Tiempo Real',
    description: 'Toma decisiones al instante con tableros de métricas actualizados en vivo.',
    icon: Zap,
    color: 'text-yellow-600',
    bg: 'bg-yellow-500/10'
  },
  {
    title: 'Offline First',
    description: 'Continúa facturando sin interrupciones incluso si tu conexión a internet falla.',
    icon: WifiOff,
    color: 'text-salecop-darkbrown',
    bg: 'bg-salecop-darkbrown/10'
  },
  {
    title: 'Analítica Avanzada',
    description: 'Reportes detallados de rendimiento de empleados, productos estrella y horas pico.',
    icon: BarChart3,
    color: 'text-salecop-charcoal',
    bg: 'bg-salecop-charcoal/10'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-salecop-black mb-4">Todo lo que tu negocio necesita</h2>
          <p className="text-lg text-salecop-gray">Diseñado específicamente para el dinamismo del mercado colombiano, combinando potencia tecnológica con simplicidad de uso.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.bg} ${feature.color}`}>
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-salecop-black mb-3">{feature.title}</h3>
                <p className="text-salecop-charcoal/80 leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}