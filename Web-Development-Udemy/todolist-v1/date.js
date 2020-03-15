exports.getDate = getDate = function() {
    const today = new Date();
    const currentDay = today.getDay();

    const options = {
        weekday: "long",
        day : "numeric",
        month: "long",
    };

    return date = today.toLocaleDateString("en-US", options);
}

module.exports.getDay = function(){
    const today = new Date();
    const currentDay = today.getDay();

    const options = {
        weekday: "long",
    };

    return day = today.toLocaleDateString("en-US", options);
}