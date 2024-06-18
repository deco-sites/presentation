import { ImageWidget } from "apps/admin/widgets.ts";
import { Section } from "deco/mod.ts";

/**
 * @title {{{title}}}
 */
export interface SlideProps {
    title?: string;
    /**
     * @format rich-text
     */
    content?: string;
    image?: ImageWidget;
    components?: Section[];
}

export default function Slide({
    props,
}: {
    props?: SlideProps;
}) {
    if (!props) {
        return (
            <div class="w-full h-full grid place-items-center">
                Slide not found
            </div>
        );
    }

    return (
        <>
            <div class="flex justify-between items-center gap-4 w-full h-full">
                <div class="flex flex-col gap-4">
                    <h2 class="text-5xl font-semibold max-w-96">{props.title}</h2>
                    <p class="text-xl text-justify max-w-96 list-disc" dangerouslySetInnerHTML={{
                        __html: props.content ?? ""
                    }}/>
                </div>
                {props.image && <img src={props.image} alt="" class="rounded-lg h-96" />}
                {props.components && props.components.length > 0
                    ? (
                        <div class="flex flex-col gap-4">
                            {props.components?.map(({ Component, props }) => (
                                <Component {...props} />
                            ))}
                        </div>
                    )
                    : null}
            </div>
        </>
    );
}
