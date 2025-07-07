
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-lifecode-primary">
      <Header />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-lifecode-text-primary mb-6 glow-text">About Lifecode</h1>
            <p className="text-xl text-lifecode-text-primary/80">
              India's leading personalized genetic testing brand
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
