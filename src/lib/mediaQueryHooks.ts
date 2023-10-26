import { useEffect, useState } from "react"

export const useIsSmallDevice = () => {
    const query = "(max-width: 768px)"
    const [state, setState] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        window.matchMedia(query).addEventListener('change', e => setState(e.matches));
    }, []);

    return state;
}

export const useIsMediumDevice = () => {
    const query = "(max-width: 1024px)"
    const [state, setState] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        window.matchMedia(query).addEventListener('change', e => setState(e.matches));
    }, []);

    return state;
}