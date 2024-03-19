import { weWorkSection, weWorkSection2 } from "@/data/weWorkSection";
import React, { useState } from "react";
import SingleWeWork from "./SingleWeWork";
import { useRouter } from "next/router";

const { title, tabBtns, tabsContents } = weWorkSection;
const { title2, tabBtns2, tabsContents2 } = weWorkSection2;

const WeWorkSection = () => {
  const [current, setCurrent] = useState("tab-1");
  const url = useRouter();

  return (
    <section className="we-work-section">
      <div className="auto-container">
        <div className="work-tabs tabs-box">
          <ul className="tab-btns tab-buttons clearfix">
            {url.pathname === "/pool/opening"
              ? tabBtns.map(({ id, title }) => (
                  <li
                    onClick={() => setCurrent(id)}
                    key={id}
                    className={`tab-btn${current === id ? " active-btn" : ""}`}
                  >
                    <span>{title}</span>
                  </li>
                ))
              : tabBtns2.map(({ id, title }) => (
                  <li
                    onClick={() => setCurrent(id)}
                    key={id}
                    className={`tab-btn${current === id ? " active-btn" : ""}`}
                  >
                    <span>{title}</span>
                  </li>
                ))}
          </ul>
          <div className="tabs-content">
            {url.pathname === "/pool/opening"
              ? tabsContents.map((work) => (
                  <SingleWeWork key={work.id} work={work} current={current} />
                ))
              : tabsContents2.map((work) => (
                  <SingleWeWork key={work.id} work={work} current={current} />
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeWorkSection;
