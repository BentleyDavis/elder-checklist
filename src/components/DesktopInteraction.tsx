import { useEffect } from "react";

function DesktopInteraction() {

    useEffect(() => {

        //@ts-ignore
        const listener = window.chrome.webview.addEventListener('message',
            (event: any) => {
                alert(event.data);
            });

        return () => {
            //@ts-ignore

            window.HTMLAnchorElement.webview.removeEventListener('message', listener)
        }
    }, [])

    return (
        <div>
            {/* Your component JSX goes here */}
        </div>
    );
}

export default DesktopInteraction;
