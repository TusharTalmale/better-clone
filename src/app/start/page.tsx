import React from 'react';
import { BBBIcon, BetterLogo2021, CheckIcon, DashboardIcon, EqualHousingLenderIcon, HelocIcon, OffersIcon, PhoneIcon, PurchaseIcon, RatesIcon, RefinanceIcon } from '../icons/custome_icons';
import Image from 'next/image';

const App = () => {
  return (
    <div className="min-h-screen bg-[#FFFDFA] font-[Better-Sans] text-[#292b29]">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-[#FFFDFA] py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="https://better.com/" className="flex-shrink-0">
              <svg className="icon icon-logo-mortgage" height="100%" role="img" version="1.1" viewBox="0 0 62 31" width="67px" xmlns="http://www.w3.org/2000/svg">
                <title>Better Mortgage</title>
                <path d="M42.26 12.43h2.975V6.652c.277-.872 1.574-1.687 3.446-1.28V2.541c-1.556 0-2.895 1.009-3.446 2.618V2.735h-2.974v9.695Zm-4.843-7.774c.906 0 1.359.484 1.359.95 0 .679-.552 1.359-3.624 1.706 0-1.59 1.025-2.656 2.265-2.656Zm3.8 6.882v-2.58c-.984.816-2.304 1.262-3.368 1.262-1.103 0-1.988-.581-2.423-1.511 3.9-.27 5.81-1.59 5.81-3.452 0-1.493-1.556-2.752-3.723-2.752-2.876 0-5.198 2.074-5.198 5.1 0 2.85 2.382 4.962 5.376 4.962 1.282-.002 2.581-.369 3.526-1.029ZM30.15 9.425V4.656h2.027v-1.9l-2.027.021V.45l-5.633 3.917V.955l-4.707 3.49v.213h1.773V9.97c0 1.687 1.261 2.58 2.975 2.58.748 0 1.38-.136 1.95-.465v-1.998a2.01 2.01 0 0 1-.985.273c-.63 0-1.004-.311-1.004-.854V4.658h2.698v5.294c0 1.705 1.26 2.597 2.992 2.597.769 0 1.398-.097 2.01-.464V10.07c-.257.155-.65.29-1.044.29-.632-.004-1.025-.332-1.025-.934ZM15.794 4.656c.907 0 1.36.484 1.36.95 0 .679-.552 1.359-3.625 1.706 0-1.59 1.023-2.656 2.265-2.656Zm3.8 6.882v-2.58c-.983.816-2.303 1.262-3.367 1.262-1.103 0-1.988-.581-2.423-1.511 3.899-.27 5.81-1.59 5.81-3.452 0-1.493-1.556-2.752-3.723-2.752-2.876 0-5.199 2.074-5.199 5.1 0 2.85 2.382 4.962 5.377 4.962 1.281-.002 2.58-.369 3.526-1.029ZM5.298 7.215c.924 0 1.693.563 1.693 1.512 0 .892-.769 1.435-1.693 1.435H3.052V7.215h2.245Zm-.158-4.963c.886 0 1.595.543 1.595 1.377 0 .892-.71 1.435-1.595 1.435H3.052V2.252H5.14ZM0 .002V12.43h5.947c2.283 0 4.077-1.376 4.077-3.471 0-1.338-.867-2.404-2.128-2.908 1.142-.505 1.91-1.494 1.91-2.677C9.807 1.338 7.996 0 5.692 0H0v.002Z" fill="#017848"></path>
                <path d="m5.613 24.595 3.682-5.75v8.345h1.192V16.567H9.4l-4.149 6.625-4.165-6.625H0V27.19h1.192v-8.344l3.682 5.749h.74ZM15.796 19.404c-2.248 0-3.908 1.75-3.908 3.984 0 2.233 1.66 3.983 3.908 3.983 2.233 0 3.893-1.75 3.893-3.983 0-2.234-1.66-3.984-3.893-3.984Zm0 1.102c1.584 0 2.701 1.312 2.701 2.882 0 1.569-1.117 2.882-2.7 2.882-1.6 0-2.717-1.313-2.717-2.882 0-1.57 1.117-2.882 2.716-2.882ZM29.519 26.073c-.332.181-.71.227-.92.227-.83 0-1.313-.453-1.313-1.373v-4.361h1.961v-.98h-1.961v-2.098h-1.162v7.56c0 1.478.875 2.323 2.248 2.323.483 0 .875-.09 1.147-.226v-1.072Zm-7.364-6.488h-1.131v7.605h1.162v-3.863c0-1.72.95-2.761 2.353-2.761.106 0 .242 0 .317.015V19.45a1.64 1.64 0 0 0-.422-.045c-1.026 0-1.886.573-2.279 1.645v-1.464ZM36.352 25.862v.95c0 1.585-1.071 2.52-2.565 2.52-1.117 0-2.067-.467-2.671-1.222l-.785.74c.77.966 1.992 1.539 3.456 1.539 2.112 0 3.681-1.373 3.681-3.456v-7.348h-1.161v1.298c-.453-.86-1.57-1.479-2.686-1.479-2.022 0-3.622 1.69-3.622 3.984 0 2.293 1.6 3.983 3.622 3.983 1.131 0 2.278-.634 2.73-1.509Zm-2.55.438c-1.434 0-2.626-1.222-2.626-2.912s1.192-2.913 2.626-2.913c1.313 0 2.58 1.057 2.58 2.913 0 1.87-1.283 2.912-2.58 2.912ZM43.687 22.165v.363c-2.52-.197-4.994.347-4.994 2.625 0 1.313 1.04 2.218 2.43 2.218 1.146 0 2.096-.573 2.64-1.554v1.373h1.086v-4.934c0-1.765-1.177-2.852-3.018-2.852-1.313 0-2.293.558-2.942 1.328l.619.754c.497-.573 1.297-1.04 2.233-1.04 1.207 0 1.946.663 1.946 1.72Zm-2.399 4.21c-.845 0-1.464-.513-1.464-1.282 0-1.343 1.389-1.72 2.837-1.72.362 0 .724.015 1.072.06v.558c0 1.192-1.057 2.384-2.445 2.384ZM52.415 25.862v.95c0 1.585-1.072 2.52-2.566 2.52-1.116 0-2.067-.467-2.67-1.222l-.785.74c.77.966 1.992 1.539 3.455 1.539 2.113 0 3.682-1.373 3.682-3.456v-7.348H52.37v1.298c-.452-.86-1.569-1.479-2.685-1.479-2.023 0-3.622 1.69-3.622 3.984 0 2.293 1.6 3.983 3.622 3.983 1.131 0 2.278-.634 2.73-1.509Zm-2.55.438c-1.434 0-2.626-1.222-2.626-2.912s1.192-2.913 2.626-2.913c1.312 0 2.58 1.057 2.58 2.913 0 1.87-1.283 2.912-2.58 2.912ZM58.53 19.404c-2.234 0-3.818 1.75-3.818 3.984 0 2.248 1.584 3.983 3.999 3.983 1.237 0 2.233-.422 3.063-1.328l-.725-.8a2.992 2.992 0 0 1-2.308 1.057c-1.494 0-2.671-.996-2.807-2.58h6.006c.03-.197.06-.468.06-.725 0-1.991-1.343-3.59-3.47-3.59Zm0 1.056c1.282 0 2.293.875 2.338 2.279v.03H55.95c.181-1.373 1.223-2.309 2.58-2.309Z" fill="#6F7672"></path>
              </svg>
            </a>
            {/* Call to Action Button */}
            <div className="flex items-center">
              <button className="bg-transparent rounded-lg text-[#292b29] h-12 px-4 relative transition-all duration-300 ease-in-out font-bold text-base hover:text-[#017848] focus:text-[#017848] focus:border-transparent focus:shadow-[inset_0_0_0_4px_#017848]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center bg-[#cce9d3] rounded-full h-8 w-8 justify-center mr-3">
                    <PhoneIcon />
                  </div>
                  <div className="hidden lg:block">
                    <h5 className="text-[#292b29] text-left font-bold text-base leading-normal">
                      <span>Need help? <span className="whitespace-pre">Call 415-523-8837</span></span>
                    </h5>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* Progress Bar */}
        <div className="relative w-full">
          <div className="bg-[#e8eae6] h-1 w-full">
            <div className="bg-[#017848] h-1 w-0 transition-all duration-300 ease-in-out" style={{ width: '0%' }}></div>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full h-12 w-12 overflow-hidden border-none shadow-[0_0_15px_1px_#1EE07F]">
            <div className="flex items-center justify-center relative w-12 max-h-12">
              <div className="pb-12 relative w-12">
                <Image data-size="medium" src="https://media.better.com/components/preapproval/industry-parity-v2/betsy.svg" alt="Spokesperson" className="block h-full absolute w-full top-0 left-0 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-10 md:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-center w-full">
          <div className="flex flex-col items-center text-center max-w-xl">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight lg:tracking-tighter text-[#292b29]">
              <span className="whitespace-normal md:whitespace-nowrap">Hi, I&apos;m Betsy!</span><br />What can I help you with?
            </h1>
            <div className="mb-6 w-full max-w-2xl">
              <div className="grid gap-4 md:gap-6">
                <button className="flex items-center bg-transparent border border-[#a4a8a4] rounded-lg text-[#292b29] h-16 px-6 text-left w-full cursor-pointer font-bold text-lg transition-all duration-300 ease-in-out hover:border-transparent hover:shadow-[inset_0_0_0_4px_#017848] hover:text-[#017848]">
                  <div className="flex items-center justify-center mr-3 min-w-min">
                    <PurchaseIcon />
                  </div>
                  <span className="max-w-none">Buying a home</span>
                  <span className="ml-auto mr-0 w-0 opacity-0 transition-all duration-300 ease-in-out"><CheckIcon /></span>
                </button>
                <button className="flex items-center bg-transparent border border-[#a4a8a4] rounded-lg text-[#292b29] h-16 px-6 text-left w-full cursor-pointer font-bold text-lg transition-all duration-300 ease-in-out hover:border-transparent hover:shadow-[inset_0_0_0_4px_#017848] hover:text-[#017848]">
                  <div className="flex items-center justify-center mr-3 min-w-min">
                    <RefinanceIcon />
                  </div>
                  <span className="max-w-none">Refinancing my mortgage</span>
                  <span className="ml-auto mr-0 w-0 opacity-0 transition-all duration-300 ease-in-out"><CheckIcon /></span>
                </button>
                <button className="flex items-center bg-transparent border border-[#a4a8a4] rounded-lg text-[#292b29] h-16 px-6 text-left w-full cursor-pointer font-bold text-lg transition-all duration-300 ease-in-out hover:border-transparent hover:shadow-[inset_0_0_0_4px_#017848] hover:text-[#017848]">
                  <div className="flex items-center justify-center mr-3 min-w-min">
                    <HelocIcon />
                  </div>
                  <span className="max-w-none">Get cash from my home</span>
                  <span className="ml-auto mr-0 w-0 opacity-0 transition-all duration-300 ease-in-out"><CheckIcon /></span>
                </button>
              </div>
            </div>

            {/* Stats Section */}
            <div className="flex flex-row justify-between mb-6 w-full">
              <div className="flex flex-col">
                <p className="text-[#292b29] text-center font-bold text-4xl">$100B</p>
                <p className="text-[#565d5a] text-center text-sm mt-3">home loans funded entirely online</p>
              </div>
              <div className="flex flex-col">
                <p className="text-[#292b29] text-center font-bold text-4xl">400K</p>
                <p className="text-[#565d5a] text-center text-sm mt-3">Customers who chose a Better Mortgage</p>
              </div>
            </div>

            {/* Unlock Section */}
            <div className="bg-[#f0f7f1] rounded-lg mb-10 p-5 text-center w-full">
              <p className="text-[#565d5a] text-center mb-4 text-base">After a few questions, you&apos;ll unlock:</p>
              <div className="mx-auto w-fit">
                <div className="flex flex-col space-y-3"> {/* Use flex-col and space-y for vertical stacking */}
                  <div className="flex flex-row">
                    <div className="flex items-center justify-center w-auto">
                      <RatesIcon />
                    </div>
                    <div className="flex items-center ml-3 w-auto">
                      <p className="text-[#565d5a] text-left text-base">Custom mortgage rates</p>
                    </div>
                  </div>
                 <div className="flex flex-row items-center"> {/* Horizontal layout for OffersIcon and text */}
        <div className="flex items-center justify-center w-auto">
          <OffersIcon />
        </div>
        <div className="flex items-center ml-3 w-auto"> {/* Margin for spacing between icon and text */}
          <p className="text-[#565d5a] text-left text-base">Exclusive offers</p>
        </div>
      </div>
                  <div className="flex flex-row">
                    <div className="flex items-center justify-center w-auto">
                      <DashboardIcon />
                    </div>
                    <div className="flex items-center ml-3 w-auto">
                      <p className="text-[#565d5a] text-left text-base">A personalized dashboard</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#FFFDFA] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Footer Logo and Description */}
            <div className="col-span-1 md:col-span-1">
                    <BetterLogo2021 />
              
              <div className="text-[#565d5a] text-sm mt-4 mb-8">
                <span>Better Mortgage Corporation is a direct lender dedicated to providing a fast, transparent digital mortgage experience backed by superior customer support.<br /></span>
              </div>
            </div>

            {/* Contact Us Links */}
            <div className=" flex justify-start md:justify-end">
              <nav aria-labelledby="contact-us-links" className="w-full md:w-auto">
                <div className="mb-2 md:mb-4">
                  <h4 id="contact-us-links" className="text-base md:text-lg font-bold text-[#292b29]">
                    Contact Us
                  </h4>
                </div>
                <ul className="space-y-2 text-[#565d5a] text-base">
                  <li><a className="hover:underline" href="https://better.com/schedule-call?TRACKINGLOCATION=Footer&amp;TRACKINGBRANDING=general&amp;TRACKINGSOURCE=prod&amp;loanFileId=0">Schedule a conversation</a></li>
                  <li><a className="hover:underline" href="mailto:hello@better.com" aria-label="email hello@better.com">hello@better.com</a></li>
                  <li><a className="hover:underline" href="tel:415-523-8837" aria-label="phone number 415-523-8837">415-523-8837</a></li>
                  <li><a className="hover:underline" href="https://better.com/faq" target="_blank" rel="noopener noreferrer" aria-label="frequently asked questions">FAQ</a></li>
                  <li><a className="hover:underline" href="https://better.com/content">Resources</a></li>
                </ul>
              </nav>
            </div>

            {/* Legal Links */}
            <div className="col-span-1 md:col-span-1 flex justify-start md:justify-end">
              <nav aria-labelledby="legal-links" className="w-full md:w-auto">
                <div className="mb-2 md:mb-4">
                  <h4 id="legal-links" className="text-base md:text-lg font-bold text-[#292b29]">
                    <div>Legal</div>
                  </h4>
                </div>
                <ul className="space-y-2 text-[#565d5a] text-base">
                  <li><a className="hover:underline" href="http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/330511" target="_blank" rel="noopener noreferrer">NMLS Consumer Access</a></li>
                  <li><a className="hover:underline" href="https://better.com/about-us/privacy-policy">Privacy Policy</a></li>
                  <li><a className="hover:underline" href="https://better.com/about-us/terms-of-use">Terms of Use</a></li>
                  <li><a className="hover:underline" href="https://better.com/about-us/licensing-disclosure">Disclosures &amp; Licensing</a></li>
                  <li><a className="hover:underline" href="https://better.com/about-us/affiliated-business">Affiliated Business</a></li>
                  <li>
                    <div className="flex items-baseline mt-5">
                      <div className="w-8 mr-3 text-[#6F7672]">
                        <EqualHousingLenderIcon />
                      </div>
                      <div className="w-8 text-[#6F7672]">
                        <a href="https://www.bbb.org/new-york-city/business-reviews/mortgage-brokers/better-mortgage-in-new-york-ny-165686" rel="noreferrer" target="_blank" aria-label="better business bureau">
                          <BBBIcon />
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Copyright and Disclosure */}
          <div className="mt-10">
            <hr className="border-t border-[#dfe0dc] mb-8" />
            <div className="text-[#565d5a] text-xs mb-5">
              <span className="whitespace-pre-wrap">© 2025 Better Home &amp; Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; Better Connect, LLC dba Better Attorney Match provides real estate attorney connection services; and Better Inspect, LLC provides home inspection services. All rights reserved.</span>
              <span className="whitespace-pre-wrap">

Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade Center, 80th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. NMLS Consumer Access</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
