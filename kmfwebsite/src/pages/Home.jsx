import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { useState } from 'react'

const impactLocations = [
  { 
    name: "Kathmandu, Nepal", 
    coordinates: [85.3240, 27.7172], 
    description: "Main operations center",
    videoUrl: "https://www.youtube.com/embed/YOUR_KATHMANDU_VIDEO_ID",
    details: {
      services: ["Primary Healthcare", "Specialist Consultations", "Medical Training"],
      impact: "Serving over 10,000 patients annually",
      established: "2015",
      highlights: "State-of-the-art medical facilities and training center for healthcare professionals"
    }
  },
  { 
    name: "Pokhara, Nepal", 
    coordinates: [83.9856, 28.2096], 
    description: "Regional medical camp",
    videoUrl: "https://www.youtube.com/embed/YOUR_POKHARA_VIDEO_ID",
    details: {
      services: ["Mobile Clinics", "Emergency Care", "Health Education"],
      impact: "Regular medical camps serving 5,000+ patients",
      established: "2017",
      highlights: "Mobile healthcare units reaching remote villages around Pokhara"
    }
  },
  { 
    name: "Chitwan, Nepal", 
    coordinates: [84.5167, 27.5333], 
    description: "Community health center",
    videoUrl: "https://www.youtube.com/embed/YOUR_CHITWAN_VIDEO_ID",
    details: {
      services: ["Preventive Care", "Maternal Health", "Child Healthcare"],
      impact: "Supporting 3,000+ families",
      established: "2018",
      highlights: "Focus on maternal and child health programs"
    }
  },
  { 
    name: "Dolakha, Nepal", 
    coordinates: [86.1667, 27.7500], 
    description: "Mobile clinic services",
    videoUrl: "https://www.youtube.com/embed/YOUR_DOLAKHA_VIDEO_ID",
    details: {
      services: ["Mobile Health Camps", "Emergency Response", "Health Education"],
      impact: "Reaching 20+ remote villages",
      established: "2019",
      highlights: "Specialized in providing healthcare in earthquake-affected regions"
    }
  },
  { 
    name: "Jumla, Nepal", 
    coordinates: [82.1838, 29.2752], 
    description: "Remote healthcare initiative",
    videoUrl: "https://www.youtube.com/embed/YOUR_JUMLA_VIDEO_ID",
    details: {
      services: ["Primary Care", "Telemedicine", "Emergency Services"],
      impact: "First medical facility in the region, serving 2,000+ residents",
      established: "2020",
      highlights: "Pioneer in bringing telemedicine to remote mountain communities"
    }
  }
];

const upcomingMissions = [
  {
    id: 1,
    title: "Medical Mission to Jumla",
    date: "Summer 2024",
    location: "Jumla, Nepal",
    description: "Our next mission will be to Jumla, Nepal. We will be providing medical care to the people of Jumla and surrounding villages.",
    image: "/images/jumla-mission.jpg"
  },
  {
    id: 2,
    title: "Medical Camp in Dolakha",
    date: "Fall 2024",
    location: "Dolakha, Nepal",
    description: "Planning a comprehensive medical camp in Dolakha region, focusing on primary healthcare and specialist consultations.",
    image: "/images/dolakha-mission.jpg"
  },
  {
    id: 3,
    title: "Kathmandu Valley Initiative",
    date: "Winter 2024",
    location: "Kathmandu Valley, Nepal",
    description: "Expanding our reach in Kathmandu Valley with multiple medical camps and specialist care programs.",
    image: "/images/kathmandu-mission.jpg"
  }
];

const pastMissions = [
  {
    id: 1,
    title: "Jumla Medical Mission",
    date: "Summer 2023",
    location: "Jumla, Nepal",
    impact: "Over 1,000 patients treated",
    image: "/images/jumla-past.jpg",
    videoUrl: "https://www.youtube.com/embed/kZHovVyW1tc"
  },
  {
    id: 2,
    title: "Dolakha Healthcare Initiative",
    date: "Spring 2023",
    location: "Dolakha, Nepal",
    impact: "750+ medical consultations",
    image: "/images/dolakha-past.jpg",
    videoUrl: "https://www.youtube.com/embed/kZHovVyW1tc"
  },
  {
    id: 3,
    title: "Kathmandu Valley Mission",
    date: "Winter 2022",
    location: "Kathmandu Valley, Nepal",
    impact: "1,200+ patients served",
    image: "/images/kathmandu-past.jpg",
    videoUrl: "https://www.youtube.com/embed/kZHovVyW1tc"
  }
];

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [hoveredLocation, setHoveredLocation] = useState(null);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-gray-900 to-blue-900 min-h-screen">
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col">
          {/* Hero Text */}
          <div className="relative z-20 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Bringing Healthcare to Nepal
              </motion.h1>
              <motion.p 
                className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Providing medical care and health education to remote communities across Nepal
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex justify-center space-x-4"
              >
                <Link
                  to="/donate"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Donate Now
                </Link>
                <Link
                  to="/volunteer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Volunteer
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="flex-1 relative px-4 sm:px-6 lg:px-8 pb-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-0"
            >
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                  scale: 3500,
                  center: [84, 28]
                }}
                className="w-full h-full"
              >
                <Geographies geography="/nepal-districts.json">
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#1E293B"
                        stroke="#334155"
                        style={{
                          default: { outline: 'none' },
                          hover: { fill: "#2A4365", outline: 'none' },
                          pressed: { outline: 'none' },
                        }}
                      />
                    ))
                  }
                </Geographies>
                {impactLocations.map((location) => (
                  <Marker 
                    key={location.name} 
                    coordinates={location.coordinates}
                    onClick={() => setSelectedLocation(location)}
                    onMouseEnter={() => setHoveredLocation(location)}
                    onMouseLeave={() => setHoveredLocation(null)}
                  >
                    <g
                      style={{ 
                        cursor: 'pointer',
                        transform: 'translate(-12px, -24px)'
                      }}
                    >
                      <motion.text
                        textAnchor="middle"
                        x="12"
                        y="-10"
                        initial={false}
                        animate={{ 
                          scale: hoveredLocation?.name === location.name ? 1.1 : 1,
                          fill: hoveredLocation?.name === location.name ? "#93C5FD" : "#60A5FA"
                        }}
                        style={{
                          fontFamily: 'system-ui',
                          fontSize: '14px',
                          fontWeight: 500,
                          pointerEvents: 'none'
                        }}
                      >
                        {location.name}
                      </motion.text>
                      <motion.g
                        initial={false}
                        animate={{ 
                          scale: hoveredLocation?.name === location.name ? 1.2 : 1
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 300,
                          damping: 20
                        }}
                      >
                        <circle 
                          cx="12" 
                          cy="10" 
                          r="3" 
                          fill="none"
                          stroke={hoveredLocation?.name === location.name ? "#93C5FD" : "#60A5FA"}
                          strokeWidth="2"
                        />
                        <path 
                          d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" 
                          fill="none"
                          stroke={hoveredLocation?.name === location.name ? "#93C5FD" : "#60A5FA"}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </motion.g>
                    </g>
                  </Marker>
                ))}
              </ComposableMap>
            </motion.div>

            {/* Location Modal */}
            <AnimatePresence>
              {selectedLocation && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black"
                    onClick={() => setSelectedLocation(null)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="fixed inset-x-0 top-1/2 -translate-y-1/2 max-w-4xl mx-auto p-6 z-50"
                  >
                    <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden">
                      <button
                        onClick={() => setSelectedLocation(null)}
                        className="absolute top-4 right-4 text-white hover:text-gray-200 z-10"
                      >
                        <span className="sr-only">Close</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>

                      {/* Video Section */}
                      <div className="relative w-full pt-[56.25%]">
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src={selectedLocation.videoUrl}
                          title={`Video from ${selectedLocation.name}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>

                      {/* Content Section */}
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedLocation.name}</h3>
                        <p className="text-gray-500 mb-6">{selectedLocation.description}</p>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-sm font-medium text-gray-500 mb-2">SERVICES PROVIDED</h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedLocation.details.services.map((service) => (
                                <span
                                  key={service}
                                  className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
                                >
                                  {service}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium text-gray-500 mb-2">IMPACT</h4>
                            <p className="text-gray-900">{selectedLocation.details.impact}</p>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium text-gray-500 mb-2">ESTABLISHED</h4>
                            <p className="text-gray-900">{selectedLocation.details.established}</p>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium text-gray-500 mb-2">HIGHLIGHTS</h4>
                            <p className="text-gray-900">{selectedLocation.details.highlights}</p>
                          </div>
                        </div>

                        <div className="mt-8">
                          <Link
                            to="/donate"
                            className="inline-flex items-center justify-center w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                          >
                            Support This Location
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mission Locations & Upcoming Missions */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission Locations */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Mission Locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastMissions.map((mission) => (
                <motion.div
                  key={mission.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="relative h-48">
                    <img
                      src={mission.image}
                      alt={mission.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{mission.title}</h3>
                    <p className="text-gray-600 mb-2">{mission.location}</p>
                    <p className="text-gray-500 mb-2">{mission.date}</p>
                    <p className="text-blue-600 font-semibold">{mission.impact}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Upcoming Missions */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Upcoming Missions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingMissions.map((mission) => (
                <motion.div
                  key={mission.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="relative h-48">
                    <img
                      src={mission.image}
                      alt={mission.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-sm font-medium text-blue-800">
                        {mission.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{mission.title}</h3>
                    <p className="text-gray-600 mb-2">{mission.location}</p>
                    <p className="text-gray-500 text-sm">{mission.description}</p>
                  </div>
                  <div className="px-6 pb-6">
                    <Link
                      to="/volunteer"
                      className="block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Volunteer for this Mission
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission Overview section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center"
          >
            <div>
              <h2 className="text-base font-semibold leading-7 text-primary">Our Mission</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Empowering Communities Through Healthcare
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                At Kailash Medical Foundation, we are driven by a singular mission: to bring quality healthcare to remote and underserved communities. We believe that access to medical care is a fundamental right, not a privilege.
              </p>
              <div className="mt-10 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Quality Care</h3>
                    <p className="mt-2 text-gray-600">Providing high-standard medical services regardless of location</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Community Focus</h3>
                    <p className="mt-2 text-gray-600">Building lasting relationships with local communities</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Sustainable Impact</h3>
                    <p className="mt-2 text-gray-600">Creating long-term healthcare solutions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                  alt="Medical professionals helping patients"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10 rounded-2xl"></div>
              </div>
            </div>
          </motion.div>
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
    </div>
  )
}
