"use client";

import { motion } from "framer-motion";
import { Stethoscope, UserRound, Syringe, HeartPulse } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Services() {
  const services = [
    {
      title: "General Consultation",
      description: "Comprehensive health assessments for all ages, diagnosing and treating common illnesses with care.",
      icon: UserRound,
    },
    {
      title: "Health Checkups",
      description: "Routine physical examinations to monitor your health and prevent future issues.",
      icon: Stethoscope,
    },
    {
      title: "Vaccinations",
      description: "Essential immunizations for children and adults to protect against infectious diseases.",
      icon: Syringe,
    },
    {
      title: "Chronic Care",
      description: "Ongoing management and support for chronic conditions like diabetes and hypertension.",
      icon: HeartPulse,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide a wide range of medical services designed to meet the diverse needs of our patients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-slate-50 hover:bg-white group">
                <CardHeader>
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 text-primary">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
