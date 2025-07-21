import React from 'react';
import { AlertCircle } from 'lucide-react';
import { CartItem } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface AssignmentModuleProps {
  item: CartItem;
  onUpdate: (updates: Partial<CartItem>) => void;
}

const panels = {
  men: [
    'Men\'s Health Panel',
    'Onco-Risk Panel (Male)'
  ],
  women: [
    'Women\'s Health Panel',
    'Onco-Risk Panel (Female)',
    'Gynaecologist Panel'
  ],
  unisex: [
    'Cardio-Pro Panel',
    'My-Nutri-Gene Panel',
    'My-Fitness-Gene Panel',
    'Allergy Panel',
    'Skin-Pro Panel',
    'Wellness-Pro Panel',
    'Longevity Panel',
    'Pediatric Panel'
  ]
};

const genderSpecificPanels = {
  'Men\'s Health Panel': 'male',
  'Onco-Risk Panel (Male)': 'male',
  'Women\'s Health Panel': 'female',
  'Onco-Risk Panel (Female)': 'female',
  'Gynaecologist Panel': 'female'
};

export default function AssignmentModule({ item, onUpdate }: AssignmentModuleProps) {
  const recipientType = item.recipientType || 'me';
  const giftLabel = item.giftLabel || '';
  const recipientGender = item.recipientGender || '';
  const selectedPanel = item.selectedPanel || '';

  const getFilteredPanels = () => {
    if (recipientGender === 'male') {
      return [...panels.men, ...panels.unisex];
    } else if (recipientGender === 'female') {
      return [...panels.women, ...panels.unisex];
    } else {
      return [...panels.men, ...panels.women, ...panels.unisex];
    }
  };

  const showWarning = () => {
    if (!selectedPanel || !genderSpecificPanels[selectedPanel as keyof typeof genderSpecificPanels]) {
      return false;
    }

    const panelGender = genderSpecificPanels[selectedPanel as keyof typeof genderSpecificPanels];
    
    if (recipientType === 'me') {
      // For "me" orders, we don't know the user's gender, so always show warning for gender-specific panels
      return true;
    } else {
      // For gifts, show warning if gender is not specified or conflicts
      return recipientGender === '' || recipientGender === 'other' || 
             (recipientGender !== panelGender);
    }
  };

  const getWarningText = () => {
    const panelGender = genderSpecificPanels[selectedPanel as keyof typeof genderSpecificPanels];
    const genderText = panelGender === 'male' ? 'male' : 'female';
    return `Please Confirm: The ${selectedPanel} is designed for individuals with ${genderText} biology. Ensure this is the correct choice.`;
  };

  const renderPanelOptions = () => {
    const filteredPanels = getFilteredPanels();
    
    if (recipientGender === 'male') {
      return (
        <>
          <optgroup label="For Men">
            {panels.men.map(panel => (
              <SelectItem key={panel} value={panel}>{panel}</SelectItem>
            ))}
          </optgroup>
          <optgroup label="For Anyone (Unisex)">
            {panels.unisex.map(panel => (
              <SelectItem key={panel} value={panel}>{panel}</SelectItem>
            ))}
          </optgroup>
        </>
      );
    } else if (recipientGender === 'female') {
      return (
        <>
          <optgroup label="For Women">
            {panels.women.map(panel => (
              <SelectItem key={panel} value={panel}>{panel}</SelectItem>
            ))}
          </optgroup>
          <optgroup label="For Anyone (Unisex)">
            {panels.unisex.map(panel => (
              <SelectItem key={panel} value={panel}>{panel}</SelectItem>
            ))}
          </optgroup>
        </>
      );
    } else {
      return (
        <>
          <optgroup label="For Men">
            {panels.men.map(panel => (
              <SelectItem key={panel} value={panel}>{panel}</SelectItem>
            ))}
          </optgroup>
          <optgroup label="For Women">
            {panels.women.map(panel => (
              <SelectItem key={panel} value={panel}>{panel}</SelectItem>
            ))}
          </optgroup>
          <optgroup label="For Anyone (Unisex)">
            {panels.unisex.map(panel => (
              <SelectItem key={panel} value={panel}>{panel}</SelectItem>
            ))}
          </optgroup>
        </>
      );
    }
  };

  return (
    <div className="bg-muted/50 p-6 rounded-lg mt-4 space-y-6">
      {/* Recipient Selection */}
      <div className="space-y-3">
        <Label className="text-base font-medium">Who will use this product?</Label>
        <RadioGroup 
          value={recipientType} 
          onValueChange={(value) => onUpdate({ recipientType: value as 'me' | 'gift' })}
          className="flex flex-col space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="me" id={`${item.id}-me`} />
            <Label htmlFor={`${item.id}-me`}>This is for me</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="gift" id={`${item.id}-gift`} />
            <Label htmlFor={`${item.id}-gift`}>This is a gift</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Gift Details - Only shown when "gift" is selected */}
      {recipientType === 'gift' && (
        <div className="space-y-4 border-l-4 border-primary pl-4">
          <div className="space-y-2">
            <Label htmlFor={`${item.id}-label`}>Label for this product (Optional)</Label>
            <Input
              id={`${item.id}-label`}
              placeholder='e.g., "For my Father", "Office Gift"'
              value={giftLabel}
              onChange={(e) => onUpdate({ giftLabel: e.target.value })}
              className="max-w-md"
            />
            <p className="text-sm text-muted-foreground">This is for your reference.</p>
          </div>

          <div className="space-y-2">
            <Label>Recipient's Details (Optional)</Label>
            <Select value={recipientGender} onValueChange={(value) => onUpdate({ recipientGender: value as 'male' | 'female' | 'other' | '' })}>
              <SelectTrigger className="max-w-md">
                <SelectValue placeholder="To help select the right panel, you can specify:" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Select an option</SelectItem>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other / Prefer not to say</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      {/* Panel Selection */}
      <div className="space-y-2">
        <Label>Which panel do you want?</Label>
        <Select value={selectedPanel} onValueChange={(value) => onUpdate({ selectedPanel: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Please choose a panel" />
          </SelectTrigger>
          <SelectContent>
            {renderPanelOptions()}
          </SelectContent>
        </Select>
      </div>

      {/* Warning System */}
      {showWarning() && (
        <div className="flex items-start space-x-2 p-4 bg-orange-50 border border-orange-200 rounded-lg">
          <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-orange-800">{getWarningText()}</p>
        </div>
      )}
    </div>
  );
}