"use client";
import Image from "next/image";
import AppleWatch from "../../../../../../public/apple-watch.png";

// func: () => void
type TCategory = {
  id: string;
  src?: string;
  name: string;
};
export default function CategoryItem(props: TCategory) {
  const { id, src, name } = props;
  return (
    <div className="border border-solid border-[0.2px] border-[#b3b3b375] py-1 px-[8px] h-[200px] cursor-pointer">
      <div className="rounded-full flex items-center justify-center">
        <Image
          src={AppleWatch}
          alt="category"
          style={{ width: 100, height: 100 }}
        />
      </div>
      <p className="mt-1 text-center text-base line-clamp-2">{name}</p>
    </div>
  );
}
