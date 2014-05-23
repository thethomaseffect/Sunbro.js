var Sunbro;
(function (Sunbro) {
    function format(str, props, escape, sub1, sub2) {
        if (escape) {
            return str.replace('{{', sub1 || '♛☊♛').replace('}}', sub2 || '♛☋♛').replace(/\{(.+?)\}/g, function (original, key) {
                var value = props[key];
                return value !== undefined ? value : original;
            }).replace(sub1 || '♛☊♛', '{').replace(sub2 || '♛☋♛', '}');
        }
        return str.replace(/\{(.+?)\}/g, function (original, key) {
            var value = props[key];
            return value !== undefined ? value : original;
        });
    }
    Sunbro.format = format;
})(Sunbro || (Sunbro = {}));
//# sourceMappingURL=sunbro.js.map
