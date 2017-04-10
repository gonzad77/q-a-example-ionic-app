import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LoopBackConfig } from '../../sdk';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

LoopBackConfig.setBaseURL('https://q-a-example-loopback-api.herokuapp.com');
