import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Container from '../ui/Container';
import Card from '../ui/Card';

const testimonials = [
  {
    name: "Carlos Restrepo",
    role: "Dueño de Minimarket",
    content: "Desde que instalamos Salecop AI, el cierre de caja pasó de tomarnos una hora a solo 5 minutos. La función offline nos salvó durante el último apagón.",
    rating: 5
  },
  {
    name: "Ana Martínez",
    role: "Gerente de Cafetería",
    content: "Las predicciones de IA son increíbles. Ahora sé exactamente cuántos insumos pedir para los fines de semana sin desperdiciar nada.",
    rating: 5
  },
  {
    name: "David Gómez",
    role: "Fundador de RetailTech",
    content: "La interfaz es supremamente intuitiva. Mis empleados nuevos aprenden a usarla en su primer día. Excelente soporte y estabilidad.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-salecop-black relative overflow-hidden">
      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-salecop-orange/30 to-transparent"></div>
      
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-lg text-salecop-silver/80">Únete a cientos de negocios que ya modernizaron sus ventas.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-salecop-black/40 backdrop-blur-sm border border-salecop-gray/20 hover:border-salecop-orange/30 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-salecop-orange text-salecop-orange" />
                  ))}
                </div>
                <p className="text-salecop-cream/80 mb-6 flex-grow font-medium italic">"{t.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-salecop-orange/20 flex items-center justify-center text-salecop-orange font-bold border border-salecop-orange/30">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-sm text-salecop-silver/70">{t.role}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}