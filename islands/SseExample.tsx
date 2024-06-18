import { useSignal } from "@preact/signals";
import { invoke } from "site/runtime.ts";

export default function SseExample() {
    const count = useSignal(0);
    const disabled = useSignal(false);

    const start = async () => {
        disabled.value = true;
        const stream = await invoke.site.loaders.counterStream();

        for await (const number of stream) {
            count.value = number;
        }
    }

    return (
        <div class="border w-96 h-96 rounded-lg flex flex-col items-center justify-around p-8">
            <h2 class="text-xl">Super-special counter</h2>
            <button class="btn btn-primary" disabled={disabled.value} onClick={start}>Start</button>
            <p>Count: {count.value}</p>
        </div>
    );
}