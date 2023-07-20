import React, { useState } from "react";
import { Box, Button, Grid, IconButton, Input, TextField } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import { Flag } from "@mui/icons-material";
import Image from "next/image";
import flagImg from "@/src/assets/image/1.png";

const MessageBox = ({ setMessagebox }) => {
  return (
    <>
      <Grid container>
        <section className="msger">
          <div className="msger_header">
            <span>JN </span>
            <h2> Aly Kashif</h2>
          </div>
          <div className="msger_view">
            <div style={{ textAlign: "center" }}>
              <span className="msger_view__date">
                Tuesday, June 06.2023 04:15PM
              </span>
            </div>
            <div className="recep_msger">
              <Image
                className="flag_img"
                src={flagImg}
                width={32}
                height={20}
                alt="image"
              />
              <div className="recep_msger__detail">
                <span className="recep_msger__nam">Aly</span>
                <div className="recep_msger__box">
                  <p>
                    Welcome to UI HUT! Whether you're opening a new online store
                    or are interested in using UI HUT as your platform, you can
                    find out more information about your options here.
                  </p>
                </div>
              </div>
              <div style={{ textAlign: "end" }}>
                <span className="recep_msger__dat">04:17PM</span>
              </div>
            </div>
            <div className="sent_msger">
              <div className="sent_msger__detail">
                <div style={{ textAlign: "end", padding: "0 15px 0 0" }}>
                  <span className="sent_msger__nam">kashi (ME)</span>
                </div>
                <div className="sent_msger__box">
                  <p>
                    We work to make sure your business is available when your
                    customers want to shop. available when your customers want
                    to shop.
                  </p>
                </div>
                <div style={{ textAlign: "end", padding: "0 25px 0 0" }}>
                  <span className="sent_msger__dat">04:18PM</span>
                </div>
              </div>
              <span className="sent_avtr">K</span>
            </div>
            <div className="recep_msger">
              <Image
                className="flag_img"
                src={flagImg}
                width={32}
                height={20}
                alt="image"
              />
              <div className="recep_msger__detail">
                <span className="recep_msger__nam">Aly</span>
                <div className="recep_msger__box">
                  <p>
                    Welcome to UI HUT! Whether you're opening a new online store
                    or are interested in using UI HUT as your platform, you can
                    find out more information about your options here.
                  </p>
                </div>
              </div>
              <div style={{ textAlign: "end" }}>
                <span className="recep_msger__dat">04:17PM</span>
              </div>
            </div>
            <div className="sent_msger">
              <div className="sent_msger__detail">
                <div style={{ textAlign: "end", padding: "0 15px 0 0" }}>
                  <span className="sent_msger__nam">kashi (ME)</span>
                </div>
                <div className="sent_msger__box">
                  <p>
                    visit our website from my profile and create an account.
                    Then go "pricing" and select a plan.
                  </p>
                </div>
                <div style={{ textAlign: "end", padding: "0 25px 0 0" }}>
                  <span className="sent_msger__dat">04:18PM</span>
                </div>
              </div>
              <span className="sent_avtr">K</span>
            </div>
          </div>
        </section>
      </Grid>
    </>
  );
};

export default MessageBox;
