$_$wp(1);
function permPalin(str) {
    $_$wf(1);
    const count = ($_$w(1, 0), {});
    for (let i = 0; $_$w(1, 1), i < str.length; i++) {
        if ($_$w(1, 2), !count[str[i]]) {
            $_$w(1, 3), count[str[i]] = 1;
        } else {
            $_$w(1, 4), count[str[i]]++;
        }
    }
    const array = ($_$w(1, 5), Object.values(count));
    let numOfOdds = ($_$w(1, 6), 0);
    for (let i = 0; $_$w(1, 7), i < array.length; i++) {
        if ($_$w(1, 8), array[i] % 2 === 1) {
            $_$w(1, 9), numOfOdds++;
        }
    }
    return $_$w(1, 10), numOfOdds > 1 ? ($_$w(1, 11), false) : ($_$w(1, 12), true);
}
$_$w(1, 13), $_$tracer.log(permPalin('abab'), 'permPalin(\'abab\')', 1, 13);
$_$w(1, 14), $_$tracer.log(permPalin('cbaba'), 'permPalin(\'cbaba\')', 1, 14);
$_$w(1, 15), $_$tracer.log(permPalin('cbac'), 'permPalin(\'cbac\')', 1, 15);
$_$w(1, 16), $_$tracer.log(permPalin('a'), 'permPalin(\'a\')', 1, 16);
$_$w(1, 17), $_$tracer.log(permPalin(''), 'permPalin(\'\')', 1, 17);
$_$w(1, 18), module.exports = permPalin;
$_$wpe(1);