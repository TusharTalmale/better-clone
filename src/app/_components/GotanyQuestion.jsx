import React, { useState } from 'react';
// Assuming 'next/image' is available in the environment,
// otherwise, a standard <img> tag would be used.
// For this standalone React component, we'll simulate Image behavior with <img>
// but keep the 'Image' prop for clarity if used in a Next.js environment.

// Mock Image component for standalone display, replace with actual Next.js Image if in Next.js project
const Image = ({ src, alt, width, height, className, style, decoding, 'data-nimg': dataNimg, rel, loading }) => (
    <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={style}
        decoding={decoding}
        data-nimg={dataNimg}
        rel={rel}
        loading={loading}
    />
);


const HomeSection3 = () => {
    // State to manage the active tab
    const [activeTab, setActiveTab] = useState('products'); // Default to 'products'

    // Data for each tab, including specific SVG flags and image sources
    const tabContent = {
        products: [
            {
                title: "Buying your first home with Better",
                description: "",
                imageSrc: "https://media.better.com/better-com/homepage/learning-center/first-home.webp",
                altText: "First Home",
                href: "/content/buying-your-first-home-with-better-mortgage/",
            },
            {
                title: "One Day Mortgage¹",
                description: "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.¹",
                imageSrc: "https://media.better.com/better-com/homepage/learning-center/one-day-mortgage.webp",
                altText: "One day mortgage",
                href: "/b/one-day-mortgage/",
            },
            {
                title: "Better HELOC",
                description: "Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit². Access up to 90% of your home equity as cash in as little as 7 days.3",
                imageSrc: "https://media.better.com/better-com/homepage/learning-center/better-heloc.webp",
                altText: "Better HELOC",
                href: "/b/heloc/",
            },
            {
                title: "Insurance",
                description: "",
                imageSrc: "https://media.better.com/better-com/homepage/learning-center/insurance.webp",
                altText: "Insurance",
                href: "https://www.bettercover.com",
            },
        ],
        calculators: [
            {
                title: "Mortgage calculator",
                description: "",
                imageSrc: "https://media.better.com/better-com/homepage/learning-center/mortgage-calculator.webp", // No direct image, will render SVG
                altText: "Mortgage calculator visualization",
                href: "https://better.com/mortgage-calculator",
            },
            {
                title: "Affordability calculator",
                description: "Got homeownership dreams? Let's put some numbers behind them. Our affordability calculator estimates the maximum home you can afford.",
                imageSrc: "https://media.better.com/better-com/homepage/learning-center/affordability-calculator.webp", 
                altText: "Affordability calculator visualization",
                href: "https://better.com/how-much-house-can-i-afford", 
            },
            {
                title: "HELOC calculator",
                description: "Need cash? Quickly see how much equity you can borrow from your home and what your monthly payments might be.",
                imageSrc: "https://media.better.com/better-com/homepage/learning-center/heloc-calculator.webp", 
                altText: "HELOC calculator visualization",
                href: "https://better.com/heloc-calculator",
            },
            {
                title: "Fixed-rate loan comparison calculator",
                description: "",
                imageSrc: "https://media.better.com/better-com/homepage/learning-center/fixed-rate-calculator.webp", // No direct image, will render SVG
                altText: "Fixed-rate loan comparison calculator visualization",
                href: "https://better.com/loan-comparison-calculator", 
            },
        ],
        guidesFAQs: [
            {
                title: "What is a good debt-to-income ratio for a home loan?",
                description: "",
                imageSrc: "https://media.better.com/better-com/homepage/learning-center/good-dti.webp", // No direct image, will render SVG
                altText: "Debt-to-income ratio visual",
                href: "https://better.com/content/buying-house-without-realtor", 
            },
            {
                title: "Buying a house without realtor",
                description: "Thinking about buying a house without a real estate agent? Read this first.",
                imageSrc: "https://media.better.com/better-com/homepage/learning-center/buy-house-without-realtor.webp", // Example image for 'Buying a house without realtor' if available
                altText: "House without realtor",
                href: "https://better.com/content/buying-house-without-realtor", 
            },
            {
                title: "Timeline for homebuying process",
                description: "Does the process of buying a home seem daunting? Don't stress, we broke it down into 8 easy steps.",
                imageSrc: "https://media.better.com/better-com/homepage/learning-center/loan-timeline.webp", 
                altText: "Timeline for homebuying process visual",
                href: "https://better.com/content/home-buying-process-timeline", // Placeholder
            },
            {
                title: "Conventional loan requirements",
                description: "",
                imageSrc: "https://media.better.com/better-com/homepage/learning-center/conventional-loan.webp",
                altText: "Conventional loan requirements visual",
                href: "https://better.com/content/conventional-loan-requirements", // Placeholder
            },
        ],
    };

    const renderArrowSvg = () => (
        <div className="group">
            <svg
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
                className="transition ease-universal duration-300 fill-transparent hover:fill-[#004733] [&_path]:fill-[#004733] group-hover:[&_path]:fill-white [&_rect]:stroke-[#A4A8A4] group-hover:[&_rect]:stroke-none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="0.5"
                    y="0.843384"
                    width="47"
                    height="47"
                    rx="23.5"
                    stroke="#b1d7b1ff" 
                ></rect>
                <path
                    d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z"
                    fill="#004733" 
                ></path>
            </svg>
        </div>
    );

    const renderVisual = (card) => {
      if (card.imageSrc) {
            return (
                <Image
                    alt={card.altText}
                    rel="preconnect"
                    loading="lazy"
                    width="200"
                    height="200"
                    decoding="async"
                    data-nimg="1"
                    className="w-full rounded-base object-cover h-[160px] md:h-[130px]"
                    style={{ color: "transparent" }}
                    src={card.imageSrc}
                />
            );
        }
        return null; 
    };

    return (
        <section className="section mx-10 w-80% pb-base lg:pb-12 ">
            <div className="m-auto flex max-w-screen-2xl flex-col items-center md:items-start gap-8 px-6 py-20 md:px-10 lg:gap-[60px]">
                <div className="justify-left flex w-full max-w-lg flex-wrap gap-12 lg:gap-6 lg:max-w-none lg:items-end lg:justify-between">
                    <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 text-xl md:text-2xl md:tracking-tight w-full max-w-lg !text-3xl tracking-tight">
                        Got questions <br /> We&apos;ve got answers
                    </h2>
                    <div className="flex gap-3 overflow-x-scroll lg:gap-6 [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0">
                        <button
                            onClick={() => setActiveTab('products')}
                            className={`inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border h-12 px-6 py-3 w-auto ${
                                activeTab === 'products'
                                    ? 'shadow-accentBorderSecondary border-accentBorderSecondary shadow-[0_0_0_4px_inset] text-interactivePrimary'
                                    : 'border-strokeDivider text-interactiveForegroundInversePrimary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary hover:shadow-[0_0_0_4px_inset] hover:text-interactivePrimary'
                            }`}
                        >
                            Our products
                        </button>
                        <button
                            onClick={() => setActiveTab('calculators')}
                            className={`inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border h-12 px-6 py-3 w-auto ${
                                activeTab === 'calculators'
                                    ? 'shadow-accentBorderSecondary border-accentBorderSecondary shadow-[0_0_0_4px_inset] text-interactivePrimary'
                                    : 'border-strokeDivider text-interactiveForegroundInversePrimary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary hover:shadow-[0_0_0_4px_inset] hover:text-interactivePrimary'
                            }`}
                        >
                            Calculators
                        </button>
                        <button
                            onClick={() => setActiveTab('guidesFAQs')}
                            className={`inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border h-12 px-6 py-3 w-auto ${
                                activeTab === 'guidesFAQs'
                                    ? 'shadow-accentBorderSecondary border-accentBorderSecondary shadow-[0_0_0_4px_inset] text-interactivePrimary'
                                    : 'border-strokeDivider text-interactiveForegroundInversePrimary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary hover:shadow-[0_0_0_4px_inset] hover:text-interactivePrimary'
                            }`}
                        >
                            Guides &amp; FAQs
                        </button>
                    </div>
                </div>
              <div className="flex  flex-col gap-8 md:gap-10 lg:flex-row lg:flex-wrap lg:justify-center">
  {tabContent[activeTab].map((card, index) => {
    const isWideCard = (index % 4 === 1 || index % 4 === 2); // Cards at positions 1 and 2 in each group of 4
    const isOneThirdCard = !isWideCard; // Cards at positions 0 and 3 in each group of 4
    
    return (
      <a
        key={index}
        className={`
          flex w-full max-w-lg cursor-pointer flex-col gap-8 rounded-base bg-[#D0EFE0] px-6 py-5
          md:flex-row md:[&>img]:h-[90%] md:[&>img]:max-w-[285px] md:gap-10 md:max-w-full md:justify-between md:px-12 md:py-8
          lg:w-[calc(50%-20px)] lg:flex-1 lg:gap-6 lg:px-12 lg:py-[25px] lg:max-w-none
          ${isOneThirdCard ? 'lg:basis-1/4' : 'lg:basis-2/4'}
          ${isWideCard ? 'lg:flex-row' : 'lg:flex-col'}
          ${index % 4 === 2 ? 'lg:flex-row-reverse' : ''} 
        `}
        href={card.href}
      >
        <div className={`flex flex-col gap-6 ${isWideCard ? 'flex-1' : ''}`}>
          <h4 className="font-bold leading-heading m-0 p-0 w-auto text-xl md:text-2xl md:tracking-normal tracking-normal text-backgroundInversePrimary lg:text-xl">
            {card.title}
          </h4>
          {isWideCard && card.description && (
            <p className="hidden flex-1 md:flex-none text-sm text-backgroundInversePrimary md:block">
              {card.description}
            </p>
          )}
          <div className="flex items-end justify-between">
            {renderArrowSvg()}
          </div>
        </div>
        {renderVisual(card)}
      </a>
    );
  })}
</div>
            </div>
        </section>
    );
};

export default HomeSection3;
