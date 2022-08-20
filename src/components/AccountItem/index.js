import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '../Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  const { nickname, full_name, tick, avatar } = data;

  return (
    <Link to={`@${nickname}`} className={cx('wrapper')}>
      <Image className={cx('avatar')} src={avatar} alt={nickname} />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>{full_name}</span>
          {tick && (
            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
          )}
        </h4>
        <span className={cx('username')}>@{nickname}</span>
      </div>
    </Link>
  );
}

export default AccountItem;
