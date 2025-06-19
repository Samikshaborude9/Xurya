import {
  ShieldCheck,
  SearchCheck,
  Headset,
  BookOpenCheck,
  Truck,
  BrainCircuit,
} from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      title: "Layered security",
      description:
        "With layered security, we ensure the safety of every unit we provide.",
      icon: <ShieldCheck className="text-green-600 w-8 h-8" />,
    },
    {
      title: "Quality control of each part",
      description:
        "Every unit you receive is checked carefully for every detail.",
      icon: <SearchCheck className="text-green-600 w-8 h-8" />,
    },
    {
      title: "Reliable customer service",
      description:
        "Our customer service is available 24/7 with qualified people.",
      icon: <Headset className="text-green-600 w-8 h-8" />,
    },
    {
      title: "Maintenance manual book",
      description:
        "We provide a guidebook that you can use to ensure maximum care.",
      icon: <BookOpenCheck className="text-green-600 w-8 h-8" />,
    },
    {
      title: "Delivered safely",
      description:
        "We ensure delivery with extra safety and zero delay.",
      icon: <Truck className="text-green-600 w-8 h-8" />,
    },
    {
      title: "Based on artificial intelligence",
      description:
        "Your units are enhanced with the power of AI for extra efficiency.",
      icon: <BrainCircuit className="text-green-600 w-8 h-8" />,
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          We offer quality,
        </h2>
        <p className="text-3xl text-gray-600 mb-10">
          with the best materials and service
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
