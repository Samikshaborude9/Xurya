export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              It’s time to support zero pollution, <br /> with renewable resources
            </h3>
            <ul className="mt-6 space-y-2 text-sm text-green-400">
              <li>✅ Experienced for more than 10 years</li>
              <li>✅ Support for the latest technology</li>
            </ul>
            <button className="mt-6 px-5 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition">
              Get in touch →
            </button>
          </div>

          <div className="flex flex-col justify-between text-sm text-gray-400">
            <p>
              By increasing the effectiveness and efficiency of electricity use, the use of
              renewable resources is very profitable for all industrial services.
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
          <div className="flex items-center gap-2">
            <span className="text-green-400 font-semibold">⚡ Xurya</span>
            <span>© 2024 Xurya Inc. All rights reserved</span>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              Home
            </a>
            <a href="#" className="hover:text-white transition">
              About Us
            </a>
            <a href="#" className="hover:text-white transition">
              Features
            </a>
            <a href="#" className="hover:text-white transition">
              Services
            </a>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
