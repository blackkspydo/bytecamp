import { Button } from "@/components/ui/button";
import { Footer } from "./footer";

export function LastCta() {
  return (
    <section className="mt-[100px] mb-0 w-full bg-[#FADFCA] pt-32">
      <div className="flex w-full items-center justify-center  px-10">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h1 className="text-center text-5xl font-bold">
            Unlock Your Potential with Edulink
          </h1>
          <p className="max-w-3xl text-center text-lg">
            Explore boundless opportunities for personal and professional growth
            with Edulink&apos;s diverse courses, tailored to help you reach your
            goals and passions, today!
          </p>
          <Button
            variant="outline"
            className="ticker relative flex h-20 w-full min-w-[300px] max-w-[600px] cursor-pointer items-center overflow-hidden rounded-full border-black bg-transparent  py-10 text-black"
          >
            <div className="button-ticker font-helvetica absolute left-1/2  top-1/2 flex w-full  transform  flex-row items-center gap-20 text-3xl font-light transition-opacity duration-200 ease-out">
              <span>Enroll Now !!!</span>
              <span>Enroll Now !!!</span>
              <span>Enroll Now !!!</span>
              <span>Enroll Now !!!</span>
              <span>Enroll Now !!!</span>
              <span>Enroll Now !!!</span>
              <span>Enroll Now !!!</span>
              <span>Enroll Now !!!</span>
            </div>
          </Button>
        </div>
      </div>
      <Footer />
    </section>
  );
}
