import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./index.scss";

export default function ModalComponent({ open, setOpen }) {
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = (e) => {
    console.log(e);
    setOpen(false);
  };
  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };
  return (
    <>
      <Modal
        title="Create a post"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          disabled: true,
        }}
        cancelButtonProps={{
          disabled: true,
        }}
        footer={[
          <Button
            key="submit"
            type="primary"
            disabled
            loading={loading}
            onClick={handleOk}
          >
            Post
          </Button>,
        ]}
      >
        <input
          className="modal-input"
          type="text"
          placeholder="What do you want to talk about?"
        />
      </Modal>
    </>
  );
}
