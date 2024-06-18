import { useSection } from "deco/hooks/useSection.ts";
import Slide, { SlideProps } from "site/components/Slide.tsx";

export interface Header {
    title?: string;
    author?: string;
}

export interface Props {
    header: Header;
    slides: SlideProps[];
    /**
     * @hide
     */
    currentSlide?: number;
}

export default function Slides(props: Props) {
    const {
        header: {
            author,
            title,
        },
        slides,
        currentSlide = 0,
    } = props;

    return (
        <div id="slide" class="w-screen h-screen p-10 flex flex-col gap-10">
            <header class="flex items-center gap-2 justify-between text-lg">
                <h2 class="font-bold">{title}</h2>
                <h4>{author}</h4>
            </header>
            <main>
                <Slide props={slides[currentSlide]} />
            </main>
            <div class="hidden">
                <button
                    hx-trigger="keyup[key=='ArrowLeft'] from:body"
                    hx-get={useSection({
                        props: {
                            ...props,
                            currentSlide: currentSlide - 1,
                        },
                    })}
                    hx-target="#slide"
                    hx-swap="outerHTML"
                >
                    prev
                </button>
                <button
                    hx-trigger="keydown[key=='ArrowRight'] from:body"
                    hx-get={useSection({
                        props: {
                            ...props,
                            currentSlide: currentSlide + 1,
                        },
                    })}
                    hx-target="#slide"
                    hx-swap="outerHTML"
                >
                    next
                </button>
            </div>
        </div>
    );
}
