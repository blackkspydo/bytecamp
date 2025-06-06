import BlogSection from "@/components/blog-section";
import { CallbackForm } from "@/components/callback-form";
import { Community } from "@/components/community";
import CoursesSection from "@/components/courses";
import { Hero } from "@/components/hero";
import { LastCta } from "@/components/last-cta";
import Partners from "@/components/partners-section";
import TestimonialSection from "@/components/testimonial-section";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col justify-start ">
      <Hero />
      <Partners />
      <CoursesSection />
      <TestimonialSection />
      <CallbackForm />
      <Community />
      <BlogSection />
    </main>
  );
}
