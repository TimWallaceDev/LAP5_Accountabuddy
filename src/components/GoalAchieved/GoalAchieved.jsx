import React, { useState } from "react";
import "./GoalAchieved.scss";
import { ReactComponent as GoalAchievedSVG1 } from "../../assets/images/GoalAchieved1.svg";
import { ReactComponent as GoalAchievedSVG2 } from "../../assets/images/GoalAchieved2.svg";
import { ReactComponent as Confetti } from "../../assets/images/Confetti.svg";
import user1Picture from "../../assets/images/user1.png";
import user2Picture from "../../assets/images/user2.png";

const GoalAchieved = () => {
  const [user1Pic, setUser1Pic] = useState(user1Picture);
  const [user2Pic, setUser2Pic] = useState(user2Picture);

  return (
    <div className="goalachieved">
      <h1 className="goalachieved__title">Goal achieved!</h1>
      <div className="goalachieved__users">
        <div className="goalachieved__user">
          <Confetti className="goalachieved__confetti" />
          <img
            src={user1Pic}
            alt="user1 avatar"
            className="goalachieved__avatar"
          />
        </div>
        <div className="goalachieved__user">
          <Confetti className="goalachieved__confetti" />
          <img
            src={user2Pic}
            alt="user2 avatar"
            className="goalachieved__avatar"
          />
        </div>
      </div>
      <div className="goalachieved__svgs">
        <GoalAchievedSVG1 className="goalachieved__svg goalachieved__svg--1" />
        <GoalAchievedSVG2 className="goalachieved__svg goalachieved__svg--2" />
      </div>
    </div>
  );
};

export default GoalAchieved;
