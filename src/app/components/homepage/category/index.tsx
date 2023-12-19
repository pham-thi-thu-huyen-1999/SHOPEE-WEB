"use client";
import Image from "next/image";
import CategoryImage from "../../../../../public/shirt.png";
import CategoryItem from "./category-item";
import SliderCarousel from "../../common/slider";

export default function Categories() {
  const categories = [
    { id: 1, name: "Thời Trang Nam", src: "" },
    { id: 1, name: "Thời Trang Nữ", src: "" },
    { id: 1, name: "Điện Thoại & Phụ Kiện", src: "" },
    { id: 1, name: "Mẹ và bé", src: "" },
    { id: 1, name: "Thiết bị điện tử", src: "" },
    { id: 1, name: "Nhà cửa và đời sống", src: "" },
    { id: 1, name: "Máy tính và laptop", src: "" },
    { id: 1, name: "Sắc đẹp", src: "" },
    { id: 1, name: "Máy ảnh và máy quay phim", src: "" },
    { id: 1, name: "Sức khỏe", src: "" },
    { id: 1, name: "Đồng hồ", src: "" },
    { id: 1, name: "Giày dép nữ", src: "" },
    { id: 1, name: "Giày dép nam", src: "" },
    { id: 1, name: "Túi ví nữ", src: "" },
    { id: 1, name: "Thiết bị điện gia dụng", src: "" },
    { id: 1, name: "Phụ kiện và trang sức nữ", src: "" },
    { id: 1, name: "Thể thao và du lịch", src: "" },
    { id: 1, name: "Phụ kiện và trang sức nữ", src: "" },
    { id: 1, name: "Thiết bị điện gia dụng", src: "" },
    { id: 1, name: "Phụ kiện và trang sức nữ", src: "" },
    { id: 1, name: "Thể thao và du lịch", src: "" },
    { id: 1, name: "Phụ kiện và trang sức nữ", src: "" },
  ];
  const responsive = [
    {
      breakpoint: 1248,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ]
  return (
    <div className="bg-white mt-[48px]">
      <h2 className="text-heading-3 p-1.5">DANH MỤC</h2>
      <div>
        <SliderCarousel
          slidesToShow={10}
          slidesPerRow={1}
          list={categories}
          rows={2}
          dots={false}
          responsive={responsive}
          renderItem={(item) => {
            return <CategoryItem id={item.id} name={item.name} />;
          }}
        />
      </div>
    </div>
  );
}
