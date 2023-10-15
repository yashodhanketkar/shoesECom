import { ContactUs } from "@/components/contactus";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Footer, Header } from "@/components/interface";
import TestimonialSlider from "@/components/testimonial";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="mb-auto">
        <Hero />
        <Features />
        <TestimonialSlider />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};
