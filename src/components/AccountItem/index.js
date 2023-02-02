import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://hoaky68.com/wp-content/uploads/2022/02/dao-le-phuong-hoa-tiktok-la-ai.jpg"
                alt="hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>phuonghoaa</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('userName')}>Dao Le Phuong Hoa</span>
            </div>
        </div>
    );
}

export default AccountItem;
