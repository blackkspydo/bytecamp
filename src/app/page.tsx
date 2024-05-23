import { CallbackForm } from "@/components/callback-form";
import CoursesSection from "@/components/courses";
import { Hero } from "@/components/hero";
import Partners from "@/components/partners-section";
import TestimonialSection from "@/components/testimonial-section";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col justify-start py-2">
      <Hero />
      <Partners />
      <CoursesSection />
      <TestimonialSection />
      <CallbackForm />
    </main>
  );
}
