import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGeneticPanelOpen, setIsGeneticPanelOpen] = useState(false);
  const { getItemCount } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/lifecode-one');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <header className="fixed w-full top-0 z-50 glassmorphism">
      <div className="container mx-auto px-4 py-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/5fb1a9a0-f152-44e5-8710-444b0143bcb0.png" 
              alt="Lifecode Logo" 
              style={{ width: '160px', height: 'auto', objectFit: 'unset' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/about" className="text-lifecode-text-primary hover:text-lifecode-accent transition-colors text-sm">
              About Us
            </Link>
            
            {/* Genetic Panel Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setIsGeneticPanelOpen(true)}
              onMouseLeave={() => setIsGeneticPanelOpen(false)}
            >
              <button className="flex items-center text-lifecode-text-primary hover:text-lifecode-accent transition-colors text-sm">
                Genetic Panel <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isGeneticPanelOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-lifecode-primary/95 backdrop-blur-xl border border-white/20 rounded-lg p-4 space-y-2 shadow-2xl z-50">
                  <Link 
                    to="/lifecode-one" 
                    className="block px-4 py-2 text-lifecode-text-primary hover:text-lifecode-accent hover:bg-white/10 rounded transition-all"
                  >
                    Lifecode One
                  </Link>
                  <Link 
                    to="/lifecode-essentials" 
                    className="block px-4 py-2 text-lifecode-text-primary hover:text-lifecode-accent hover:bg-white/10 rounded transition-all"
                  >
                    Lifecode Essentials
                  </Link>
                  <Link 
                    to="/lifecode-enhanced" 
                    className="block px-4 py-2 text-lifecode-text-primary hover:text-lifecode-accent hover:bg-white/10 rounded transition-all"
                  >
                    Lifecode Enhanced
                  </Link>
                </div>
              )}
            </div>

            <Link to="/blog" className="text-lifecode-text-primary hover:text-lifecode-accent transition-colors text-sm">
              Blog
            </Link>
            <Link to="/contact" className="text-lifecode-text-primary hover:text-lifecode-accent transition-colors text-sm">
              Contact
            </Link>
            <Link to="/partners" className="text-lifecode-text-primary hover:text-lifecode-accent transition-colors text-sm">
              Partners
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Phone Number */}
            <div className="hidden md:flex items-center space-x-2 text-lifecode-text-primary">
              <Phone className="h-4 w-4 text-lifecode-accent" />
              <span className="text-xs">+91 98844 55488</span>
            </div>

            {/* Cart */}
            <button
              onClick={handleCartClick}
              className="relative p-1 text-lifecode-text-primary hover:text-lifecode-accent transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              {getItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-lifecode-button text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {getItemCount()}
                </span>
              )}
            </button>

            {/* Buy Now Button */}
            <Button
              onClick={handleBuyNow}
              className="bg-lifecode-button hover:bg-lifecode-button/80 text-white px-3 py-1 text-sm rounded-lg transition-all hover:shadow-lg hover:shadow-lifecode-button/25"
            >
              BUY NOW
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-lifecode-text-primary"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-2 glassmorphism rounded-lg p-3 space-y-3">
            <Link 
              to="/about" 
              className="block text-lifecode-text-primary hover:text-lifecode-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/lifecode-one" 
              className="block text-lifecode-text-primary hover:text-lifecode-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Lifecode One
            </Link>
            <Link 
              to="/lifecode-essentials" 
              className="block text-lifecode-text-primary hover:text-lifecode-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Lifecode Essentials
            </Link>
            <Link 
              to="/lifecode-enhanced" 
              className="block text-lifecode-text-primary hover:text-lifecode-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Lifecode Enhanced
            </Link>
            <Link 
              to="/blog" 
              className="block text-lifecode-text-primary hover:text-lifecode-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="block text-lifecode-text-primary hover:text-lifecode-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/partners" 
              className="block text-lifecode-text-primary hover:text-lifecode-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Partners
            </Link>
            <div className="flex items-center space-x-2 text-lifecode-text-primary pt-2 border-t border-white/10">
              <Phone className="h-4 w-4 text-lifecode-accent" />
              <span className="text-sm">+91 98844 55488</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
