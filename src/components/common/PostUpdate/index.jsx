import React, { useState, useMemo } from "react";
import { createPost, getPosts } from "../../../api/FirestoreAPI";
import "./index.scss";
import ModalComponent from "../Modal";

export default function PostStatus() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allPosts, setAllPosts] = useState([]);

  //   input dispatch to firebase
  const handleSubmit = async () => {
    await createPost(status);
    await setOpen(false);
    await setStatus("");
  };

  useMemo(() => {
    getPosts(setAllPosts);
  });

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
      {allPosts?.map((posts) => {
        return (
          <>
            <p>{posts?.status || posts?.post}</p>
          </>
        );
      })}
    </div>
  );
}
