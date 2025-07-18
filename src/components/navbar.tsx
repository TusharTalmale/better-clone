import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, BetterLogo2021, ChevronDown, MenuIcon, PhoneIcon, UserIcon, XIcon } from '../app/icons/custome_icons'; // Assuming these paths are correct

interface NavbarProps {
  isOverHero?: boolean;
  enableHero?: boolean;
}

const navLinks = {
  buy: [
    { label: 'Apply now', href: 'https://better.com/preapproval/nxt-purchase' },
    { label: 'Purchase rates', href: 'https://better.com/mortgage-rates' },
    { label: 'Affordability calculator', href: 'https://better.com/how-much-house-can-i-afford' },
    { label: 'Mortgage calculator', href: 'https://better.com/mortgage-calculator' },
    { label: 'Rent vs buy calculator', href: 'https://better.com/rent-vs-buy-calculator' },
    { label: 'Find an agent', href: 'https://better.com/find-an-agent' },
    { label: 'VA loans', href: 'https://better.com/va-loan' },
    { label: 'Learning center', href: 'https://better.com/content' },
  ],
  refinance: [
    { label: 'Apply Now', href: 'https://better.com/preapproval/nxt-refinance' },
    { label: 'Refinance rates', href: 'https://better.com/refinance-rates' },
    { label: 'Cash-out refinance calculator', href: 'https://better.com/content/refinance-calculator' },
    { label: 'Learning Center', href: 'https://better.com/content' },
  ],
  heloc: [
    { label: 'Apply Now', href: 'https://better.com/preapproval/nxt-heloc' },
    { label: 'Calculate your Cash 💵', href: 'https://better.com/heloc-calculator' },
    { label: 'HELOC vs. Cash-out Refinance', href: 'https://better.com/heloc-vs-cashout-refi-calculator' },
    { label: 'Learning Center', href: 'https://better.com/content' },
  ],
  rates: [
    { label: 'Purchase mortgage rates', href: 'https://better.com/mortgage-rates' },
    { label: 'Refinance rates', href: 'https://better.com/refinance-rates' },
    { label: 'Refinance cash-out rates', href: 'https://better.com/cash-out-refinance-rates' },
    { label: 'HELOC rates', href: 'https://better.com/heloc-rates' },
    { label: 'Purchase VA rates', href: 'https://better.com/va-loan-rates' },
  ],
  betterPlus: [
    { label: 'Get Insurance', href: 'https://www.bettercover.com/' },
    { label: 'Title and Closing', href: 'https://better.com/title' },
    { label: 'Better Attorney Match', href: 'https://better.com/b/attorney-match' },
    { label: 'Learning Center', href: 'https://better.com/content' },
    { label: 'Better Agent Match', href: 'https://better.com/b/better-real-estate-partner-agents', agentTag: true },
    { label: 'Better Duo', href: 'https://better.com/b/duo', agentTag: true },
  ],
};

const DropdownContent: React.FC<{ items: { label: string; href: string; agentTag?: boolean }[] }> = ({ items }) => (
  <div className="z-10 w-[22rem] rounded-base p-3 bg-white shadow-md">
    {items.map((item, index) => (
      <div key={index}>
        <a href={item.href} className="px-5 py-3 hover:bg-backgroundSecondary group/sub-menu hover:rounded-base focus:bg-accentBackground flex justify-between ">
          {item.label}
          {item.agentTag && (
            <span className="leading-body m-0 p-0 text-left text-sm ml-2 inline-block rounded-full bg-graph4Tertiary px-4 font-bold text-backgroundInversePrimary">For Agents</span>
          )}
          <ArrowRight className="text-transparent group-hover/sub-menu:text-accentPrimary" />
        </a>
      </div>
    ))}
  </div>
);

const Navbar: React.FC<NavbarProps> = ({ isOverHero = false, enableHero = false }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  const navbarBackground = enableHero
    ? (isOverHero ? 'bg-green-800 text-white' : 'bg-white text-black')
    : 'bg-white text-black';

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280 && isMobileNavOpen) { // xl breakpoint
        setIsMobileNavOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (mobileNavRef.current && !mobileNavRef.current.contains(event.target as Node) && isMobileNavOpen) {
        // Check if the click was not on the menu open button itself
        const menuButton = document.querySelector('.xl\\:hidden button[aria-label="open mobile nav bar"]');
        if (menuButton && menuButton.contains(event.target as Node)) {
          return; // Do nothing if the click was on the menu button
        }
        setIsMobileNavOpen(false);
      }
    };


    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileNavOpen]);

  return (
    <>
      <header className="sticky top-0 z-20 transition-all ease-in-out duration-300 bg-white">
        <nav className={`m-auto flex justify-between p-2 md:py-5 md:px-10 xl:p-5 transition-all duration-300 ease-in-out ${navbarBackground}`}>
          {/* Mobile Navigation Sidebar */}
          <div
            ref={mobileNavRef}
            className={`fixed bg-white h-full text-black inset-0 z-10 flex flex-col p-2 shadow-md transition-transform duration-300 ease-[cubic-bezier(0.42,0,0.58,1)] overflow-auto overscroll-contain ${isMobileNavOpen ? 'translate-x-0' : '-translate-x-full invisible'}`}
          >
            <div className="flex justify-between items-center">
              <a className="inline-block px-2 flex-none" href="/">
                <BetterLogo2021 />
              </a>
              <button
                className="inline-block rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundTertiary bg-transparent hover:bg-interactiveSecondary focus:bg-interactiveSecondary focus:border-transparent focus:shadow-accentBorderSecondary active:bg-interactiveSecondary px-base h-2xl w-auto"
                onClick={toggleMobileNav}
                aria-label="close mobile navigation"
              >
                <div className="align-center flex justify-center">
                  <XIcon />
                </div>
              </button>
            </div>
            {/* Mobile Nav Details/Dropdowns */}
            {Object.entries(navLinks).map(([key, items]) => (
              <details className="group flex-none" key={key}>
                <summary className="flex h-14 cursor-pointer select-none items-center justify-between px-2 [&::-webkit-details-marker]:hidden">
                  {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()}
                  <ChevronDown className="ml-2 inline-block group-open:rotate-180 fill-black stroke-none" />
                </summary>
                <ul className="m-0 list-none">
                  {items.map((item, index) => (
                    <li key={index}>
                      <a className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground" href={item.href}>
                        {item.label}
                       
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            ))}

            <div className="bg-successBackground px-6 py-2 rounded-full flex items-center justify-center">
              <div className="mr-3">
                <PhoneIcon />
              </div>
              Call us anytime at<a className="ml-1 underline underline-offset-[3px] hover:text-textHighlight" href="tel:4155238837">(415) 523 88371</a>
            </div>
            <div className="flex flex-row gap-4 mx-auto mt-auto">
              <a className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 hover:bg-accentPrimary h-16 w-40 bg-green-300 text-black-600 " href="https://better.com/preapproval/b782bb09-edbe-41ef-8950-efdb455736cd">Continue</a>
              <a className="inline-flex items-center justify-center rounded-full text-base leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-strokeDivider text-interactiveForegroundInversePrimary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary hover:shadow-[0_0_0_4px_inset] hover:text-green-800 h-16 w-40 font-normal" href="https://better.com/account/sign-in">Sign in<span className="ml-xs"><UserIcon /></span></a>
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
              <a className="font-normal transition-all ease-in-out duration-300 text-textPrimary hover:bg-backgroundSecondary group-hover:bg-backgroundSecondary" href="/">
                <BetterLogo2021 width="65px" height="20px" />
              </a>
            </li>
            {Object.entries(navLinks).map(([key, items]) => (
              <li className={`mx-5 ${key !== 'refinance' ? 'hidden xl:block' : ''}`} key={key}>
                <div className="group relative">
                  <span>
                    <button className="rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4 text-textPrimary hover:bg-backgroundSecondary group-hover:bg-backgroundSecondary">
                      {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()}
                    </button>
                  </span>
                  <div className="absolute invisible text-black left-0 right-0 pt-2 group-hover:visible">
                    <DropdownContent items={items} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-3 lg:gap-6">
            <li className="">
              <div className="group min-[520px]:relative">
                <div className="transition-all ease-in-out duration-300 border rounded-full p-2 md:p-3.5 border-strokeBorder group-hover:bg-backgroundSecondary group-hover:border-backgroundSecondary">
                  <PhoneIcon className="transition-all ease-in-out group-hover:[&_path]:fill-interactiveForegroundInversePrimary h-3 w-3 md:h-4 md:w-4" />
                </div>
                <div className="absolute invisible left-1 min-[520px]:left-auto right-0 pt-2 group-hover:visible">
                  <div className="bg-backgroundTertiary px-10 py-7 rounded-base w-80 shadow-md">Call us anytime at <a className="underline hover:text-textHighlight" href="tel:4155238837">415-523-8837</a></div>
                </div>
              </div>
            </li>
            <li className="hidden md:block">
              <a className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base leading-normal disabled:pointer-events-none disabled:opacity-50 bg-transparent py-5 w-auto font-normal transition-all ease-in-out duration-300 h-12 px-4 text-textPrimary hover:bg-backgroundSecondary group-hover:bg-backgroundSecondary" href="https://better.com/account/sign-in">Sign in</a>
            </li>
            <li className="transition-all duration-500 ease-in block">
              <a className="inline-flex items-center justify-center whitespace-nowrap rounded-full font-bold leading-normal disabled:pointer-events-none bg-green-400 text-black disabled:opacity-50 transition-all ease-in-out duration-200 hover:bg-accentPrimary py-3 w-auto h-8 px-4 md:px-6 md:h-12" href="https://better.com/preapproval/b782bb09-edbe-41ef-8950-efdb455736cd">Continue</a>
            </li>
            <li>
              <button className="xl:hidden flex items-center font-normal transition-all ease-in-out duration-300 text-textPrimary hover:bg-backgroundSecondary group-hover:bg-backgroundSecondary" aria-label="open mobile nav bar" onClick={toggleMobileNav}>
                <MenuIcon />
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;