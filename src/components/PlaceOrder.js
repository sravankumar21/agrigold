import React, { useState } from 'react';
import '../styles/PlaceOrder.css';

const PlaceOrder = () => {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState('');
  const [isAddressFormOpen, setIsAddressFormOpen] = useState(false);
  const [location, setLocation] = useState(null); // Store the location
  const [isFetchingLocation, setIsFetchingLocation] = useState(false);

  const goToNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const goToPreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSaveAddress = () => {
    setIsAddressFormOpen(false);
  };

  const getLiveLocation = () => {
    setIsFetchingLocation(true);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setAddress(`Lat: ${latitude}, Long: ${longitude}`);
          setIsFetchingLocation(false);
        },
        (error) => {
          console.error('Error getting location:', error);
          setIsFetchingLocation(false);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
      setIsFetchingLocation(false);
    }
  };

  return (
    <div className="placeOrder__container">
      <div className="placeOrder__carousel">
        {/* Step 1: Login */}
        <div className={`placeOrder__step ${step === 1 ? 'placeOrder__activeStep' : ''}`}>
          <h2 className="placeOrder__heading">Step 1: Login</h2>
          <button className="placeOrder__button" onClick={goToNextStep}>Next</button>
        </div>

        {/* Step 2: Add Address */}
        <div className={`placeOrder__step ${step === 2 ? 'placeOrder__activeStep' : ''}`}>
          <h2 className="placeOrder__heading">
            Step 2: Add Address <span className="placeOrder__icon" onClick={() => setIsAddressFormOpen(!isAddressFormOpen)}>+</span>
          </h2>
          {/* Show address form if it's open */}
          {isAddressFormOpen ? (
            <div className="placeOrder__addressForm">
              <input
                type="text"
                placeholder="Enter your address"
                value={address}
                onChange={handleAddressChange}
                className="placeOrder__addressInput"
              />
              <button className="placeOrder__button placeOrder__button--save" onClick={handleSaveAddress}>Save Address</button>
              <button
                className="placeOrder__button placeOrder__button--location"
                onClick={getLiveLocation}
                disabled={isFetchingLocation}
              >
                {isFetchingLocation ? 'Fetching Location...' : 'Get Live Location'}
              </button>
            </div>
          ) : (
            <div className="placeOrder__savedAddress">
              <p>{address ? `Saved Address: ${address}` : 'No address saved'}</p>
            </div>
          )}
          <button className="placeOrder__button" onClick={goToNextStep}>Next</button>
          <button className="placeOrder__button placeOrder__button--secondary" onClick={goToPreviousStep}>Back</button>
        </div>

        {/* Step 3: Order Summary */}
        <div className={`placeOrder__step ${step === 3 ? 'placeOrder__activeStep' : ''}`}>
          <h2 className="placeOrder__heading">Step 3: Order Summary</h2>
          <button className="placeOrder__button" onClick={goToNextStep}>Next</button>
          <button className="placeOrder__button placeOrder__button--secondary" onClick={goToPreviousStep}>Back</button>
        </div>

        {/* Step 4: Payment Options */}
        <div className={`placeOrder__step ${step === 4 ? 'placeOrder__activeStep' : ''}`}>
          <h2 className="placeOrder__heading">Step 4: Payment Options</h2>
          <button className="placeOrder__button placeOrder__button--secondary" onClick={goToPreviousStep}>Back</button>
          <button className="placeOrder__button">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
