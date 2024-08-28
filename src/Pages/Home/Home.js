import { Link } from "react-router-dom";
import logo from "../../assets/images/invoicewala-logo-copy.png";
import {
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaCross,
  FaXRay,
  FaFontAwesome,
  FaShareAltSquare,
} from "react-icons/fa";
import Xmark_cross from "../../assets/svg/Xmark-solid.svg";
import background from "../../assets/images/zero-waste-shop-merchant-sells-lentils.jpg";
import gear_logo from "../../assets/svg/gear-solid.svg";
import share_logo from "../../assets/svg/share-from-square-solid.svg";
import whatsapp_logo from "../../assets/svg/whatsapp.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import secure from "../../assets/images/New folder/Secure.jpg";
import invoice from "../../assets/images/New folder/billing.png";
import payment from "../../assets/images/New folder/payment.jpg";
import { useEffect, useState } from "react";
import whatsapp from "../../assets/images/New folder/whatsapp.jpg";
import integrate from "../../assets/images/New folder/integrate.png";
import integrate1 from "../../assets/images/New folder/integrate1.png";
import paper from "../../assets/images/New folder/save_paper.png";
import sms from "../../assets/images/New folder/sms.jpg";
import email from "../../assets/images/New folder/email.jpg";
import save from "../../assets/images/New folder/save.png";
import secure1 from "../../assets/images/New folder/secure_1.png";
import invoice1 from "../../assets/images/New folder/invoice.png";
import dashboard from "../../assets/images/New folder/dashobard.png";
import ai from "../../assets/images/New folder/ai.jpg";
import "animate.css/animate.min.css";
import ScrollMagic from "scrollmagic";

import { images } from "../../assets/images/new1";

const Home = () => {
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const timelineElements = document.querySelectorAll(".feature_single");
    const windowBottom = window.innerHeight;

    function checkTimeline() {
      timelineElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowBottom) {
          element.classList.add("show");
        } else {
          element.classList.remove("show");
        }
      });
    }

    window.addEventListener("scroll", checkTimeline);
    checkTimeline(); // Check initially on mount

    return () => window.removeEventListener("scroll", checkTimeline);
  }, []); // Empty dependency array to run only once on mount

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(true); // Adjust the threshold as needed
    };

    handleResize(); // Check on initial render

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
  const setting1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 11,
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
  // const controller = new ScrollMagic.Controller();
  // function initScrollMagic() {
  //   // Check if it's not a small device
  //   document.querySelectorAll(".feature_single").forEach(function (feature) {
  //     new ScrollMagic.Scene({
  //       triggerElement: feature,
  //       triggerHook: 0.8, // Adjust as needed
  //       offset: 100, // Adjust as needed
  //       reverse: false, // Animation only happens once
  //     })
  //       .setClassToggle(feature, "visible") // Add a class to show the feature
  //       .addIndicators() // For debugging purposes
  //       .addTo(controller);
  //   });
  // }

  // // Reinitialize ScrollMagic when the page is reloaded
  // window.addEventListener("beforeunload", function () {
  //   controller.destroy(); // Destroy the existing controller
  // });

  // // Reinitialize ScrollMagic when the page is reloaded
  // window.addEventListener("load", function () {
  //   initScrollMagic(); // Reinitialize ScrollMagic
  // });
  // window.addEventListener("load", function () {
  //   initScrollMagic(); // Reinitialize ScrollMagic
  // });

  return (
    <div className="home">
      {/* Hero section */}
      <div
        className="hero bg-gray-100 text-white flex flex-col p-7 md:flex-row items-center justify-center md:h-screen p-4 bg-opacity-50 relative"
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
            Your Invoice Manager
          </h1>
          <p className="mt-4 text-center md:mt-6 text-lg z-10">
            Paper-less Multi channel Invoice sharing Platform{" "}
          </p>
          <Link
            to="http://invoicewala.in/register"
            className="btn  md:mt-10 z-10 text-center ml-auto mr-auto bg-gray-800 w-40 mt-4 text-white text-xl py-3 px-6 rounded-lg"
            style={{ display: "block", margin: "10 auto" }}
          >
            Get Started
          </Link>
        </div>

        {/* Right section */}
        <div className="right flex-1 mt-5 md:mt-0 hidden">
          <h1 className="text-4xl font-semibold text-center mb-4">
            Your Invoice Manager
          </h1>
          {/* Showcase three features with icons */}
          <div className="features  flex justify-center space-x-7 mt-16 items-center">
            <div className="feature flex flex-col items-center">
              {/* enclose logo in a cirular div */}

              <img
                src={whatsapp_logo}
                alt="feature"
                className="w-12 md:w-16 mb-2"
              />

              <p className="text-sm text-center md:text-lg">
                Whatsapp Integration
              </p>
            </div>
            <div className="feature flex flex-col items-center ">
              <img
                src={gear_logo}
                alt="feature"
                className="w-12 md:w-16 mb-2"
              />
              <p className="text-sm text-center md:text-lg">
                Seamless Integration
              </p>
            </div>
            <div className="feature flex flex-col items-center">
              <img
                src={share_logo}
                alt="feature"
                className="w-12 md:w-16 mb-2"
              />
              <p className="text-sm text-center md:text-lg">
                Autonomic Sharing
              </p>
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
      {/* What is Invoice Wala Section */}
      <div className="what bg-gray-900 px-5 py-10 md:py-20">
        <div className="container mx-auto w-full">
          <h2 className="text-3xl font-bold text-white text-center">
            What is InvoiceWala?
          </h2>
          <p className="text-white mt-2 md:mt-6 md:mx-24  text-center">
            In a world of digital transformation, businesses are constantly
            seeking ways to streamline their operations, enhance customer
            engagement, and simplify their billing processes. Invoicewala, a
            game-changing solution that not only revolutionizes the way invoices
            are shared but also offers a multitude of features to enhance your
            business operations. Let’s dive into the exciting world of
            InvoiceWala and discover how it can benefit your organization.
          </p>
          {/* <div className="features mt-5 md:mt-10 flex flex-wrap justify-center">
            <div className="feature bg-white text-gray-800 p-5 rounded-lg w-64 mx-5 my-5">
              <img src={whatsapp} alt="feature" className="w-20 mx-auto" />
              <h3 className="text-lg font-bold mt-3">Easy Invoicing</h3>
              <p className="mt-2 text-sm">
                Create and send professional invoices in minutes
              </p>
            </div>
            <div className="feature bg-white text-gray-800 p-5 rounded-lg w-64 mx-5 my-5">
              <img src={payment} alt="feature" className="w-20 mx-auto" />
              <h3 className="text-lg font-bold mt-3">Fast Payments</h3>
              <p className="mt-2 text-sm">
                Get paid faster with our easy-to-use payment system
              </p>
            </div>
            <div className="feature bg-white text-gray-800 p-5 rounded-lg w-64 mx-5 my-5">
              <img src={secure} alt="feature" className="w-20 mx-auto" />
              <h3 className="text-lg font-bold mt-3">Secure</h3>
              <p className="mt-2 text-sm">
                Your data is safe with us. We use 256-bit encryption
              </p>
            </div>
          </div> */}
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
                <img src={invoice} alt="feature" className="w-20 mx-auto" />
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mt-3 md:mt-5">
                  Paperless Invoice Sharing
                </h3>
                <p className="text-gray-600 mt-2 md:mt-3 text-sm md:text-base">
                  InvoiceWala offers seamless invoice delivery to your
                  customers' mobile devices with just one click. No more logging
                  into multiple platforms; with InvoiceWala, it's all taken care
                  of.
                </p>
              </div>
              <div className="feature">
                <img src={integrate1} alt="feature" className="w-20 mx-auto" />
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mt-3 md:mt-5">
                  Automated Invoice Sharing
                </h3>
                <p className="text-gray-600 mt-2 md:mt-3 text-sm md:text-base">
                  Integrate InvoiceWala with your billing software for automatic
                  invoice distribution. Say goodbye to manual steps and enjoy a
                  smooth, efficient process.{" "}
                </p>
              </div>
              <div className="feature">
                <img
                  src={whatsapp}
                  alt="feature"
                  className=" w-20 mx-auto my-auto"
                />
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mt-3 md:mt-5">
                  Versatile Communication Channels
                </h3>
                <p className="text-gray-600 mt-2 md:mt-3 text-sm md:text-base">
                  Expand your reach beyond WhatsApp with SMS invoice delivery.
                  InvoiceWala seamlessly integrates with various software
                  solutions for enhanced flexibility.{" "}
                </p>
              </div>
              <div className="feature">
                <img src={save} alt="feature" className="w-20 mx-auto" />
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mt-3 md:mt-5">
                  Transparent Pricing
                </h3>
                <p className="text-gray-600 mt-2 md:mt-3 text-sm md:text-base">
                  Pay only for what you use with our flexible pricing model. No
                  hidden fees, just transparent billing.
                </p>
              </div>
              <div className="feature">
                <img src={payment} alt="feature" className="w-20 mx-auto" />
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mt-3 md:mt-5">
                  Secure and Confidential
                </h3>
                <p className="text-gray-600 mt-2 md:mt-3 text-sm md:text-base">
                  Your data is safe with us. We use 256-bit encryption to ensure
                  your information is secure and confidential.
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* Discover Superior Solutions, Develop Exceptional Products. section */}
      <div className="bg-gray-100 text-gray-700 px-8 py-10 md:py-20">
        <div className="container mx-auto w-full text-center">
          <h2 className="text-3xl font-bold">Our Solutions</h2>
          <p className="mt-2 md:mt-3">
            Innovative & Benchmarking Solution for Digital Invoicing
          </p>
          {/* show features in card */}
          {/* with logo and title and its details */}
          <div className="features mt-5 md:mt-10 md:flex md:flex-wrap justify-center">
            {/* {isSmallDevice && (
              <Slider {...setting1}>
                <div className="feature bg-white text-gray-800 p-5 rounded-lg w-16  my-12 ">
                  <img
                    src={images.pic_whatsapp}
                    alt="feature"
                    className="w-12 mx-auto"
                  />
                  <h3 className="text-lg font-bold mt-3">A Game-Changer</h3>
                  <p className="mt-2 text-sm">
                    Boost efficiency with our revolutionary ‘WhatsApp Invoice
                    Sending’ feature. With a simple click, your invoices reach
                    your client’s WhatsApp, offering a seamless user experience
                    and quickening the payment process.{" "}
                  </p>
                </div>
                <div className="feature bg-white text-gray-800 p-5 rounded-lg w-64  my-12">
                  <img
                    src={images.pic_integration}
                    alt="feature"
                    className="w-12 mx-auto"
                  />
                  <h3 className="text-lg font-bold mt-3">
                    Autonomous Invoicing
                  </h3>
                  <p className="mt-2 text-sm">
                    Eliminate manual steps and time-consuming tasks. Our
                    integration with abcdef guarantees your invoices are
                    automatically transmitted, making the ordeal of opening
                    WhatsApp’s web or desktop versions a thing of the past.{" "}
                  </p>
                </div>
                <div className="feature bg-white text-gray-800 p-5 rounded-lg w-64  my-12">
                  <img
                    src={images.pic_paper}
                    alt="feature"
                    className="w-12 mx-auto"
                  />
                  <h3 className="text-lg font-bold mt-3">Say No to Print</h3>
                  <p className="mt-2 text-sm">
                    If you’re exploring an ‘Alternative to Invoice Printing’,
                    our platform is your answer. Transmitting invoices becomes
                    as intuitive as printing one, without the paper waste.
                  </p>
                </div>
                <div className="feature bg-white text-gray-800 p-5 rounded-lg w-64 my-12">
                  <img
                    src={images.pic_sms}
                    alt="feature"
                    className="w-12 mx-auto"
                  />
                  <h3 className="text-lg font-bold mt-3">
                    Send Invoice through SMS
                  </h3>
                  <p className="mt-2 text-sm">
                    Beyond WhatsApp, we understand the power of SMS in reaching
                    customers. Integrate our ‘Send Invoice through SMS’ feature
                    to tap into another efficient channel for connecting with
                    your clients.{" "}
                  </p>
                </div>
                <div className="feature bg-white text-gray-800 p-5 rounded-lg w-64  my-12">
                  <img
                    src={images.pic_api}
                    alt="feature"
                    className="w-12 mx-auto"
                  />
                  <h3 className="text-lg font-bold mt-3">
                    Swift and Simple Software Integration
                  </h3>
                  <p className="mt-2 text-sm">
                    From ERPs to custom solutions, easily blend our WhatsApp
                    invoicing feature into your existing software. Elevate your
                    software’s potential, making ‘Bill to WhatsApp’ a seamless
                    experience for your clients.{" "}
                  </p>
                </div>
                <div className="feature bg-white text-gray-800 p-5 rounded-lg w-64 my-12">
                  <img
                    src={images.pic_email}
                    alt="feature"
                    className="w-12 mx-auto"
                  />
                  <h3 className="text-lg font-bold mt-3">
                    Share Invoice on Email
                  </h3>
                  <p className="mt-2 text-sm">
                    Our platform is designed to offer a variety of channels for
                    sharing invoices. With our ‘Share Invoice on Email’ feature,
                    your clients can receive invoices directly in their inbox.{" "}
                  </p>
                </div>

                <div className="feature bg-white text-gray-800 p-5 rounded-lg w-64  my-12">
                  <img
                    src={images.pic_money}
                    alt="feature"
                    className="w-12 mx-auto"
                  />
                  <h3 className="text-lg font-bold mt-3">
                    Zero-Cost Start and Flexible Billing
                  </h3>
                  <p className="mt-2 text-sm">
                    Begin your journey with no implementation fees. Our flexible
                    pay-as-you-go model ensures you pay only for what you use.{" "}
                  </p>
                </div>
                <div className="feature bg-white text-gray-800 p-5 rounded-lg w-64 my-12">
                  <img
                    src={images.pic_secure}
                    alt="feature"
                    className="w-12 mx-auto"
                  />
                  <h3 className="text-lg font-bold mt-3">
                    Unparalleled Security in Invoice Sharing
                  </h3>
                  <p className="mt-2 text-sm">
                    We prioritize the safeguarding of your data. Our secure
                    login ensures every ‘Invoice sharing without Printing’ is
                    safe and confidential.{" "}
                  </p>
                </div>
                <div className="feature bg-white text-gray-800 p-5 rounded-lg w-64  my-12">
                  <img
                    src={images.pic_windows}
                    alt="feature"
                    className="w-12 mx-auto"
                  />
                  <h3 className="text-lg font-bold mt-3">
                    Adaptable Application for All
                  </h3>
                  <p className="mt-2 text-sm">
                    Stay online and connected with our versatile, Windows-based
                    application, designed for businesses seeking an efficient
                    invoencing solution.{" "}
                  </p>
                </div>
                <div className="feature bg-white text-gray-800 p-5 rounded-lg w-64  my-12">
                  <img
                    src={images.pic_dashboard}
                    alt="feature"
                    className="w-12 mx-auto"
                  />
                  <h3 className="text-lg font-bold mt-3">
                    Holistic View through Web Dashboard
                  </h3>
                  <p className="mt-2 text-sm">
                    From usage metrics to tracking, our web-based dashboard
                    offers a comprehensive view of your operations, making
                    invoice management a breeze.{" "}
                  </p>
                </div>
                <div className="feature bg-white text-gray-800 p-5 rounded-lg w-64 my-12">
                  <img src={images.pic_ai} alt="feature" className="w-12 mx-auto" />
                  <h3 className="text-lg font-bold mt-3">
                    AI-Enhanced Precision in Mobile Number Identification
                  </h3>
                  <p className="mt-2 text-sm">
                    Our futuristic AI-driven feature ensures invoices are
                    accurately delivered, championing efficiency in every ‘Bill
                    to WhatsApp’ endeavor.{" "}
                  </p>
                </div>
              </Slider>
            )} */}

            <>
              <div className="feature_container hidden ">
                <div className="feature_singles container py-5">
                  <div className="row align-items-center flex">
                    <div className="col-md-6">
                      <img
                        src={images.pic_whatsapp}
                        alt="feature"
                        className="img-fluid rounded feature_logo mx-auto"
                      />
                    </div>
                    <div className="col-md-6">
                      <h3 className="text-lg text text-left font-bold mt-3">
                        A Game-Changer
                      </h3>
                      <p className=" pt-2 mt-4 text-gray-700 text-left font-medium  ">
                        Boost efficiency with our revolutionary ‘WhatsApp
                        Invoice Sending’ feature. With a simple click or without
                        click, your invoices will reach to your customers'
                        WhatsApp to provide a seamless user experience.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="feature_singles container py-5">
                  <div className="row align-items-center flex">
                    <div className="col-md-6  md:order-last">
                      <img
                        src={images.pic_integration}
                        alt="feature"
                        className="w-12 feature_logo mx-auto"
                      />
                    </div>
                    <div className="col-md-6  md:order-first">
                      <h3 className="text-lg font-bold text-left mt-3">
                        Automatic Invoicing
                      </h3>
                      <p className="mt-2 pt-2 text-left text-sm font-medium">
                        Eliminate manual steps and time-consuming tasks. Our
                        solution guarantees your invoices are automatically
                        transmitted to customer. No need of opening WhatsApp’s
                        web or desktop versions or to save and mail
                        to share invoice.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="feature_singles container py-5 ">
                  <div className="row align-items-center flex">
                    <div className="col-md-6">
                      <img
                        src={images.pic_paper}
                        alt="feature"
                        className="w-12 feature_logo mx-auto"
                      />
                    </div>
                    <div className="col-md-6">
                      <h3 className="text-lg text-left font-bold mt-3">
                        Eco-friendly Invoicing
                      </h3>
                      <p className="mt-2 pt-2 text-left text-sm font-medium">
                        Our solution is an ‘Alternative to Invoice Printing’. It
                        is an eco friendly solution which transmits invoices
                        without the wasting paper. We take care of our earth.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="feature_singles container py-5">
                  <div className="row align-items-center flex">
                    <div className="col-md-6  md:order-last">
                      <img
                        src={images.pic_sms}
                        alt="feature"
                        className="w-12 feature_logo mx-auto"
                      />
                    </div>
                    <div className="col-md-6  md:order-first">
                      <h3 className="text-lg text-left font-bold mt-3">
                        Send Invoice through SMS
                      </h3>
                      <p className="mt-2 pt-2 text-left text-sm font-medium">
                        Beyond WhatsApp, we understand the power of SMS in
                        reaching customers. Integrate our ‘Send Invoice through
                        SMS’ feature to tap into another efficient channel for
                        connecting with your clients.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="feature_singles container py-5">
                  <div className="row align-items-center flex">
                    <div className="col-md-6">
                      <img
                        src={images.pic_api}
                        alt="feature"
                        className="w-12 feature_logo mx-auto"
                      />
                    </div>
                    <div className="col-md-6">
                      <h3 className="text-lg text-left font-bold mt-3">
                        Swift and Simple Software Integration
                      </h3>
                      <p className="mt-2 pt-2 text-left text-sm font-medium">
                        From ERPs to custom solutions, easily blend our WhatsApp
                        invoicing feature into your existing software. Elevate
                        your software’s potential, making ‘Bill to WhatsApp’ a
                        seamless experience for your clients.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="feature_singles container py-5">
                  <div className="row align-items-center flex">
                    <div className="col-md-6  md:order-last">
                      <img
                        src={images.pic_email}
                        alt="feature"
                        className="w-12 feature_logo mx-auto"
                      />
                    </div>
                    <div className="col-md-6  md:order-first">
                      <h3 className="text-lg text-left font-bold mt-3">
                        Share Invoice on Email
                      </h3>
                      <p className="mt-2 pt-2 text-left text-sm font-medium">
                        Our platform is designed to offer a variety of channels
                        for sharing invoices. With our ‘Share Invoice on Email’
                        feature, your clients can receive invoices directly in
                        their inbox.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="feature_singles container py-5">
                  <div className="row align-items-center flex">
                    <div className="col-md-6">
                      <img
                        src={images.pic_money}
                        alt="feature"
                        className="w-12 feature_logo mx-auto"
                      />
                    </div>
                    <div className="col-md-6">
                      <h3 className="text-lg pt-2 text-left font-bold mt-3">
                        Flexible & Transparent Billing
                      </h3>
                      <p className="mt-2 text-left text-sm font-medium">
                        Our solution is design to cater for all type of
                        enterprises with flexible fees structure. You can begin
                        your journey with us with a small implementation fees.
                        Our flexible pay-as-you-go model ensures you pay only
                        for what you use.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="feature_singles container py-5">
                  <div className="row align-items-center flex">
                    <div className="col-md-6  md:order-last">
                      <img
                        src={images.pic_secure}
                        alt="feature"
                        className="w-12 feature_logo mx-auto"
                      />
                    </div>
                    <div className="col-md-6  md:order-first">
                      <h3 className="text-lg text-left font-bold mt-3">
                        Unparalleled Security in Invoice Sharing
                      </h3>
                      <p className="mt-2 pt-2 text-left text-sm font-medium">
                        We prioritize the safeguarding of your data. Our secure
                        login ensures every ‘Invoice sharing without Printing’
                        is safe and confidential.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="feature_singles container py-5">
                  <div className="row align-items-center flex">
                    <div className="col-md-6">
                      <img
                        src={images.pic_windows}
                        alt="feature"
                        className="w-12 feature_logo mx-auto"
                      />
                    </div>
                    <div className="col-md-6">
                      <h3 className="text-lg text-left font-bold mt-3">
                        Adaptable Application for All
                      </h3>
                      <p className="mt-2 text-left pt-2 text-sm font-medium">
                        Stay online and connected with our versatile,
                        Windows-based application, designed for businesses
                        seeking an efficient invoencing solution.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="feature_singles container py-5">
                  <div className="row align-items-center flex">
                    <div className="col-md-6  md:order-last">
                      <img
                        src={images.pic_dashboard}
                        alt="feature"
                        className="w-12 feature_logo mx-auto"
                      />
                    </div>
                    <div className="col-md-6  md:order-first">
                      <h3 className="text-lg text-left font-bold mt-3 ">
                        Holistic View through Web Dashboard
                      </h3>
                      <p className="mt-2 text-left pt-2 text-sm font-medium">
                        From usage metrics to tracking, our web-based dashboard
                        offers a comprehensive view of your operations, making
                        invoice management a breeze.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="feature_singles container py-5">
                  <div className="row align-items-center row flex">
                    <div className="col-md-6">
                      <img
                        src={images.pic_ai}
                        alt="feature"
                        className="w-12 feature_logo mx-auto"
                      />
                    </div>
                    <div className="col-md-6">
                      <h3 className="text-lg text-left font-bold mt-3">
                        AI-Enhanced Precision in Mobile Number Identification
                      </h3>
                      <p className="mt-2 pt-2 text-left text-sm font-medium">
                        Our futuristic AI-driven feature ensures invoices are
                        accurately delivered, championing efficiency in every
                        ‘Bill to WhatsApp’ endeavor.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature_container block ">
                <div className="feature_single container py-5">
                  <div className="row align-items-center flex">
                    <div className="col-md-6">
                      <img
                        src={images.pic_whatsapp}
                        alt="feature"
                        className="img-fluid rounded feature_logo mx-auto"
                      />
                    </div>
                    <div className="col-md-6">
                      <h3 className="text-lg text text-left font-bold mt-3">
                        Share Invoice via WhatsApp{" "}
                      </h3>
                      <p className=" pt-2 mt-4 text-gray-700 text-left font-medium ">
                        Boost efficiency with our revolutionary ‘WhatsApp
                        Invoice Sending’ feature. With a simple click or without
                        click, your invoices will reach to your customers'
                        WhatsApp to provide a seamless user experience.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="feature_single container py-5">
                  <div className="row align-items-center flex">
                    <div className="col-md-6  md:order-last">
                      <img
                        src={images.pic_integration}
                        alt="feature"
                        className="w-12 feature_logo mx-auto"
                      />
                    </div>
                    <div className="col-md-6  md:order-first">
                      <h3 className="text-lg font-bold text-left mt-3">
                        Automatic Sharing
                      </h3>
                      <p className="mt-2 pt-2 text-left  font-medium">
                        Eliminate manual steps and time-consuming tasks. Our
                        solution guarantees your invoices are automatically
                        transmitted to customer. No need of opening WhatsApp’s
                        web or desktop versions or to save and mail
                        to share invoice.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="feature_single container py-5">
                  <div className="row align-items-center flex">
                    <div className="col-md-6">
                      <img
                        src={images.pic_paper}
                        alt="feature"
                        className="w-12 feature_logo mx-auto"
                      />
                    </div>
                    <div className="col-md-6">
                      <h3 className="text-lg text-left font-bold mt-3">
                        Eco-friendly Invoicing
                      </h3>
                      <p className="mt-2 pt-2 text-left  font-medium">
                        Our solution is an ‘Alternative to Invoice Printing’. It
                        is an eco friendly solution which transmits invoices
                        without the wasting paper. We take care of our earth.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="feature_single container py-5">
                  <div className="row align-items-center flex">
                    <div className="col-md-6  md:order-last">
                      <img
                        src={images.pic_sms}
                        alt="feature"
                        className="w-12 feature_logo mx-auto"
                      />
                    </div>
                    <div className="col-md-6  md:order-first">
                      <h3 className="text-lg text-left font-bold mt-3">
                        Send Invoice through SMS
                      </h3>
                      <p className="mt-2 pt-2 text-left  font-medium">
                        Beyond WhatsApp, we understand the power of SMS in
                        reaching customers. Integrate our ‘Send Invoice through
                        SMS’ feature to tap into another efficient channel for
                        connecting with your clients.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="feature_single container py-5">
                  <div className="row align-items-center flex">
                    <div className="col-md-6">
                      <img
                        src={images.pic_api}
                        alt="feature"
                        className="w-12 feature_logo mx-auto"
                      />
                    </div>
                    <div className="col-md-6">
                      <h3 className="text-lg text-left font-bold mt-3">
                        Swift and Simple Software Integration
                      </h3>
                      <p className="mt-2 pt-2 text-left  font-medium">
                        From ERPs to custom solutions, easily blend our WhatsApp
                        invoicing feature into your existing software. Elevate
                        your software’s potential, making ‘Bill to WhatsApp’ a
                        seamless experience for your clients.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="feature_single container py-5">
                  <div className="row align-items-center flex">
                    <div className="col-md-6  md:order-last">
                      <img
                        src={images.pic_email}
                        alt="feature"
                        className="w-12 feature_logo mx-auto"
                      />
                    </div>
                    <div className="col-md-6  md:order-first">
                      <h3 className="text-lg text-left font-bold mt-3">
                        Share Invoice on Email
                      </h3>
                      <p className="mt-2 pt-2 text-left  font-medium">
                        Our platform is designed to offer a variety of channels
                        for sharing invoices. With our ‘Share Invoice on Email’
                        feature, your clients can receive invoices directly in
                        their inbox.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="feature_single container py-5">
                  <div className="row align-items-center flex">
                    <div className="col-md-6">
                      <img
                        src={images.pic_money}
                        alt="feature"
                        className="w-12 feature_logo mx-auto"
                      />
                    </div>
                    <div className="col-md-6">
                      <h3 className="text-lg pt-2 text-left font-bold mt-3">
                        Flexible & Transparent Billing
                      </h3>
                      <p className="mt-2 text-left  font-medium">
                        Our solution is design to cater for all type of
                        enterprises with flexible fees structure. You can begin
                        your journey with us with a small implementation fees.
                        Our flexible pay-as-you-go model ensures you pay only
                        for what you use.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="feature_single container py-5">
                  <div className="row align-items-center flex">
                    <div className="col-md-6  md:order-last">
                      <img
                        src={images.pic_secure}
                        alt="feature"
                        className="w-12 feature_logo mx-auto"
                      />
                    </div>
                    <div className="col-md-6  md:order-first">
                      <h3 className="text-lg text-left font-bold mt-3">
                        Unparalleled Security in Invoice Sharing
                      </h3>
                      <p className="mt-2 pt-2 text-left  font-medium">
                        We prioritize the safeguarding of your data. Our secure
                        login ensures every ‘Invoice sharing without Printing’
                        is safe and confidential.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="feature_single container py-5">
                  <div className="row align-items-center flex">
                    <div className="col-md-6">
                      <img
                        src={images.pic_windows}
                        alt="feature"
                        className="w-12 feature_logo mx-auto"
                      />
                    </div>
                    <div className="col-md-6">
                      <h3 className="text-lg text-left font-bold mt-3">
                        Adaptable Application for All
                      </h3>
                      <p className="mt-2 text-left pt-2  font-medium">
                        Stay online and connected with our versatile,
                        Windows-based application, designed for businesses
                        seeking an efficient invoencing solution.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="feature_single container py-5">
                  <div className="row align-items-center flex">
                    <div className="col-md-6  md:order-last">
                      <img
                        src={images.pic_dashboard}
                        alt="feature"
                        className="w-12 feature_logo mx-auto"
                      />
                    </div>
                    <div className="col-md-6  md:order-first">
                      <h3 className="text-lg text-left font-bold mt-3">
                        Holistic View through Web Dashboard
                      </h3>
                      <p className="mt-2 text-left pt-2  font-medium">
                        From usage metrics to tracking, our web-based dashboard
                        offers a comprehensive view of your operations, making
                        invoice management a breeze.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="feature_single container py-5">
                  <div className="row align-items-center row flex">
                    <div className="col-md-6">
                      <img
                        src={images.pic_ai}
                        alt="feature"
                        className="w-12 feature_logo mx-auto"
                      />
                    </div>
                    <div className="col-md-6">
                      <h3 className="text-lg text-left font-bold mt-3">
                        AI-Enhanced Precision in Mobile Number Identification
                      </h3>
                      <p className="mt-2 pt-2 text-left  font-medium">
                        Our futuristic AI-driven feature ensures invoices are
                        accurately delivered, championing efficiency in every
                        ‘Bill to WhatsApp’ endeavor.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="feature bg-white text-gray-800 p-5 rounded-lg w-64 mx-16 my-12 ">
                  <img
                    src={whatsapp}
                    alt="feature"
                    className="w-12 feature_logo mx-auto"
                  />
                  <h3 className="text-lg font-bold mt-3">A Game-Changer</h3>
                  <p className="mt-2 text-sm">
                    Boost efficiency with our revolutionary ‘WhatsApp Invoice
                    Sending’ feature. With a simple click, your invoices reach
                    your client’s WhatsApp, offering a seamless user experience
                    and quickening the payment process.{" "}
                  </p>
                </div>
                <div className="feature bg-white text-gray-800 p-5 rounded-lg w-64 mx-16 my-12">
                  <img
                    src={integrate1}
                    alt="feature"
                    className="w-12 feature_logo mx-auto"
                  />
                  <h3 className="text-lg font-bold mt-3">
                    Autonomous Invoicing
                  </h3>
                  <p className="mt-2 text-sm">
                    Eliminate manual steps and time-consuming tasks. Our
                    integration with abcdef guarantees your invoices are
                    automatically transmitted, making the ordeal of opening
                    WhatsApp’s web or desktop versions a thing of the past.{" "}
                  </p>
                </div>
                <div className="feature bg-white text-gray-800 p-5 rounded-lg w-64 mx-16 my-12">
                  <img
                    src={paper}
                    alt="feature"
                    className="w-12 feature_logo mx-auto"
                  />
                  <h3 className="text-lg font-bold mt-3">Say No to Print</h3>
                  <p className="mt-2 text-sm">
                    If you’re exploring an ‘Alternative to Invoice Printing’,
                    our platform is your answer. Transmitting invoices becomes
                    as intuitive as printing one, without the paper waste.
                  </p>
                </div>
                <div className="feature bg-white text-gray-800 p-5 rounded-lg w-64 mx-16 my-12">
                  <img
                    src={sms}
                    alt="feature"
                    className="w-12 feature_logo mx-auto"
                  />
                  <h3 className="text-lg font-bold mt-3">
                    Send Invoice through SMS
                  </h3>
                  <p className="mt-2 text-sm">
                    Beyond WhatsApp, we understand the power of SMS in reaching
                    customers. Integrate our ‘Send Invoice through SMS’ feature
                    to tap into another efficient channel for connecting with
                    your clients.{" "}
                  </p>
                </div>
                <div className="feature bg-white text-gray-800 p-5 rounded-lg w-64 mx-16 my-12">
                  <img
                    src={integrate}
                    alt="feature"
                    className="w-12 feature_logo mx-auto"
                  />
                  <h3 className="text-lg font-bold mt-3">
                    Swift and Simple Software Integration
                  </h3>
                  <p className="mt-2 text-sm">
                    From ERPs to custom solutions, easily blend our WhatsApp
                    invoicing feature into your existing software. Elevate your
                    software’s potential, making ‘Bill to WhatsApp’ a seamless
                    experience for your clients.{" "}
                  </p>
                </div>
                <div className="feature bg-white text-gray-800 p-5 rounded-lg w-64 mx-16 my-12">
                  <img
                    src={email}
                    alt="feature"
                    className="w-12 feature_logo mx-auto"
                  />
                  <h3 className="text-lg font-bold mt-3">
                    Share Invoice on Email
                  </h3>
                  <p className="mt-2 text-sm">
                    Our platform is designed to offer a variety of channels for
                    sharing invoices. With our ‘Share Invoice on Email’ feature,
                    your clients can receive invoices directly in their inbox.{" "}
                  </p>
                </div>
                <div className="feature bg-white text-gray-800 p-5 rounded-lg w-64 mx-16 my-12">
                  <img
                    src={save}
                    alt="feature"
                    className="w-12 feature_logo mx-auto"
                  />
                  <h3 className="text-lg font-bold mt-3">
                    Zero-Cost Start and Flexible Billing
                  </h3>
                  <p className="mt-2 text-sm">
                    Begin your journey with no implementation fees. Our flexible
                    pay-as-you-go model ensures you pay only for what you use.{" "}
                  </p>
                </div>
                <div className="feature bg-white text-gray-800 p-5 rounded-lg w-64 mx-16 my-12">
                  <img
                    src={secure1}
                    alt="feature"
                    className="w-12 feature_logo mx-auto"
                  />
                  <h3 className="text-lg font-bold mt-3">
                    Unparalleled Security in Invoice Sharing
                  </h3>
                  <p className="mt-2 text-sm">
                    We prioritize the safeguarding of your data. Our secure
                    login ensures every ‘Invoice sharing without Printing’ is
                    safe and confidential.{" "}
                  </p>
                </div>
                <div className="feature bg-white text-gray-800 p-5 rounded-lg w-64 mx-16 my-12">
                  <img
                    src={invoice1}
                    alt="feature"
                    className="w-12 feature_logo mx-auto"
                  />
                  <h3 className="text-lg font-bold mt-3">
                    Adaptable Application for All
                  </h3>
                  <p className="mt-2 text-sm">
                    Stay online and connected with our versatile, Windows-based
                    application, designed for businesses seeking an efficient
                    invoencing solution.{" "}
                  </p>
                </div>
                <div className="feature bg-white text-gray-800 p-5 rounded-lg w-64 mx-16 my-12">
                  <img
                    src={dashboard}
                    alt="feature"
                    className="w-12 feature_logo mx-auto"
                  />
                  <h3 className="text-lg font-bold mt-3">
                    Holistic View through Web Dashboard
                  </h3>
                  <p className="mt-2 text-sm">
                    From usage metrics to tracking, our web-based dashboard
                    offers a comprehensive view of your operations, making
                    invoice management a breeze.{" "}
                  </p>
                </div>
                <div className="feature bg-white text-gray-800 p-5 rounded-lg w-64 mx-16 my-12">
                  <img
                    src={ai}
                    alt="feature"
                    className="w-12 feature_logo mx-auto"
                  />
                  <h3 className="text-lg font-bold mt-3">
                    AI-Enhanced Precision in Mobile Number Identification
                  </h3>
                  <p className="mt-2 text-sm">
                    Our futuristic AI-driven feature ensures invoices are
                    accurately delivered, championing efficiency in every ‘Bill
                    to WhatsApp’ endeavor.{" "}
                  </p>
                </div> */}
            </>
          </div>
        </div>
      </div>

      {/* redesign the feature section */}

      {/* Pricing Section */}
      <div className="pricing bg-gray-100 py-10 md:py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Pricing</h2>
          <p className="text-gray-600 mt-2 md:mt-3">
            Choose a plan that works for you
          </p>
          <div className="plans mt-5 md:mt-10 flex flex-wrap justify-center">
            <div className="plan bg-white p-5 rounded-lg w-64 mx-5 my-5">
              <h3 className="text-lg font-bold">Small</h3>
              <p className="text-gray-600 mt-2">
                Game Changer for Small Retail Players.
              </p>
              {/* add a straight line to divide */}
              <div className="line h-1 bg-gray-300 my-3"></div>
              {/* add small content to add features in buttlet points */}
              {/* <ul className="text-sm text-left text-gray-600">
                <li>&#8226; 2 Terminal in One Store Location</li>
                <li>&#8226; 3 User License Overall</li>
                <li>&#8226; WhatsApp Sharing</li>
                <li>&#8226; SMS Sharing</li>
                <li>&#8226; Minimum 500 Invoice/Month</li>
              </ul> */}

              {/* <p className="text-2xl font-bold mt-3">Rs. 0.70</p>
              <p className="text-gray-600 mt-2">Per Invoice</p> */}
              <Link to="/pricing" className="btn mt-3">
                Read More
              </Link>
            </div>
            <div className="plan bg-white p-5 rounded-lg w-64 mx-5 my-5">
              <h3 className="text-lg font-bold">Medium</h3>
              <p className="text-gray-600 mt-2">
                Growing Aspiration Filler for Medium Scale Retailer
              </p>
              <div className="line h-1 bg-gray-300 my-3"></div>
              {/* add small content to add features in buttlet points */}
              {/* <ul className="text-sm text-left text-gray-600">
                <li>&#8226; 4 Terminal in One Store Location</li>
                <li>&#8226; 8 User License Overall</li>
                <li>&#8226; WhatsApp Sharing</li>
                <li>&#8226; SMS Sharing</li>
                <li>&#8226; Minimum 1500 Invoice/Month</li>
              </ul>
              <p className="text-2xl font-bold mt-3">Rs. 0.60</p>
              <p className="text-gray-600 mt-2">Per Invoice</p> */}
              <Link to="/pricing" className="btn mt-3">
                Read More
              </Link>
            </div>
            <div className="plan bg-white p-5 rounded-lg w-64 mx-5 my-5">
              <h3 className="text-lg font-bold">Large</h3>
              <p className="text-gray-600 mt-2">For large businesses</p>
              <div className="line h-1 bg-gray-300 my-3"></div>
              {/* 
              <ul className="text-sm text-left text-gray-600">
                <li>&#8226; 8 Terminal in One Store Location</li>
                <li>&#8226; 20 User License Overall</li>
                <li>&#8226; WhatsApp Sharing</li>
                <li>&#8226; SMS Sharing</li>
                <li>&#8226; Minimum 5000 Invoice/Month</li>
              </ul>
              <p className="text-2xl font-bold mt-3">Rs. 0.50</p>
              <p className="text-gray-600 mt-2">Per Invoice</p> */}
              <Link to="/pricing" className="btn mt-3">
                Read More
              </Link>
            </div>
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
          <Link
            to="/signup"
            className="btn  md:mt-10 z-10 text-center ml-auto mr-auto bg-white w-40 mt-4 text-gray-800 text-xl py-3 px-6 rounded-lg"
            style={{ display: "block", margin: "10 auto" }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
