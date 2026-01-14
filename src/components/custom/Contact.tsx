"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Visit or Contact Us
              </h2>
              <p className="text-muted-foreground text-lg">
                We are here to help. Reach out to schedule an appointment or visit our clinic directly.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 flex items-start gap-4 border-none shadow-md bg-slate-50">
                <div className="p-3 bg-white rounded-full shadow-sm text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Our Location</h3>
                  <p className="text-gray-600">
                    Shop no 1, Ground floor, Sharda Apartment,<br />
                    Sector 13, Plot no 5, near Shilp Chowk,<br />
                    Kharghar, Navi Mumbai, Maharashtra 410210
                  </p>
                </div>
              </Card>

              <Card className="p-6 flex items-start gap-4 border-none shadow-md bg-slate-50">
                <div className="p-3 bg-white rounded-full shadow-sm text-primary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Clinic Hours</h3>
                  <p className="text-gray-600">
                    Mon - Sat: 10:00 AM - 1:00 PM, 6:00 PM - 9:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </Card>

              <div className="h-[300px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative">
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.456676648834!2d73.065!3d19.043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c21c7e937d1f%3A0x6b4478832a76295f!2sKharghar%2C%20Navi%20Mumbai!5e0!3m2!1sen!2sin!4v1614760800000!5m2!1sen!2sin" 
                   width="100%" 
                   height="100%" 
                   style={{border:0}} 
                   allowFullScreen 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   title="Clinic Location"
                 ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-primary/5 p-8 md:p-10 rounded-3xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Appointment</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" className="bg-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" className="bg-white" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" className="bg-white" />
              </div>

               <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+91 98765 43210" className="bg-white" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason">Reason for Visit</Label>
                <Textarea id="reason" placeholder="Briefly describe your symptoms or reason for visit..." className="bg-white h-32" />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg rounded-xl shadow-lg shadow-primary/20">
                Send Message
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                *We will contact you shortly to confirm your slot.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
