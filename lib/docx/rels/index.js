/*jslint nomen: true */
/*globals exports, module, require */

module.exports = function () {
    'use strict';
    var rels = {
        'Relationships': [{
            _attr: {
                'xmlns': 'http://schemas.openxmlformats.org/package/2006/relationships'
            }
        },{
            "Relationship":{
                _attr: {
                    'Id': "rId1",
                    'Type': "http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering",
                    'Target': "numbering.xml"
                }
            }
        },{
            "Relationship":{
                _attr: {
                    'Id': "rId2",
                    'Type': "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
                    'Target': "styles.xml"
                }
            }
        },{
            "Relationship":{
                _attr: {
                    'Id': "rId3",
                    'Type': "http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings",
                    'Target': "settings.xml"
                }
            }
        },{
            "Relationship":{
                _attr: {
                    'Id': "rId4",
                    'Type': "http://schemas.openxmlformats.org/officeDocument/2006/relationships/webSettings",
                    'Target': "webSettings.xml"
                }
            }
        },{
            "Relationship":{
                _attr: {
                    'Id': "rId5",
                    'Type': "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes",
                    'Target': "footnotes.xml"
                }
            }
        },{
            "Relationship":{
                _attr: {
                    'Id': "rId6",
                    'Type': "http://schemas.openxmlformats.org/officeDocument/2006/relationships/endnotes",
                    'Target': "endnotes.xml"
                }
            }
        },{
            "Relationship":{
                _attr: {
                    'Id': "rId7",
                    'Type': "http://schemas.openxmlformats.org/officeDocument/2006/relationships/header",
                    'Target': "header1.xml"
                }
            }
        },{
            "Relationship":{
                _attr: {
                    'Id': "rId8",
                    'Type': "http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable",
                    'Target': "fontTable.xml"
                }
            }
        },{
            "Relationship":{
                _attr: {
                    'Id': "rId9",
                    'Type': "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
                    'Target': "theme/theme1.xml"
                }
            }
        }]
    }
 /*   var rels = {
        'Relationships': [{
            _attr: {
                'xmlns': 'http://schemas.openxmlformats.org/package/2006/relationships'
            }
        },{
            "Relationship":{
                _attr: {
                    'Id': "rId3",
                    'Type': "http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings",
                    'Target': "settings.xml"
                }
            }
        },{
            "Relationship":{
                _attr: {
                    'Id': "rId2",
                    'Type': "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
                    'Target': "styles.xml"
                }
            }
        },{
            "Relationship":{
                _attr: {
                    'Id': "rId1",
                    'Type': "http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering",
                    'Target': "numbering.xml"
                }
            }
        },{
            "Relationship":{
                _attr: {
                    'Id': "rId5",
                    'Type': "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes",
                    'Target': "footnotes.xml"
                }
            }
        },{
            "Relationship":{
                _attr: {
                    'Id': "rId4",
                    'Type': "http://schemas.openxmlformats.org/officeDocument/2006/relationships/webSettings",
                    'Target': "webSettings.xml"
                }
            }
        }]
    }*/
    
    // rels["Relationships"].push(createRels("rId1","http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument","word/document.xml"))
    return rels;
};

module.exports.createRels = function (id, type, Target) {
    'use strict';

    return {
        "Relationship":{
            _attr: {
                'Id': id,
                'Type': type,
                'Target': Target
            }
        }
    };
}