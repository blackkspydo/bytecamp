import React from "react";
import { CourseCard } from "./ui/course-card";

const CoursesSection: React.FC = () => {
  return (
    <section className="container relative my-[100px]">
      <h2 className=" mb-5 text-3xl font-bold text-gray-800">Hot Courses</h2>
      <div className="grid grid-cols-1 place-content-center place-items-center gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <CourseCard key={item} />
        ))}
      </div>

    </section>
  );
};

export default CoursesSection;
