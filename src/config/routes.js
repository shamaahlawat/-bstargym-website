import RootContainer from '../pages/root_container';
import MainPage from '../pages/main';
import About from '../pages/about/about';
import Media from '../pages/media';
import Packages from '../pages/packages';
import BhavinPatel from '../pages/about/bhavin_patel';
import JohnAbraham from '../pages/about/john_abraham';
import ContactUs from '../pages/contactUs';
import Home from '../pages/home';
import CafeBar from '../pages/cafeBar';
import DevDesai from '../pages/about/dev_desai';
import MissionAndVision from '../pages/about/mission_and_vision';
import JA17 from '../pages/ja17';
const AppRoutes = {
	path: '/',
	component: RootContainer,
	childRoutes: [

		{
			path: 'about',
			component: About
		},
		{
			path: 'media',
			component: Media
		},
		{
			path: 'packages',
			component: Packages
		},
		{
			path: 'bhavin_patel',
			component: BhavinPatel
		},
		{
			path: 'john_abraham',
			component: JohnAbraham
		},
		{
			path: 'contactUs',
			component: ContactUs
		},
		{
			path: '',
			component: Home
		},
		{
			path: 'cafeBar',
			component: CafeBar
		},
		{
			path: 'dev_desai',
			component: DevDesai
		},
		{
			path: 'mission_and_vision',
			component: MissionAndVision
		},
		{
			path: 'ja17',
			component: JA17
		}
	]
};

module.exports = AppRoutes;
