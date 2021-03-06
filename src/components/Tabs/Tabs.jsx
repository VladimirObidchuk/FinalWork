import cn from "classnames";
import "./Tabs.scss";
import React, { useState } from "react";
import HorizontalProductCard from "../HorizontalProductCard/HorizontalProductCard";

const Tabs = () => {
  const [tab, setTab] = useState("tab__1");

  return (
    <div className="header__footer">
      <nav className="header__nav">
        <div>
          <ul className="tabs__nav">
            <li>
              <button
                className={cn("tabs__item", { active: tab === "tab__1" })}
                onClick={() => setTab("tab__1")}
              >
                OUR SERVICES
              </button>
            </li>
            <li>
              <button
                className={cn("tabs__item", { active: tab === "tab__2" })}
                onClick={() => setTab("tab__2")}
              >
                OUR SERVICES
              </button>
            </li>
            <li>
              <button
                className={cn("tabs__item", { active: tab === "tab__3" })}
                onClick={() => setTab("tab__3")}
              >
                OUR SERVICES
              </button>
            </li>
            <li>
              <button
                className={cn("tabs__item", { active: tab === "tab__4" })}
                onClick={() => setTab("tab__4")}
              >
                OUR SERVICES
              </button>
            </li>
            <li>
              <button
                className={cn("tabs__item", { active: tab === "tab__5" })}
                onClick={() => setTab("tab__5")}
              >
                OUR SERVICES
              </button>
            </li>
          </ul>
          <div className="tabs__content">
            {tab === "tab__1" && (
              <div className="tab__item">
                <div className="card-grid">
                  {[
                    "BG_card1.png",
                    "BG_card2.png",
                    "BG_card3.png",
                    "BG_card4.png",
                    "BG_card5.png",
                    "BG_card6.png",
                  ].map((image) => (
                    <HorizontalProductCard key={image} image={image} />
                  ))}
                </div>
              </div>
            )}
            {tab === "tab__2" && (
              <div className="tab__item tab__2">
                <div className="tabs__link">
                  <div className="card-grid">
                    {[
                      "BG_card7.png",
                      "BG_card8.png",
                      "BG_card9.png",
                      "BG_card10.png",
                      "BG_card11.png",
                      "BG_card12.png",
                    ].map((image) => (
                      <HorizontalProductCard key={image} image={image} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            {tab === "tab__3" && (
              <div className="tab__item tab__3" id="tab__3">
                <div className="card-grid">
                  {[
                    "BG_card13.png",
                    "BG_card14.png",
                    "BG_card15.png",
                    "BG_card16.png",
                    "BG_card17.png",
                    "BG_card18.png",
                  ].map((image) => (
                    <HorizontalProductCard key={image} image={image} />
                  ))}
                </div>
              </div>
            )}
            {tab === "tab__4" && (
              <div className="tab__item tab__4" id="tab__4">
                <div className="card-grid">
                  {[
                    "BG_card1.png",
                    "BG_card2.png",
                    "BG_card3.png",
                    "BG_card4.png",
                    "BG_card5.png",
                    "BG_card6.png",
                  ].map((image) => (
                    <HorizontalProductCard key={image} image={image} />
                  ))}
                </div>
              </div>
            )}
            {tab === "tab__5" && (
              <div className="tab__item tab__5" id="tab__5">
                <div className="card-grid">
                  {[
                    "BG_card7.png",
                    "BG_card8.png",
                    "BG_card9.png",
                    "BG_card10.png",
                    "BG_card11.png",
                    "BG_card12.png",
                  ].map((image) => (
                    <HorizontalProductCard key={image} image={image} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Tabs;
