import React from "react";
import classNames from "classnames/bind";
import styles from "./Invitation.module.scss";

import Section from "../shared/Section";
import Text from "../shared/Text";

const cx = classNames.bind(styles);

const Invitaiotn = ({ message }: { message: string }) => {
  return (
    <Section className={cx("contaienr")}>
      <IconPost className={cx("ico-post")} />
      <Text>{message}</Text>
    </Section>
  );
};

function IconPost({ className }: { className: string }) {
  return (
    <svg className={className} id="Layer_1" version="1.1" viewBox="0 0 71 85">
      <title />
      <g id="Layer_2">
        <g id="Layer_3">
          <path d="M66.3,8.7L66,8.6V5.5L4.7,58l20.2,3.3l17.8,18.2V64.9H66V9.5L66.3,8.7z M55,18.9L24.8,58.2l-13.3-2.2L55,18.9z M39.7,72.2    L27.5,59.7l30.9-40.4L39.8,61.9h-0.1V72.2z M63,61.9H43l20-45.6V61.9z" />
          <polygon points="46.7,75.1 49.7,75.1 49.7,72.4 56.5,72.4 56.5,69.4 46.7,69.4   " />
        </g>
      </g>
    </svg>
  );
}

export default Invitaiotn;
