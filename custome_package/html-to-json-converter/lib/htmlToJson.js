function htmlToJson(html) {
    const result = [];
    const stack = [];

    let current = result;

    const selfClosingTags = new Set([
        'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr'
    ]);

    const regex = /<([a-z][a-z0-9]*)([^>]*)>|<\/([a-z][a-z0-9]*)>/gi;
    const tagMatches = html.matchAll(regex);

    for (const match of tagMatches) {
        const [fullTag, openTag, attributes, closeTag] = match;

        if (openTag) {
            const element = { tag: openTag.toLowerCase(), children: [] };

            const attributeRegex = /([a-z][a-z0-9\-]*)\s*=\s*(['"])(.*?)\2/gi;
            const attributeMatches = attributes.matchAll(attributeRegex);

            for (const attributeMatch of attributeMatches) {
                const [, attributeName, , attributeValue] = attributeMatch;
                element[attributeName] = attributeValue;
            }

            if (!selfClosingTags.has(openTag.toLowerCase())) {
                stack.push(current);
                current = element.children;
            }

            if (stack.length > 0) {
                stack[stack.length - 1].push(element);
            } else {
                result.push(element);
            }
        } else if (closeTag) {
            if (stack.length > 0) {
                current = stack.pop();
            }
        }
    }

    return result.length > 1 ? result : result[0];
}

module.exports = htmlToJson;
