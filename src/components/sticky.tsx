"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "../app/icons/custome_icons";

export const Sticky = () => {
  const [showFloatingCTA, setShowFloatingCTA] = useState(true);
  const [showStickyCTA, setShowStickyCTA] = useState(true);

  const handleDismissFloatingCTA = () => {
    setShowFloatingCTA(false);
    localStorage.setItem("floatingCTADismissed", "true");
  };

  const handleDismissStickyCTA = () => {
    setShowStickyCTA(false);
    localStorage.setItem("stickyCTADismissed", "true");
  };

  useEffect(() => {
    const floatingDismissed = localStorage.getItem("floatingCTADismissed");
    const stickyDismissed = localStorage.getItem("stickyCTADismissed");

    if (floatingDismissed === "true") setShowFloatingCTA(false);
    if (stickyDismissed === "true") setShowStickyCTA(false);
  }, []);

  return (
    <>
      {/* Floating CTA (Desktop) */}
      {showFloatingCTA && (
        <div className="fixed bottom-6 right-6 z-50 hidden md:block">
          <div className="relative flex items-center max-w-sm shadow-lg bg-white rounded-xl overflow-hidden hover:shadow-xl transition">
            <div className="relative w-20 h-20 shrink-0">
              <img
                src="./Simple, Online, AI-Powered Mortgage _ Better Mortgage_files/floating-image.webp"
                alt="Better Forever"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white font-bold text-xs text-center px-1">
                Better Forever
              </div>
            </div>
            <div className="flex-1 p-4 bg-green-100">
              <p className="text-sm text-green-900 font-medium">
                Save on future home loans with $0 origination fees.
              </p>
              <p className="flex items-center gap-1 mt-1 text-sm font-bold text-green-900">
                See details
                <ArrowRight className="w-4 h-4" />
              </p>
            </div>
            <button
              onClick={handleDismissFloatingCTA}
              className="absolute top-1 right-1 text-gray-400 hover:text-gray-600 text-lg font-bold"
              aria-label="Dismiss"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Floating CTA (Mobile) */}
      {showFloatingCTA && (
        <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white shadow-t rounded-t-2xl p-4">
          <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-2" />
          <div className="relative flex items-center">
            <div className="relative w-20 h-20 shrink-0 mr-3">
              <img
                src="./Simple, Online, AI-Powered Mortgage _ Better Mortgage_files/floating-image.webp"
                alt="Better Forever"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white font-bold text-xs text-center px-1">
                Better Forever
              </div>
            </div>
            <div className="flex-1 bg-green-100 p-3 rounded-xl">
              <p className="text-sm text-green-900 font-medium">
                Save on future home loans with $0 origination fees.
              </p>
              <p className="flex items-center gap-1 mt-1 text-sm font-bold text-green-900">
                See details
                <ArrowRight className="w-4 h-4" />
              </p>
            </div>
            <button
              onClick={handleDismissFloatingCTA}
              className="absolute top-1 right-1 text-gray-400 hover:text-gray-600 text-lg font-bold"
              aria-label="Dismiss"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Sticky CTA (All screens) */}
      {showStickyCTA && (
        <div className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 p-4 md:p-6 z-40 shadow-top">
          <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h5 className="text-lg md:text-xl font-bold text-gray-800">
                Want to continue with your pre-approval?
              </h5>
              <p className="text-sm text-gray-600 mt-1">
                You’ll be able to pick up right where you left off.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleDismissStickyCTA}
                className="px-5 py-2 rounded-full border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 transition font-medium text-sm"
              >
                Not right now
              </button>
              <a
                href="https://better.com/preapproval/b782bb09-edbe-41ef-8950-efdb455736cd"
                className="px-6 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition font-semibold text-sm"
              >
                Yes, continue
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
