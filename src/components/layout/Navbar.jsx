import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { useAuth } from '../../contexts/AuthContext';

const Navbar = () => {
  const { user, signOut } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <Container className="flex items-center justify-between">

        <Link to="/" className="flex items-center gap-2">
          <img src="/logo-png.png" alt="Salecop AI Logo" className="h-24 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className={`flex gap-6 font-medium ${isScrolled ? 'text-salecop-cream' : 'text-salecop-charcoal'}`}>
            <a href="#features" className="hover:text-salecop-orange transition-colors">Características</a>
            <a href="#benefits" className="hover:text-salecop-orange transition-colors">Beneficios</a>
            <a href="#stats" className="hover:text-salecop-orange transition-colors">Impacto</a>
          </div>
          
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <Link to="/dashboard" className={`font-medium ${isScrolled ? 'text-salecop-cream' : 'text-salecop-charcoal'}`}>Dashboard</Link>
                <Button variant={isScrolled ? "primary" : "secondary"} onClick={signOut} size="sm">Cerrar sesión</Button>
              </>
            ) : (
              <>
                <Link to="/login" className={`font-medium ${isScrolled ? 'text-salecop-cream' : 'text-salecop-charcoal'}`}>Iniciar sesión</Link>
                <Link to="/register">
                  <Button variant="primary" size="sm">Empieza Gratis</Button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden ${isScrolled ? 'text-salecop-cream' : 'text-salecop-black'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-salecop-black border-t border-salecop-gray/20"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col mt-4">
              <a href="#features" className="text-salecop-cream text-lg">Características</a>
              <a href="#benefits" className="text-salecop-cream text-lg">Beneficios</a>
              <hr className="border-salecop-gray/30" />
              {user ? (
                <Button variant="outline" onClick={signOut} className="w-full">Cerrar sesión</Button>
              ) : (
                <>
                  <Link to="/login" className="text-salecop-cream text-center py-2">Iniciar sesión</Link>
                  <Link to="/register"><Button variant="primary" className="w-full">Empieza Gratis</Button></Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;