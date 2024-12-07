import { motion } from 'framer-motion'

export default function Services() {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide a range of medical services and programs designed to meet the 
            healthcare needs of underserved communities.
          </p>
        </motion.div>

        <div className="mt-16 sm:mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl border border-gray-200 p-8"
              >
                <div className="text-lg font-semibold leading-8 text-gray-900">
                  {service.name}
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const services = [
  {
    name: 'Medical Camps',
    description: 'Regular medical camps in remote areas providing basic healthcare services, screenings, and consultations.',
  },
  {
    name: 'Health Education',
    description: 'Community health education programs focusing on preventive care and healthy living practices.',
  },
  {
    name: 'Emergency Care',
    description: 'Emergency medical services and support for critical healthcare needs.',
  },
  {
    name: 'Specialist Consultations',
    description: 'Access to specialist doctors and medical professionals for specific health conditions.',
  },
  {
    name: 'Medicine Distribution',
    description: 'Free or subsidized medicine distribution to those who cannot afford essential medications.',
  },
  {
    name: 'Mobile Clinics',
    description: 'Mobile healthcare units that bring medical services directly to remote communities.',
  },
]
