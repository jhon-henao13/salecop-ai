import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';
import Badge from '../ui/Badge';
// 1. Importa tu imagen de background aquí
import backgroundHero from '../../assets/background-hero.jpg';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section 
      className="relative pt-28 pb-20 lg:pt-40 lg:pb-40 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundHero})` }}
    >
      {/* 
        Si deseas una capa oscura muy sutil de contraste para que el texto resalte 
        (puedes eliminar este div si quieres la imagen 100% limpia sin ningún filtro por encima) 
      */}
      <div className="absolute inset-0 bg-salecop-black/40"></div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center justify-center">
          {/* Contenido principal centrado/ampliado al eliminar la columna derecha */}
          <motion.div 
            variants={container} 
            initial="hidden" 
            animate="show" 
            className="lg:col-span-10 lg:col-start-2 text-center lg:text-left max-w-3xl mx-auto lg:mx-0"
          >
            <motion.div variants={item} className="flex justify-center lg:justify-start">
              <Badge variant="dark" className="mb-6 !bg-salecop-orange/20 !text-salecop-cream border-salecop-orange/30 !tracking-widest">
                <Sparkles size={14} className="inline mr-2 " /> Sistema POS con IA
              </Badge>
            </motion.div>
            
            <motion.h1 variants={item} className="text-6xl lg:text-7xl font-normal text-white !leading-[1.2] mb-8">
              Tu negocio, más <span className="gradient-text">inteligente que nunca</span>
            </motion.h1>
            
            <motion.p variants={item} className="text-2xl text-gray-400 mb-10 font-medium leading-snug">
              Salecop Al es un sistema POS con inteligencia artificial que te ayuda a vender más, controlar tu inventario y tomar mejores decisiones, todo en un solo lugar.
            </motion.p>
            
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/register">
                <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-lg shadow-salecop-orange/30 hover:shadow-salecop-orange/50 transition-shadow duration-300">
                  Empieza Gratis
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 bg-salecop-black/40 border-salecop-cream/30 text-salecop-cream hover:bg-salecop-cream/10">
                <Play size={20} /> Ver Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* El contenido de la derecha (Mockup y glows/blur) fue eliminado por completo */}
        </div>
      </Container>
    </section>
  );
}