import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import ModInfo from "./ModInfo";
import Slider from "./Slider";
import GameDes from "./GameDes";

const GamesCard = () => {
  return (
    <div className='max-w-[1140px] mx-auto my-10'>
      <Card className='p-0'>
        <CardContent className='p-0'>
          <div className='px-6'>
            <div className='flex  gap-4 mt-10'>
              <img
                src='https://qn-resource.playmods.net/prd/image/4a16586b-2ec5-427f-b39f-16940e7495aa.png-160webp'
                alt='img'
                height={164}
                width={164}
                className='rounded-[16px] h-[164px] w-[164px]'
              />
              <div className='flex items-center justify-between w-full'>
                <div className=' self-start'>
                  <h2 className='text-[20px] font-bold'>
                    Garten of Banban 7 Mod Apk v1.0 (Mod <br />{" "}
                    Menu/Unlock/Latest Version)
                  </h2>
                  <span className='  pt-[10px]'>
                    App Name: Garten of Banban 7{" "}
                  </span>
                  <div className='text-sm text-[#656570] flex gap-4 pt-[10px]'>
                    <span>1.0 for Android </span>
                    <span>Updated on May 11, 2024</span>
                  </div>
                  <div className='flex items-center gap-4 '>
                    <Link
                      href='#'
                      className='bg-[#5342F6] flex items-center gap-3 border-2 border-transparent  justify-center py-3 text-sm text-white px-[40px] rounded-full mt-4'
                    >
                      <img
                        src='https://qn-resource.playmods.net/html/2024061901/static/www/images/icon-detail-dn.png'
                        alt='img'
                        height={25}
                        width={25}
                      />
                      <span>Fast Download</span>
                    </Link>
                    <Link
                      href='#'
                      className=' border-2 border-[#5342F6] flex items-center gap-1 justify-center h-[49px] text-sm text-[#5442F6] px-[40px] rounded-full mt-4 hover:bg-[#5342F6] hover:text-white transition duration-300'
                    >
                      Download APK
                      <span className='text-[12px]'>(573.8MB)</span>
                    </Link>
                  </div>
                  <Link
                    href='#'
                    className='text-[12px] text-[#5642F6] underline mt-[14px] mr-8 flex justify-end '
                  >
                    Play this game on Window PC
                  </Link>
                </div>
                <div className='relative'>
                  <img
                    src='https://qn-resource.playmods.net/html/2024061901/static/www/images/icon-details-score-bg.png'
                    alt='img'
                    height={70}
                    width={75}
                    className='relative'
                  />
                  <span className=' absolute top-[50%] -translate-y-[50%] -translate-x-[50%] left-[50%] text-[20px]'>
                    7.4
                  </span>
                </div>
              </div>
            </div>
          </div>
          <ModInfo />
          <Slider />
          <GameDes />
        </CardContent>
      </Card>
    </div>
  );
};

export default GamesCard;
