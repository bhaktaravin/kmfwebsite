import { motion } from 'framer-motion'

export default function Donate() {
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
            Support Our Mission
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Your donation helps us provide essential medical services to those in need.
            Every contribution makes a difference.
          </p>
        </motion.div>

        <div className="mt-16 sm:mt-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl border border-gray-200 p-8"
            >
              <h2 className="text-2xl font-semibold mb-6">Make a Donation</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                    Donation Amount
                  </label>
                  <div className="mt-1 grid grid-cols-3 gap-3">
                    {['$25', '$50', '$100', '$250', '$500', '$1000'].map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      >
                        {amount}
                      </button>
                    ))}
                  </div>
                  <div className="mt-3">
                    <input
                      type="number"
                      name="custom-amount"
                      id="custom-amount"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                      placeholder="Custom Amount"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Donate Now
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="rounded-2xl border border-gray-200 p-8">
                <h2 className="text-2xl font-semibold mb-4">Your Impact</h2>
                <div className="space-y-4">
                  {impacts.map((impact) => (
                    <div key={impact.amount} className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                          <span className="text-xl font-semibold text-white">${impact.amount}</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-base text-gray-600">{impact.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 p-8">
                <h2 className="text-2xl font-semibold mb-4">Other Ways to Help</h2>
                <ul className="space-y-4 text-base text-gray-600">
                  <li>• Volunteer your time and skills</li>
                  <li>• Organize a fundraising event</li>
                  <li>• Spread awareness about our cause</li>
                  <li>• Partner with us</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

const impacts = [
  {
    amount: '25',
    description: 'Provides basic medical supplies for one patient',
  },
  {
    amount: '50',
    description: 'Supports health screening for two individuals',
  },
  {
    amount: '100',
    description: 'Funds a day of mobile clinic operations',
  },
  {
    amount: '250',
    description: 'Enables a specialist consultation for five patients',
  },
]
