import classNames from "classnames/bind";

import styles from "./App.module.scss";

import Section from "@shared/Section";
import { useEffect } from "react";

const cx = classNames.bind(styles);

function Map() {
  useEffect(() => {
    const script = document.createElement("sciprt");
  }, []);
  return <Section>map</Section>;
}
export default Map;
