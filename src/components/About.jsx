import { Link } from "react-router-dom";
import "./About.css";
import beach from "../images/beach.jpeg";
import nature from "../images/nature.jpeg";
import food from "../images/food.jpeg";
import culture from "../images/culture.jpeg";

const highlights = [
  {
    id: "beaches",
    title: "Beaches",
    description: "Relax on beautiful beaches and explore tropical islands.",
    image: beach,
    label: "Explore Beach packages",
  },
  {
    id: "nature",
    title: "Nature",
    description: "Discover green leandscapes, forests and scenic highlands.",
    image: nature,
    label: "Explore Nature Packages",
  },
  {
    id: "food",
    title: "Food",
    description: "Experience Malaysian food and its diverse local flavours.",
    image: food,
    label: "Explore Food Packages",
  },
  {
    id: "culture",
    title: "Culture",
    description: "Explore heritage sites, traditions and historic towns.",
    image: culture,
    label: "Explore Culture Packages",
  },
];

function About() {
  return (
    <main className="about-page">
      <section className="about-heading">
        <h1>About Explore Malaysia</h1>
        <h2>Your Gateway to the Wonders of Malaysia</h2>
        <p>
          Discover passion for travel, local culture and unforgettable
          experience in Malaysia
        </p>
      </section>
      <section className="about-description">
        <h2>Who we are</h2>
        <p>
          Our goal is to make exploring Malaysia enjoyable, convenient, and
          accessible by helping travellers discover destinations and experiences
          they will remember.
        </p>
      </section>
      <section className="about-highlights">
        <h2>Your Vacation, Your Way</h2>
        <p className="highlights-intro">
          Whether you're seeking relaxation or adventure, Explore Malaysia has
          you covered with our specially selected travel highlights.
        </p>

        <div className="highlight-grid">
          {highlights.map((item) => (
            <Link
              to={`/highlights/${item.id}`}
              className="highlight-card"
              key={item.id}
              aria-label={item.label}
            >
              <img src={item.image} alt={item.title} />
              <div className="highlight-card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>Explore packages →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
