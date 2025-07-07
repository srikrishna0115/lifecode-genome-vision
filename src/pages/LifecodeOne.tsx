import React from 'react';
import { Users, Heart, Activity } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const LifecodeOne = () => {
  const { addToCart } = useCart();

  const handleAddCompletePackage = () => {
    addToCart({
      id: 'lifecode-one-complete',
      name: 'Lifecode One Complete Package',
      price: 35997, // Sum of all three panels (12999 + 12999 + 9999)
      category: 'Lifecode One',
      description: 'Complete genetic analysis package including Standard Health Men, Women, and Pediatric panels'
    });
    toast.success('Lifecode One Complete Package added to cart!');
  };

  const panels = [
    {
      id: 'standard-health-men',
      name: 'Standard Health Men',
      price: 12999,
      description: 'Comprehensive genetic analysis for men\'s health optimization',
      icon: <Users className="h-8 w-8 text-lifecode-accent" />,
      features: [
        'Testosterone & DHT Levels Analysis',
        'Prostate Health Markers',
        'Cardiovascular Risk Factors',
        'Metabolic Syndrome Tendencies',
        'Longevity & Vitality Genes'
      ]
    },
    {
      id: 'standard-health-women',
      name: 'Standard Health Women',
      price: 12999,
      description: 'Tailored genetic insights for women\'s health and wellness',
      icon: <Heart className="h-8 w-8 text-lifecode-accent" />,
      features: [
        'Hormonal Health (Estrogen, Progesterone)',
        'Bone Density & Osteoporosis Risk',
        'Cardiovascular Health Insights',
        'Fertility & Reproductive Health Factors',
        'Risks for PCOS & Endometriosis'
      ]
    },
    {
      id: 'standard-health-pediatric',
      name: 'Standard Health Pediatric',
      price: 9999,
      description: 'Essential genetic screening for children\'s health and development',
      icon: <Activity className="h-8 w-8 text-lifecode-accent" />,
      features: [
        'Childhood Allergy Risks',
        'Nutrient Metabolism Analysis',
        'Developmental & Growth Factors',
        'Predisposition to Celiac & Lactose Intolerance',
        'Immune System Development Markers'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-lifecode-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <img 
              src="/lovable-uploads/702dd76d-5ef9-442d-9f92-7ce6bf769512.png" 
              alt="Lifecode One Product" 
              className="mx-auto mb-8 max-w-md w-full h-auto rounded-2xl shadow-2xl"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-lifecode-text-primary mb-6 glow-text">
              Lifecode One
            </h1>
            <p className="text-xl text-lifecode-text-primary/80 mb-8">
              Comprehensive genetic panels for men, women, and children focusing on core health markers and predispositions
            </p>
            <Button
              onClick={handleAddCompletePackage}
              className="bg-lifecode-button hover:bg-lifecode-button/80 text-white px-8 py-4 text-lg rounded-lg transition-all hover:shadow-lg hover:shadow-lifecode-button/25"
            >
              BUY NOW
            </Button>
          </div>
        </div>
      </section>

      {/* Panels Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {panels.map((panel) => (
              <div key={panel.id} className="glassmorphism rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-lifecode-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {panel.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-lifecode-text-primary mb-2">{panel.name}</h3>
                  <p className="text-lifecode-text-primary/80 mb-4">{panel.description}</p>
                  <div className="text-3xl font-bold text-lifecode-accent mb-6">
                    ₹{panel.price.toLocaleString()}
                  </div>
                </div>

                <div className="space-y-3">
                  {panel.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-lifecode-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-lifecode-text-primary/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="glassmorphism rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-lifecode-text-primary mb-6 text-center">
              Why Choose Lifecode One?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-lifecode-text-primary mb-4">Comprehensive Analysis</h3>
                <p className="text-lifecode-text-primary/80">
                  Our Lifecode One panels provide detailed insights into your genetic predispositions, 
                  helping you make informed decisions about your health and lifestyle.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-lifecode-text-primary mb-4">Personalized Reports</h3>
                <p className="text-lifecode-text-primary/80">
                  Each report is tailored to your specific genetic profile with actionable recommendations 
                  for nutrition, fitness, and health optimization.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-lifecode-text-primary mb-4">Expert Interpretation</h3>
                <p className="text-lifecode-text-primary/80">
                  Our team of genetic counselors and healthcare professionals ensure you understand 
                  your results and their implications for your health journey.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-lifecode-text-primary mb-4">Ongoing Support</h3>
                <p className="text-lifecode-text-primary/80">
                  Access to our support team for questions and guidance as you implement 
                  your personalized health recommendations.
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

export default LifecodeOne;
