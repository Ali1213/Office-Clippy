/*jslint nomen: true */
/*globals exports, require */
var row = require('./row');
var cell = require('./cell');

exports.createTable = function (columnCount) {
    'use strict';

    var table = {
        'w:tbl': [{
            _attr: {}
        }, {
            'w:tblPr': [{
                "w:tblStyle":[{
                    _attr:{
                        "w:val": "TableGrid"
                    }
                }]
            },{
                "w:tblW":[{
                    _attr:{
                        "w:w": "0",
                        "w:type":"auto"
                    }
                }]
            },{
                "w:jc":[{
                    _attr:{
                        "w:val": "center"
                    }
                }]
            },{
                "w:tblLook":[{
                    _attr:{
                        "w:val": "04A0",
                        "w:firstRow": "1",
                        "w:lastRow": "0",
                        "w:firstColumn": "1",
                        "w:lastColumn": "0",
                        "w:noHBand": "0",
                        "w:noVBand": "1"
                    }
                }]
            }]
        }, {
            'w:tblGrid': (function () {
                var columns = [],
                    width = parseInt(9015 / columnCount, 10),
                    i;

                for (i = 0; i < columnCount; i += 1) {
                    columns.push({
                        'w:gridCol': [{
                            _attr: {
                                'w:w': width
                            }
                        }]
                    });
                }

                return columns;
            }())
        }],
        addRow: function (row) {
               this["w:tbl"].push(row);
            return this;
        }
    };
    return table;
};

exports.createRow = row.createRow;
exports.createCell = cell.createCell;