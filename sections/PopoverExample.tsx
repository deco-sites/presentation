
export default function PopoverExample() {
    return (
        <div class="grid place-items-center w-96 h-96 border rounded-lg">
            <button class="btn btn-primary" popovertarget="mypopover">Say hi</button>
            <div class={`[&:popover-open]:visible invisible
            bg-primary rounded-lg p-8 grid place-items-center text-white`} id="mypopover" popover>
                Hello! Press ESC to dismiss
            </div>
        </div>
    );
}