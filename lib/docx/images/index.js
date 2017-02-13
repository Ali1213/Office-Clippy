var path = require('path');

var createRels = function (id, type, Target) {
    'use strict';

    return {
        "Relationship": {
            _attr: {
                'Id': id,
                'Type': type,
                'Target': Target
            }
        }
    };
}

//创建link需要做下面的事情
//1.在document.xml创建链接;
//2.在_rels/document.xml.rels创建标签
module.exports.createImage = function (docx, filepath, width, height) {

    var num = docx.rels['Relationships'].length;
    var id = 'rId' + num;
    var type = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/image';
/*
    var shape = {
        "x": 450,
        "y": parseInt(450 /width  * height)
    };
*/
    // 如果图片宽度px换算成pt大于页面宽度450pt
    let x,y;
    if(width*4/3>450){
        x=450;
        y=parseInt(450 /width  * height);
    }else{
        [x,y]=[width*4/3,height*4/3];
    }


    docx.files.push(filepath);

    var target = "media/image" + docx.files.length + path.extname(filepath);

    var linkDoc = {
        "w:r":[{
           "w:pict":[/*{
               "v:shapetype":[{
                   _attr:{
                       "id":"_x0000_t75",
                       "coordsize":"21600,21600",
                       "o:spt":"75",
                       "o:preferrelative":"t",
                       "path":"m@4@5l@4@11@9@11@9@5xe",
                       "filled":"f",
                       "stroked":"f"
                   }
               },{
                   "v:stroke":[{
                       _attr:{
                           "joinstyle":"miter"
                       }
                   }]
               },{
                   "v:formulas":[{
                       "v:f":[{
                           _attr:{
                               "eqn":"if lineDrawn pixelLineWidth 0"
                           }
                       }]
                   },{
                       "v:f":[{
                           _attr:{
                               "eqn":"sum @0 1 0"
                           }
                       }]
                   },{
                       "v:f":[{
                           _attr:{
                               "eqn":"sum 0 0 @1"
                           }
                       }]
                   },{
                       "v:f":[{
                           _attr:{
                               "eqn":"prod @2 1 2"
                           }
                       }]
                   },{
                       "v:f":[{
                           _attr:{
                               "eqn":"prod @3 21600 pixelWidth"
                           }
                       }]
                   },{
                       "v:f":[{
                           _attr:{
                               "eqn":"prod @3 21600 pixelHeight"
                           }
                       }]
                   },{
                       "v:f":[{
                           _attr:{
                               "eqn":"sum @0 0 1"
                           }
                       }]
                   },{
                       "v:f":[{
                           _attr:{
                               "eqn":"prod @6 1 2"
                           }
                       }]
                   },{
                       "v:f":[{
                           _attr:{
                               "eqn":"prod @7 21600 pixelWidth"
                           }
                       }]
                   },{
                       "v:f":[{
                           _attr:{
                               "eqn":"sum @8 21600 0"
                           }
                       }]
                   },{
                       "v:f":[{
                           _attr:{
                               "eqn":"prod @7 21600 pixelHeight"
                           }
                       }]
                   },{
                       "v:f":[{
                           _attr:{
                               "eqn":"sum @10 21600 0"
                           }
                       }]
                   }]
               },{
                   "v:path":[{
                       _attr:{
                           "o:extrusionok":"f",
                           "gradientshapeok":"t",
                           "o:connecttype":"rect"
                       }
                   }]
               },{
                   "o:lock":[{
                       _attr:{
                           "v:ext":"edit",
                           "aspectratio":"t"
                       }
                   }]
               }]
           },*/{
               "v:shape":[{
                   _attr:{
                       "id":"_x0000_i1025",
                       "style":`width:${x}pt;height:${y}pt`,
                       "coordsize":"",
                       "o:spt":"100",
                       "adj":"0,,0",
                       "path":"",
                       "stroked":"f"
                   }
               },{
                   "v:stroke":[{
                       _attr:{
                           "joinstyle":"miter"
                       }
                   }]
               },{
                   "v:imagedata":[{
                       _attr:{
                           "r:id":id,
                           "o:title":"3"
                       }
                   }]
               },{
                   "v:formulas":[{}]
               },{
                   "v:path":[{
                       _attr:{
                           "o:connecttype":"segments"
                       }
                   }]
               }]
           }] 
        }]
    }
 /*   var linkDoc = {
        'w:r': [{
            _attr: {}
        }, {
            'w:drawing': [{
                _attr: {}
            }, {
                'wp:inline': [{
                    _attr: {
                        "distT": "0",
                        "distB": "0",
                        "distL": "0",
                        "distR": "0"
                    }
                }, {
                    'wp:extent': [{
                        _attr: {
                            'cx': shape.x,
                            'cy': shape.y
                        }
                    }]
                }, /!*{
                 'wp:effectExtent':[{
                 _attr:{
                 'l':"0",
                 't':"0",
                 'r':"2540",
                 'b':"2540"
                 }
                 }]
                 },*!/{
                    'wp:docPr': [{
                        _attr: {
                            'id': "" + num,
                            'name': "图片 " + num,
                            "descr": ""
                        }
                    }]
                }, {
                    'wp:cNvGraphicFramePr': [{
                        _attr: {}
                    }, {
                        "a:graphicFrameLocks": [{
                            _attr: {
                                "xmlns:a": "http://schemas.openxmlformats.org/drawingml/2006/main",
                                "noChangeAspect": "1"
                            }
                        }]
                    }]
                }, {
                    "a:graphic": [{
                        _attr: {
                            'xmlns:a': "http://schemas.openxmlformats.org/drawingml/2006/main",
                            'cy': shape.y
                        }
                    }, {
                        "a:graphicData": [{
                            _attr: {
                                'uri': "http://schemas.openxmlformats.org/drawingml/2006/picture"
                            }
                        }, {
                            "pic:pic": [{
                                _attr: {
                                    "xmlns:pic": "http://schemas.openxmlformats.org/drawingml/2006/picture"
                                }
                            }, {
                                "pic:nvPicPr": [{
                                    "pic:cNvPr": [{
                                        _attr: {
                                            "id": "" + num,
                                            "name": "Picture " + num,
                                            "descr": ""
                                        }
                                    }]
                                }, {
                                    "pic:cNvPicPr": [{
                                        "a:picLocks": [{
                                            _attr: {
                                                "noChangeAspect": "1",
                                                "noChangeArrowheads": "1"
                                            }
                                        }]
                                    }]
                                }]
                            }, {
                                "pic:blipFill": [{
                                    "a:blip": [{
                                        _attr: {
                                            "r:embed": id
                                        }
                                    }/!*,{
                                     "a:extLst":[{
                                     "a:ext":[{
                                     _attr:{
                                     "uri":"{28A0092B-C50C-407E-A947-70E740481C1C}"
                                     }
                                     },{
                                     "a14:useLocalDpi":[{
                                     _attr:{
                                     "xmlns:a14":"http://schemas.microsoft.com/office/drawing/2010/main",
                                     "val":"0"
                                     }
                                     }]
                                     }]
                                     }]
                                     }]
                                     }*!/, {
                                        "a:stretch": [{
                                            "a:fillRect": [{}]
                                        }]
                                    }]
                                }, {
                                    "pic:spPr": [{
                                        _attr: {
                                            "bwMode": "auto"
                                        }
                                    }, {
                                        "a:xfrm": [{
                                            "a:off": [{
                                                _attr: {
                                                    "x": "0",
                                                    "y": "0"
                                                }
                                            }]
                                        }, {
                                            "a:ext": [{
                                                _attr: {
                                                    "cx": shape.x,
                                                    "cy": shape.y
                                                }
                                            }]
                                        }]
                                    }, {
                                        "a:prstGeom": [{
                                            _attr: {
                                                "prst": "rect"
                                            }
                                        }, {
                                            "a:avLst": [{}]
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }]
                }]
            }
        ]
    }]}*/

    var linkRels = createRels(id, type, target);
    var bookmarkStart = {
        "w:bookmarkStart": [{
            _attr: {
                'w:id': num,
                'w:name': '_GoBack'
            }
        }]
    };
    var bookmarkEnd = {
        "w:bookmarkEnd": [{
            _attr: {
                'w:id': num
            }
        }]
    };

    docx.rels['Relationships'].splice(docx.rels['Relationships'].length - 1, 0, linkRels);
    return linkDoc;
}
