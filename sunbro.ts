module Sunbro {
    export function format(str: string, props: { [s: string]: string },
        escape?: boolean, sub1?: string, sub2?: string) {
        if (escape) {
            return str.replace('{{', sub1 || '♛☊♛')
                .replace('}}', sub2 || '♛☋♛')
                .replace(/\{(.+?)\}/g,
                (original, key) => {
                var value = props[key];
                return value !== undefined ? value : original;
                })
                .replace(sub1 || '♛☊♛', '{')
                .replace(sub2 || '♛☋♛', '}');
        }
        return str.replace(/\{(.+?)\}/g,
            (original, key) => {
            var value = props[key];
            return value !== undefined ? value : original;
        });
    }
}