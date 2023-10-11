import React, {useState} from "react";
import "./index.scss";
import ModalComponent from "../Modal";

export default function PostStatus() {
    const [open, setOpen] = useState(false);
  return (
    <div className="post-status-main">
      <div className="post-status"><button onClick={()=> setOpen(true)} className="open-post-modal">Start a post</button></div>
      <ModalComponent open={open} setOpen={setOpen} />
    </div>
  );
}
