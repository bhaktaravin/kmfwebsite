import { motion } from 'framer-motion'

const team = [
  {
    name: 'Dr. Anil Shrestha',
    role: 'Founder',
  },
  {
    name: 'Dr. Khem Karki',
    role: 'Board Member',
  },
  {
    name: 'Dr. Roshana Shrestha',
    role: 'Board Member',
  },
  {
    name: 'Dr. Sanjay Paudel',
    role: 'Board Member',
  },
  {
    name: 'Dr. Shyam Thapa',
    role: 'Board Member',
  },
  {
    name: 'Dr. Sunil Sharma',
    role: 'Board Member',
  },
]

export default function Team() {
  return (
    <div className="w-full bg-white">
      {/* Header section */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Our Team
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Team grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg 
                    className="h-20 w-20 text-gray-300" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900">{member.name}</h3>
                <p className="text-base leading-7 text-primary font-medium">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
