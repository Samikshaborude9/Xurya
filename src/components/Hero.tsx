import { Button } from "../components/ui/button"
import windmill from "../assets/windmill.png"

export default function Hero() {
  return (
    <section
      className="relative h-[100vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${windmill})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          New Energy <br className="hidden sm:block" /> for the Future
        </h1>
        <p className="mb-6 text-lg md:text-xl">
          Discover our recent project
        </p>
        <Button className="text-black bg-white hover:bg-gray-100 font-medium">See Our Services</Button>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-white">
          <div>
            <p className="text-3xl font-bold">6 mil</p>
            <p className="text-sm">The company’s annual net income</p>
          </div>
          <div>
            <p className="text-3xl font-bold">315</p>
            <p className="text-sm">Projects completed worldwide</p>
          </div>
          <div>
            <p className="text-3xl font-bold">120K</p>
            <p className="text-sm">Employees work in all parts of the world</p>
          </div>
        </div>
      </div>
    </section>
  )
}
