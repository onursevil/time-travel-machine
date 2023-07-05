function getYearInfo() {
  var year = document.getElementById("year").value;

  
  var yearData = {
      2020:"Covid 2020 speads all around the world",
      2021: "Supporters of US President Donald Trump attack the US Capitol ------------  COVID-19 Vaccines Arrive as the Virus Mutates",
      2022: "Russia has started invasion of Ukraine",
  };
  
  var resultElement = document.getElementById("result");
  
  if (yearData.hasOwnProperty(year)) {
      resultElement.innerHTML = yearData[year];
  } else {
      resultElement.innerHTML = "No information available for the specified year.";
  }
}
