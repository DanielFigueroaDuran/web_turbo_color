import Slider from "react-slick";

const Banner = () => {
      const setting = {
            dots: false,
            infinte: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            responsive: [
                  {
                        breakpoint: 1023,
                        settings: {
                              slidesToShow: 3,
                              slidesToScroll: 1,
                              infinte: true,
                              dots: false
                        },
                  },
                  {
                        breakpoint: 768,
                        settings: {
                              slidesToShow: 3,
                              slidesToScroll: 1,
                              infinte: true,
                              dots: false
                        },
                  },
                  {
                        breakpoint: 480,
                        settings: {
                              slidesToShow: 3,
                              slidesToScroll: 1,
                              infinte: true,
                              dots: false
                        },
                  },
            ],
      };

      return (
            <div>Banner</div>
      )
}

export default Banner