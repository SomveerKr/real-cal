// Get the input elements by their id
let monthlyIncome = document.getElementById("monthly-income");
let mortgagePayment = document.getElementById("mortgage-payment");
let propertyTaxes = document.getElementById("property-taxes");
let propertyInsurance = document.getElementById("property-insurance");
let propertyManagementFees = document.getElementById("property-management-fees");
let maintenanceCosts = document.getElementById("maintenance-costs");
let otherExpenses = document.getElementById("other-expenses");

let inputs = document.querySelectorAll(".cashflow-inputs input"); // Get all the input elements



// Declare variables to store the input values
let monthlyIncomeValue, mortgagePaymentValue, propertyTaxesValue, propertyInsuranceValue, propertyManagementFeesValue, maintenanceCostsValue, otherExpensesValue;


// Variable to store the cash flow, gross income,total expenses
let cashFlow;
let grossIncome;
let totalExpenses;

// Get the doughnut chart canvas element
let ctx = document.getElementById("chart-cashflow").getContext("2d");
  

  // Create a data object with the values for the chart
let data = {
  labels: ["Cash Flow", "Gross Income", "Total Expenses"],
  datasets: [
    {
      label: "Cash Flow Analysis",
      data: [ 9000, 30000, 21000] , // Use the variables from the previous code
      backgroundColor: ["#4CAF50", "#2196F3", "#F44336"], // Set different colors for each segment
      hoverOffset: 4 // Set a slight offset on hover
    }
  ]
};

// Create a new doughnut chart instance
let doughnutChart = new Chart(ctx, {
  type: "doughnut",
  data: data,
  options: {
    responsive: true, // Make the chart responsive
    plugins: {
      legend: {
        position: "top" // Display the legend at the top
      },
      title: {
        display: true, // Display the title
        text: "Real Estate Cash Flow Analysis" // Set the title text
      }
    }
  }
});




inputs.forEach( (input) => {
  // Loop through each input element & Add an input event listener to each element
  input.addEventListener("input", () => {
    monthlyIncomeValue = parseInt(monthlyIncome.value);
    // console.log(monthlyIncomeValue);
    mortgagePaymentValue = parseInt(mortgagePayment.value);
    // console.log(mortgagePaymentValue);
    propertyTaxesValue = parseInt(propertyTaxes.value);
    // console.log(propertyTaxesValue);
    propertyInsuranceValue = parseInt(propertyInsurance.value);
    // console.log(propertyInsuranceValue);
    propertyManagementFeesValue = parseInt(propertyManagementFees.value);
    // console.log(propertyManagementFeesValue);
    maintenanceCostsValue = parseInt(maintenanceCosts.value);
    // console.log(maintenanceCostsValue);
    otherExpensesValue = parseInt(otherExpenses.value);
    // console.log(otherExpensesValue);


  // Calculate the gross income by adding the monthly income value
  grossIncome = monthlyIncomeValue;

  // Calculate the total expenses by adding all the expense values
  totalExpenses = mortgagePaymentValue + propertyTaxesValue + propertyInsuranceValue + propertyManagementFeesValue + maintenanceCostsValue + otherExpensesValue;

  // Calculate the cash flow by subtracting the total expenses from the gross income
  cashFlow = grossIncome - totalExpenses;
  // the cash flow value
  console.log(cashFlow); 
  if(!isNaN(cashFlow)){
    data.datasets[0].data = [cashFlow, grossIncome, totalExpenses ];
    doughnutChart.update();
  } else {
    data.datasets[0].data = [ 9000, 30000, 21000];
    doughnutChart.update();
  }
  });
  
  
 
});
















































// // Define letiables to store user inputs
// // let monthlyIncome = 0;
// // let mortgagePayment = 0;
// // let propertyTaxes = 0;
// // let propertyInsurance = 0;
// // let propertyManagementFees = 0;
// // let maintenanceCosts = 0;
// // let otherExpenses = 0;


// // Function to update calculations based on user input
// function updateCalculations() {
//   // Get user inputs
//   monthlyIncome = parseFloat(document.getElementById("monthly-income").value);
//   mortgagePayment = parseFloat(
//     document.getElementById("mortgage-payment").value
//   );
//   propertyTaxes = parseFloat(document.getElementById("property-taxes").value);
//   propertyInsurance = parseFloat(
//     document.getElementById("property-insurance").value
//   );
//   propertyManagementFees = parseFloat(
//     document.getElementById("property-management-fees").value
//   );
//   maintenanceCosts = parseFloat(
//     document.getElementById("maintenance-costs").value
//   );
//   otherExpenses = parseFloat(document.getElementById("other-expenses").value);
// }

// // Function to calculate monthly cash flow
// function calculateMonthlyCashFlow() {
//     updateCalculations()
//   // Calculate monthly cash flow
//   const totalExpenses =
//     mortgagePayment +
//     propertyTaxes +
//     propertyInsurance +
//     propertyManagementFees +
//     maintenanceCosts +
//     otherExpenses;

//   const monthlyCashFlow = monthlyIncome - totalExpenses;
//   const annualCashFloew = monthlyCashFlow * 12;
//   const annualExpenses = totalExpenses * 12;

//   // Update the UI to display monthly cash flow
//   document.getElementById("monthly-cash-flow").value = String(monthlyCashFlow);
//   document.getElementById("total-monthly-expenses").value = String(totalExpenses);
//   document.getElementById("annual-cash-flow").value = String(annualCashFloew);
//   document.getElementById("annual-expenses").value = String(annualExpenses);
// }

// // Reset Button function
// function reset() {
//   document.getElementById("monthly-income").value = "0";
//   document.getElementById("mortgage-payment").value = "0";
//   document.getElementById("property-taxes").value = "0";
//   document.getElementById("property-insurance").value = "0";
//   document.getElementById("property-management-fees").value = "0";
//   document.getElementById("maintenance-costs").value = "0";
//   document.getElementById("other-expenses").value = "0";
// }

// //Slider

// let slider = document.getElementById("myRange");
// let output = document.getElementById("demo");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//   output.innerHTML = this.value;
// }

// // ================================= Donut Chart ===================

// let options = {
//   series: [44, 55, 13, 33],
//   chart: {
//   width: 380,
//   type: 'donut',
// },
// dataLabels: {
//   enabled: false
// },
// responsive: [{
//   breakpoint: 480,
//   options: {
//     chart: {
//       width: 200
//     },
//     legend: {
//       show: false
//     }
//   }
// }],
// legend: {
//   position: 'right',
//   offsetY: 0,
//   height: 230,
// }
// };

// let chart = new ApexCharts(document.querySelector("#chart"), options);
// chart.render();


// function appendData() {
// let arr = chart.w.globals.series.slice()
// arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
// return arr;
// }

// function removeData() {
// let arr = chart.w.globals.series.slice()
// arr.pop()
// return arr;
// }

// function randomize() {
// return chart.w.globals.series.map(function() {
//     return Math.floor(Math.random() * (100 - 1 + 1)) + 1
// })
// }

// function reset() {
// return options.series
// }

// document.querySelector("#randomize").addEventListener("click", function() {
// chart.updateSeries(randomize())
// })

// document.querySelector("#add").addEventListener("click", function() {
// chart.updateSeries(appendData())
// })

// document.querySelector("#remove").addEventListener("click", function() {
// chart.updateSeries(removeData())
// })

// document.querySelector("#reset").addEventListener("click", function() {
// chart.updateSeries(reset())
// })

// // ========================================================================