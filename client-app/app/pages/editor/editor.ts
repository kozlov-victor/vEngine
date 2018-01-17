import BaseComponent from "../../baseComponent";

declare const RF;


import './editor.less'

import * as Split from '../../vendor/split';

@RF.decorateComponent({
    name: 'editor',
    template: require('./editor.html')
})
export default class Editor extends BaseComponent {

    splitMounted = false;

    constructor(){
        super();
    }

    onMount(){
        if (this.splitMounted) return;
        this.splitMounted = true;
        let layoutSizes:any = {};

        layoutSizes.a =   15;
        layoutSizes.b =   70;
        layoutSizes.e =  (100 - layoutSizes.a - layoutSizes.b);

        layoutSizes.c =   94;
        layoutSizes.d =   (100 - layoutSizes.c);

        Split(['#a', '#b', '#e'], {
            sizes: [layoutSizes.a,layoutSizes.b,layoutSizes.e],
            gutterSize: 5,
            cursor: 'row-resize',
            minSize:10
        });
        let vertical = Split(['#c', '#d'], {
            direction: 'vertical',
            sizes: [layoutSizes.c,layoutSizes.d],
            gutterSize: 5,
            cursor: 'col-resize',
            minSize:10
        });
        window.addEventListener('resize',function(){
            vertical.setSizes([layoutSizes.c,layoutSizes.d]);
        });
    }
}