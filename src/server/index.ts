import mock, { delay } from 'xhr-mock';
import { getCars, getCar } from './controllers/cars';
import { getColors } from './controllers/colors';
import { getManufacturers } from './controllers/manufacturers';

const delayTimeout = 2000;

mock.setup();
mock.get(/\/api\/cars\/[0-9]/, getCar);
mock.get(/\/api\/cars/, delay(getCars, delayTimeout));
mock.get(/\/api\/colors/, getColors);
mock.get(/\/api\/manufacturers/, getManufacturers);
