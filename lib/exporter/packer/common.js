/*jslint nomen: true */
/*globals module, require, __dirname */
var jsonToXml = require('../jsonToXml');
var fs = require('fs');
var path = require('path');

module.exports = function (archive, officeFile, output) {
    'use strict';

    archive.pipe(output);

    var xmlDoc = jsonToXml(officeFile.document),
        styleXml = jsonToXml(officeFile.style),
        relsXml = jsonToXml(officeFile.rels),
        coreXml = jsonToXml(officeFile.properties.core),
        head = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n`;

    archive.bulk([
        {
            expand: true,
            cwd: officeFile.templateDir,
            src: ['**', '**/.rels']
        }
    ]);

    //archive.directory(officeFile.templateDir, false);

    officeFile.files.forEach(function(item,index){
        archive.append(fs.createReadStream(item), {
            name: 'word/media/image'+ (index+1) + path.extname(item)
        });
    });

    archive.append(xmlDoc, {
        name: 'word/document.xml'
    });

    archive.append(styleXml, {
        name: 'word/newStyle.xml'
    });

    archive.append(head + relsXml, {
        name: 'word/_rels/document.xml.rels'
    });

//     archive.append(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
// <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>`, {
//         name: '_rels/.rels'
//     });

    archive.append(coreXml, {
        name: 'docProps/core.xml'
    });

    archive.finalize();
};