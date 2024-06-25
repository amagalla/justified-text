const justify = (line: string, length: number): string => {

    const
        words: string[] = line.split(' '),
        gaps: number = words.length - 1;
        
    if (gaps === 0) {
        return line;
    }

    if (line.length >= length) {
        return 'smallLength';
    }

    const
        totalLength: number = words.reduce((acc, word) => acc + word.length, 0),
        spacesToAdd: number = length - totalLength,
        spacesPerGap: number = Math.floor(spacesToAdd / gaps),
        extraSpaces: number = spacesToAdd % gaps;

    let justifiedLine: string = words[0];

    for (let i = 1; i < words.length; i++) {
        let spacesPerWord = spacesPerGap;
        if (i <= extraSpaces) {
            spacesPerWord += 1;
        }
        const spaces: string = ' '.repeat(spacesPerWord);
        justifiedLine += spaces + words[i];
    }
    

    return justifiedLine;
}

export default justify;