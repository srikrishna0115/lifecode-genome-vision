
import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, Shield, Clock, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const { items, removeFromCart, getTotalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-lifecode-primary">
        <Header />
        <div className="pt-24 pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <ShoppingBag className="h-24 w-24 text-lifecode-accent mx-auto mb-8" />
              <h1 className="text-4xl font-bold text-lifecode-text-primary mb-6">Your Cart is Empty</h1>
              <p className="text-xl text-lifecode-text-primary/80 mb-8">
                Discover our genetic testing panels to start your journey towards better health
              </p>
              <Button asChild className="bg-lifecode-button hover:bg-lifecode-button/80 text-white px-8 py-3">
                <Link to="/lifecode-one">Browse Products</Link>
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-lifecode-primary">
      <Header />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-lifecode-text-primary mb-8 text-center">Your Cart</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="glassmorphism rounded-2xl p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-lifecode-text-primary mb-2">{item.name}</h3>
                        <p className="text-lifecode-text-primary/80 mb-2">{item.category}</p>
                        {item.description && (
                          <p className="text-sm text-lifecode-text-primary/60 mb-4">{item.description}</p>
                        )}
                        <div className="text-2xl font-bold text-lifecode-accent">
                          ₹{item.price.toLocaleString()}
                        </div>
                      </div>
                      <Button
                        onClick={() => removeFromCart(item.id)}
                        variant="outline"
                        size="sm"
                        className="text-red-400 border-red-400 hover:bg-red-400 hover:text-white"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary & Trust Badges */}
            <div className="space-y-6">
              {/* Order Summary */}
              <div className="glassmorphism rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-lifecode-text-primary mb-6">Order Summary</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-lifecode-text-primary/80">Subtotal</span>
                    <span className="text-lifecode-text-primary">₹{getTotalPrice().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-lifecode-text-primary/80">Shipping</span>
                    <span className="text-lifecode-accent">Free</span>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex justify-between text-xl font-bold">
                      <span className="text-lifecode-text-primary">Total</span>
                      <span className="text-lifecode-accent">₹{getTotalPrice().toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <Button asChild className="w-full bg-lifecode-button hover:bg-lifecode-button/80 text-white py-3">
                  <Link to="/checkout">Proceed to Checkout</Link>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="glassmorphism rounded-2xl p-6">
                <h3 className="text-lg font-bold text-lifecode-text-primary mb-4">Why Choose Lifecode?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-lifecode-accent" />
                    <div>
                      <div className="font-semibold text-lifecode-text-primary">Secure & Private</div>
                      <div className="text-sm text-lifecode-text-primary/80">Your data is protected</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-lifecode-accent" />
                    <div>
                      <div className="font-semibold text-lifecode-text-primary">Fast Results</div>
                      <div className="text-sm text-lifecode-text-primary/80">2-3 weeks delivery</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-6 w-6 text-lifecode-accent" />
                    <div>
                      <div className="font-semibold text-lifecode-text-primary">Expert Support</div>
                      <div className="text-sm text-lifecode-text-primary/80">Genetic counseling included</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
