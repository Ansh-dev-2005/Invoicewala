import { Link } from "react-router-dom";
import logo from "../../assets/images/invoicewala-logo-copy.png";
import { FaBars, FaTimes, FaWhatsapp, FaCross, FaXRay, FaFontAwesome, FaShareAltSquare } from "react-icons/fa";
import Xmark_cross from "../../assets/svg/Xmark-solid.svg";
import background from "../../assets/images/background.png";
import gear_logo from "../../assets/svg/gear-solid.svg"
import share_logo from "../../assets/svg/share-from-square-solid.svg"
import whatsapp_logo from "../../assets/svg/whatsapp.svg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    
  };
  return (
    <div className="home">
      {/* Hero section */}
      <div
        className="hero bg-gray-100 text-white flex flex-col  p-7 md:flex-row items-center justify-center md:h-screen p-4 bg-opacity-50 relative"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
        }}
      >
        {/* Left section */}
        <div className="left flex-1 text-center md:text-left relative p-7 z-10">
          {/* Glass morphism effect */}

          {/* Content */}
          <h1 className="font-normal text-4xl md:text-7xl md:font-medium  relative text-center z-10">
            InvoiceWala
          </h1>
          <p className="mt-2 text-center md:mt-5 text-lg z-10">
            Create and send professional invoices in minutes
          </p>
          <Link
            to="/signup"
            className="btn  md:mt-10 z-10 text-center ml-auto mr-auto bg-gray-800 w-40 mt-4 text-white text-xl py-3 px-6 rounded-lg"
            style={{ display: "block", margin: "10 auto" }}
          >
            Get Started
          </Link>
        </div>

        {/* Right section */}
        <div className="right flex-1 mt-5 md:mt-0 hidden md:block">
          <h1 className="text-4xl font-bold text-center mb-4">
            Your Invoice Manager
          </h1>
          {/* Showcase three features with icons */}
          <div className="features  flex justify-center space-x-7 mt-16 items-center">
            <div className="feature flex flex-col items-center mr-8">
              <img
                src={whatsapp_logo}
                alt="feature"
                className="w-12 md:w-16 mb-2"
              />
              <p className="text-sm md:text-lg">Whatsapp Integration</p>
            </div>
            <div className="feature flex flex-col items-center mr-8">
              <img
                src={gear_logo}
                alt="feature"
                className="w-12 md:w-16 mb-2"
              />
              <p className="text-sm md:text-lg">Seamless Integration</p>
            </div>
            <div className="feature flex flex-col items-center">
              <img
                src={share_logo}
                alt="feature"
                className="w-12 md:w-16 mb-2"
              />
              <p className="text-sm md:text-lg">Autonomic Sharing</p>
            </div>
          </div>
          {/* create a button and write request for demo  */}
          <div className="text-center mt-11">
            {" "}
            {/* Added text-center class */}
            <Link
              to="/signup"
              className="btn bg-gray-800 text-white mt-20 ml-auto mr-auto text-center w-40 py-3 px-6 rounded-lg"
              style={{ marginTop: "20px" }} // Added margin-top inline style
            >
              Request For Free Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="features bg-white px-5 py-10 md:py-20">
        <div className="container mx-auto w-full">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Features
          </h2>
          <div className=" mt-5 md:mt-10">
            <Slider {...settings}>
              <div className="feature">
                <img src={Xmark_cross} alt="feature" className="w-12 mx-auto" />
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mt-3 md:mt-5">
                  Easy Invoicing
                </h3>
                <p className="text-gray-600 mt-2 md:mt-3 text-sm md:text-base">
                  Create and send professional invoices in minutes
                </p>
              </div>
              <div className="feature">
                <img src={Xmark_cross} alt="feature" className="w-12 mx-auto" />
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mt-3 md:mt-5">
                  Fast Payments
                </h3>
                <p className="text-gray-600 mt-2 md:mt-3 text-sm md:text-base">
                  Get paid faster with our easy-to-use payment system
                </p>
              </div>
              <div className="feature">
                <img src={Xmark_cross} alt="feature" className="w-12 mx-auto" />
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mt-3 md:mt-5">
                  Secure
                </h3>
                <p className="text-gray-600 mt-2 md:mt-3 text-sm md:text-base">
                  Your data is safe with us. We use 256-bit encryption
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* CTA section */}
      <div className="cta bg-gray-800 py-10 md:py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to get started?
          </h2>
          <p className="text-gray-300 mt-2 md:mt-3">
            Create an account and start sending invoices today
          </p>
          <Link to="/signup" className="btn mt-2 md:mt-5">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
