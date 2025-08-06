'use client';

export default function ContactPage() {
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
          <p className="mb-6 text-sm leading-relaxed text-[#B5B6B6]">
            Not sure what you need? The team at Excellence Code Solution will be happy to
            listen to you and suggest event ideas you hadn’t considered.
          </p>
          <div className="space-y-4 text-sm">
            <p className="flex items-center gap-2 text-[#FFFFFD]">
              <span className="material-symbols-outlined">mail</span>
              excellencecodesolution@gmail.com
            </p>
            <p className="flex items-center gap-2 text-[#FFFFFD]">
              <span className="material-symbols-outlined">call</span>
              Support: (+21) 123 456 586
            </p>
          </div>
        </div>

        {/* Right Section (Form) */ }
        <div className="md:w-[60%] bg-[#B5B6B6] rounded-xl border border-[#B5B6B6]">
          <div className="p-6 md:p-10" >
            <h3 className="text-xl font-semibold mb-6">
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
                  <select className="border border-[#B5B6B6] bg-[#181818] text-[#FFFFFD] rounded p-2 w-1/3">
                    <option>US</option>
                    <option>PK</option>
                    <option>IN</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
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
                rows="4"
                placeholder="Your Message"
                className="border border-[#B5B6B6] bg-[#181818] text-[#FFFFFD] rounded p-2 w-full"
              ></textarea>
              <button
                type="submit"
                className="bg-[#FFFFFD] text-[#181818] px-6 py-2 rounded hover:bg-[#B5B6B6] hover:text-[#181818]"
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
