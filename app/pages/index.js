import { Cloudinary } from "@cloudinary/url-gen"
import Overlay from "components/Overlay"
import { useState } from "react"
import ReactPlayer from "react-player"

const Home = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [overlay, setOverlay] = useState(false)
  const [vidControl, setVidControl] = useState(false)

  const cld = new Cloudinary({
    cloud: {
      cloudName: "kizmelvin",
    },
  })
  const myVideo = cld.video("gvf9uuemq7mfa6kevvfp.mov").toURL()

  const mouseEnter = () => {
    setOverlay(true)
    setPlayVideo(true)
    if (isPlaying) {
      setOverlay(false)
      setVidControl(true)
    }
  }

  const mouseLeave = () => {
    setOverlay(false)
    if (!isPlaying) {
      setPlayVideo(false)
    }
  }
  const videoEnded = () => {
    setVidControl(false)
    setPlayVideo(false)
    setIsPlaying(false)
  }

  return (
    <div className="container">
      <h1>
        <strong>Netflix-style Video Overlays in Blitz.js</strong>
      </h1>
      <h5>Hover to play the video and see the overlays</h5>
      <main>
        <div className="wrapper" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <ReactPlayer
            onEnded={videoEnded}
            controls={vidControl}
            width={"600px"}
            playing={playVideo}
            url={myVideo}
          />{" "}
          {overlay && <Overlay setPlayVideo={setPlayVideo} setIsPlaying={setIsPlaying} />}
        </div>
      </main>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;700&display=swap");

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Libre Franklin", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          box-sizing: border-box;
        }
        .container {
          // min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 0;
          width: 600px;
          position: relative;
          background: grey;
        }
        .wrapper {
          cursor: pointer;
        }

        .overlay-main {
          height: auto;
          width: 100%;
          background-color: rgb(10, 12, 10);
          text-align: center;
          position: absolute;
          bottom: 5;
          padding: 1rem;
        }

        .controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .controls button {
          padding: 0.3rem;
          margin-left: 1rem;
          cursor: pointer;
          font-size: 1.6rem;
          border-radius: 50%;
          background: rgb(0, 14, 19);
          color: white;
          border: 0.5px solid white;
        }
        .descriptions {
          padding: 0.1rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .descriptions button {
          font-size: 1rem;
          background: rgb(0, 14, 19);
          color: white;
        }
        .descriptions h3 {
          color: rgb(54, 179, 4);
        }
        .descriptions h4 {
          color: white;
        }
        .tags ul {
          padding: 0;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        li {
          padding: 0;
          font-size: 1.2rem;
          // background: rgb(0, 14, 19);
          color: white;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
export default Home
