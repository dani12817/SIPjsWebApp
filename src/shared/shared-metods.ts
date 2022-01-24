/**
 * Prepara la siglas a mostrar dentro del recuadro del Avatar.
 * @param name String usado para construir las siglas.
 * @return Siglas correspondientes al String pasado como parámetro.
 */
 export function buildCustomAvatar(name: string | undefined): string {
    if (!name) {
        return " ";
    }
    if (name.match(/^\d+$/)) {
        if (name.length > 4) {
            return name.substr((name.length - 4), 4);
        } else {
            return name;
        }
    } else {
        const splitName: string[] = name.split(' ');
        let initials: string = '';
        let i = 0; const maxLetters: number = 3;

        for (const nameItem of splitName) {
            if (i === maxLetters) { break; }

            let initial = nameItem.match(/[A-Za-zÀ-ÿ0-9]/)
            if (initial) {
                initials += initial[0];
                i++;
            }
        }
        return initials;
    }
}

/**
 * Comprueba si el navegador es Mozilla Firefox.
 * @return Boolean con el resultado.
 */
export function isFirefox(): boolean {
    const agent = window.navigator.userAgent.toLowerCase();
    return agent.indexOf('firefox') > -1;
}