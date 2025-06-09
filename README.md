# Async Audio Format PCM

**Raw PCM audio format** (`pcm16le`) for [`@silyze/async-audio-stream`](https://www.npmjs.com/package/@silyze/async-audio-stream).  
Zero processing, zero latency — ideal for pipelines that already work with 16-bit little-endian PCM.

---

## Install

```bash
npm install @silyze/async-audio-format-pcm
```

---

## Usage

```ts
import PcmFormat from "@silyze/async-audio-format-pcm";

// Use for raw PCM audio at 16 kHz:
const format = new PcmFormat(16000);

console.log(format.name); // "pcm16le"
console.log(format.pcmSampleRate); // 16000
```

Both `encode()` and `decode()` are pass-throughs. No conversion is applied.

---

## API

```ts
class PcmFormat extends AudioFormat {
  constructor(sampleRate: number);

  readonly name: string; // "pcm16le"
  readonly pcmSampleRate: number;

  encode(input: AsyncReadStream<Buffer>): AsyncReadStream<Buffer>;
  decode(input: AsyncReadStream<Buffer>): AsyncReadStream<Buffer>;
}
```

---

## Format Details

- **Encoding:** 16-bit signed little-endian PCM
- **Channels:** Mono (1 channel)
- **Sample Rate:** User-defined at instantiation
- **Streaming:** Fully async (via `@mojsoski/async-stream`)
