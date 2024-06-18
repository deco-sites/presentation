import { AppContext } from "site/apps/site.ts";

export default function counterStream(
    _props: unknown,
    req: Request,
    _ctx: AppContext,
): AsyncIterableIterator<number> {
    let count = 0;

    const abortPromise = new Promise((resolve) => {
        req.signal.addEventListener("abort", resolve);
    });

    const stream = (async function* () {
        while (!req.signal.aborted) {
            yield count;
            count++;
            const promise = new Promise((resolve) => setTimeout(resolve, 2000));
            await Promise.race([promise, abortPromise]);
        }
      })();
      
      return stream;
}