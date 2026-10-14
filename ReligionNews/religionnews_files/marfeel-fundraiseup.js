(function() {
  console.log('[FundraiseUp] fundraise-up-integration.js launched');

  if (typeof FundraiseUp === 'undefined' || typeof window.marfeel === 'undefined') {
    console.warn('[FundraiseUp] or [Marfeel] not found.');
    return;
  }

  let isCheckoutOpen = false;

  // Track when the checkout modal opens
  FundraiseUp.on('checkoutOpen', function() {
    isCheckoutOpen = true;
    console.log('[FundraiseUp] Checkout is now open');

    // Send modal pressed conversion
    window.marfeel.cmd.push(['compass', function(compass) {
      console.log('[Marfeel] Sending conversion: fundraiseModalPressed');
      compass.trackConversion('fundraiseModalPressed');
    }]);
  });

  // Track when the checkout modal closes
  FundraiseUp.on('checkoutClose', function() {
    isCheckoutOpen = false;
    console.log('[FundraiseUp] Checkout is now closed');
  });

  // Donation complete event
  FundraiseUp.on('donationComplete', function() {
    console.log('[FundraiseUp] donationComplete event fired');

    if (isCheckoutOpen) {
      console.log('[FundraiseUp] Modal is currently open. Sending donationSubmitted to Marfeel.');

      window.marfeel.cmd.push(['compass', function(compass) {
        console.log('[Marfeel] Sending conversion: donationSubmitted');
        compass.trackConversion('donationSubmitted');
      }]);
    } else {
      console.log('[FundraiseUp] Modal is not open, donationSubmitted not sent.');
    }
  });

})();
