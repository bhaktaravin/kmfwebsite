import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import mitulBhaktaImg from '../assets/mitul-bhakta.jpg'
import kailashBhaktaImg from '../assets/kailash-bhakta.jpg'

const memorials = [
  {
    name: 'Mitul Bhakta',
    role: 'Beloved Son & Nephew',
    image: mitulBhaktaImg,
    years: 'February 18, 1991 - August 26, 2014',
    bio: `Mitul was the nephew of Dr. Yogesh Bhakta, founder of KMF. At just 23 years old, 
    his life came to an abrupt end, but his impact continues to resonate through our foundation. 
    Mitul's bright smile, contagious laugh, and great big bear hugs touched everyone he met. 
    As a student at Sacramento State University, he showed immense passion for education and research. 
    Just two days before his passing, Mitul contributed to KMF by creating preliminary logo designs, 
    showing his dedication to our cause. His spirit of kindness and enthusiasm for life continues 
    to inspire our mission.`,
    legacy: `We are heartbroken by the loss of our beloved Mitul, but we stay strong and honor 
    his memory by helping others - a value he cherished deeply.`
  },
  {
    name: 'Kailash "Koki" Bhakta',
    role: 'Foundation Namesake',
    image: kailashBhaktaImg,
    years: 'February 1, 1964 - May 2, 2010',
    bio: `Kailash Bhakta, affectionately known as "Koki", was Mitul's mother and the sister of 
    Dr. Yogesh Bhakta. Even during her four-year battle with cancer, she maintained a vivacious 
    energy that inspired everyone around her. She was vibrant, fun-loving, and known for her 
    exceptional kindness and generosity. Her strong work ethic and zest for life were qualities 
    she passed on to her son Mitul.`,
    legacy: `In January 2014, Kailash Medical Foundation was established in her honor. What began 
    as a tribute to a remarkable mother has now become a living memorial to both mother and son, 
    whose spirits guide our mission of service and compassion.`
  }
]

export default function InMemory() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set());

  useEffect(() => {
    const imagePromises = memorials.map(person => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = person.image;
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, person.image]));
          resolve();
        };
        img.onerror = () => {
          setLoadedImages(prev => new Set([...prev, person.image]));
          resolve();
        };
      });
    });

    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  return (
    <div className="w-full bg-white">
      {/* Header section */}
      <div className="relative bg-gradient-to-b from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold tracking-tight sm:text-6xl"
            >
              In Loving Memory
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-blue-100 max-w-2xl mx-auto"
            >
              Honoring the cherished memories of those who inspired our foundation
            </motion.p>
          </div>
        </div>
      </div>

      {/* Memorial section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {memorials.map((person, index) => (
          <motion.div
            key={person.name}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: loadedImages.has(person.image) ? 1 : 0,
              y: loadedImages.has(person.image) ? 0 : 20
            }}
            transition={{ 
              duration: 0.6,
              delay: imagesLoaded ? index * 0.2 : 0
            }}
            className="mb-24 last:mb-0"
          >
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
              <div className="relative">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-gray-100 shadow-xl">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-cover object-center transition-opacity duration-300"
                    style={{
                      opacity: loadedImages.has(person.image) ? 1 : 0
                    }}
                  />
                  {!loadedImages.has(person.image) && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="lg:pt-8">
                <div className="prose prose-lg prose-blue max-w-none">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-2">
                    {person.name}
                  </h2>
                  <p className="text-xl text-primary font-medium mb-2">{person.role}</p>
                  <p className="text-lg text-gray-500 mb-8">{person.years}</p>
                  
                  <div className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">{person.bio}</p>
                    
                    <div className="bg-blue-50 rounded-lg p-6 mt-8">
                      <p className="text-gray-600 italic mb-0">{person.legacy}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
