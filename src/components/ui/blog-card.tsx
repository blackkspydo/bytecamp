import * as React from "react";
import Image from "next/image";

interface BlogCardProps {
  onButtonClick?: (type: string) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ onButtonClick }) => {
  return (
    <div className="flex w-full max-w-[430px] flex-col">
      <Image
        loading="lazy"
        src="https://fastly.picsum.photos/id/119/3264/2176.jpg?hmac=PYRYBOGQhlUm6wS94EkpN8dTIC7-2GniC3pqOt6CpNU"
        alt="Image Description"
        width={406}
        height={324.8}
        className="aspect-[1.25] w-full rounded-lg"
      />
      <div className="z-10 mt-[-80px] flex w-full max-w-[400px] flex-col justify-center self-center">
        <div className="flex flex-col justify-center rounded-xl bg-black pb-1 pr-1">
          <div className="flex flex-col items-start justify-center rounded-xl bg-white px-5 py-6">
            <div className="flex w-[230px] max-w-full flex-col">
              <div className="flex gap-5 text-center">
                <button className="justify-center whitespace-nowrap rounded-xl bg-primary px-2 py-1 text-sm text-white">
                  Design
                </button>
                <div className="my-auto text-xs text-stone-900">
                  Dec 26, 2003
                </div>
              </div>
              <div className="mt-5 text-lg font-semibold leading-5 text-stone-900">
                Skills that you can learn from business
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
