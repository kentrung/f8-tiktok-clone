import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Image from '../Image';

import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <Image
        className={cx('avatar')}
        src="https://images.viblo.asia/60x60/35ae4c25-3806-4f37-b089-fb2af1ec226d.jpg"
        alt="kentrung"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>KenTrung</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>@kentrung256</span>
      </div>
    </div>
  );
}

export default AccountItem;
