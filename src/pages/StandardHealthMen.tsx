import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const StandardHealthMen = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);
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

  const handleAddToCart = () => {
    addToCart(panelData);
    toast.success(`${panelData.name} added to cart!`);
  };

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setShowStickyBar(window.scrollY > heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-lifecode-content-bg">
      <Header />
      
      {/* Hero Section */}
      <section id="hero-section" className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Image Placeholder */}
            <div className="w-full max-w-md mx-auto mb-8 h-64 bg-lifecode-primary/10 rounded-2xl flex items-center justify-center">
              <span className="text-lifecode-text-secondary/50">Product Image Placeholder</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-gelion font-bold text-lifecode-text-headlines mb-6">
              {panelData.name}
            </h1>
            <p className="text-xl text-lifecode-text-secondary mb-8 font-roboto">
              {panelData.description}
            </p>
            <div className="text-4xl font-bold text-lifecode-text-headlines mb-8">
              ₹{panelData.price.toLocaleString()}
            </div>
            <Button
              onClick={handleAddToCart}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg rounded-lg transition-all hover:shadow-lg"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </section>

      {/* Detailed Panel Breakdown */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-gelion font-bold text-lifecode-text-headlines mb-8 text-center">
            Genetic Markers Analyzed in this Panel
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {geneticMarkers.map((category) => (
              <div key={category.id} className="border border-lifecode-border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleAccordion(category.id)}
                  className="w-full px-6 py-4 bg-lifecode-primary text-lifecode-text-primary flex items-center justify-between hover:bg-lifecode-primary/90 transition-colors"
                >
                  <span className="font-roboto font-medium text-left">{category.title}</span>
                  {activeAccordion === category.id ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                {activeAccordion === category.id && (
                  <div className="px-6 py-4 bg-lifecode-primary/5">
                    <ul className="space-y-2">
                      {category.items.map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-lifecode-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-lifecode-text-secondary font-roboto">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky CTA Bar */}
      {showStickyBar && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-lifecode-border z-50 transition-transform duration-300">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-roboto font-medium text-lifecode-text-headlines">{panelData.name}</h3>
                <p className="text-lifecode-text-secondary">₹{panelData.price.toLocaleString()}</p>
              </div>
              <Button
                onClick={handleAddToCart}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default StandardHealthMen;
