import { AuthGuard} from '../security/auth-guard';
import { About, Profile, TestComponent, Todo } from '../../components/index';
import { RouterAndMenuItem } from './RouterAndMenuItem';

export class AppRouteProvider {
  public getAppRoutes(): RouterAndMenuItem[]{
     let appRoutes:RouterAndMenuItem[] = [
      { name:'To do Items', icon:'schedule', link:'/', path:'', component:Todo },
      { name:'About', icon:'launch', link:'/about/sample text', path:'about/:id', component:About },
      { name:'Profile', icon:'account_circle', link:'/profile', path:'profile', component:Profile, canActivate:[AuthGuard] },
      { name:'Me Learning Ng2', icon:'accessible', link:'/test', path:'test', component:TestComponent },
    ];

    return appRoutes;
  }
}
