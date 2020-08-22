import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import Matches from '../../Matches';
import ProfileEdition from '../../ProfileEdition';

export const headerIconButtons = [
  {
    icon: faBell,
    color: 'primary',
    component: Matches,
    title: 'Notificaciones',
  },
  {
    icon: faUser,
    color: 'primary',
    component: ProfileEdition,
    title: 'Perfil',
  },
];
