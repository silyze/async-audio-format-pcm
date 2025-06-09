import { AsyncReadStream } from "@mojsoski/async-stream";
import { AudioFormat } from "@silyze/async-audio-stream";

export default class PcmFormat extends AudioFormat {
  #sampleRate: number;
  constructor(sampleRate: number) {
    super();
    this.#sampleRate = sampleRate;
  }

  get name() {
    return "pcm16le";
  }

  get pcmSampleRate() {
    return this.#sampleRate;
  }

  encode(input: AsyncReadStream<Buffer>) {
    return input;
  }

  decode(input: AsyncReadStream<Buffer>) {
    return input;
  }
}
