import Section from "../shared/Section";
import styles from "./Share.module.scss";
import classNames from "classnames/bind";
import { useEffect } from "react";
import { parseISO, format } from "date-fns";
import { ko } from "date-fns/locale";

const cx = classNames.bind(styles);

declare global {
  interface Window {
    Kakao: any;
  }
}

interface ShareProps {
  groomName: string;
  brideName: string;
  date: string;
}

const Share = ({ groomName, brideName, date }: ShareProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.3.0/kakao.min.js";
    script.async = true;

    document.head.appendChild(script);

    script.onload = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.REACT_APP_KAKAO_APP_KEY);
      }
    };
  }, []);

  const handleShareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: `${groomName} & ${brideName}`,
        description: `${
          (format(parseISO(date), "M월 d일 eeee aaa h시"),
          {
            locale: ko,
          })
        }`,
        imageUrl:
          "data:image/jpeg;base64,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",
        link: {
          mobileWebUrl: window.location.origin,
          webUrl: window.location.origin,
        },
      },
      buttons: [
        {
          title: "청첩장 보기",
          link: {
            mobileWebUrl: window.location.origin,
            webUrl: window.location.origin,
          },
        },
      ],
    });
  };
  return (
    <Section title="공유하기">
      <div className={cx("wrap-share")}>
        <button onClick={handleShareKakao}>KakaoTalk공유</button>
      </div>
    </Section>
  );
};

export default Share;
