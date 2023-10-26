interface LocName {
    name: string;
    lang: string;
}

export default function chooseLocName(
    locName: LocName[],
    lang: string,
): string {
    return (
        locName.find(ln => ln.lang === lang)?.name ||
        locName.find(ln => ln.lang === 'en')?.name ||
        locName[0].name
    );
}
