
// Slider for input-------------------------------------------------
function updateInputFromSlider(inputId, sliderId) {
    const input = document.getElementById(inputId);
    const slider = document.getElementById(sliderId);
    input.value = slider.value;
  }
  
  function updateSliderFromInput(inputId, sliderId) {
    const input = document.getElementById(inputId);
    const slider = document.getElementById(sliderId);
    slider.value = input.value;
  }
  
  document.getElementById("monthly-income-slider").addEventListener("input", function () {
    updateInputFromSlider("monthly-income", "monthly-income-slider");
  });
  
  document.getElementById("mortgage-payment-slider").addEventListener("input", function () {
    updateInputFromSlider("mortgage-payment", "mortgage-payment-slider");
  });
  
  document.getElementById("property-taxes-slider").addEventListener("input", function () {
    updateInputFromSlider("property-taxes", "property-taxes-slider");
  });
  
  document.getElementById("property-insurance-slider").addEventListener("input", function () {
    updateInputFromSlider("property-insurance", "property-insurance-slider");
  });
  
  document.getElementById("property-management-fees-slider").addEventListener("input", function () {
    updateInputFromSlider("property-management-fees", "property-management-fees-slider");
  });
  
  document.getElementById("maintenance-costs-slider").addEventListener("input", function () {
    updateInputFromSlider("maintenance-costs", "maintenance-costs-slider");
  });
  
  document.getElementById("other-expenses-slider").addEventListener("input", function () {
    updateInputFromSlider("other-expenses", "other-expenses-slider");
  });
  
  document.getElementById("monthly-income").addEventListener("input", function () {
    updateSliderFromInput("monthly-income", "monthly-income-slider");
  });
  
  document.getElementById("mortgage-payment").addEventListener("input", function () {
    updateSliderFromInput("mortgage-payment", "mortgage-payment-slider");
  });
  
  document.getElementById("property-taxes").addEventListener("input", function () {
    updateSliderFromInput("property-taxes", "property-taxes-slider");
  });
  
  document.getElementById("property-insurance").addEventListener("input", function () {
    updateSliderFromInput("property-insurance", "property-insurance-slider");
  });
  
  document.getElementById("property-management-fees").addEventListener("input", function () {
    updateSliderFromInput("property-management-fees", "property-management-fees-slider");
  });
  
  document.getElementById("maintenance-costs").addEventListener("input", function () {
    updateSliderFromInput("maintenance-costs", "maintenance-costs-slider");
  });
  
  document.getElementById("other-expenses").addEventListener("input", function () {
    updateSliderFromInput("other-expenses", "other-expenses-slider");
  });
  
  // -------------------------- ADDED----------------------------------