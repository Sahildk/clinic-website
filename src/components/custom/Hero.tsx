"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-[100px] -z-10 hidden lg:block" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Accepting New Patients
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              Compassionate Care, <br />
              <span className="text-primary">Trusted Expertise.</span>
            </h1>
            
            <p className="text-lg text-muted-foreground md:max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Dr. Rupa Jaiswal offers personalized general physician services in the heart of Kharghar. 
              Dedicated to your family's health and well-being.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button size="lg" className="h-12 px-8 rounded-full text-base bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                Visit Clinic
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 rounded-full text-base border-gray-300 hover:bg-gray-50">
                <MapPin className="w-4 h-4 mr-2" />
                View Location
              </Button>
            </div>

            <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-500">
               <div className="flex items-center gap-2">
                 <div className="w-1 h-1 bg-gray-400 rounded-full" />
                 <span>General Checkups</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-1 h-1 bg-gray-400 rounded-full" />
                 <span>Consultations</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-1 h-1 bg-gray-400 rounded-full" />
                 <span>Family Health</span>
               </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative w-full max-w-lg lg:max-w-none"
          >
           <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
             {/* Simple reliable Placeholder image via next/image since I moved files there */}
             <Image 
                src="/images/doctor-portrait.png" 
                alt="Dr. Rupa Jaiswal" 
                fill 
                className="object-cover"
                priority
             />
             
             {/* Floating Info Card */}
             <motion.div 
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 1, duration: 0.5 }}
               className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100"
             >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    15+
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Years Experience</p>
                    <p className="text-xs text-gray-500">Serving Navi Mumbai</p>
                  </div>
                </div>
             </motion.div>
           </div>
           
           {/* Decorative elements */}
           <div className="absolute -top-10 -right-10 w-24 h-24 bg-teal-100 rounded-full blur-3xl -z-10" />
           <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
