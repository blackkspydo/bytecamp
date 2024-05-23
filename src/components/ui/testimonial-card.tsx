"use client";
import * as React from "react";
import Image from "next/image";
import { StarIcon } from "lucide-react";
type TestimonialProps = {
  imageSrcs: string[];
  text: string;
  name: string;
  title: string;
  onClick: () => void;
};

export default function Testimonial({
  imageSrcs,
  text,
  name,
  title,
  onClick,
}: Readonly<TestimonialProps>) {
  return (
    <article className="flex min-w-[300px] flex-col max-md:ml-0 max-md:w-full md:min-w-[500px]">
      <section className="flex grow flex-col justify-center max-md:mt-7">
        <button
          onClick={onClick}
          className="flex flex-col justify-center rounded-xl bg-white px-10 py-7 max-md:px-5"
        >
          <div className="flex flex-col">
            <div className="flex gap-2 pr-20 max-md:pr-5">
              {imageSrcs.map((src, index) => (
                <StarIcon className="h-6 w-6 text-yellow-500" key={index} />
              ))}
            </div>
            <div className="mt-6 flex flex-col text-stone-900">
              <p className="text-start text-base">{text}</p>
              <div className="mt-8 flex gap-2.5">
                <Image
                  src="https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg"
                  className="aspect-square h-[40px] w-[40px] shrink-0 rounded-full"
                  alt=""
                  width={150}
                  height={150}
                />
                <div className="my-auto flex flex-col items-start">
                  <p className="text-lg font-semibold leading-5">{name}</p>
                  <p className="mt-2 text-xs">{title}</p>
                </div>
              </div>
            </div>
          </div>
        </button>
      </section>
    </article>
  );
}
