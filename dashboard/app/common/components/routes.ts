import { provideRouter } from '@angular/router';
import { AppRouteProvider } from '../index';

export const APP_ROUTER_PROVIDER = provideRouter(new AppRouteProvider().getAppRoutes());
