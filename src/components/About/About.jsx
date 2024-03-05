import React from "react";

const About = () => {
  return (
    <section className="py-[3rem] z-[-1] about1">
      <div className="text-center">
        <span
          className="relative text-center text-3xl 2xl:text-5xl before:content-['']
          before:absolute before:h-[6rem] before:border-2 before:border-blue-950 before:top-[-3rem]
          before:right-[4rem] before:bottom-24 before:my-auto about 2xl:before:right-[6.5rem]
        ">
          About Our Works
        </span>
      </div>

      <div
        className="w-[90%] lg:w-[85%] mx-auto flex flex-col md:flex-row gap-5 mt-10
        text-center md:text-left text-sm 2xl:text-xl">
        <div className="flex-1 flex flex-col gap-2">
          <p>
         Indoor-Out PhotoShoot , Cinametic Video , Wedding Pre-Wedding, Commercial Photography, Drone Shoot , Album Designing Live Telecast , Event Photography, Photography, Videography, Photo Editing, Video Editing, Photography, Videography, Photo Editing.
          {/* At our studio, we are driven by a passion for creativity and a commitment to excellence. With years of collective experience, our talented team brings together diverse skills and perspectives to deliver exceptional results. */}
          </p>
          <p>
          {/* Founded on the principles of innovation and collaboration, we pride ourselves on creating immersive experiences that captivate audiences and exceed expectations. From concept to execution, we thrive on pushing the boundaries of design and technology. */}

         We Accept All types of Photography , VideoGraphy Professional Works , VideoRecording, Prewedding Shoot , Drone Camera ,Led Tv Live Telecast , Birthday Party Shoot

          </p>
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <p>
          Our mission is to craft compelling narratives and bring ideas to life through dynamic visuals and immersive storytelling. Whether it's branding, animation, or interactive experiences, we approach each project with enthusiasm and dedication.
          </p>

          <div>
            <button className="bg-blue-950 text-white py-2 px-5 hover:bg-blue-800 text-sm">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
