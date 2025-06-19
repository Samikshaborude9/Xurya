import { Button } from "../components/ui/button";
import solarMan from "../assets/solar-man.png"; // adjust path if needed

export default function TrustedService() {
  const services = [
    "Solar panels for home",
    "Solar panels for industry",
    "Solar panels for chargers",
    "Wind power generator",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Text & Buttons */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Trusted service, <span className="text-gray-500 font-medium">for your various needs</span>
          </h2>
          <Button className="mt-4 bg-green-600 text-white hover:bg-green-700">Get in touch</Button>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {services.map((service, index) => (
              <div key={index} className="border p-4 rounded-lg hover:shadow-md transition">
                <p className="font-medium text-gray-800 mb-1">{`0${index + 1}`}</p>
                <p className="text-gray-700 text-sm">{service}</p>
                <p className="mt-2 text-sm text-green-600 font-medium cursor-pointer">View Details</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full h-full">
          <img
            src={solarMan}
            alt="Solar Panel Installer"
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
