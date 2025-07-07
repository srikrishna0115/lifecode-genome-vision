
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const LifecodeEnhanced = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (program: any) => {
    addToCart({
      id: program.id,
      name: program.name,
      price: program.price,
      category: 'Lifecode Enhanced',
      description: program.description
    });
    toast.success(`${program.name} added to cart!`);
  };

  const programs = [
    {
      id: 'gut-health',
      name: 'Gut Health Panel',
      price: 15999,
      description: 'Comprehensive genetic analysis of digestive health and microbiome interactions.',
      overview: 'Understanding your genetic predisposition to digestive disorders, food intolerances, and optimal gut health maintenance.',
      benefits: [
        'Personalized dietary recommendations',
        'Microbiome optimization strategies',
        'Digestive enzyme production analysis',
        'Food sensitivity identification',
        'Probiotic effectiveness prediction'
      ]
    },
    {
      id: 'endocrinology-thyroid',
      name: 'Endocrinology & Metabolism - Thyroid',
      price: 18999,
      description: 'Advanced genetic testing for thyroid function and metabolic health optimization.',
      overview: 'Detailed analysis of thyroid-related genes and their impact on metabolism, energy levels, and overall hormonal balance.',
      benefits: [
        'Thyroid medication optimization',
        'Metabolic rate understanding',
        'Hormone balance insights',
        'Energy level optimization',
        'Weight management strategies'
      ]
    },
    {
      id: 'diabetic-endocrinology',
      name: 'Diabetic & Endocrinology - Thyroid',
      price: 19999,
      description: 'Comprehensive program combining diabetes management with thyroid health optimization.',
      overview: 'Integrated approach to managing both diabetic tendencies and thyroid function through genetic insights.',
      benefits: [
        'Blood sugar regulation strategies',
        'Insulin sensitivity analysis',
        'Thyroid-diabetes interaction insights',
        'Personalized medication guidance',
        'Lifestyle modification recommendations'
      ]
    },
    {
      id: 'good-gut-program',
      name: 'The Good Gut Program',
      price: 22999,
      description: 'Complete gut health transformation program with ongoing support and monitoring.',
      overview: 'A comprehensive 6-month program combining genetic insights with personalized nutrition and lifestyle interventions.',
      benefits: [
        '6-month personalized nutrition plan',
        'Monthly progress monitoring',
        'Supplement recommendations',
        'Lifestyle coaching sessions',
        'Continuous support from nutritionists'
      ]
    },
    {
      id: 'weight-management',
      name: 'Weight Management Program',
      price: 24999,
      description: 'Scientifically-backed weight management program based on your genetic profile.',
      overview: 'Personalized weight management strategy combining genetic insights with proven lifestyle interventions.',
      benefits: [
        'Genetically-tailored diet plans',
        'Exercise recommendations',
        'Metabolic rate optimization',
        'Behavioral coaching support',
        'Long-term maintenance strategies'
      ]
    },
    {
      id: 'diabetes-management',
      name: 'Diabetes Management Program',
      price: 26999,
      description: 'Comprehensive diabetes prevention and management program with genetic insights.',
      overview: 'Advanced program for preventing or managing diabetes using genetic predisposition analysis and personalized interventions.',
      benefits: [
        'Pre-diabetes prevention strategies',
        'Blood sugar optimization',
        'Medication effectiveness prediction',
        'Dietary intervention plans',
        'Continuous glucose monitoring guidance'
      ]
    },
    {
      id: 'longevity-program',
      name: 'Longevity Program',
      price: 29999,
      description: 'Ultimate longevity and healthy aging program with comprehensive genetic analysis.',
      overview: 'The most comprehensive program focusing on genetic factors that influence aging, longevity, and overall healthspan.',
      benefits: [
        'Aging biomarker analysis',
        'Longevity gene assessment',
        'Anti-aging strategies',
        'Healthspan optimization',
        'Personalized longevity protocols'
      ]
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
              Lifecode Enhanced
            </h1>
            <p className="text-xl text-lifecode-text-primary/80 mb-8">
              Advanced comprehensive programs combining genetics with personalized health management and longevity optimization
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="glassmorphism rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-lifecode-text-primary mb-3">{program.name}</h3>
                  <p className="text-lifecode-text-primary/80 mb-4">{program.description}</p>
                  <div className="text-3xl font-bold text-lifecode-accent mb-6">
                    ₹{program.price.toLocaleString()}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-lifecode-text-primary mb-3">Program Overview</h4>
                  <p className="text-lifecode-text-primary/80 text-sm mb-4">{program.overview}</p>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-lifecode-text-primary mb-3">Key Benefits</h4>
                  <div className="space-y-2">
                    {program.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-lifecode-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-lifecode-text-primary/80 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={() => handleAddToCart(program)}
                  className="w-full bg-lifecode-button hover:bg-lifecode-button/80 text-white py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-lifecode-button/25"
                >
                  BUY NOW - ₹{program.price.toLocaleString()}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Enhanced */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="glassmorphism rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-lifecode-text-primary mb-6 text-center">
              Why Choose Lifecode Enhanced?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-lifecode-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-lifecode-text-primary mb-3">Advanced Programs</h3>
                <p className="text-lifecode-text-primary/80">
                  Comprehensive programs that go beyond testing to provide ongoing support and management.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-lifecode-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold text-lifecode-text-primary mb-3">Expert Support</h3>
                <p className="text-lifecode-text-primary/80">
                  Direct access to genetic counselors, nutritionists, and healthcare professionals.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-lifecode-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⏱️</span>
                </div>
                <h3 className="text-xl font-semibold text-lifecode-text-primary mb-3">Ongoing Monitoring</h3>
                <p className="text-lifecode-text-primary/80">
                  Continuous health monitoring and program adjustments based on your progress.
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

export default LifecodeEnhanced;
