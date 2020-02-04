import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Collapse } from "antd";
import "antd/dist/antd.css";
import "./Card.css";
const { Panel } = Collapse;

/*
<Card
    imgUrl: string;
    title: string
    titleElement: React.ReactNode
    subtitle: string
    buttonElement: React.ReactNode
    expandedElement: React.ReactNode
/>
*/

/* <Card
title={'Lighthouse Course'}
subtitle={'How to lighthouse your friends'}
imgUrl={"https://image.freepik.com/free-photo/modern-glass-desk-interior-with-computer-devices-3d-rendering_117023-333.jpg"}
expandedElement={<div><div>XXX</div><div>XXX</div><div>XXX</div><div>XXX</div><div>XXX</div><div>XXX</div><div>XXX</div><div>XXX</div><div>XXX</div><div>XXX</div><div>XXX</div><div>XXX</div></div>}
/> */

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  callback(expanded) {
    this.setState({expanded: !expanded})
  }

  render() {
    const {
      imgUrl,
      title,
      titleElement,
      subtitle,
      buttonElement,
      expandedElement
    } = this.props;
    const { expanded } = this.state;

    const header = (
      <div className={"mycard" + (expanded ? " expanded" : "")}>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
            marginBottom: "20px"
          }}
        >
          <div style={{ display: "flex" }}>
            <img src={imgUrl} className={"mycard-image"} alt={"Error"} />
            <div className={"mycard-title-container"}>
              <div className={"mycard-title"}>
                {title}
                {titleElement}
              </div>
              <div className={"mycard-subtitle"}>{subtitle}</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {buttonElement}
            <FontAwesomeIcon
              icon={faChevronUp}
              className={"mycard-chevron" + (expanded ? " expanded" : "") }
              onClick={() => this.setState({ expanded: !expanded })}
            />
          </div>
        </div>
      </div>
    );
    return (
      <Collapse
        defaultActiveKey={["1"]}
        onChange={() => this.callback(expanded)}
        className={"my-collapse"}
      >
        <Panel className={"my-panel"} header={header} key="1" showArrow={false}>
          {expandedElement}
        </Panel>
      </Collapse>
    );
  }
}