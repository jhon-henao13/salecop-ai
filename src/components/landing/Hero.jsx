import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
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
    <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-gradient-to-b from-salecop-cream via-[#e8cbb6] to-white">
      {/* Elementos decorativos animados */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-salecop-orange/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-salecop-darkbrown/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div variants={container} initial="hidden" animate="show" className="lg:col-span-7 max-w-2xl">
            <motion.div variants={item}>
              <Badge variant="dark" className="mb-6">POS Inteligente para Colombia</Badge>
            </motion.div>
            
            <motion.h1 variants={item} className="text-6xl lg:text-7xl font-extrabold text-salecop-black !leading-[1.2] mb-8">
              Revoluciona tus ventas con <span className="text-transparent bg-clip-text bg-gradient-to-r from-salecop-orange to-salecop-darkbrown">IA</span>
            </motion.h1>
            
            <motion.p variants={item} className="text-2xl text-salecop-charcoal/80 mb-10 font-medium">
              El sistema de punto de venta predictivo que analiza en tiempo real, funciona sin conexión y maximiza tus ganancias.
            </motion.p>
            
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">Empieza Gratis</Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 bg-white/50 backdrop-blur-sm">
                <Play size={20} /> Ver Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Mockup del Dashboard */}
          {/* Mockup del Dashboard */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative w-full aspect-[4/3] bg-salecop-black rounded-2xl shadow-2xl border-4 border-salecop-black/10 overflow-hidden transform perspective-1000 rotate-y-[-10deg] rotate-x-[5deg]">
              <div className="absolute top-0 w-full h-8 bg-salecop-charcoal flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mt-8 p-6 grid grid-cols-3 gap-4 h-full">
                <div className="col-span-2 bg-white/10 rounded-xl h-48 animate-pulse"></div>
                <div className="bg-salecop-orange/20 rounded-xl h-48 animate-pulse"></div>
                <div className="col-span-3 bg-white/5 rounded-xl h-32 animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}