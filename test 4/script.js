const currencyConverter = (itemPriceInCedis) => {
  // rate calculated from values provided

  const USDRate = 0.16528;
  const PoundRate = 0.12066;
  const CADRate = 0.20826;
  const CNYRate = 1.0678;

  const itemPriceInDollar = (itemPriceInCedis * USDRate).toFixed(2);
  const itemPriceInPound = (itemPriceInCedis * PoundRate).toFixed(2);
  const itemPriceInCAD = (itemPriceInCedis * CADRate).toFixed(2);
  const itemPriceInCNY = (itemPriceInCedis * CNYRate).toFixed(2);

  console.log(
    `\t Item Price in GHC - ${itemPriceInCedis.toFixed(
      2
    )} \n \t Item Price in USD - ${itemPriceInPound} 
    \n \t Item Price in Pounds - ${itemPriceInCAD} 
    \n \t Item Price in CAD - ${itemPriceInDollar} 
    \n \t Item Price in CNY - ${itemPriceInCNY}`
  );
};

currencyConverter(97);
currencyConverter(200);
currencyConverter(45);
