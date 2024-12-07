import { motion } from 'framer-motion'

export default function About() {
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
            About Kailash Medical Foundation
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Founded with a mission to bring quality healthcare to underserved communities, 
            Kailash Medical Foundation has been working tirelessly to make a difference 
            in people's lives through medical services and health education.
          </p>
        </motion.div>

        <div className="mt-16 sm:mt-20">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {aboutSections.map((section) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col"
              >
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  {section.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{section.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

const aboutSections = [
  {
    title: 'Our Vision',
    description: 'To create a world where quality healthcare is accessible to everyone, regardless of their socioeconomic status or geographical location.',
  },
  {
    title: 'Our Mission',
    description: 'To provide comprehensive healthcare services and education to underserved communities, empowering them to lead healthier lives.',
  },
  {
    title: 'Our Values',
    description: 'Compassion, Excellence, Integrity, and Dedication guide everything we do as we work to improve healthcare access and outcomes.',
  },
  {
    title: 'Our Impact',
    description: 'Through our programs and initiatives, we have touched thousands of lives, providing essential medical services and health education.',
  },
]
