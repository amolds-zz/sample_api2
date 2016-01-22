var winston = require('winston');
winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {'timestamp':true});

winston.level = 'debug';

module.exports = function(module) {

    var filename = module.id;
    return {
        info : function(msg) {
            winston.info(filename + '|' + msg);
        },
        debug : function(msg) {
            winston.info(filename + '|' + msg);
        },
    }
};
