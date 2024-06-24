import CategoryHeading from "@/components/CategoryHeading";
import Footer from "@/components/Footer";
import Games from "@/constant/Games";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <CategoryHeading />
      <div className='grid grid-cols-2 '>
        {Games.map((games) => {
          return (
            <Link
              href='#'
              className='flex items-center gap-2 p-4  text-[12px] '
              key={games.img}
            >
              <Image
                src={games.img}
                alt='img'
                height={30}
                width={30}
                className='rounded-full '
              />
              <span>{games.title}</span>
            </Link>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
