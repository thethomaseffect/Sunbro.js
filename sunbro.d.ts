declare module Sunbro {
    function format(str: string, props: {
        [s: string]: string;
    }, escape?: boolean, sub1?: string, sub2?: string): string;
}
