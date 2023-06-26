import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>SolveAB</h1>
          <p>Solution to all your problems.</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            excepturi, deleniti nulla blanditiis ut perferendis ratione officiis
            soluta aliquid, placeat ab corrupti quasi autem sit quisquam. Hic
            vel officiis praesentium repudiandae doloremque voluptates quaerat
            quisquam dolor architecto velit reiciendis ad saepe minima quidem
            fugit, quia voluptas omnis ea. Asperiores optio ullam cum explicabo.
            Dolores, officia repellendus! Dolore, quam tempora? Non iure,
            incidunt dolor hic molestiae illo tempore aspernatur, quidem
            doloribus ad consequuntur sequi beatae fuga rerum? Dolorum, odio?
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{animationDelay:"0.3s"}}>
                <AiFillGoogleCircle />
                <p>Google</p>
            </div>

            <div style={{animationDelay:"0.5s"}}>
                <AiFillAmazonCircle />
                <p>Amazon</p>
            </div>
            <div style={{animationDelay:"0.7s"}}>
                <AiFillYoutube />
                <p>YouTube</p>
            </div>

            <div style={{animationDelay:"0.9s"}}>
                <AiFillInstagram />
                <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
