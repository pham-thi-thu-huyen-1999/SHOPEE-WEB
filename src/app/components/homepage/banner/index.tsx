import Image from "next/image";
import { StyleBannerWrapper } from "./style";
import Slider from "./../../common/slider";
import Banner1 from "../../../../../public/banner1.jpg";
import Banner2 from "../../../../../public/banner2.png";
import Banner3 from "../../../../../public/banner3.jpg";
export default function Banner() {
  const banners = [
    {
      id: 1,
    },
    {
      id: 2,
    }, {
      id: 3,
    },
    {
      id: 2,
    },
  ];
  return (
    <StyleBannerWrapper className="flex">
      <div className="w-[70%]">
        <Slider
          slidesToShow={1}
          slidesToScroll={2}
          list={banners}
          renderItem={(item) => {
            return (
              <Image src={Banner1} alt="banner" style={{ width: "100%", height: "100%" }} />
            );
          }}
        />
      </div>
      <div className="flex flex-col ml-[5px] w-[30%] justify-between gap-y-[5px]">
        <Image
          src={Banner2}
          alt="banner"
          style={{ height: "100%", objectFit: "cover" }}
        />
        <Image
          src={Banner3}
          alt="banner"
          style={{ height: "100%", objectFit: "cover" }}
        />
      </div>
    </StyleBannerWrapper>
  );
}
