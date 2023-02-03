import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);
function Wrapper({ children, onlyPadding }) {
    return <div className={cx('wrapper', onlyPadding)}>{children}</div>;
}

export default Wrapper;
