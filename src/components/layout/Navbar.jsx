import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../ui/Button';

export default function Navbar() {
  const { user, signOut } = useAuth();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-dark border-b border-salecop-gray/20 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo con imagen y drop-shadow para que resalte */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/logo-2-png.png" 
              alt="Salecop AI Logo" 
              className="h-8 lg:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/#features" className="text-salecop-silver hover:text-salecop-cream transition-colors text-sm font-medium">
              Características
            </Link>
            <Link to="/#benefits" className="text-salecop-silver hover:text-salecop-cream transition-colors text-sm font-medium">
              Beneficios
            </Link>
            <Link to="/#stats" className="text-salecop-silver hover:text-salecop-cream transition-colors text-sm font-medium">
              Estadísticas
            </Link>
            <Link to="/#testimonials" className="text-salecop-silver hover:text-salecop-cream transition-colors text-sm font-medium">
              Testimonios
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <Link to="/dashboard">
                  <Button variant="outline" size="sm" className="text-salecop-cream border-salecop-cream/30 hover:bg-salecop-cream/10">
                    Dashboard
                  </Button>
                </Link>
                <Button variant="primary" size="sm" onClick={signOut}>
                  Cerrar sesión
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" size="sm" className="text-salecop-cream border-salecop-cream/30 hover:bg-salecop-cream/10">
                    Iniciar sesión
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="primary" size="sm">
                    Empieza gratis
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-salecop-cream hover:text-white transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-dark border-t border-salecop-gray/20 py-4 px-4 shadow-2xl">
          <div className="flex flex-col gap-4">
            <Link to="/#features" className="text-salecop-silver hover:text-salecop-cream transition-colors py-1" onClick={() => setIsMobileMenuOpen(false)}>
              Características
            </Link>
            <Link to="/#benefits" className="text-salecop-silver hover:text-salecop-cream transition-colors py-1" onClick={() => setIsMobileMenuOpen(false)}>
              Beneficios
            </Link>
            <Link to="/#stats" className="text-salecop-silver hover:text-salecop-cream transition-colors py-1" onClick={() => setIsMobileMenuOpen(false)}>
              Estadísticas
            </Link>
            <Link to="/#testimonials" className="text-salecop-silver hover:text-salecop-cream transition-colors py-1" onClick={() => setIsMobileMenuOpen(false)}>
              Testimonios
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-salecop-gray/20">
              {user ? (
                <>
                  <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full text-salecop-cream border-salecop-cream/30 hover:bg-salecop-cream/10">
                      Dashboard
                    </Button>
                  </Link>
                  <Button variant="primary" className="w-full" onClick={() => { signOut(); setIsMobileMenuOpen(false); }}>
                    Cerrar sesión
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full text-salecop-cream border-salecop-cream/30 hover:bg-salecop-cream/10">
                      Iniciar sesión
                    </Button>
                  </Link>
                  <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="primary" className="w-full">
                      Empieza gratis
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}