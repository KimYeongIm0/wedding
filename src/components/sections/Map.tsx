import classNames from "classnames/bind";

import styles from "./Map.module.scss";

import Section from "@shared/Section";
import { useEffect, useRef } from "react";
import { Locaiton } from "../models/wedding";

const cx = classNames.bind(styles);

declare global {
  interface Window {
    kakao: any;
  }
}

function Map({ location }: { location: Locaiton }) {
  const mapContainer = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&autoload=false`;
    script.async = true;

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(
          location.lat,
          location.lng
        );

        const options = {
          center: position,
          level: 3,
        };

        const market = new window.kakao.maps.Marker({
          position,
        });
        const map = new window.kakao.maps.Map(mapContainer.current, options);
        market.setMap(map);
      });
    };
  }, [location]);

  return (
    <Section
      title={
        <div className={cx("wrap-header")}>
          <span className={cx("txt-title")}>오시는길</span>
          <span className={cx("txt-subtitle")}>{location.name}</span>
          <span className={cx("txt-subtitle")}>{location.address}</span>
        </div>
      }
    >
      <div className={cx("wrap-map")}>
        <div className={cx("map")} ref={mapContainer}></div>
        <a
          className={cx("btn-find-way")}
          href={location.link}
          target="_blank"
          rel="noreferrer"
        >
          길찾기
        </a>
      </div>
    </Section>
  );
}
export default Map;
