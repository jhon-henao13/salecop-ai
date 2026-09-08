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
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-salecop-black mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-lg text-salecop-gray">Únete a cientos de negocios que ya modernizaron sus ventas.</p>
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
              <Card className="h-full bg-salecop-cream/5 border-none">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-salecop-orange text-salecop-orange" />
                  ))}
                </div>
                <p className="text-salecop-charcoal mb-6 flex-grow font-medium italic">"{t.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-salecop-darkbrown flex items-center justify-center text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-salecop-black">{t.name}</div>
                    <div className="text-sm text-salecop-gray">{t.role}</div>
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