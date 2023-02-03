import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    normal = false,
    disabled = false,
    outline = false,
    rounded = false,
    size = '',
    children,
    leftIcon,
    rightIcon,
    menuIcon,
    onClick,
    ...passPprops
}) {
    let Comp = 'button';

    const props = {
        onClick,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof key === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary: primary,
        outline: outline,
        [size]: size,
        normal: normal,
        disabled: disabled,
        rounded: rounded,
    });
    return (
        <Comp className={classes} {...props} {...passPprops}>
            {leftIcon && <span className={cx('icon-left', menuIcon)}>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className={cx('icon-right')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
