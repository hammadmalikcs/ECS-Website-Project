'use client';
import { useState } from 'react';
import { IoMailUnreadOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
const countryOptions = [
  { code: 'US', name: 'United States', placeholder: '+1 (555) 123-4567' },
  { code: 'GB', name: 'United Kingdom', placeholder: '+44 7123 456789' },
  { code: 'CA', name: 'Canada', placeholder: '+1 (604) 123-4567' },
  { code: 'AU', name: 'Australia', placeholder: '+61 412 345 678' },
  { code: 'DE', name: 'Germany', placeholder: '+49 1512 3456789' },
  { code: 'FR', name: 'France', placeholder: '+33 6 12 34 56 78' },
  { code: 'IN', name: 'India', placeholder: '+91 98765 43210' },
  { code: 'PK', name: 'Pakistan', placeholder: '+92 300 1234567' },
  { code: 'AE', name: 'UAE', placeholder: '+971 50 123 4567' },
  { code: 'SA', name: 'Saudi Arabia', placeholder: '+966 5 123 4567' },
  { code: 'SG', name: 'Singapore', placeholder: '+65 8123 4567' },
  { code: 'NL', name: 'Netherlands', placeholder: '+31 6 12345678' },
  { code: 'SE', name: 'Sweden', placeholder: '+46 70 123 45 67' },
  { code: 'CH', name: 'Switzerland', placeholder: '+41 79 123 45 67' },
  { code: 'NO', name: 'Norway', placeholder: '+47 912 34 567' }
];

export default function ContactPage() {
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);

  return (
    <div className="min-h-screen bg-[#181818] text-[#FFFFFD]">
      <header className="bg-[#181818] shadow-sm px-6 py-4 flex items-center justify-between border-b border-[#B5B6B6]">
        <div className="text-2xl font-bold text-[#FFFFFD] flex items-center gap-2">
          <div className="w-6 h-6 bg-[#FFFFFD]" />
          <span>Excellence Code Solution</span>
        </div>
        <nav className="space-x-6 text-[#FFFFFD]">
          <a href="#" className="hover:text-[#B5B6B6]">Home</a>
          <a href="#" className="hover:text-[#B5B6B6]">About</a>
          <a href="#" className="hover:text-[#B5B6B6]">Services</a>
          <a href="#" className="hover:text-[#B5B6B6]">Event Gallery</a>
        </nav>
        <button className="border border-[#FFFFFD] text-[#FFFFFD] px-4 py-1 rounded hover:bg-[#B5B6B6] hover:text-[#181818]">
          Request A Proposal
        </button>
      </header>

      <main className="flex flex-col md:flex-row p-10 md:p-20 gap-10">
        {/* Left Section */}
        <div className="md:w-1/3 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-6  mr-21 text-sm leading-relaxed text-[#B5B6B6]">
            Not sure what you need? The team at Excellence Code Solution will be happy to
            listen to you and suggest event ideas you hadn’t considered.
          </p>
          <div className="space-y-4 text-sm">
            <p className="flex items-center gap-2 text-[#FFFFFD]">
              <span className="material-symbols-outlined"><IoMailUnreadOutline /></span>
              excellencecodesolution@gmail.com
            </p>
            <p className="flex items-center gap-2 text-[#FFFFFD]">
              <span className="material-symbols-outlined"><LuPhoneCall /></span>
              (+92) 300-00-00-000
            </p>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="  my-16 mx-0 md:w-[60%] bg-[#B5B6B6] rounded-xl border border-[#B5B6B6]">
          <div className="  mx-1 my-16 mt-8 md:p-10">
            <h3 className=" text-[#181818] text-xl font-semibold mb-6">
              We’d love to hear from you! <br /> Let’s get in touch
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-[#B5B6B6] bg-[#181818] text-[#FFFFFD] rounded p-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="border border-[#B5B6B6] bg-[#181818] text-[#FFFFFD] rounded p-2 w-full"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-[#B5B6B6] bg-[#181818] text-[#FFFFFD] rounded p-2 w-full"
                />
                <div className="flex gap-2">
                  <select
                    value={selectedCountry.code}
                    onChange={(e) =>
                      setSelectedCountry(
                        countryOptions.find((c) => c.code === e.target.value)
                      )
                    }
                    className="border border-[#B5B6B6] bg-[#181818] text-[#FFFFFD] rounded p-2 w-1/3"
                  >
                    {countryOptions.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    placeholder={selectedCountry.placeholder}
                    className="border border-[#B5B6B6] bg-[#181818] text-[#FFFFFD] rounded p-2 w-full"
                  />
                </div>
              </div>
              <input
                type="text"
                placeholder="Address"
                className="border border-[#B5B6B6] bg-[#181818] text-[#FFFFFD] rounded p-2 w-full"
              />
              <textarea
                rows="7"
                placeholder="Your Message"
                className="border border-[#B5B6B6] bg-[#181818] text-[#FFFFFD] rounded p-2 w-full"
              ></textarea>
              <button
                type="submit"
                className="bg-[#FFFFFD] text-[#181818] px-6 py-2 rounded hover:bg-[#131414] hover:text-[#f2f2f2]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}