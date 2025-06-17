import { Button } from "../components/ui/button"

export default function Header() {
  return (
    <header className="w-full fixed top-0 z-50 bg-white ">
      <div className=" px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-600">Xurya</div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-green-600">Home</a>
          <a href="#" className="hover:text-green-600">About Us</a>
          <a href="#" className="hover:text-green-600">Features</a>
          <a href="#" className="hover:text-green-600">Services</a>
          <a href="#" className="hover:text-green-600">Contact</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost">Log in</Button>
          <Button>Get in touch</Button>
        </div>
      </div>
    </header>
  )
}
