"use client";
import Image from "next/image";
import AppleWatch from "../../../../../../public/apple-watch.png";

// func: () => void
type TProduct = {
  id: string;
  src?: string;
  name: string;
  price: number;
  quantitySale: number;
};
export default function ProductItem(props: TProduct) {
  const { id, src, name, price, quantitySale } = props;

  const onClickDetail = () => {
    // link to detail page
  };

  return (
    <div
      className="border border-solid border-[0.2px] border-[#b3b3b375] text-[#ccc] text-sm rounded-[3px] cursor-pointer bg-white"
      onClick={() => onClickDetail()}
    >
      <div className="h-[230px]">
        <Image src={AppleWatch} alt="product" style={{height: "100%", width: "100%"}}/>
      </div>
      <div className="py-1 px-[8px] flex flex-col">
        <div className="line-clamp-2 text-base min-h-[48px]">{name}</div>
        <div className="min-h-[16px]"></div>
        <div className="flex justify-between mt-auto">
          <span className="text-base">{price}</span>
          <span className="text-sm">Da ban {quantitySale}</span>
        </div>
      </div>
    </div>
  );
}
