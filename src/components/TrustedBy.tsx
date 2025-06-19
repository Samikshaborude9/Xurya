export default function TrustedBy() {
  const logos = [
    "/logo1.png",
    "/logo2.png",
    "/logo3.png",
    "/logo4.png",
    "/logo5.png",
  ];

  return (
    <section className="py-20 bg-white h-">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading and Subtext with spacing */}
        <div className="mb-10 flex-auto">
            <div>
          <h2 className="text-4xl  text-gray-800 mb-4 px-6">
            Focusing on quality, 
          </h2>
          <h2  className="text-4xl  text-gray-600 mb-4 " >we maintain customer trust </h2>
          </div>
          <div>

          
          <p className="text-gray-600 mb-4 px-6">
            Trusted by companies around the world . We ensure that every installation we build has strict quality checks. Sustainable solutions for an environmentally friendly and renewable future
          </p></div>
        </div>

        {/* Logos Row - Centered and Circular */}
        <div className="flex flex-wrap justify-center  gap-4 ">
          {logos.map((src, i) => (
            <div
              key={i}
              className="w-20 h-20 rounded-full overflow-hidden border border-gray-300 flex items-center justify-center  transition duration-300 bg-white "
            >
              <img
                src={src}
                alt={`Client ${i + 1}`}
                className="w-full h-full object-contain p-2"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
