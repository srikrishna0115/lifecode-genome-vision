
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Dna, Shield, Clock, Award, CheckCircle, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-lifecode-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBackground />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <img 
              src="/lovable-uploads/702dd76d-5ef9-442d-9f92-7ce6bf769512.png" 
              alt="Lifecode Product" 
              className="mx-auto mb-8 max-w-md w-full h-auto rounded-2xl shadow-2xl"
            />
            <h1 className="text-5xl md:text-7xl font-bold text-lifecode-text-primary mb-6 animate-fade-in glow-text">
              From Insight to 
              <span className="text-lifecode-accent animate-glow"> Foresight</span>
            </h1>
            <p className="text-xl md:text-2xl text-lifecode-text-primary/80 mb-8 animate-fade-in">
              India's leading personalized genetic testing brand offering comprehensive genetic panels for health optimization and disease prevention
            </p>
            <div className="flex justify-center animate-fade-in">
              <Button 
                asChild
                className="bg-lifecode-button hover:bg-lifecode-button/80 text-white px-8 py-4 text-lg rounded-lg transition-all hover:shadow-lg hover:shadow-lifecode-button/25"
              >
                <Link to="/lifecode-one">
                  BUY NOW
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-lifecode-text-primary mb-6 glow-text">
              Our Genetic Testing Solutions
            </h2>
            <p className="text-xl text-lifecode-text-primary/80 max-w-3xl mx-auto">
              Discover your genetic blueprint with our comprehensive testing panels designed for every life stage and health goal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Lifecode One */}
            <div className="glassmorphism rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 bg-lifecode-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-lifecode-accent/30 transition-colors">
                <Dna className="h-8 w-8 text-lifecode-accent" />
              </div>
              <h3 className="text-2xl font-bold text-lifecode-text-primary mb-4">Lifecode One</h3>
              <p className="text-lifecode-text-primary/80 mb-6">
                Comprehensive genetic panels for men, women, and children focusing on core health markers and predispositions
              </p>
              <Button 
                asChild
                className="bg-lifecode-button hover:bg-lifecode-button/80 text-white w-full"
              >
                <Link to="/lifecode-one">
                  Explore Lifecode One <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Lifecode Essentials */}
            <div className="glassmorphism rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 bg-lifecode-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-lifecode-accent/30 transition-colors">
                <Shield className="h-8 w-8 text-lifecode-accent" />
              </div>
              <h3 className="text-2xl font-bold text-lifecode-text-primary mb-4">Lifecode Essentials</h3>
              <p className="text-lifecode-text-primary/80 mb-6">
                Targeted genetic panels covering specific health areas from allergies to cardiovascular health and hormone profiles
              </p>
              <Button 
                asChild
                className="bg-lifecode-button hover:bg-lifecode-button/80 text-white w-full"
              >
                <Link to="/lifecode-essentials">
                  Explore Essentials <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Lifecode Enhanced */}
            <div className="glassmorphism rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 bg-lifecode-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-lifecode-accent/30 transition-colors">
                <Award className="h-8 w-8 text-lifecode-accent" />
              </div>
              <h3 className="text-2xl font-bold text-lifecode-text-primary mb-4">Lifecode Enhanced</h3>
              <p className="text-lifecode-text-primary/80 mb-6">
                Advanced comprehensive programs combining genetics with personalized health management and longevity optimization
              </p>
              <Button 
                asChild
                className="bg-lifecode-button hover:bg-lifecode-button/80 text-white w-full"
              >
                <Link to="/lifecode-enhanced">
                  Explore Enhanced <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-lifecode-text-primary mb-6 glow-text">
              How It Works
            </h2>
            <p className="text-xl text-lifecode-text-primary/80 max-w-3xl mx-auto">
              Your journey to genetic insights in four simple steps
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-lifecode-accent/30 hidden md:block"></div>
              
              <div className="space-y-12">
                {[
                  {
                    step: 1,
                    title: "Choose Your Panel",
                    description: "Select the genetic testing panel that matches your health goals and interests"
                  },
                  {
                    step: 2,
                    title: "Sample Collection",
                    description: "Simple at-home saliva collection kit delivered to your doorstep"
                  },
                  {
                    step: 3,
                    title: "Laboratory Analysis",
                    description: "Advanced genetic sequencing and analysis in our certified laboratories"
                  },
                  {
                    step: 4,
                    title: "Personalized Report",
                    description: "Comprehensive genetic insights with actionable health recommendations"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-6 animate-fade-in">
                    <div className="flex-shrink-0 w-16 h-16 bg-lifecode-accent rounded-full flex items-center justify-center text-lifecode-primary font-bold text-xl">
                      {item.step}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-lifecode-text-primary mb-2">{item.title}</h3>
                      <p className="text-lifecode-text-primary/80 text-lg">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Tables Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Compare Our Plans */}
            <div className="glassmorphism rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-lifecode-text-primary mb-8 text-center">Compare Our Plans</h3>
              <div className="space-y-4">
                {[
                  { feature: "Comprehensive Health Panels", one: true, essentials: true, enhanced: true },
                  { feature: "Personalized Reports", one: true, essentials: true, enhanced: true },
                  { feature: "Genetic Counseling", one: false, essentials: true, enhanced: true },
                  { feature: "Ongoing Health Monitoring", one: false, essentials: false, enhanced: true },
                  { feature: "Custom Programs", one: false, essentials: false, enhanced: true }
                ].map((row, index) => (
                  <div key={index} className="grid grid-cols-4 gap-4 py-3 border-b border-white/10">
                    <div className="text-lifecode-text-primary font-medium">{row.feature}</div>
                    <div className="text-center">
                      {row.one ? <CheckCircle className="h-5 w-5 text-lifecode-accent mx-auto" /> : "-"}
                    </div>
                    <div className="text-center">
                      {row.essentials ? <CheckCircle className="h-5 w-5 text-lifecode-accent mx-auto" /> : "-"}
                    </div>
                    <div className="text-center">
                      {row.enhanced ? <CheckCircle className="h-5 w-5 text-lifecode-accent mx-auto" /> : "-"}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The Lifecode Difference */}
            <div className="glassmorphism rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-lifecode-text-primary mb-8 text-center">The Lifecode Difference</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: <Dna className="h-6 w-6 text-lifecode-accent" />,
                    title: "Advanced Sequencing",
                    description: "Latest genomic technologies for accurate results"
                  },
                  {
                    icon: <Shield className="h-6 w-6 text-lifecode-accent" />,
                    title: "Privacy First",
                    description: "Your genetic data is secure and never shared"
                  },
                  {
                    icon: <Users className="h-6 w-6 text-lifecode-accent" />,
                    title: "Expert Support",
                    description: "Genetic counselors available for guidance"
                  },
                  {
                    icon: <Clock className="h-6 w-6 text-lifecode-accent" />,
                    title: "Fast Results",
                    description: "Get your comprehensive report in 2-3 weeks"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-lifecode-text-primary mb-1">{item.title}</h4>
                      <p className="text-lifecode-text-primary/80">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
