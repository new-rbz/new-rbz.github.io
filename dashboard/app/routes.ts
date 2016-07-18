import { provideRouter } from '@angular/router';
import { AppRouteProvider } from './common/index';

export const APP_ROUTER_PROVIDER = provideRouter(new AppRouteProvider().getAppRoutes());
