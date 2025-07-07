
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-lifecode-primary border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/5e3eeb91-044a-455d-a257-58e20498fdf7.png" 
              alt="Lifecode Logo" 
              className="h-8 w-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-lifecode-text-primary">
              Lifecode Genorex Private Limited
            </h3>
            <div className="space-y-2 text-sm text-lifecode-text-primary/80">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-lifecode-accent mt-1 flex-shrink-0" />
                <span>Lifecode Clinic, Health & Wellness Center, Mumbai, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-lifecode-accent" />
                <a href="mailto:care@lifecode.life" className="hover:text-lifecode-accent transition-colors">
                  care@lifecode.life
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-lifecode-accent" />
                <a href="tel:+919884455488" className="hover:text-lifecode-accent transition-colors">
                  +91 98844 55488
                </a>
              </div>
              <div>
                <a 
                  href="https://www.lifecode.life" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-lifecode-accent transition-colors"
                >
                  www.lifecode.life
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-lifecode-text-primary">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link 
                to="/lifecode-one" 
                className="block text-lifecode-text-primary/80 hover:text-lifecode-accent transition-colors"
              >
                Genetic Test
              </Link>
              <Link 
                to="/blog" 
                className="block text-lifecode-text-primary/80 hover:text-lifecode-accent transition-colors"
              >
                Blog
              </Link>
              <Link 
                to="/about" 
                className="block text-lifecode-text-primary/80 hover:text-lifecode-accent transition-colors"
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="block text-lifecode-text-primary/80 hover:text-lifecode-accent transition-colors"
              >
                Contact
              </Link>
              <Link 
                to="/partners" 
                className="block text-lifecode-text-primary/80 hover:text-lifecode-accent transition-colors"
              >
                Partners
              </Link>
            </div>
          </div>

          {/* Column 3: Legal Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-lifecode-text-primary">Legal</h3>
            <div className="space-y-2 text-sm">
              <a 
                href="#" 
                className="block text-lifecode-text-primary/80 hover:text-lifecode-accent transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="block text-lifecode-text-primary/80 hover:text-lifecode-accent transition-colors"
              >
                Terms and Conditions
              </a>
              <a 
                href="#" 
                className="block text-lifecode-text-primary/80 hover:text-lifecode-accent transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-lifecode-text-primary/60 mb-4 md:mb-0">
            © 2024 Lifecode Genorex Private Limited. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-lifecode-text-primary/60 hover:text-lifecode-accent transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-lifecode-text-primary/60 hover:text-lifecode-accent transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-lifecode-text-primary/60 hover:text-lifecode-accent transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-lifecode-text-primary/60 hover:text-lifecode-accent transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
