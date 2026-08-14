const fs = require('fs');

function createDiff() {
    const f1 = fs.readFileSync('index.html', 'utf8').split('\n');
    const f2 = fs.readFileSync('live_index.html', 'utf8').split('\n');

    let diff = [];
    let i = 0;
    while (i < Math.max(f1.length, f2.length)) {
        const l1 = f1[i] ? f1[i].trim() : '';
        const l2 = f2[i] ? f2[i].trim() : '';
        if (l1 !== l2) {
            diff.push(`Line ${i + 1}:`);
            diff.push(`- ${l1}`);
            diff.push(`+ ${l2}`);
            diff.push('---');
        }
        i++;
    }

    fs.writeFileSync('diff.txt', diff.join('\n'));
}

createDiff();
