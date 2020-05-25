import '../styles/main.scss'
import ourDentists from '../pug/pages/home/our-dentists/our-dentists';
import treatment from '../pug/pages/home/treatment/treatment';
import { mobileNav } from '../pug/components/mobilenav/mobilenav';

mobileNav();
ourDentists();
if (document.title === 'Home') {
    treatment();
}