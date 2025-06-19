import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../components/ui/carousel";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Anaya Sharma",
      role: "Homeowner",
      quote:
        "The solar panels installed by the team are top-notch. I've saved so much on electricity!",
    },
    {
      name: "Ravi Patel",
      role: "Industry Manager",
      quote:
        "Efficient service and outstanding support. A reliable clean energy partner.",
    },
    {
      name: "Divya Iyer",
      role: "EV Startup Founder",
      quote:
        "We power our charging stations with their panels — totally worth it!",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          What Our Customers Say
        </h2>

        <div className="relative flex items-center justify-center">
          <Carousel className="w-full">
            {/* Arrows must be placed inside Carousel to access context */}
            <CarouselPrevious className="absolute -left-10 top-1/2 -translate-y-1/2 z-10" />
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="p-4">
                  <div className="bg-white p-6 rounded-lg shadow-md text-left h-full">
                    <p className="text-gray-700 italic mb-4">"{t.quote}"</p>
                    <h4 className="text-green-600 font-semibold">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="absolute -right-10 top-1/2 -translate-y-1/2 z-10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

