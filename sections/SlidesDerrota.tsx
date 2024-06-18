import Slide, { SlideProps } from "site/components/Slide.tsx";

export interface Props {
    slides: SlideProps[];
}

export default function Slides(props: Props) {
    const {
        slides,
    } = props;

    return (
        <div id="slide" class="w-screen px-16">
            <main class="flex flex-col">
                {slides.map(slide => (
                    <div class="h-screen">
                        <Slide props={slide}/>
                    </div>
                ))}
            </main>
            <script dangerouslySetInnerHTML={{
                __html: `document.addEventListener("keydown", (event) => {
                    if (event.key === 'ArrowRight') {
                        event.preventDefault(); // Prevent the default spacebar scroll behavior
                        window.scrollBy({
                            top: window.innerHeight,
                            left: 0,
                            behavior: 'smooth'
                        });
                    }
                    if (event.key === 'ArrowLeft') {
                        event.preventDefault(); // Prevent the default spacebar scroll behavior
                        window.scrollBy({
                            top: -window.innerHeight,
                            left: 0,
                            behavior: 'smooth'
                        });
                    }
                })`
            }}></script>
        </div>
    );
}
