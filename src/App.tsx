import classNames from "classnames/bind";

import styles from "./App.module.scss";

import FullScreenMessage from "@shared/FullScreenMessage";
import Heading from "./components/sections/Heading";
import Video from "./components/sections/Video";
import Intro from "./components/sections/Intro";
import Share from "./components/sections/Share";

import { Wedding } from "@models/wedding";
import ImageGallery from "./components/sections/ImageGallery";
import Invitaiotn from "./components/sections/Invitaiotn";
import Calendar from "./components/sections/Calendar";
import Map from "./components/sections/Map";
import Contact from "./components/sections/Contact";
import useWedding from "./hooks/useWedding";

const cx = classNames.bind(styles);

function App() {
  const { wedding, isLoading, error } = useWedding();

  if (isLoading) {
    return <FullScreenMessage type="loading" />;
  }

  if (error) {
    return <FullScreenMessage type="error" />;
  }

  if (wedding == null) {
    return null;
  }

  const {
    date,
    galleryImages,
    groom,
    bride,
    location,
    message: { intro, invitation },
  } = wedding;

  return (
    <div className={cx("container")}>
      <Heading date={date} />
      <Video />
      <Intro
        groomName={groom.name}
        brideName={bride.name}
        locationName={location.name}
        date={date}
        message={intro}
      />
      <Invitaiotn message={invitation} />
      <ImageGallery images={galleryImages} />
      <Calendar date={date} />
      <Map location={location} />
      <Contact groom={groom} bride={bride} />
      <Share groomName={groom.name} brideName={bride.name} date={date} />
    </div>
  );
}

export default App;
