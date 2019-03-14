import { irieTable } from './irieTables.mjs';

//TODO: Add response propery in config
var tableConfig = {
    // TODO: Add support for local JSON
    
    pagination: {
        maxPaginationButtons: 3,
        morePagesIndicators: true,
        maxValues: 5,
        maxValueSelect: [5, 10, 15],
        server: {
            offsetUrlParameter: 'offset',
            maxValueUrlParameter: 'max',
            responseCountProperty: 'count'
        }
    }
    
};

var set = [
    {
        "postId": 1,
        "id": 1,
        "name": "Wolle der König",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
        "postId": 1,
        "id": 2,
        "name": "Bea die Prinzessin",
        "email": "Jayne_Kuhic@sydney.com",
        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    }
];

$.fn.irieTable = irieTable;
var sp = $('#irieTable').irieTable(tableConfig);
//sp.dataSet(set)