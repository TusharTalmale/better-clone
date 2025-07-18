import React  from "react";
export  const Headersection = () => {
    return(
        <>    {/* Header Section */}
                <header className="sticky top-0 z-20 transition-all ease-in-out duration-300 bg-white">
                  <nav className="m-auto flex max-w-screen-2xl justify-between p-5 md:py-5 md:px-10 xl:p-5">
                    <div className="flex flex-row">
                      {/* Mobile Navigation Sidebar */}
                      <div className={`fixed inset-0 z-10 flex flex-col p-6 shadow-md transition-transform duration-300 ease-[cubic-bezier(0.42,0,0.58,1)] overflow-auto overscroll-contain bg-interactiveForegroundInverseTertiary ${isMobileNavOpen ? 'translate-x-0' : '-translate-x-full invisible'}`}>
                        <div className="flex justify-between items-center">
                          <a className="inline-block px-2 flex-none" href="https://better.com/">
                            <BetterLogo2021 />
                          </a>
                          <button
                            className="inline-block rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundTertiary bg-transparent hover:bg-interactiveSecondary focus:bg-interactiveSecondary focus:border-transparent focus:shadow-accentBorderSecondary active:bg-interactiveSecondary px-base h-2xl w-auto"
                            onClick={toggleMobileNav}
                          >
                            <div className="align-center flex justify-center">
                              <XIcon />
                            </div>
                          </button>
                        </div>
                        {/* Mobile Nav Details/Dropdowns */}
                        <details className="group flex-none">
                          <summary className="flex h-14 cursor-pointer select-none items-center justify-between px-2 [&::-webkit-details-marker]:hidden">
                            Buy<ChevronDown className="ml-2 inline-block group-open:rotate-180 fill-black stroke-none" />
                          </summary>
                          <ul className="m-0 list-none">
                            <li><a className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground" href="https://better.com/preapproval/nxt-purchase">Apply now</a></li>
                            <li><a className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground" href="https://better.com/mortgage-rates">Purchase rates</a></li>
                            <li><a className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground" href="https://better.com/how-much-house-can-i-afford">Affordability calculator</a></li>
                            <li><a className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground" href="https://better.com/mortgage-calculator">Mortgage calculator</a></li>
                            <li><a className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground" href="https://better.com/rent-vs-buy-calculator">Rent vs buy calculator</a></li>
                            <li><a className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground" href="https://better.com/find-an-agent">Find an agent</a></li>
                            <li><a className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground" href="https://better.com/va-loan">VA loans</a></li>
                            <li><a className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground" href="https://better.com/content">Learning center</a></li>
                          </ul>
                        </details>
                        <details className="group flex-none">
                          <summary className="flex h-14 cursor-pointer select-none items-center justify-between px-2 [&::-webkit-details-marker]:hidden">
                            Refinance<ChevronDown className="ml-2 inline-block group-open:rotate-180 fill-black stroke-none" />
                          </summary>
                          <ul className="m-0 list-none">
                            <li><a className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground" href="https://better.com/preapproval/nxt-refinance">Apply Now</a></li>
                            <li><a className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground" href="https://better.com/refinance-rates">Refinance rates</a></li>
                            <li><a className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground" href="https://better.com/content/refinance-calculator">Cash-out refinance calculator</a></li>
                            <li><a className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground" href="https://better.com/content">Learning Center</a></li>
                          </ul>
                        </details>
                        <details className="group flex-none">
                          <summary className="flex h-14 cursor-pointer select-none items-center justify-between px-2 [&::-webkit-details-marker]:hidden">
                            HELOC<ChevronDown className="ml-2 inline-block group-open:rotate-180 fill-black stroke-none" />
                          </summary>
                          <ul className="m-0 list-none">
                            <li><a className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground" href="https://better.com/preapproval/nxt-heloc">Apply Now</a></li>
                            <li><a className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground" href="https://better.com/heloc-calculator">Calculate your Cash 💵</a></li>
                            <li><a className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground" href="https://better.com/heloc-vs-cashout-refi-calculator">HELOC vs. Cash-out Refinance</a></li>
                            <li><a className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground" href="https://better.com/content">Learning Center</a></li>
                          </ul>
                        </details>
                        <details className="group flex-none">
                          <summary className="flex h-14 cursor-pointer select-none items-center justify-between px-2 [&::-webkit-details-marker]:hidden">
                            Rates<ChevronDown className="ml-2 inline-block group-open:rotate-180 fill-black stroke-none" />
                          </summary>
                          <ul className="m-0 list-none">
                            <li><a className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground" href="https://better.com/mortgage-rates">Purchase mortgage rates</a></li>
                            <li><a className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground" href="https://better.com/refinance-rates">Refinance rates</a></li>
                            <li><a className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground" href="https://better.com/cash-out-refinance-rates">Refinance cash-out rates</a></li>
                            <li><a className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground" href="https://better.com/heloc-rates">HELOC rates</a></li>
                            <li><a className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground" href="https://better.com/va-loan-rates">Purchase VA rates</a></li>
                          </ul>
                        </details>
                        <details className="group flex-none">
                          <summary className="flex h-14 cursor-pointer select-none items-center justify-between px-2 [&::-webkit-details-marker]:hidden">
                            Better+<ChevronDown className="ml-2 inline-block group-open:rotate-180 fill-black stroke-none" />
                          </summary>
                          <ul className="m-0 list-none">
                            <li><a className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground" href="https://www.bettercover.com/">Get Insurance</a></li>
                            <li><a className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground" href="https://better.com/title">Title and Closing</a></li>
                            <li><a className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground" href="https://better.com/b/attorney-match">Better Attorney Match</a></li>
                            <li><a className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground" href="https://better.com/content">Learning Center</a></li>
                            <li><a className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground" href="https://better.com/b/better-real-estate-partner-agents">Better Agent Match<span className="leading-body m-0 p-0 text-left text-sm ml-2 inline-block rounded-full bg-graph4Tertiary px-4 font-bold text-backgroundInversePrimary">For Agents</span></a></li>
                            <li><a className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground" href="https://better.com/b/duo">Better Duo<span className="leading-body m-0 p-0 text-left text-sm ml-2 inline-block rounded-full bg-graph4Tertiary px-4 font-bold text-backgroundInversePrimary">For Agents</span></a></li>
                          </ul>
                        </details>
                        <div className="bg-successBackground px-6 py-2 rounded-full flex items-center justify-center">
                          <div className="mr-3">
                            <PhoneIcon />
                          </div>
                          Call us anytime at<a className="ml-1 underline underline-offset-[3px] hover:text-textHighlight" href="tel:4155238837">(415) 523 88371</a>
                        </div>
                        <div className="flex flex-col gap-4 mt-auto">
                          <a className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-backgroundInverseSecondary text-interactiveForegroundPrimary hover:bg-accentPrimary h-16 px-12 py-5 w-auto" href="https://better.com/preapproval/b782bb09-edbe-41ef-8950-efdb455736cd">Continue</a>
                          <a className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-strokeDivider text-interactiveForegroundInversePrimary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary hover:shadow-[0_0_0_4px_inset] hover:text-interactivePrimary h-16 px-12 py-5 w-auto font-normal" href="https://better.com/account/sign-in">Sign in<span className="ml-xs"><UserIcon /></span></a>
                        </div>
                      </div>
                      {/* Overlay for mobile nav */}
                      <button
                        aria-label="close navigation bar"
                        className={`fixed inset-0 h-screen w-screen bg-interactiveForegroundInversePrimary opacity-80 z-1 focus:border transition-transform duration-300 ease-[cubic-bezier(0.42,0,0.58,1)] ${isMobileNavOpen ? 'visible' : 'invisible'}`}
                        onClick={toggleMobileNav}
                      ></button>
        
                      {/* Desktop Navigation */}
                      <ul className="flex items-center">
                        <li className="mr-2">
                          <a className="font-normal transition-all ease-in-out duration-300 text-textPrimary hover:bg-backgroundSecondary group-hover:bg-backgroundSecondary" href="https://better.com/">
                            <BetterLogo2021 width="65px" height="20px" />
                          </a>
                        </li>
                        <li className="mx-5 hidden xl:block">
                          <div className="group relative">
                            <span className="">
                              <button className="rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4 text-textPrimary hover:bg-backgroundSecondary group-hover:bg-backgroundSecondary">Buy</button>
                            </span>
                            <div className="absolute invisible left-0 right-0 pt-2 group-hover:visible">
                              <div className="z-10 w-[22rem] rounded-base p-3 bg-white shadow-md">
                                <div><a href="https://better.com/preapproval/nxt-purchase" className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between ">Apply now<ArrowRight className="text-transparent group-hover/sub-menu:text-accentPrimary" /></a></div>
                                <div><a href="https://better.com/mortgage-rates" className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between ">Purchase rates<ArrowRight className="text-transparent group-hover/sub-menu:text-accentPrimary" /></a></div>
                                <div><a href="https://better.com/how-much-house-can-i-afford" className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between ">Affordability calculator<ArrowRight className="text-transparent group-hover/sub-menu:text-accentPrimary" /></a></div>
                                <div><a href="https://better.com/mortgage-calculator" className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between ">Mortgage calculator<ArrowRight className="text-transparent group-hover/sub-menu:text-accentPrimary" /></a></div>
                                <div><a href="https://better.com/rent-vs-buy-calculator" className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between ">Rent vs buy calculator<ArrowRight className="text-transparent group-hover/sub-menu:text-accentPrimary" /></a></div>
                                <div><a href="https://better.com/find-an-agent" className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-backgroundSecondary flex justify-between ">Find an agent<ArrowRight className="text-transparent group-hover/sub-menu:text-accentPrimary" /></a></div>
                                <div><a href="https://better.com/va-loan" className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-accentBackground flex justify-between ">VA loans<ArrowRight className="text-transparent group-hover/sub-menu:text-accentPrimary" /></a></div>
                                <div><a href="https://better.com/content" className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-accentBackground flex justify-between ">Learning center<ArrowRight className="text-transparent group-hover/sub-menu:text-accentPrimary" /></a></div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="mx-5 hidden xl:block">
                          <div className="group relative">
                            <span className="">
                              <button className="rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4 text-textPrimary hover:bg-backgroundSecondary group-hover:bg-backgroundSecondary">Refinance</button>
                            </span>
                            <div className="absolute invisible left-0 right-0 pt-2 group-hover:visible">
                              <div className="z-10 w-[22rem] rounded-base p-3 bg-white shadow-md">
                                <div><a href="https://better.com/preapproval/nxt-refinance" className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-accentBackground flex justify-between ">Apply Now<ArrowRight className="text-transparent group-hover/sub-menu:text-accentPrimary" /></a></div>
                                <div><a href="https://better.com/refinance-rates" className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-accentBackground flex justify-between ">Refinance rates<ArrowRight className="text-transparent group-hover/sub-menu:text-accentPrimary" /></a></div>
                                <div><a href="https://better.com/content/refinance-calculator" className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-accentBackground flex justify-between ">Cash-out refinance calculator<ArrowRight className="text-transparent group-hover/sub-menu:text-accentPrimary" /></a></div>
                                <div><a href="https://better.com/content" className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-accentBackground flex justify-between ">Learning Center<ArrowRight className="text-transparent group-hover/sub-menu:text-accentPrimary" /></a></div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="mx-5 hidden xl:block">
                          <div className="group relative">
                            <span className="">
                              <button className="rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4 text-textPrimary hover:bg-backgroundSecondary group-hover:bg-backgroundSecondary">HELOC</button>
                            </span>
                            <div className="absolute invisible left-0 right-0 pt-2 group-hover:visible">
                              <div className="z-10 w-[22rem] rounded-base p-3 bg-white shadow-md">
                                <div><a href="https://better.com/preapproval/nxt-heloc" className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-accentBackground flex justify-between ">Apply Now<ArrowRight className="text-transparent group-hover/sub-menu:text-accentPrimary" /></a></div>
                                <div><a href="https://better.com/heloc-calculator" className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-accentBackground flex justify-between ">Calculate your Cash 💵<ArrowRight className="text-transparent group-hover/sub-menu:text-accentPrimary" /></a></div>
                                <div><a href="https://better.com/heloc-vs-cashout-refi-calculator" className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-accentBackground flex justify-between ">HELOC vs. Cash-out Refinance<ArrowRight className="text-transparent group-hover/sub-menu:text-accentPrimary" /></a></div>
                                <div><a href="https://better.com/content" className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-accentBackground flex justify-between ">Learning Center<ArrowRight className="text-transparent group-hover/sub-menu:text-accentPrimary" /></a></div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="mx-5 hidden xl:block">
                          <div className="group relative">
                            <span className="">
                              <button className="rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4 text-textPrimary hover:bg-backgroundSecondary group-hover:bg-backgroundSecondary">Rates</button>
                            </span>
                            <div className="absolute invisible left-0 right-0 pt-2 group-hover:visible">
                              <div className="z-10 w-[22rem] rounded-base p-3 bg-white shadow-md">
                                <div><a href="https://better.com/mortgage-rates" className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-accentBackground flex justify-between ">Purchase mortgage rates<ArrowRight className="text-transparent group-hover/sub-menu:text-accentPrimary" /></a></div>
                                <div><a href="https://better.com/refinance-rates" className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-accentBackground flex justify-between ">Refinance rates<ArrowRight className="text-transparent group-hover/sub-menu:text-accentPrimary" /></a></div>
                                <div><a href="https://better.com/cash-out-refinance-rates" className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-accentBackground flex justify-between ">Refinance cash-out rates<ArrowRight className="text-transparent group-hover/sub-menu:text-accentPrimary" /></a></div>
                                <div><a href="https://better.com/heloc-rates" className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-accentBackground flex justify-between ">HELOC rates<ArrowRight className="text-transparent group-hover/sub-menu:text-accentPrimary" /></a></div>
                                <div><a href="https://better.com/va-loan-rates" className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-accentBackground flex justify-between ">Purchase VA rates<ArrowRight className="text-transparent group-hover/sub-menu:text-accentPrimary" /></a></div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="mx-5 hidden xl:block">
                          <div className="group relative">
                            <span className="">
                              <button className="rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4 text-textPrimary hover:bg-backgroundSecondary group-hover:bg-backgroundSecondary">Better+</button>
                            </span>
                            <div className="absolute invisible left-0 right-0 pt-2 group-hover:visible">
                              <div className="z-10 w-[22rem] rounded-base p-3 bg-white shadow-md">
                                <div><a href="https://www.bettercover.com/" className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-accentBackground flex justify-between ">Get Insurance<ArrowRight className="text-transparent group-hover/sub-menu:text-accentPrimary" /></a></div>
                                <div><a href="https://better.com/title" className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-accentBackground flex justify-between ">Title and Closing<ArrowRight className="text-transparent group-hover/sub-menu:text-accentPrimary" /></a></div>
                                <div><a href="https://better.com/b/attorney-match" className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-accentBackground flex justify-between ">Better Attorney Match<ArrowRight className="text-transparent group-hover/sub-menu:text-accentPrimary" /></a></div>
                                <div><a href="https://better.com/content" className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-accentBackground flex justify-between ">Learning Center<ArrowRight className="text-transparent group-hover/sub-menu:text-accentPrimary" /></a></div>
                                <div><a href="https://better.com/b/better-real-estate-partner-agents" className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-accentBackground flex justify-between ">Better Agent Match<span className="leading-body m-0 p-0 text-left text-sm ml-2 inline-block rounded-full bg-graph4Tertiary px-4 font-bold text-backgroundInversePrimary">For Agents</span><ArrowRight className="text-transparent group-hover/sub-menu:text-accentPrimary" /></a></div>
                                <div><a href="https://better.com/b/duo" className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-accentBackground flex justify-between ">Better Duo<span className="leading-body m-0 p-0 text-left text-sm ml-2 inline-block rounded-full bg-graph4Tertiary px-4 font-bold text-backgroundInversePrimary">For Agents</span><ArrowRight className="text-transparent group-hover/sub-menu:text-accentPrimary" /></a></div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul className="flex items-center gap-3 lg:gap-6">
                      <li className="">
                        <div className="group min-[520px]:relative">
                          <div className="transition-all ease-in-out duration-300 border rounded-full p-2 md:p-3.5 border-strokeBorder group-hover:bg-backgroundSecondary group-hover:border-backgroundSecondary">
                            <PhoneIcon className="transition-all ease-in-out group-hover:[&_path]:fill-interactiveForegroundInversePrimary h-3 w-3 md:h-4 md:w-4" />
                          </div>
                          <div className="absolute invisible left-1 min-[520px]:left-auto right-0 pt-2 group-hover:visible">
                            <div className=" bg-backgroundTertiary px-10 py-7 rounded-base w-80 shadow-md">Call us anytime at <a className="underline hover:text-textHighlight" href="tel:4155238837">415-523-8837</a></div>
                          </div>
                        </div>
                      </li>
                      <li className="hidden md:block">
                        <a className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base leading-normal disabled:pointer-events-none disabled:opacity-50 bg-transparent py-5 w-auto font-normal transition-all ease-in-out duration-300 h-12 px-4 text-textPrimary hover:bg-backgroundSecondary group-hover:bg-backgroundSecondary" href="https://better.com/account/sign-in">Sign in</a>
                      </li>
                      <li className="transition-all duration-500 ease-in block">
                        <a className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-backgroundInverseSecondary text-interactiveForegroundPrimary hover:bg-accentPrimary py-3 w-auto h-8 px-4 md:px-6 md:h-12" href="https://better.com/preapproval/b782bb09-edbe-41ef-8950-efdb455736cd">Continue</a>
                      </li>
                      <li>
                        <button className="xl:hidden flex items-center font-normal transition-all ease-in-out duration-300 text-textPrimary hover:bg-backgroundSecondary group-hover:bg-backgroundSecondary" aria-label="open mobile nav bar" onClick={toggleMobileNav}>
                          <MenuIcon />
                        </button>
                      </li>
                    </ul>
                  </nav>
                </header>
        
                {/* Floating CTA (Desktop) */}
                <div className="fixed bottom-base right-base cursor-pointer rounded-base border-none z-50 hidden md:block transition-all duration-300 ease-in-out max-w-xs">
                  <div className="transition-all duration-300 ease-in-out">
                    <div className="flex items-center cursor-pointer md:w-72 md:shadow-md rounded-lg p-4 md:p-none md:rounded-base">
                      <div className="w-[30%] relative max-w-24">
                        {/* Note: For Next.js, consider using `next/image` for optimized images. */}
                        <img alt="Better Forever" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" className="w-full h-full rounded-base md:rounded-l-base object-cover mr-3" src="./Simple, Online, AI-Powered Mortgage _ Better Mortgage_files/floating-image.webp" style={{ color: 'transparent' }} />
                        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                          <p className="leading-body m-0 p-0 text-left text-base text-white font-bold">Better Forever</p>
                        </div>
                      </div>
                      <div className="flex-1 p-3 md:bg-successBackground rounded-r-base">
                        <p className="font-normal leading-body m-0 p-0 text-left text-sm text-backgroundInversePrimary">Save on future home loans with $0 origination fees.</p>
                        <p className="leading-body m-0 p-0 text-left text-sm font-bold text-backgroundInversePrimary flex items-center">See details<ArrowRight className="ml-1 w-4 h-4" /></p>
                      </div>
                    </div>
                  </div>
                </div>
        
                {/* Floating CTA (Mobile) */}
                <div className="block md:hidden">
                  <div className="fixed bottom-0 flex justify-center items-end w-full shadow-lg z-[9999]">
                    <div className="bg-white rounded-t-base w-full rounded-t-2xl p-2 inset-shadow-sm shadow-top" draggable="false" style={{ opacity: 1, transform: 'none', userSelect: 'none', touchAction: 'pan-x' }}>
                      <div className="w-12 h-1 bg-disabled rounded-full mx-auto mb-3"></div>
                      <div className="flex items-center cursor-pointer md:w-72 md:shadow-md rounded-lg p-4 md:p-none md:rounded-base">
                        <div className="w-[30%] relative max-w-24">
                          {/* Note: For Next.js, consider using `next/image` for optimized images. */}
                          <img alt="Better Forever" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" className="w-full h-full rounded-base md:rounded-l-base object-cover mr-3" src="./Simple, Online, AI-Powered Mortgage _ Better Mortgage_files/floating-image.webp" style={{ color: 'transparent' }} />
                          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                            <p className="leading-body m-0 p-0 text-left text-base text-white font-bold">Better Forever</p>
                          </div>
                        </div>
                        <div className="flex-1 p-3 md:bg-successBackground rounded-r-base">
                          <p className="font-normal leading-body m-0 p-0 text-left text-sm text-backgroundInversePrimary">Save on future home loans with $0 origination fees.</p>
                          <p className="leading-body m-0 p-0 text-left text-sm font-bold text-backgroundInversePrimary flex items-center">See details<ArrowRight className="ml-1 w-4 h-4" /></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        </>
    );
}