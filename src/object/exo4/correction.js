const analyze = (str) => {
    const response = {
        lower: 0,
        upper: 0,
        number: 0,
        len: str.length,
        spaces: 0,
        specials: 0
    }

    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        let code = char.charCodeAt(0)

        const isLowerChar = (code >= 97 && code <= 122)
        const isUpperChar = (code >= 65 && code <= 90)
        const isSpace = (' ' === char)
        const isNumber = /\d+/.test(char)

        response.spaces += isSpace ? 1 : 0
        response.lower += isLowerChar ? 1 : 0
        response.upper += isUpperChar ? 1 : 0
        response.number += isNumber ? 1 : 0

        if (!isLowerChar && !isUpperChar && !isNumber) {
            response.specials += 1
        }
    }

    response.letter = response.upper + response.lower

    return response
}

export default analyze
