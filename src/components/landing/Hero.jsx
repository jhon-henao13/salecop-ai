import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';
import Badge from '../ui/Badge';

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
    <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-salecop-black">
      {/* Fondo con gradiente y efecto de brillo */}
      <div className="absolute inset-0 bg-gradient-to-br from-salecop-black via-salecop-deepbrown/80 to-salecop-black"></div>
      
      {/* Efecto de brillo naranja (glow) */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[80%] bg-salecop-orange/20 rounded-full filter blur-3xl opacity-60 animate-pulse-glow"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[60%] bg-salecop-orange/10 rounded-full filter blur-3xl opacity-40 animate-float"></div>
      
      {/* Grid pattern sutil */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div variants={container} initial="hidden" animate="show" className="lg:col-span-7 max-w-2xl">
            <motion.div variants={item}>
              <Badge variant="dark" className="mb-6 !bg-salecop-orange/20 !text-salecop-cream border-salecop-orange/30 backdrop-blur-sm">
                <Sparkles size={14} className="inline mr-2" /> POS Inteligente para Colombia
              </Badge>
            </motion.div>
            
            <motion.h1 variants={item} className="text-6xl lg:text-7xl font-extrabold text-white !leading-[1.2] mb-8">
              Revoluciona tus ventas con <span className="gradient-text">IA</span>
            </motion.h1>
            
            <motion.p variants={item} className="text-2xl text-salecop-silver/90 mb-10 font-medium leading-relaxed">
              El sistema de punto de venta predictivo que analiza en tiempo real, funciona sin conexión y maximiza tus ganancias.
            </motion.p>
            
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-lg shadow-salecop-orange/30 hover:shadow-salecop-orange/50 transition-shadow duration-300">
                  Empieza Gratis
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 bg-salecop-black/40 backdrop-blur-sm border-salecop-cream/30 text-salecop-cream hover:bg-salecop-cream/10">
                <Play size={20} /> Ver Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Mockup del Dashboard con efecto glass y brillo */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Glow detrás del mockup */}
            <div className="absolute inset-0 bg-salecop-orange/30 rounded-full filter blur-3xl opacity-30 animate-pulse-glow"></div>
            
            <div className="relative w-full aspect-[4/3] bg-salecop-black/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-salecop-gray/30 overflow-hidden transform perspective-1000 rotate-y-[-10deg] rotate-x-[5deg] glow-orange">
              {/* Barra superior del mockup */}
              <div className="absolute top-0 w-full h-8 bg-salecop-charcoal/80 flex items-center px-4 gap-2 border-b border-salecop-gray/20">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-salecop-silver text-xs ml-2 font-mono">Salecop AI Dashboard</span>
              </div>
              {/* Contenido del mockup */}
              <div className="mt-8 p-6 grid grid-cols-3 gap-4 h-full">
                <div className="col-span-2 bg-white/5 rounded-xl h-48 animate-pulse border border-salecop-gray/10"></div>
                <div className="bg-salecop-orange/20 rounded-xl h-48 animate-pulse border border-salecop-orange/10"></div>
                <div className="col-span-3 bg-white/5 rounded-xl h-32 animate-pulse border border-salecop-gray/10"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}