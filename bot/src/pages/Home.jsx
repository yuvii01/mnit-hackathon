import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import Footer from "./Footer";

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [selectedInterests] = useState([
    { name: "Political", imageUrl: "src/Images/politics1.jpg" },
    { name: "Cooking", imageUrl: "src/Images/cooking1.jpg" },
    { name: "Astrological", imageUrl: "src/Images/astrology.jpg" },
    { name: "Business", imageUrl: "src/Images/business.jpg" },
    { name: "Movies", imageUrl: "src/Images/movies.jpg" },
    { name: "Travelling", imageUrl: "src/Images/travel.jpg" },
  ]);

  // Ref for carousel and interest cards
  const carouselRef = useRef(null);
  const interestCardsRef = useRef([]);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }

    // GSAP animations for the carousel and interest cards
    gsap.fromTo(
      carouselRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      interestCardsRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold">Perspectify</a>
          {username && <a href="#profile" className="text-lg">Welcome, {username}</a>}
        </div>
      </nav>

      {/* Slideshow (Carousel) */}
      <div ref={carouselRef} className="container mx-auto mt-6">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          interval={3000}
          showStatus={false}
          className="shadow-lg rounded-lg"
        >
          <div>
            <img src="src/Images/science.jpg" alt="Science" className="h-96 w-full object-cover" />
            <p className="legend">Science</p>
          </div>
          <div>
            <img src="src/Images/spiritual.jpg" alt="Spiritual" className="h-96 w-full object-cover" />
            <p className="legend">Spiritual</p>
          </div>
          <div>
            <img src="src/Images/stock.jpg" alt="Stock" className="h-96 w-full object-cover" />
            <p className="legend">Stock</p>
          </div>
          <div>
            <img src="src/Images/tech2.jpg" alt="Tech" className="h-96 w-full object-cover" />
            <p className="legend">Tech</p>
          </div>
          <div>
            <img src="src/Images/fitness1.jpg" alt="Fitness" className="h-96 w-full object-cover" />
            <p className="legend">Fitness</p>
          </div>
          <div onClick={() => navigate('/political')}>
            <img src="src/Images/politics2.jpg" alt="Politics" className="h-96 w-full object-cover" />
            <p className="legend">Politics</p>
          </div>
        </Carousel>
      </div>

      {/* Main content showing selected interests */}
      <div className="container mx-auto mt-10">
        <h2 className="text-3xl font-bold mb-6">Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedInterests.map((interest, index) => (
            <div
              key={interest.name}
              ref={(el) => (interestCardsRef.current[index] = el)}
              onClick={() => navigate(`/${interest.name.toLowerCase()}`)}
              className="card bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-400 hover:scale-105 hover:shadow-[0_0_20px_#fff] cursor-pointer"
            >
              <div className="overflow-hidden group">
                {/* Image with hover effect */}
                <img
                  src={interest.imageUrl}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  alt={interest.name}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{interest.name}</h3>
                {/* Button with hover effect */}
                <button className="bg-purple-600 text-white px-6 py-3 mt-4 rounded transition-all duration-300 transform hover:scale-110 hover:bg-purple-700 hover:shadow-lg">
         Search Voices
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
