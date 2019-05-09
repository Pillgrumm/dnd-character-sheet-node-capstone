exports.DATABASE_URL = process.env.DATABASE_URL || global.DATABASE_URL || 'mongodb://demo:123456a@ds151805.mlab.com:51805/patient-tracking';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://demo:123456a@ds151805.mlab.com:51805/patient-tracking';
exports.PORT = process.env.PORT || 8080;
