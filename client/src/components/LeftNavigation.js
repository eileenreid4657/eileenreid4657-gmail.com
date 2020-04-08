import React from "react";
import facebookIcon from "../icons/facebookIcon.png";
import twitterIcon from "../icons/twitterIcon.png";
import instagramIcon from "../icons/instagramIcon.png";
import dailyIcon from "../icons/dailyIcon.png";
import calenderIcon from "../icons/calenderIcon.png";
import logoutIcon from "../icons/logoutIcon.png";

export default function LeftNav({ id, name }) {
  console.log("LeftNav id, name", id + " " + name);  
  return (
      <div className="leftNav">
        <ul className="mainNavItems">
          <li>
            <img
              src={dailyIcon}
              style={{ marginRight: 4, height: 30, width: 30 }}
            />
            <sup>Daily</sup>
          </li>
          <li>
            <img
              src={calenderIcon}
              style={{ marginRight: 4, height: 30, width: 30 }}
            />
            <sup>Weekly</sup>
          </li>
          <li>
            <img  src={instagramIcon} className="defaultIcons" />
            <sup><a target="#" href="https://www.instagram.com/p/B-tz4qLpBBQ/">Instagram</a></sup>
          </li>
          <li>
            <img src={facebookIcon} className="defaultIcons" />
            <sup>Facebook</sup>
          </li>
          <li>
            <img src={twitterIcon} className="defaultIcons" />
            <sup>Twitter</sup>
          </li>
          <li>
            <img
              src={logoutIcon}
              style={{ marginRight: 4, height: 30, width: 30 }}
            />
            <sup>Logout</sup>
          </li>
        </ul>
      </div>
    );
  }