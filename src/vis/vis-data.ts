export const dataList = {
    nodes: [
        { id: 1, label: 'circle id:1', shape: 'circle', group: 'four', title: "popup 文字訊息", },
        { id: 2, label: 'ellipse id:2', shape: 'ellipse', title: "popup 文字訊息", },
        { id: 3, label: 'database id:3', shape: 'database', group: 'three', title: "popup 文字訊息", },
        { id: 4, label: 'box id:4', shape: 'box', group: 'three', title: "popup 文字訊息", },
        { id: 5, label: 'diamond id:5', shape: 'diamond', group: 'two', title: "popup 文字訊息", },
        { id: 6, label: 'dot id:6', shape: 'dot', group: 'two', title: "popup 文字訊息", },
        { id: 7, label: 'square id:7', shape: 'square', group: 'one', title: "popup 文字訊息", },
        { id: 8, label: 'triangle id:8', shape: 'triangle', group: 'one', title: "popup 文字訊息", },
        { id: 9, label: 'triangle id:9', shape: 'triangle', group: 'five', title: "popup 文字訊息", },
    ],
    edges: [
        { from: 1, to: 2, label: 'Edge from 1 to 2' },
        { from: 2, to: 3, label: 'Edge from 2 to 3' },
        { from: 2, to: 4 },
        { from: 2, to: 5 },
        { from: 5, to: 6 },
        { from: 5, to: 7 },
        { from: 6, to: 8 },
        { from: 9, to: 8 },
    ],
}