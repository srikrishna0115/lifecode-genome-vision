
import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Lock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useCart } from '@/contexts/CartContext';

const Checkout = () => {
  const { items, getTotalPrice } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [useBillingAsShipping, setUseBillingAsShipping] = useState(false);

  const steps = [
    { id: 1, name: 'Contact Information' },
    { id: 2, name: 'Billing & Shipping' },
    { id: 3, name: 'Payment Method' },
    { id: 4, name: 'Review Order' }
  ];

  const handleBillingAsShippingChange = (checked: boolean | "indeterminate") => {
    setUseBillingAsShipping(checked === true);
  };

  return (
    <div className="min-h-screen bg-lifecode-primary">
      <Header />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link 
              to="/cart" 
              className="inline-flex items-center text-lifecode-accent hover:text-lifecode-accent/80 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Cart
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              {/* Progress Steps */}
              <div className="glassmorphism rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-between">
                  {steps.map((step, index) => (
                    <div key={step.id} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        currentStep >= step.id 
                          ? 'bg-lifecode-accent text-lifecode-primary' 
                          : 'bg-white/10 text-lifecode-text-primary/60'
                      }`}>
                        {step.id}
                      </div>
                      <span className={`ml-2 text-sm ${
                        currentStep >= step.id 
                          ? 'text-lifecode-text-primary' 
                          : 'text-lifecode-text-primary/60'
                      }`}>
                        {step.name}
                      </span>
                      {index < steps.length - 1 && (
                        <div className={`mx-4 h-0.5 w-12 ${
                          currentStep > step.id 
                            ? 'bg-lifecode-accent' 
                            : 'bg-white/10'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Content */}
              <div className="glassmorphism rounded-2xl p-8">
                {currentStep === 1 && (
                  <div>
                    <h2 className="text-2xl font-bold text-lifecode-text-primary mb-6">Contact Information</h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName" className="text-lifecode-text-primary">First Name</Label>
                          <Input id="firstName" type="text" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-lifecode-text-primary">Last Name</Label>
                          <Input id="lastName" type="text" className="mt-1" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-lifecode-text-primary">Email Address</Label>
                        <Input id="email" type="email" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-lifecode-text-primary">Phone Number</Label>
                        <Input id="phone" type="tel" className="mt-1" />
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div>
                    <h2 className="text-2xl font-bold text-lifecode-text-primary mb-6">Billing & Shipping Address</h2>
                    
                    {/* Billing Address */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-lifecode-text-primary mb-4">Billing Address</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="billingAddress" className="text-lifecode-text-primary">Street Address</Label>
                          <Input id="billingAddress" type="text" className="mt-1" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="billingCity" className="text-lifecode-text-primary">City</Label>
                            <Input id="billingCity" type="text" className="mt-1" />
                          </div>
                          <div>
                            <Label htmlFor="billingState" className="text-lifecode-text-primary">State</Label>
                            <Input id="billingState" type="text" className="mt-1" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="billingPincode" className="text-lifecode-text-primary">PIN Code</Label>
                            <Input id="billingPincode" type="text" className="mt-1" />
                          </div>
                          <div>
                            <Label htmlFor="billingCountry" className="text-lifecode-text-primary">Country</Label>
                            <Input id="billingCountry" type="text" value="India" className="mt-1" readOnly />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Use Billing as Shipping Checkbox */}
                    <div className="flex items-center space-x-2 mb-6">
                      <Checkbox 
                        id="useBillingAsShipping" 
                        checked={useBillingAsShipping}
                        onCheckedChange={handleBillingAsShippingChange}
                      />
                      <Label htmlFor="useBillingAsShipping" className="text-lifecode-text-primary">
                        Use Billing Address as Shipping Address
                      </Label>
                    </div>

                    {/* Shipping Address */}
                    {!useBillingAsShipping && (
                      <div>
                        <h3 className="text-lg font-semibold text-lifecode-text-primary mb-4">Shipping Address</h3>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="shippingAddress" className="text-lifecode-text-primary">Street Address</Label>
                            <Input id="shippingAddress" type="text" className="mt-1" />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="shippingCity" className="text-lifecode-text-primary">City</Label>
                              <Input id="shippingCity" type="text" className="mt-1" />
                            </div>
                            <div>
                              <Label htmlFor="shippingState" className="text-lifecode-text-primary">State</Label>
                              <Input id="shippingState" type="text" className="mt-1" />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="shippingPincode" className="text-lifecode-text-primary">PIN Code</Label>
                              <Input id="shippingPincode" type="text" className="mt-1" />
                            </div>
                            <div>
                              <Label htmlFor="shippingCountry" className="text-lifecode-text-primary">Country</Label>
                              <Input id="shippingCountry" type="text" value="India" className="mt-1" readOnly />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {currentStep === 3 && (
                  <div>
                    <h2 className="text-2xl font-bold text-lifecode-text-primary mb-6">Payment Method</h2>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4 p-4 border border-lifecode-accent rounded-lg bg-lifecode-accent/5">
                        <CreditCard className="h-6 w-6 text-lifecode-accent" />
                        <div>
                          <div className="font-semibold text-lifecode-text-primary">Credit/Debit Card</div>
                          <div className="text-sm text-lifecode-text-primary/80">Secure payment with 256-bit SSL encryption</div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="cardNumber" className="text-lifecode-text-primary">Card Number</Label>
                          <Input id="cardNumber" type="text" placeholder="1234 5678 9012 3456" className="mt-1" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiryDate" className="text-lifecode-text-primary">Expiry Date</Label>
                            <Input id="expiryDate" type="text" placeholder="MM/YY" className="mt-1" />
                          </div>
                          <div>
                            <Label htmlFor="cvv" className="text-lifecode-text-primary">CVV</Label>
                            <Input id="cvv" type="text" placeholder="123" className="mt-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div>
                    <h2 className="text-2xl font-bold text-lifecode-text-primary mb-6">Review Your Order</h2>
                    <div className="space-y-4">
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between items-center py-4 border-b border-white/10">
                          <div>
                            <div className="font-semibold text-lifecode-text-primary">{item.name}</div>
                            <div className="text-sm text-lifecode-text-primary/80">{item.category}</div>
                          </div>
                          <div className="text-lifecode-accent font-bold">₹{item.price.toLocaleString()}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {currentStep > 1 && (
                    <Button
                      onClick={() => setCurrentStep(currentStep - 1)}
                      variant="outline"
                      className="border-lifecode-accent text-lifecode-accent hover:bg-lifecode-accent hover:text-lifecode-primary"
                    >
                      Previous
                    </Button>
                  )}
                  <div className="ml-auto">
                    {currentStep < 4 ? (
                      <Button
                        onClick={() => setCurrentStep(currentStep + 1)}
                        className="bg-lifecode-button hover:bg-lifecode-button/80 text-white"
                      >
                        Continue
                      </Button>
                    ) : (
                      <Button className="bg-lifecode-button hover:bg-lifecode-button/80 text-white">
                        Place Order
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="space-y-6">
              <div className="glassmorphism rounded-2xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-lifecode-text-primary mb-4">Order Summary</h3>
                <div className="space-y-3 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-lifecode-text-primary/80">{item.name}</span>
                      <span className="text-lifecode-text-primary">₹{item.price.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-lifecode-text-primary/80">Subtotal</span>
                    <span className="text-lifecode-text-primary">₹{getTotalPrice().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-lifecode-text-primary/80">Shipping</span>
                    <span className="text-lifecode-accent">Free</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t border-white/10">
                    <span className="text-lifecode-text-primary">Total</span>
                    <span className="text-lifecode-accent">₹{getTotalPrice().toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Security Badge */}
              <div className="glassmorphism rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Lock className="h-6 w-6 text-lifecode-accent" />
                  <div>
                    <div className="font-semibold text-lifecode-text-primary">Secure Checkout</div>
                    <div className="text-sm text-lifecode-text-primary/80">256-bit SSL encrypted</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-lifecode-accent" />
                  <div>
                    <div className="font-semibold text-lifecode-text-primary">Privacy Protected</div>
                    <div className="text-sm text-lifecode-text-primary/80">Your data is safe with us</div>
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

export default Checkout;
