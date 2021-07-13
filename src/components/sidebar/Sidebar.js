import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

import {
  FiberManualRecord,
  Apps,
  Bookmark,
  Drafts,
  ExpandLess,
  ExpandMore,
  FileCopy,
  Inbox,
  InsertComment,
  People,
  Add,
  Create,
} from "@material-ui/icons";
import { firebase } from "./../../firebase";

const db = firebase.database();
function Sidebar() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const userRef = db.ref('rooms');
    userRef.on('value', (snapshot) => {
      let arrData = []
      snapshot.forEach(data => {
        arrData.push({
          id: data.key,
          name: data.val().name
        })
      })
      setChannels(arrData)
    })
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Slack clone</h2>
          <h3>
            <FiberManualRecord />
            Blueman
          </h3>
        </div>
        <Create />
      </div>
      <SidebarOption Icon={InsertComment} title="Threads" onchange />
      <SidebarOption title="Youtube" />
      <SidebarOption Icon={Inbox} title="Mentions & reactions" />
      <SidebarOption Icon={Drafts} title="Saved items" />
      <SidebarOption Icon={Bookmark} title="Channel browers" />
      <SidebarOption Icon={People} title="People & user groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File browers" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOption Icon={Add} addChannelOption title="Add channel" />

      {channels.map((channel) => (
        <SidebarOption title={channel.name} id={channel.id} />
      ))}
    </div>
  );
}

export default Sidebar;
