exports.DATABASE_URL = process.env.DATABASE_URL || global.DATABASE_URL || 'mongodb://demo:demo123@ds231228.mlab.com:31228/dnd-character-sheet';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://demo:demo123@ds231228.mlab.com:31228/dnd-character-sheet';
exports.PORT = process.env.PORT || 8080;
