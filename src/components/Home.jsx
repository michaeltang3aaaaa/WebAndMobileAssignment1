import "./Home.css";
import city from "../images/homeCity.jpg";
import nature from "../images/homeNature.jpg";

function Home() {
  return (
    <section className="home_introduce_container">
      <div className="introduce_image_container">
        <img className="img1" src={city} alt="City" />
        <img className="img2" src={nature} alt="Nature" />
      </div>

      <div className="introduce_word_container">
        <p className="home_paragraph">
          {" "}
          <strong>Why us?</strong>
          <br /> Looking for a travel agency? We offer excellent services,
          carefully planned itineraries, and a variety of travel packages to
          suit different interests and budgets. Whether you are travelling with
          family, friends, or on your own, we aim to make every journey
          comfortable and memorable.{" "}
        </p>

        <p className="home_paragraph">
          {" "}
          From beautiful beaches and breathtaking natural landscapes to vibrant
          cities and rich cultural heritage, every corner of Malaysia has
          something special to offer. Explore local cuisines, discover hidden
          gems, and create unforgettable memories with us!{" "}
        </p>
      </div>
    </section>
  );
}
export default Home;
