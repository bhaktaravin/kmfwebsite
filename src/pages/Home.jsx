import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import heroImage from '../assets/hero-bg.jpg'

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden min-h-[calc(100vh-5rem)]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
          <img
            src={heroImage}
            alt="Medical professionals"
            className="h-full w-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
            }}
          />
        </div>
        <div className="relative z-20 min-h-[calc(100vh-5rem)] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Bringing Healthcare to
                <span className="block">Remote Communities</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-100">
                Kailash Medical Foundation is dedicated to providing quality healthcare services
                to underserved communities in remote areas.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/donate"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Donate Now
                </Link>
                <Link
                  to="/about"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="w-full py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Our Impact</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Making Healthcare Accessible
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Through our dedicated efforts and your support, we're bringing quality healthcare to those who need it most.
            </p>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="w-full bg-primary py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl rounded-3xl">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Join Us in Making Healthcare Accessible
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Your support can help us reach more communities and provide essential medical services to those in need.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/donate"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Donate Now
              </Link>
              <Link
                to="/contact"
                className="text-sm font-semibold leading-6 text-white"
              >
                Contact Us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
