import React from 'react';
import { Shield, Clock, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const StandardHealthMen = () => {
  const { addToCart } = useCart();

  const panelData = {
    id: 'standard-health-men',
    name: 'Standard Health Men',
    price: 35000,
    category: 'Genetic Testing Panel',
    description: 'A comprehensive genetic panel designed for men, focusing on preventative health, disease susceptibility, and key wellness markers to provide a complete picture of your genetic predispositions.'
  };

  const geneticMarkers = [
    {
      id: 'cardio-circulatory',
      title: 'Cardio-Circulatory System',
      items: ['Atherosclerosis', 'Hypertension', 'Acute Myocardial Infarction', 'Cholesterol (HDL & LDL)', 'Triglycerides', 'Venous Thrombosis', 'Cardiac Arrhythmia', 'High Ferritin', 'Heart Disease', 'Ischemic Stroke', 'MTHFR mutations']
    },
    {
      id: 'neurological',
      title: 'Neurological System',
      items: ['Mental/Cognitive Decline', 'Stroke', 'Alzheimer\'s', 'Parkinson\'s', 'Sleep Quality', 'Dopamine/Serotonin Synthesis']
    },
    {
      id: 'oncology',
      title: 'Oncology',
      items: ['Thyroid', 'Colorectal', 'Prostate Neoplasm', 'Skin Cancer', 'Lung Cancer']
    },
    {
      id: 'respiratory',
      title: 'Respiratory System',
      items: ['Asthma', 'Flu', 'Bronchitis', 'Apnea', 'Pulmonary Emphysema', 'Allergic Rhinitis']
    },
    {
      id: 'genito-urinary',
      title: 'Genito-Urinary System',
      items: ['Kidney Calculus', 'Benign Prostate Hyperplasia']
    },
    {
      id: 'endocrinological-disease',
      title: 'Endocrinological System – Disease Susceptibility',
      items: ['Metabolic Syndrome', 'Autoimmune Thyroid Disease', 'Insulin Resistance', 'Type 2 Diabetes', 'Hypothyroidism']
    },
    {
      id: 'endocrinological-hormones',
      title: 'Endocrinological System – Hormones',
      items: ['Oxytocin', 'Melatonin', 'Insulin', 'Cortisol', 'DHEA/DHEAS', 'Progesterone', 'Testosterone', 'Dihydrotestosterone']
    },
    {
      id: 'gastrointestinal',
      title: 'Gastrointestinal System',
      items: ['Gluten/Lactose Intolerance', 'Ulcerative Colitis', 'Leaky Gut', 'Milk Protein Allergy', 'IBS', 'Ulcer', 'Celiac Disease', 'Gastritis']
    },
    {
      id: 'osteo-muscular',
      title: 'Osteo-Muscular System',
      items: ['Osteoporosis', 'Rheumatoid Arthritis', 'Arthrosis of the Knee', 'Disc Herniation']
    },
    {
      id: 'sensory',
      title: 'Sensory System',
      items: ['Cataract', 'Macular Degeneration', 'Glaucoma', 'Deafness', 'Myopia', 'Hyperopia', 'Astigmatism']
    },
    {
      id: 'immunological',
      title: 'Immunological System',
      items: ['Food Coloring Allergy', 'Allergies in General']
    },
    {
      id: 'fertility',
      title: 'Fertility',
      items: ['Male Infertility']
    },
    {
      id: 'behavioral',
      title: 'Behavioral',
      items: ['Depression', 'Anxiety', 'Relationship Selectivity', 'Impulsivity', 'Fears', 'Mood Disorder', 'Difficulty in Receiving Reviews']
    }
  ];

  const whyChooseFeatures = [
    {
      icon: Shield,
      title: 'Expert Analysis',
      description: 'Analyzed by certified genetic counselors and medical professionals'
    },
    {
      icon: Clock,
      title: 'Accurate Results',
      description: '99.9% accuracy with latest genetic testing technology'
    },
    {
      icon: Award,
      title: 'Actionable Insights',
      description: 'Clear recommendations you can implement immediately'
    }
  ];

  const handleAddToCart = () => {
    addToCart(panelData);
    toast.success(`${panelData.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-lifecode-content-bg">
      <Header />
      
      {/* Hero Section - Restructured to Single Column */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-gelion font-bold text-lifecode-text-headlines mb-8">
              {panelData.name}
            </h1>
            
            {/* Image Placeholder */}
            <div className="w-full max-w-2xl h-80 mx-auto mb-8 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-lifecode-text-secondary/50 text-lg">Product Image Placeholder</span>
            </div>
            
            {/* Description */}
            <p className="text-xl text-lifecode-text-secondary font-roboto">
              {panelData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Panel Breakdown - Card Layout */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-gelion font-bold text-lifecode-text-headlines mb-8 text-center">
            Genetic Markers Analyzed in this Panel
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {geneticMarkers.map((category) => (
              <div key={category.id} className="bg-lifecode-primary rounded-lg p-6">
                <h3 className="font-roboto font-bold text-lg text-lifecode-text-primary mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-lifecode-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-lifecode-text-primary font-roboto text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose This Panel Section - White Background with Single Add to Cart Button */}
      <section className="py-12 bg-lifecode-content-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-gelion font-bold text-lifecode-text-headlines mb-12 text-center">
            Why Choose This Panel?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
            {whyChooseFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-lifecode-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-roboto font-bold text-xl text-lifecode-text-headlines mb-3">
                  {feature.title}
                </h3>
                <p className="text-lifecode-text-secondary font-roboto">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Single centered Add to Cart button */}
          <div className="text-center">
            <Button
              onClick={handleAddToCart}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg rounded-lg transition-all hover:shadow-lg"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StandardHealthMen;
