import React, { useState } from "react";
import { createPost } from "../../../api/FirestoreAPI";
import "./index.scss";
import ModalComponent from "../Modal";

export default function PostStatus() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");

  //   input dispatch to firebase
  const handleSubmit = async () => {
    await createPost(status);
    await setOpen(false);
    await setStatus("");
  };

  return (
    <div className="post-status-main">
      <div className="post-status">
        <button onClick={() => setOpen(true)} className="open-post-modal">
          Start a post
        </button>
      </div>
      <ModalComponent
        open={open}
        setOpen={setOpen}
        status={status}
        setStatus={setStatus}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
