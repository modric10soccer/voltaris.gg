// Payment Error Handler with Storage Recovery
// Only clears storage when payment fails, then retries

(function() {
  let paymentRetryAttempted = false;

  // Function to clear storage and retry
  function clearStorageAndRetry(paymentFunction, ...args) {
    if (paymentRetryAttempted) {
      console.error('Payment failed even after clearing storage');
      return false;
    }

    console.log('Payment error detected - clearing storage and retrying...');
    
    try {
      // Clear localStorage
      localStorage.clear();
      sessionStorage.clear();
      
      // Mark that we've attempted a retry
      paymentRetryAttempted = true;
      
      // Wait a moment then retry the payment
      setTimeout(() => {
        console.log('Retrying payment...');
        if (typeof paymentFunction === 'function') {
          paymentFunction(...args);
        }
      }, 500);
      
      return true;
    } catch (error) {
      console.error('Failed to clear storage:', error);
      return false;
    }
  }

  // Expose globally so your payment code can use it
  window.handlePaymentError = function(paymentFunction, ...args) {
    return clearStorageAndRetry(paymentFunction, ...args);
  };

  // Also add a manual clear function for testing
  window.clearPaymentStorage = function() {
    try {
      localStorage.clear();
      sessionStorage.clear();
      console.log('Payment storage cleared manually');
      return true;
    } catch (error) {
      console.error('Failed to clear storage:', error);
      return false;
    }
  };

  console.log('Payment error handler loaded');
})();
