import React from "react";

import MobileDetect from "mobile-detect";
import Carousel from "./Carousel";

class Index extends React.Component {
  static getInitialProps({ req, isServer }) {
    let userAgent;
    let deviceType;
    if (req) {
      userAgent = req.headers["user-agent"];
    } else {
      userAgent = navigator.userAgent;
    }
    const md = new MobileDetect(userAgent);
    if (md.tablet()) {
      deviceType = "tablet";
    } else if (md.mobile()) {
      deviceType = "mobile";
    } else {
      deviceType = "desktop";
    }
    return { deviceType };
  }
  render() {
    return (
      <Carousel deviceType={this.props.deviceType}>
        <img style={{ padding: 10, width: "100%" }} src='https://www.catster.com/wp-content/uploads/2018/05/A-gray-cat-crying-looking-upset.jpg' />
        <img style={{ padding: 10, width: "100%" }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg' />
        <img style={{ padding: 10, width: "100%" }} src='https://d3n8a8pro7vhmx.cloudfront.net/taxpayers/pages/679/attachments/original/1499663166/4-ways-cheer-up-depressed-cat.jpg?1499663166' />
      </Carousel>
    );
  }
}

export default Index;
