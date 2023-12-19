import Slider from "react-slick";
import { StyleSlider } from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface TSlide {
  slidesToShow?: number;
  slidesToScroll?: number;
  slidesPerRow?: number;
  rows?: number;
  list: Record<string, any>[];
  dots?: boolean,
  responsive?: any;
  renderItem(item?: any): JSX.Element;
}
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className="arrow-custom arrow-next"
      style={{
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className="arrow-custom arrow-prev"
      style={{ display: "block" }}
      onClick={onClick}
    />
  );
}

function SliderCarousel({
  slidesToShow = 1,
  slidesToScroll = 1,
  slidesPerRow = 1,
  rows = 1,
  list,
  dots=true,
  responsive=[],
  renderItem = () => {
    return <div>1</div>;
  },
}: TSlide) {
  const settings = {
    dots,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    rows,
    initialSlide: 0,
    slidesPerRow,
    nextArrow: <SampleNextArrow className="next-arrow-custom arrow-custom" />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots: any) => (
      <div
        style={{
          borderRadius: "10px",
          position: 'absolute',
          bottom: 0,
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "100%",
          backgroundColor: "#66666685"
        }}
        />
    ),
    responsive
    // [
    //   {
    //     breakpoint: 1248,
    //     settings: {
    //       slidesToShow: 5,
    //       slidesToScroll: 3,
    //       infinite: true,
    //     },
    //   },
  };
  return (
    <StyleSlider>
      <Slider {...settings}>
        {list.map((item, index) => {
          return <div key={`slide-${index}`}>{renderItem(item)}</div>;
        })}
      </Slider>
    </StyleSlider>
  );
}

export default SliderCarousel;
