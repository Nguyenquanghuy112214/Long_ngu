import ProfileDetail from '~/components/profiledetail/ProfileDetail';
import HeaderProfile from '~/components/headerprofile/HeaderProfile';

import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
const cx = classNames.bind(styles);
function Profile() {
	return (
		<div className={cx('wrapper')}>
			<HeaderProfile />

			<ProfileDetail />
		</div>
	);
}

export default Profile;
