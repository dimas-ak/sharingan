/*
    Created on  : UNKNOWN
    Author      : DIMAS AWANG KUSUMA

    INFO
    TYPE 1 : MAIN SHARINGAN
    TYPE 2 : UCHIHA MADARA's ETERNAL SHARINGAN
    TYPE 3 : UCHIHA SASUKE's ETERNAL SHARINGAN
    TYPE 4 : UCHIHA ITACHI's SHARINGAN
    TYPE 5 : UCHIHA OBITO's SHARINGAN
    TYPE 6 : UCHIHA SISHUI's SHARINGAN
    TYPE 7 : UCHIHA FUGAKU's SHARINGAN
    TYPE 8 : UCHIHA NAORI's SHARINGAN
    TYPE 9 : UCHIHA NAKA's SHARINGAN
    TYPE 10 : UCHIHA BARU's SHARINGAN
    TYPE 11 : UCHIHA RAI's SHARINGAN
    TYPE 12 : UCHIHA IZUNA's SHARINGAN  
    TYPE 13 : UCHIHA SHIN's SHARINGAN
    TYPE 14 : INDRA ŌTSUTSUKI's SHARINGAN
    TYPE 15 : KAGUYA ŌTSUTSUKI's RINNE SHARINGAN

*/

;
(function (a) {

    var DEFAULT =
    {
        type: 1,
        size: 300,
        transform: false,
        typeTransform: 2,
        title: false,
    }, _res = 0;

    function _calc(size)
    { 
        var result = 0, _result = 0;
        _result = (size / 100) * 65;
        result  = (_result / 100) * 25;
        
        _res = result;
        return result;
    }

    function _title(type)
    { 
        var result = null;
        if (type === 1) result = "Main Uchiha's Sharingan";
        else if (type === 2) result = "Uchiha Madara's Eternal Sharingan";
        else if (type === 3) result = "Uchiha Sasuke's Eternal Sharingan";
        else if (type === 4) result = "Uchiha Itachi's Sharingan";
        else if (type === 5) result = "Uchiha Obito's Sharingan";
        else if (type === 6) result = "Uchiha Shisui's Sharingan";
        else if (type === 7) result = "Uchiha Fugaku's Sharingan";
        else if (type === 8) result = "Uchiha Naori's Sharingan";
        else if (type === 9) result = "Uchiha Naka's Sharingan";
        else if (type === 10) result = "Uchiha Baru's Sharingan";
        else if (type === 11) result = "Uchiha Rai's Sharingan";
        else if (type === 12) result = "Uchiha Izuna's Sharingan";
        else if (type === 13) result = "Uchiha Shin's Sharingan";
        else if (type === 14) result = "Indra Ōtsutsuki's Sharingan";
        else if (type === 15) result = "Kaguya Ōtsutsuki's Rinne Sharingan";
        return result;
    }

    function _elemSharingan(type, transform, typeTransform)
    {
        var e,
            _transBool;
        
        _transBool = (transform) ? " transform" : "";

        typeTransform = (transform && typeTransform !== 1) ? typeTransform : type;

        var border_type1 = 'style="border:' + ((_res / 2) / 6) + 'px dotted #000"',
            border = 'style="border:' + ((_res / 2) / 2) + 'px solid #000"',
            border2 = 'style="border:' + ((_res / 2) / 6) + 'px solid #000"';
        
        var type1 = '<div class="sharingan-body type-' + type + _transBool + '" ' + border_type1 + '>' +
                        '<div class="up"></div>' +
                        '<div class="left"></div>' +
                        '<div class="right"></div>' +
                        '<div class="center"></div>' +
                    '</div>',
            type2 = '<div class="sharingan-body type-'+ typeTransform + _transBool + '" ' + border + '>' +
                        '<div class="up">' +  
                            '<div class="up-curve" style="border-top:' + _res + 'px solid #000"></div>' +
                        '</div>' +
                        '<div class="left">' +
                            '<div class="left-curve" style="border-top:' + _res + 'px solid #000"></div>' +
                        '</div>' +
                        '<div class="right">' +
                            '<div class="right-curve" style="border-top:' + _res + 'px solid #000"></div>' +
                        '</div>' +
                        '<div class="center"></div>' +
                    '</div>',
            type3 = '<div class="sharingan-body type-' + typeTransform + _transBool + '">' +
                        '<div class="up"></div>' +
                        '<div class="left"></div>' +
                        '<div class="right"></div>' +
                        '<div class="triangle1"></div>' +
                        '<div class="triangle2"></div>' +
                        '<div class="triangle3"></div>' +
                        '<div class="center"></div>' +
                    '</div>',
            type4 = '<div class="sharingan-body type-' + typeTransform + _transBool + '">' +
                        '<div class="triangle" style="border-bottom:' + (_res * 2) + 'px solid #000"></div>' +
                        '<div class="triangle2" style="border-bottom:' + (_res * 2) + 'px solid #000"></div>' +
                        '<div class="triangle3" style="border-bottom:' + (_res * 2) + 'px solid #000"></div>' +
                        '<div class="curve" ' + border_type1 + '></div>' +
                        '<div class="center"></div>' +
                    '</div>',
            type5 = '<div class="sharingan-body type-' + typeTransform + _transBool + '">' +
                        '<div class="wing"></div>' +
                        '<div class="wing2"></div>' +
                        '<div class="wing3"></div>' +
                        '<div class="center2" ' + border2 + '></div>' +
                        '<div class="triangle"></div>' +
                        '<div class="triangle2"></div>' +
                        '<div class="triangle3"></div>' +
                        '<div class="center" ' + border2 + '></div>' +
                    '</div>',
            type6 = '<div class="sharingan-body type-' + typeTransform + _transBool + '">' +
                        '<div class="wing"></div>' +
                        '<div class="wing2"></div>' +
                        '<div class="wing3"></div>' +
                        '<div class="wing4"></div>' +
                        '<div class="center"></div>' +
                    '</div>',
            type7 = '<div class="sharingan-body type-' + typeTransform + _transBool + '">' +
                        '<div class="center2" ' + border_type1 + '></div>' +
                        '<div class="curve">' +
                            '<div class="wing" style="border-right:' + _res + 'px solid #000"></div>' +
                            '<div class="circle"></div>' +
                        '</div>' +
                        '<div class="curve2">' +
                            '<div class="wing" style="border-right:' + _res + 'px solid #000"></div>' +
                            '<div class="circle"></div>' +
                        '</div>' +
                        '<div class="curve3">' +
                            '<div class="wing" style="border-right:' + _res + 'px solid #000"></div>' +
                            '<div class="circle"></div>' +
                        '</div>' +
                        '<div class="center"></div>' +
                    '</div>',
            type8 = '<div class="sharingan-body type-' + typeTransform + _transBool + '">' +
                        '<div class="curve"></div>' +
                        '<div class="curve2"></div>' +
                        '<div class="curve3"></div>' +
                        '<div class="rectangle"></div>' +
                        '<div class="center"></div>' +
                        '<div class="center2" ' + border_type1 + '></div>' +
                    '</div>',
            type9 = '<div class="sharingan-body type-' + typeTransform + _transBool + '">' +
                        '<div class="center2"></div>' +
                        '<div class="wing" style="border-bottom-width:' + (_res * 2) + 'px"></div>' +
                        '<div class="wing2" style="border-bottom-width:' + (_res * 2) + 'px"></div>' +
                        '<div class="wing3" style="border-bottom-width:' + (_res * 2) + 'px"></div>' +
                        '<div class="center" ' + border2 + '></div>' +
                    '</div>',
            type10 = '<div class="sharingan-body type-' + typeTransform + _transBool + '">' +
                        '<div class="wing"></div>' +
                        '<div class="wing2"></div>' +
                        '<div class="wing3"></div>' +
                        '<div class="triangle" style="border-bottom-width:' + (_res * 5) + 'px;border-bottom-style:solid;border-left:' + (_res * 2.5) + 'px solid  transparent;border-right:' + (_res * 2.5) + 'px solid  transparent;"></div>' +
                        '<div class="triangle2" style="border-bottom-width:' + (_res * 4.5) + 'px;border-bottom-style:solid;border-left:' + (_res * 2.2) + 'px solid  transparent;border-right:' + (_res * 2.2) + 'px solid  transparent;"></div>' +
                        '<div class="center"></div>' +
                    '</div>',
            type11 = '<div class="sharingan-body type-' + typeTransform + _transBool + '">' +
                        '<div class="small-wing" style="border-left:' + (_res / 10) + 'px solid #000"></div>' +
                        '<div class="small-wing2" style="border-right:' + (_res / 10) + 'px solid #000"></div>' +
                        '<div class="small-wing3" style="border-right:' + (_res / 10) + 'px solid #000"></div>' +
                        '<div class="wing" style="border-top:' + (_res * 2) + 'px solid #000"></div>' +
                        '<div class="wing2" style="border-top:' + (_res * 2) + 'px solid #000"></div>' +
                        '<div class="wing3" style="border-top:' + (_res * 2) + 'px solid #000"></div>' +
                        '<div class="center"></div>' +
                    '</div>',
            type12 = '<div class="sharingan-body type-' + typeTransform + _transBool + '">' +
                        '<div class="rectangle"></div>' +
                        '<div class="center"></div>' +
                    '</div>',
            type13 = '<div class="sharingan-body type-' + typeTransform + _transBool + '">' +
                        '<div class="triangle" style="border-bottom:' + (_res * 2) + 'px solid #000;border-left:' + (_res) + 'px solid  transparent;border-right:' + (_res) + 'px solid  transparent;"></div>' +
                        '<div class="triangle2" style="border-bottom:' + (_res * 2) + 'px solid #000;border-left:' + (_res) + 'px solid  transparent;border-right:' + (_res) + 'px solid  transparent;"></div>' +
                        '<div class="triangle3" style="border-bottom:' + (_res * 2) + 'px solid #000;border-left:' + (_res) + 'px solid  transparent;border-right:' + (_res) + 'px solid  transparent;"></div>' +
                        '<div class="center"></div>' +
                    '</div>',
            type14 = '<div class="sharingan-body type-' + typeTransform + _transBool + '">' +
                        '<div class="curve" style="border:' + (_res / 6) + 'px solid #000;border-bottom-color: transparent;border-right-color: transparent;"></div>' +
                        '<div class="curve2" style="border:' + (_res / 6) + 'px solid #000;border-bottom-color: transparent;border-right-color: transparent;"></div>' +
                        '<div class="curve3" style="border:' + (_res / 6) + 'px solid #000;border-bottom-color: transparent;border-right-color: transparent;"></div>' +
                        '<div class="curve4" style="border:' + (_res / 6) + 'px solid #000;border-bottom-color: transparent;border-right-color: transparent;"></div>' +
                        '<div class="curve5" style="border:' + (_res / 6) + 'px solid #000;border-bottom-color: transparent;border-right-color: transparent;border-left-color: transparent;"></div>' +
                        '<div class="curve6" style="border:' + (_res / 6) + 'px solid #000;border-bottom-color: transparent;border-right-color: transparent;"></div>' +
                        '<div class="center"></div>' +
                    '</div>',
            type15 = '<div class="sharingan-body type-' + typeTransform + _transBool + '">' +
                        '<div class="center" ' + border2 + '></div>' +
                        '<div class="center2" ' + border2 + '></div>' +
                        '<div class="center3" ' + border2 + '></div>' +
                        '<div class="wing"></div>' +
                        '<div class="wing2"></div>' +
                        '<div class="wing3"></div>' +
                        '<div class="wing4"></div>' +
                        '<div class="wing5"></div>' +
                        '<div class="wing6"></div>' +
                        '<div class="wing7"></div>' +
                        '<div class="wing8"></div>' +
                        '<div class="wing9"></div>' +
                    '</div>';

        if (type === 1)
        { 
            e = type1;
            if(transform && typeTransform === 2) e += type2;
            if(transform && typeTransform === 3) e += type3;
            if(transform && typeTransform === 4) e += type4;
            if(transform && typeTransform === 5) e += type5;
            if(transform && typeTransform === 6) e += type6;
            if(transform && typeTransform === 7) e += type7;
            if(transform && typeTransform === 8) e += type8;
            if(transform && typeTransform === 9) e += type9;
            if(transform && typeTransform === 10) e += type10;
            if(transform && typeTransform === 11) e += type11;
            if(transform && typeTransform === 12) e += type12;
            if(transform && typeTransform === 13) e += type13;
            if(transform && typeTransform === 14) e += type14;
            if(transform && typeTransform === 15) e += type15;
        }

        else if (type === 2) e = type2;
        
        else if (type === 3) e = type3;
        
        else if (type === 4) e = type4;
        
        else if (type === 5) e = type5;
        
        else if (type === 6) e = type6;
        
        else if (type === 7) e = type7;
        
        else if (type === 8) e = type8;
        
        else if (type === 9) e = type9;
            
        else if (type === 10) e = type10;
            
        else if (type === 11) e = type11;
            
        else if (type === 12) e = type12;
            
        else if (type === 13) e = type13;
            
        else if (type === 14) e = type14;
            
        else if (type === 15) e = type15;
        
        return e;
    }

    
    var sharingan = function (elem) {

        //find elements
        var el = document.querySelectorAll(elem);

        return {
            ex: function (obj) {
                var size = obj.size ? obj.size : DEFAULT.size,
                    type = obj.type ? obj.type : DEFAULT.type,
                    typeTransform = obj.typeTransform ? obj.typeTransform : DEFAULT.typeTransform,
                    transform = obj.transform ? obj.transform : DEFAULT.transform,
                    title = obj.title ? obj.title : DEFAULT.title,
                    typeTransformTitle = (transform && typeTransform !== 1) ? typeTransform : type,
                    _trans = transform ? " transform" : "";
                
                _calc(size);

                for (i = 0; i < el.length; i++) {
                    var dom = document.createElement('div');
                    dom.className = "sharingan type-" + type + _trans;
                    dom.id = "sharingan";
                    if (title) dom.title = _title(typeTransformTitle);
                    dom.style.width = (typeof size === "string") ? size : size + "px";
                    dom.style.height = (typeof size === "string") ? size : size + "px";
                    dom.innerHTML = _elemSharingan(type, transform, typeTransform);
                    el[i].appendChild(dom);
                }
            }
        };
    }

    a.sharingan = sharingan;

})(window);