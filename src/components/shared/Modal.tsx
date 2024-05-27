import Dimmed from "./Dimmed";
import styles from "./Modal.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

interface ModlaProps {
  open: boolean;
  title?: string;
  body: React.ReactNode;
  rightButtonClick?: string;
  onRightonClick: () => void;
  leftButtonLabel?: string;
  onLeftButtonClick: () => void;
}

const Modal = ({ open }: ModlaProps) => {
  if (open === false) {
    return null;
  }
  return (
    <Dimmed>
      <div className={cx("wrap-modal")}>
        <div className={cx("wrap-body")}>
          <div className={cx("wrap-content")}></div>
        </div>
      </div>
    </Dimmed>
  );
};

export default Modal;
