import {ReactComponent as CarSvg} from '../../images/car.svg';
import {ReactComponent as PiggiSvg} from '../../images/pigi.svg';
import {ReactComponent as CartSvg} from '../../images/office.svg';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headLine: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees',
    buttonLabel: 'Get Started',
    imgStart: false,
    dark: true,
    primary: true,
    darkText: false,
    img: <CarSvg style={{width: '100%', margin: '0 0 10px 0', paddingRight: '0'}} />
}
export const homeObjTow = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headLine: 'Login to your account at any time',
    description: 'we have you covered no matter where you are located. All you need is an internet connection and a phone or computer.',
    buttonLabel: 'Learn More',
    imgStart: true,
    dark: false,
    primary: false,
    darkText: true,
    img: <PiggiSvg style={{width: '100%', margin: '0 0 10px 0', paddingRight: '0'}} />
}
export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join our Team',
    headLine: 'Creating an account is extremely easy',
    description: 'Get everything set up and ready an under 10 minutes. All you need to do is add your information and you are ready to go.',
    buttonLabel: 'Start Now',
    imgStart: false,
    dark: false,
    primary: false,
    darkText: true,
    img: <CartSvg style={{width: '100%', margin: '0 0 10px 0', paddingRight: '0'}} />
}
