import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PolicyComponent } from './policy/policy.component';

export const routes: Routes = [
  { path: ``, component: LandingComponent },
  { path: `legal-notice`, component: LegalNoticeComponent },
  { path: `policy`, component: PolicyComponent },
];
