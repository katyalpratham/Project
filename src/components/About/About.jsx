import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          Zidio development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                      ZIDIO brings your ideas to life by transforming them into innovative software solutions , We are a startup company growing faster in the FinTech sector with a solid track record, and enduring integration background in enterprise-grade projects to our client's disposal.
                      </p>
                      <p className="mt-4 text-gray-600">
                      Experience unparalleled support anytime, anywhere. Our commitment to providing seamless assistance ensures that you're never alone on your journey. Whether it's day or night, our dedicated support team is ready to assist.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}
