function formatDove() {
    let rows = 150
    return {
        rows,
        specialLine: [8, 13, 22, 27, 40, 45, 54, 59],
        cols: 30,
        gridData: Array(rows).fill(0).map((_, i) => formatDoveLine(i))
    }
}

function formatDoveLine(i) {
    let chart1 = new Array(8);
    let chart2 = new Array(13);
    if (i % 6 == 2) {
        chart1[0] = "2-2LC";
        chart1[4] = "2-2RC";
        chart2[0] = "3-3LC";
        chart2[7] = "3-3RC";
    } else {
        chart1.fill("k");
        chart2.fill("k");
    }
    chart2[6] = "p";
    let diffChart = ["p", "tbl", i % 2 ? "p" : "k", "tbl", "p"];
    let sChart1 = formatChartS((i + 5) % 20)
    let sChart2 = formatChartS((i + 15) % 20)
    let ret = [].concat(chart1, diffChart, sChart1, diffChart, chart2, diffChart, sChart2, diffChart, chart1);
    return ret.slice(0, Math.floor(i / 2) + 1);
}

function formatChartS(_i) {
    let _chart = ["tbl", "p", "tbl", "p", "tbl"];
    let _remain = 4;
    if ([3, 5, 7, 9].includes(_i)) {
        _chart = ["1-1RTP", null, "1-1RTP", null, "1-1RTP", null];
        _remain = 3;
    } else if ([13, 15, 17, 19].includes(_i)) {
        _chart = ["1-1LTP", null, "1-1LTP", null, "1-1LTP", null];
        _remain = 3;
    }
    let _offset;
    if (_i < 4) {
        _offset = 0;
    } else if (_i < 10) {
        _offset = Math.floor(((_i % 10) - 2) / 2);
    } else if (_i < 13) {
        _offset = 4;
    } else {
        _offset = 4 - Math.floor((_i - 11) / 2);
    }
    _remain = _remain - _offset;
    let diffChart2 = new Array(_offset).fill("p").concat(_chart).concat(new Array(_remain).fill("p"));
    if (_i % 20 == 1) {
        diffChart2[7] = "B";
    }
    if (_i % 20 == 11) {
        diffChart2[1] = "B";
    }
    return diffChart2
}

function formatEmily() {
    let data = [
        'k k yo k yo k p v',
        'p p p p p p k m1l p',
        'k k k yo k yo k k p p v',
        'p p p p p p p p k m1l k p',
        'k k k k yo k yo k k k p B p v',
        'p p p p p p p p p p k m1l k k p',
        'k k k k k yo k yo k k k k p p p p v',
        'p p p p p p p p p p p p k m1l k k k p',
        'k k2tog k k k k k k k ssk p B p p B v',
        'p p p p p p p p p p k m1l k k k k p',
        'k k2tog k k k k k ssk p p p p p p v',
        'p p p p p p p p k m1l k k p k k p',
        'k k2tog k k k ssk p p p p k p p v',
        'p p p p p p k k k k p k k p',
        'k k2tog k ssk p p p p k p B v',
        'p p p p k k k k p k k p',
        'k sssk p p p p k p p v',
        'bo bo bo bo k p k k p',
    ]
    return {
        rows: 20,
        cols: 20,
        specialLine: [10],
        gridData: data.map((str, index) => {
            let row = str.split(' ')
            // 计算需要填充的空格数
            const padding = 19 - row.length
            // 在数组开头添加空值来实现右对齐
            return [index+1].concat(new Array(padding).fill(null).concat(row))
        })
    }
}
