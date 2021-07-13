import React from "react";
import { useHistory } from "react-router-dom";
import "./SidebarOption.css";
import { firebase } from "./../../firebase";

function SidebarOption({ Icon, title, id, addChannelOption }) {
  const history = useHistory();
  const db = firebase.database();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`)
    } else {
      history.push(title)
    }
  }

  const addChannel = () => {
    const channelName = prompt('please enter the channel name')
    if (channelName) {
      const ref = db.ref("rooms");
      ref.push({
        name: channelName
      })
    }
  }
  return (
    <div
      className="sidebarOption"
      // ternary condition will not executed in right way
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption_channel">
          <span className="sidebarOption_hash">#</span> {title}{" "}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
