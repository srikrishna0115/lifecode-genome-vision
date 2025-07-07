
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const LifecodeEssentials = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (panel: any) => {
    addToCart({
      id: panel.id,
      name: panel.name,
      price: panel.price,
      category: 'Lifecode Essentials',
      description: panel.description
    });
    toast.success(`${panel.name} added to cart!`);
  };

  const panels = [
    {
      id: 'antioxidants-vitamins',
      name: 'Antioxidants, Vitamins & Minerals',
      price: 4999,
      description: 'Analyze your genetic ability to process essential nutrients and antioxidants for optimal health.'
    },
    {
      id: 'addictions',
      name: 'Addictions',
      price: 3999,
      description: 'Understand genetic predispositions to various addictive behaviors and substances.'
    },
    {
      id: 'allergies',
      name: 'Allergies',
      price: 4499,
      description: 'Identify genetic markers for common allergies and sensitivities.'
    },
    {
      id: 'autoimmune',
      name: 'Autoimmune Conditions',
      price: 5999,
      description: 'Screen for genetic risks of autoimmune disorders and inflammatory conditions.'
    },
    {
      id: 'fitness',
      name: 'Fitness',
      price: 4999,
      description: 'Optimize your workout routine based on your genetic fitness profile.'
    },
    {
      id: 'nutritional',
      name: 'Nutritional Panel',
      price: 5499,
      description: 'Personalized nutrition recommendations based on your genetic makeup.'
    },
    {
      id: 'hormone',
      name: 'Hormone Profile',
      price: 6999,
      description: 'Comprehensive analysis of hormone-related genetic markers.'
    },
    {
      id: 'cardiovascular',
      name: 'Cardiovascular Health Panel',
      price: 6499,
      description: 'Assess genetic risks for heart disease and cardiovascular conditions.'
    },
    {
      id: 'inflammation',
      name: 'Inflammation Panel',
      price: 4999,
      description: 'Understand your genetic inflammatory response patterns.'
    },
    {
      id: 'wellbeing',
      name: 'Well Being Panel',
      price: 5999,
      description: 'Holistic genetic analysis for overall wellness and mental health.'
    },
    {
      id: 'bone-health',
      name: 'Bone Health Panel',
      price: 4499,
      description: 'Genetic insights into bone density, calcium metabolism, and fracture risk.'
    },
    {
      id: 'beauty',
      name: 'Hair, Nail, Skin & Face Harmonization',
      price: 5999,
      description: 'Beauty and aesthetic genetic analysis for personalized care routines.'
    },
    {
      id: 'midlife',
      name: 'Mid-life & Beyond',
      price: 6999,
      description: 'Age-related genetic factors and healthy aging strategies.'
    },
    {
      id: 'diabetic',
      name: 'Diabetic Panel',
      price: 5499,
      description: 'Genetic predisposition to diabetes and metabolic disorders.'
    },
    {
      id: 'sexual-wellbeing',
      name: 'Sexual Wellbeing & Hormone Panel',
      price: 6999,
      description: 'Comprehensive analysis of reproductive health and sexual wellness genetics.'
    }
  ];

  return (
    <div className="min-h-screen bg-lifecode-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-lifecode-text-primary mb-6 glow-text">
              Lifecode Essentials
            </h1>
            <p className="text-xl text-lifecode-text-primary/80 mb-8">
              Targeted genetic panels covering specific health areas from allergies to cardiovascular health and hormone profiles
            </p>
          </div>
        </div>
      </section>

      {/* Panels Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {panels.map((panel) => (
              <div key={panel.id} className="glassmorphism rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-lifecode-text-primary mb-3">{panel.name}</h3>
                  <p className="text-lifecode-text-primary/80 text-sm mb-4">{panel.description}</p>
                  <div className="text-2xl font-bold text-lifecode-accent mb-6">
                    ₹{panel.price.toLocaleString()}
                  </div>
                </div>

                <Button
                  onClick={() => handleAddToCart(panel)}
                  className="w-full bg-lifecode-button hover:bg-lifecode-button/80 text-white py-2 rounded-lg transition-all hover:shadow-lg hover:shadow-lifecode-button/25"
                >
                  BUY NOW
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Essentials */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="glassmorphism rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-lifecode-text-primary mb-6 text-center">
              Why Choose Lifecode Essentials?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-lifecode-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-lifecode-text-primary mb-3">Targeted Analysis</h3>
                <p className="text-lifecode-text-primary/80">
                  Focus on specific health areas that matter most to you with our specialized genetic panels.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-lifecode-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-semibold text-lifecode-text-primary mb-3">Actionable Insights</h3>
                <p className="text-lifecode-text-primary/80">
                  Get practical recommendations you can implement immediately to improve your health outcomes.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-lifecode-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-xl font-semibold text-lifecode-text-primary mb-3">Scientific Precision</h3>
                <p className="text-lifecode-text-primary/80">
                  Based on the latest genetic research and validated scientific methodologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LifecodeEssentials;
