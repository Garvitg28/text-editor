import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Quill from "quill";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import "./Text.css";

const client = new W3CWebSocket('ws://localhost:8000/ws/editor/YOUR_ROOM_NAME');

function Text({ content, setContent }) {
  useEffect(() => {
    let quill = null;

      if (quill) {
        quill.setText(content);
      }
    

    const initializeQuill = () => {
      if (!quill) {
        quill = new Quill("#editor", {
          theme: "snow",
        });
        quill.on("text-change", () => {
          const content = quill.root.innerHTML;
          setContent(content);
        });
      }
    };

    initializeQuill();

    return () => {
      if (quill) {
        quill = null;
      }
    };
  }, []);

  return (
    <>
      <div className="w-full flex">
        <div className="w-full flex flex-col ">
          <Navbar />
          <div className="w-full flex flex-col">
            <div id="editor">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Text;
