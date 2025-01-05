import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-8 text-center uppercase">
        About Us
      </h1>

      <div className="max-w-4xl text-center text-lg md:text-xl text-gray-700 leading-relaxed">
        <p className="mb-6">
          Welcome to <span className="font-semibold text-purple-700">Prespectify</span> — your
          personal companion for seamless and meaningful conversations.
        </p>

        <p className="mb-6">
          At <span className="font-semibold text-purple-700">Prespectify</span>, we believe in
          the power of personalized, dynamic communication. Our chatbot application is designed to
          provide a unique and enriching interaction experience for every user, whether you're
          seeking answers, advice, or just some fun conversation.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes Us Different?</h2>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-purple-700 mb-2">
            1. Multiple Personalities, Multiple Perspectives
          </h3>
          <p>
            Imagine having access to a variety of virtual personalities, each with its own unique
            tone, expertise, and communication style. From a motivational speaker to a tech-savvy
            guru, <span className="font-semibold text-purple-700">Prespectify</span> gives you
            the freedom to choose a chatbot personality that aligns with your needs and mood. Each
            chatbot simulates a specific style of communication, ensuring that conversations feel
            tailored and relevant to you.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-purple-700 mb-2">
            2. Tailored Responses with Public Data
          </h3>
          <p>
            Leveraging publicly available data, our application can generate responses that reflect
            the perspective and opinions of real-world individuals. Whether you're asking for advice
            or seeking information, our chatbot provides insights and answers in line with what a
            specific person might say, creating a highly personalized interaction.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-purple-700 mb-2">
            3. Accessibility for all
          </h3>
          <p>
            We are committed to inclusivity. <span className="font-semibold text-purple-700">Prespectify</span> is designed with special
            features for the deaf and hard-of-hearing community, ensuring that everyone can engage in
            rich, interactive conversations.
          </p>
        </div>

        <p className="mt-8 text-gray-600">
          Explore the future of chatbot interaction with{" "}
          <span className="font-semibold text-purple-700">Prespectify</span>, where every
          conversation feels personal.
        </p>
      </div>
    </div>
  );
};

export default About;
