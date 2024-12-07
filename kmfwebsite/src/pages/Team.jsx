import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import kmfBhavinImg from '../assets/team/kmf-bhavin-gandhi.jpg'
import diptiImg from '../assets/team/kmf-dipti.jpg'
import shailenMistryImg from '../assets/team/kmf-shailen-mistry.jpg'
import yogeshImg from '../assets/team/kmf-yogesh.jpg'

const team = [
  {
    name: 'Dr. Yogesh Bhakta, MD',
    role: 'Founder & President',
    image: yogeshImg,
    bio: `Yogesh Bhakta, MD founded the Kailash Medical Foundation in memory of his beloved sister, Kailash Bhakta. He is a graduate of UCLA Medical School. He completed his residency in Internal Medicine at UCSF in 1996 and is board certified. Yogesh was inspired to start his own foundation after having gone to medical missions in India and Haiti. He currently practices medicine at Kaiser Permanente in San Leandro, California. He will lead the medical team on the missions.`,
    youtube: 'https://www.youtube.com/@KailashMedicalFoundation'
  },
  {
    name: 'Dr. Bhavin Gandhi',
    role: 'Board Member',
    image: kmfBhavinImg,
    bio: "After graduating from USC dental school in 1996, Bhavin practiced dentistry in multiple dental offices. Bhavin started in Torrance, CA in 1993 and later established his own private office in Cerritos, CA. Bhavin is the lead for the dental part of KMF missions. He has been on over a dozen missions with KMF and other organizations."
  },
  {
    name: 'Dr. Dipti Bhakta',
    role: 'Secretary',
    image: diptiImg,
    bio: "Dr. Dipti Bhakta is the Secretary for Kailash Medical Foundation. She is a graduate of UCLA School of Medicine. She finished her residency in Psychiatry from California Pacific Medical Center in 1997. She currently has a part time practice in Pleasanton, California."
  },
  {
    name: 'Shailen Mistry',
    role: 'Board Member & Technology Advisor',
    image: shailenMistryImg,
    bio: "Shailen Mistry has 15 years of experience building applications as a developer, team lead, engineering manager, architect, director, VP, CTO, and CIO. He has built websites for non-profits including Asha for Education (www.ashanet.org), Valley Care (www.valleyccc.org), Olive View Medical Foundation, and the American Association of Women Dentists. He has worked at American Express and Dun & Bradstreet. He served as the CTO at Spark Networks (LOV), CIO at Gannett (GCI), and is now the CTO at ForwardLine Financial."
  }
]

export default function Team() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set());

  useEffect(() => {
    const imagePromises = team.map(member => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = member.image;
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, member.image]));
          resolve();
        };
        img.onerror = () => {
          setLoadedImages(prev => new Set([...prev, member.image]));
          resolve();
        };
      });
    });

    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6"
            >
              Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl leading-8 text-gray-600 max-w-3xl mx-auto"
            >
              Dedicated to bringing quality healthcare to communities in need through sustainable medical initiatives
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 gap-x-12 gap-y-20 lg:grid-cols-2">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: loadedImages.has(member.image) ? 1 : 0,
                  y: loadedImages.has(member.image) ? 0 : 20
                }}
                transition={{ 
                  duration: 0.6,
                  delay: imagesLoaded ? index * 0.2 : 0
                }}
                className="flex flex-col h-full"
              >
                <div className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-center transition-all duration-300 hover:scale-105"
                    style={{
                      opacity: loadedImages.has(member.image) ? 1 : 0
                    }}
                  />
                  {!loadedImages.has(member.image) && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>
                <div className="mt-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-lg font-medium text-primary">
                        {member.role}
                      </p>
                    </div>
                    {member.youtube && (
                      <a
                        href={member.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                        title="Watch our YouTube channel"
                      >
                        <span className="sr-only">YouTube</span>
                        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
