import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import {initReviews} from './modules/init-reviews';
import {initHeader} from './modules/init-header';
import {initFormValidation} from './modules/init-form-validation';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
initHeader();
initReviews();
initFormValidation();
