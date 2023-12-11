import * as vis from 'vis-network'
import { chosenAllGroup, filterNodeGroup } from './vis-custom'
import { dataList } from './vis-data';
import { useVisStore } from '../store/vis-index';
export const registerEventListeners = (vizs: vis.Network,Visible:boolean) => {
    vizs.on('click', (param) => {
       
    });

    vizs.on('doubleClick', () => {
    });

    vizs.on('oncontext', () => {
    });

    vizs.on('hold', () => {
    });

    vizs.on('release', () => {
    });

    vizs.on('select', () => {

    });
    vizs.on('selectNode', (param) => {
        const store = useVisStore()
        store.visibleModal = true
        console.log(filterNodeGroup(dataList.nodes, param.nodes[0])[0].group);
        vizs.updateClusteredNode(1, { color: "black" })
        const optionsCluster = {
            enabled: true,
            joinCondition: function (nodeOptions: any) {
                // 在這裡指定條件，決定是否將節點包含在同一個集群中
                console.log(nodeOptions);
                let final = chosenAllGroup(nodeOptions, filterNodeGroup(dataList.nodes, param.nodes[0].group))
                return false
            },
        }
        vizs.cluster(optionsCluster)
    });

    vizs.on('selectEdge', () => {
    });

    vizs.on('deselectNode', () => {
     
    });

    vizs.on('deselectEdge', () => {
    });

    vizs.on('dragStart', () => {
    });

    vizs.on('dragging', () => {
    });

    vizs.on('dragEnd', () => {
    });

    vizs.on('controlNodeDragging', () => {
    });

    vizs.on('controlNodeDragEnd', () => {
    });

    vizs.on('hoverNode', () => {
    });

    vizs.on('blurNode', () => {
    
    });

    vizs.on('hoverEdge', () => {
    });

    vizs.on('blurEdge', () => {
    });

    vizs.on('zoom', () => {
    });

    vizs.on('showPopup', (params: number) => {
        vizs.getPosition(params)
        const ctxFill = () => {
            let canvasDraw = document.getElementsByTagName("canvas")[0];
            let ctx = canvasDraw.getContext('2d')
            if (canvasDraw) {
                if (ctx) {
                    ctx.beginPath()
                    ctx.moveTo(1000, 600)
                    ctx.fillStyle = 'rgba(0,0,0,0.1)'
                    ctx.fillRect(vizs.canvasToDOM(vizs.getPosition(params)).x, vizs.canvasToDOM(vizs.getPosition(params)).y, 200, 100)
                } else {
                    console.error(`Canvas context is not available for canvas`);
                }
            } else {
                console.error('Canvas elements not found.');
            }
        }
        ctxFill()
    });

    vizs.on('hidePopup', () => {
    });

    vizs.on('startStabilizing', () => {
    });

    vizs.on('stabilizationProgress', () => {
    });

    vizs.on('stabilizationIterationsDone', () => {
    });

    vizs.on('stabilized', () => {

    });

    vizs.on('resize', () => {
    });

    vizs.on('initRedraw', () => {
    });

    vizs.on('beforeDrawing', () => {
    });

    vizs.on('afterDrawing', () => {
    });

    vizs.on('animationFinished', () => {
    });

    vizs.on('configChange', () => {
    });

};