import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="h-[68vh] bg-[#FEFDED]">
      <div className="about-content text-center max-w-2xl mx-auto">
        <h2 className="text-6xl text-center mb-10 max-sm:text-3xl text-[#40826D] pt-8">
          Who we are!
        </h2>
        <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-[#40826D]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          obcaecati eum est commodi, quam, ut quidem deleniti quos quod
          temporibus dicta deserunt voluptates ab! Deleniti id repellat, labore
          fugiat obcaecati dolorem minima fugit quasi nam velit reiciendis
          delectus ea tempora.
        </p>
        <br/>
        <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-[#40826D]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          obcaecati eum est commodi, quam, ut quidem deleniti quos quod
          temporibus dicta deserunt voluptates ab! Deleniti id repellat, labore
          fugiat obcaecati dolorem minima fugit quasi nam velit reiciendis
          delectus ea tempora.
        </p>
        <Link
          to="/contact"
          className="btn btn-wide bg-[#40826D] hover:bg-[#23473c] text-white mt-5"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default About;
