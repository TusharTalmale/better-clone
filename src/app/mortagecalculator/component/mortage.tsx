import React, { useState, useEffect, useCallback } from 'react';


export const MortageCalculator: React.FC = () => {
  const [homePrice, setHomePrice] = useState<number>(421600);
  const [zipCode, setZipCode] = useState<string>('403001');
  const [downPayment, setDownPayment] = useState<number>(60000);
  const [interestRate, setInterestRate] = useState<number>(6.500);
  const [loanLength, setLoanLength] = useState<number>(30);
  const [propertyTaxes, setPropertyTaxes] = useState<number>(230);
  const [homeInsurance, setHomeInsurance] = useState<number>(132);
  const [hoaFees, setHoaFees] = useState<number>(132);
  const [utilities, setUtilities] = useState<number>(100);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [principalInterest, setPrincipalInterest] = useState<number>(0);
  const [showUtilitiesDetails, setShowUtilitiesDetails] = useState<boolean>(false);
  const [showMobileHeader, setShowMobileHeader] = useState<boolean>(false);
  const [showCopyMessage, setShowCopyMessage] = useState<boolean>(false);

  const calculateMortgage = useCallback(() => {
    const principalLoanAmount = homePrice - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanLength * 12;

    let calculatedPrincipalInterest = 0;
    if (monthlyInterestRate > 0) {
      calculatedPrincipalInterest =
        principalLoanAmount *
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    } else {
      calculatedPrincipalInterest = principalLoanAmount / numberOfPayments;
    }

    setPrincipalInterest(calculatedPrincipalInterest);

    const totalMonthlyPayment =
      calculatedPrincipalInterest + propertyTaxes + homeInsurance + hoaFees + utilities;
    setMonthlyPayment(totalMonthlyPayment);
  }, [homePrice, downPayment, interestRate, loanLength, propertyTaxes, homeInsurance, hoaFees, utilities]);

  useEffect(() => {
    calculateMortgage();
  }, [calculateMortgage]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setShowMobileHeader(true);
      } else {
        setShowMobileHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number, decimals: number = 0) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value);
  };

  const handleCopyEstimateLink = () => {
    const estimateText = `Mortgage Estimate: Home Price ${formatCurrency(homePrice)}, Monthly Payment ${formatCurrency(monthlyPayment)}/mo, Interest Rate ${interestRate}%, Loan Length ${loanLength} years.`;
    const tempInput = document.createElement('textarea');
    tempInput.value = estimateText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    setShowCopyMessage(true);
    setTimeout(() => {
      setShowCopyMessage(false);
    }, 3000);
  };

  const totalBreakdown = principalInterest + propertyTaxes + homeInsurance + hoaFees + utilities;
  const safeTotalBreakdown = totalBreakdown > 0 ? totalBreakdown : 1;
  const svgWidthScale = 500;

  const principalInterestWidth = (principalInterest / safeTotalBreakdown) * svgWidthScale;
  const taxesWidth = (propertyTaxes / safeTotalBreakdown) * svgWidthScale;
  const insuranceWidth = (homeInsurance / safeTotalBreakdown) * svgWidthScale;
  const hoaWidth = (hoaFees / safeTotalBreakdown) * svgWidthScale;
  const utilitiesWidth = (utilities / safeTotalBreakdown) * svgWidthScale;

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col font-inter">
      <main className="flex-grow">

        <section className="py-16 bg-gradient-to-b from-[#F0F8F0] to-white">
          <div className="m-auto max-w-screen-2xl px-6 md:px-14">
            <h1 className="font-bold text-gray-900 text-2xl md:text-3xl tracking-tight md:tracking-tighter mb-4">
              Mortgage Calculator
            </h1>
            <p className="font-normal text-base text-gray-600 mb-12 lg:max-w-3xl">
              Free mortgage calculator to estimate your monthly mortgage payments with annual amortization. Discover how all factors can affect your payment.
            </p>

            <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-8 mb-12">
              <div className="flex-1 w-full md:w-auto">
                <label className="text-gray-800 font-bold mb-2 block text-sm md:text-base" htmlFor="home-price">
                  Home price
                </label>
                <div className="relative w-full text-lg md:text-[40px]">
                  <div className="p-2 relative rounded-lg bg-gray-100 w-full border border-solid border-gray-300 h-16 flex items-center">
                    <div className="absolute left-3 text-xl lg:text-3xl text-gray-800">$</div>
                    <input
                      data-qa="home-price"
                      name="home-price"
                      type="tel"
                      id="input-home-price"
                      autoCapitalize="off"
                      autoCorrect="off"
                      aria-invalid="false"
                      className="text-left outline-none border-none rounded-sm px-2 text-gray-800 font-bold w-full h-full bg-transparent pl-8 text-xl lg:text-3xl"
                      value={formatNumber(homePrice)}
                      onChange={(e) => setHomePrice(Number(e.target.value.replace(/,/g, '')))}
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full md:w-auto md:ml-8">
                <p className="text-gray-800 font-bold mb-2 block text-sm md:text-base">Monthly payment</p>
                <p className="text-xl font-bold text-gray-800 md:text-3xl h-16 flex items-center" data-qa="monthly-payment">
                  {formatCurrency(monthlyPayment)}/mo
                </p>
              </div>
              <div className="hidden md:block">
                <a className="rounded-lg text-base text-center font-bold select-none outline-none transition duration-300 ease-universal text-white bg-[#28A745] hover:bg-[#218838] focus:bg-[#218838] px-8 h-12 inline-flex items-center justify-center min-w-[220px]" href="#">
                  Get pre-approved
                </a>
              </div>
            </div>

            <div className="relative mb-12">
              <input
                type="range"
                min="50000"
                max="3000000"
                step="100"
                className="w-full h-2 rounded-full appearance-none cursor-pointer bg-gray-300 [&::-webkit-slider-thumb]:bg-gray-800 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:-mt-1.5 [&::-moz-range-thumb]:bg-gray-800 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full"
                id="min-and-max-range-slider-usage"
                style={{ backgroundImage: `linear-gradient(to right, rgb(41, 43, 41) ${(homePrice - 50000) / (3000000 - 50000) * 100}%, #c8c9c6 ${(homePrice - 50000) / (3000000 - 50000) * 100}% 100%)` }}
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
              />
            </div>

            <div className="mt-8 hidden md:block">
              <div className="grid grid-cols-2 gap-x-16 gap-y-4">
                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <div className="p-2 relative rounded-lg bg-gray-100 w-50 border border-solid border-gray-300 h-12 flex items-center">
                      <label htmlFor="input-1" className="absolute left-3 top-1 text-gray-600 text-xs font-normal">ZIP code</label>
                      <input
                        maxLength={5}
                        type="tel"
                        id="input-1"
                        autoCapitalize="off"
                        autoCorrect="off"
                        className="text-left outline-none border-none rounded-sm px-2 pt-4 text-gray-800 font-bold w-full h-full bg-transparent"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-9/12 relative">
                      <div className="p-2 relative rounded-l-lg bg-gray-100 w-30 border border-solid border-gray-300 h-12 flex items-center">
                        <label htmlFor="input-downpayment" className="absolute left-3 top-1 text-gray-600 text-xs font-normal">Down payment</label>
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-800">$</div>
                        <input
                          data-qa="downpayment"
                          name="downpayment"
                          type="tel"
                          id="input-downpayment"
                          autoCapitalize="off"
                          autoCorrect="off"
                          aria-invalid="false"
                          className="text-left outline-none border-none rounded-sm px-2 pt-4 text-gray-800 font-bold w-full h-full bg-transparent pl-6"
                          value={formatNumber(downPayment)}
                          onChange={(e) => setDownPayment(Number(e.target.value.replace(/,/g, '')))}
                        />
                      </div>
                    </div>
                    <div className="w-3/12 min-w-[72px] relative">
                      <div className="p-2 relative rounded-r-lg bg-gray-100 w-20 border border-solid border-gray-300 border-l-0 h-12 flex items-center">
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-800">%</div>
                        <input
                          data-qa="down-payment-ratio"
                          id="input-2"
                          autoCapitalize="off"
                          autoCorrect="off"
                          className="text-left outline-none border-none rounded-sm px-2 text-gray-800 font-bold w-full h-full bg-transparent text-right pr-6"
                          value={((downPayment / homePrice) * 100).toFixed(0)}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <div className="p-2 relative rounded-lg bg-gray-100 w-40 border border-solid border-gray-300 h-12 flex items-center">
                      <label htmlFor="input-3" className="absolute left-3 top-1 text-gray-600 text-xs font-normal">Interest rate</label>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-800">%</div>
                      <input
                        id="input-3"
                        autoCapitalize="off"
                        autoCorrect="off"
                        className="text-left outline-none border-none rounded-sm px-2 pt-4 text-gray-800 font-bold w-full h-full bg-transparent text-right pr-6"
                        value={interestRate.toFixed(3)}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                      />
                    </div>
                  </div>
                  <div className="relative w-50">
                    <label className="absolute left-3 top-1 text-gray-600 text-xs font-normal" htmlFor="loan-length">Length of loan</label>
                    <select
                      id="loan-length"
                      className="truncate font-bold text-gray-800 appearance-none bg-gray-100 outline-none rounded-lg border border-solid border-gray-300 px-3 w-full h-12 pt-4 pr-8"
                      value={loanLength}
                      onChange={(e) => setLoanLength(Number(e.target.value))}
                    >
                      <option value="30">30 years</option>
                      <option value="20">20 years</option>
                      <option value="15">15 years</option>
                    </select>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="absolute pointer-events-none top-1/2 -translate-y-1/2 right-3 fill-gray-800">
                      <path d="M7 9.5L12 14.5L17 9.5H7Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="block md:hidden">
              <div className="flex flex-col mb-2 gap-2">
                <a className="rounded-lg text-base text-center font-bold select-none outline-none transition duration-300 ease-universal text-white bg-[#28A745] hover:bg-[#218838] focus:bg-[#218838] px-8 h-12 w-full inline-flex items-center justify-center" href="#">
                  Get pre-approved
                </a>
              </div>
              <button
                className="rounded-lg text-base text-center font-bold select-none outline-none transition duration-300 ease-universal text-gray-800 bg-transparent border border-solid border-gray-300 hover:text-[#28A745] hover:border-transparent px-8 h-12 mt-4 flex w-full items-center justify-center"
                onClick={() => setShowUtilitiesDetails(!showUtilitiesDetails)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus text-gray-800 mr-2">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg> Add details
              </button>
              <div
                className={`p-4 bg-white px-6 shadow-lg fixed left-0 top-[70px]  z-[10000] transition-opacity duration-300 ease-in-out ${showMobileHeader ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600 text-sm mb-1 font-bold">Home price</p>
                    <p className="text-base rounded-lg bg-gray-200 py-1 text-center font-bold text-gray-800" data-qa="mobile-header-home-price">
                      {formatCurrency(homePrice)}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm mb-1 font-bold">Monthly payment</p>
                    <p className="text-left text-gray-600 text-base pt-1 font-bold" data-qa="mobile-header-monthly-payment">
                      {formatCurrency(monthlyPayment)}/mo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="m-auto max-w-screen-2xl px-6 md:px-14">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 text-base md:text-lg mb-4">Monthly payment breakdown</h4>
                <p className="text-left mt-4 text-3xl font-bold text-gray-900" data-testid="sum">
                  {formatCurrency(monthlyPayment)}/mo
                </p>
                <div className="mt-8">
                  <svg height="80" id="svgelem" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <rect data-testid="principalPill" height="80" rx="40" ry="40" className="duration-300 ease-in-out" fill="#1E8449" width={principalInterestWidth} x="0" y="0"></rect>
                    <rect data-testid="taxesPill" height="80" rx="40" ry="40" className="duration-300 ease-in-out" fill="#6C5CE7" width={taxesWidth} x={principalInterestWidth} y="0"></rect>
                    <rect data-testid="insurancePill" height="80" rx="40" ry="40" className="duration-300 ease-in-out" fill="#FFC107" width={insuranceWidth} x={principalInterestWidth + taxesWidth} y="0"></rect>
                    <rect data-testid="hoaPill" height="80" rx="40" ry="40" className="duration-300 ease-in-out" fill="#DC3545" width={hoaWidth} x={principalInterestWidth + taxesWidth + insuranceWidth} y="0"></rect>
                    <rect data-testid="utilitiesPill" height="80" rx="40" ry="40" className="duration-300 ease-in-out" fill="#FD7E14" width={utilitiesWidth} x={principalInterestWidth + taxesWidth + insuranceWidth + hoaWidth} y="0"></rect>
                  </svg>
                  <div className={`md:block p-4 mt-8 rounded-lg shadow-md transition-opacity duration-300 ease-in-out ${showUtilitiesDetails ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <h4 className="font-bold text-gray-900 text-base md:text-lg mb-4">Utilities</h4>
                    <p className="font-normal text-base text-gray-800" data-testid="description">These include things like water, gas, electricity, and internet.</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center h-12 mb-2">
                    <div className="flex items-center text-gray-800 w-1/2">
                      <div className="rounded-sm h-4 w-1 mr-2 bg-[#1E8449]"></div>
                      <p className="font-normal text-base text-gray-800">Principal &amp; interest</p>
                    </div>
                    <p className="text-base font-bold text-gray-800 w-1/2 sm:w-40 text-right" data-testid="principal-&amp;-interest">
                      {formatCurrency(principalInterest)}
                    </p>
                  </div>
                  <div className="flex justify-between items-center h-12 mb-2">
                    <div className="flex items-center text-gray-800 w-1/2">
                      <div className="rounded-sm h-4 w-1 mr-2 bg-[#6C5CE7]"></div>
                      <label className="font-normal text-base text-gray-800" htmlFor="input-taxes" id="taxes-label">Property taxes</label>
                    </div>
                    <div className="relative w-1/2 sm:w-40">
                      <div className="p-2 relative rounded-lg bg-gray-100 w-full border border-solid border-gray-300 h-12 flex items-center">
                        <div className="absolute left-3 text-gray-800">$</div>
                        <input
                          aria-describedby="taxes-help-text"
                          name="taxes"
                          role="textbox"
                          type="number"
                          id="input-taxes"
                          autoCapitalize="off"
                          autoCorrect="off"
                          aria-errormessage="taxes-help-text"
                          className="text-right outline-none border-none rounded-sm px-2 text-gray-800 font-bold w-full h-full bg-transparent pl-6"
                          value={propertyTaxes}
                          onChange={(e) => setPropertyTaxes(Number(e.target.value))}
                        />
                      </div>
                      <div className="font-normal text-xs text-gray-600 text-right pr-2" id="taxes-help-text"> </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center h-12 mb-2">
                    <div className="flex items-center text-gray-800 w-1/2">
                      <div className="rounded-sm h-4 w-1 mr-2 bg-[#FFC107]"></div>
                      <label className="font-normal text-base text-gray-800" htmlFor="input-insurance" id="insurance-label">Homeowners insurance</label>
                    </div>
                    <div className="relative w-1/2 sm:w-40">
                      <div className="p-2 relative rounded-lg bg-gray-100 w-full border border-solid border-gray-300 h-12 flex items-center">
                        <div className="absolute left-3 text-gray-800">$</div>
                        <input
                          aria-describedby="insurance-help-text"
                          name="insurance"
                          role="textbox"
                          type="number"
                          id="input-insurance"
                          autoCapitalize="off"
                          autoCorrect="off"
                          aria-errormessage="insurance-help-text"
                          className="text-right outline-none border-none rounded-sm px-2 text-gray-800 font-bold w-full h-full bg-transparent pl-6"
                          value={homeInsurance}
                          onChange={(e) => setHomeInsurance(Number(e.target.value))}
                        />
                      </div>
                      <div className="font-normal text-xs text-gray-600 text-right pr-2" id="insurance-help-text"> </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center h-12 mb-2">
                    <div className="flex items-center text-gray-800 w-1/2">
                      <div className="rounded-sm h-4 w-1 mr-2 bg-[#DC3545]"></div>
                      <label className="font-normal text-base text-gray-800" htmlFor="input-hoa" id="hoa-label">HOA fees</label>
                    </div>
                    <div className="relative w-1/2 sm:w-40">
                      <div className="p-2 relative rounded-lg bg-gray-100 w-full border border-solid border-gray-300 h-12 flex items-center">
                        <div className="absolute left-3 text-gray-800">$</div>
                        <input
                          aria-describedby="hoa-help-text"
                          name="hoa"
                          role="textbox"
                          type="number"
                          id="input-hoa"
                          autoCapitalize="off"
                          autoCorrect="off"
                          aria-errormessage="hoa-help-text"
                          className="text-right outline-none border-none rounded-sm px-2 text-gray-800 font-bold w-full h-full bg-transparent pl-6"
                          value={hoaFees}
                          onChange={(e) => setHoaFees(Number(e.target.value))}
                        />
                      </div>
                      <div className="font-normal text-xs text-gray-600 text-right pr-2" id="hoa-help-text"> </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center h-12 mb-2">
                    <div className="flex items-center text-gray-800 w-1/2">
                      <div className="rounded-sm h-4 w-1 mr-2 bg-[#FD7E14]"></div>
                      <label className="font-normal text-base text-gray-800" htmlFor="input-utilities" id="utilities-label">Utilities</label>
                    </div>
                    <div className="relative w-1/2 sm:w-40">
                      <div className="p-2 relative rounded-lg bg-gray-100 w-full border border-solid border-gray-300 h-12 flex items-center">
                        <div className="absolute left-3 text-gray-800">$</div>
                        <input
                          aria-describedby="utilities-help-text"
                          name="utilities"
                          role="textbox"
                          type="number"
                          id="input-utilities"
                          autoCapitalize="off"
                          autoCorrect="off"
                          aria-errormessage="utilities-help-text"
                          className="text-right outline-none border-none rounded-sm px-2 text-gray-800 font-bold w-full h-full bg-transparent pl-6"
                          value={utilities}
                          onChange={(e) => setUtilities(Number(e.target.value))}
                        />
                      </div>
                      <div className="font-normal text-xs text-gray-600 text-right pr-2" id="utilities-help-text"> </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start mt-8">
                <button
                  className="rounded-lg text-base text-center font-bold select-none outline-none transition duration-300 ease-universal text-gray-800 bg-transparent border border-solid border-gray-300 hover:text-[#28A745] hover:border-transparent px-8 h-12 inline-flex items-center justify-center"
                  onClick={handleCopyEstimateLink}
                >
                  Copy estimate link
                </button>
                {showCopyMessage && (
                  <div className="bg-green-500 text-white p-2 rounded-md mt-4 transition-opacity duration-300 opacity-100">
                    Estimate copied to clipboard!
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
