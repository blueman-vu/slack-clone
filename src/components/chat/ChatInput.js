import React, { useState } from "react";
import "./ChatInput.css";
import { useStateValue } from "../Utility/StateProvider";
import { firebase } from "./../../firebase";

function ChatInput({ channelName, channelId }) {
  //const db = firebase.database();

  //const [input, setInput] = useState("");
 // const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    // e.preventDefault();
    // console.log(typeof channelName);
    // console.log(typeof channelId);
    // if (channelId) {
    //   db.collection("rooms").doc(channelId).collection("messages").add({
    //     message: input,
    //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //     user: user.displayName,
    //     userImage: user.photoURL,
    //   });
    // }
    // setInput("");
  };

  return (
    <div className="chatInput">
      <form>
        {/* <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName?.toLowerCase()}`}
        /> */}
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
