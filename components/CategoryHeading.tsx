import { ChevronRight } from "lucide-react";

const CategoryHeading = () => {
  return (
    <div className='flex justify-between items-center px-4 h-[56px] bg-[#fbfbfb]'>
      <div className='flex items-center  text-[18px]'>
        <span className='cursor-pointer p-4 '>Games</span>
        <span className='cursor-pointer p-4 '>Apps</span>
      </div>
      <span>
        <ChevronRight />
      </span>
    </div>
  );
};

export default CategoryHeading;
