
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-lifecode-primary border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/5fb1a9a0-f152-44e5-8710-444b0143bcb0.png" 
              alt="Lifecode Logo" 
              className="mb-4"
              style={{ width: '257px', height: 'auto', objectFit: 'unset' }}
            />
            <h3 className="text-lg font-semibold text-lifecode-text-primary">
              Lifecode Genorex Private Limited
            </h3>
            <div className="space-y-2 text-sm text-lifecode-text-primary/80">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-lifecode-accent mt-1 flex-shrink-0" />
                <span>Clinic: No.18, 2nd Floor, Gopalapuram 1st St, Gopalapuram, Chennai, 600086.</span>
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
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-lifecode-accent" />
                <span>Chat with us on WhatsApp</span>
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
                Terms and conditions
              </a>
              <a 
                href="#" 
                className="block text-lifecode-text-primary/80 hover:text-lifecode-accent transition-colors"
              >
                Sitemap
              </a>
              <a 
                href="#" 
                className="block text-lifecode-text-primary/80 hover:text-lifecode-accent transition-colors"
              >
                Blog Sitemap
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-lifecode-text-primary/60 mb-4 md:mb-0">
            © 2024 Lifecode Genorex Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
