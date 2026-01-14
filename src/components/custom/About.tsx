"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
             <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
               <Image 
                 src="/images/hero-bg.png" 
                 alt="Clinic Interior" 
                 fill 
                 className="object-cover hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-bold text-xl">Modern Facilities</p>
                    <p className="text-sm opacity-90">Designed for your comfort</p>
                  </div>
               </div>
             </div>
             <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
               <p className="text-primary font-bold text-4xl mb-2">1000+</p>
               <p className="text-gray-600">Happy patients treated successfully in Kharghar.</p>
             </div>
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Dr. Rupa Jaiswal
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Dr. Rupa Jaiswal is a dedicated General Physician serving the community of Kharghar, Navi Mumbai. With a patient-centric approach, she focuses on diagnosing and treating a wide variety of illnesses with precision and empathy.
                </p>
                <p>
                  Located conveniently in Sector 13 at Sharda Apartment, the clinic offers a welcoming environment where your health concerns are heard and addressed. Dr. Jaiswal believes in holistic care, not just treating symptoms but ensuring overall well-being.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-bold text-gray-900">Personalized Care</h3>
                  <p className="text-sm text-gray-500 mt-1">Tailored treatment plans for every patient.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-bold text-gray-900">Accessible Location</h3>
                  <p className="text-sm text-gray-500 mt-1">Easy to reach in Sector 13, Kharghar.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
