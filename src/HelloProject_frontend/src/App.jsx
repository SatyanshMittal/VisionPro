import { useState } from "react";
import { HelloProject_backend } from "declarations/HelloProject_backend";
import background from "../public/thors-thunderous-flight.1920x1080.mp4";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ironman from "../public/ironman.webp";
import hulk from "../public/nft/Hulk.webp";
import thunder from "../public/nft/Thunder.jpeg";
import deadpool from "../public/nft/Deadpool.jpeg";
import hawkeye from "../public/nft/hawkeye.png";
import antman from "../public/nft/antman.jpg";
import black_widow from "../public/nft/black_widow.jpeg";
import vision from "../public/nft/vision.jpeg";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);
  };

  return (
    <main>
      {/* <img src="/logo2.svg" alt="DFINITY logo" />
        <br />
        <br />
        <form action="#" onSubmit={handleSubmit}>
          <label htmlFor="name">Enterd your name: &nbsp;</label>
          <input id="name" alt="Name" type="text" />
          <button type="submit">ClickMe!</button>
        </form>
        <section id="greeting">{greeting}</section> */}
      <div id="Assemble">
        <h1>ARCher's Assemble</h1>
        {/* <button><a href="https://www.w3schools.com/html/html_images.asp">play game</a></button> */}
        <video id="myVideo" src={background} autoPlay muted loop />

        <div className="buttonContainer">
          <button class="btn">
            <a
              className="game"
              href="https://mysticog.itch.io/archers-assemble"
            >
              START GAME
            </a>
          </button>
          <button class="btn" onClick={handleClick}>
            MARKETPLACE
          </button>
        </div>
      </div>

      {isVisible && (
        <div className="marketplace">
          <div className="nftDay">
            <h2 className="premiumNft">Nft Of The Day</h2>

            <div class="obj">
              <div class="objchild">
                <span class="inn6">
                  <div className="">
                    <img src={ironman} className="ironman" alt="" />
                  </div>
                </span>
              </div>
            </div>
          </div>

          <div className="mainCards">
            <h2 className="Trendingtxt">Trending NFT's</h2>

            <div className="mainCardsBox">
              <div class="card">
                <img src={ironman} class="img" />
                <div class="textBox">
                  <p class="text head">ICP</p>
                  <span>Iron Man</span>
                  <p class="text price">1.654,34ETH</p>
                </div>
              </div>

              <div class="card">
                <img src={hulk} class="img" />
                <div class="textBox">
                  <p class="text head">ICP</p>
                  <span>Hulk</span>
                  <p class="text price">1.654,34ETH</p>
                </div>
              </div>

              <div class="card">
                <img src={thunder} class="img" />
                <div class="textBox">
                  <p class="text head">ICP</p>
                  <span>Thor</span>
                  <p class="text price">1.654,34ETH</p>
                </div>
              </div>
              <div class="card">
                <img src={deadpool} class="img" />
                <div class="textBox">
                  <p class="text head">ICP</p>
                  <span>Deadpool</span>
                  <p class="text price">1.654,34ETH</p>
                </div>
              </div>
            </div>

            <h2 className="Trendingtxt">Browse All</h2>

            <div className="mainCardsBox">
              <div class="card">
                <img src={hawkeye} class="img" />
                <div class="textBox">
                  <p class="text head">ICP</p>
                  <span>Hawk Eye</span>
                  <p class="text price">1.654,34ETH</p>
                </div>
              </div>

              <div class="card">
                <img src={antman} class="img" />
                <div class="textBox">
                  <p class="text head">ICP</p>
                  <span>Ant-man</span>
                  <p class="text price">1.654,34ETH</p>
                </div>
              </div>

              <div class="card">
                <img src={black_widow} class="img" />
                <div class="textBox">
                  <p class="text head">ICP</p>
                  <span>Black Widow</span>
                  <p class="text price">1.654,34ETH</p>
                </div>
              </div>

              <div class="card">
                <img src={vision} class="img" />
                <div class="textBox">
                  <p class="text head">ICP</p>
                  <span>Vision</span>
                  <p class="text price">1.654,34ETH</p>
                </div>
              </div>


              
            </div>


            <h2 className="Trendingtxt"></h2>



            <div className="mainCardsBox">
              <div class="card">
                <img src={ironman} class="img" />
                <div class="textBox">
                  <p class="text head">ICP</p>
                  <span>Iron Man</span>
                  <p class="text price">1.654,34ETH</p>
                </div>
              </div>

              <div class="card">
                <img src={hulk} class="img" />
                <div class="textBox">
                  <p class="text head">ICP</p>
                  <span>Hulk</span>
                  <p class="text price">1.654,34ETH</p>
                </div>
              </div>

              <div class="card">
                <img src={thunder} class="img" />
                <div class="textBox">
                  <p class="text head">ICP</p>
                  <span>Thor</span>
                  <p class="text price">1.654,34ETH</p>
                </div>
              </div>
              <div class="card">
                <img src={deadpool} class="img" />
                <div class="textBox">
                  <p class="text head">ICP</p>
                  <span>Deadpool</span>
                  <p class="text price">1.654,34ETH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
