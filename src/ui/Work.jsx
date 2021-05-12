import React from "react";
import L_blog from "../assets/l_blog.png";
import Obfuscate from "react-obfuscate";

const Selected = ({ data, callback }) => {
  return (
    <div>
      <button
        style={{
          float: "right",
          backgroundColor: "#f05454",
          border: "none",
          padding: "0.1em 1em ",
          borderRadius: "1em",
          color: "#fff",
          fontSize: "1em",
          cursor: "pointer",
        }}
        onClick={callback}
      >
        Close
      </button>
      <ul
        style={{
          listStyle: "none",
          textAlign: "left",
          fontSize: "3rem",
        }}
      >
        {Object.entries(data).map(([label, link]) => (
          <li>
            <Obfuscate target="_blank" href={link}>
              {label}
            </Obfuscate>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Work = () => {
  const [works] = React.useState({
    proj_l: {
      "3d": "https://bit.ly/3o91skp",
      blog: "https://bit.ly/3tH5bH4",
      about: "https://bit.ly/3feXZwE",
      factory_tour: "https://bit.ly/3bjAcKG",
      custom_podcast_player: "https://bit.ly/3y7GUxi",
    },
  });
  const [selected, setSelected] = React.useState();
  return (
    <div id="work">
      <h1>WORK</h1>
      <div className="work-wrapper scroll-custom">
        {!selected ? (
          Object.entries(works).map(([key, value]) => (
            <div style={{ cursor: "pointer" }} onClick={() => setSelected(key)}>
              <span style={{ background: "#000" }}>{key}</span>
              <img
                src={L_blog}
                style={{ height: "100%", objectFit: "contain" }}
              />
            </div>
          ))
        ) : (
          <Selected data={works[selected]} callback={() => setSelected("")} />
        )}
      </div>
    </div>
  );
};
