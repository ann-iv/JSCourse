class Log {
    info(text){
        console.log('[INFO] ${text} [INFO]');
    }

    info(text){
        console.log('[WARNING] ${text} [WARNING]');
    }

    info(text){
        console.log('[ERROR] ${text} [ERROR]');
    }
}

module.exports = new Log(); 