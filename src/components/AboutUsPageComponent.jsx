import React from "react";
import pelicanLogo from "/pelicans-logo.png";
import downArrow from "/down.png"
import aboutUs from "/peoplemeeting.jpg";
import ProcessFlow from "./ProcessFlow";
import { Card, Row, Col, Typography } from "antd";

const { Title, Text } = Typography;

const AboutUsPageComponent = () => {
  return (
    <>
      {/* image with about us on top of */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "500px",
          overflow: "hidden",
          marginTop: '90px',
        }}
      >
        <img
          src={aboutUs}
          alt="About Us"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <h2
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "4rem",
            textAlign: "center",
          }}
        >
          About Us
        </h2>
      </div>

      {/* cards + images  */}
      <div
        style={{
          paddingLeft: "150px",
          paddingRight: "150px",
          paddingTop: "50px",
        }}
      >
        <Row justify="center" align="middle" style={{ marginBottom: "20px" }}>
          {/* Left Column - About Us & Main Title */}
          <Col span={12} style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "50px",
                padding: "6px 16px",
                display: "inline-block",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                alignSelf: "flex-start", // Keeps the badge aligned left
              }}
            >
              <Text
                className="font-extrabold text-xs"
                style={{ letterSpacing: "0.1em" }}
              >
                ABOUT US
              </Text>
            </div>
            <Title
              level={2}
              style={{
                fontSize: "24px",
                color: "#dd6527",
                fontFamily: "sans-serif",
                letterSpacing: "0.05em",
                marginTop: "0.5em",
              }}
              className="font-extrabold"
            >
              <span className="font-extrabold"> Introduction </span>
              <span
                className="font-extrabold"
                style={{ color: "#482a63", letterSpacing: "0.05em" }}
              >
                To Best
              </span>{" "}
              <br />
              <span className="font-extrabold" style={{ color: "#482a63" }}>
                Digital Agency!
              </span>
            </Title>
          </Col>

          {/* Right Column - Create to Inspire */}
          <Col
            span={12}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ textAlign: "center", opacity: 0.2 }}>
              <h2
                style={{
                  fontSize: "52px",
                  fontWeight: "bold",
                  color: "#333",
                  lineHeight: "1.2",
                }}
              >
                Create to{" "}
                <span style={{ color: "#333" }}>
                  {" "}
                  <br /> INSPIRE
                </span>
              </h2>
            </div>
          </Col>
        </Row>

        <Row gutter={32} justify="space-around">
          {" "}
          {/* Increased gutter for better spacing */}
          <Col span={6}>
            <div style={{ textAlign: "center", marginBottom: "10px" }}>
              <Title level={4} style={{ fontSize: "18px", color: "#333" }}>
                Our Mission
              </Title>
            </div>
            <Card
              style={{
                borderRadius: "16px",
                boxShadow: "0 8px 16px rgba(202, 217, 219, 0.5)",
                marginBottom: "20px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                paddingTop: "0",
                textAlign: "center", // Center the text
              }}
            >
              <div
                style={{
                  width: "50px",
                  borderTop: "4px solid #3f51b5",
                  margin: "0 auto",
                }}
              />
              <p
                style={{
                  color: "#666",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  flexGrow: 1,
                }}
              >
                To deliver innovative digital solutions that drive growth, build
                strong brands, and transform the way they connect with their
                audience.
              </p>
            </Card>
          </Col>
          <Col span={6}>
            <div style={{ textAlign: "center", marginBottom: "10px" }}>
              <Title level={4} style={{ fontSize: "18px", color: "#333" }}>
                What We Do
              </Title>
            </div>
            <Card
              style={{
                borderRadius: "16px",
                boxShadow: "0 8px 16px rgba(202, 217, 219, 0.5)",
                marginBottom: "20px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                paddingTop: "0",
                textAlign: "center", // Center the text
              }}
            >
              <div
                style={{
                  width: "50px",
                  borderTop: "4px solid #3f51b5",
                  margin: "0 auto",
                }}
              />
              <p
                style={{
                  color: "#666",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  flexGrow: 1,
                }}
              >
                We specialize in branding, digital marketing, website design,
                and event organizing—delivering creative strategies and results
                that make your brand stand out in a competitive market.
              </p>
            </Card>
          </Col>
          <Col span={6}>
            <div style={{ textAlign: "center", marginBottom: "10px" }}>
              <Title level={4} style={{ fontSize: "18px", color: "#333" }}>
                Our Vision
              </Title>
            </div>
            <Card
              style={{
                borderRadius: "16px",
                boxShadow: "0 8px 16px rgba(202, 217, 219, 0.5)",
                marginBottom: "20px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                paddingTop: "0",
                textAlign: "center", 
              }}
            >
              <div
                style={{
                  width: "50px",
                  borderTop: "4px solid #3f51b5",
                  margin: "0 auto",
                }}
              />
              <p
                style={{
                  color: "#666",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  flexGrow: 1,
                }}
              >
                To become a leading force in the digital marketing industry,
                shaping the future of brands and setting new standards for
                creativity and impact in Ethiopia and beyond.
              </p>
            </Card>
          </Col>
        </Row>
      </div>

      {/* the two images  */}

      <div
        style={{
          display: "flex",
          justifyContent: "start",
          marginTop: "40px",
          paddingTop: "4rem",
          paddingLeft: "17rem",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "55%",
            borderRadius: "16px",
            overflow: "hidden",
            // border: "10px solid white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <img
            src="/meeting.jpg" 
            alt="Team Collaboration"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div
          style={{
            width: "28%",
            position: "absolute",
            left: "70%",
            top: "30%",
            transform: "translateX(-50%)",
            borderRadius: "16px",
            overflow: "hidden",
            border: "10px solid white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <img
            src="/GuyWithLaptop.jpg" 
            alt="Professional"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>

      {/* how we buildbrands */}

      <div
        style={{
          // background: "linear-gradient(to right, #e5f2e3, #f6f1ea)", // Gradient background
          padding: "40px 20px",
          textAlign: "center",
          borderRadius: "16px",
          // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          margin: "20px auto",
          maxWidth: "800px",
        }}
      >
        <h2 style={{ fontSize: "36px", fontWeight: "bold", color: "#333" }}>
          How We Build <span style={{ color: "#dd6527" }}>Brands</span> That
          Last
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "#666",
            margin: "10px 0",
            fontFamily: "Calibri",
            letterSpacing: "0.1rem", //
          }}
        >
          Innovation-Driven Workflow for Today's Fast-Paced World
        </p>
        <button
          style={{
            backgroundColor: "#dd6527",
            color: "white",
            borderRadius: "5px",
            padding: "10px 20px",
            cursor: "pointer",
            fontSize: "16px",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#c65a1f")
          } // Darker shade on hover
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#dd6527")
          } // Original color on mouse out
        >
          Learn More
        </button>
      </div>

      <ProcessFlow />
      {/* About us the grey part */}
      <div className="flex items-start justify-between mt-40 p-8 max-w-5xl mx-auto bg-[#e5f2e3] rounded-xl">
        {/* Left Side - Logo */}
        <div className="w-1/4 flex flex-col justify-center items-center">
          <img
            src={pelicanLogo}
            alt="Pelicans Production"
            className="w-48 h-48 mx-auto mt-40"
          />
        </div>
        {/* Right Side - Content */}
        <div className="w-3/4">
        
          {/* WHY CHOOSE Section */}
          <div className="flex flex-col mb-8 mt-10 ml-40">
            <div style={{ fontFamily: "sans-serif" }}>
              <h1 className="text-6xl font-bold" style={{ color: "#555555", fontFamily: "sans-serif" }}>
                WHY
              </h1>
              <h1 className="text-6xl font-bold" style={{ color: "#555555", fontFamily: "sans-serif" }}>
                CHOOSE
              </h1>
            </div>
            <div className="flex items-center">
              <div className="bg-brand-orange rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <span className="text-black text-2xl font-extrabold">→</span>
              </div>
              <h1 className="text-6xl font-bold" style={{ color: "#add475", fontFamily: "sans-serif" }}>
                US
              </h1>
            </div>
          </div>

          {/* Results That Speak Section */}
          <div className="mb-8 ml-10">
            <div className="flex items-center mb-2">
              <h2
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 800,
                  letterSpacing: "-1px",
                }}
              >
                Results That Speak
              </h2>
              <img src={downArrow} alt="Arrow" className="w-4 h-4 mr-2 ml-2" />
            </div>
            <p className="text-gray-600">
              We don't just promise—we deliver. Our strategies <br />
              are built to achieve measurable success that drives your business
              forward.
            </p>
          </div>

          {/* Innovation That Stands Out Section */}
          <div className="mb-8 ml-10">
            <div className="flex items-center mb-2">
              <h2
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 800,
                  letterSpacing: "-1px",
                }}
              >
                Innovation That Stands Out
              </h2>
              <img src={downArrow} alt="Arrow" className="w-4 h-4 mr-2 ml-2" />
            </div>
            <p className="text-gray-600">
              From creative designs to cutting-edge digital solutions. <br />
              we ensure your brand captures attention in a fast-paced world.
            </p>
          </div>

          {/* Client-Centric Solutions Section */}
          <div className="mb-8 ml-10">
            <div className="flex items-center mb-2">
              <h2
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 800,
                  letterSpacing: "-1px",
                }}
              >
                Client-Centric Solutions
              </h2>
              <img src={downArrow} alt="Arrow" className="w-4 h-4 mr-2 ml-2" />
            </div>
            <p className="text-gray-600">
              Your goals are our mission. We tailor every step of <br />
              the process to fit your unique vision and needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPageComponent;
