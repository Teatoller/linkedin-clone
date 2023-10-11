import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "antd";
import "./index.scss";

export default function ModalComponent({ open, setOpen, status, setStatus, handleSubmit }) {
  const [loading, setLoading] = useState(false);

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
            disabled={status.length > 0 ? false : true}
            loading={loading}
            onClick={handleSubmit}
          >
            Post
          </Button>,
        ]}
      >
        <input
          className="modal-input"
          type="text"
          placeholder="What do you want to talk about?"
          value={status}
          onChange={(event) => {
            setStatus(event.target.value);
          }}
        />
      </Modal>
    </>
  );
}

ModalComponent.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  setStatus: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
