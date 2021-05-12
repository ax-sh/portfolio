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
      "3d": "http://latido-3d-v1.s3-website.ap-south-1.amazonaws.com/",
      blog: "http://bottle-project-latido-web-test.s3-website-us-east-1.amazonaws.com/blog",
      about:
        " http://bottle-project-latido-web-test.s3-website-us-east-1.amazonaws.com/about",
      factory_tour:
        "http://bottle-project-latido-web-test.s3-website-us-east-1.amazonaws.com/factory-tour",
      custom_podcast_player:
        "http://bottle-project-latido-web-test.s3-website-us-east-1.amazonaws.com/blog/Test-Audio-Published",
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
