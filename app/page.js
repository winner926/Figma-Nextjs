"use client";
import * as React from "react";
import PropTypes from "prop-types";

import "@/src/assets/style/app.css";
import Box from "@mui/material/Box";
import { Button, Card, ThemeProvider } from "@mui/material";
import Container from "@mui/material/Container";
import Link from "next/link";
import Image from "next/image";
import image1 from "@/src/assets/image/image6.png";
import image2 from "@/src/assets/image/image7.png";
import image3 from "@/src/assets/image/image8.png";

function Landing_Page() {
  return (
    <Box>
      <header className="landing_header">
        <Container
          component="main"
          sx={{
            maxWidth: "1620px!important",
            display: "flex",
            justifyContent: "end",
            padding: "0 65px!important",
          }}
        >
          <Link href="#">
            <Button
              className="landing_header__pricebtn"
              sx={{ width: "200px", height: "100px", fontSize: "18px" }}
            >
              Pricing
            </Button>
          </Link>
          <Link href="/auth/login">
            <Button
              className="landing_header__loginbtn"
              sx={{ width: "200px", height: "100px", fontSize: "18px" }}
            >
              Login →
            </Button>
          </Link>
        </Container>
      </header>
      <Container component="main" sx={{ maxWidth: "1620px!important" }}>
        <section className="landing_banner">
          <div className="banner_intro">
            <h1>
              <Link href="#" className="banner_intro__chat">
                GPT-Powered Live Chat
              </Link>
              <br></br>
              Your Gateway to Productive Communication
            </h1>
            <p>
              Talking to your customers should be easy.<br></br>Chat with them
              from colloboration<br></br>tools you already use: Teams and Slack.
            </p>
            <p>
              Build ChatGpt powered chatbots trained on<br></br>your website
              data. Easily handoff chats<br></br>between ChatGpt and human
              agents.{" "}
            </p>
            <div className="banner_intro__link">
              <Button className="intro_free">Try for Free →</Button>
              <Button className="intro_demo">View Demo</Button>
            </div>
          </div>
          <div className="banner_cover">
            <Image
              src={image1}
              width={805}
              height={513}
              alt="image"
              layout="responsive"
            />
          </div>
        </section>
        <section className="landing_sales">
          <div className="sales_intro">
            <h4>Build revenue</h4>
            <h2>Close More Sales Online</h2>
            <span>
              Engage potential customers when they need your help, close
              <br></br>more deals, and increase online revenue.
            </span>
            <ul className="sales_intro__list">
              <li>
                <p>
                  <span>Answer questions in real-time. </span>Connect with
                  customers when they<br></br> are about to buy.
                </p>
              </li>
              <li>
                <p>
                  <span>Capture leads. </span>Automate your lead capture and
                  push transcripts<br></br>and leads right into your CRM,
                  ticketing, or marketing systems.
                </p>
              </li>
              <li>
                <p>
                  <span>Automate your sales process. </span>Pre-qualify visitors
                  with initial<br></br> questions, automate via chatbots, and
                  escalate to your agents<br></br>when it make sense.
                </p>
              </li>
            </ul>
          </div>
          <div className="sales_cover">
            <Image
              src={image2}
              width={576}
              height={443}
              alt="image"
              layout="responsive"
            ></Image>
          </div>
        </section>
        <section className="landing_snippet">
          <div className="snippet_intro">
            <h4>Step 2</h4>
            <h2>
              Embed Live Chat Snippet On<br></br>Your Website
            </h2>
            <span>
              First, make sure that the live chat widget is visible on your
              <br></br> website. This is what customers will use to talk to you.
            </span>
            <p>
              To make it appear, either insert the live chat code snippet into
              your<br></br> web page or use special plugins provided by Social
              Intents for<br></br> platforms like Shopify, WordPress,
              Bigcommerce, or Wix.
            </p>
          </div>
          <div className="snippet_cover">
            <Image
              src={image3}
              width={672}
              height={365}
              alt="Imgae"
              layout="responsive"
            ></Image>
          </div>
        </section>
        <section className="landing_faq">
          <h2 className="faq_title">Frequently Asked Questions.</h2>
          <div className="landing_faq__view">
            <div className="faq_chat">
              <h3>Have any Questions?</h3>
              <span>
                Can't find the answer you're looking for? Chat with us.
              </span>
              <Button className="faq_chatBtn">Chat With Us →</Button>
            </div>
            <div className="faq_detail">
              <Card className="faq_detail__item">
                <h3>Who should use Social Intents?</h3>
                <p>
                  Small businesses, entrepreneurs, marketers, and anyone who
                  wants to improve their sales. Especially teams that use
                  Microsoft Teams, Slack, Zoom, or Webex.
                </p>
              </Card>
              <Card className="faq_detail__item">
                <h3>Is there a Free Trial?</h3>
                <p>
                  Yes! We offer a 14-Day free pro trial with all the bells and
                  whistles to make sure you love the product. Cancel at any time
                  and there are never any contracts.
                </p>
              </Card>
              <Card className="faq_detail__item">
                <h3>Can I use live chat on multiple websites?</h3>
                <p>
                  Yes - absolutely! Each of our plans supports a tiered number
                  of websites. So just pick a plan that fits your needs.
                </p>
              </Card>
              <Card className="faq_detail__item">
                <h3>Do I have to sign a contract?</h3>
                <p>
                  No! There are no contracts and you can cancel at any time.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </Container>
      <footer className="landing_footer">
        <Container
          component="main"
          sx={{ maxWidth: "1620px!important", padding: "45px 0 0 0" }}
        >
          <div className="footer_content">
            <div className="footer_reserved">
              <span>© Social Intents, LLC. All rights reserved.</span>
            </div>
            <div className="footer_link">
              <Link href="#">
                <span>Terms& Conditions &nbsp;</span>
              </Link>
              <Link href="#">
                <span>&nbsp; Privacy Policy</span>
              </Link>
            </div>
          </div>
        </Container>
      </footer>
    </Box>
  );
}

Landing_Page.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Landing_Page;
