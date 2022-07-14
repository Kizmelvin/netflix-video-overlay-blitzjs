import {
  IoThumbsUpOutline,
  IoCaretForwardOutline,
  IoAdd,
  IoChevronDownOutline,
} from "react-icons/io5"

function Overlay({ setPlayVideo, setIsPlaying }) {
  const playBtn = () => {
    setPlayVideo(true)
    setIsPlaying(true)
  }
  return (
    <div className="overlay-main">
      <div className="controls">
        <div className="right-controls">
          <button onClick={playBtn} style={{ background: "white", color: "black" }}>
            <IoCaretForwardOutline />
          </button>
          <button>
            <IoAdd />
          </button>
          <button>
            <IoThumbsUpOutline />
          </button>
        </div>
        <div className="left-controls">
          <button>
            <IoChevronDownOutline />
          </button>
        </div>
      </div>
      <div className="descriptions">
        <h3>90% Match</h3>
        <button>
          {" "}
          <strong>16+</strong>{" "}
        </button>
        <h4>3 Seasons</h4>
        <button>
          {" "}
          <strong>HD</strong>{" "}
        </button>
      </div>
      <div className="tags">
        <ul>
          <li>Romance</li>
          <li>Action</li>
          <li>Thriller</li>
        </ul>
      </div>
    </div>
  )
}

export default Overlay
