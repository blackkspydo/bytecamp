import React from "react";
import BlogCard from "./ui/blog-card";

const BlogSection: React.FC = () => {
  return (
    <section className="container relative my-[100px]">
      <h2 className=" mb-5 text-3xl font-bold text-gray-800">
        Read Our Latest Articles
      </h2>
      <div className="grid grid-cols-1 place-content-center md:place-items-center gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <BlogCard key={item} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
