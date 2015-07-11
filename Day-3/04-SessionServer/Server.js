var guid = require("guid");
var sessions = {};

function getSession(sessionId) {

    if(sessions[sessionId]){
        return sessions[sessionId];
    }
    else {
        return null;
    }
}

function createSession(data) {
    var sessionId = guid.raw();
    var sessionData = data;
    sessions[sessionId] = sessionData;
}

function updateSession(sessionId, data) {
    sessions[sessionId] = data;
}

function deleteSession(sessionId) {
    delete sessions[sessionId];
}
