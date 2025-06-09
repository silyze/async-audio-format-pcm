import PcmFormat from "./lib";

const format = new PcmFormat(8000);
console.log(format.name, format.pcmSampleRate);
