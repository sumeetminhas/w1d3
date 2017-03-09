var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var totalSalesData = {};
  for (var i = 0; i < salesData.length; i++) {
    var companyObject = salesData[i];
    var companyName = companyObject["name"];
    var companyProvince = companyObject["province"];
    var companySalesArray = companyObject["sales"];
    var companySalesTotal = 0;
    var companyTaxTotal = 0;

    for (var j = 0; j < companySalesArray.length; j++) {
      companySalesTotal = companySalesTotal + companySalesArray[j];
      companyTaxTotal = taxRates[companyProvince] * companySalesTotal;
    }
    if(totalSalesData.hasOwnProperty(companyName)){

      // var existingTotal = totalSalesData[companyName];
      // var grandTotal = existingTotal + companySalesTotal;
      // totalSalesData[companyName] = grandTotal;

      totalSalesData[companyName].salesTotal +=  companySalesTotal;
      totalSalesData[companyName].taxTotal += companyTaxTotal;
    } //if condition after inner for loop
    else{
      totalSalesData[companyName] = {};
      totalSalesData[companyName].salesTotal = companySalesTotal;
      totalSalesData[companyName].taxTotal = companyTaxTotal;
    } //else part
  } ///the outer for loop
  console.log(totalSalesData);
} //function calculateSalesTax ends here



var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/