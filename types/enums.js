"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["mid"] = 1] = "mid";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudioLevel = AudioLevel.mid; // prints 1
});
