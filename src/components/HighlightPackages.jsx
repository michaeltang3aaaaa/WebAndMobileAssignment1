import { Link, useParams } from "react-router-dom";
import "./HighlightPackages.css";
import langkawi from "../images/langkawi.jpg";
import redang from "../images/redang_island.jpeg";
import perhentian from "../images/perhentian_Island.jpg";

import cameron_highland from "../images/cameron_Highlands.jpg";
import taman_negara from "../images/taman_Negara.jpg";
import sabah from "../images/sabah.jpg";

import penang_food_trail from "../images/penang_food_trial.jpg";
import melaka_food_tour from "../images/melaka_food_tour.jpg";
import kl_food_tour from "../images/kl_food_tour.jpg";

import historic_melaka from "../images/historic_melaka.jpg";
import georgetown from "../images/georgetown.jpg";
import kl_heritage from "../images/kl_heritage.jpg";

const categoryData = {
  beaches: {
    title: "Beautiful Beaches",
    description: "Relax, unwind and discover Malaysia's tropical islands.",
    packages: [
      {
        destination: "Langkawi",
        duration: "3 Days 2 Nights",
        price: 599,
        image: langkawi,
        description: "Enjoy island scenery, beaches and coastal activities.",
      },
      {
        destination: "Redang Island",
        duration: "3 Days 2 Nights",
        price: 799,
        image: redang,
        description: "Discover clear waters and beautiful marine life.",
      },
      {
        destination: "Perhentian Islands",
        duration: "3 Days 2 Nights",
        price: 699,
        image: perhentian,
        description: "Enjoy a tropical escape with snorkelling opportunities.",
      },
    ],
  },

  nature: {
    title: "Nature Adventures",
    description: "Discover Malaysia's forests, mountains and green landscapes.",
    packages: [
      {
        destination: "Cameron Highlands",
        duration: "2 Days 1 Night",
        price: 399,
        image: cameron_highland,
        description: "Visit tea plantations and enjoy the cool highlands.",
      },
      {
        destination: "Taman Negara",
        duration: "3 Days 2 Nights",
        price: 650,
        image: taman_negara,
        description: "Experience rainforest scenery and nature activities.",
      },
      {
        destination: "Sabah",
        duration: "4 Days 3 Nights",
        price: 1199,
        image: sabah,
        description: "Explore beautiful landscapes and outdoor adventures.",
      },
    ],
  },

  food: {
    title: "Malaysian Food Experiences",
    description: "Taste the flavours and culinary traditions of Malaysia.",
    packages: [
      {
        destination: "Penang Food Trail",
        duration: "2 Days 1 Night",
        price: 299,
        image: penang_food_trail,
        description: "Discover local street food and famous hawker dishes.",
      },
      {
        destination: "Melaka Food Tour",
        duration: "2 Days 1 Night",
        price: 349,
        image: melaka_food_tour,
        description: "Try local favourites and traditional Peranakan cuisine.",
      },
      {
        destination: "Kuala Lumpur Food Tour",
        duration: "2 Days 1 Night",
        price: 399,
        image: kl_food_tour,
        description: "Explore Malaysian favourites in the capital city.",
      },
    ],
  },

  culture: {
    title: "Culture and Heritage",
    description: "Explore historic towns, heritage sites and local traditions.",
    packages: [
      {
        destination: "Historic Melaka",
        duration: "2 Days 1 Night",
        price: 299,
        image: historic_melaka,
        description: "Discover historic buildings and heritage attractions.",
      },
      {
        destination: "George Town",
        duration: "2 Days 1 Night",
        price: 329,
        image: georgetown,
        description:
          "Explore heritage streets, murals and historic architecture.",
      },
      {
        destination: "Kuala Lumpur Heritage",
        duration: "2 Days 1 Night",
        price: 379,
        image: kl_heritage,
        description: "Discover landmarks and the city's cultural diversity.",
      },
    ],
  },
};

function HighlightPackages() {
  const { category } = useParams();
  const selectedCategory = categoryData[category];

  if (!selectedCategory) {
    return (
      <main className="category-page">
        <h1>Category Not Found</h1>
        <p>Sorry, this travel category does not exist.</p>
        <Link to="/about">Back to About Us</Link>
      </main>
    );
  }

  return (
    <main className="category-page">
      <Link to="/about" className="back-link">
        ← Back to About Us
      </Link>

      <header className="category-heading">
        <p>EXPLORE MALAYSIA</p>

        <h1>{selectedCategory.title}</h1>
        <p>{selectedCategory.description}</p>
      </header>

      <section className="package-grid">
        {selectedCategory.packages.map((item) => (
          <article className="package-card" key={item.destination}>
            <div className="package-card-content">
              <img src={item.image} alt={item.title} />
              <h2>{item.destination}</h2>
              <p>{item.description}</p>

              <p className="package-duration">Duration: {item.duration}</p>

              <p className="package-price">
                From RM {item.price.toLocaleString("en-MY")}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default HighlightPackages;
