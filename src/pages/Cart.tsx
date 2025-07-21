
import React from 'react';
import { Trash2, ShoppingBag, ArrowRight, Shield, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AssignmentModule from '@/components/AssignmentModule';

const Cart = () => {
  const { items, removeFromCart, updateCartItem, getTotalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-lifecode-content-bg">
        <Header />
        <div className="pt-20 pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <ShoppingBag className="h-24 w-24 text-lifecode-accent mx-auto mb-8" />
              <h1 className="text-4xl font-bold text-lifecode-text-headlines mb-6">Your Cart is Empty</h1>
              <p className="text-xl text-lifecode-text-secondary mb-8">
                Discover our genetic testing panels to start your journey towards better health
              </p>
              <Button asChild className="bg-lifecode-button hover:bg-lifecode-button/80 text-lifecode-text-primary px-8 py-3">
                <Link to="/lifecode-one">Browse Products</Link>
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const isCartComplete = () => {
    return items.every(item => item.selectedPanel);
  };

  return (
    <div className="min-h-screen bg-lifecode-content-bg">
      <Header />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-lifecode-text-headlines mb-2 text-center">Your Cart</h1>
            <p className="text-xl text-lifecode-text-secondary text-center">
              Complete the details for each product to proceed to checkout.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {items.map((item, index) => (
                <Card key={item.id} className="glassmorphism border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="bg-lifecode-accent/20 text-lifecode-accent text-sm font-medium px-2 py-1 rounded">
                            #{index + 1}
                          </span>
                          <h3 className="text-xl font-bold text-lifecode-text-primary">{item.name}</h3>
                        </div>
                        <p className="text-lifecode-text-secondary text-sm mb-2">{item.description}</p>
                        <p className="text-2xl font-bold text-lifecode-accent">₹{item.price.toLocaleString()}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-500 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <AssignmentModule
                      item={item}
                      onUpdate={(updates) => updateCartItem(item.id, updates)}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="glassmorphism border-0 sticky top-4">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-lifecode-text-primary mb-6">Order Summary</h3>
                  
                  <div className="space-y-3 mb-4">
                    {items.map((item, index) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="flex items-center gap-2 text-lifecode-text-primary">
                          <span className="text-xs bg-lifecode-accent/20 text-lifecode-accent px-1.5 py-0.5 rounded">#{index + 1}</span>
                          {item.name}
                          {item.giftLabel && (
                            <span className="text-xs text-lifecode-text-secondary">({item.giftLabel})</span>
                          )}
                        </span>
                        <span className="font-medium text-lifecode-text-primary">₹{item.price.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-4 bg-white/10" />
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-lifecode-text-secondary">Subtotal</span>
                      <span className="text-lifecode-text-primary">₹{getTotalPrice().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-lifecode-text-secondary">Shipping</span>
                      <span className="text-lifecode-accent">Free</span>
                    </div>
                  </div>

                  <Separator className="my-4 bg-white/10" />
                  
                  <div className="flex justify-between font-semibold text-xl mb-6">
                    <span className="text-lifecode-text-primary">Total</span>
                    <span className="text-lifecode-accent">₹{getTotalPrice().toLocaleString()}</span>
                  </div>

                  <Button 
                    className={`w-full py-3 ${isCartComplete() ? 'bg-lifecode-button hover:bg-lifecode-button/80 text-lifecode-text-primary' : 'bg-gray-400 cursor-not-allowed'}`}
                    size="lg"
                    disabled={!isCartComplete()}
                    asChild={isCartComplete()}
                  >
                    {isCartComplete() ? (
                      <Link to="/checkout" className="flex items-center justify-center gap-2">
                        Proceed to Checkout
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ) : (
                      <span>Complete Product Details</span>
                    )}
                  </Button>

                  {!isCartComplete() && (
                    <p className="text-xs text-lifecode-text-secondary mt-2 text-center">
                      Please select a panel for each product to continue
                    </p>
                  )}

                  <div className="mt-6 p-4 bg-white/5 rounded-lg">
                    <h4 className="font-medium text-lifecode-text-primary mb-2">About Lifecode</h4>
                    <p className="text-sm text-lifecode-text-secondary">
                      Our DNA testing panels provide personalized insights into your health, 
                      nutrition, and wellness, backed by scientific research and expert analysis.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
