/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */

;



window.Modernizr = (function( window, document, undefined ) {

    var version = '2.6.2',

    Modernizr = {},

    enableClasses = true,

    docElement = document.documentElement,

    mod = 'modernizr',
    modElem = document.createElement(mod),
    mStyle = modElem.style,

    inputElem  = document.createElement('input')  ,

    smile = ':)',

    toString = {}.toString,

    prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),



    omPrefixes = 'Webkit Moz O ms',

    cssomPrefixes = omPrefixes.split(' '),

    domPrefixes = omPrefixes.toLowerCase().split(' '),

    ns = {'svg': 'http://www.w3.org/2000/svg'},

    tests = {},
    inputs = {},
    attrs = {},

    classes = [],

    slice = classes.slice,

    featureName, 


    injectElementWithStyles = function( rule, callback, nodes, testnames ) {

      var style, ret, node, docOverflow,
          div = document.createElement('div'),
                body = document.body,
                fakeBody = body || document.createElement('body');

      if ( parseInt(nodes, 10) ) {
                      while ( nodes-- ) {
              node = document.createElement('div');
              node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
              div.appendChild(node);
          }
      }

                style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
      div.id = mod;
          (body ? div : fakeBody).innerHTML += style;
      fakeBody.appendChild(div);
      if ( !body ) {
                fakeBody.style.background = '';
                fakeBody.style.overflow = 'hidden';
          docOverflow = docElement.style.overflow;
          docElement.style.overflow = 'hidden';
          docElement.appendChild(fakeBody);
      }

      ret = callback(div, rule);
        if ( !body ) {
          fakeBody.parentNode.removeChild(fakeBody);
          docElement.style.overflow = docOverflow;
      } else {
          div.parentNode.removeChild(div);
      }

      return !!ret;

    },



    isEventSupported = (function() {

      var TAGNAMES = {
        'select': 'input', 'change': 'input',
        'submit': 'form', 'reset': 'form',
        'error': 'img', 'load': 'img', 'abort': 'img'
      };

      function isEventSupported( eventName, element ) {

        element = element || document.createElement(TAGNAMES[eventName] || 'div');
        eventName = 'on' + eventName;

            var isSupported = eventName in element;

        if ( !isSupported ) {
                if ( !element.setAttribute ) {
            element = document.createElement('div');
          }
          if ( element.setAttribute && element.removeAttribute ) {
            element.setAttribute(eventName, '');
            isSupported = is(element[eventName], 'function');

                    if ( !is(element[eventName], 'undefined') ) {
              element[eventName] = undefined;
            }
            element.removeAttribute(eventName);
          }
        }

        element = null;
        return isSupported;
      }
      return isEventSupported;
    })(),


    _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
      hasOwnProp = function (object, property) {
        return _hasOwnProperty.call(object, property);
      };
    }
    else {
      hasOwnProp = function (object, property) { 
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
      };
    }


    if (!Function.prototype.bind) {
      Function.prototype.bind = function bind(that) {

        var target = this;

        if (typeof target != "function") {
            throw new TypeError();
        }

        var args = slice.call(arguments, 1),
            bound = function () {

            if (this instanceof bound) {

              var F = function(){};
              F.prototype = target.prototype;
              var self = new F();

              var result = target.apply(
                  self,
                  args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return self;

            } else {

              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              );

            }

        };

        return bound;
      };
    }

    function setCss( str ) {
        mStyle.cssText = str;
    }

    function setCssAll( str1, str2 ) {
        return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
    }

    function is( obj, type ) {
        return typeof obj === type;
    }

    function contains( str, substr ) {
        return !!~('' + str).indexOf(substr);
    }

    function testProps( props, prefixed ) {
        for ( var i in props ) {
            var prop = props[i];
            if ( !contains(prop, "-") && mStyle[prop] !== undefined ) {
                return prefixed == 'pfx' ? prop : true;
            }
        }
        return false;
    }

    function testDOMProps( props, obj, elem ) {
        for ( var i in props ) {
            var item = obj[props[i]];
            if ( item !== undefined) {

                            if (elem === false) return props[i];

                            if (is(item, 'function')){
                                return item.bind(elem || obj);
                }

                            return item;
            }
        }
        return false;
    }

    function testPropsAll( prop, prefixed, elem ) {

        var ucProp  = prop.charAt(0).toUpperCase() + prop.slice(1),
            props   = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

            if(is(prefixed, "string") || is(prefixed, "undefined")) {
          return testProps(props, prefixed);

            } else {
          props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
          return testDOMProps(props, prefixed, elem);
        }
    }    tests['flexbox'] = function() {
      return testPropsAll('flexWrap');
    };    tests['canvas'] = function() {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    };

    tests['canvastext'] = function() {
        return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function'));
    };



    tests['webgl'] = function() {
        return !!window.WebGLRenderingContext;
    };


    tests['touch'] = function() {
        var bool;

        if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
          bool = true;
        } else {
          injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''), function( node ) {
            bool = node.offsetTop === 9;
          });
        }

        return bool;
    };



    tests['geolocation'] = function() {
        return 'geolocation' in navigator;
    };


    tests['postmessage'] = function() {
      return !!window.postMessage;
    };


    tests['websqldatabase'] = function() {
      return !!window.openDatabase;
    };

    tests['indexedDB'] = function() {
      return !!testPropsAll("indexedDB", window);
    };

    tests['hashchange'] = function() {
      return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7);
    };

    tests['history'] = function() {
      return !!(window.history && history.pushState);
    };

    tests['draganddrop'] = function() {
        var div = document.createElement('div');
        return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
    };

    tests['websockets'] = function() {
        return 'WebSocket' in window || 'MozWebSocket' in window;
    };


    tests['rgba'] = function() {
        setCss('background-color:rgba(150,255,150,.5)');

        return contains(mStyle.backgroundColor, 'rgba');
    };

    tests['hsla'] = function() {
            setCss('background-color:hsla(120,40%,100%,.5)');

        return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla');
    };

    tests['multiplebgs'] = function() {
                setCss('background:url(https://),url(https://),red url(https://)');

            return (/(url\s*\(.*?){3}/).test(mStyle.background);
    };    tests['backgroundsize'] = function() {
        return testPropsAll('backgroundSize');
    };

    tests['borderimage'] = function() {
        return testPropsAll('borderImage');
    };



    tests['borderradius'] = function() {
        return testPropsAll('borderRadius');
    };

    tests['boxshadow'] = function() {
        return testPropsAll('boxShadow');
    };

    tests['textshadow'] = function() {
        return document.createElement('div').style.textShadow === '';
    };


    tests['opacity'] = function() {
                setCssAll('opacity:.55');

                    return (/^0.55$/).test(mStyle.opacity);
    };


    tests['cssanimations'] = function() {
        return testPropsAll('animationName');
    };


    tests['csscolumns'] = function() {
        return testPropsAll('columnCount');
    };


    tests['cssgradients'] = function() {
        var str1 = 'background-image:',
            str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
            str3 = 'linear-gradient(left top,#9f9, white);';

        setCss(
                       (str1 + '-webkit- '.split(' ').join(str2 + str1) +
                       prefixes.join(str3 + str1)).slice(0, -str1.length)
        );

        return contains(mStyle.backgroundImage, 'gradient');
    };


    tests['cssreflections'] = function() {
        return testPropsAll('boxReflect');
    };


    tests['csstransforms'] = function() {
        return !!testPropsAll('transform');
    };


    tests['csstransforms3d'] = function() {

        var ret = !!testPropsAll('perspective');

                        if ( ret && 'webkitPerspective' in docElement.style ) {

                      injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function( node, rule ) {
            ret = node.offsetLeft === 9 && node.offsetHeight === 3;
          });
        }
        return ret;
    };


    tests['csstransitions'] = function() {
        return testPropsAll('transition');
    };



    tests['fontface'] = function() {
        var bool;

        injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function( node, rule ) {
          var style = document.getElementById('smodernizr'),
              sheet = style.sheet || style.styleSheet,
              cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';

          bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
        });

        return bool;
    };

    tests['generatedcontent'] = function() {
        var bool;

        injectElementWithStyles(['#',mod,'{font:0/0 a}#',mod,':after{content:"',smile,'";visibility:hidden;font:3px/1 a}'].join(''), function( node ) {
          bool = node.offsetHeight >= 3;
        });

        return bool;
    };
    tests['video'] = function() {
        var elem = document.createElement('video'),
            bool = false;

            try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('video/ogg; codecs="theora"')      .replace(/^no$/,'');

                            bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"') .replace(/^no$/,'');

                bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,'');
            }

        } catch(e) { }

        return bool;
    };

    tests['audio'] = function() {
        var elem = document.createElement('audio'),
            bool = false;

        try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');
                bool.mp3  = elem.canPlayType('audio/mpeg;')               .replace(/^no$/,'');

                                                    bool.wav  = elem.canPlayType('audio/wav; codecs="1"')     .replace(/^no$/,'');
                bool.m4a  = ( elem.canPlayType('audio/x-m4a;')            ||
                              elem.canPlayType('audio/aac;'))             .replace(/^no$/,'');
            }
        } catch(e) { }

        return bool;
    };


    tests['localstorage'] = function() {
        try {
            localStorage.setItem(mod, mod);
            localStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };

    tests['sessionstorage'] = function() {
        try {
            sessionStorage.setItem(mod, mod);
            sessionStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };


    tests['webworkers'] = function() {
        return !!window.Worker;
    };


    tests['applicationcache'] = function() {
        return !!window.applicationCache;
    };


    tests['svg'] = function() {
        return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
    };

    tests['inlinesvg'] = function() {
      var div = document.createElement('div');
      div.innerHTML = '<svg/>';
      return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
    };

    tests['smil'] = function() {
        return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')));
    };


    tests['svgclippaths'] = function() {
        return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
    };

    function webforms() {
                                            Modernizr['input'] = (function( props ) {
            for ( var i = 0, len = props.length; i < len; i++ ) {
                attrs[ props[i] ] = !!(props[i] in inputElem);
            }
            if (attrs.list){
                                  attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
            }
            return attrs;
        })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
                            Modernizr['inputtypes'] = (function(props) {

            for ( var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++ ) {

                inputElem.setAttribute('type', inputElemType = props[i]);
                bool = inputElem.type !== 'text';

                                                    if ( bool ) {

                    inputElem.value         = smile;
                    inputElem.style.cssText = 'position:absolute;visibility:hidden;';

                    if ( /^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined ) {

                      docElement.appendChild(inputElem);
                      defaultView = document.defaultView;

                                        bool =  defaultView.getComputedStyle &&
                              defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&
                                                                                  (inputElem.offsetHeight !== 0);

                      docElement.removeChild(inputElem);

                    } else if ( /^(search|tel)$/.test(inputElemType) ){
                                                                                    } else if ( /^(url|email)$/.test(inputElemType) ) {
                                        bool = inputElem.checkValidity && inputElem.checkValidity() === false;

                    } else {
                                        bool = inputElem.value != smile;
                    }
                }

                inputs[ props[i] ] = !!bool;
            }
            return inputs;
        })('search tel url email datetime date month week time datetime-local number range color'.split(' '));
        }
    for ( var feature in tests ) {
        if ( hasOwnProp(tests, feature) ) {
                                    featureName  = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }

    Modernizr.input || webforms();


     Modernizr.addTest = function ( feature, test ) {
       if ( typeof feature == 'object' ) {
         for ( var key in feature ) {
           if ( hasOwnProp( feature, key ) ) {
             Modernizr.addTest( key, feature[ key ] );
           }
         }
       } else {

         feature = feature.toLowerCase();

         if ( Modernizr[feature] !== undefined ) {
                                              return Modernizr;
         }

         test = typeof test == 'function' ? test() : test;

         if (typeof enableClasses !== "undefined" && enableClasses) {
           docElement.className += ' ' + (test ? '' : 'no-') + feature;
         }
         Modernizr[feature] = test;

       }

       return Modernizr; 
     };


    setCss('');
    modElem = inputElem = null;

    ;(function(window, document) {
        var options = window.html5 || {};

        var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

        var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

        var supportsHtml5Styles;

        var expando = '_html5shiv';

        var expanID = 0;

        var expandoData = {};

        var supportsUnknownElements;

      (function() {
        try {
            var a = document.createElement('a');
            a.innerHTML = '<xyz></xyz>';
                    supportsHtml5Styles = ('hidden' in a);

            supportsUnknownElements = a.childNodes.length == 1 || (function() {
                        (document.createElement)('a');
              var frag = document.createDocumentFragment();
              return (
                typeof frag.cloneNode == 'undefined' ||
                typeof frag.createDocumentFragment == 'undefined' ||
                typeof frag.createElement == 'undefined'
              );
            }());
        } catch(e) {
          supportsHtml5Styles = true;
          supportsUnknownElements = true;
        }

      }());        function addStyleSheet(ownerDocument, cssText) {
        var p = ownerDocument.createElement('p'),
            parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

        p.innerHTML = 'x<style>' + cssText + '</style>';
        return parent.insertBefore(p.lastChild, parent.firstChild);
      }

        function getElements() {
        var elements = html5.elements;
        return typeof elements == 'string' ? elements.split(' ') : elements;
      }

          function getExpandoData(ownerDocument) {
        var data = expandoData[ownerDocument[expando]];
        if (!data) {
            data = {};
            expanID++;
            ownerDocument[expando] = expanID;
            expandoData[expanID] = data;
        }
        return data;
      }

        function createElement(nodeName, ownerDocument, data){
        if (!ownerDocument) {
            ownerDocument = document;
        }
        if(supportsUnknownElements){
            return ownerDocument.createElement(nodeName);
        }
        if (!data) {
            data = getExpandoData(ownerDocument);
        }
        var node;

        if (data.cache[nodeName]) {
            node = data.cache[nodeName].cloneNode();
        } else if (saveClones.test(nodeName)) {
            node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
        } else {
            node = data.createElem(nodeName);
        }

                                    return node.canHaveChildren && !reSkip.test(nodeName) ? data.frag.appendChild(node) : node;
      }

        function createDocumentFragment(ownerDocument, data){
        if (!ownerDocument) {
            ownerDocument = document;
        }
        if(supportsUnknownElements){
            return ownerDocument.createDocumentFragment();
        }
        data = data || getExpandoData(ownerDocument);
        var clone = data.frag.cloneNode(),
            i = 0,
            elems = getElements(),
            l = elems.length;
        for(;i<l;i++){
            clone.createElement(elems[i]);
        }
        return clone;
      }

        function shivMethods(ownerDocument, data) {
        if (!data.cache) {
            data.cache = {};
            data.createElem = ownerDocument.createElement;
            data.createFrag = ownerDocument.createDocumentFragment;
            data.frag = data.createFrag();
        }


        ownerDocument.createElement = function(nodeName) {
                if (!html5.shivMethods) {
              return data.createElem(nodeName);
          }
          return createElement(nodeName, ownerDocument, data);
        };

        ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
          'var n=f.cloneNode(),c=n.createElement;' +
          'h.shivMethods&&(' +
                    getElements().join().replace(/\w+/g, function(nodeName) {
              data.createElem(nodeName);
              data.frag.createElement(nodeName);
              return 'c("' + nodeName + '")';
            }) +
          ');return n}'
        )(html5, data.frag);
      }        function shivDocument(ownerDocument) {
        if (!ownerDocument) {
            ownerDocument = document;
        }
        var data = getExpandoData(ownerDocument);

        if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
          data.hasCSS = !!addStyleSheet(ownerDocument,
                    'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}' +
                    'mark{background:#FF0;color:#000}'
          );
        }
        if (!supportsUnknownElements) {
          shivMethods(ownerDocument, data);
        }
        return ownerDocument;
      }        var html5 = {

            'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',

            'shivCSS': (options.shivCSS !== false),

            'supportsUnknownElements': supportsUnknownElements,

            'shivMethods': (options.shivMethods !== false),

            'type': 'default',

            'shivDocument': shivDocument,

            createElement: createElement,

            createDocumentFragment: createDocumentFragment
      };        window.html5 = html5;

        shivDocument(document);

    }(this, document));

    Modernizr._version      = version;

    Modernizr._prefixes     = prefixes;
    Modernizr._domPrefixes  = domPrefixes;
    Modernizr._cssomPrefixes  = cssomPrefixes;


    Modernizr.hasEvent      = isEventSupported;

    Modernizr.testProp      = function(prop){
        return testProps([prop]);
    };

    Modernizr.testAllProps  = testPropsAll;


    Modernizr.testStyles    = injectElementWithStyles;
    Modernizr.prefixed      = function(prop, obj, elem){
      if(!obj) {
        return testPropsAll(prop, 'pfx');
      } else {
            return testPropsAll(prop, obj, elem);
      }
    };


    docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

                                                    (enableClasses ? ' js ' + classes.join(' ') : '');

    return Modernizr;

})(this, this.document);
/*yepnope1.5.4|WTFPL*/
(function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}})(this,document);
Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0));};
;
/*!
 * jQuery JavaScript Library v1.8.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Tue Nov 13 2012 08:20:33 GMT-0500 (Eastern Standard Time)
 */

(function( window, undefined ) {
var
  // A central reference to the root jQuery(document)
  rootjQuery,

  // The deferred used on DOM ready
  readyList,

  // Use the correct document accordingly with window argument (sandbox)
  document = window.document,
  location = window.location,
  navigator = window.navigator,

  // Map over jQuery in case of overwrite
  _jQuery = window.jQuery,

  // Map over the $ in case of overwrite
  _$ = window.$,

  // Save a reference to some core methods
  core_push = Array.prototype.push,
  core_slice = Array.prototype.slice,
  core_indexOf = Array.prototype.indexOf,
  core_toString = Object.prototype.toString,
  core_hasOwn = Object.prototype.hasOwnProperty,
  core_trim = String.prototype.trim,

  // Define a local copy of jQuery
  jQuery = function( selector, context ) {
    // The jQuery object is actually just the init constructor 'enhanced'
    return new jQuery.fn.init( selector, context, rootjQuery );
  },

  // Used for matching numbers
  core_pnum = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,

  // Used for detecting and trimming whitespace
  core_rnotwhite = /\S/,
  core_rspace = /\s+/,

  // Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
  rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

  // A simple way to check for HTML strings
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  rquickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,

  // Match a standalone tag
  rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,

  // JSON RegExp
  rvalidchars = /^[\],:{}\s]*$/,
  rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
  rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
  rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,

  // Matches dashed string for camelizing
  rmsPrefix = /^-ms-/,
  rdashAlpha = /-([\da-z])/gi,

  // Used by jQuery.camelCase as callback to replace()
  fcamelCase = function( all, letter ) {
    return ( letter + "" ).toUpperCase();
  },

  // The ready event handler and self cleanup method
  DOMContentLoaded = function() {
    if ( document.addEventListener ) {
      document.removeEventListener( "DOMContentLoaded", DOMContentLoaded, false );
      jQuery.ready();
    } else if ( document.readyState === "complete" ) {
      // we're here because readyState === "complete" in oldIE
      // which is good enough for us to call the dom ready!
      document.detachEvent( "onreadystatechange", DOMContentLoaded );
      jQuery.ready();
    }
  },

  // [[Class]] -> type pairs
  class2type = {};

jQuery.fn = jQuery.prototype = {
  constructor: jQuery,
  init: function( selector, context, rootjQuery ) {
    var match, elem, ret, doc;

    // Handle $(""), $(null), $(undefined), $(false)
    if ( !selector ) {
      return this;
    }

    // Handle $(DOMElement)
    if ( selector.nodeType ) {
      this.context = this[0] = selector;
      this.length = 1;
      return this;
    }

    // Handle HTML strings
    if ( typeof selector === "string" ) {
      if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
        // Assume that strings that start and end with <> are HTML and skip the regex check
        match = [ null, selector, null ];

      } else {
        match = rquickExpr.exec( selector );
      }

      // Match html or make sure no context is specified for #id
      if ( match && (match[1] || !context) ) {

        // HANDLE: $(html) -> $(array)
        if ( match[1] ) {
          context = context instanceof jQuery ? context[0] : context;
          doc = ( context && context.nodeType ? context.ownerDocument || context : document );

          // scripts is true for back-compat
          selector = jQuery.parseHTML( match[1], doc, true );
          if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
            this.attr.call( selector, context, true );
          }

          return jQuery.merge( this, selector );

        // HANDLE: $(#id)
        } else {
          elem = document.getElementById( match[2] );

          // Check parentNode to catch when Blackberry 4.6 returns
          // nodes that are no longer in the document #6963
          if ( elem && elem.parentNode ) {
            // Handle the case where IE and Opera return items
            // by name instead of ID
            if ( elem.id !== match[2] ) {
              return rootjQuery.find( selector );
            }

            // Otherwise, we inject the element directly into the jQuery object
            this.length = 1;
            this[0] = elem;
          }

          this.context = document;
          this.selector = selector;
          return this;
        }

      // HANDLE: $(expr, $(...))
      } else if ( !context || context.jquery ) {
        return ( context || rootjQuery ).find( selector );

      // HANDLE: $(expr, context)
      // (which is just equivalent to: $(context).find(expr)
      } else {
        return this.constructor( context ).find( selector );
      }

    // HANDLE: $(function)
    // Shortcut for document ready
    } else if ( jQuery.isFunction( selector ) ) {
      return rootjQuery.ready( selector );
    }

    if ( selector.selector !== undefined ) {
      this.selector = selector.selector;
      this.context = selector.context;
    }

    return jQuery.makeArray( selector, this );
  },

  // Start with an empty selector
  selector: "",

  // The current version of jQuery being used
  jquery: "1.8.3",

  // The default length of a jQuery object is 0
  length: 0,

  // The number of elements contained in the matched element set
  size: function() {
    return this.length;
  },

  toArray: function() {
    return core_slice.call( this );
  },

  // Get the Nth element in the matched element set OR
  // Get the whole matched element set as a clean array
  get: function( num ) {
    return num == null ?

      // Return a 'clean' array
      this.toArray() :

      // Return just the object
      ( num < 0 ? this[ this.length + num ] : this[ num ] );
  },

  // Take an array of elements and push it onto the stack
  // (returning the new matched element set)
  pushStack: function( elems, name, selector ) {

    // Build a new jQuery matched element set
    var ret = jQuery.merge( this.constructor(), elems );

    // Add the old object onto the stack (as a reference)
    ret.prevObject = this;

    ret.context = this.context;

    if ( name === "find" ) {
      ret.selector = this.selector + ( this.selector ? " " : "" ) + selector;
    } else if ( name ) {
      ret.selector = this.selector + "." + name + "(" + selector + ")";
    }

    // Return the newly-formed element set
    return ret;
  },

  // Execute a callback for every element in the matched set.
  // (You can seed the arguments with an array of args, but this is
  // only used internally.)
  each: function( callback, args ) {
    return jQuery.each( this, callback, args );
  },

  ready: function( fn ) {
    // Add the callback
    jQuery.ready.promise().done( fn );

    return this;
  },

  eq: function( i ) {
    i = +i;
    return i === -1 ?
      this.slice( i ) :
      this.slice( i, i + 1 );
  },

  first: function() {
    return this.eq( 0 );
  },

  last: function() {
    return this.eq( -1 );
  },

  slice: function() {
    return this.pushStack( core_slice.apply( this, arguments ),
      "slice", core_slice.call(arguments).join(",") );
  },

  map: function( callback ) {
    return this.pushStack( jQuery.map(this, function( elem, i ) {
      return callback.call( elem, i, elem );
    }));
  },

  end: function() {
    return this.prevObject || this.constructor(null);
  },

  // For internal use only.
  // Behaves like an Array's method, not like a jQuery method.
  push: core_push,
  sort: [].sort,
  splice: [].splice
};

// Give the init function the jQuery prototype for later instantiation
jQuery.fn.init.prototype = jQuery.fn;

jQuery.extend = jQuery.fn.extend = function() {
  var options, name, src, copy, copyIsArray, clone,
    target = arguments[0] || {},
    i = 1,
    length = arguments.length,
    deep = false;

  // Handle a deep copy situation
  if ( typeof target === "boolean" ) {
    deep = target;
    target = arguments[1] || {};
    // skip the boolean and the target
    i = 2;
  }

  // Handle case when target is a string or something (possible in deep copy)
  if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
    target = {};
  }

  // extend jQuery itself if only one argument is passed
  if ( length === i ) {
    target = this;
    --i;
  }

  for ( ; i < length; i++ ) {
    // Only deal with non-null/undefined values
    if ( (options = arguments[ i ]) != null ) {
      // Extend the base object
      for ( name in options ) {
        src = target[ name ];
        copy = options[ name ];

        // Prevent never-ending loop
        if ( target === copy ) {
          continue;
        }

        // Recurse if we're merging plain objects or arrays
        if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
          if ( copyIsArray ) {
            copyIsArray = false;
            clone = src && jQuery.isArray(src) ? src : [];

          } else {
            clone = src && jQuery.isPlainObject(src) ? src : {};
          }

          // Never move original objects, clone them
          target[ name ] = jQuery.extend( deep, clone, copy );

        // Don't bring in undefined values
        } else if ( copy !== undefined ) {
          target[ name ] = copy;
        }
      }
    }
  }

  // Return the modified object
  return target;
};

jQuery.extend({
  noConflict: function( deep ) {
    if ( window.$ === jQuery ) {
      window.$ = _$;
    }

    if ( deep && window.jQuery === jQuery ) {
      window.jQuery = _jQuery;
    }

    return jQuery;
  },

  // Is the DOM ready to be used? Set to true once it occurs.
  isReady: false,

  // A counter to track how many items to wait for before
  // the ready event fires. See #6781
  readyWait: 1,

  // Hold (or release) the ready event
  holdReady: function( hold ) {
    if ( hold ) {
      jQuery.readyWait++;
    } else {
      jQuery.ready( true );
    }
  },

  // Handle when the DOM is ready
  ready: function( wait ) {

    // Abort if there are pending holds or we're already ready
    if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
      return;
    }

    // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
    if ( !document.body ) {
      return setTimeout( jQuery.ready, 1 );
    }

    // Remember that the DOM is ready
    jQuery.isReady = true;

    // If a normal DOM Ready event fired, decrement, and wait if need be
    if ( wait !== true && --jQuery.readyWait > 0 ) {
      return;
    }

    // If there are functions bound, to execute
    readyList.resolveWith( document, [ jQuery ] );

    // Trigger any bound ready events
    if ( jQuery.fn.trigger ) {
      jQuery( document ).trigger("ready").off("ready");
    }
  },

  // See test/unit/core.js for details concerning isFunction.
  // Since version 1.3, DOM methods and functions like alert
  // aren't supported. They return false on IE (#2968).
  isFunction: function( obj ) {
    return jQuery.type(obj) === "function";
  },

  isArray: Array.isArray || function( obj ) {
    return jQuery.type(obj) === "array";
  },

  isWindow: function( obj ) {
    return obj != null && obj == obj.window;
  },

  isNumeric: function( obj ) {
    return !isNaN( parseFloat(obj) ) && isFinite( obj );
  },

  type: function( obj ) {
    return obj == null ?
      String( obj ) :
      class2type[ core_toString.call(obj) ] || "object";
  },

  isPlainObject: function( obj ) {
    // Must be an Object.
    // Because of IE, we also have to check the presence of the constructor property.
    // Make sure that DOM nodes and window objects don't pass through, as well
    if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
      return false;
    }

    try {
      // Not own constructor property must be Object
      if ( obj.constructor &&
        !core_hasOwn.call(obj, "constructor") &&
        !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
        return false;
      }
    } catch ( e ) {
      // IE8,9 Will throw exceptions on certain host objects #9897
      return false;
    }

    // Own properties are enumerated firstly, so to speed up,
    // if last one is own, then all properties are own.

    var key;
    for ( key in obj ) {}

    return key === undefined || core_hasOwn.call( obj, key );
  },

  isEmptyObject: function( obj ) {
    var name;
    for ( name in obj ) {
      return false;
    }
    return true;
  },

  error: function( msg ) {
    throw new Error( msg );
  },

  // data: string of html
  // context (optional): If specified, the fragment will be created in this context, defaults to document
  // scripts (optional): If true, will include scripts passed in the html string
  parseHTML: function( data, context, scripts ) {
    var parsed;
    if ( !data || typeof data !== "string" ) {
      return null;
    }
    if ( typeof context === "boolean" ) {
      scripts = context;
      context = 0;
    }
    context = context || document;

    // Single tag
    if ( (parsed = rsingleTag.exec( data )) ) {
      return [ context.createElement( parsed[1] ) ];
    }

    parsed = jQuery.buildFragment( [ data ], context, scripts ? null : [] );
    return jQuery.merge( [],
      (parsed.cacheable ? jQuery.clone( parsed.fragment ) : parsed.fragment).childNodes );
  },

  parseJSON: function( data ) {
    if ( !data || typeof data !== "string") {
      return null;
    }

    // Make sure leading/trailing whitespace is removed (IE can't handle it)
    data = jQuery.trim( data );

    // Attempt to parse using the native JSON parser first
    if ( window.JSON && window.JSON.parse ) {
      return window.JSON.parse( data );
    }

    // Make sure the incoming data is actual JSON
    // Logic borrowed from http://json.org/json2.js
    if ( rvalidchars.test( data.replace( rvalidescape, "@" )
      .replace( rvalidtokens, "]" )
      .replace( rvalidbraces, "")) ) {

      return ( new Function( "return " + data ) )();

    }
    jQuery.error( "Invalid JSON: " + data );
  },

  // Cross-browser xml parsing
  parseXML: function( data ) {
    var xml, tmp;
    if ( !data || typeof data !== "string" ) {
      return null;
    }
    try {
      if ( window.DOMParser ) { // Standard
        tmp = new DOMParser();
        xml = tmp.parseFromString( data , "text/xml" );
      } else { // IE
        xml = new ActiveXObject( "Microsoft.XMLDOM" );
        xml.async = "false";
        xml.loadXML( data );
      }
    } catch( e ) {
      xml = undefined;
    }
    if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
      jQuery.error( "Invalid XML: " + data );
    }
    return xml;
  },

  noop: function() {},

  // Evaluates a script in a global context
  // Workarounds based on findings by Jim Driscoll
  // http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
  globalEval: function( data ) {
    if ( data && core_rnotwhite.test( data ) ) {
      // We use execScript on Internet Explorer
      // We use an anonymous function so that context is window
      // rather than jQuery in Firefox
      ( window.execScript || function( data ) {
        window[ "eval" ].call( window, data );
      } )( data );
    }
  },

  // Convert dashed to camelCase; used by the css and data modules
  // Microsoft forgot to hump their vendor prefix (#9572)
  camelCase: function( string ) {
    return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
  },

  nodeName: function( elem, name ) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  },

  // args is for internal usage only
  each: function( obj, callback, args ) {
    var name,
      i = 0,
      length = obj.length,
      isObj = length === undefined || jQuery.isFunction( obj );

    if ( args ) {
      if ( isObj ) {
        for ( name in obj ) {
          if ( callback.apply( obj[ name ], args ) === false ) {
            break;
          }
        }
      } else {
        for ( ; i < length; ) {
          if ( callback.apply( obj[ i++ ], args ) === false ) {
            break;
          }
        }
      }

    // A special, fast, case for the most common use of each
    } else {
      if ( isObj ) {
        for ( name in obj ) {
          if ( callback.call( obj[ name ], name, obj[ name ] ) === false ) {
            break;
          }
        }
      } else {
        for ( ; i < length; ) {
          if ( callback.call( obj[ i ], i, obj[ i++ ] ) === false ) {
            break;
          }
        }
      }
    }

    return obj;
  },

  // Use native String.trim function wherever possible
  trim: core_trim && !core_trim.call("\uFEFF\xA0") ?
    function( text ) {
      return text == null ?
        "" :
        core_trim.call( text );
    } :

    // Otherwise use our own trimming functionality
    function( text ) {
      return text == null ?
        "" :
        ( text + "" ).replace( rtrim, "" );
    },

  // results is for internal usage only
  makeArray: function( arr, results ) {
    var type,
      ret = results || [];

    if ( arr != null ) {
      // The window, strings (and functions) also have 'length'
      // Tweaked logic slightly to handle Blackberry 4.7 RegExp issues #6930
      type = jQuery.type( arr );

      if ( arr.length == null || type === "string" || type === "function" || type === "regexp" || jQuery.isWindow( arr ) ) {
        core_push.call( ret, arr );
      } else {
        jQuery.merge( ret, arr );
      }
    }

    return ret;
  },

  inArray: function( elem, arr, i ) {
    var len;

    if ( arr ) {
      if ( core_indexOf ) {
        return core_indexOf.call( arr, elem, i );
      }

      len = arr.length;
      i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

      for ( ; i < len; i++ ) {
        // Skip accessing in sparse arrays
        if ( i in arr && arr[ i ] === elem ) {
          return i;
        }
      }
    }

    return -1;
  },

  merge: function( first, second ) {
    var l = second.length,
      i = first.length,
      j = 0;

    if ( typeof l === "number" ) {
      for ( ; j < l; j++ ) {
        first[ i++ ] = second[ j ];
      }

    } else {
      while ( second[j] !== undefined ) {
        first[ i++ ] = second[ j++ ];
      }
    }

    first.length = i;

    return first;
  },

  grep: function( elems, callback, inv ) {
    var retVal,
      ret = [],
      i = 0,
      length = elems.length;
    inv = !!inv;

    // Go through the array, only saving the items
    // that pass the validator function
    for ( ; i < length; i++ ) {
      retVal = !!callback( elems[ i ], i );
      if ( inv !== retVal ) {
        ret.push( elems[ i ] );
      }
    }

    return ret;
  },

  // arg is for internal usage only
  map: function( elems, callback, arg ) {
    var value, key,
      ret = [],
      i = 0,
      length = elems.length,
      // jquery objects are treated as arrays
      isArray = elems instanceof jQuery || length !== undefined && typeof length === "number" && ( ( length > 0 && elems[ 0 ] && elems[ length -1 ] ) || length === 0 || jQuery.isArray( elems ) ) ;

    // Go through the array, translating each of the items to their
    if ( isArray ) {
      for ( ; i < length; i++ ) {
        value = callback( elems[ i ], i, arg );

        if ( value != null ) {
          ret[ ret.length ] = value;
        }
      }

    // Go through every key on the object,
    } else {
      for ( key in elems ) {
        value = callback( elems[ key ], key, arg );

        if ( value != null ) {
          ret[ ret.length ] = value;
        }
      }
    }

    // Flatten any nested arrays
    return ret.concat.apply( [], ret );
  },

  // A global GUID counter for objects
  guid: 1,

  // Bind a function to a context, optionally partially applying any
  // arguments.
  proxy: function( fn, context ) {
    var tmp, args, proxy;

    if ( typeof context === "string" ) {
      tmp = fn[ context ];
      context = fn;
      fn = tmp;
    }

    // Quick check to determine if target is callable, in the spec
    // this throws a TypeError, but we will just return undefined.
    if ( !jQuery.isFunction( fn ) ) {
      return undefined;
    }

    // Simulated bind
    args = core_slice.call( arguments, 2 );
    proxy = function() {
      return fn.apply( context, args.concat( core_slice.call( arguments ) ) );
    };

    // Set the guid of unique handler to the same of original handler, so it can be removed
    proxy.guid = fn.guid = fn.guid || jQuery.guid++;

    return proxy;
  },

  // Multifunctional method to get and set values of a collection
  // The value/s can optionally be executed if it's a function
  access: function( elems, fn, key, value, chainable, emptyGet, pass ) {
    var exec,
      bulk = key == null,
      i = 0,
      length = elems.length;

    // Sets many values
    if ( key && typeof key === "object" ) {
      for ( i in key ) {
        jQuery.access( elems, fn, i, key[i], 1, emptyGet, value );
      }
      chainable = 1;

    // Sets one value
    } else if ( value !== undefined ) {
      // Optionally, function values get executed if exec is true
      exec = pass === undefined && jQuery.isFunction( value );

      if ( bulk ) {
        // Bulk operations only iterate when executing function values
        if ( exec ) {
          exec = fn;
          fn = function( elem, key, value ) {
            return exec.call( jQuery( elem ), value );
          };

        // Otherwise they run against the entire set
        } else {
          fn.call( elems, value );
          fn = null;
        }
      }

      if ( fn ) {
        for (; i < length; i++ ) {
          fn( elems[i], key, exec ? value.call( elems[i], i, fn( elems[i], key ) ) : value, pass );
        }
      }

      chainable = 1;
    }

    return chainable ?
      elems :

      // Gets
      bulk ?
        fn.call( elems ) :
        length ? fn( elems[0], key ) : emptyGet;
  },

  now: function() {
    return ( new Date() ).getTime();
  }
});

jQuery.ready.promise = function( obj ) {
  if ( !readyList ) {

    readyList = jQuery.Deferred();

    // Catch cases where $(document).ready() is called after the browser event has already occurred.
    // we once tried to use readyState "interactive" here, but it caused issues like the one
    // discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
    if ( document.readyState === "complete" ) {
      // Handle it asynchronously to allow scripts the opportunity to delay ready
      setTimeout( jQuery.ready, 1 );

    // Standards-based browsers support DOMContentLoaded
    } else if ( document.addEventListener ) {
      // Use the handy event callback
      document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );

      // A fallback to window.onload, that will always work
      window.addEventListener( "load", jQuery.ready, false );

    // If IE event model is used
    } else {
      // Ensure firing before onload, maybe late but safe also for iframes
      document.attachEvent( "onreadystatechange", DOMContentLoaded );

      // A fallback to window.onload, that will always work
      window.attachEvent( "onload", jQuery.ready );

      // If IE and not a frame
      // continually check to see if the document is ready
      var top = false;

      try {
        top = window.frameElement == null && document.documentElement;
      } catch(e) {}

      if ( top && top.doScroll ) {
        (function doScrollCheck() {
          if ( !jQuery.isReady ) {

            try {
              // Use the trick by Diego Perini
              // http://javascript.nwbox.com/IEContentLoaded/
              top.doScroll("left");
            } catch(e) {
              return setTimeout( doScrollCheck, 50 );
            }

            // and execute any waiting functions
            jQuery.ready();
          }
        })();
      }
    }
  }
  return readyList.promise( obj );
};

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(i, name) {
  class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

// All jQuery objects should point back to these
rootjQuery = jQuery(document);
// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
  var object = optionsCache[ options ] = {};
  jQuery.each( options.split( core_rspace ), function( _, flag ) {
    object[ flag ] = true;
  });
  return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *  options: an optional list of space-separated options that will change how
 *      the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *  once:     will ensure the callback list can only be fired once (like a Deferred)
 *
 *  memory:     will keep track of previous values and will call any callback added
 *          after the list has been fired right away with the latest "memorized"
 *          values (like a Deferred)
 *
 *  unique:     will ensure a callback can only be added once (no duplicate in the list)
 *
 *  stopOnFalse:  interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

  // Convert options from String-formatted to Object-formatted if needed
  // (we check in cache first)
  options = typeof options === "string" ?
    ( optionsCache[ options ] || createOptions( options ) ) :
    jQuery.extend( {}, options );

  var // Last fire value (for non-forgettable lists)
    memory,
    // Flag to know if list was already fired
    fired,
    // Flag to know if list is currently firing
    firing,
    // First callback to fire (used internally by add and fireWith)
    firingStart,
    // End of the loop when firing
    firingLength,
    // Index of currently firing callback (modified by remove if needed)
    firingIndex,
    // Actual callback list
    list = [],
    // Stack of fire calls for repeatable lists
    stack = !options.once && [],
    // Fire callbacks
    fire = function( data ) {
      memory = options.memory && data;
      fired = true;
      firingIndex = firingStart || 0;
      firingStart = 0;
      firingLength = list.length;
      firing = true;
      for ( ; list && firingIndex < firingLength; firingIndex++ ) {
        if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
          memory = false; // To prevent further calls using add
          break;
        }
      }
      firing = false;
      if ( list ) {
        if ( stack ) {
          if ( stack.length ) {
            fire( stack.shift() );
          }
        } else if ( memory ) {
          list = [];
        } else {
          self.disable();
        }
      }
    },
    // Actual Callbacks object
    self = {
      // Add a callback or a collection of callbacks to the list
      add: function() {
        if ( list ) {
          // First, we save the current length
          var start = list.length;
          (function add( args ) {
            jQuery.each( args, function( _, arg ) {
              var type = jQuery.type( arg );
              if ( type === "function" ) {
                if ( !options.unique || !self.has( arg ) ) {
                  list.push( arg );
                }
              } else if ( arg && arg.length && type !== "string" ) {
                // Inspect recursively
                add( arg );
              }
            });
          })( arguments );
          // Do we need to add the callbacks to the
          // current firing batch?
          if ( firing ) {
            firingLength = list.length;
          // With memory, if we're not firing then
          // we should call right away
          } else if ( memory ) {
            firingStart = start;
            fire( memory );
          }
        }
        return this;
      },
      // Remove a callback from the list
      remove: function() {
        if ( list ) {
          jQuery.each( arguments, function( _, arg ) {
            var index;
            while( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
              list.splice( index, 1 );
              // Handle firing indexes
              if ( firing ) {
                if ( index <= firingLength ) {
                  firingLength--;
                }
                if ( index <= firingIndex ) {
                  firingIndex--;
                }
              }
            }
          });
        }
        return this;
      },
      // Control if a given callback is in the list
      has: function( fn ) {
        return jQuery.inArray( fn, list ) > -1;
      },
      // Remove all callbacks from the list
      empty: function() {
        list = [];
        return this;
      },
      // Have the list do nothing anymore
      disable: function() {
        list = stack = memory = undefined;
        return this;
      },
      // Is it disabled?
      disabled: function() {
        return !list;
      },
      // Lock the list in its current state
      lock: function() {
        stack = undefined;
        if ( !memory ) {
          self.disable();
        }
        return this;
      },
      // Is it locked?
      locked: function() {
        return !stack;
      },
      // Call all callbacks with the given context and arguments
      fireWith: function( context, args ) {
        args = args || [];
        args = [ context, args.slice ? args.slice() : args ];
        if ( list && ( !fired || stack ) ) {
          if ( firing ) {
            stack.push( args );
          } else {
            fire( args );
          }
        }
        return this;
      },
      // Call all the callbacks with the given arguments
      fire: function() {
        self.fireWith( this, arguments );
        return this;
      },
      // To know if the callbacks have already been called at least once
      fired: function() {
        return !!fired;
      }
    };

  return self;
};
jQuery.extend({

  Deferred: function( func ) {
    var tuples = [
        // action, add listener, listener list, final state
        [ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
        [ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
        [ "notify", "progress", jQuery.Callbacks("memory") ]
      ],
      state = "pending",
      promise = {
        state: function() {
          return state;
        },
        always: function() {
          deferred.done( arguments ).fail( arguments );
          return this;
        },
        then: function( /* fnDone, fnFail, fnProgress */ ) {
          var fns = arguments;
          return jQuery.Deferred(function( newDefer ) {
            jQuery.each( tuples, function( i, tuple ) {
              var action = tuple[ 0 ],
                fn = fns[ i ];
              // deferred[ done | fail | progress ] for forwarding actions to newDefer
              deferred[ tuple[1] ]( jQuery.isFunction( fn ) ?
                function() {
                  var returned = fn.apply( this, arguments );
                  if ( returned && jQuery.isFunction( returned.promise ) ) {
                    returned.promise()
                      .done( newDefer.resolve )
                      .fail( newDefer.reject )
                      .progress( newDefer.notify );
                  } else {
                    newDefer[ action + "With" ]( this === deferred ? newDefer : this, [ returned ] );
                  }
                } :
                newDefer[ action ]
              );
            });
            fns = null;
          }).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function( obj ) {
          return obj != null ? jQuery.extend( obj, promise ) : promise;
        }
      },
      deferred = {};

    // Keep pipe for back-compat
    promise.pipe = promise.then;

    // Add list-specific methods
    jQuery.each( tuples, function( i, tuple ) {
      var list = tuple[ 2 ],
        stateString = tuple[ 3 ];

      // promise[ done | fail | progress ] = list.add
      promise[ tuple[1] ] = list.add;

      // Handle state
      if ( stateString ) {
        list.add(function() {
          // state = [ resolved | rejected ]
          state = stateString;

        // [ reject_list | resolve_list ].disable; progress_list.lock
        }, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
      }

      // deferred[ resolve | reject | notify ] = list.fire
      deferred[ tuple[0] ] = list.fire;
      deferred[ tuple[0] + "With" ] = list.fireWith;
    });

    // Make the deferred a promise
    promise.promise( deferred );

    // Call given func if any
    if ( func ) {
      func.call( deferred, deferred );
    }

    // All done!
    return deferred;
  },

  // Deferred helper
  when: function( subordinate /* , ..., subordinateN */ ) {
    var i = 0,
      resolveValues = core_slice.call( arguments ),
      length = resolveValues.length,

      // the count of uncompleted subordinates
      remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

      // the master Deferred. If resolveValues consist of only a single Deferred, just use that.
      deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

      // Update function for both resolve and progress values
      updateFunc = function( i, contexts, values ) {
        return function( value ) {
          contexts[ i ] = this;
          values[ i ] = arguments.length > 1 ? core_slice.call( arguments ) : value;
          if( values === progressValues ) {
            deferred.notifyWith( contexts, values );
          } else if ( !( --remaining ) ) {
            deferred.resolveWith( contexts, values );
          }
        };
      },

      progressValues, progressContexts, resolveContexts;

    // add listeners to Deferred subordinates; treat others as resolved
    if ( length > 1 ) {
      progressValues = new Array( length );
      progressContexts = new Array( length );
      resolveContexts = new Array( length );
      for ( ; i < length; i++ ) {
        if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
          resolveValues[ i ].promise()
            .done( updateFunc( i, resolveContexts, resolveValues ) )
            .fail( deferred.reject )
            .progress( updateFunc( i, progressContexts, progressValues ) );
        } else {
          --remaining;
        }
      }
    }

    // if we're not waiting on anything, resolve the master
    if ( !remaining ) {
      deferred.resolveWith( resolveContexts, resolveValues );
    }

    return deferred.promise();
  }
});
jQuery.support = (function() {

  var support,
    all,
    a,
    select,
    opt,
    input,
    fragment,
    eventName,
    i,
    isSupported,
    clickFn,
    div = document.createElement("div");

  // Setup
  div.setAttribute( "className", "t" );
  div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

  // Support tests won't run in some limited or non-browser environments
  all = div.getElementsByTagName("*");
  a = div.getElementsByTagName("a")[ 0 ];
  if ( !all || !a || !all.length ) {
    return {};
  }

  // First batch of tests
  select = document.createElement("select");
  opt = select.appendChild( document.createElement("option") );
  input = div.getElementsByTagName("input")[ 0 ];

  a.style.cssText = "top:1px;float:left;opacity:.5";
  support = {
    // IE strips leading whitespace when .innerHTML is used
    leadingWhitespace: ( div.firstChild.nodeType === 3 ),

    // Make sure that tbody elements aren't automatically inserted
    // IE will insert them into empty tables
    tbody: !div.getElementsByTagName("tbody").length,

    // Make sure that link elements get serialized correctly by innerHTML
    // This requires a wrapper element in IE
    htmlSerialize: !!div.getElementsByTagName("link").length,

    // Get the style information from getAttribute
    // (IE uses .cssText instead)
    style: /top/.test( a.getAttribute("style") ),

    // Make sure that URLs aren't manipulated
    // (IE normalizes it by default)
    hrefNormalized: ( a.getAttribute("href") === "/a" ),

    // Make sure that element opacity exists
    // (IE uses filter instead)
    // Use a regex to work around a WebKit issue. See #5145
    opacity: /^0.5/.test( a.style.opacity ),

    // Verify style float existence
    // (IE uses styleFloat instead of cssFloat)
    cssFloat: !!a.style.cssFloat,

    // Make sure that if no value is specified for a checkbox
    // that it defaults to "on".
    // (WebKit defaults to "" instead)
    checkOn: ( input.value === "on" ),

    // Make sure that a selected-by-default option has a working selected property.
    // (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
    optSelected: opt.selected,

    // Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
    getSetAttribute: div.className !== "t",

    // Tests for enctype support on a form (#6743)
    enctype: !!document.createElement("form").enctype,

    // Makes sure cloning an html5 element does not cause problems
    // Where outerHTML is undefined, this still works
    html5Clone: document.createElement("nav").cloneNode( true ).outerHTML !== "<:nav></:nav>",

    // jQuery.support.boxModel DEPRECATED in 1.8 since we don't support Quirks Mode
    boxModel: ( document.compatMode === "CSS1Compat" ),

    // Will be defined later
    submitBubbles: true,
    changeBubbles: true,
    focusinBubbles: false,
    deleteExpando: true,
    noCloneEvent: true,
    inlineBlockNeedsLayout: false,
    shrinkWrapBlocks: false,
    reliableMarginRight: true,
    boxSizingReliable: true,
    pixelPosition: false
  };

  // Make sure checked status is properly cloned
  input.checked = true;
  support.noCloneChecked = input.cloneNode( true ).checked;

  // Make sure that the options inside disabled selects aren't marked as disabled
  // (WebKit marks them as disabled)
  select.disabled = true;
  support.optDisabled = !opt.disabled;

  // Test to see if it's possible to delete an expando from an element
  // Fails in Internet Explorer
  try {
    delete div.test;
  } catch( e ) {
    support.deleteExpando = false;
  }

  if ( !div.addEventListener && div.attachEvent && div.fireEvent ) {
    div.attachEvent( "onclick", clickFn = function() {
      // Cloning a node shouldn't copy over any
      // bound event handlers (IE does this)
      support.noCloneEvent = false;
    });
    div.cloneNode( true ).fireEvent("onclick");
    div.detachEvent( "onclick", clickFn );
  }

  // Check if a radio maintains its value
  // after being appended to the DOM
  input = document.createElement("input");
  input.value = "t";
  input.setAttribute( "type", "radio" );
  support.radioValue = input.value === "t";

  input.setAttribute( "checked", "checked" );

  // #11217 - WebKit loses check when the name is after the checked attribute
  input.setAttribute( "name", "t" );

  div.appendChild( input );
  fragment = document.createDocumentFragment();
  fragment.appendChild( div.lastChild );

  // WebKit doesn't clone checked state correctly in fragments
  support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;

  // Check if a disconnected checkbox will retain its checked
  // value of true after appended to the DOM (IE6/7)
  support.appendChecked = input.checked;

  fragment.removeChild( input );
  fragment.appendChild( div );

  // Technique from Juriy Zaytsev
  // http://perfectionkills.com/detecting-event-support-without-browser-sniffing/
  // We only care about the case where non-standard event systems
  // are used, namely in IE. Short-circuiting here helps us to
  // avoid an eval call (in setAttribute) which can cause CSP
  // to go haywire. See: https://developer.mozilla.org/en/Security/CSP
  if ( div.attachEvent ) {
    for ( i in {
      submit: true,
      change: true,
      focusin: true
    }) {
      eventName = "on" + i;
      isSupported = ( eventName in div );
      if ( !isSupported ) {
        div.setAttribute( eventName, "return;" );
        isSupported = ( typeof div[ eventName ] === "function" );
      }
      support[ i + "Bubbles" ] = isSupported;
    }
  }

  // Run tests that need a body at doc ready
  jQuery(function() {
    var container, div, tds, marginDiv,
      divReset = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
      body = document.getElementsByTagName("body")[0];

    if ( !body ) {
      // Return for frameset docs that don't have a body
      return;
    }

    container = document.createElement("div");
    container.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
    body.insertBefore( container, body.firstChild );

    // Construct the test element
    div = document.createElement("div");
    container.appendChild( div );

    // Check if table cells still have offsetWidth/Height when they are set
    // to display:none and there are still other visible table cells in a
    // table row; if so, offsetWidth/Height are not reliable for use when
    // determining if an element has been hidden directly using
    // display:none (it is still safe to use offsets if a parent element is
    // hidden; don safety goggles and see bug #4512 for more information).
    // (only IE 8 fails this test)
    div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
    tds = div.getElementsByTagName("td");
    tds[ 0 ].style.cssText = "padding:0;margin:0;border:0;display:none";
    isSupported = ( tds[ 0 ].offsetHeight === 0 );

    tds[ 0 ].style.display = "";
    tds[ 1 ].style.display = "none";

    // Check if empty table cells still have offsetWidth/Height
    // (IE <= 8 fail this test)
    support.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );

    // Check box-sizing and margin behavior
    div.innerHTML = "";
    div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
    support.boxSizing = ( div.offsetWidth === 4 );
    support.doesNotIncludeMarginInBodyOffset = ( body.offsetTop !== 1 );

    // NOTE: To any future maintainer, we've window.getComputedStyle
    // because jsdom on node.js will break without it.
    if ( window.getComputedStyle ) {
      support.pixelPosition = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
      support.boxSizingReliable = ( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

      // Check if div with explicit width and no margin-right incorrectly
      // gets computed margin-right based on width of container. For more
      // info see bug #3333
      // Fails in WebKit before Feb 2011 nightlies
      // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
      marginDiv = document.createElement("div");
      marginDiv.style.cssText = div.style.cssText = divReset;
      marginDiv.style.marginRight = marginDiv.style.width = "0";
      div.style.width = "1px";
      div.appendChild( marginDiv );
      support.reliableMarginRight =
        !parseFloat( ( window.getComputedStyle( marginDiv, null ) || {} ).marginRight );
    }

    if ( typeof div.style.zoom !== "undefined" ) {
      // Check if natively block-level elements act like inline-block
      // elements when setting their display to 'inline' and giving
      // them layout
      // (IE < 8 does this)
      div.innerHTML = "";
      div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
      support.inlineBlockNeedsLayout = ( div.offsetWidth === 3 );

      // Check if elements with layout shrink-wrap their children
      // (IE 6 does this)
      div.style.display = "block";
      div.style.overflow = "visible";
      div.innerHTML = "<div></div>";
      div.firstChild.style.width = "5px";
      support.shrinkWrapBlocks = ( div.offsetWidth !== 3 );

      container.style.zoom = 1;
    }

    // Null elements to avoid leaks in IE
    body.removeChild( container );
    container = div = tds = marginDiv = null;
  });

  // Null elements to avoid leaks in IE
  fragment.removeChild( div );
  all = a = select = opt = input = fragment = div = null;

  return support;
})();
var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
  rmultiDash = /([A-Z])/g;

jQuery.extend({
  cache: {},

  deletedIds: [],

  // Remove at next major release (1.9/2.0)
  uuid: 0,

  // Unique for each copy of jQuery on the page
  // Non-digits removed to match rinlinejQuery
  expando: "jQuery" + ( jQuery.fn.jquery + Math.random() ).replace( /\D/g, "" ),

  // The following elements throw uncatchable exceptions if you
  // attempt to add expando properties to them.
  noData: {
    "embed": true,
    // Ban all objects except for Flash (which handle expandos)
    "object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    "applet": true
  },

  hasData: function( elem ) {
    elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
    return !!elem && !isEmptyDataObject( elem );
  },

  data: function( elem, name, data, pvt /* Internal Use Only */ ) {
    if ( !jQuery.acceptData( elem ) ) {
      return;
    }

    var thisCache, ret,
      internalKey = jQuery.expando,
      getByName = typeof name === "string",

      // We have to handle DOM nodes and JS objects differently because IE6-7
      // can't GC object references properly across the DOM-JS boundary
      isNode = elem.nodeType,

      // Only DOM nodes need the global jQuery cache; JS object data is
      // attached directly to the object so GC can occur automatically
      cache = isNode ? jQuery.cache : elem,

      // Only defining an ID for JS objects if its cache already exists allows
      // the code to shortcut on the same path as a DOM node with no cache
      id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

    // Avoid doing any more work than we need to when trying to get data on an
    // object that has no data at all
    if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && getByName && data === undefined ) {
      return;
    }

    if ( !id ) {
      // Only DOM nodes need a new unique ID for each element since their data
      // ends up in the global cache
      if ( isNode ) {
        elem[ internalKey ] = id = jQuery.deletedIds.pop() || jQuery.guid++;
      } else {
        id = internalKey;
      }
    }

    if ( !cache[ id ] ) {
      cache[ id ] = {};

      // Avoids exposing jQuery metadata on plain JS objects when the object
      // is serialized using JSON.stringify
      if ( !isNode ) {
        cache[ id ].toJSON = jQuery.noop;
      }
    }

    // An object can be passed to jQuery.data instead of a key/value pair; this gets
    // shallow copied over onto the existing cache
    if ( typeof name === "object" || typeof name === "function" ) {
      if ( pvt ) {
        cache[ id ] = jQuery.extend( cache[ id ], name );
      } else {
        cache[ id ].data = jQuery.extend( cache[ id ].data, name );
      }
    }

    thisCache = cache[ id ];

    // jQuery data() is stored in a separate object inside the object's internal data
    // cache in order to avoid key collisions between internal data and user-defined
    // data.
    if ( !pvt ) {
      if ( !thisCache.data ) {
        thisCache.data = {};
      }

      thisCache = thisCache.data;
    }

    if ( data !== undefined ) {
      thisCache[ jQuery.camelCase( name ) ] = data;
    }

    // Check for both converted-to-camel and non-converted data property names
    // If a data property was specified
    if ( getByName ) {

      // First Try to find as-is property data
      ret = thisCache[ name ];

      // Test for null|undefined property data
      if ( ret == null ) {

        // Try to find the camelCased property
        ret = thisCache[ jQuery.camelCase( name ) ];
      }
    } else {
      ret = thisCache;
    }

    return ret;
  },

  removeData: function( elem, name, pvt /* Internal Use Only */ ) {
    if ( !jQuery.acceptData( elem ) ) {
      return;
    }

    var thisCache, i, l,

      isNode = elem.nodeType,

      // See jQuery.data for more information
      cache = isNode ? jQuery.cache : elem,
      id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

    // If there is already no cache entry for this object, there is no
    // purpose in continuing
    if ( !cache[ id ] ) {
      return;
    }

    if ( name ) {

      thisCache = pvt ? cache[ id ] : cache[ id ].data;

      if ( thisCache ) {

        // Support array or space separated string names for data keys
        if ( !jQuery.isArray( name ) ) {

          // try the string as a key before any manipulation
          if ( name in thisCache ) {
            name = [ name ];
          } else {

            // split the camel cased version by spaces unless a key with the spaces exists
            name = jQuery.camelCase( name );
            if ( name in thisCache ) {
              name = [ name ];
            } else {
              name = name.split(" ");
            }
          }
        }

        for ( i = 0, l = name.length; i < l; i++ ) {
          delete thisCache[ name[i] ];
        }

        // If there is no data left in the cache, we want to continue
        // and let the cache object itself get destroyed
        if ( !( pvt ? isEmptyDataObject : jQuery.isEmptyObject )( thisCache ) ) {
          return;
        }
      }
    }

    // See jQuery.data for more information
    if ( !pvt ) {
      delete cache[ id ].data;

      // Don't destroy the parent cache unless the internal data object
      // had been the only thing left in it
      if ( !isEmptyDataObject( cache[ id ] ) ) {
        return;
      }
    }

    // Destroy the cache
    if ( isNode ) {
      jQuery.cleanData( [ elem ], true );

    // Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
    } else if ( jQuery.support.deleteExpando || cache != cache.window ) {
      delete cache[ id ];

    // When all else fails, null
    } else {
      cache[ id ] = null;
    }
  },

  // For internal use only.
  _data: function( elem, name, data ) {
    return jQuery.data( elem, name, data, true );
  },

  // A method for determining if a DOM node can handle the data expando
  acceptData: function( elem ) {
    var noData = elem.nodeName && jQuery.noData[ elem.nodeName.toLowerCase() ];

    // nodes accept data unless otherwise specified; rejection can be conditional
    return !noData || noData !== true && elem.getAttribute("classid") === noData;
  }
});

jQuery.fn.extend({
  data: function( key, value ) {
    var parts, part, attr, name, l,
      elem = this[0],
      i = 0,
      data = null;

    // Gets all values
    if ( key === undefined ) {
      if ( this.length ) {
        data = jQuery.data( elem );

        if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
          attr = elem.attributes;
          for ( l = attr.length; i < l; i++ ) {
            name = attr[i].name;

            if ( !name.indexOf( "data-" ) ) {
              name = jQuery.camelCase( name.substring(5) );

              dataAttr( elem, name, data[ name ] );
            }
          }
          jQuery._data( elem, "parsedAttrs", true );
        }
      }

      return data;
    }

    // Sets multiple values
    if ( typeof key === "object" ) {
      return this.each(function() {
        jQuery.data( this, key );
      });
    }

    parts = key.split( ".", 2 );
    parts[1] = parts[1] ? "." + parts[1] : "";
    part = parts[1] + "!";

    return jQuery.access( this, function( value ) {

      if ( value === undefined ) {
        data = this.triggerHandler( "getData" + part, [ parts[0] ] );

        // Try to fetch any internally stored data first
        if ( data === undefined && elem ) {
          data = jQuery.data( elem, key );
          data = dataAttr( elem, key, data );
        }

        return data === undefined && parts[1] ?
          this.data( parts[0] ) :
          data;
      }

      parts[1] = value;
      this.each(function() {
        var self = jQuery( this );

        self.triggerHandler( "setData" + part, parts );
        jQuery.data( this, key, value );
        self.triggerHandler( "changeData" + part, parts );
      });
    }, null, value, arguments.length > 1, null, false );
  },

  removeData: function( key ) {
    return this.each(function() {
      jQuery.removeData( this, key );
    });
  }
});

function dataAttr( elem, key, data ) {
  // If nothing was found internally, try to fetch any
  // data from the HTML5 data-* attribute
  if ( data === undefined && elem.nodeType === 1 ) {

    var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

    data = elem.getAttribute( name );

    if ( typeof data === "string" ) {
      try {
        data = data === "true" ? true :
        data === "false" ? false :
        data === "null" ? null :
        // Only convert to a number if it doesn't change the string
        +data + "" === data ? +data :
        rbrace.test( data ) ? jQuery.parseJSON( data ) :
          data;
      } catch( e ) {}

      // Make sure we set the data so it isn't changed later
      jQuery.data( elem, key, data );

    } else {
      data = undefined;
    }
  }

  return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
  var name;
  for ( name in obj ) {

    // if the public data object is empty, the private is still empty
    if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
      continue;
    }
    if ( name !== "toJSON" ) {
      return false;
    }
  }

  return true;
}
jQuery.extend({
  queue: function( elem, type, data ) {
    var queue;

    if ( elem ) {
      type = ( type || "fx" ) + "queue";
      queue = jQuery._data( elem, type );

      // Speed up dequeue by getting out quickly if this is just a lookup
      if ( data ) {
        if ( !queue || jQuery.isArray(data) ) {
          queue = jQuery._data( elem, type, jQuery.makeArray(data) );
        } else {
          queue.push( data );
        }
      }
      return queue || [];
    }
  },

  dequeue: function( elem, type ) {
    type = type || "fx";

    var queue = jQuery.queue( elem, type ),
      startLength = queue.length,
      fn = queue.shift(),
      hooks = jQuery._queueHooks( elem, type ),
      next = function() {
        jQuery.dequeue( elem, type );
      };

    // If the fx queue is dequeued, always remove the progress sentinel
    if ( fn === "inprogress" ) {
      fn = queue.shift();
      startLength--;
    }

    if ( fn ) {

      // Add a progress sentinel to prevent the fx queue from being
      // automatically dequeued
      if ( type === "fx" ) {
        queue.unshift( "inprogress" );
      }

      // clear up the last queue stop function
      delete hooks.stop;
      fn.call( elem, next, hooks );
    }

    if ( !startLength && hooks ) {
      hooks.empty.fire();
    }
  },

  // not intended for public consumption - generates a queueHooks object, or returns the current one
  _queueHooks: function( elem, type ) {
    var key = type + "queueHooks";
    return jQuery._data( elem, key ) || jQuery._data( elem, key, {
      empty: jQuery.Callbacks("once memory").add(function() {
        jQuery.removeData( elem, type + "queue", true );
        jQuery.removeData( elem, key, true );
      })
    });
  }
});

jQuery.fn.extend({
  queue: function( type, data ) {
    var setter = 2;

    if ( typeof type !== "string" ) {
      data = type;
      type = "fx";
      setter--;
    }

    if ( arguments.length < setter ) {
      return jQuery.queue( this[0], type );
    }

    return data === undefined ?
      this :
      this.each(function() {
        var queue = jQuery.queue( this, type, data );

        // ensure a hooks for this queue
        jQuery._queueHooks( this, type );

        if ( type === "fx" && queue[0] !== "inprogress" ) {
          jQuery.dequeue( this, type );
        }
      });
  },
  dequeue: function( type ) {
    return this.each(function() {
      jQuery.dequeue( this, type );
    });
  },
  // Based off of the plugin by Clint Helfers, with permission.
  // http://blindsignals.com/index.php/2009/07/jquery-delay/
  delay: function( time, type ) {
    time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
    type = type || "fx";

    return this.queue( type, function( next, hooks ) {
      var timeout = setTimeout( next, time );
      hooks.stop = function() {
        clearTimeout( timeout );
      };
    });
  },
  clearQueue: function( type ) {
    return this.queue( type || "fx", [] );
  },
  // Get a promise resolved when queues of a certain type
  // are emptied (fx is the type by default)
  promise: function( type, obj ) {
    var tmp,
      count = 1,
      defer = jQuery.Deferred(),
      elements = this,
      i = this.length,
      resolve = function() {
        if ( !( --count ) ) {
          defer.resolveWith( elements, [ elements ] );
        }
      };

    if ( typeof type !== "string" ) {
      obj = type;
      type = undefined;
    }
    type = type || "fx";

    while( i-- ) {
      tmp = jQuery._data( elements[ i ], type + "queueHooks" );
      if ( tmp && tmp.empty ) {
        count++;
        tmp.empty.add( resolve );
      }
    }
    resolve();
    return defer.promise( obj );
  }
});
var nodeHook, boolHook, fixSpecified,
  rclass = /[\t\r\n]/g,
  rreturn = /\r/g,
  rtype = /^(?:button|input)$/i,
  rfocusable = /^(?:button|input|object|select|textarea)$/i,
  rclickable = /^a(?:rea|)$/i,
  rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
  getSetAttribute = jQuery.support.getSetAttribute;

jQuery.fn.extend({
  attr: function( name, value ) {
    return jQuery.access( this, jQuery.attr, name, value, arguments.length > 1 );
  },

  removeAttr: function( name ) {
    return this.each(function() {
      jQuery.removeAttr( this, name );
    });
  },

  prop: function( name, value ) {
    return jQuery.access( this, jQuery.prop, name, value, arguments.length > 1 );
  },

  removeProp: function( name ) {
    name = jQuery.propFix[ name ] || name;
    return this.each(function() {
      // try/catch handles cases where IE balks (such as removing a property on window)
      try {
        this[ name ] = undefined;
        delete this[ name ];
      } catch( e ) {}
    });
  },

  addClass: function( value ) {
    var classNames, i, l, elem,
      setClass, c, cl;

    if ( jQuery.isFunction( value ) ) {
      return this.each(function( j ) {
        jQuery( this ).addClass( value.call(this, j, this.className) );
      });
    }

    if ( value && typeof value === "string" ) {
      classNames = value.split( core_rspace );

      for ( i = 0, l = this.length; i < l; i++ ) {
        elem = this[ i ];

        if ( elem.nodeType === 1 ) {
          if ( !elem.className && classNames.length === 1 ) {
            elem.className = value;

          } else {
            setClass = " " + elem.className + " ";

            for ( c = 0, cl = classNames.length; c < cl; c++ ) {
              if ( setClass.indexOf( " " + classNames[ c ] + " " ) < 0 ) {
                setClass += classNames[ c ] + " ";
              }
            }
            elem.className = jQuery.trim( setClass );
          }
        }
      }
    }

    return this;
  },

  removeClass: function( value ) {
    var removes, className, elem, c, cl, i, l;

    if ( jQuery.isFunction( value ) ) {
      return this.each(function( j ) {
        jQuery( this ).removeClass( value.call(this, j, this.className) );
      });
    }
    if ( (value && typeof value === "string") || value === undefined ) {
      removes = ( value || "" ).split( core_rspace );

      for ( i = 0, l = this.length; i < l; i++ ) {
        elem = this[ i ];
        if ( elem.nodeType === 1 && elem.className ) {

          className = (" " + elem.className + " ").replace( rclass, " " );

          // loop over each item in the removal list
          for ( c = 0, cl = removes.length; c < cl; c++ ) {
            // Remove until there is nothing to remove,
            while ( className.indexOf(" " + removes[ c ] + " ") >= 0 ) {
              className = className.replace( " " + removes[ c ] + " " , " " );
            }
          }
          elem.className = value ? jQuery.trim( className ) : "";
        }
      }
    }

    return this;
  },

  toggleClass: function( value, stateVal ) {
    var type = typeof value,
      isBool = typeof stateVal === "boolean";

    if ( jQuery.isFunction( value ) ) {
      return this.each(function( i ) {
        jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
      });
    }

    return this.each(function() {
      if ( type === "string" ) {
        // toggle individual class names
        var className,
          i = 0,
          self = jQuery( this ),
          state = stateVal,
          classNames = value.split( core_rspace );

        while ( (className = classNames[ i++ ]) ) {
          // check each className given, space separated list
          state = isBool ? state : !self.hasClass( className );
          self[ state ? "addClass" : "removeClass" ]( className );
        }

      } else if ( type === "undefined" || type === "boolean" ) {
        if ( this.className ) {
          // store className if set
          jQuery._data( this, "__className__", this.className );
        }

        // toggle whole className
        this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
      }
    });
  },

  hasClass: function( selector ) {
    var className = " " + selector + " ",
      i = 0,
      l = this.length;
    for ( ; i < l; i++ ) {
      if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
        return true;
      }
    }

    return false;
  },

  val: function( value ) {
    var hooks, ret, isFunction,
      elem = this[0];

    if ( !arguments.length ) {
      if ( elem ) {
        hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

        if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
          return ret;
        }

        ret = elem.value;

        return typeof ret === "string" ?
          // handle most common string cases
          ret.replace(rreturn, "") :
          // handle cases where value is null/undef or number
          ret == null ? "" : ret;
      }

      return;
    }

    isFunction = jQuery.isFunction( value );

    return this.each(function( i ) {
      var val,
        self = jQuery(this);

      if ( this.nodeType !== 1 ) {
        return;
      }

      if ( isFunction ) {
        val = value.call( this, i, self.val() );
      } else {
        val = value;
      }

      // Treat null/undefined as ""; convert numbers to string
      if ( val == null ) {
        val = "";
      } else if ( typeof val === "number" ) {
        val += "";
      } else if ( jQuery.isArray( val ) ) {
        val = jQuery.map(val, function ( value ) {
          return value == null ? "" : value + "";
        });
      }

      hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

      // If set returns undefined, fall back to normal setting
      if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
        this.value = val;
      }
    });
  }
});

jQuery.extend({
  valHooks: {
    option: {
      get: function( elem ) {
        // attributes.value is undefined in Blackberry 4.7 but
        // uses .value. See #6932
        var val = elem.attributes.value;
        return !val || val.specified ? elem.value : elem.text;
      }
    },
    select: {
      get: function( elem ) {
        var value, option,
          options = elem.options,
          index = elem.selectedIndex,
          one = elem.type === "select-one" || index < 0,
          values = one ? null : [],
          max = one ? index + 1 : options.length,
          i = index < 0 ?
            max :
            one ? index : 0;

        // Loop through all the selected options
        for ( ; i < max; i++ ) {
          option = options[ i ];

          // oldIE doesn't update selected after form reset (#2551)
          if ( ( option.selected || i === index ) &&
              // Don't return options that are disabled or in a disabled optgroup
              ( jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
              ( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

            // Get the specific value for the option
            value = jQuery( option ).val();

            // We don't need an array for one selects
            if ( one ) {
              return value;
            }

            // Multi-Selects return an array
            values.push( value );
          }
        }

        return values;
      },

      set: function( elem, value ) {
        var values = jQuery.makeArray( value );

        jQuery(elem).find("option").each(function() {
          this.selected = jQuery.inArray( jQuery(this).val(), values ) >= 0;
        });

        if ( !values.length ) {
          elem.selectedIndex = -1;
        }
        return values;
      }
    }
  },

  // Unused in 1.8, left in so attrFn-stabbers won't die; remove in 1.9
  attrFn: {},

  attr: function( elem, name, value, pass ) {
    var ret, hooks, notxml,
      nType = elem.nodeType;

    // don't get/set attributes on text, comment and attribute nodes
    if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
      return;
    }

    if ( pass && jQuery.isFunction( jQuery.fn[ name ] ) ) {
      return jQuery( elem )[ name ]( value );
    }

    // Fallback to prop when attributes are not supported
    if ( typeof elem.getAttribute === "undefined" ) {
      return jQuery.prop( elem, name, value );
    }

    notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

    // All attributes are lowercase
    // Grab necessary hook if one is defined
    if ( notxml ) {
      name = name.toLowerCase();
      hooks = jQuery.attrHooks[ name ] || ( rboolean.test( name ) ? boolHook : nodeHook );
    }

    if ( value !== undefined ) {

      if ( value === null ) {
        jQuery.removeAttr( elem, name );
        return;

      } else if ( hooks && "set" in hooks && notxml && (ret = hooks.set( elem, value, name )) !== undefined ) {
        return ret;

      } else {
        elem.setAttribute( name, value + "" );
        return value;
      }

    } else if ( hooks && "get" in hooks && notxml && (ret = hooks.get( elem, name )) !== null ) {
      return ret;

    } else {

      ret = elem.getAttribute( name );

      // Non-existent attributes return null, we normalize to undefined
      return ret === null ?
        undefined :
        ret;
    }
  },

  removeAttr: function( elem, value ) {
    var propName, attrNames, name, isBool,
      i = 0;

    if ( value && elem.nodeType === 1 ) {

      attrNames = value.split( core_rspace );

      for ( ; i < attrNames.length; i++ ) {
        name = attrNames[ i ];

        if ( name ) {
          propName = jQuery.propFix[ name ] || name;
          isBool = rboolean.test( name );

          // See #9699 for explanation of this approach (setting first, then removal)
          // Do not do this for boolean attributes (see #10870)
          if ( !isBool ) {
            jQuery.attr( elem, name, "" );
          }
          elem.removeAttribute( getSetAttribute ? name : propName );

          // Set corresponding property to false for boolean attributes
          if ( isBool && propName in elem ) {
            elem[ propName ] = false;
          }
        }
      }
    }
  },

  attrHooks: {
    type: {
      set: function( elem, value ) {
        // We can't allow the type property to be changed (since it causes problems in IE)
        if ( rtype.test( elem.nodeName ) && elem.parentNode ) {
          jQuery.error( "type property can't be changed" );
        } else if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
          // Setting the type on a radio button after the value resets the value in IE6-9
          // Reset value to it's default in case type is set after value
          // This is for element creation
          var val = elem.value;
          elem.setAttribute( "type", value );
          if ( val ) {
            elem.value = val;
          }
          return value;
        }
      }
    },
    // Use the value property for back compat
    // Use the nodeHook for button elements in IE6/7 (#1954)
    value: {
      get: function( elem, name ) {
        if ( nodeHook && jQuery.nodeName( elem, "button" ) ) {
          return nodeHook.get( elem, name );
        }
        return name in elem ?
          elem.value :
          null;
      },
      set: function( elem, value, name ) {
        if ( nodeHook && jQuery.nodeName( elem, "button" ) ) {
          return nodeHook.set( elem, value, name );
        }
        // Does not return so that setAttribute is also used
        elem.value = value;
      }
    }
  },

  propFix: {
    tabindex: "tabIndex",
    readonly: "readOnly",
    "for": "htmlFor",
    "class": "className",
    maxlength: "maxLength",
    cellspacing: "cellSpacing",
    cellpadding: "cellPadding",
    rowspan: "rowSpan",
    colspan: "colSpan",
    usemap: "useMap",
    frameborder: "frameBorder",
    contenteditable: "contentEditable"
  },

  prop: function( elem, name, value ) {
    var ret, hooks, notxml,
      nType = elem.nodeType;

    // don't get/set properties on text, comment and attribute nodes
    if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
      return;
    }

    notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

    if ( notxml ) {
      // Fix name and attach hooks
      name = jQuery.propFix[ name ] || name;
      hooks = jQuery.propHooks[ name ];
    }

    if ( value !== undefined ) {
      if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
        return ret;

      } else {
        return ( elem[ name ] = value );
      }

    } else {
      if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
        return ret;

      } else {
        return elem[ name ];
      }
    }
  },

  propHooks: {
    tabIndex: {
      get: function( elem ) {
        // elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
        // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
        var attributeNode = elem.getAttributeNode("tabindex");

        return attributeNode && attributeNode.specified ?
          parseInt( attributeNode.value, 10 ) :
          rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
            0 :
            undefined;
      }
    }
  }
});

// Hook for boolean attributes
boolHook = {
  get: function( elem, name ) {
    // Align boolean attributes with corresponding properties
    // Fall back to attribute presence where some booleans are not supported
    var attrNode,
      property = jQuery.prop( elem, name );
    return property === true || typeof property !== "boolean" && ( attrNode = elem.getAttributeNode(name) ) && attrNode.nodeValue !== false ?
      name.toLowerCase() :
      undefined;
  },
  set: function( elem, value, name ) {
    var propName;
    if ( value === false ) {
      // Remove boolean attributes when set to false
      jQuery.removeAttr( elem, name );
    } else {
      // value is true since we know at this point it's type boolean and not false
      // Set boolean attributes to the same name and set the DOM property
      propName = jQuery.propFix[ name ] || name;
      if ( propName in elem ) {
        // Only set the IDL specifically if it already exists on the element
        elem[ propName ] = true;
      }

      elem.setAttribute( name, name.toLowerCase() );
    }
    return name;
  }
};

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

  fixSpecified = {
    name: true,
    id: true,
    coords: true
  };

  // Use this for any attribute in IE6/7
  // This fixes almost every IE6/7 issue
  nodeHook = jQuery.valHooks.button = {
    get: function( elem, name ) {
      var ret;
      ret = elem.getAttributeNode( name );
      return ret && ( fixSpecified[ name ] ? ret.value !== "" : ret.specified ) ?
        ret.value :
        undefined;
    },
    set: function( elem, value, name ) {
      // Set the existing or create a new attribute node
      var ret = elem.getAttributeNode( name );
      if ( !ret ) {
        ret = document.createAttribute( name );
        elem.setAttributeNode( ret );
      }
      return ( ret.value = value + "" );
    }
  };

  // Set width and height to auto instead of 0 on empty string( Bug #8150 )
  // This is for removals
  jQuery.each([ "width", "height" ], function( i, name ) {
    jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
      set: function( elem, value ) {
        if ( value === "" ) {
          elem.setAttribute( name, "auto" );
          return value;
        }
      }
    });
  });

  // Set contenteditable to false on removals(#10429)
  // Setting to empty string throws an error as an invalid value
  jQuery.attrHooks.contenteditable = {
    get: nodeHook.get,
    set: function( elem, value, name ) {
      if ( value === "" ) {
        value = "false";
      }
      nodeHook.set( elem, value, name );
    }
  };
}


// Some attributes require a special call on IE
if ( !jQuery.support.hrefNormalized ) {
  jQuery.each([ "href", "src", "width", "height" ], function( i, name ) {
    jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
      get: function( elem ) {
        var ret = elem.getAttribute( name, 2 );
        return ret === null ? undefined : ret;
      }
    });
  });
}

if ( !jQuery.support.style ) {
  jQuery.attrHooks.style = {
    get: function( elem ) {
      // Return undefined in the case of empty string
      // Normalize to lowercase since IE uppercases css property names
      return elem.style.cssText.toLowerCase() || undefined;
    },
    set: function( elem, value ) {
      return ( elem.style.cssText = value + "" );
    }
  };
}

// Safari mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
if ( !jQuery.support.optSelected ) {
  jQuery.propHooks.selected = jQuery.extend( jQuery.propHooks.selected, {
    get: function( elem ) {
      var parent = elem.parentNode;

      if ( parent ) {
        parent.selectedIndex;

        // Make sure that it also works with optgroups, see #5701
        if ( parent.parentNode ) {
          parent.parentNode.selectedIndex;
        }
      }
      return null;
    }
  });
}

// IE6/7 call enctype encoding
if ( !jQuery.support.enctype ) {
  jQuery.propFix.enctype = "encoding";
}

// Radios and checkboxes getter/setter
if ( !jQuery.support.checkOn ) {
  jQuery.each([ "radio", "checkbox" ], function() {
    jQuery.valHooks[ this ] = {
      get: function( elem ) {
        // Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
        return elem.getAttribute("value") === null ? "on" : elem.value;
      }
    };
  });
}
jQuery.each([ "radio", "checkbox" ], function() {
  jQuery.valHooks[ this ] = jQuery.extend( jQuery.valHooks[ this ], {
    set: function( elem, value ) {
      if ( jQuery.isArray( value ) ) {
        return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
      }
    }
  });
});
var rformElems = /^(?:textarea|input|select)$/i,
  rtypenamespace = /^([^\.]*|)(?:\.(.+)|)$/,
  rhoverHack = /(?:^|\s)hover(\.\S+|)\b/,
  rkeyEvent = /^key/,
  rmouseEvent = /^(?:mouse|contextmenu)|click/,
  rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
  hoverHack = function( events ) {
    return jQuery.event.special.hover ? events : events.replace( rhoverHack, "mouseenter$1 mouseleave$1" );
  };

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

  add: function( elem, types, handler, data, selector ) {

    var elemData, eventHandle, events,
      t, tns, type, namespaces, handleObj,
      handleObjIn, handlers, special;

    // Don't attach events to noData or text/comment nodes (allow plain objects tho)
    if ( elem.nodeType === 3 || elem.nodeType === 8 || !types || !handler || !(elemData = jQuery._data( elem )) ) {
      return;
    }

    // Caller can pass in an object of custom data in lieu of the handler
    if ( handler.handler ) {
      handleObjIn = handler;
      handler = handleObjIn.handler;
      selector = handleObjIn.selector;
    }

    // Make sure that the handler has a unique ID, used to find/remove it later
    if ( !handler.guid ) {
      handler.guid = jQuery.guid++;
    }

    // Init the element's event structure and main handler, if this is the first
    events = elemData.events;
    if ( !events ) {
      elemData.events = events = {};
    }
    eventHandle = elemData.handle;
    if ( !eventHandle ) {
      elemData.handle = eventHandle = function( e ) {
        // Discard the second event of a jQuery.event.trigger() and
        // when an event is called after a page has unloaded
        return typeof jQuery !== "undefined" && (!e || jQuery.event.triggered !== e.type) ?
          jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
          undefined;
      };
      // Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
      eventHandle.elem = elem;
    }

    // Handle multiple events separated by a space
    // jQuery(...).bind("mouseover mouseout", fn);
    types = jQuery.trim( hoverHack(types) ).split( " " );
    for ( t = 0; t < types.length; t++ ) {

      tns = rtypenamespace.exec( types[t] ) || [];
      type = tns[1];
      namespaces = ( tns[2] || "" ).split( "." ).sort();

      // If event changes its type, use the special event handlers for the changed type
      special = jQuery.event.special[ type ] || {};

      // If selector defined, determine special event api type, otherwise given type
      type = ( selector ? special.delegateType : special.bindType ) || type;

      // Update special based on newly reset type
      special = jQuery.event.special[ type ] || {};

      // handleObj is passed to all event handlers
      handleObj = jQuery.extend({
        type: type,
        origType: tns[1],
        data: data,
        handler: handler,
        guid: handler.guid,
        selector: selector,
        needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
        namespace: namespaces.join(".")
      }, handleObjIn );

      // Init the event handler queue if we're the first
      handlers = events[ type ];
      if ( !handlers ) {
        handlers = events[ type ] = [];
        handlers.delegateCount = 0;

        // Only use addEventListener/attachEvent if the special events handler returns false
        if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
          // Bind the global event handler to the element
          if ( elem.addEventListener ) {
            elem.addEventListener( type, eventHandle, false );

          } else if ( elem.attachEvent ) {
            elem.attachEvent( "on" + type, eventHandle );
          }
        }
      }

      if ( special.add ) {
        special.add.call( elem, handleObj );

        if ( !handleObj.handler.guid ) {
          handleObj.handler.guid = handler.guid;
        }
      }

      // Add to the element's handler list, delegates in front
      if ( selector ) {
        handlers.splice( handlers.delegateCount++, 0, handleObj );
      } else {
        handlers.push( handleObj );
      }

      // Keep track of which events have ever been used, for event optimization
      jQuery.event.global[ type ] = true;
    }

    // Nullify elem to prevent memory leaks in IE
    elem = null;
  },

  global: {},

  // Detach an event or set of events from an element
  remove: function( elem, types, handler, selector, mappedTypes ) {

    var t, tns, type, origType, namespaces, origCount,
      j, events, special, eventType, handleObj,
      elemData = jQuery.hasData( elem ) && jQuery._data( elem );

    if ( !elemData || !(events = elemData.events) ) {
      return;
    }

    // Once for each type.namespace in types; type may be omitted
    types = jQuery.trim( hoverHack( types || "" ) ).split(" ");
    for ( t = 0; t < types.length; t++ ) {
      tns = rtypenamespace.exec( types[t] ) || [];
      type = origType = tns[1];
      namespaces = tns[2];

      // Unbind all events (on this namespace, if provided) for the element
      if ( !type ) {
        for ( type in events ) {
          jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
        }
        continue;
      }

      special = jQuery.event.special[ type ] || {};
      type = ( selector? special.delegateType : special.bindType ) || type;
      eventType = events[ type ] || [];
      origCount = eventType.length;
      namespaces = namespaces ? new RegExp("(^|\\.)" + namespaces.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

      // Remove matching events
      for ( j = 0; j < eventType.length; j++ ) {
        handleObj = eventType[ j ];

        if ( ( mappedTypes || origType === handleObj.origType ) &&
           ( !handler || handler.guid === handleObj.guid ) &&
           ( !namespaces || namespaces.test( handleObj.namespace ) ) &&
           ( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
          eventType.splice( j--, 1 );

          if ( handleObj.selector ) {
            eventType.delegateCount--;
          }
          if ( special.remove ) {
            special.remove.call( elem, handleObj );
          }
        }
      }

      // Remove generic event handler if we removed something and no more handlers exist
      // (avoids potential for endless recursion during removal of special event handlers)
      if ( eventType.length === 0 && origCount !== eventType.length ) {
        if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
          jQuery.removeEvent( elem, type, elemData.handle );
        }

        delete events[ type ];
      }
    }

    // Remove the expando if it's no longer used
    if ( jQuery.isEmptyObject( events ) ) {
      delete elemData.handle;

      // removeData also checks for emptiness and clears the expando if empty
      // so use it instead of delete
      jQuery.removeData( elem, "events", true );
    }
  },

  // Events that are safe to short-circuit if no handlers are attached.
  // Native DOM events should not be added, they may have inline handlers.
  customEvent: {
    "getData": true,
    "setData": true,
    "changeData": true
  },

  trigger: function( event, data, elem, onlyHandlers ) {
    // Don't do events on text and comment nodes
    if ( elem && (elem.nodeType === 3 || elem.nodeType === 8) ) {
      return;
    }

    // Event object or event type
    var cache, exclusive, i, cur, old, ontype, special, handle, eventPath, bubbleType,
      type = event.type || event,
      namespaces = [];

    // focus/blur morphs to focusin/out; ensure we're not firing them right now
    if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
      return;
    }

    if ( type.indexOf( "!" ) >= 0 ) {
      // Exclusive events trigger only for the exact event (no namespaces)
      type = type.slice(0, -1);
      exclusive = true;
    }

    if ( type.indexOf( "." ) >= 0 ) {
      // Namespaced trigger; create a regexp to match event type in handle()
      namespaces = type.split(".");
      type = namespaces.shift();
      namespaces.sort();
    }

    if ( (!elem || jQuery.event.customEvent[ type ]) && !jQuery.event.global[ type ] ) {
      // No jQuery handlers for this event type, and it can't have inline handlers
      return;
    }

    // Caller can pass in an Event, Object, or just an event type string
    event = typeof event === "object" ?
      // jQuery.Event object
      event[ jQuery.expando ] ? event :
      // Object literal
      new jQuery.Event( type, event ) :
      // Just the event type (string)
      new jQuery.Event( type );

    event.type = type;
    event.isTrigger = true;
    event.exclusive = exclusive;
    event.namespace = namespaces.join( "." );
    event.namespace_re = event.namespace? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
    ontype = type.indexOf( ":" ) < 0 ? "on" + type : "";

    // Handle a global trigger
    if ( !elem ) {

      // TODO: Stop taunting the data cache; remove global events and always attach to document
      cache = jQuery.cache;
      for ( i in cache ) {
        if ( cache[ i ].events && cache[ i ].events[ type ] ) {
          jQuery.event.trigger( event, data, cache[ i ].handle.elem, true );
        }
      }
      return;
    }

    // Clean up the event in case it is being reused
    event.result = undefined;
    if ( !event.target ) {
      event.target = elem;
    }

    // Clone any incoming data and prepend the event, creating the handler arg list
    data = data != null ? jQuery.makeArray( data ) : [];
    data.unshift( event );

    // Allow special events to draw outside the lines
    special = jQuery.event.special[ type ] || {};
    if ( special.trigger && special.trigger.apply( elem, data ) === false ) {
      return;
    }

    // Determine event propagation path in advance, per W3C events spec (#9951)
    // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
    eventPath = [[ elem, special.bindType || type ]];
    if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

      bubbleType = special.delegateType || type;
      cur = rfocusMorph.test( bubbleType + type ) ? elem : elem.parentNode;
      for ( old = elem; cur; cur = cur.parentNode ) {
        eventPath.push([ cur, bubbleType ]);
        old = cur;
      }

      // Only add window if we got to document (e.g., not plain obj or detached DOM)
      if ( old === (elem.ownerDocument || document) ) {
        eventPath.push([ old.defaultView || old.parentWindow || window, bubbleType ]);
      }
    }

    // Fire handlers on the event path
    for ( i = 0; i < eventPath.length && !event.isPropagationStopped(); i++ ) {

      cur = eventPath[i][0];
      event.type = eventPath[i][1];

      handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
      if ( handle ) {
        handle.apply( cur, data );
      }
      // Note that this is a bare JS function and not a jQuery handler
      handle = ontype && cur[ ontype ];
      if ( handle && jQuery.acceptData( cur ) && handle.apply && handle.apply( cur, data ) === false ) {
        event.preventDefault();
      }
    }
    event.type = type;

    // If nobody prevented the default action, do it now
    if ( !onlyHandlers && !event.isDefaultPrevented() ) {

      if ( (!special._default || special._default.apply( elem.ownerDocument, data ) === false) &&
        !(type === "click" && jQuery.nodeName( elem, "a" )) && jQuery.acceptData( elem ) ) {

        // Call a native DOM method on the target with the same name name as the event.
        // Can't use an .isFunction() check here because IE6/7 fails that test.
        // Don't do default actions on window, that's where global variables be (#6170)
        // IE<9 dies on focus/blur to hidden element (#1486)
        if ( ontype && elem[ type ] && ((type !== "focus" && type !== "blur") || event.target.offsetWidth !== 0) && !jQuery.isWindow( elem ) ) {

          // Don't re-trigger an onFOO event when we call its FOO() method
          old = elem[ ontype ];

          if ( old ) {
            elem[ ontype ] = null;
          }

          // Prevent re-triggering of the same event, since we already bubbled it above
          jQuery.event.triggered = type;
          elem[ type ]();
          jQuery.event.triggered = undefined;

          if ( old ) {
            elem[ ontype ] = old;
          }
        }
      }
    }

    return event.result;
  },

  dispatch: function( event ) {

    // Make a writable jQuery.Event from the native event object
    event = jQuery.event.fix( event || window.event );

    var i, j, cur, ret, selMatch, matched, matches, handleObj, sel, related,
      handlers = ( (jQuery._data( this, "events" ) || {} )[ event.type ] || []),
      delegateCount = handlers.delegateCount,
      args = core_slice.call( arguments ),
      run_all = !event.exclusive && !event.namespace,
      special = jQuery.event.special[ event.type ] || {},
      handlerQueue = [];

    // Use the fix-ed jQuery.Event rather than the (read-only) native event
    args[0] = event;
    event.delegateTarget = this;

    // Call the preDispatch hook for the mapped type, and let it bail if desired
    if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
      return;
    }

    // Determine handlers that should run if there are delegated events
    // Avoid non-left-click bubbling in Firefox (#3861)
    if ( delegateCount && !(event.button && event.type === "click") ) {

      for ( cur = event.target; cur != this; cur = cur.parentNode || this ) {

        // Don't process clicks (ONLY) on disabled elements (#6911, #8165, #11382, #11764)
        if ( cur.disabled !== true || event.type !== "click" ) {
          selMatch = {};
          matches = [];
          for ( i = 0; i < delegateCount; i++ ) {
            handleObj = handlers[ i ];
            sel = handleObj.selector;

            if ( selMatch[ sel ] === undefined ) {
              selMatch[ sel ] = handleObj.needsContext ?
                jQuery( sel, this ).index( cur ) >= 0 :
                jQuery.find( sel, this, null, [ cur ] ).length;
            }
            if ( selMatch[ sel ] ) {
              matches.push( handleObj );
            }
          }
          if ( matches.length ) {
            handlerQueue.push({ elem: cur, matches: matches });
          }
        }
      }
    }

    // Add the remaining (directly-bound) handlers
    if ( handlers.length > delegateCount ) {
      handlerQueue.push({ elem: this, matches: handlers.slice( delegateCount ) });
    }

    // Run delegates first; they may want to stop propagation beneath us
    for ( i = 0; i < handlerQueue.length && !event.isPropagationStopped(); i++ ) {
      matched = handlerQueue[ i ];
      event.currentTarget = matched.elem;

      for ( j = 0; j < matched.matches.length && !event.isImmediatePropagationStopped(); j++ ) {
        handleObj = matched.matches[ j ];

        // Triggered event must either 1) be non-exclusive and have no namespace, or
        // 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
        if ( run_all || (!event.namespace && !handleObj.namespace) || event.namespace_re && event.namespace_re.test( handleObj.namespace ) ) {

          event.data = handleObj.data;
          event.handleObj = handleObj;

          ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
              .apply( matched.elem, args );

          if ( ret !== undefined ) {
            event.result = ret;
            if ( ret === false ) {
              event.preventDefault();
              event.stopPropagation();
            }
          }
        }
      }
    }

    // Call the postDispatch hook for the mapped type
    if ( special.postDispatch ) {
      special.postDispatch.call( this, event );
    }

    return event.result;
  },

  // Includes some event props shared by KeyEvent and MouseEvent
  // *** attrChange attrName relatedNode srcElement  are not normalized, non-W3C, deprecated, will be removed in 1.8 ***
  props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

  fixHooks: {},

  keyHooks: {
    props: "char charCode key keyCode".split(" "),
    filter: function( event, original ) {

      // Add which for key events
      if ( event.which == null ) {
        event.which = original.charCode != null ? original.charCode : original.keyCode;
      }

      return event;
    }
  },

  mouseHooks: {
    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
    filter: function( event, original ) {
      var eventDoc, doc, body,
        button = original.button,
        fromElement = original.fromElement;

      // Calculate pageX/Y if missing and clientX/Y available
      if ( event.pageX == null && original.clientX != null ) {
        eventDoc = event.target.ownerDocument || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
        event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
      }

      // Add relatedTarget, if necessary
      if ( !event.relatedTarget && fromElement ) {
        event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
      }

      // Add which for click: 1 === left; 2 === middle; 3 === right
      // Note: button is not normalized, so don't use it
      if ( !event.which && button !== undefined ) {
        event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
      }

      return event;
    }
  },

  fix: function( event ) {
    if ( event[ jQuery.expando ] ) {
      return event;
    }

    // Create a writable copy of the event object and normalize some properties
    var i, prop,
      originalEvent = event,
      fixHook = jQuery.event.fixHooks[ event.type ] || {},
      copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

    event = jQuery.Event( originalEvent );

    for ( i = copy.length; i; ) {
      prop = copy[ --i ];
      event[ prop ] = originalEvent[ prop ];
    }

    // Fix target property, if necessary (#1925, IE 6/7/8 & Safari2)
    if ( !event.target ) {
      event.target = originalEvent.srcElement || document;
    }

    // Target should not be a text node (#504, Safari)
    if ( event.target.nodeType === 3 ) {
      event.target = event.target.parentNode;
    }

    // For mouse/key events, metaKey==false if it's undefined (#3368, #11328; IE6/7/8)
    event.metaKey = !!event.metaKey;

    return fixHook.filter? fixHook.filter( event, originalEvent ) : event;
  },

  special: {
    load: {
      // Prevent triggered image.load events from bubbling to window.load
      noBubble: true
    },

    focus: {
      delegateType: "focusin"
    },
    blur: {
      delegateType: "focusout"
    },

    beforeunload: {
      setup: function( data, namespaces, eventHandle ) {
        // We only want to do this special case on windows
        if ( jQuery.isWindow( this ) ) {
          this.onbeforeunload = eventHandle;
        }
      },

      teardown: function( namespaces, eventHandle ) {
        if ( this.onbeforeunload === eventHandle ) {
          this.onbeforeunload = null;
        }
      }
    }
  },

  simulate: function( type, elem, event, bubble ) {
    // Piggyback on a donor event to simulate a different one.
    // Fake originalEvent to avoid donor's stopPropagation, but if the
    // simulated event prevents default then we do the same on the donor.
    var e = jQuery.extend(
      new jQuery.Event(),
      event,
      { type: type,
        isSimulated: true,
        originalEvent: {}
      }
    );
    if ( bubble ) {
      jQuery.event.trigger( e, null, elem );
    } else {
      jQuery.event.dispatch.call( elem, e );
    }
    if ( e.isDefaultPrevented() ) {
      event.preventDefault();
    }
  }
};

// Some plugins are using, but it's undocumented/deprecated and will be removed.
// The 1.7 special event interface should provide all the hooks needed now.
jQuery.event.handle = jQuery.event.dispatch;

jQuery.removeEvent = document.removeEventListener ?
  function( elem, type, handle ) {
    if ( elem.removeEventListener ) {
      elem.removeEventListener( type, handle, false );
    }
  } :
  function( elem, type, handle ) {
    var name = "on" + type;

    if ( elem.detachEvent ) {

      // #8545, #7054, preventing memory leaks for custom events in IE6-8
      // detachEvent needed property on element, by name of that event, to properly expose it to GC
      if ( typeof elem[ name ] === "undefined" ) {
        elem[ name ] = null;
      }

      elem.detachEvent( name, handle );
    }
  };

jQuery.Event = function( src, props ) {
  // Allow instantiation without the 'new' keyword
  if ( !(this instanceof jQuery.Event) ) {
    return new jQuery.Event( src, props );
  }

  // Event object
  if ( src && src.type ) {
    this.originalEvent = src;
    this.type = src.type;

    // Events bubbling up the document may have been marked as prevented
    // by a handler lower down the tree; reflect the correct value.
    this.isDefaultPrevented = ( src.defaultPrevented || src.returnValue === false ||
      src.getPreventDefault && src.getPreventDefault() ) ? returnTrue : returnFalse;

  // Event type
  } else {
    this.type = src;
  }

  // Put explicitly provided properties onto the event object
  if ( props ) {
    jQuery.extend( this, props );
  }

  // Create a timestamp if incoming event doesn't have one
  this.timeStamp = src && src.timeStamp || jQuery.now();

  // Mark it as fixed
  this[ jQuery.expando ] = true;
};

function returnFalse() {
  return false;
}
function returnTrue() {
  return true;
}

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
  preventDefault: function() {
    this.isDefaultPrevented = returnTrue;

    var e = this.originalEvent;
    if ( !e ) {
      return;
    }

    // if preventDefault exists run it on the original event
    if ( e.preventDefault ) {
      e.preventDefault();

    // otherwise set the returnValue property of the original event to false (IE)
    } else {
      e.returnValue = false;
    }
  },
  stopPropagation: function() {
    this.isPropagationStopped = returnTrue;

    var e = this.originalEvent;
    if ( !e ) {
      return;
    }
    // if stopPropagation exists run it on the original event
    if ( e.stopPropagation ) {
      e.stopPropagation();
    }
    // otherwise set the cancelBubble property of the original event to true (IE)
    e.cancelBubble = true;
  },
  stopImmediatePropagation: function() {
    this.isImmediatePropagationStopped = returnTrue;
    this.stopPropagation();
  },
  isDefaultPrevented: returnFalse,
  isPropagationStopped: returnFalse,
  isImmediatePropagationStopped: returnFalse
};

// Create mouseenter/leave events using mouseover/out and event-time checks
jQuery.each({
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, function( orig, fix ) {
  jQuery.event.special[ orig ] = {
    delegateType: fix,
    bindType: fix,

    handle: function( event ) {
      var ret,
        target = this,
        related = event.relatedTarget,
        handleObj = event.handleObj,
        selector = handleObj.selector;

      // For mousenter/leave call the handler if related is outside the target.
      // NB: No relatedTarget if the mouse left/entered the browser window
      if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
        event.type = handleObj.origType;
        ret = handleObj.handler.apply( this, arguments );
        event.type = fix;
      }
      return ret;
    }
  };
});

// IE submit delegation
if ( !jQuery.support.submitBubbles ) {

  jQuery.event.special.submit = {
    setup: function() {
      // Only need this for delegated form submit events
      if ( jQuery.nodeName( this, "form" ) ) {
        return false;
      }

      // Lazy-add a submit handler when a descendant form may potentially be submitted
      jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
        // Node name check avoids a VML-related crash in IE (#9807)
        var elem = e.target,
          form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
        if ( form && !jQuery._data( form, "_submit_attached" ) ) {
          jQuery.event.add( form, "submit._submit", function( event ) {
            event._submit_bubble = true;
          });
          jQuery._data( form, "_submit_attached", true );
        }
      });
      // return undefined since we don't need an event listener
    },

    postDispatch: function( event ) {
      // If form was submitted by the user, bubble the event up the tree
      if ( event._submit_bubble ) {
        delete event._submit_bubble;
        if ( this.parentNode && !event.isTrigger ) {
          jQuery.event.simulate( "submit", this.parentNode, event, true );
        }
      }
    },

    teardown: function() {
      // Only need this for delegated form submit events
      if ( jQuery.nodeName( this, "form" ) ) {
        return false;
      }

      // Remove delegated handlers; cleanData eventually reaps submit handlers attached above
      jQuery.event.remove( this, "._submit" );
    }
  };
}

// IE change delegation and checkbox/radio fix
if ( !jQuery.support.changeBubbles ) {

  jQuery.event.special.change = {

    setup: function() {

      if ( rformElems.test( this.nodeName ) ) {
        // IE doesn't fire change on a check/radio until blur; trigger it on click
        // after a propertychange. Eat the blur-change in special.change.handle.
        // This still fires onchange a second time for check/radio after blur.
        if ( this.type === "checkbox" || this.type === "radio" ) {
          jQuery.event.add( this, "propertychange._change", function( event ) {
            if ( event.originalEvent.propertyName === "checked" ) {
              this._just_changed = true;
            }
          });
          jQuery.event.add( this, "click._change", function( event ) {
            if ( this._just_changed && !event.isTrigger ) {
              this._just_changed = false;
            }
            // Allow triggered, simulated change events (#11500)
            jQuery.event.simulate( "change", this, event, true );
          });
        }
        return false;
      }
      // Delegated event; lazy-add a change handler on descendant inputs
      jQuery.event.add( this, "beforeactivate._change", function( e ) {
        var elem = e.target;

        if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "_change_attached" ) ) {
          jQuery.event.add( elem, "change._change", function( event ) {
            if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
              jQuery.event.simulate( "change", this.parentNode, event, true );
            }
          });
          jQuery._data( elem, "_change_attached", true );
        }
      });
    },

    handle: function( event ) {
      var elem = event.target;

      // Swallow native change events from checkbox/radio, we already triggered them above
      if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
        return event.handleObj.handler.apply( this, arguments );
      }
    },

    teardown: function() {
      jQuery.event.remove( this, "._change" );

      return !rformElems.test( this.nodeName );
    }
  };
}

// Create "bubbling" focus and blur events
if ( !jQuery.support.focusinBubbles ) {
  jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

    // Attach a single capturing handler while someone wants focusin/focusout
    var attaches = 0,
      handler = function( event ) {
        jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
      };

    jQuery.event.special[ fix ] = {
      setup: function() {
        if ( attaches++ === 0 ) {
          document.addEventListener( orig, handler, true );
        }
      },
      teardown: function() {
        if ( --attaches === 0 ) {
          document.removeEventListener( orig, handler, true );
        }
      }
    };
  });
}

jQuery.fn.extend({

  on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
    var origFn, type;

    // Types can be a map of types/handlers
    if ( typeof types === "object" ) {
      // ( types-Object, selector, data )
      if ( typeof selector !== "string" ) { // && selector != null
        // ( types-Object, data )
        data = data || selector;
        selector = undefined;
      }
      for ( type in types ) {
        this.on( type, selector, data, types[ type ], one );
      }
      return this;
    }

    if ( data == null && fn == null ) {
      // ( types, fn )
      fn = selector;
      data = selector = undefined;
    } else if ( fn == null ) {
      if ( typeof selector === "string" ) {
        // ( types, selector, fn )
        fn = data;
        data = undefined;
      } else {
        // ( types, data, fn )
        fn = data;
        data = selector;
        selector = undefined;
      }
    }
    if ( fn === false ) {
      fn = returnFalse;
    } else if ( !fn ) {
      return this;
    }

    if ( one === 1 ) {
      origFn = fn;
      fn = function( event ) {
        // Can use an empty set, since event contains the info
        jQuery().off( event );
        return origFn.apply( this, arguments );
      };
      // Use same guid so caller can remove using origFn
      fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
    }
    return this.each( function() {
      jQuery.event.add( this, types, fn, data, selector );
    });
  },
  one: function( types, selector, data, fn ) {
    return this.on( types, selector, data, fn, 1 );
  },
  off: function( types, selector, fn ) {
    var handleObj, type;
    if ( types && types.preventDefault && types.handleObj ) {
      // ( event )  dispatched jQuery.Event
      handleObj = types.handleObj;
      jQuery( types.delegateTarget ).off(
        handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
        handleObj.selector,
        handleObj.handler
      );
      return this;
    }
    if ( typeof types === "object" ) {
      // ( types-object [, selector] )
      for ( type in types ) {
        this.off( type, selector, types[ type ] );
      }
      return this;
    }
    if ( selector === false || typeof selector === "function" ) {
      // ( types [, fn] )
      fn = selector;
      selector = undefined;
    }
    if ( fn === false ) {
      fn = returnFalse;
    }
    return this.each(function() {
      jQuery.event.remove( this, types, fn, selector );
    });
  },

  bind: function( types, data, fn ) {
    return this.on( types, null, data, fn );
  },
  unbind: function( types, fn ) {
    return this.off( types, null, fn );
  },

  live: function( types, data, fn ) {
    jQuery( this.context ).on( types, this.selector, data, fn );
    return this;
  },
  die: function( types, fn ) {
    jQuery( this.context ).off( types, this.selector || "**", fn );
    return this;
  },

  delegate: function( selector, types, data, fn ) {
    return this.on( types, selector, data, fn );
  },
  undelegate: function( selector, types, fn ) {
    // ( namespace ) or ( selector, types [, fn] )
    return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
  },

  trigger: function( type, data ) {
    return this.each(function() {
      jQuery.event.trigger( type, data, this );
    });
  },
  triggerHandler: function( type, data ) {
    if ( this[0] ) {
      return jQuery.event.trigger( type, data, this[0], true );
    }
  },

  toggle: function( fn ) {
    // Save reference to arguments for access in closure
    var args = arguments,
      guid = fn.guid || jQuery.guid++,
      i = 0,
      toggler = function( event ) {
        // Figure out which function to execute
        var lastToggle = ( jQuery._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
        jQuery._data( this, "lastToggle" + fn.guid, lastToggle + 1 );

        // Make sure that clicks stop
        event.preventDefault();

        // and execute the function
        return args[ lastToggle ].apply( this, arguments ) || false;
      };

    // link all the functions, so any of them can unbind this click handler
    toggler.guid = guid;
    while ( i < args.length ) {
      args[ i++ ].guid = guid;
    }

    return this.click( toggler );
  },

  hover: function( fnOver, fnOut ) {
    return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
  }
});

jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
  "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
  "change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

  // Handle event binding
  jQuery.fn[ name ] = function( data, fn ) {
    if ( fn == null ) {
      fn = data;
      data = null;
    }

    return arguments.length > 0 ?
      this.on( name, null, data, fn ) :
      this.trigger( name );
  };

  if ( rkeyEvent.test( name ) ) {
    jQuery.event.fixHooks[ name ] = jQuery.event.keyHooks;
  }

  if ( rmouseEvent.test( name ) ) {
    jQuery.event.fixHooks[ name ] = jQuery.event.mouseHooks;
  }
});
/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */
(function( window, undefined ) {

var cachedruns,
  assertGetIdNotName,
  Expr,
  getText,
  isXML,
  contains,
  compile,
  sortOrder,
  hasDuplicate,
  outermostContext,

  baseHasDuplicate = true,
  strundefined = "undefined",

  expando = ( "sizcache" + Math.random() ).replace( ".", "" ),

  Token = String,
  document = window.document,
  docElem = document.documentElement,
  dirruns = 0,
  done = 0,
  pop = [].pop,
  push = [].push,
  slice = [].slice,
  // Use a stripped-down indexOf if a native one is unavailable
  indexOf = [].indexOf || function( elem ) {
    var i = 0,
      len = this.length;
    for ( ; i < len; i++ ) {
      if ( this[i] === elem ) {
        return i;
      }
    }
    return -1;
  },

  // Augment a function for special use by Sizzle
  markFunction = function( fn, value ) {
    fn[ expando ] = value == null || value;
    return fn;
  },

  createCache = function() {
    var cache = {},
      keys = [];

    return markFunction(function( key, value ) {
      // Only keep the most recent entries
      if ( keys.push( key ) > Expr.cacheLength ) {
        delete cache[ keys.shift() ];
      }

      // Retrieve with (key + " ") to avoid collision with native Object.prototype properties (see Issue #157)
      return (cache[ key + " " ] = value);
    }, cache );
  },

  classCache = createCache(),
  tokenCache = createCache(),
  compilerCache = createCache(),

  // Regex

  // Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
  whitespace = "[\\x20\\t\\r\\n\\f]",
  // http://www.w3.org/TR/css3-syntax/#characters
  characterEncoding = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",

  // Loosely modeled on CSS identifier characters
  // An unquoted value should be a CSS identifier (http://www.w3.org/TR/css3-selectors/#attribute-selectors)
  // Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
  identifier = characterEncoding.replace( "w", "w#" ),

  // Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
  operators = "([*^$|!~]?=)",
  attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
    "*(?:" + operators + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",

  // Prefer arguments not in parens/brackets,
  //   then attribute selectors and non-pseudos (denoted by :),
  //   then anything else
  // These preferences are here to reduce the number of selectors
  //   needing tokenize in the PSEUDO preFilter
  pseudos = ":(" + characterEncoding + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + attributes + ")|[^:]|\\\\.)*|.*))\\)|)",

  // For matchExpr.POS and matchExpr.needsContext
  pos = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
    "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)",

  // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
  rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

  rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
  rcombinators = new RegExp( "^" + whitespace + "*([\\x20\\t\\r\\n\\f>+~])" + whitespace + "*" ),
  rpseudo = new RegExp( pseudos ),

  // Easily-parseable/retrievable ID or TAG or CLASS selectors
  rquickExpr = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,

  rnot = /^:not/,
  rsibling = /[\x20\t\r\n\f]*[+~]/,
  rendsWithNot = /:not\($/,

  rheader = /h\d/i,
  rinputs = /input|select|textarea|button/i,

  rbackslash = /\\(?!\\)/g,

  matchExpr = {
    "ID": new RegExp( "^#(" + characterEncoding + ")" ),
    "CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
    "NAME": new RegExp( "^\\[name=['\"]?(" + characterEncoding + ")['\"]?\\]" ),
    "TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
    "ATTR": new RegExp( "^" + attributes ),
    "PSEUDO": new RegExp( "^" + pseudos ),
    "POS": new RegExp( pos, "i" ),
    "CHILD": new RegExp( "^:(only|nth|first|last)-child(?:\\(" + whitespace +
      "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
      "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
    // For use in libraries implementing .is()
    "needsContext": new RegExp( "^" + whitespace + "*[>+~]|" + pos, "i" )
  },

  // Support

  // Used for testing something on an element
  assert = function( fn ) {
    var div = document.createElement("div");

    try {
      return fn( div );
    } catch (e) {
      return false;
    } finally {
      // release memory in IE
      div = null;
    }
  },

  // Check if getElementsByTagName("*") returns only elements
  assertTagNameNoComments = assert(function( div ) {
    div.appendChild( document.createComment("") );
    return !div.getElementsByTagName("*").length;
  }),

  // Check if getAttribute returns normalized href attributes
  assertHrefNotNormalized = assert(function( div ) {
    div.innerHTML = "<a href='#'></a>";
    return div.firstChild && typeof div.firstChild.getAttribute !== strundefined &&
      div.firstChild.getAttribute("href") === "#";
  }),

  // Check if attributes should be retrieved by attribute nodes
  assertAttributes = assert(function( div ) {
    div.innerHTML = "<select></select>";
    var type = typeof div.lastChild.getAttribute("multiple");
    // IE8 returns a string for some attributes even when not present
    return type !== "boolean" && type !== "string";
  }),

  // Check if getElementsByClassName can be trusted
  assertUsableClassName = assert(function( div ) {
    // Opera can't find a second classname (in 9.6)
    div.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
    if ( !div.getElementsByClassName || !div.getElementsByClassName("e").length ) {
      return false;
    }

    // Safari 3.2 caches class attributes and doesn't catch changes
    div.lastChild.className = "e";
    return div.getElementsByClassName("e").length === 2;
  }),

  // Check if getElementById returns elements by name
  // Check if getElementsByName privileges form controls or returns elements by ID
  assertUsableName = assert(function( div ) {
    // Inject content
    div.id = expando + 0;
    div.innerHTML = "<a name='" + expando + "'></a><div name='" + expando + "'></div>";
    docElem.insertBefore( div, docElem.firstChild );

    // Test
    var pass = document.getElementsByName &&
      // buggy browsers will return fewer than the correct 2
      document.getElementsByName( expando ).length === 2 +
      // buggy browsers will return more than the correct 0
      document.getElementsByName( expando + 0 ).length;
    assertGetIdNotName = !document.getElementById( expando );

    // Cleanup
    docElem.removeChild( div );

    return pass;
  });

// If slice is not available, provide a backup
try {
  slice.call( docElem.childNodes, 0 )[0].nodeType;
} catch ( e ) {
  slice = function( i ) {
    var elem,
      results = [];
    for ( ; (elem = this[i]); i++ ) {
      results.push( elem );
    }
    return results;
  };
}

function Sizzle( selector, context, results, seed ) {
  results = results || [];
  context = context || document;
  var match, elem, xml, m,
    nodeType = context.nodeType;

  if ( !selector || typeof selector !== "string" ) {
    return results;
  }

  if ( nodeType !== 1 && nodeType !== 9 ) {
    return [];
  }

  xml = isXML( context );

  if ( !xml && !seed ) {
    if ( (match = rquickExpr.exec( selector )) ) {
      // Speed-up: Sizzle("#ID")
      if ( (m = match[1]) ) {
        if ( nodeType === 9 ) {
          elem = context.getElementById( m );
          // Check parentNode to catch when Blackberry 4.6 returns
          // nodes that are no longer in the document #6963
          if ( elem && elem.parentNode ) {
            // Handle the case where IE, Opera, and Webkit return items
            // by name instead of ID
            if ( elem.id === m ) {
              results.push( elem );
              return results;
            }
          } else {
            return results;
          }
        } else {
          // Context is not a document
          if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
            contains( context, elem ) && elem.id === m ) {
            results.push( elem );
            return results;
          }
        }

      // Speed-up: Sizzle("TAG")
      } else if ( match[2] ) {
        push.apply( results, slice.call(context.getElementsByTagName( selector ), 0) );
        return results;

      // Speed-up: Sizzle(".CLASS")
      } else if ( (m = match[3]) && assertUsableClassName && context.getElementsByClassName ) {
        push.apply( results, slice.call(context.getElementsByClassName( m ), 0) );
        return results;
      }
    }
  }

  // All others
  return select( selector.replace( rtrim, "$1" ), context, results, seed, xml );
}

Sizzle.matches = function( expr, elements ) {
  return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
  return Sizzle( expr, null, null, [ elem ] ).length > 0;
};

// Returns a function to use in pseudos for input types
function createInputPseudo( type ) {
  return function( elem ) {
    var name = elem.nodeName.toLowerCase();
    return name === "input" && elem.type === type;
  };
}

// Returns a function to use in pseudos for buttons
function createButtonPseudo( type ) {
  return function( elem ) {
    var name = elem.nodeName.toLowerCase();
    return (name === "input" || name === "button") && elem.type === type;
  };
}

// Returns a function to use in pseudos for positionals
function createPositionalPseudo( fn ) {
  return markFunction(function( argument ) {
    argument = +argument;
    return markFunction(function( seed, matches ) {
      var j,
        matchIndexes = fn( [], seed.length, argument ),
        i = matchIndexes.length;

      // Match elements found at the specified indexes
      while ( i-- ) {
        if ( seed[ (j = matchIndexes[i]) ] ) {
          seed[j] = !(matches[j] = seed[j]);
        }
      }
    });
  });
}

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
  var node,
    ret = "",
    i = 0,
    nodeType = elem.nodeType;

  if ( nodeType ) {
    if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
      // Use textContent for elements
      // innerText usage removed for consistency of new lines (see #11153)
      if ( typeof elem.textContent === "string" ) {
        return elem.textContent;
      } else {
        // Traverse its children
        for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
          ret += getText( elem );
        }
      }
    } else if ( nodeType === 3 || nodeType === 4 ) {
      return elem.nodeValue;
    }
    // Do not include comment or processing instruction nodes
  } else {

    // If no nodeType, this is expected to be an array
    for ( ; (node = elem[i]); i++ ) {
      // Do not traverse comment nodes
      ret += getText( node );
    }
  }
  return ret;
};

isXML = Sizzle.isXML = function( elem ) {
  // documentElement is verified for cases where it doesn't yet exist
  // (such as loading iframes in IE - #4833)
  var documentElement = elem && (elem.ownerDocument || elem).documentElement;
  return documentElement ? documentElement.nodeName !== "HTML" : false;
};

// Element contains another
contains = Sizzle.contains = docElem.contains ?
  function( a, b ) {
    var adown = a.nodeType === 9 ? a.documentElement : a,
      bup = b && b.parentNode;
    return a === bup || !!( bup && bup.nodeType === 1 && adown.contains && adown.contains(bup) );
  } :
  docElem.compareDocumentPosition ?
  function( a, b ) {
    return b && !!( a.compareDocumentPosition( b ) & 16 );
  } :
  function( a, b ) {
    while ( (b = b.parentNode) ) {
      if ( b === a ) {
        return true;
      }
    }
    return false;
  };

Sizzle.attr = function( elem, name ) {
  var val,
    xml = isXML( elem );

  if ( !xml ) {
    name = name.toLowerCase();
  }
  if ( (val = Expr.attrHandle[ name ]) ) {
    return val( elem );
  }
  if ( xml || assertAttributes ) {
    return elem.getAttribute( name );
  }
  val = elem.getAttributeNode( name );
  return val ?
    typeof elem[ name ] === "boolean" ?
      elem[ name ] ? name : null :
      val.specified ? val.value : null :
    null;
};

Expr = Sizzle.selectors = {

  // Can be adjusted by the user
  cacheLength: 50,

  createPseudo: markFunction,

  match: matchExpr,

  // IE6/7 return a modified href
  attrHandle: assertHrefNotNormalized ?
    {} :
    {
      "href": function( elem ) {
        return elem.getAttribute( "href", 2 );
      },
      "type": function( elem ) {
        return elem.getAttribute("type");
      }
    },

  find: {
    "ID": assertGetIdNotName ?
      function( id, context, xml ) {
        if ( typeof context.getElementById !== strundefined && !xml ) {
          var m = context.getElementById( id );
          // Check parentNode to catch when Blackberry 4.6 returns
          // nodes that are no longer in the document #6963
          return m && m.parentNode ? [m] : [];
        }
      } :
      function( id, context, xml ) {
        if ( typeof context.getElementById !== strundefined && !xml ) {
          var m = context.getElementById( id );

          return m ?
            m.id === id || typeof m.getAttributeNode !== strundefined && m.getAttributeNode("id").value === id ?
              [m] :
              undefined :
            [];
        }
      },

    "TAG": assertTagNameNoComments ?
      function( tag, context ) {
        if ( typeof context.getElementsByTagName !== strundefined ) {
          return context.getElementsByTagName( tag );
        }
      } :
      function( tag, context ) {
        var results = context.getElementsByTagName( tag );

        // Filter out possible comments
        if ( tag === "*" ) {
          var elem,
            tmp = [],
            i = 0;

          for ( ; (elem = results[i]); i++ ) {
            if ( elem.nodeType === 1 ) {
              tmp.push( elem );
            }
          }

          return tmp;
        }
        return results;
      },

    "NAME": assertUsableName && function( tag, context ) {
      if ( typeof context.getElementsByName !== strundefined ) {
        return context.getElementsByName( name );
      }
    },

    "CLASS": assertUsableClassName && function( className, context, xml ) {
      if ( typeof context.getElementsByClassName !== strundefined && !xml ) {
        return context.getElementsByClassName( className );
      }
    }
  },

  relative: {
    ">": { dir: "parentNode", first: true },
    " ": { dir: "parentNode" },
    "+": { dir: "previousSibling", first: true },
    "~": { dir: "previousSibling" }
  },

  preFilter: {
    "ATTR": function( match ) {
      match[1] = match[1].replace( rbackslash, "" );

      // Move the given value to match[3] whether quoted or unquoted
      match[3] = ( match[4] || match[5] || "" ).replace( rbackslash, "" );

      if ( match[2] === "~=" ) {
        match[3] = " " + match[3] + " ";
      }

      return match.slice( 0, 4 );
    },

    "CHILD": function( match ) {
      /* matches from matchExpr["CHILD"]
        1 type (only|nth|...)
        2 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
        3 xn-component of xn+y argument ([+-]?\d*n|)
        4 sign of xn-component
        5 x of xn-component
        6 sign of y-component
        7 y of y-component
      */
      match[1] = match[1].toLowerCase();

      if ( match[1] === "nth" ) {
        // nth-child requires argument
        if ( !match[2] ) {
          Sizzle.error( match[0] );
        }

        // numeric x and y parameters for Expr.filter.CHILD
        // remember that false/true cast respectively to 0/1
        match[3] = +( match[3] ? match[4] + (match[5] || 1) : 2 * ( match[2] === "even" || match[2] === "odd" ) );
        match[4] = +( ( match[6] + match[7] ) || match[2] === "odd" );

      // other types prohibit arguments
      } else if ( match[2] ) {
        Sizzle.error( match[0] );
      }

      return match;
    },

    "PSEUDO": function( match ) {
      var unquoted, excess;
      if ( matchExpr["CHILD"].test( match[0] ) ) {
        return null;
      }

      if ( match[3] ) {
        match[2] = match[3];
      } else if ( (unquoted = match[4]) ) {
        // Only check arguments that contain a pseudo
        if ( rpseudo.test(unquoted) &&
          // Get excess from tokenize (recursively)
          (excess = tokenize( unquoted, true )) &&
          // advance to the next closing parenthesis
          (excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

          // excess is a negative index
          unquoted = unquoted.slice( 0, excess );
          match[0] = match[0].slice( 0, excess );
        }
        match[2] = unquoted;
      }

      // Return only captures needed by the pseudo filter method (type and argument)
      return match.slice( 0, 3 );
    }
  },

  filter: {
    "ID": assertGetIdNotName ?
      function( id ) {
        id = id.replace( rbackslash, "" );
        return function( elem ) {
          return elem.getAttribute("id") === id;
        };
      } :
      function( id ) {
        id = id.replace( rbackslash, "" );
        return function( elem ) {
          var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
          return node && node.value === id;
        };
      },

    "TAG": function( nodeName ) {
      if ( nodeName === "*" ) {
        return function() { return true; };
      }
      nodeName = nodeName.replace( rbackslash, "" ).toLowerCase();

      return function( elem ) {
        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
      };
    },

    "CLASS": function( className ) {
      var pattern = classCache[ expando ][ className + " " ];

      return pattern ||
        (pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
        classCache( className, function( elem ) {
          return pattern.test( elem.className || (typeof elem.getAttribute !== strundefined && elem.getAttribute("class")) || "" );
        });
    },

    "ATTR": function( name, operator, check ) {
      return function( elem, context ) {
        var result = Sizzle.attr( elem, name );

        if ( result == null ) {
          return operator === "!=";
        }
        if ( !operator ) {
          return true;
        }

        result += "";

        return operator === "=" ? result === check :
          operator === "!=" ? result !== check :
          operator === "^=" ? check && result.indexOf( check ) === 0 :
          operator === "*=" ? check && result.indexOf( check ) > -1 :
          operator === "$=" ? check && result.substr( result.length - check.length ) === check :
          operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
          operator === "|=" ? result === check || result.substr( 0, check.length + 1 ) === check + "-" :
          false;
      };
    },

    "CHILD": function( type, argument, first, last ) {

      if ( type === "nth" ) {
        return function( elem ) {
          var node, diff,
            parent = elem.parentNode;

          if ( first === 1 && last === 0 ) {
            return true;
          }

          if ( parent ) {
            diff = 0;
            for ( node = parent.firstChild; node; node = node.nextSibling ) {
              if ( node.nodeType === 1 ) {
                diff++;
                if ( elem === node ) {
                  break;
                }
              }
            }
          }

          // Incorporate the offset (or cast to NaN), then check against cycle size
          diff -= last;
          return diff === first || ( diff % first === 0 && diff / first >= 0 );
        };
      }

      return function( elem ) {
        var node = elem;

        switch ( type ) {
          case "only":
          case "first":
            while ( (node = node.previousSibling) ) {
              if ( node.nodeType === 1 ) {
                return false;
              }
            }

            if ( type === "first" ) {
              return true;
            }

            node = elem;

            /* falls through */
          case "last":
            while ( (node = node.nextSibling) ) {
              if ( node.nodeType === 1 ) {
                return false;
              }
            }

            return true;
        }
      };
    },

    "PSEUDO": function( pseudo, argument ) {
      // pseudo-class names are case-insensitive
      // http://www.w3.org/TR/selectors/#pseudo-classes
      // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
      // Remember that setFilters inherits from pseudos
      var args,
        fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
          Sizzle.error( "unsupported pseudo: " + pseudo );

      // The user may use createPseudo to indicate that
      // arguments are needed to create the filter function
      // just as Sizzle does
      if ( fn[ expando ] ) {
        return fn( argument );
      }

      // But maintain support for old signatures
      if ( fn.length > 1 ) {
        args = [ pseudo, pseudo, "", argument ];
        return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
          markFunction(function( seed, matches ) {
            var idx,
              matched = fn( seed, argument ),
              i = matched.length;
            while ( i-- ) {
              idx = indexOf.call( seed, matched[i] );
              seed[ idx ] = !( matches[ idx ] = matched[i] );
            }
          }) :
          function( elem ) {
            return fn( elem, 0, args );
          };
      }

      return fn;
    }
  },

  pseudos: {
    "not": markFunction(function( selector ) {
      // Trim the selector passed to compile
      // to avoid treating leading and trailing
      // spaces as combinators
      var input = [],
        results = [],
        matcher = compile( selector.replace( rtrim, "$1" ) );

      return matcher[ expando ] ?
        markFunction(function( seed, matches, context, xml ) {
          var elem,
            unmatched = matcher( seed, null, xml, [] ),
            i = seed.length;

          // Match elements unmatched by `matcher`
          while ( i-- ) {
            if ( (elem = unmatched[i]) ) {
              seed[i] = !(matches[i] = elem);
            }
          }
        }) :
        function( elem, context, xml ) {
          input[0] = elem;
          matcher( input, null, xml, results );
          return !results.pop();
        };
    }),

    "has": markFunction(function( selector ) {
      return function( elem ) {
        return Sizzle( selector, elem ).length > 0;
      };
    }),

    "contains": markFunction(function( text ) {
      return function( elem ) {
        return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
      };
    }),

    "enabled": function( elem ) {
      return elem.disabled === false;
    },

    "disabled": function( elem ) {
      return elem.disabled === true;
    },

    "checked": function( elem ) {
      // In CSS3, :checked should return both checked and selected elements
      // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
      var nodeName = elem.nodeName.toLowerCase();
      return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
    },

    "selected": function( elem ) {
      // Accessing this property makes selected-by-default
      // options in Safari work properly
      if ( elem.parentNode ) {
        elem.parentNode.selectedIndex;
      }

      return elem.selected === true;
    },

    "parent": function( elem ) {
      return !Expr.pseudos["empty"]( elem );
    },

    "empty": function( elem ) {
      // http://www.w3.org/TR/selectors/#empty-pseudo
      // :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
      //   not comment, processing instructions, or others
      // Thanks to Diego Perini for the nodeName shortcut
      //   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
      var nodeType;
      elem = elem.firstChild;
      while ( elem ) {
        if ( elem.nodeName > "@" || (nodeType = elem.nodeType) === 3 || nodeType === 4 ) {
          return false;
        }
        elem = elem.nextSibling;
      }
      return true;
    },

    "header": function( elem ) {
      return rheader.test( elem.nodeName );
    },

    "text": function( elem ) {
      var type, attr;
      // IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
      // use getAttribute instead to test this case
      return elem.nodeName.toLowerCase() === "input" &&
        (type = elem.type) === "text" &&
        ( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === type );
    },

    // Input types
    "radio": createInputPseudo("radio"),
    "checkbox": createInputPseudo("checkbox"),
    "file": createInputPseudo("file"),
    "password": createInputPseudo("password"),
    "image": createInputPseudo("image"),

    "submit": createButtonPseudo("submit"),
    "reset": createButtonPseudo("reset"),

    "button": function( elem ) {
      var name = elem.nodeName.toLowerCase();
      return name === "input" && elem.type === "button" || name === "button";
    },

    "input": function( elem ) {
      return rinputs.test( elem.nodeName );
    },

    "focus": function( elem ) {
      var doc = elem.ownerDocument;
      return elem === doc.activeElement && (!doc.hasFocus || doc.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
    },

    "active": function( elem ) {
      return elem === elem.ownerDocument.activeElement;
    },

    // Positional types
    "first": createPositionalPseudo(function() {
      return [ 0 ];
    }),

    "last": createPositionalPseudo(function( matchIndexes, length ) {
      return [ length - 1 ];
    }),

    "eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
      return [ argument < 0 ? argument + length : argument ];
    }),

    "even": createPositionalPseudo(function( matchIndexes, length ) {
      for ( var i = 0; i < length; i += 2 ) {
        matchIndexes.push( i );
      }
      return matchIndexes;
    }),

    "odd": createPositionalPseudo(function( matchIndexes, length ) {
      for ( var i = 1; i < length; i += 2 ) {
        matchIndexes.push( i );
      }
      return matchIndexes;
    }),

    "lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
      for ( var i = argument < 0 ? argument + length : argument; --i >= 0; ) {
        matchIndexes.push( i );
      }
      return matchIndexes;
    }),

    "gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
      for ( var i = argument < 0 ? argument + length : argument; ++i < length; ) {
        matchIndexes.push( i );
      }
      return matchIndexes;
    })
  }
};

function siblingCheck( a, b, ret ) {
  if ( a === b ) {
    return ret;
  }

  var cur = a.nextSibling;

  while ( cur ) {
    if ( cur === b ) {
      return -1;
    }

    cur = cur.nextSibling;
  }

  return 1;
}

sortOrder = docElem.compareDocumentPosition ?
  function( a, b ) {
    if ( a === b ) {
      hasDuplicate = true;
      return 0;
    }

    return ( !a.compareDocumentPosition || !b.compareDocumentPosition ?
      a.compareDocumentPosition :
      a.compareDocumentPosition(b) & 4
    ) ? -1 : 1;
  } :
  function( a, b ) {
    // The nodes are identical, we can exit early
    if ( a === b ) {
      hasDuplicate = true;
      return 0;

    // Fallback to using sourceIndex (in IE) if it's available on both nodes
    } else if ( a.sourceIndex && b.sourceIndex ) {
      return a.sourceIndex - b.sourceIndex;
    }

    var al, bl,
      ap = [],
      bp = [],
      aup = a.parentNode,
      bup = b.parentNode,
      cur = aup;

    // If the nodes are siblings (or identical) we can do a quick check
    if ( aup === bup ) {
      return siblingCheck( a, b );

    // If no parents were found then the nodes are disconnected
    } else if ( !aup ) {
      return -1;

    } else if ( !bup ) {
      return 1;
    }

    // Otherwise they're somewhere else in the tree so we need
    // to build up a full list of the parentNodes for comparison
    while ( cur ) {
      ap.unshift( cur );
      cur = cur.parentNode;
    }

    cur = bup;

    while ( cur ) {
      bp.unshift( cur );
      cur = cur.parentNode;
    }

    al = ap.length;
    bl = bp.length;

    // Start walking down the tree looking for a discrepancy
    for ( var i = 0; i < al && i < bl; i++ ) {
      if ( ap[i] !== bp[i] ) {
        return siblingCheck( ap[i], bp[i] );
      }
    }

    // We ended someplace up the tree so do a sibling check
    return i === al ?
      siblingCheck( a, bp[i], -1 ) :
      siblingCheck( ap[i], b, 1 );
  };

// Always assume the presence of duplicates if sort doesn't
// pass them to our comparison function (as in Google Chrome).
[0, 0].sort( sortOrder );
baseHasDuplicate = !hasDuplicate;

// Document sorting and removing duplicates
Sizzle.uniqueSort = function( results ) {
  var elem,
    duplicates = [],
    i = 1,
    j = 0;

  hasDuplicate = baseHasDuplicate;
  results.sort( sortOrder );

  if ( hasDuplicate ) {
    for ( ; (elem = results[i]); i++ ) {
      if ( elem === results[ i - 1 ] ) {
        j = duplicates.push( i );
      }
    }
    while ( j-- ) {
      results.splice( duplicates[ j ], 1 );
    }
  }

  return results;
};

Sizzle.error = function( msg ) {
  throw new Error( "Syntax error, unrecognized expression: " + msg );
};

function tokenize( selector, parseOnly ) {
  var matched, match, tokens, type,
    soFar, groups, preFilters,
    cached = tokenCache[ expando ][ selector + " " ];

  if ( cached ) {
    return parseOnly ? 0 : cached.slice( 0 );
  }

  soFar = selector;
  groups = [];
  preFilters = Expr.preFilter;

  while ( soFar ) {

    // Comma and first run
    if ( !matched || (match = rcomma.exec( soFar )) ) {
      if ( match ) {
        // Don't consume trailing commas as valid
        soFar = soFar.slice( match[0].length ) || soFar;
      }
      groups.push( tokens = [] );
    }

    matched = false;

    // Combinators
    if ( (match = rcombinators.exec( soFar )) ) {
      tokens.push( matched = new Token( match.shift() ) );
      soFar = soFar.slice( matched.length );

      // Cast descendant combinators to space
      matched.type = match[0].replace( rtrim, " " );
    }

    // Filters
    for ( type in Expr.filter ) {
      if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
        (match = preFilters[ type ]( match ))) ) {

        tokens.push( matched = new Token( match.shift() ) );
        soFar = soFar.slice( matched.length );
        matched.type = type;
        matched.matches = match;
      }
    }

    if ( !matched ) {
      break;
    }
  }

  // Return the length of the invalid excess
  // if we're just parsing
  // Otherwise, throw an error or return tokens
  return parseOnly ?
    soFar.length :
    soFar ?
      Sizzle.error( selector ) :
      // Cache the tokens
      tokenCache( selector, groups ).slice( 0 );
}

function addCombinator( matcher, combinator, base ) {
  var dir = combinator.dir,
    checkNonElements = base && combinator.dir === "parentNode",
    doneName = done++;

  return combinator.first ?
    // Check against closest ancestor/preceding element
    function( elem, context, xml ) {
      while ( (elem = elem[ dir ]) ) {
        if ( checkNonElements || elem.nodeType === 1  ) {
          return matcher( elem, context, xml );
        }
      }
    } :

    // Check against all ancestor/preceding elements
    function( elem, context, xml ) {
      // We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
      if ( !xml ) {
        var cache,
          dirkey = dirruns + " " + doneName + " ",
          cachedkey = dirkey + cachedruns;
        while ( (elem = elem[ dir ]) ) {
          if ( checkNonElements || elem.nodeType === 1 ) {
            if ( (cache = elem[ expando ]) === cachedkey ) {
              return elem.sizset;
            } else if ( typeof cache === "string" && cache.indexOf(dirkey) === 0 ) {
              if ( elem.sizset ) {
                return elem;
              }
            } else {
              elem[ expando ] = cachedkey;
              if ( matcher( elem, context, xml ) ) {
                elem.sizset = true;
                return elem;
              }
              elem.sizset = false;
            }
          }
        }
      } else {
        while ( (elem = elem[ dir ]) ) {
          if ( checkNonElements || elem.nodeType === 1 ) {
            if ( matcher( elem, context, xml ) ) {
              return elem;
            }
          }
        }
      }
    };
}

function elementMatcher( matchers ) {
  return matchers.length > 1 ?
    function( elem, context, xml ) {
      var i = matchers.length;
      while ( i-- ) {
        if ( !matchers[i]( elem, context, xml ) ) {
          return false;
        }
      }
      return true;
    } :
    matchers[0];
}

function condense( unmatched, map, filter, context, xml ) {
  var elem,
    newUnmatched = [],
    i = 0,
    len = unmatched.length,
    mapped = map != null;

  for ( ; i < len; i++ ) {
    if ( (elem = unmatched[i]) ) {
      if ( !filter || filter( elem, context, xml ) ) {
        newUnmatched.push( elem );
        if ( mapped ) {
          map.push( i );
        }
      }
    }
  }

  return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
  if ( postFilter && !postFilter[ expando ] ) {
    postFilter = setMatcher( postFilter );
  }
  if ( postFinder && !postFinder[ expando ] ) {
    postFinder = setMatcher( postFinder, postSelector );
  }
  return markFunction(function( seed, results, context, xml ) {
    var temp, i, elem,
      preMap = [],
      postMap = [],
      preexisting = results.length,

      // Get initial elements from seed or context
      elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

      // Prefilter to get matcher input, preserving a map for seed-results synchronization
      matcherIn = preFilter && ( seed || !selector ) ?
        condense( elems, preMap, preFilter, context, xml ) :
        elems,

      matcherOut = matcher ?
        // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
        postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

          // ...intermediate processing is necessary
          [] :

          // ...otherwise use results directly
          results :
        matcherIn;

    // Find primary matches
    if ( matcher ) {
      matcher( matcherIn, matcherOut, context, xml );
    }

    // Apply postFilter
    if ( postFilter ) {
      temp = condense( matcherOut, postMap );
      postFilter( temp, [], context, xml );

      // Un-match failing elements by moving them back to matcherIn
      i = temp.length;
      while ( i-- ) {
        if ( (elem = temp[i]) ) {
          matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
        }
      }
    }

    if ( seed ) {
      if ( postFinder || preFilter ) {
        if ( postFinder ) {
          // Get the final matcherOut by condensing this intermediate into postFinder contexts
          temp = [];
          i = matcherOut.length;
          while ( i-- ) {
            if ( (elem = matcherOut[i]) ) {
              // Restore matcherIn since elem is not yet a final match
              temp.push( (matcherIn[i] = elem) );
            }
          }
          postFinder( null, (matcherOut = []), temp, xml );
        }

        // Move matched elements from seed to results to keep them synchronized
        i = matcherOut.length;
        while ( i-- ) {
          if ( (elem = matcherOut[i]) &&
            (temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {

            seed[temp] = !(results[temp] = elem);
          }
        }
      }

    // Add elements to results, through postFinder if defined
    } else {
      matcherOut = condense(
        matcherOut === results ?
          matcherOut.splice( preexisting, matcherOut.length ) :
          matcherOut
      );
      if ( postFinder ) {
        postFinder( null, results, matcherOut, xml );
      } else {
        push.apply( results, matcherOut );
      }
    }
  });
}

function matcherFromTokens( tokens ) {
  var checkContext, matcher, j,
    len = tokens.length,
    leadingRelative = Expr.relative[ tokens[0].type ],
    implicitRelative = leadingRelative || Expr.relative[" "],
    i = leadingRelative ? 1 : 0,

    // The foundational matcher ensures that elements are reachable from top-level context(s)
    matchContext = addCombinator( function( elem ) {
      return elem === checkContext;
    }, implicitRelative, true ),
    matchAnyContext = addCombinator( function( elem ) {
      return indexOf.call( checkContext, elem ) > -1;
    }, implicitRelative, true ),
    matchers = [ function( elem, context, xml ) {
      return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
        (checkContext = context).nodeType ?
          matchContext( elem, context, xml ) :
          matchAnyContext( elem, context, xml ) );
    } ];

  for ( ; i < len; i++ ) {
    if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
      matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
    } else {
      matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

      // Return special upon seeing a positional matcher
      if ( matcher[ expando ] ) {
        // Find the next relative operator (if any) for proper handling
        j = ++i;
        for ( ; j < len; j++ ) {
          if ( Expr.relative[ tokens[j].type ] ) {
            break;
          }
        }
        return setMatcher(
          i > 1 && elementMatcher( matchers ),
          i > 1 && tokens.slice( 0, i - 1 ).join("").replace( rtrim, "$1" ),
          matcher,
          i < j && matcherFromTokens( tokens.slice( i, j ) ),
          j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
          j < len && tokens.join("")
        );
      }
      matchers.push( matcher );
    }
  }

  return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
  var bySet = setMatchers.length > 0,
    byElement = elementMatchers.length > 0,
    superMatcher = function( seed, context, xml, results, expandContext ) {
      var elem, j, matcher,
        setMatched = [],
        matchedCount = 0,
        i = "0",
        unmatched = seed && [],
        outermost = expandContext != null,
        contextBackup = outermostContext,
        // We must always have either seed elements or context
        elems = seed || byElement && Expr.find["TAG"]( "*", expandContext && context.parentNode || context ),
        // Nested matchers should use non-integer dirruns
        dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.E);

      if ( outermost ) {
        outermostContext = context !== document && context;
        cachedruns = superMatcher.el;
      }

      // Add elements passing elementMatchers directly to results
      for ( ; (elem = elems[i]) != null; i++ ) {
        if ( byElement && elem ) {
          for ( j = 0; (matcher = elementMatchers[j]); j++ ) {
            if ( matcher( elem, context, xml ) ) {
              results.push( elem );
              break;
            }
          }
          if ( outermost ) {
            dirruns = dirrunsUnique;
            cachedruns = ++superMatcher.el;
          }
        }

        // Track unmatched elements for set filters
        if ( bySet ) {
          // They will have gone through all possible matchers
          if ( (elem = !matcher && elem) ) {
            matchedCount--;
          }

          // Lengthen the array for every element, matched or not
          if ( seed ) {
            unmatched.push( elem );
          }
        }
      }

      // Apply set filters to unmatched elements
      matchedCount += i;
      if ( bySet && i !== matchedCount ) {
        for ( j = 0; (matcher = setMatchers[j]); j++ ) {
          matcher( unmatched, setMatched, context, xml );
        }

        if ( seed ) {
          // Reintegrate element matches to eliminate the need for sorting
          if ( matchedCount > 0 ) {
            while ( i-- ) {
              if ( !(unmatched[i] || setMatched[i]) ) {
                setMatched[i] = pop.call( results );
              }
            }
          }

          // Discard index placeholder values to get only actual matches
          setMatched = condense( setMatched );
        }

        // Add matches to results
        push.apply( results, setMatched );

        // Seedless set matches succeeding multiple successful matchers stipulate sorting
        if ( outermost && !seed && setMatched.length > 0 &&
          ( matchedCount + setMatchers.length ) > 1 ) {

          Sizzle.uniqueSort( results );
        }
      }

      // Override manipulation of globals by nested matchers
      if ( outermost ) {
        dirruns = dirrunsUnique;
        outermostContext = contextBackup;
      }

      return unmatched;
    };

  superMatcher.el = 0;
  return bySet ?
    markFunction( superMatcher ) :
    superMatcher;
}

compile = Sizzle.compile = function( selector, group /* Internal Use Only */ ) {
  var i,
    setMatchers = [],
    elementMatchers = [],
    cached = compilerCache[ expando ][ selector + " " ];

  if ( !cached ) {
    // Generate a function of recursive functions that can be used to check each element
    if ( !group ) {
      group = tokenize( selector );
    }
    i = group.length;
    while ( i-- ) {
      cached = matcherFromTokens( group[i] );
      if ( cached[ expando ] ) {
        setMatchers.push( cached );
      } else {
        elementMatchers.push( cached );
      }
    }

    // Cache the compiled function
    cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
  }
  return cached;
};

function multipleContexts( selector, contexts, results ) {
  var i = 0,
    len = contexts.length;
  for ( ; i < len; i++ ) {
    Sizzle( selector, contexts[i], results );
  }
  return results;
}

function select( selector, context, results, seed, xml ) {
  var i, tokens, token, type, find,
    match = tokenize( selector ),
    j = match.length;

  if ( !seed ) {
    // Try to minimize operations if there is only one group
    if ( match.length === 1 ) {

      // Take a shortcut and set the context if the root selector is an ID
      tokens = match[0] = match[0].slice( 0 );
      if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
          context.nodeType === 9 && !xml &&
          Expr.relative[ tokens[1].type ] ) {

        context = Expr.find["ID"]( token.matches[0].replace( rbackslash, "" ), context, xml )[0];
        if ( !context ) {
          return results;
        }

        selector = selector.slice( tokens.shift().length );
      }

      // Fetch a seed set for right-to-left matching
      for ( i = matchExpr["POS"].test( selector ) ? -1 : tokens.length - 1; i >= 0; i-- ) {
        token = tokens[i];

        // Abort if we hit a combinator
        if ( Expr.relative[ (type = token.type) ] ) {
          break;
        }
        if ( (find = Expr.find[ type ]) ) {
          // Search, expanding context for leading sibling combinators
          if ( (seed = find(
            token.matches[0].replace( rbackslash, "" ),
            rsibling.test( tokens[0].type ) && context.parentNode || context,
            xml
          )) ) {

            // If seed is empty or no tokens remain, we can return early
            tokens.splice( i, 1 );
            selector = seed.length && tokens.join("");
            if ( !selector ) {
              push.apply( results, slice.call( seed, 0 ) );
              return results;
            }

            break;
          }
        }
      }
    }
  }

  // Compile and execute a filtering function
  // Provide `match` to avoid retokenization if we modified the selector above
  compile( selector, match )(
    seed,
    context,
    xml,
    results,
    rsibling.test( selector )
  );
  return results;
}

if ( document.querySelectorAll ) {
  (function() {
    var disconnectedMatch,
      oldSelect = select,
      rescape = /'|\\/g,
      rattributeQuotes = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,

      // qSa(:focus) reports false when true (Chrome 21), no need to also add to buggyMatches since matches checks buggyQSA
      // A support test would require too much code (would include document ready)
      rbuggyQSA = [ ":focus" ],

      // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
      // A support test would require too much code (would include document ready)
      // just skip matchesSelector for :active
      rbuggyMatches = [ ":active" ],
      matches = docElem.matchesSelector ||
        docElem.mozMatchesSelector ||
        docElem.webkitMatchesSelector ||
        docElem.oMatchesSelector ||
        docElem.msMatchesSelector;

    // Build QSA regex
    // Regex strategy adopted from Diego Perini
    assert(function( div ) {
      // Select is set to empty string on purpose
      // This is to test IE's treatment of not explictly
      // setting a boolean content attribute,
      // since its presence should be enough
      // http://bugs.jquery.com/ticket/12359
      div.innerHTML = "<select><option selected=''></option></select>";

      // IE8 - Some boolean attributes are not treated correctly
      if ( !div.querySelectorAll("[selected]").length ) {
        rbuggyQSA.push( "\\[" + whitespace + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)" );
      }

      // Webkit/Opera - :checked should return selected option elements
      // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
      // IE8 throws error here (do not put tests after this one)
      if ( !div.querySelectorAll(":checked").length ) {
        rbuggyQSA.push(":checked");
      }
    });

    assert(function( div ) {

      // Opera 10-12/IE9 - ^= $= *= and empty values
      // Should not select anything
      div.innerHTML = "<p test=''></p>";
      if ( div.querySelectorAll("[test^='']").length ) {
        rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:\"\"|'')" );
      }

      // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
      // IE8 throws error here (do not put tests after this one)
      div.innerHTML = "<input type='hidden'/>";
      if ( !div.querySelectorAll(":enabled").length ) {
        rbuggyQSA.push(":enabled", ":disabled");
      }
    });

    // rbuggyQSA always contains :focus, so no need for a length check
    rbuggyQSA = /* rbuggyQSA.length && */ new RegExp( rbuggyQSA.join("|") );

    select = function( selector, context, results, seed, xml ) {
      // Only use querySelectorAll when not filtering,
      // when this is not xml,
      // and when no QSA bugs apply
      if ( !seed && !xml && !rbuggyQSA.test( selector ) ) {
        var groups, i,
          old = true,
          nid = expando,
          newContext = context,
          newSelector = context.nodeType === 9 && selector;

        // qSA works strangely on Element-rooted queries
        // We can work around this by specifying an extra ID on the root
        // and working up from there (Thanks to Andrew Dupont for the technique)
        // IE 8 doesn't work on object elements
        if ( context.nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
          groups = tokenize( selector );

          if ( (old = context.getAttribute("id")) ) {
            nid = old.replace( rescape, "\\$&" );
          } else {
            context.setAttribute( "id", nid );
          }
          nid = "[id='" + nid + "'] ";

          i = groups.length;
          while ( i-- ) {
            groups[i] = nid + groups[i].join("");
          }
          newContext = rsibling.test( selector ) && context.parentNode || context;
          newSelector = groups.join(",");
        }

        if ( newSelector ) {
          try {
            push.apply( results, slice.call( newContext.querySelectorAll(
              newSelector
            ), 0 ) );
            return results;
          } catch(qsaError) {
          } finally {
            if ( !old ) {
              context.removeAttribute("id");
            }
          }
        }
      }

      return oldSelect( selector, context, results, seed, xml );
    };

    if ( matches ) {
      assert(function( div ) {
        // Check to see if it's possible to do matchesSelector
        // on a disconnected node (IE 9)
        disconnectedMatch = matches.call( div, "div" );

        // This should fail with an exception
        // Gecko does not error, returns false instead
        try {
          matches.call( div, "[test!='']:sizzle" );
          rbuggyMatches.push( "!=", pseudos );
        } catch ( e ) {}
      });

      // rbuggyMatches always contains :active and :focus, so no need for a length check
      rbuggyMatches = /* rbuggyMatches.length && */ new RegExp( rbuggyMatches.join("|") );

      Sizzle.matchesSelector = function( elem, expr ) {
        // Make sure that attribute selectors are quoted
        expr = expr.replace( rattributeQuotes, "='$1']" );

        // rbuggyMatches always contains :active, so no need for an existence check
        if ( !isXML( elem ) && !rbuggyMatches.test( expr ) && !rbuggyQSA.test( expr ) ) {
          try {
            var ret = matches.call( elem, expr );

            // IE 9's matchesSelector returns false on disconnected nodes
            if ( ret || disconnectedMatch ||
                // As well, disconnected nodes are said to be in a document
                // fragment in IE 9
                elem.document && elem.document.nodeType !== 11 ) {
              return ret;
            }
          } catch(e) {}
        }

        return Sizzle( expr, null, null, [ elem ] ).length > 0;
      };
    }
  })();
}

// Deprecated
Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Back-compat
function setFilters() {}
Expr.filters = setFilters.prototype = Expr.pseudos;
Expr.setFilters = new setFilters();

// Override sizzle attribute retrieval
Sizzle.attr = jQuery.attr;
jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;


})( window );
var runtil = /Until$/,
  rparentsprev = /^(?:parents|prev(?:Until|All))/,
  isSimple = /^.[^:#\[\.,]*$/,
  rneedsContext = jQuery.expr.match.needsContext,
  // methods guaranteed to produce a unique set when starting from a unique set
  guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };

jQuery.fn.extend({
  find: function( selector ) {
    var i, l, length, n, r, ret,
      self = this;

    if ( typeof selector !== "string" ) {
      return jQuery( selector ).filter(function() {
        for ( i = 0, l = self.length; i < l; i++ ) {
          if ( jQuery.contains( self[ i ], this ) ) {
            return true;
          }
        }
      });
    }

    ret = this.pushStack( "", "find", selector );

    for ( i = 0, l = this.length; i < l; i++ ) {
      length = ret.length;
      jQuery.find( selector, this[i], ret );

      if ( i > 0 ) {
        // Make sure that the results are unique
        for ( n = length; n < ret.length; n++ ) {
          for ( r = 0; r < length; r++ ) {
            if ( ret[r] === ret[n] ) {
              ret.splice(n--, 1);
              break;
            }
          }
        }
      }
    }

    return ret;
  },

  has: function( target ) {
    var i,
      targets = jQuery( target, this ),
      len = targets.length;

    return this.filter(function() {
      for ( i = 0; i < len; i++ ) {
        if ( jQuery.contains( this, targets[i] ) ) {
          return true;
        }
      }
    });
  },

  not: function( selector ) {
    return this.pushStack( winnow(this, selector, false), "not", selector);
  },

  filter: function( selector ) {
    return this.pushStack( winnow(this, selector, true), "filter", selector );
  },

  is: function( selector ) {
    return !!selector && (
      typeof selector === "string" ?
        // If this is a positional/relative selector, check membership in the returned set
        // so $("p:first").is("p:last") won't return true for a doc with two "p".
        rneedsContext.test( selector ) ?
          jQuery( selector, this.context ).index( this[0] ) >= 0 :
          jQuery.filter( selector, this ).length > 0 :
        this.filter( selector ).length > 0 );
  },

  closest: function( selectors, context ) {
    var cur,
      i = 0,
      l = this.length,
      ret = [],
      pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
        jQuery( selectors, context || this.context ) :
        0;

    for ( ; i < l; i++ ) {
      cur = this[i];

      while ( cur && cur.ownerDocument && cur !== context && cur.nodeType !== 11 ) {
        if ( pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors) ) {
          ret.push( cur );
          break;
        }
        cur = cur.parentNode;
      }
    }

    ret = ret.length > 1 ? jQuery.unique( ret ) : ret;

    return this.pushStack( ret, "closest", selectors );
  },

  // Determine the position of an element within
  // the matched set of elements
  index: function( elem ) {

    // No argument, return index in parent
    if ( !elem ) {
      return ( this[0] && this[0].parentNode ) ? this.prevAll().length : -1;
    }

    // index in selector
    if ( typeof elem === "string" ) {
      return jQuery.inArray( this[0], jQuery( elem ) );
    }

    // Locate the position of the desired element
    return jQuery.inArray(
      // If it receives a jQuery object, the first element is used
      elem.jquery ? elem[0] : elem, this );
  },

  add: function( selector, context ) {
    var set = typeof selector === "string" ?
        jQuery( selector, context ) :
        jQuery.makeArray( selector && selector.nodeType ? [ selector ] : selector ),
      all = jQuery.merge( this.get(), set );

    return this.pushStack( isDisconnected( set[0] ) || isDisconnected( all[0] ) ?
      all :
      jQuery.unique( all ) );
  },

  addBack: function( selector ) {
    return this.add( selector == null ?
      this.prevObject : this.prevObject.filter(selector)
    );
  }
});

jQuery.fn.andSelf = jQuery.fn.addBack;

// A painfully simple check to see if an element is disconnected
// from a document (should be improved, where feasible).
function isDisconnected( node ) {
  return !node || !node.parentNode || node.parentNode.nodeType === 11;
}

function sibling( cur, dir ) {
  do {
    cur = cur[ dir ];
  } while ( cur && cur.nodeType !== 1 );

  return cur;
}

jQuery.each({
  parent: function( elem ) {
    var parent = elem.parentNode;
    return parent && parent.nodeType !== 11 ? parent : null;
  },
  parents: function( elem ) {
    return jQuery.dir( elem, "parentNode" );
  },
  parentsUntil: function( elem, i, until ) {
    return jQuery.dir( elem, "parentNode", until );
  },
  next: function( elem ) {
    return sibling( elem, "nextSibling" );
  },
  prev: function( elem ) {
    return sibling( elem, "previousSibling" );
  },
  nextAll: function( elem ) {
    return jQuery.dir( elem, "nextSibling" );
  },
  prevAll: function( elem ) {
    return jQuery.dir( elem, "previousSibling" );
  },
  nextUntil: function( elem, i, until ) {
    return jQuery.dir( elem, "nextSibling", until );
  },
  prevUntil: function( elem, i, until ) {
    return jQuery.dir( elem, "previousSibling", until );
  },
  siblings: function( elem ) {
    return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
  },
  children: function( elem ) {
    return jQuery.sibling( elem.firstChild );
  },
  contents: function( elem ) {
    return jQuery.nodeName( elem, "iframe" ) ?
      elem.contentDocument || elem.contentWindow.document :
      jQuery.merge( [], elem.childNodes );
  }
}, function( name, fn ) {
  jQuery.fn[ name ] = function( until, selector ) {
    var ret = jQuery.map( this, fn, until );

    if ( !runtil.test( name ) ) {
      selector = until;
    }

    if ( selector && typeof selector === "string" ) {
      ret = jQuery.filter( selector, ret );
    }

    ret = this.length > 1 && !guaranteedUnique[ name ] ? jQuery.unique( ret ) : ret;

    if ( this.length > 1 && rparentsprev.test( name ) ) {
      ret = ret.reverse();
    }

    return this.pushStack( ret, name, core_slice.call( arguments ).join(",") );
  };
});

jQuery.extend({
  filter: function( expr, elems, not ) {
    if ( not ) {
      expr = ":not(" + expr + ")";
    }

    return elems.length === 1 ?
      jQuery.find.matchesSelector(elems[0], expr) ? [ elems[0] ] : [] :
      jQuery.find.matches(expr, elems);
  },

  dir: function( elem, dir, until ) {
    var matched = [],
      cur = elem[ dir ];

    while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
      if ( cur.nodeType === 1 ) {
        matched.push( cur );
      }
      cur = cur[dir];
    }
    return matched;
  },

  sibling: function( n, elem ) {
    var r = [];

    for ( ; n; n = n.nextSibling ) {
      if ( n.nodeType === 1 && n !== elem ) {
        r.push( n );
      }
    }

    return r;
  }
});

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, keep ) {

  // Can't pass null or undefined to indexOf in Firefox 4
  // Set to 0 to skip string check
  qualifier = qualifier || 0;

  if ( jQuery.isFunction( qualifier ) ) {
    return jQuery.grep(elements, function( elem, i ) {
      var retVal = !!qualifier.call( elem, i, elem );
      return retVal === keep;
    });

  } else if ( qualifier.nodeType ) {
    return jQuery.grep(elements, function( elem, i ) {
      return ( elem === qualifier ) === keep;
    });

  } else if ( typeof qualifier === "string" ) {
    var filtered = jQuery.grep(elements, function( elem ) {
      return elem.nodeType === 1;
    });

    if ( isSimple.test( qualifier ) ) {
      return jQuery.filter(qualifier, filtered, !keep);
    } else {
      qualifier = jQuery.filter( qualifier, filtered );
    }
  }

  return jQuery.grep(elements, function( elem, i ) {
    return ( jQuery.inArray( elem, qualifier ) >= 0 ) === keep;
  });
}
function createSafeFragment( document ) {
  var list = nodeNames.split( "|" ),
  safeFrag = document.createDocumentFragment();

  if ( safeFrag.createElement ) {
    while ( list.length ) {
      safeFrag.createElement(
        list.pop()
      );
    }
  }
  return safeFrag;
}

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
    "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
  rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
  rleadingWhitespace = /^\s+/,
  rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
  rtagName = /<([\w:]+)/,
  rtbody = /<tbody/i,
  rhtml = /<|&#?\w+;/,
  rnoInnerhtml = /<(?:script|style|link)/i,
  rnocache = /<(?:script|object|embed|option|style)/i,
  rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
  rcheckableType = /^(?:checkbox|radio)$/,
  // checked="checked" or checked
  rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
  rscriptType = /\/(java|ecma)script/i,
  rcleanScript = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
  wrapMap = {
    option: [ 1, "<select multiple='multiple'>", "</select>" ],
    legend: [ 1, "<fieldset>", "</fieldset>" ],
    thead: [ 1, "<table>", "</table>" ],
    tr: [ 2, "<table><tbody>", "</tbody></table>" ],
    td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
    col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
    area: [ 1, "<map>", "</map>" ],
    _default: [ 0, "", "" ]
  },
  safeFragment = createSafeFragment( document ),
  fragmentDiv = safeFragment.appendChild( document.createElement("div") );

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
// unless wrapped in a div with non-breaking characters in front of it.
if ( !jQuery.support.htmlSerialize ) {
  wrapMap._default = [ 1, "X<div>", "</div>" ];
}

jQuery.fn.extend({
  text: function( value ) {
    return jQuery.access( this, function( value ) {
      return value === undefined ?
        jQuery.text( this ) :
        this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
    }, null, value, arguments.length );
  },

  wrapAll: function( html ) {
    if ( jQuery.isFunction( html ) ) {
      return this.each(function(i) {
        jQuery(this).wrapAll( html.call(this, i) );
      });
    }

    if ( this[0] ) {
      // The elements to wrap the target around
      var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

      if ( this[0].parentNode ) {
        wrap.insertBefore( this[0] );
      }

      wrap.map(function() {
        var elem = this;

        while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
          elem = elem.firstChild;
        }

        return elem;
      }).append( this );
    }

    return this;
  },

  wrapInner: function( html ) {
    if ( jQuery.isFunction( html ) ) {
      return this.each(function(i) {
        jQuery(this).wrapInner( html.call(this, i) );
      });
    }

    return this.each(function() {
      var self = jQuery( this ),
        contents = self.contents();

      if ( contents.length ) {
        contents.wrapAll( html );

      } else {
        self.append( html );
      }
    });
  },

  wrap: function( html ) {
    var isFunction = jQuery.isFunction( html );

    return this.each(function(i) {
      jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
    });
  },

  unwrap: function() {
    return this.parent().each(function() {
      if ( !jQuery.nodeName( this, "body" ) ) {
        jQuery( this ).replaceWith( this.childNodes );
      }
    }).end();
  },

  append: function() {
    return this.domManip(arguments, true, function( elem ) {
      if ( this.nodeType === 1 || this.nodeType === 11 ) {
        this.appendChild( elem );
      }
    });
  },

  prepend: function() {
    return this.domManip(arguments, true, function( elem ) {
      if ( this.nodeType === 1 || this.nodeType === 11 ) {
        this.insertBefore( elem, this.firstChild );
      }
    });
  },

  before: function() {
    if ( !isDisconnected( this[0] ) ) {
      return this.domManip(arguments, false, function( elem ) {
        this.parentNode.insertBefore( elem, this );
      });
    }

    if ( arguments.length ) {
      var set = jQuery.clean( arguments );
      return this.pushStack( jQuery.merge( set, this ), "before", this.selector );
    }
  },

  after: function() {
    if ( !isDisconnected( this[0] ) ) {
      return this.domManip(arguments, false, function( elem ) {
        this.parentNode.insertBefore( elem, this.nextSibling );
      });
    }

    if ( arguments.length ) {
      var set = jQuery.clean( arguments );
      return this.pushStack( jQuery.merge( this, set ), "after", this.selector );
    }
  },

  // keepData is for internal use only--do not document
  remove: function( selector, keepData ) {
    var elem,
      i = 0;

    for ( ; (elem = this[i]) != null; i++ ) {
      if ( !selector || jQuery.filter( selector, [ elem ] ).length ) {
        if ( !keepData && elem.nodeType === 1 ) {
          jQuery.cleanData( elem.getElementsByTagName("*") );
          jQuery.cleanData( [ elem ] );
        }

        if ( elem.parentNode ) {
          elem.parentNode.removeChild( elem );
        }
      }
    }

    return this;
  },

  empty: function() {
    var elem,
      i = 0;

    for ( ; (elem = this[i]) != null; i++ ) {
      // Remove element nodes and prevent memory leaks
      if ( elem.nodeType === 1 ) {
        jQuery.cleanData( elem.getElementsByTagName("*") );
      }

      // Remove any remaining nodes
      while ( elem.firstChild ) {
        elem.removeChild( elem.firstChild );
      }
    }

    return this;
  },

  clone: function( dataAndEvents, deepDataAndEvents ) {
    dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
    deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

    return this.map( function () {
      return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
    });
  },

  html: function( value ) {
    return jQuery.access( this, function( value ) {
      var elem = this[0] || {},
        i = 0,
        l = this.length;

      if ( value === undefined ) {
        return elem.nodeType === 1 ?
          elem.innerHTML.replace( rinlinejQuery, "" ) :
          undefined;
      }

      // See if we can take a shortcut and just use innerHTML
      if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
        ( jQuery.support.htmlSerialize || !rnoshimcache.test( value )  ) &&
        ( jQuery.support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
        !wrapMap[ ( rtagName.exec( value ) || ["", ""] )[1].toLowerCase() ] ) {

        value = value.replace( rxhtmlTag, "<$1></$2>" );

        try {
          for (; i < l; i++ ) {
            // Remove element nodes and prevent memory leaks
            elem = this[i] || {};
            if ( elem.nodeType === 1 ) {
              jQuery.cleanData( elem.getElementsByTagName( "*" ) );
              elem.innerHTML = value;
            }
          }

          elem = 0;

        // If using innerHTML throws an exception, use the fallback method
        } catch(e) {}
      }

      if ( elem ) {
        this.empty().append( value );
      }
    }, null, value, arguments.length );
  },

  replaceWith: function( value ) {
    if ( !isDisconnected( this[0] ) ) {
      // Make sure that the elements are removed from the DOM before they are inserted
      // this can help fix replacing a parent with child elements
      if ( jQuery.isFunction( value ) ) {
        return this.each(function(i) {
          var self = jQuery(this), old = self.html();
          self.replaceWith( value.call( this, i, old ) );
        });
      }

      if ( typeof value !== "string" ) {
        value = jQuery( value ).detach();
      }

      return this.each(function() {
        var next = this.nextSibling,
          parent = this.parentNode;

        jQuery( this ).remove();

        if ( next ) {
          jQuery(next).before( value );
        } else {
          jQuery(parent).append( value );
        }
      });
    }

    return this.length ?
      this.pushStack( jQuery(jQuery.isFunction(value) ? value() : value), "replaceWith", value ) :
      this;
  },

  detach: function( selector ) {
    return this.remove( selector, true );
  },

  domManip: function( args, table, callback ) {

    // Flatten any nested arrays
    args = [].concat.apply( [], args );

    var results, first, fragment, iNoClone,
      i = 0,
      value = args[0],
      scripts = [],
      l = this.length;

    // We can't cloneNode fragments that contain checked, in WebKit
    if ( !jQuery.support.checkClone && l > 1 && typeof value === "string" && rchecked.test( value ) ) {
      return this.each(function() {
        jQuery(this).domManip( args, table, callback );
      });
    }

    if ( jQuery.isFunction(value) ) {
      return this.each(function(i) {
        var self = jQuery(this);
        args[0] = value.call( this, i, table ? self.html() : undefined );
        self.domManip( args, table, callback );
      });
    }

    if ( this[0] ) {
      results = jQuery.buildFragment( args, this, scripts );
      fragment = results.fragment;
      first = fragment.firstChild;

      if ( fragment.childNodes.length === 1 ) {
        fragment = first;
      }

      if ( first ) {
        table = table && jQuery.nodeName( first, "tr" );

        // Use the original fragment for the last item instead of the first because it can end up
        // being emptied incorrectly in certain situations (#8070).
        // Fragments from the fragment cache must always be cloned and never used in place.
        for ( iNoClone = results.cacheable || l - 1; i < l; i++ ) {
          callback.call(
            table && jQuery.nodeName( this[i], "table" ) ?
              findOrAppend( this[i], "tbody" ) :
              this[i],
            i === iNoClone ?
              fragment :
              jQuery.clone( fragment, true, true )
          );
        }
      }

      // Fix #11809: Avoid leaking memory
      fragment = first = null;

      if ( scripts.length ) {
        jQuery.each( scripts, function( i, elem ) {
          if ( elem.src ) {
            if ( jQuery.ajax ) {
              jQuery.ajax({
                url: elem.src,
                type: "GET",
                dataType: "script",
                async: false,
                global: false,
                "throws": true
              });
            } else {
              jQuery.error("no ajax");
            }
          } else {
            jQuery.globalEval( ( elem.text || elem.textContent || elem.innerHTML || "" ).replace( rcleanScript, "" ) );
          }

          if ( elem.parentNode ) {
            elem.parentNode.removeChild( elem );
          }
        });
      }
    }

    return this;
  }
});

function findOrAppend( elem, tag ) {
  return elem.getElementsByTagName( tag )[0] || elem.appendChild( elem.ownerDocument.createElement( tag ) );
}

function cloneCopyEvent( src, dest ) {

  if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
    return;
  }

  var type, i, l,
    oldData = jQuery._data( src ),
    curData = jQuery._data( dest, oldData ),
    events = oldData.events;

  if ( events ) {
    delete curData.handle;
    curData.events = {};

    for ( type in events ) {
      for ( i = 0, l = events[ type ].length; i < l; i++ ) {
        jQuery.event.add( dest, type, events[ type ][ i ] );
      }
    }
  }

  // make the cloned public data object a copy from the original
  if ( curData.data ) {
    curData.data = jQuery.extend( {}, curData.data );
  }
}

function cloneFixAttributes( src, dest ) {
  var nodeName;

  // We do not need to do anything for non-Elements
  if ( dest.nodeType !== 1 ) {
    return;
  }

  // clearAttributes removes the attributes, which we don't want,
  // but also removes the attachEvent events, which we *do* want
  if ( dest.clearAttributes ) {
    dest.clearAttributes();
  }

  // mergeAttributes, in contrast, only merges back on the
  // original attributes, not the events
  if ( dest.mergeAttributes ) {
    dest.mergeAttributes( src );
  }

  nodeName = dest.nodeName.toLowerCase();

  if ( nodeName === "object" ) {
    // IE6-10 improperly clones children of object elements using classid.
    // IE10 throws NoModificationAllowedError if parent is null, #12132.
    if ( dest.parentNode ) {
      dest.outerHTML = src.outerHTML;
    }

    // This path appears unavoidable for IE9. When cloning an object
    // element in IE9, the outerHTML strategy above is not sufficient.
    // If the src has innerHTML and the destination does not,
    // copy the src.innerHTML into the dest.innerHTML. #10324
    if ( jQuery.support.html5Clone && (src.innerHTML && !jQuery.trim(dest.innerHTML)) ) {
      dest.innerHTML = src.innerHTML;
    }

  } else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
    // IE6-8 fails to persist the checked state of a cloned checkbox
    // or radio button. Worse, IE6-7 fail to give the cloned element
    // a checked appearance if the defaultChecked value isn't also set

    dest.defaultChecked = dest.checked = src.checked;

    // IE6-7 get confused and end up setting the value of a cloned
    // checkbox/radio button to an empty string instead of "on"
    if ( dest.value !== src.value ) {
      dest.value = src.value;
    }

  // IE6-8 fails to return the selected option to the default selected
  // state when cloning options
  } else if ( nodeName === "option" ) {
    dest.selected = src.defaultSelected;

  // IE6-8 fails to set the defaultValue to the correct value when
  // cloning other types of input fields
  } else if ( nodeName === "input" || nodeName === "textarea" ) {
    dest.defaultValue = src.defaultValue;

  // IE blanks contents when cloning scripts
  } else if ( nodeName === "script" && dest.text !== src.text ) {
    dest.text = src.text;
  }

  // Event data gets referenced instead of copied if the expando
  // gets copied too
  dest.removeAttribute( jQuery.expando );
}

jQuery.buildFragment = function( args, context, scripts ) {
  var fragment, cacheable, cachehit,
    first = args[ 0 ];

  // Set context from what may come in as undefined or a jQuery collection or a node
  // Updated to fix #12266 where accessing context[0] could throw an exception in IE9/10 &
  // also doubles as fix for #8950 where plain objects caused createDocumentFragment exception
  context = context || document;
  context = !context.nodeType && context[0] || context;
  context = context.ownerDocument || context;

  // Only cache "small" (1/2 KB) HTML strings that are associated with the main document
  // Cloning options loses the selected state, so don't cache them
  // IE 6 doesn't like it when you put <object> or <embed> elements in a fragment
  // Also, WebKit does not clone 'checked' attributes on cloneNode, so don't cache
  // Lastly, IE6,7,8 will not correctly reuse cached fragments that were created from unknown elems #10501
  if ( args.length === 1 && typeof first === "string" && first.length < 512 && context === document &&
    first.charAt(0) === "<" && !rnocache.test( first ) &&
    (jQuery.support.checkClone || !rchecked.test( first )) &&
    (jQuery.support.html5Clone || !rnoshimcache.test( first )) ) {

    // Mark cacheable and look for a hit
    cacheable = true;
    fragment = jQuery.fragments[ first ];
    cachehit = fragment !== undefined;
  }

  if ( !fragment ) {
    fragment = context.createDocumentFragment();
    jQuery.clean( args, context, fragment, scripts );

    // Update the cache, but only store false
    // unless this is a second parsing of the same content
    if ( cacheable ) {
      jQuery.fragments[ first ] = cachehit && fragment;
    }
  }

  return { fragment: fragment, cacheable: cacheable };
};

jQuery.fragments = {};

jQuery.each({
  appendTo: "append",
  prependTo: "prepend",
  insertBefore: "before",
  insertAfter: "after",
  replaceAll: "replaceWith"
}, function( name, original ) {
  jQuery.fn[ name ] = function( selector ) {
    var elems,
      i = 0,
      ret = [],
      insert = jQuery( selector ),
      l = insert.length,
      parent = this.length === 1 && this[0].parentNode;

    if ( (parent == null || parent && parent.nodeType === 11 && parent.childNodes.length === 1) && l === 1 ) {
      insert[ original ]( this[0] );
      return this;
    } else {
      for ( ; i < l; i++ ) {
        elems = ( i > 0 ? this.clone(true) : this ).get();
        jQuery( insert[i] )[ original ]( elems );
        ret = ret.concat( elems );
      }

      return this.pushStack( ret, name, insert.selector );
    }
  };
});

function getAll( elem ) {
  if ( typeof elem.getElementsByTagName !== "undefined" ) {
    return elem.getElementsByTagName( "*" );

  } else if ( typeof elem.querySelectorAll !== "undefined" ) {
    return elem.querySelectorAll( "*" );

  } else {
    return [];
  }
}

// Used in clean, fixes the defaultChecked property
function fixDefaultChecked( elem ) {
  if ( rcheckableType.test( elem.type ) ) {
    elem.defaultChecked = elem.checked;
  }
}

jQuery.extend({
  clone: function( elem, dataAndEvents, deepDataAndEvents ) {
    var srcElements,
      destElements,
      i,
      clone;

    if ( jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
      clone = elem.cloneNode( true );

    // IE<=8 does not properly clone detached, unknown element nodes
    } else {
      fragmentDiv.innerHTML = elem.outerHTML;
      fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
    }

    if ( (!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) &&
        (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {
      // IE copies events bound via attachEvent when using cloneNode.
      // Calling detachEvent on the clone will also remove the events
      // from the original. In order to get around this, we use some
      // proprietary methods to clear the events. Thanks to MooTools
      // guys for this hotness.

      cloneFixAttributes( elem, clone );

      // Using Sizzle here is crazy slow, so we use getElementsByTagName instead
      srcElements = getAll( elem );
      destElements = getAll( clone );

      // Weird iteration because IE will replace the length property
      // with an element if you are cloning the body and one of the
      // elements on the page has a name or id of "length"
      for ( i = 0; srcElements[i]; ++i ) {
        // Ensure that the destination node is not null; Fixes #9587
        if ( destElements[i] ) {
          cloneFixAttributes( srcElements[i], destElements[i] );
        }
      }
    }

    // Copy the events from the original to the clone
    if ( dataAndEvents ) {
      cloneCopyEvent( elem, clone );

      if ( deepDataAndEvents ) {
        srcElements = getAll( elem );
        destElements = getAll( clone );

        for ( i = 0; srcElements[i]; ++i ) {
          cloneCopyEvent( srcElements[i], destElements[i] );
        }
      }
    }

    srcElements = destElements = null;

    // Return the cloned set
    return clone;
  },

  clean: function( elems, context, fragment, scripts ) {
    var i, j, elem, tag, wrap, depth, div, hasBody, tbody, len, handleScript, jsTags,
      safe = context === document && safeFragment,
      ret = [];

    // Ensure that context is a document
    if ( !context || typeof context.createDocumentFragment === "undefined" ) {
      context = document;
    }

    // Use the already-created safe fragment if context permits
    for ( i = 0; (elem = elems[i]) != null; i++ ) {
      if ( typeof elem === "number" ) {
        elem += "";
      }

      if ( !elem ) {
        continue;
      }

      // Convert html string into DOM nodes
      if ( typeof elem === "string" ) {
        if ( !rhtml.test( elem ) ) {
          elem = context.createTextNode( elem );
        } else {
          // Ensure a safe container in which to render the html
          safe = safe || createSafeFragment( context );
          div = context.createElement("div");
          safe.appendChild( div );

          // Fix "XHTML"-style tags in all browsers
          elem = elem.replace(rxhtmlTag, "<$1></$2>");

          // Go to html and back, then peel off extra wrappers
          tag = ( rtagName.exec( elem ) || ["", ""] )[1].toLowerCase();
          wrap = wrapMap[ tag ] || wrapMap._default;
          depth = wrap[0];
          div.innerHTML = wrap[1] + elem + wrap[2];

          // Move to the right depth
          while ( depth-- ) {
            div = div.lastChild;
          }

          // Remove IE's autoinserted <tbody> from table fragments
          if ( !jQuery.support.tbody ) {

            // String was a <table>, *may* have spurious <tbody>
            hasBody = rtbody.test(elem);
              tbody = tag === "table" && !hasBody ?
                div.firstChild && div.firstChild.childNodes :

                // String was a bare <thead> or <tfoot>
                wrap[1] === "<table>" && !hasBody ?
                  div.childNodes :
                  [];

            for ( j = tbody.length - 1; j >= 0 ; --j ) {
              if ( jQuery.nodeName( tbody[ j ], "tbody" ) && !tbody[ j ].childNodes.length ) {
                tbody[ j ].parentNode.removeChild( tbody[ j ] );
              }
            }
          }

          // IE completely kills leading whitespace when innerHTML is used
          if ( !jQuery.support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
            div.insertBefore( context.createTextNode( rleadingWhitespace.exec(elem)[0] ), div.firstChild );
          }

          elem = div.childNodes;

          // Take out of fragment container (we need a fresh div each time)
          div.parentNode.removeChild( div );
        }
      }

      if ( elem.nodeType ) {
        ret.push( elem );
      } else {
        jQuery.merge( ret, elem );
      }
    }

    // Fix #11356: Clear elements from safeFragment
    if ( div ) {
      elem = div = safe = null;
    }

    // Reset defaultChecked for any radios and checkboxes
    // about to be appended to the DOM in IE 6/7 (#8060)
    if ( !jQuery.support.appendChecked ) {
      for ( i = 0; (elem = ret[i]) != null; i++ ) {
        if ( jQuery.nodeName( elem, "input" ) ) {
          fixDefaultChecked( elem );
        } else if ( typeof elem.getElementsByTagName !== "undefined" ) {
          jQuery.grep( elem.getElementsByTagName("input"), fixDefaultChecked );
        }
      }
    }

    // Append elements to a provided document fragment
    if ( fragment ) {
      // Special handling of each script element
      handleScript = function( elem ) {
        // Check if we consider it executable
        if ( !elem.type || rscriptType.test( elem.type ) ) {
          // Detach the script and store it in the scripts array (if provided) or the fragment
          // Return truthy to indicate that it has been handled
          return scripts ?
            scripts.push( elem.parentNode ? elem.parentNode.removeChild( elem ) : elem ) :
            fragment.appendChild( elem );
        }
      };

      for ( i = 0; (elem = ret[i]) != null; i++ ) {
        // Check if we're done after handling an executable script
        if ( !( jQuery.nodeName( elem, "script" ) && handleScript( elem ) ) ) {
          // Append to fragment and handle embedded scripts
          fragment.appendChild( elem );
          if ( typeof elem.getElementsByTagName !== "undefined" ) {
            // handleScript alters the DOM, so use jQuery.merge to ensure snapshot iteration
            jsTags = jQuery.grep( jQuery.merge( [], elem.getElementsByTagName("script") ), handleScript );

            // Splice the scripts into ret after their former ancestor and advance our index beyond them
            ret.splice.apply( ret, [i + 1, 0].concat( jsTags ) );
            i += jsTags.length;
          }
        }
      }
    }

    return ret;
  },

  cleanData: function( elems, /* internal */ acceptData ) {
    var data, id, elem, type,
      i = 0,
      internalKey = jQuery.expando,
      cache = jQuery.cache,
      deleteExpando = jQuery.support.deleteExpando,
      special = jQuery.event.special;

    for ( ; (elem = elems[i]) != null; i++ ) {

      if ( acceptData || jQuery.acceptData( elem ) ) {

        id = elem[ internalKey ];
        data = id && cache[ id ];

        if ( data ) {
          if ( data.events ) {
            for ( type in data.events ) {
              if ( special[ type ] ) {
                jQuery.event.remove( elem, type );

              // This is a shortcut to avoid jQuery.event.remove's overhead
              } else {
                jQuery.removeEvent( elem, type, data.handle );
              }
            }
          }

          // Remove cache only if it was not already removed by jQuery.event.remove
          if ( cache[ id ] ) {

            delete cache[ id ];

            // IE does not allow us to delete expando properties from nodes,
            // nor does it have a removeAttribute function on Document nodes;
            // we must handle all of these cases
            if ( deleteExpando ) {
              delete elem[ internalKey ];

            } else if ( elem.removeAttribute ) {
              elem.removeAttribute( internalKey );

            } else {
              elem[ internalKey ] = null;
            }

            jQuery.deletedIds.push( id );
          }
        }
      }
    }
  }
});
// Limit scope pollution from any deprecated API
(function() {

var matched, browser;

// Use of jQuery.browser is frowned upon.
// More details: http://api.jquery.com/jQuery.browser
// jQuery.uaMatch maintained for back-compat
jQuery.uaMatch = function( ua ) {
  ua = ua.toLowerCase();

  var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
    /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
    /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
    /(msie) ([\w.]+)/.exec( ua ) ||
    ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
    [];

  return {
    browser: match[ 1 ] || "",
    version: match[ 2 ] || "0"
  };
};

matched = jQuery.uaMatch( navigator.userAgent );
browser = {};

if ( matched.browser ) {
  browser[ matched.browser ] = true;
  browser.version = matched.version;
}

// Chrome is Webkit, but Webkit is also Safari.
if ( browser.chrome ) {
  browser.webkit = true;
} else if ( browser.webkit ) {
  browser.safari = true;
}

jQuery.browser = browser;

jQuery.sub = function() {
  function jQuerySub( selector, context ) {
    return new jQuerySub.fn.init( selector, context );
  }
  jQuery.extend( true, jQuerySub, this );
  jQuerySub.superclass = this;
  jQuerySub.fn = jQuerySub.prototype = this();
  jQuerySub.fn.constructor = jQuerySub;
  jQuerySub.sub = this.sub;
  jQuerySub.fn.init = function init( selector, context ) {
    if ( context && context instanceof jQuery && !(context instanceof jQuerySub) ) {
      context = jQuerySub( context );
    }

    return jQuery.fn.init.call( this, selector, context, rootjQuerySub );
  };
  jQuerySub.fn.init.prototype = jQuerySub.fn;
  var rootjQuerySub = jQuerySub(document);
  return jQuerySub;
};

})();
var curCSS, iframe, iframeDoc,
  ralpha = /alpha\([^)]*\)/i,
  ropacity = /opacity=([^)]*)/,
  rposition = /^(top|right|bottom|left)$/,
  // swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
  // see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
  rdisplayswap = /^(none|table(?!-c[ea]).+)/,
  rmargin = /^margin/,
  rnumsplit = new RegExp( "^(" + core_pnum + ")(.*)$", "i" ),
  rnumnonpx = new RegExp( "^(" + core_pnum + ")(?!px)[a-z%]+$", "i" ),
  rrelNum = new RegExp( "^([-+])=(" + core_pnum + ")", "i" ),
  elemdisplay = { BODY: "block" },

  cssShow = { position: "absolute", visibility: "hidden", display: "block" },
  cssNormalTransform = {
    letterSpacing: 0,
    fontWeight: 400
  },

  cssExpand = [ "Top", "Right", "Bottom", "Left" ],
  cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],

  eventsToggle = jQuery.fn.toggle;

// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

  // shortcut for names that are not vendor prefixed
  if ( name in style ) {
    return name;
  }

  // check for vendor prefixed names
  var capName = name.charAt(0).toUpperCase() + name.slice(1),
    origName = name,
    i = cssPrefixes.length;

  while ( i-- ) {
    name = cssPrefixes[ i ] + capName;
    if ( name in style ) {
      return name;
    }
  }

  return origName;
}

function isHidden( elem, el ) {
  elem = el || elem;
  return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
}

function showHide( elements, show ) {
  var elem, display,
    values = [],
    index = 0,
    length = elements.length;

  for ( ; index < length; index++ ) {
    elem = elements[ index ];
    if ( !elem.style ) {
      continue;
    }
    values[ index ] = jQuery._data( elem, "olddisplay" );
    if ( show ) {
      // Reset the inline display of this element to learn if it is
      // being hidden by cascaded rules or not
      if ( !values[ index ] && elem.style.display === "none" ) {
        elem.style.display = "";
      }

      // Set elements which have been overridden with display: none
      // in a stylesheet to whatever the default browser style is
      // for such an element
      if ( elem.style.display === "" && isHidden( elem ) ) {
        values[ index ] = jQuery._data( elem, "olddisplay", css_defaultDisplay(elem.nodeName) );
      }
    } else {
      display = curCSS( elem, "display" );

      if ( !values[ index ] && display !== "none" ) {
        jQuery._data( elem, "olddisplay", display );
      }
    }
  }

  // Set the display of most of the elements in a second loop
  // to avoid the constant reflow
  for ( index = 0; index < length; index++ ) {
    elem = elements[ index ];
    if ( !elem.style ) {
      continue;
    }
    if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
      elem.style.display = show ? values[ index ] || "" : "none";
    }
  }

  return elements;
}

jQuery.fn.extend({
  css: function( name, value ) {
    return jQuery.access( this, function( elem, name, value ) {
      return value !== undefined ?
        jQuery.style( elem, name, value ) :
        jQuery.css( elem, name );
    }, name, value, arguments.length > 1 );
  },
  show: function() {
    return showHide( this, true );
  },
  hide: function() {
    return showHide( this );
  },
  toggle: function( state, fn2 ) {
    var bool = typeof state === "boolean";

    if ( jQuery.isFunction( state ) && jQuery.isFunction( fn2 ) ) {
      return eventsToggle.apply( this, arguments );
    }

    return this.each(function() {
      if ( bool ? state : isHidden( this ) ) {
        jQuery( this ).show();
      } else {
        jQuery( this ).hide();
      }
    });
  }
});

jQuery.extend({
  // Add in style property hooks for overriding the default
  // behavior of getting and setting a style property
  cssHooks: {
    opacity: {
      get: function( elem, computed ) {
        if ( computed ) {
          // We should always get a number back from opacity
          var ret = curCSS( elem, "opacity" );
          return ret === "" ? "1" : ret;

        }
      }
    }
  },

  // Exclude the following css properties to add px
  cssNumber: {
    "fillOpacity": true,
    "fontWeight": true,
    "lineHeight": true,
    "opacity": true,
    "orphans": true,
    "widows": true,
    "zIndex": true,
    "zoom": true
  },

  // Add in properties whose names you wish to fix before
  // setting or getting the value
  cssProps: {
    // normalize float css property
    "float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
  },

  // Get and set the style property on a DOM Node
  style: function( elem, name, value, extra ) {
    // Don't set styles on text and comment nodes
    if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
      return;
    }

    // Make sure that we're working with the right name
    var ret, type, hooks,
      origName = jQuery.camelCase( name ),
      style = elem.style;

    name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

    // gets hook for the prefixed version
    // followed by the unprefixed version
    hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

    // Check if we're setting a value
    if ( value !== undefined ) {
      type = typeof value;

      // convert relative number strings (+= or -=) to relative numbers. #7345
      if ( type === "string" && (ret = rrelNum.exec( value )) ) {
        value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
        // Fixes bug #9237
        type = "number";
      }

      // Make sure that NaN and null values aren't set. See: #7116
      if ( value == null || type === "number" && isNaN( value ) ) {
        return;
      }

      // If a number was passed in, add 'px' to the (except for certain CSS properties)
      if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
        value += "px";
      }

      // If a hook was provided, use that value, otherwise just set the specified value
      if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
        // Wrapped to prevent IE from throwing errors when 'invalid' values are provided
        // Fixes bug #5509
        try {
          style[ name ] = value;
        } catch(e) {}
      }

    } else {
      // If a hook was provided get the non-computed value from there
      if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
        return ret;
      }

      // Otherwise just get the value from the style object
      return style[ name ];
    }
  },

  css: function( elem, name, numeric, extra ) {
    var val, num, hooks,
      origName = jQuery.camelCase( name );

    // Make sure that we're working with the right name
    name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

    // gets hook for the prefixed version
    // followed by the unprefixed version
    hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

    // If a hook was provided get the computed value from there
    if ( hooks && "get" in hooks ) {
      val = hooks.get( elem, true, extra );
    }

    // Otherwise, if a way to get the computed value exists, use that
    if ( val === undefined ) {
      val = curCSS( elem, name );
    }

    //convert "normal" to computed value
    if ( val === "normal" && name in cssNormalTransform ) {
      val = cssNormalTransform[ name ];
    }

    // Return, converting to number if forced or a qualifier was provided and val looks numeric
    if ( numeric || extra !== undefined ) {
      num = parseFloat( val );
      return numeric || jQuery.isNumeric( num ) ? num || 0 : val;
    }
    return val;
  },

  // A method for quickly swapping in/out CSS properties to get correct calculations
  swap: function( elem, options, callback ) {
    var ret, name,
      old = {};

    // Remember the old values, and insert the new ones
    for ( name in options ) {
      old[ name ] = elem.style[ name ];
      elem.style[ name ] = options[ name ];
    }

    ret = callback.call( elem );

    // Revert the old values
    for ( name in options ) {
      elem.style[ name ] = old[ name ];
    }

    return ret;
  }
});

// NOTE: To any future maintainer, we've window.getComputedStyle
// because jsdom on node.js will break without it.
if ( window.getComputedStyle ) {
  curCSS = function( elem, name ) {
    var ret, width, minWidth, maxWidth,
      computed = window.getComputedStyle( elem, null ),
      style = elem.style;

    if ( computed ) {

      // getPropertyValue is only needed for .css('filter') in IE9, see #12537
      ret = computed.getPropertyValue( name ) || computed[ name ];

      if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
        ret = jQuery.style( elem, name );
      }

      // A tribute to the "awesome hack by Dean Edwards"
      // Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
      // Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
      // this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
      if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth;

        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width;

        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }

    return ret;
  };
} else if ( document.documentElement.currentStyle ) {
  curCSS = function( elem, name ) {
    var left, rsLeft,
      ret = elem.currentStyle && elem.currentStyle[ name ],
      style = elem.style;

    // Avoid setting ret to empty string here
    // so we don't default to auto
    if ( ret == null && style && style[ name ] ) {
      ret = style[ name ];
    }

    // From the awesome hack by Dean Edwards
    // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

    // If we're not dealing with a regular pixel number
    // but a number that has a weird ending, we need to convert it to pixels
    // but not position css attributes, as those are proportional to the parent element instead
    // and we can't measure the parent instead because it might trigger a "stacking dolls" problem
    if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

      // Remember the original values
      left = style.left;
      rsLeft = elem.runtimeStyle && elem.runtimeStyle.left;

      // Put in the new values to get a computed value out
      if ( rsLeft ) {
        elem.runtimeStyle.left = elem.currentStyle.left;
      }
      style.left = name === "fontSize" ? "1em" : ret;
      ret = style.pixelLeft + "px";

      // Revert the changed values
      style.left = left;
      if ( rsLeft ) {
        elem.runtimeStyle.left = rsLeft;
      }
    }

    return ret === "" ? "auto" : ret;
  };
}

function setPositiveNumber( elem, value, subtract ) {
  var matches = rnumsplit.exec( value );
  return matches ?
      Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
      value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox ) {
  var i = extra === ( isBorderBox ? "border" : "content" ) ?
    // If we already have the right measurement, avoid augmentation
    4 :
    // Otherwise initialize for horizontal or vertical properties
    name === "width" ? 1 : 0,

    val = 0;

  for ( ; i < 4; i += 2 ) {
    // both box models exclude margin, so add it if we want it
    if ( extra === "margin" ) {
      // we use jQuery.css instead of curCSS here
      // because of the reliableMarginRight CSS hook!
      val += jQuery.css( elem, extra + cssExpand[ i ], true );
    }

    // From this point on we use curCSS for maximum performance (relevant in animations)
    if ( isBorderBox ) {
      // border-box includes padding, so remove it if we want content
      if ( extra === "content" ) {
        val -= parseFloat( curCSS( elem, "padding" + cssExpand[ i ] ) ) || 0;
      }

      // at this point, extra isn't border nor margin, so remove border
      if ( extra !== "margin" ) {
        val -= parseFloat( curCSS( elem, "border" + cssExpand[ i ] + "Width" ) ) || 0;
      }
    } else {
      // at this point, extra isn't content, so add padding
      val += parseFloat( curCSS( elem, "padding" + cssExpand[ i ] ) ) || 0;

      // at this point, extra isn't content nor padding, so add border
      if ( extra !== "padding" ) {
        val += parseFloat( curCSS( elem, "border" + cssExpand[ i ] + "Width" ) ) || 0;
      }
    }
  }

  return val;
}

function getWidthOrHeight( elem, name, extra ) {

  // Start with offset property, which is equivalent to the border-box value
  var val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
    valueIsBorderBox = true,
    isBorderBox = jQuery.support.boxSizing && jQuery.css( elem, "boxSizing" ) === "border-box";

  // some non-html elements return undefined for offsetWidth, so check for null/undefined
  // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
  // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
  if ( val <= 0 || val == null ) {
    // Fall back to computed then uncomputed css if necessary
    val = curCSS( elem, name );
    if ( val < 0 || val == null ) {
      val = elem.style[ name ];
    }

    // Computed unit is not pixels. Stop here and return.
    if ( rnumnonpx.test(val) ) {
      return val;
    }

    // we need the check for style in case a browser which returns unreliable values
    // for getComputedStyle silently falls back to the reliable elem.style
    valueIsBorderBox = isBorderBox && ( jQuery.support.boxSizingReliable || val === elem.style[ name ] );

    // Normalize "", auto, and prepare for extra
    val = parseFloat( val ) || 0;
  }

  // use the active box-sizing model to add/subtract irrelevant styles
  return ( val +
    augmentWidthOrHeight(
      elem,
      name,
      extra || ( isBorderBox ? "border" : "content" ),
      valueIsBorderBox
    )
  ) + "px";
}


// Try to determine the default display value of an element
function css_defaultDisplay( nodeName ) {
  if ( elemdisplay[ nodeName ] ) {
    return elemdisplay[ nodeName ];
  }

  var elem = jQuery( "<" + nodeName + ">" ).appendTo( document.body ),
    display = elem.css("display");
  elem.remove();

  // If the simple way fails,
  // get element's real default display by attaching it to a temp iframe
  if ( display === "none" || display === "" ) {
    // Use the already-created iframe if possible
    iframe = document.body.appendChild(
      iframe || jQuery.extend( document.createElement("iframe"), {
        frameBorder: 0,
        width: 0,
        height: 0
      })
    );

    // Create a cacheable copy of the iframe document on first call.
    // IE and Opera will allow us to reuse the iframeDoc without re-writing the fake HTML
    // document to it; WebKit & Firefox won't allow reusing the iframe document.
    if ( !iframeDoc || !iframe.createElement ) {
      iframeDoc = ( iframe.contentWindow || iframe.contentDocument ).document;
      iframeDoc.write("<!doctype html><html><body>");
      iframeDoc.close();
    }

    elem = iframeDoc.body.appendChild( iframeDoc.createElement(nodeName) );

    display = curCSS( elem, "display" );
    document.body.removeChild( iframe );
  }

  // Store the correct default display
  elemdisplay[ nodeName ] = display;

  return display;
}

jQuery.each([ "height", "width" ], function( i, name ) {
  jQuery.cssHooks[ name ] = {
    get: function( elem, computed, extra ) {
      if ( computed ) {
        // certain elements can have dimension info if we invisibly show them
        // however, it must have a current display style that would benefit from this
        if ( elem.offsetWidth === 0 && rdisplayswap.test( curCSS( elem, "display" ) ) ) {
          return jQuery.swap( elem, cssShow, function() {
            return getWidthOrHeight( elem, name, extra );
          });
        } else {
          return getWidthOrHeight( elem, name, extra );
        }
      }
    },

    set: function( elem, value, extra ) {
      return setPositiveNumber( elem, value, extra ?
        augmentWidthOrHeight(
          elem,
          name,
          extra,
          jQuery.support.boxSizing && jQuery.css( elem, "boxSizing" ) === "border-box"
        ) : 0
      );
    }
  };
});

if ( !jQuery.support.opacity ) {
  jQuery.cssHooks.opacity = {
    get: function( elem, computed ) {
      // IE uses filters for opacity
      return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
        ( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
        computed ? "1" : "";
    },

    set: function( elem, value ) {
      var style = elem.style,
        currentStyle = elem.currentStyle,
        opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
        filter = currentStyle && currentStyle.filter || style.filter || "";

      // IE has trouble with opacity if it does not have layout
      // Force it by setting the zoom level
      style.zoom = 1;

      // if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
      if ( value >= 1 && jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
        style.removeAttribute ) {

        // Setting style.filter to null, "" & " " still leave "filter:" in the cssText
        // if "filter:" is present at all, clearType is disabled, we want to avoid this
        // style.removeAttribute is IE Only, but so apparently is this code path...
        style.removeAttribute( "filter" );

        // if there there is no filter style applied in a css rule, we are done
        if ( currentStyle && !currentStyle.filter ) {
          return;
        }
      }

      // otherwise, set new filter values
      style.filter = ralpha.test( filter ) ?
        filter.replace( ralpha, opacity ) :
        filter + " " + opacity;
    }
  };
}

// These hooks cannot be added until DOM ready because the support test
// for it is not run until after DOM ready
jQuery(function() {
  if ( !jQuery.support.reliableMarginRight ) {
    jQuery.cssHooks.marginRight = {
      get: function( elem, computed ) {
        // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
        // Work around by temporarily setting element display to inline-block
        return jQuery.swap( elem, { "display": "inline-block" }, function() {
          if ( computed ) {
            return curCSS( elem, "marginRight" );
          }
        });
      }
    };
  }

  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
  // getComputedStyle returns percent when specified for top/left/bottom/right
  // rather than make the css module depend on the offset module, we just check for it here
  if ( !jQuery.support.pixelPosition && jQuery.fn.position ) {
    jQuery.each( [ "top", "left" ], function( i, prop ) {
      jQuery.cssHooks[ prop ] = {
        get: function( elem, computed ) {
          if ( computed ) {
            var ret = curCSS( elem, prop );
            // if curCSS returns percentage, fallback to offset
            return rnumnonpx.test( ret ) ? jQuery( elem ).position()[ prop ] + "px" : ret;
          }
        }
      };
    });
  }

});

if ( jQuery.expr && jQuery.expr.filters ) {
  jQuery.expr.filters.hidden = function( elem ) {
    return ( elem.offsetWidth === 0 && elem.offsetHeight === 0 ) || (!jQuery.support.reliableHiddenOffsets && ((elem.style && elem.style.display) || curCSS( elem, "display" )) === "none");
  };

  jQuery.expr.filters.visible = function( elem ) {
    return !jQuery.expr.filters.hidden( elem );
  };
}

// These hooks are used by animate to expand properties
jQuery.each({
  margin: "",
  padding: "",
  border: "Width"
}, function( prefix, suffix ) {
  jQuery.cssHooks[ prefix + suffix ] = {
    expand: function( value ) {
      var i,

        // assumes a single number if not a string
        parts = typeof value === "string" ? value.split(" ") : [ value ],
        expanded = {};

      for ( i = 0; i < 4; i++ ) {
        expanded[ prefix + cssExpand[ i ] + suffix ] =
          parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
      }

      return expanded;
    }
  };

  if ( !rmargin.test( prefix ) ) {
    jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
  }
});
var r20 = /%20/g,
  rbracket = /\[\]$/,
  rCRLF = /\r?\n/g,
  rinput = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
  rselectTextarea = /^(?:select|textarea)/i;

jQuery.fn.extend({
  serialize: function() {
    return jQuery.param( this.serializeArray() );
  },
  serializeArray: function() {
    return this.map(function(){
      return this.elements ? jQuery.makeArray( this.elements ) : this;
    })
    .filter(function(){
      return this.name && !this.disabled &&
        ( this.checked || rselectTextarea.test( this.nodeName ) ||
          rinput.test( this.type ) );
    })
    .map(function( i, elem ){
      var val = jQuery( this ).val();

      return val == null ?
        null :
        jQuery.isArray( val ) ?
          jQuery.map( val, function( val, i ){
            return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
          }) :
          { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
    }).get();
  }
});

//Serialize an array of form elements or a set of
//key/values into a query string
jQuery.param = function( a, traditional ) {
  var prefix,
    s = [],
    add = function( key, value ) {
      // If value is a function, invoke it and return its value
      value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
      s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
    };

  // Set traditional to true for jQuery <= 1.3.2 behavior.
  if ( traditional === undefined ) {
    traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
  }

  // If an array was passed in, assume that it is an array of form elements.
  if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
    // Serialize the form elements
    jQuery.each( a, function() {
      add( this.name, this.value );
    });

  } else {
    // If traditional, encode the "old" way (the way 1.3.2 or older
    // did it), otherwise encode params recursively.
    for ( prefix in a ) {
      buildParams( prefix, a[ prefix ], traditional, add );
    }
  }

  // Return the resulting serialization
  return s.join( "&" ).replace( r20, "+" );
};

function buildParams( prefix, obj, traditional, add ) {
  var name;

  if ( jQuery.isArray( obj ) ) {
    // Serialize array item.
    jQuery.each( obj, function( i, v ) {
      if ( traditional || rbracket.test( prefix ) ) {
        // Treat each array item as a scalar.
        add( prefix, v );

      } else {
        // If array item is non-scalar (array or object), encode its
        // numeric index to resolve deserialization ambiguity issues.
        // Note that rack (as of 1.0.0) can't currently deserialize
        // nested arrays properly, and attempting to do so may cause
        // a server error. Possible fixes are to modify rack's
        // deserialization algorithm or to provide an option or flag
        // to force array serialization to be shallow.
        buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
      }
    });

  } else if ( !traditional && jQuery.type( obj ) === "object" ) {
    // Serialize object item.
    for ( name in obj ) {
      buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
    }

  } else {
    // Serialize scalar item.
    add( prefix, obj );
  }
}
var
  // Document location
  ajaxLocParts,
  ajaxLocation,

  rhash = /#.*$/,
  rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
  // #7653, #8125, #8152: local protocol detection
  rlocalProtocol = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
  rnoContent = /^(?:GET|HEAD)$/,
  rprotocol = /^\/\//,
  rquery = /\?/,
  rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
  rts = /([?&])_=[^&]*/,
  rurl = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,

  // Keep a copy of the old load method
  _load = jQuery.fn.load,

  /* Prefilters
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
   * 2) These are called:
   *    - BEFORE asking for a transport
   *    - AFTER param serialization (s.data is a string if s.processData is true)
   * 3) key is the dataType
   * 4) the catchall symbol "*" can be used
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
   */
  prefilters = {},

  /* Transports bindings
   * 1) key is the dataType
   * 2) the catchall symbol "*" can be used
   * 3) selection will start with transport dataType and THEN go to "*" if needed
   */
  transports = {},

  // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
  allTypes = ["*/"] + ["*"];

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
  ajaxLocation = location.href;
} catch( e ) {
  // Use the href attribute of an A element
  // since IE will modify it given document.location
  ajaxLocation = document.createElement( "a" );
  ajaxLocation.href = "";
  ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

  // dataTypeExpression is optional and defaults to "*"
  return function( dataTypeExpression, func ) {

    if ( typeof dataTypeExpression !== "string" ) {
      func = dataTypeExpression;
      dataTypeExpression = "*";
    }

    var dataType, list, placeBefore,
      dataTypes = dataTypeExpression.toLowerCase().split( core_rspace ),
      i = 0,
      length = dataTypes.length;

    if ( jQuery.isFunction( func ) ) {
      // For each dataType in the dataTypeExpression
      for ( ; i < length; i++ ) {
        dataType = dataTypes[ i ];
        // We control if we're asked to add before
        // any existing element
        placeBefore = /^\+/.test( dataType );
        if ( placeBefore ) {
          dataType = dataType.substr( 1 ) || "*";
        }
        list = structure[ dataType ] = structure[ dataType ] || [];
        // then we add to the structure accordingly
        list[ placeBefore ? "unshift" : "push" ]( func );
      }
    }
  };
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR,
    dataType /* internal */, inspected /* internal */ ) {

  dataType = dataType || options.dataTypes[ 0 ];
  inspected = inspected || {};

  inspected[ dataType ] = true;

  var selection,
    list = structure[ dataType ],
    i = 0,
    length = list ? list.length : 0,
    executeOnly = ( structure === prefilters );

  for ( ; i < length && ( executeOnly || !selection ); i++ ) {
    selection = list[ i ]( options, originalOptions, jqXHR );
    // If we got redirected to another dataType
    // we try there if executing only and not done already
    if ( typeof selection === "string" ) {
      if ( !executeOnly || inspected[ selection ] ) {
        selection = undefined;
      } else {
        options.dataTypes.unshift( selection );
        selection = inspectPrefiltersOrTransports(
            structure, options, originalOptions, jqXHR, selection, inspected );
      }
    }
  }
  // If we're only executing or nothing was selected
  // we try the catchall dataType if not done already
  if ( ( executeOnly || !selection ) && !inspected[ "*" ] ) {
    selection = inspectPrefiltersOrTransports(
        structure, options, originalOptions, jqXHR, "*", inspected );
  }
  // unnecessary when only executing (prefilters)
  // but it'll be ignored by the caller in that case
  return selection;
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
  var key, deep,
    flatOptions = jQuery.ajaxSettings.flatOptions || {};
  for ( key in src ) {
    if ( src[ key ] !== undefined ) {
      ( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
    }
  }
  if ( deep ) {
    jQuery.extend( true, target, deep );
  }
}

jQuery.fn.load = function( url, params, callback ) {
  if ( typeof url !== "string" && _load ) {
    return _load.apply( this, arguments );
  }

  // Don't do a request if no elements are being requested
  if ( !this.length ) {
    return this;
  }

  var selector, type, response,
    self = this,
    off = url.indexOf(" ");

  if ( off >= 0 ) {
    selector = url.slice( off, url.length );
    url = url.slice( 0, off );
  }

  // If it's a function
  if ( jQuery.isFunction( params ) ) {

    // We assume that it's the callback
    callback = params;
    params = undefined;

  // Otherwise, build a param string
  } else if ( params && typeof params === "object" ) {
    type = "POST";
  }

  // Request the remote document
  jQuery.ajax({
    url: url,

    // if "type" variable is undefined, then "GET" method will be used
    type: type,
    dataType: "html",
    data: params,
    complete: function( jqXHR, status ) {
      if ( callback ) {
        self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
      }
    }
  }).done(function( responseText ) {

    // Save response for use in complete callback
    response = arguments;

    // See if a selector was specified
    self.html( selector ?

      // Create a dummy div to hold the results
      jQuery("<div>")

        // inject the contents of the document in, removing the scripts
        // to avoid any 'Permission Denied' errors in IE
        .append( responseText.replace( rscript, "" ) )

        // Locate the specified elements
        .find( selector ) :

      // If not, just inject the full result
      responseText );

  });

  return this;
};

// Attach a bunch of functions for handling common AJAX events
jQuery.each( "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split( " " ), function( i, o ){
  jQuery.fn[ o ] = function( f ){
    return this.on( o, f );
  };
});

jQuery.each( [ "get", "post" ], function( i, method ) {
  jQuery[ method ] = function( url, data, callback, type ) {
    // shift arguments if data argument was omitted
    if ( jQuery.isFunction( data ) ) {
      type = type || callback;
      callback = data;
      data = undefined;
    }

    return jQuery.ajax({
      type: method,
      url: url,
      data: data,
      success: callback,
      dataType: type
    });
  };
});

jQuery.extend({

  getScript: function( url, callback ) {
    return jQuery.get( url, undefined, callback, "script" );
  },

  getJSON: function( url, data, callback ) {
    return jQuery.get( url, data, callback, "json" );
  },

  // Creates a full fledged settings object into target
  // with both ajaxSettings and settings fields.
  // If target is omitted, writes into ajaxSettings.
  ajaxSetup: function( target, settings ) {
    if ( settings ) {
      // Building a settings object
      ajaxExtend( target, jQuery.ajaxSettings );
    } else {
      // Extending ajaxSettings
      settings = target;
      target = jQuery.ajaxSettings;
    }
    ajaxExtend( target, settings );
    return target;
  },

  ajaxSettings: {
    url: ajaxLocation,
    isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
    global: true,
    type: "GET",
    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
    processData: true,
    async: true,
    /*
    timeout: 0,
    data: null,
    dataType: null,
    username: null,
    password: null,
    cache: null,
    throws: false,
    traditional: false,
    headers: {},
    */

    accepts: {
      xml: "application/xml, text/xml",
      html: "text/html",
      text: "text/plain",
      json: "application/json, text/javascript",
      "*": allTypes
    },

    contents: {
      xml: /xml/,
      html: /html/,
      json: /json/
    },

    responseFields: {
      xml: "responseXML",
      text: "responseText"
    },

    // List of data converters
    // 1) key format is "source_type destination_type" (a single space in-between)
    // 2) the catchall symbol "*" can be used for source_type
    converters: {

      // Convert anything to text
      "* text": window.String,

      // Text to html (true = no transformation)
      "text html": true,

      // Evaluate text as a json expression
      "text json": jQuery.parseJSON,

      // Parse text as xml
      "text xml": jQuery.parseXML
    },

    // For options that shouldn't be deep extended:
    // you can add your own custom options here if
    // and when you create one that shouldn't be
    // deep extended (see ajaxExtend)
    flatOptions: {
      context: true,
      url: true
    }
  },

  ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
  ajaxTransport: addToPrefiltersOrTransports( transports ),

  // Main method
  ajax: function( url, options ) {

    // If url is an object, simulate pre-1.5 signature
    if ( typeof url === "object" ) {
      options = url;
      url = undefined;
    }

    // Force options to be an object
    options = options || {};

    var // ifModified key
      ifModifiedKey,
      // Response headers
      responseHeadersString,
      responseHeaders,
      // transport
      transport,
      // timeout handle
      timeoutTimer,
      // Cross-domain detection vars
      parts,
      // To know if global events are to be dispatched
      fireGlobals,
      // Loop variable
      i,
      // Create the final options object
      s = jQuery.ajaxSetup( {}, options ),
      // Callbacks context
      callbackContext = s.context || s,
      // Context for global events
      // It's the callbackContext if one was provided in the options
      // and if it's a DOM node or a jQuery collection
      globalEventContext = callbackContext !== s &&
        ( callbackContext.nodeType || callbackContext instanceof jQuery ) ?
            jQuery( callbackContext ) : jQuery.event,
      // Deferreds
      deferred = jQuery.Deferred(),
      completeDeferred = jQuery.Callbacks( "once memory" ),
      // Status-dependent callbacks
      statusCode = s.statusCode || {},
      // Headers (they are sent all at once)
      requestHeaders = {},
      requestHeadersNames = {},
      // The jqXHR state
      state = 0,
      // Default abort message
      strAbort = "canceled",
      // Fake xhr
      jqXHR = {

        readyState: 0,

        // Caches the header
        setRequestHeader: function( name, value ) {
          if ( !state ) {
            var lname = name.toLowerCase();
            name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
            requestHeaders[ name ] = value;
          }
          return this;
        },

        // Raw string
        getAllResponseHeaders: function() {
          return state === 2 ? responseHeadersString : null;
        },

        // Builds headers hashtable if needed
        getResponseHeader: function( key ) {
          var match;
          if ( state === 2 ) {
            if ( !responseHeaders ) {
              responseHeaders = {};
              while( ( match = rheaders.exec( responseHeadersString ) ) ) {
                responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
              }
            }
            match = responseHeaders[ key.toLowerCase() ];
          }
          return match === undefined ? null : match;
        },

        // Overrides response content-type header
        overrideMimeType: function( type ) {
          if ( !state ) {
            s.mimeType = type;
          }
          return this;
        },

        // Cancel the request
        abort: function( statusText ) {
          statusText = statusText || strAbort;
          if ( transport ) {
            transport.abort( statusText );
          }
          done( 0, statusText );
          return this;
        }
      };

    // Callback for when everything is done
    // It is defined here because jslint complains if it is declared
    // at the end of the function (which would be more logical and readable)
    function done( status, nativeStatusText, responses, headers ) {
      var isSuccess, success, error, response, modified,
        statusText = nativeStatusText;

      // Called once
      if ( state === 2 ) {
        return;
      }

      // State is "done" now
      state = 2;

      // Clear timeout if it exists
      if ( timeoutTimer ) {
        clearTimeout( timeoutTimer );
      }

      // Dereference transport for early garbage collection
      // (no matter how long the jqXHR object will be used)
      transport = undefined;

      // Cache response headers
      responseHeadersString = headers || "";

      // Set readyState
      jqXHR.readyState = status > 0 ? 4 : 0;

      // Get response data
      if ( responses ) {
        response = ajaxHandleResponses( s, jqXHR, responses );
      }

      // If successful, handle type chaining
      if ( status >= 200 && status < 300 || status === 304 ) {

        // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
        if ( s.ifModified ) {

          modified = jqXHR.getResponseHeader("Last-Modified");
          if ( modified ) {
            jQuery.lastModified[ ifModifiedKey ] = modified;
          }
          modified = jqXHR.getResponseHeader("Etag");
          if ( modified ) {
            jQuery.etag[ ifModifiedKey ] = modified;
          }
        }

        // If not modified
        if ( status === 304 ) {

          statusText = "notmodified";
          isSuccess = true;

        // If we have data
        } else {

          isSuccess = ajaxConvert( s, response );
          statusText = isSuccess.state;
          success = isSuccess.data;
          error = isSuccess.error;
          isSuccess = !error;
        }
      } else {
        // We extract error from statusText
        // then normalize statusText and status for non-aborts
        error = statusText;
        if ( !statusText || status ) {
          statusText = "error";
          if ( status < 0 ) {
            status = 0;
          }
        }
      }

      // Set data for the fake xhr object
      jqXHR.status = status;
      jqXHR.statusText = ( nativeStatusText || statusText ) + "";

      // Success/Error
      if ( isSuccess ) {
        deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
      } else {
        deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
      }

      // Status-dependent callbacks
      jqXHR.statusCode( statusCode );
      statusCode = undefined;

      if ( fireGlobals ) {
        globalEventContext.trigger( "ajax" + ( isSuccess ? "Success" : "Error" ),
            [ jqXHR, s, isSuccess ? success : error ] );
      }

      // Complete
      completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

      if ( fireGlobals ) {
        globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
        // Handle the global AJAX counter
        if ( !( --jQuery.active ) ) {
          jQuery.event.trigger( "ajaxStop" );
        }
      }
    }

    // Attach deferreds
    deferred.promise( jqXHR );
    jqXHR.success = jqXHR.done;
    jqXHR.error = jqXHR.fail;
    jqXHR.complete = completeDeferred.add;

    // Status-dependent callbacks
    jqXHR.statusCode = function( map ) {
      if ( map ) {
        var tmp;
        if ( state < 2 ) {
          for ( tmp in map ) {
            statusCode[ tmp ] = [ statusCode[tmp], map[tmp] ];
          }
        } else {
          tmp = map[ jqXHR.status ];
          jqXHR.always( tmp );
        }
      }
      return this;
    };

    // Remove hash character (#7531: and string promotion)
    // Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
    // We also use the url parameter if available
    s.url = ( ( url || s.url ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

    // Extract dataTypes list
    s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().split( core_rspace );

    // A cross-domain request is in order when we have a protocol:host:port mismatch
    if ( s.crossDomain == null ) {
      parts = rurl.exec( s.url.toLowerCase() );
      s.crossDomain = !!( parts &&
        ( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
          ( parts[ 3 ] || ( parts[ 1 ] === "http:" ? 80 : 443 ) ) !=
            ( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? 80 : 443 ) ) )
      );
    }

    // Convert data if not already a string
    if ( s.data && s.processData && typeof s.data !== "string" ) {
      s.data = jQuery.param( s.data, s.traditional );
    }

    // Apply prefilters
    inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

    // If request was aborted inside a prefilter, stop there
    if ( state === 2 ) {
      return jqXHR;
    }

    // We can fire global events as of now if asked to
    fireGlobals = s.global;

    // Uppercase the type
    s.type = s.type.toUpperCase();

    // Determine if request has content
    s.hasContent = !rnoContent.test( s.type );

    // Watch for a new set of requests
    if ( fireGlobals && jQuery.active++ === 0 ) {
      jQuery.event.trigger( "ajaxStart" );
    }

    // More options handling for requests with no content
    if ( !s.hasContent ) {

      // If data is available, append data to url
      if ( s.data ) {
        s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.data;
        // #9682: remove data so that it's not used in an eventual retry
        delete s.data;
      }

      // Get ifModifiedKey before adding the anti-cache parameter
      ifModifiedKey = s.url;

      // Add anti-cache in url if needed
      if ( s.cache === false ) {

        var ts = jQuery.now(),
          // try replacing _= if it is there
          ret = s.url.replace( rts, "$1_=" + ts );

        // if nothing was replaced, add timestamp to the end
        s.url = ret + ( ( ret === s.url ) ? ( rquery.test( s.url ) ? "&" : "?" ) + "_=" + ts : "" );
      }
    }

    // Set the correct header, if data is being sent
    if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
      jqXHR.setRequestHeader( "Content-Type", s.contentType );
    }

    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
    if ( s.ifModified ) {
      ifModifiedKey = ifModifiedKey || s.url;
      if ( jQuery.lastModified[ ifModifiedKey ] ) {
        jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ ifModifiedKey ] );
      }
      if ( jQuery.etag[ ifModifiedKey ] ) {
        jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ ifModifiedKey ] );
      }
    }

    // Set the Accepts header for the server, depending on the dataType
    jqXHR.setRequestHeader(
      "Accept",
      s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
        s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
        s.accepts[ "*" ]
    );

    // Check for headers option
    for ( i in s.headers ) {
      jqXHR.setRequestHeader( i, s.headers[ i ] );
    }

    // Allow custom headers/mimetypes and early abort
    if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
        // Abort if not done already and return
        return jqXHR.abort();

    }

    // aborting is no longer a cancellation
    strAbort = "abort";

    // Install callbacks on deferreds
    for ( i in { success: 1, error: 1, complete: 1 } ) {
      jqXHR[ i ]( s[ i ] );
    }

    // Get transport
    transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

    // If no transport, we auto-abort
    if ( !transport ) {
      done( -1, "No Transport" );
    } else {
      jqXHR.readyState = 1;
      // Send global event
      if ( fireGlobals ) {
        globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
      }
      // Timeout
      if ( s.async && s.timeout > 0 ) {
        timeoutTimer = setTimeout( function(){
          jqXHR.abort( "timeout" );
        }, s.timeout );
      }

      try {
        state = 1;
        transport.send( requestHeaders, done );
      } catch (e) {
        // Propagate exception as error if not done
        if ( state < 2 ) {
          done( -1, e );
        // Simply rethrow otherwise
        } else {
          throw e;
        }
      }
    }

    return jqXHR;
  },

  // Counter for holding the number of active queries
  active: 0,

  // Last-Modified header cache for next request
  lastModified: {},
  etag: {}

});

/* Handles responses to an ajax request:
 * - sets all responseXXX fields accordingly
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

  var ct, type, finalDataType, firstDataType,
    contents = s.contents,
    dataTypes = s.dataTypes,
    responseFields = s.responseFields;

  // Fill responseXXX fields
  for ( type in responseFields ) {
    if ( type in responses ) {
      jqXHR[ responseFields[type] ] = responses[ type ];
    }
  }

  // Remove auto dataType and get content-type in the process
  while( dataTypes[ 0 ] === "*" ) {
    dataTypes.shift();
    if ( ct === undefined ) {
      ct = s.mimeType || jqXHR.getResponseHeader( "content-type" );
    }
  }

  // Check if we're dealing with a known content-type
  if ( ct ) {
    for ( type in contents ) {
      if ( contents[ type ] && contents[ type ].test( ct ) ) {
        dataTypes.unshift( type );
        break;
      }
    }
  }

  // Check to see if we have a response for the expected dataType
  if ( dataTypes[ 0 ] in responses ) {
    finalDataType = dataTypes[ 0 ];
  } else {
    // Try convertible dataTypes
    for ( type in responses ) {
      if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
        finalDataType = type;
        break;
      }
      if ( !firstDataType ) {
        firstDataType = type;
      }
    }
    // Or just use first one
    finalDataType = finalDataType || firstDataType;
  }

  // If we found a dataType
  // We add the dataType to the list if needed
  // and return the corresponding response
  if ( finalDataType ) {
    if ( finalDataType !== dataTypes[ 0 ] ) {
      dataTypes.unshift( finalDataType );
    }
    return responses[ finalDataType ];
  }
}

// Chain conversions given the request and the original response
function ajaxConvert( s, response ) {

  var conv, conv2, current, tmp,
    // Work with a copy of dataTypes in case we need to modify it for conversion
    dataTypes = s.dataTypes.slice(),
    prev = dataTypes[ 0 ],
    converters = {},
    i = 0;

  // Apply the dataFilter if provided
  if ( s.dataFilter ) {
    response = s.dataFilter( response, s.dataType );
  }

  // Create converters map with lowercased keys
  if ( dataTypes[ 1 ] ) {
    for ( conv in s.converters ) {
      converters[ conv.toLowerCase() ] = s.converters[ conv ];
    }
  }

  // Convert to each sequential dataType, tolerating list modification
  for ( ; (current = dataTypes[++i]); ) {

    // There's only work to do if current dataType is non-auto
    if ( current !== "*" ) {

      // Convert response if prev dataType is non-auto and differs from current
      if ( prev !== "*" && prev !== current ) {

        // Seek a direct converter
        conv = converters[ prev + " " + current ] || converters[ "* " + current ];

        // If none found, seek a pair
        if ( !conv ) {
          for ( conv2 in converters ) {

            // If conv2 outputs current
            tmp = conv2.split(" ");
            if ( tmp[ 1 ] === current ) {

              // If prev can be converted to accepted input
              conv = converters[ prev + " " + tmp[ 0 ] ] ||
                converters[ "* " + tmp[ 0 ] ];
              if ( conv ) {
                // Condense equivalence converters
                if ( conv === true ) {
                  conv = converters[ conv2 ];

                // Otherwise, insert the intermediate dataType
                } else if ( converters[ conv2 ] !== true ) {
                  current = tmp[ 0 ];
                  dataTypes.splice( i--, 0, current );
                }

                break;
              }
            }
          }
        }

        // Apply converter (if not an equivalence)
        if ( conv !== true ) {

          // Unless errors are allowed to bubble, catch and return them
          if ( conv && s["throws"] ) {
            response = conv( response );
          } else {
            try {
              response = conv( response );
            } catch ( e ) {
              return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
            }
          }
        }
      }

      // Update prev for next iteration
      prev = current;
    }
  }

  return { state: "success", data: response };
}
var oldCallbacks = [],
  rquestion = /\?/,
  rjsonp = /(=)\?(?=&|$)|\?\?/,
  nonce = jQuery.now();

// Default jsonp settings
jQuery.ajaxSetup({
  jsonp: "callback",
  jsonpCallback: function() {
    var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
    this[ callback ] = true;
    return callback;
  }
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

  var callbackName, overwritten, responseContainer,
    data = s.data,
    url = s.url,
    hasCallback = s.jsonp !== false,
    replaceInUrl = hasCallback && rjsonp.test( url ),
    replaceInData = hasCallback && !replaceInUrl && typeof data === "string" &&
      !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") &&
      rjsonp.test( data );

  // Handle iff the expected data type is "jsonp" or we have a parameter to set
  if ( s.dataTypes[ 0 ] === "jsonp" || replaceInUrl || replaceInData ) {

    // Get callback name, remembering preexisting value associated with it
    callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
      s.jsonpCallback() :
      s.jsonpCallback;
    overwritten = window[ callbackName ];

    // Insert callback into url or form data
    if ( replaceInUrl ) {
      s.url = url.replace( rjsonp, "$1" + callbackName );
    } else if ( replaceInData ) {
      s.data = data.replace( rjsonp, "$1" + callbackName );
    } else if ( hasCallback ) {
      s.url += ( rquestion.test( url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
    }

    // Use data converter to retrieve json after script execution
    s.converters["script json"] = function() {
      if ( !responseContainer ) {
        jQuery.error( callbackName + " was not called" );
      }
      return responseContainer[ 0 ];
    };

    // force json dataType
    s.dataTypes[ 0 ] = "json";

    // Install callback
    window[ callbackName ] = function() {
      responseContainer = arguments;
    };

    // Clean-up function (fires after converters)
    jqXHR.always(function() {
      // Restore preexisting value
      window[ callbackName ] = overwritten;

      // Save back as free
      if ( s[ callbackName ] ) {
        // make sure that re-using the options doesn't screw things around
        s.jsonpCallback = originalSettings.jsonpCallback;

        // save the callback name for future use
        oldCallbacks.push( callbackName );
      }

      // Call if it was a function and we have a response
      if ( responseContainer && jQuery.isFunction( overwritten ) ) {
        overwritten( responseContainer[ 0 ] );
      }

      responseContainer = overwritten = undefined;
    });

    // Delegate to script
    return "script";
  }
});
// Install script dataType
jQuery.ajaxSetup({
  accepts: {
    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
  },
  contents: {
    script: /javascript|ecmascript/
  },
  converters: {
    "text script": function( text ) {
      jQuery.globalEval( text );
      return text;
    }
  }
});

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
  if ( s.cache === undefined ) {
    s.cache = false;
  }
  if ( s.crossDomain ) {
    s.type = "GET";
    s.global = false;
  }
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function(s) {

  // This transport only deals with cross domain requests
  if ( s.crossDomain ) {

    var script,
      head = document.head || document.getElementsByTagName( "head" )[0] || document.documentElement;

    return {

      send: function( _, callback ) {

        script = document.createElement( "script" );

        script.async = "async";

        if ( s.scriptCharset ) {
          script.charset = s.scriptCharset;
        }

        script.src = s.url;

        // Attach handlers for all browsers
        script.onload = script.onreadystatechange = function( _, isAbort ) {

          if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

            // Handle memory leak in IE
            script.onload = script.onreadystatechange = null;

            // Remove the script
            if ( head && script.parentNode ) {
              head.removeChild( script );
            }

            // Dereference the script
            script = undefined;

            // Callback if not abort
            if ( !isAbort ) {
              callback( 200, "success" );
            }
          }
        };
        // Use insertBefore instead of appendChild  to circumvent an IE6 bug.
        // This arises when a base node is used (#2709 and #4378).
        head.insertBefore( script, head.firstChild );
      },

      abort: function() {
        if ( script ) {
          script.onload( 0, 1 );
        }
      }
    };
  }
});
var xhrCallbacks,
  // #5280: Internet Explorer will keep connections alive if we don't abort on unload
  xhrOnUnloadAbort = window.ActiveXObject ? function() {
    // Abort all pending requests
    for ( var key in xhrCallbacks ) {
      xhrCallbacks[ key ]( 0, 1 );
    }
  } : false,
  xhrId = 0;

// Functions to create xhrs
function createStandardXHR() {
  try {
    return new window.XMLHttpRequest();
  } catch( e ) {}
}

function createActiveXHR() {
  try {
    return new window.ActiveXObject( "Microsoft.XMLHTTP" );
  } catch( e ) {}
}

// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject ?
  /* Microsoft failed to properly
   * implement the XMLHttpRequest in IE7 (can't request local files),
   * so we use the ActiveXObject when it is available
   * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
   * we need a fallback.
   */
  function() {
    return !this.isLocal && createStandardXHR() || createActiveXHR();
  } :
  // For all other browsers, use the standard XMLHttpRequest object
  createStandardXHR;

// Determine support properties
(function( xhr ) {
  jQuery.extend( jQuery.support, {
    ajax: !!xhr,
    cors: !!xhr && ( "withCredentials" in xhr )
  });
})( jQuery.ajaxSettings.xhr() );

// Create transport if the browser can provide an xhr
if ( jQuery.support.ajax ) {

  jQuery.ajaxTransport(function( s ) {
    // Cross domain only allowed if supported through XMLHttpRequest
    if ( !s.crossDomain || jQuery.support.cors ) {

      var callback;

      return {
        send: function( headers, complete ) {

          // Get a new xhr
          var handle, i,
            xhr = s.xhr();

          // Open the socket
          // Passing null username, generates a login popup on Opera (#2865)
          if ( s.username ) {
            xhr.open( s.type, s.url, s.async, s.username, s.password );
          } else {
            xhr.open( s.type, s.url, s.async );
          }

          // Apply custom fields if provided
          if ( s.xhrFields ) {
            for ( i in s.xhrFields ) {
              xhr[ i ] = s.xhrFields[ i ];
            }
          }

          // Override mime type if needed
          if ( s.mimeType && xhr.overrideMimeType ) {
            xhr.overrideMimeType( s.mimeType );
          }

          // X-Requested-With header
          // For cross-domain requests, seeing as conditions for a preflight are
          // akin to a jigsaw puzzle, we simply never set it to be sure.
          // (it can always be set on a per-request basis or even using ajaxSetup)
          // For same-domain requests, won't change header if already provided.
          if ( !s.crossDomain && !headers["X-Requested-With"] ) {
            headers[ "X-Requested-With" ] = "XMLHttpRequest";
          }

          // Need an extra try/catch for cross domain requests in Firefox 3
          try {
            for ( i in headers ) {
              xhr.setRequestHeader( i, headers[ i ] );
            }
          } catch( _ ) {}

          // Do send the request
          // This may raise an exception which is actually
          // handled in jQuery.ajax (so no try/catch here)
          xhr.send( ( s.hasContent && s.data ) || null );

          // Listener
          callback = function( _, isAbort ) {

            var status,
              statusText,
              responseHeaders,
              responses,
              xml;

            // Firefox throws exceptions when accessing properties
            // of an xhr when a network error occurred
            // http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
            try {

              // Was never called and is aborted or complete
              if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

                // Only called once
                callback = undefined;

                // Do not keep as active anymore
                if ( handle ) {
                  xhr.onreadystatechange = jQuery.noop;
                  if ( xhrOnUnloadAbort ) {
                    delete xhrCallbacks[ handle ];
                  }
                }

                // If it's an abort
                if ( isAbort ) {
                  // Abort it manually if needed
                  if ( xhr.readyState !== 4 ) {
                    xhr.abort();
                  }
                } else {
                  status = xhr.status;
                  responseHeaders = xhr.getAllResponseHeaders();
                  responses = {};
                  xml = xhr.responseXML;

                  // Construct response list
                  if ( xml && xml.documentElement /* #4958 */ ) {
                    responses.xml = xml;
                  }

                  // When requesting binary data, IE6-9 will throw an exception
                  // on any attempt to access responseText (#11426)
                  try {
                    responses.text = xhr.responseText;
                  } catch( e ) {
                  }

                  // Firefox throws an exception when accessing
                  // statusText for faulty cross-domain requests
                  try {
                    statusText = xhr.statusText;
                  } catch( e ) {
                    // We normalize with Webkit giving an empty statusText
                    statusText = "";
                  }

                  // Filter status for non standard behaviors

                  // If the request is local and we have data: assume a success
                  // (success with no data won't get notified, that's the best we
                  // can do given current implementations)
                  if ( !status && s.isLocal && !s.crossDomain ) {
                    status = responses.text ? 200 : 404;
                  // IE - #1450: sometimes returns 1223 when it should be 204
                  } else if ( status === 1223 ) {
                    status = 204;
                  }
                }
              }
            } catch( firefoxAccessException ) {
              if ( !isAbort ) {
                complete( -1, firefoxAccessException );
              }
            }

            // Call complete if needed
            if ( responses ) {
              complete( status, statusText, responses, responseHeaders );
            }
          };

          if ( !s.async ) {
            // if we're in sync mode we fire the callback
            callback();
          } else if ( xhr.readyState === 4 ) {
            // (IE6 & IE7) if it's in cache and has been
            // retrieved directly we need to fire the callback
            setTimeout( callback, 0 );
          } else {
            handle = ++xhrId;
            if ( xhrOnUnloadAbort ) {
              // Create the active xhrs callbacks list if needed
              // and attach the unload handler
              if ( !xhrCallbacks ) {
                xhrCallbacks = {};
                jQuery( window ).unload( xhrOnUnloadAbort );
              }
              // Add to list of active xhrs callbacks
              xhrCallbacks[ handle ] = callback;
            }
            xhr.onreadystatechange = callback;
          }
        },

        abort: function() {
          if ( callback ) {
            callback(0,1);
          }
        }
      };
    }
  });
}
var fxNow, timerId,
  rfxtypes = /^(?:toggle|show|hide)$/,
  rfxnum = new RegExp( "^(?:([-+])=|)(" + core_pnum + ")([a-z%]*)$", "i" ),
  rrun = /queueHooks$/,
  animationPrefilters = [ defaultPrefilter ],
  tweeners = {
    "*": [function( prop, value ) {
      var end, unit,
        tween = this.createTween( prop, value ),
        parts = rfxnum.exec( value ),
        target = tween.cur(),
        start = +target || 0,
        scale = 1,
        maxIterations = 20;

      if ( parts ) {
        end = +parts[2];
        unit = parts[3] || ( jQuery.cssNumber[ prop ] ? "" : "px" );

        // We need to compute starting value
        if ( unit !== "px" && start ) {
          // Iteratively approximate from a nonzero starting point
          // Prefer the current property, because this process will be trivial if it uses the same units
          // Fallback to end or a simple constant
          start = jQuery.css( tween.elem, prop, true ) || end || 1;

          do {
            // If previous iteration zeroed out, double until we get *something*
            // Use a string for doubling factor so we don't accidentally see scale as unchanged below
            scale = scale || ".5";

            // Adjust and apply
            start = start / scale;
            jQuery.style( tween.elem, prop, start + unit );

          // Update scale, tolerating zero or NaN from tween.cur()
          // And breaking the loop if scale is unchanged or perfect, or if we've just had enough
          } while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
        }

        tween.unit = unit;
        tween.start = start;
        // If a +=/-= token was provided, we're doing a relative animation
        tween.end = parts[1] ? start + ( parts[1] + 1 ) * end : end;
      }
      return tween;
    }]
  };

// Animations created synchronously will run synchronously
function createFxNow() {
  setTimeout(function() {
    fxNow = undefined;
  }, 0 );
  return ( fxNow = jQuery.now() );
}

function createTweens( animation, props ) {
  jQuery.each( props, function( prop, value ) {
    var collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
      index = 0,
      length = collection.length;
    for ( ; index < length; index++ ) {
      if ( collection[ index ].call( animation, prop, value ) ) {

        // we're done with this property
        return;
      }
    }
  });
}

function Animation( elem, properties, options ) {
  var result,
    index = 0,
    tweenerIndex = 0,
    length = animationPrefilters.length,
    deferred = jQuery.Deferred().always( function() {
      // don't match elem in the :animated selector
      delete tick.elem;
    }),
    tick = function() {
      var currentTime = fxNow || createFxNow(),
        remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
        // archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
        temp = remaining / animation.duration || 0,
        percent = 1 - temp,
        index = 0,
        length = animation.tweens.length;

      for ( ; index < length ; index++ ) {
        animation.tweens[ index ].run( percent );
      }

      deferred.notifyWith( elem, [ animation, percent, remaining ]);

      if ( percent < 1 && length ) {
        return remaining;
      } else {
        deferred.resolveWith( elem, [ animation ] );
        return false;
      }
    },
    animation = deferred.promise({
      elem: elem,
      props: jQuery.extend( {}, properties ),
      opts: jQuery.extend( true, { specialEasing: {} }, options ),
      originalProperties: properties,
      originalOptions: options,
      startTime: fxNow || createFxNow(),
      duration: options.duration,
      tweens: [],
      createTween: function( prop, end, easing ) {
        var tween = jQuery.Tween( elem, animation.opts, prop, end,
            animation.opts.specialEasing[ prop ] || animation.opts.easing );
        animation.tweens.push( tween );
        return tween;
      },
      stop: function( gotoEnd ) {
        var index = 0,
          // if we are going to the end, we want to run all the tweens
          // otherwise we skip this part
          length = gotoEnd ? animation.tweens.length : 0;

        for ( ; index < length ; index++ ) {
          animation.tweens[ index ].run( 1 );
        }

        // resolve when we played the last frame
        // otherwise, reject
        if ( gotoEnd ) {
          deferred.resolveWith( elem, [ animation, gotoEnd ] );
        } else {
          deferred.rejectWith( elem, [ animation, gotoEnd ] );
        }
        return this;
      }
    }),
    props = animation.props;

  propFilter( props, animation.opts.specialEasing );

  for ( ; index < length ; index++ ) {
    result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
    if ( result ) {
      return result;
    }
  }

  createTweens( animation, props );

  if ( jQuery.isFunction( animation.opts.start ) ) {
    animation.opts.start.call( elem, animation );
  }

  jQuery.fx.timer(
    jQuery.extend( tick, {
      anim: animation,
      queue: animation.opts.queue,
      elem: elem
    })
  );

  // attach callbacks from options
  return animation.progress( animation.opts.progress )
    .done( animation.opts.done, animation.opts.complete )
    .fail( animation.opts.fail )
    .always( animation.opts.always );
}

function propFilter( props, specialEasing ) {
  var index, name, easing, value, hooks;

  // camelCase, specialEasing and expand cssHook pass
  for ( index in props ) {
    name = jQuery.camelCase( index );
    easing = specialEasing[ name ];
    value = props[ index ];
    if ( jQuery.isArray( value ) ) {
      easing = value[ 1 ];
      value = props[ index ] = value[ 0 ];
    }

    if ( index !== name ) {
      props[ name ] = value;
      delete props[ index ];
    }

    hooks = jQuery.cssHooks[ name ];
    if ( hooks && "expand" in hooks ) {
      value = hooks.expand( value );
      delete props[ name ];

      // not quite $.extend, this wont overwrite keys already present.
      // also - reusing 'index' from above because we have the correct "name"
      for ( index in value ) {
        if ( !( index in props ) ) {
          props[ index ] = value[ index ];
          specialEasing[ index ] = easing;
        }
      }
    } else {
      specialEasing[ name ] = easing;
    }
  }
}

jQuery.Animation = jQuery.extend( Animation, {

  tweener: function( props, callback ) {
    if ( jQuery.isFunction( props ) ) {
      callback = props;
      props = [ "*" ];
    } else {
      props = props.split(" ");
    }

    var prop,
      index = 0,
      length = props.length;

    for ( ; index < length ; index++ ) {
      prop = props[ index ];
      tweeners[ prop ] = tweeners[ prop ] || [];
      tweeners[ prop ].unshift( callback );
    }
  },

  prefilter: function( callback, prepend ) {
    if ( prepend ) {
      animationPrefilters.unshift( callback );
    } else {
      animationPrefilters.push( callback );
    }
  }
});

function defaultPrefilter( elem, props, opts ) {
  var index, prop, value, length, dataShow, toggle, tween, hooks, oldfire,
    anim = this,
    style = elem.style,
    orig = {},
    handled = [],
    hidden = elem.nodeType && isHidden( elem );

  // handle queue: false promises
  if ( !opts.queue ) {
    hooks = jQuery._queueHooks( elem, "fx" );
    if ( hooks.unqueued == null ) {
      hooks.unqueued = 0;
      oldfire = hooks.empty.fire;
      hooks.empty.fire = function() {
        if ( !hooks.unqueued ) {
          oldfire();
        }
      };
    }
    hooks.unqueued++;

    anim.always(function() {
      // doing this makes sure that the complete handler will be called
      // before this completes
      anim.always(function() {
        hooks.unqueued--;
        if ( !jQuery.queue( elem, "fx" ).length ) {
          hooks.empty.fire();
        }
      });
    });
  }

  // height/width overflow pass
  if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
    // Make sure that nothing sneaks out
    // Record all 3 overflow attributes because IE does not
    // change the overflow attribute when overflowX and
    // overflowY are set to the same value
    opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

    // Set display property to inline-block for height/width
    // animations on inline elements that are having width/height animated
    if ( jQuery.css( elem, "display" ) === "inline" &&
        jQuery.css( elem, "float" ) === "none" ) {

      // inline-level elements accept inline-block;
      // block-level elements need to be inline with layout
      if ( !jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay( elem.nodeName ) === "inline" ) {
        style.display = "inline-block";

      } else {
        style.zoom = 1;
      }
    }
  }

  if ( opts.overflow ) {
    style.overflow = "hidden";
    if ( !jQuery.support.shrinkWrapBlocks ) {
      anim.done(function() {
        style.overflow = opts.overflow[ 0 ];
        style.overflowX = opts.overflow[ 1 ];
        style.overflowY = opts.overflow[ 2 ];
      });
    }
  }


  // show/hide pass
  for ( index in props ) {
    value = props[ index ];
    if ( rfxtypes.exec( value ) ) {
      delete props[ index ];
      toggle = toggle || value === "toggle";
      if ( value === ( hidden ? "hide" : "show" ) ) {
        continue;
      }
      handled.push( index );
    }
  }

  length = handled.length;
  if ( length ) {
    dataShow = jQuery._data( elem, "fxshow" ) || jQuery._data( elem, "fxshow", {} );
    if ( "hidden" in dataShow ) {
      hidden = dataShow.hidden;
    }

    // store state if its toggle - enables .stop().toggle() to "reverse"
    if ( toggle ) {
      dataShow.hidden = !hidden;
    }
    if ( hidden ) {
      jQuery( elem ).show();
    } else {
      anim.done(function() {
        jQuery( elem ).hide();
      });
    }
    anim.done(function() {
      var prop;
      jQuery.removeData( elem, "fxshow", true );
      for ( prop in orig ) {
        jQuery.style( elem, prop, orig[ prop ] );
      }
    });
    for ( index = 0 ; index < length ; index++ ) {
      prop = handled[ index ];
      tween = anim.createTween( prop, hidden ? dataShow[ prop ] : 0 );
      orig[ prop ] = dataShow[ prop ] || jQuery.style( elem, prop );

      if ( !( prop in dataShow ) ) {
        dataShow[ prop ] = tween.start;
        if ( hidden ) {
          tween.end = tween.start;
          tween.start = prop === "width" || prop === "height" ? 1 : 0;
        }
      }
    }
  }
}

function Tween( elem, options, prop, end, easing ) {
  return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
  constructor: Tween,
  init: function( elem, options, prop, end, easing, unit ) {
    this.elem = elem;
    this.prop = prop;
    this.easing = easing || "swing";
    this.options = options;
    this.start = this.now = this.cur();
    this.end = end;
    this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
  },
  cur: function() {
    var hooks = Tween.propHooks[ this.prop ];

    return hooks && hooks.get ?
      hooks.get( this ) :
      Tween.propHooks._default.get( this );
  },
  run: function( percent ) {
    var eased,
      hooks = Tween.propHooks[ this.prop ];

    if ( this.options.duration ) {
      this.pos = eased = jQuery.easing[ this.easing ](
        percent, this.options.duration * percent, 0, 1, this.options.duration
      );
    } else {
      this.pos = eased = percent;
    }
    this.now = ( this.end - this.start ) * eased + this.start;

    if ( this.options.step ) {
      this.options.step.call( this.elem, this.now, this );
    }

    if ( hooks && hooks.set ) {
      hooks.set( this );
    } else {
      Tween.propHooks._default.set( this );
    }
    return this;
  }
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
  _default: {
    get: function( tween ) {
      var result;

      if ( tween.elem[ tween.prop ] != null &&
        (!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
        return tween.elem[ tween.prop ];
      }

      // passing any value as a 4th parameter to .css will automatically
      // attempt a parseFloat and fallback to a string if the parse fails
      // so, simple values such as "10px" are parsed to Float.
      // complex values such as "rotate(1rad)" are returned as is.
      result = jQuery.css( tween.elem, tween.prop, false, "" );
      // Empty strings, null, undefined and "auto" are converted to 0.
      return !result || result === "auto" ? 0 : result;
    },
    set: function( tween ) {
      // use step hook for back compat - use cssHook if its there - use .style if its
      // available and use plain properties where available
      if ( jQuery.fx.step[ tween.prop ] ) {
        jQuery.fx.step[ tween.prop ]( tween );
      } else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
        jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
      } else {
        tween.elem[ tween.prop ] = tween.now;
      }
    }
  }
};

// Remove in 2.0 - this supports IE8's panic based approach
// to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
  set: function( tween ) {
    if ( tween.elem.nodeType && tween.elem.parentNode ) {
      tween.elem[ tween.prop ] = tween.now;
    }
  }
};

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
  var cssFn = jQuery.fn[ name ];
  jQuery.fn[ name ] = function( speed, easing, callback ) {
    return speed == null || typeof speed === "boolean" ||
      // special check for .toggle( handler, handler, ... )
      ( !i && jQuery.isFunction( speed ) && jQuery.isFunction( easing ) ) ?
      cssFn.apply( this, arguments ) :
      this.animate( genFx( name, true ), speed, easing, callback );
  };
});

jQuery.fn.extend({
  fadeTo: function( speed, to, easing, callback ) {

    // show any hidden elements after setting opacity to 0
    return this.filter( isHidden ).css( "opacity", 0 ).show()

      // animate to the value specified
      .end().animate({ opacity: to }, speed, easing, callback );
  },
  animate: function( prop, speed, easing, callback ) {
    var empty = jQuery.isEmptyObject( prop ),
      optall = jQuery.speed( speed, easing, callback ),
      doAnimation = function() {
        // Operate on a copy of prop so per-property easing won't be lost
        var anim = Animation( this, jQuery.extend( {}, prop ), optall );

        // Empty animations resolve immediately
        if ( empty ) {
          anim.stop( true );
        }
      };

    return empty || optall.queue === false ?
      this.each( doAnimation ) :
      this.queue( optall.queue, doAnimation );
  },
  stop: function( type, clearQueue, gotoEnd ) {
    var stopQueue = function( hooks ) {
      var stop = hooks.stop;
      delete hooks.stop;
      stop( gotoEnd );
    };

    if ( typeof type !== "string" ) {
      gotoEnd = clearQueue;
      clearQueue = type;
      type = undefined;
    }
    if ( clearQueue && type !== false ) {
      this.queue( type || "fx", [] );
    }

    return this.each(function() {
      var dequeue = true,
        index = type != null && type + "queueHooks",
        timers = jQuery.timers,
        data = jQuery._data( this );

      if ( index ) {
        if ( data[ index ] && data[ index ].stop ) {
          stopQueue( data[ index ] );
        }
      } else {
        for ( index in data ) {
          if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
            stopQueue( data[ index ] );
          }
        }
      }

      for ( index = timers.length; index--; ) {
        if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
          timers[ index ].anim.stop( gotoEnd );
          dequeue = false;
          timers.splice( index, 1 );
        }
      }

      // start the next in the queue if the last step wasn't forced
      // timers currently will call their complete callbacks, which will dequeue
      // but only if they were gotoEnd
      if ( dequeue || !gotoEnd ) {
        jQuery.dequeue( this, type );
      }
    });
  }
});

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
  var which,
    attrs = { height: type },
    i = 0;

  // if we include width, step value is 1 to do all cssExpand values,
  // if we don't include width, step value is 2 to skip over Left and Right
  includeWidth = includeWidth? 1 : 0;
  for( ; i < 4 ; i += 2 - includeWidth ) {
    which = cssExpand[ i ];
    attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
  }

  if ( includeWidth ) {
    attrs.opacity = attrs.width = type;
  }

  return attrs;
}

// Generate shortcuts for custom animations
jQuery.each({
  slideDown: genFx("show"),
  slideUp: genFx("hide"),
  slideToggle: genFx("toggle"),
  fadeIn: { opacity: "show" },
  fadeOut: { opacity: "hide" },
  fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
  jQuery.fn[ name ] = function( speed, easing, callback ) {
    return this.animate( props, speed, easing, callback );
  };
});

jQuery.speed = function( speed, easing, fn ) {
  var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
    complete: fn || !fn && easing ||
      jQuery.isFunction( speed ) && speed,
    duration: speed,
    easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
  };

  opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
    opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

  // normalize opt.queue - true/undefined/null -> "fx"
  if ( opt.queue == null || opt.queue === true ) {
    opt.queue = "fx";
  }

  // Queueing
  opt.old = opt.complete;

  opt.complete = function() {
    if ( jQuery.isFunction( opt.old ) ) {
      opt.old.call( this );
    }

    if ( opt.queue ) {
      jQuery.dequeue( this, opt.queue );
    }
  };

  return opt;
};

jQuery.easing = {
  linear: function( p ) {
    return p;
  },
  swing: function( p ) {
    return 0.5 - Math.cos( p*Math.PI ) / 2;
  }
};

jQuery.timers = [];
jQuery.fx = Tween.prototype.init;
jQuery.fx.tick = function() {
  var timer,
    timers = jQuery.timers,
    i = 0;

  fxNow = jQuery.now();

  for ( ; i < timers.length; i++ ) {
    timer = timers[ i ];
    // Checks the timer has not already been removed
    if ( !timer() && timers[ i ] === timer ) {
      timers.splice( i--, 1 );
    }
  }

  if ( !timers.length ) {
    jQuery.fx.stop();
  }
  fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
  if ( timer() && jQuery.timers.push( timer ) && !timerId ) {
    timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
  }
};

jQuery.fx.interval = 13;

jQuery.fx.stop = function() {
  clearInterval( timerId );
  timerId = null;
};

jQuery.fx.speeds = {
  slow: 600,
  fast: 200,
  // Default speed
  _default: 400
};

// Back Compat <1.8 extension point
jQuery.fx.step = {};

if ( jQuery.expr && jQuery.expr.filters ) {
  jQuery.expr.filters.animated = function( elem ) {
    return jQuery.grep(jQuery.timers, function( fn ) {
      return elem === fn.elem;
    }).length;
  };
}
var rroot = /^(?:body|html)$/i;

jQuery.fn.offset = function( options ) {
  if ( arguments.length ) {
    return options === undefined ?
      this :
      this.each(function( i ) {
        jQuery.offset.setOffset( this, options, i );
      });
  }

  var docElem, body, win, clientTop, clientLeft, scrollTop, scrollLeft,
    box = { top: 0, left: 0 },
    elem = this[ 0 ],
    doc = elem && elem.ownerDocument;

  if ( !doc ) {
    return;
  }

  if ( (body = doc.body) === elem ) {
    return jQuery.offset.bodyOffset( elem );
  }

  docElem = doc.documentElement;

  // Make sure it's not a disconnected DOM node
  if ( !jQuery.contains( docElem, elem ) ) {
    return box;
  }

  // If we don't have gBCR, just use 0,0 rather than error
  // BlackBerry 5, iOS 3 (original iPhone)
  if ( typeof elem.getBoundingClientRect !== "undefined" ) {
    box = elem.getBoundingClientRect();
  }
  win = getWindow( doc );
  clientTop  = docElem.clientTop  || body.clientTop  || 0;
  clientLeft = docElem.clientLeft || body.clientLeft || 0;
  scrollTop  = win.pageYOffset || docElem.scrollTop;
  scrollLeft = win.pageXOffset || docElem.scrollLeft;
  return {
    top: box.top  + scrollTop  - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
};

jQuery.offset = {

  bodyOffset: function( body ) {
    var top = body.offsetTop,
      left = body.offsetLeft;

    if ( jQuery.support.doesNotIncludeMarginInBodyOffset ) {
      top  += parseFloat( jQuery.css(body, "marginTop") ) || 0;
      left += parseFloat( jQuery.css(body, "marginLeft") ) || 0;
    }

    return { top: top, left: left };
  },

  setOffset: function( elem, options, i ) {
    var position = jQuery.css( elem, "position" );

    // set position first, in-case top/left are set even on static elem
    if ( position === "static" ) {
      elem.style.position = "relative";
    }

    var curElem = jQuery( elem ),
      curOffset = curElem.offset(),
      curCSSTop = jQuery.css( elem, "top" ),
      curCSSLeft = jQuery.css( elem, "left" ),
      calculatePosition = ( position === "absolute" || position === "fixed" ) && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
      props = {}, curPosition = {}, curTop, curLeft;

    // need to be able to calculate position if either top or left is auto and position is either absolute or fixed
    if ( calculatePosition ) {
      curPosition = curElem.position();
      curTop = curPosition.top;
      curLeft = curPosition.left;
    } else {
      curTop = parseFloat( curCSSTop ) || 0;
      curLeft = parseFloat( curCSSLeft ) || 0;
    }

    if ( jQuery.isFunction( options ) ) {
      options = options.call( elem, i, curOffset );
    }

    if ( options.top != null ) {
      props.top = ( options.top - curOffset.top ) + curTop;
    }
    if ( options.left != null ) {
      props.left = ( options.left - curOffset.left ) + curLeft;
    }

    if ( "using" in options ) {
      options.using.call( elem, props );
    } else {
      curElem.css( props );
    }
  }
};


jQuery.fn.extend({

  position: function() {
    if ( !this[0] ) {
      return;
    }

    var elem = this[0],

    // Get *real* offsetParent
    offsetParent = this.offsetParent(),

    // Get correct offsets
    offset       = this.offset(),
    parentOffset = rroot.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset();

    // Subtract element margins
    // note: when an element has margin: auto the offsetLeft and marginLeft
    // are the same in Safari causing offset.left to incorrectly be 0
    offset.top  -= parseFloat( jQuery.css(elem, "marginTop") ) || 0;
    offset.left -= parseFloat( jQuery.css(elem, "marginLeft") ) || 0;

    // Add offsetParent borders
    parentOffset.top  += parseFloat( jQuery.css(offsetParent[0], "borderTopWidth") ) || 0;
    parentOffset.left += parseFloat( jQuery.css(offsetParent[0], "borderLeftWidth") ) || 0;

    // Subtract the two offsets
    return {
      top:  offset.top  - parentOffset.top,
      left: offset.left - parentOffset.left
    };
  },

  offsetParent: function() {
    return this.map(function() {
      var offsetParent = this.offsetParent || document.body;
      while ( offsetParent && (!rroot.test(offsetParent.nodeName) && jQuery.css(offsetParent, "position") === "static") ) {
        offsetParent = offsetParent.offsetParent;
      }
      return offsetParent || document.body;
    });
  }
});


// Create scrollLeft and scrollTop methods
jQuery.each( {scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function( method, prop ) {
  var top = /Y/.test( prop );

  jQuery.fn[ method ] = function( val ) {
    return jQuery.access( this, function( elem, method, val ) {
      var win = getWindow( elem );

      if ( val === undefined ) {
        return win ? (prop in win) ? win[ prop ] :
          win.document.documentElement[ method ] :
          elem[ method ];
      }

      if ( win ) {
        win.scrollTo(
          !top ? val : jQuery( win ).scrollLeft(),
           top ? val : jQuery( win ).scrollTop()
        );

      } else {
        elem[ method ] = val;
      }
    }, method, val, arguments.length, null );
  };
});

function getWindow( elem ) {
  return jQuery.isWindow( elem ) ?
    elem :
    elem.nodeType === 9 ?
      elem.defaultView || elem.parentWindow :
      false;
}
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
  jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
    // margin is only for outerHeight, outerWidth
    jQuery.fn[ funcName ] = function( margin, value ) {
      var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
        extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

      return jQuery.access( this, function( elem, type, value ) {
        var doc;

        if ( jQuery.isWindow( elem ) ) {
          // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
          // isn't a whole lot we can do. See pull request at this URL for discussion:
          // https://github.com/jquery/jquery/pull/764
          return elem.document.documentElement[ "client" + name ];
        }

        // Get document width or height
        if ( elem.nodeType === 9 ) {
          doc = elem.documentElement;

          // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
          // unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
          return Math.max(
            elem.body[ "scroll" + name ], doc[ "scroll" + name ],
            elem.body[ "offset" + name ], doc[ "offset" + name ],
            doc[ "client" + name ]
          );
        }

        return value === undefined ?
          // Get width or height on the element, requesting but not forcing parseFloat
          jQuery.css( elem, type, value, extra ) :

          // Set width or height on the element
          jQuery.style( elem, type, value, extra );
      }, type, chainable ? margin : undefined, chainable, null );
    };
  });
});
// Expose jQuery to the global object
window.jQuery = window.$ = jQuery;

// Expose jQuery as an AMD module, but only for AMD loaders that
// understand the issues with loading multiple versions of jQuery
// in a page that all might call define(). The loader will indicate
// they have special allowances for multiple jQuery versions by
// specifying define.amd.jQuery = true. Register as a named module,
// since jQuery can be concatenated with other files that may use define,
// but not use a proper concatenation script that understands anonymous
// AMD modules. A named AMD is safest and most robust way to register.
// Lowercase jquery is used because AMD module names are derived from
// file names, and jQuery is normally delivered in a lowercase file name.
// Do this after creating the global so that if an AMD module wants to call
// noConflict to hide this version of jQuery, it will work.
if ( typeof define === "function" && define.amd && define.amd.jQuery ) {
  define( "jquery", [], function () { return jQuery; } );
}

})( window );
!function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i}({1:[function(require,module,exports){var api=require("./remark/api"),highlighter=require("./remark/highlighter"),resources=require("./remark/resources");window.remark=api;styleDocument();function styleDocument(){var styleElement=document.createElement("style"),headElement=document.getElementsByTagName("head")[0],style;styleElement.type="text/css";headElement.insertBefore(styleElement,headElement.firstChild);styleElement.innerHTML=resources.documentStyles;for(style in highlighter.styles){if(highlighter.styles.hasOwnProperty(style)){styleElement.innerHTML=styleElement.innerHTML+highlighter.styles[style]}}}},{"./remark/api":2,"./remark/highlighter":3,"./remark/resources":4}],3:[function(require,module,exports){!function(){var hljs=new function(){function escape(value){return value.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function findCode(pre){for(var node=pre.firstChild;node;node=node.nextSibling){if(node.nodeName=="CODE")return node;if(!(node.nodeType==3&&node.nodeValue.match(/\s+/)))break}}function blockText(block,ignoreNewLines){return Array.prototype.map.call(block.childNodes,function(node){if(node.nodeType==3){return ignoreNewLines?node.nodeValue.replace(/\n/g,""):node.nodeValue}if(node.nodeName=="BR"){return"\n"}return blockText(node,ignoreNewLines)}).join("")}function blockLanguage(block){var classes=(block.className+" "+(block.parentNode?block.parentNode.className:"")).split(/\s+/);classes=classes.map(function(c){return c.replace(/^language-/,"")});for(var i=0;i<classes.length;i++){if(languages[classes[i]]||classes[i]=="no-highlight"){return classes[i]}}}function nodeStream(node){var result=[];!function _nodeStream(node,offset){for(var child=node.firstChild;child;child=child.nextSibling){if(child.nodeType==3)offset+=child.nodeValue.length;else if(child.nodeName=="BR")offset+=1;else if(child.nodeType==1){result.push({event:"start",offset:offset,node:child});offset=_nodeStream(child,offset);result.push({event:"stop",offset:offset,node:child})}}return offset}(node,0);return result}function mergeStreams(stream1,stream2,value){var processed=0;var result="";var nodeStack=[];function selectStream(){if(stream1.length&&stream2.length){if(stream1[0].offset!=stream2[0].offset)return stream1[0].offset<stream2[0].offset?stream1:stream2;else{return stream2[0].event=="start"?stream1:stream2}}else{return stream1.length?stream1:stream2}}function open(node){function attr_str(a){return" "+a.nodeName+'="'+escape(a.value)+'"'}return"<"+node.nodeName+Array.prototype.map.call(node.attributes,attr_str).join("")+">"}while(stream1.length||stream2.length){var current=selectStream().splice(0,1)[0];result+=escape(value.substr(processed,current.offset-processed));processed=current.offset;if(current.event=="start"){result+=open(current.node);nodeStack.push(current.node)}else if(current.event=="stop"){var node,i=nodeStack.length;do{i--;node=nodeStack[i];result+="</"+node.nodeName.toLowerCase()+">"}while(node!=current.node);nodeStack.splice(i,1);while(i<nodeStack.length){result+=open(nodeStack[i]);i++}}}return result+escape(value.substr(processed))}function compileLanguage(language){function reStr(re){return re&&re.source||re}function langRe(value,global){return RegExp(reStr(value),"m"+(language.case_insensitive?"i":"")+(global?"g":""))}function compileMode(mode,parent){if(mode.compiled)return;mode.compiled=true;var keywords=[];if(mode.keywords){var compiled_keywords={};function flatten(className,str){str.split(" ").forEach(function(kw){var pair=kw.split("|");compiled_keywords[pair[0]]=[className,pair[1]?Number(pair[1]):1];keywords.push(pair[0])})}mode.lexemsRe=langRe(mode.lexems||hljs.IDENT_RE+"(?!\\.)",true);if(typeof mode.keywords=="string"){flatten("keyword",mode.keywords)}else{for(var className in mode.keywords){if(!mode.keywords.hasOwnProperty(className))continue;flatten(className,mode.keywords[className])}}mode.keywords=compiled_keywords}if(parent){if(mode.beginWithKeyword){mode.begin="\\b("+keywords.join("|")+")\\b(?!\\.)\\s*"}mode.beginRe=langRe(mode.begin?mode.begin:"\\B|\\b");if(!mode.end&&!mode.endsWithParent)mode.end="\\B|\\b";if(mode.end)mode.endRe=langRe(mode.end);mode.terminator_end=reStr(mode.end)||"";if(mode.endsWithParent&&parent.terminator_end)mode.terminator_end+=(mode.end?"|":"")+parent.terminator_end}if(mode.illegal)mode.illegalRe=langRe(mode.illegal);if(mode.relevance===undefined)mode.relevance=1;if(!mode.contains){mode.contains=[]}for(var i=0;i<mode.contains.length;i++){if(mode.contains[i]=="self"){mode.contains[i]=mode}compileMode(mode.contains[i],mode)}if(mode.starts){compileMode(mode.starts,parent)}var terminators=[];for(var i=0;i<mode.contains.length;i++){terminators.push(reStr(mode.contains[i].begin))}if(mode.terminator_end){terminators.push(reStr(mode.terminator_end))}if(mode.illegal){terminators.push(reStr(mode.illegal))}mode.terminators=terminators.length?langRe(terminators.join("|"),true):{exec:function(s){return null}}}compileMode(language)}function highlight(language_name,value,ignore_illegals){function subMode(lexem,mode){for(var i=0;i<mode.contains.length;i++){var match=mode.contains[i].beginRe.exec(lexem);if(match&&match.index==0){return mode.contains[i]}}}function endOfMode(mode,lexem){if(mode.end&&mode.endRe.test(lexem)){return mode}if(mode.endsWithParent){return endOfMode(mode.parent,lexem)}}function isIllegal(lexem,mode){return!ignore_illegals&&mode.illegal&&mode.illegalRe.test(lexem)}function keywordMatch(mode,match){var match_str=language.case_insensitive?match[0].toLowerCase():match[0];return mode.keywords.hasOwnProperty(match_str)&&mode.keywords[match_str]}function processKeywords(){var buffer=escape(mode_buffer);if(!top.keywords)return buffer;var result="";var last_index=0;top.lexemsRe.lastIndex=0;var match=top.lexemsRe.exec(buffer);while(match){result+=buffer.substr(last_index,match.index-last_index);var keyword_match=keywordMatch(top,match);if(keyword_match){keyword_count+=keyword_match[1];result+='<span class="'+keyword_match[0]+'">'+match[0]+"</span>"}else{result+=match[0]}last_index=top.lexemsRe.lastIndex;match=top.lexemsRe.exec(buffer)}return result+buffer.substr(last_index)}function processSubLanguage(){if(top.subLanguage&&!languages[top.subLanguage]){return escape(mode_buffer)}var result=top.subLanguage?highlight(top.subLanguage,mode_buffer):highlightAuto(mode_buffer);if(top.relevance>0){keyword_count+=result.keyword_count;relevance+=result.relevance}return'<span class="'+result.language+'">'+result.value+"</span>"}function processBuffer(){return top.subLanguage!==undefined?processSubLanguage():processKeywords()}function startNewMode(mode,lexem){var markup=mode.className?'<span class="'+mode.className+'">':"";if(mode.returnBegin){result+=markup;mode_buffer=""}else if(mode.excludeBegin){result+=escape(lexem)+markup;mode_buffer=""}else{result+=markup;mode_buffer=lexem}top=Object.create(mode,{parent:{value:top}})}function processLexem(buffer,lexem){mode_buffer+=buffer;if(lexem===undefined){result+=processBuffer();return 0}var new_mode=subMode(lexem,top);if(new_mode){result+=processBuffer();startNewMode(new_mode,lexem);return new_mode.returnBegin?0:lexem.length}var end_mode=endOfMode(top,lexem);if(end_mode){var origin=top;if(!(origin.returnEnd||origin.excludeEnd)){mode_buffer+=lexem}result+=processBuffer();do{if(top.className){result+="</span>"}relevance+=top.relevance;top=top.parent}while(top!=end_mode.parent);if(origin.excludeEnd){result+=escape(lexem)}mode_buffer="";if(end_mode.starts){startNewMode(end_mode.starts,"")}return origin.returnEnd?0:lexem.length}if(isIllegal(lexem,top))throw new Error('Illegal lexem "'+lexem+'" for mode "'+(top.className||"<unnamed>")+'"');mode_buffer+=lexem;return lexem.length||1}var language=languages[language_name];compileLanguage(language);var top=language;var mode_buffer="";var relevance=0;var keyword_count=0;var result="";try{var match,count,index=0;while(true){top.terminators.lastIndex=index;match=top.terminators.exec(value);if(!match)break;count=processLexem(value.substr(index,match.index-index),match[0]);index=match.index+count}processLexem(value.substr(index));return{relevance:relevance,keyword_count:keyword_count,value:result,language:language_name}}catch(e){if(e.message.indexOf("Illegal")!=-1){return{relevance:0,keyword_count:0,value:escape(value)}}else{throw e}}}function highlightAuto(text){var result={keyword_count:0,relevance:0,value:escape(text)};var second_best=result;for(var key in languages){if(!languages.hasOwnProperty(key))continue;var current=highlight(key,text,false);current.language=key;if(current.keyword_count+current.relevance>second_best.keyword_count+second_best.relevance){second_best=current}if(current.keyword_count+current.relevance>result.keyword_count+result.relevance){second_best=result;result=current}}if(second_best.language){result.second_best=second_best}return result}function fixMarkup(value,tabReplace,useBR){if(tabReplace){value=value.replace(/^((<[^>]+>|\t)+)/gm,function(match,p1,offset,s){return p1.replace(/\t/g,tabReplace)})}if(useBR){value=value.replace(/\n/g,"<br>")}return value}function highlightBlock(block,tabReplace,useBR){var text=blockText(block,useBR);var language=blockLanguage(block);if(language=="no-highlight")return;var result=language?highlight(language,text,true):highlightAuto(text);language=result.language;var original=nodeStream(block);if(original.length){var pre=document.createElement("pre");pre.innerHTML=result.value;result.value=mergeStreams(original,nodeStream(pre),text)}result.value=fixMarkup(result.value,tabReplace,useBR);var class_name=block.className;if(!class_name.match("(\\s|^)(language-)?"+language+"(\\s|$)")){class_name=class_name?class_name+" "+language:language}block.innerHTML=result.value;block.className=class_name;block.result={language:language,kw:result.keyword_count,re:result.relevance};if(result.second_best){block.second_best={language:result.second_best.language,kw:result.second_best.keyword_count,re:result.second_best.relevance}}}function initHighlighting(){if(initHighlighting.called)return;initHighlighting.called=true;Array.prototype.map.call(document.getElementsByTagName("pre"),findCode).filter(Boolean).forEach(function(code){highlightBlock(code,hljs.tabReplace)})}function initHighlightingOnLoad(){window.addEventListener("DOMContentLoaded",initHighlighting,false);window.addEventListener("load",initHighlighting,false)}var languages={};this.LANGUAGES=languages;this.highlight=highlight;this.highlightAuto=highlightAuto;this.fixMarkup=fixMarkup;this.highlightBlock=highlightBlock;this.initHighlighting=initHighlighting;this.initHighlightingOnLoad=initHighlightingOnLoad;this.IDENT_RE="[a-zA-Z][a-zA-Z0-9_]*";this.UNDERSCORE_IDENT_RE="[a-zA-Z_][a-zA-Z0-9_]*";this.NUMBER_RE="\\b\\d+(\\.\\d+)?";this.C_NUMBER_RE="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";this.BINARY_NUMBER_RE="\\b(0b[01]+)";this.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0};this.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[this.BACKSLASH_ESCAPE],relevance:0};this.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[this.BACKSLASH_ESCAPE],relevance:0};this.C_LINE_COMMENT_MODE={className:"comment",begin:"//",end:"$"};this.C_BLOCK_COMMENT_MODE={className:"comment",begin:"/\\*",end:"\\*/"};this.HASH_COMMENT_MODE={className:"comment",begin:"#",end:"$"};this.NUMBER_MODE={className:"number",begin:this.NUMBER_RE,relevance:0};this.C_NUMBER_MODE={className:"number",begin:this.C_NUMBER_RE,relevance:0};this.BINARY_NUMBER_MODE={className:"number",begin:this.BINARY_NUMBER_RE,relevance:0};this.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gim]*/,illegal:/\n/,contains:[this.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[this.BACKSLASH_ESCAPE]}]};this.inherit=function(parent,obj){var result={};for(var key in parent)result[key]=parent[key];if(obj)for(var key in obj)result[key]=obj[key];return result}},languages=[{name:"javascript",create:function(hljs){return{keywords:{keyword:"in if for while finally var new function do return void else break catch "+"instanceof with throw case default try this switch continue typeof delete "+"let yield const",literal:"true false null undefined NaN Infinity"},contains:[hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE,hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,hljs.C_NUMBER_MODE,{begin:"("+hljs.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,hljs.REGEXP_MODE,{begin:/</,end:/>;/,subLanguage:"xml"}],relevance:0},{className:"function",beginWithKeyword:true,end:/{/,keywords:"function",contains:[{className:"title",begin:/[A-Za-z$_][0-9A-Za-z$_]*/},{className:"params",begin:/\(/,end:/\)/,contains:[hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE],illegal:/["'\(]/}],illegal:/\[|%/}]}}},{name:"ruby",create:function(hljs){var RUBY_IDENT_RE="[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?";var RUBY_METHOD_RE="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?";var RUBY_KEYWORDS={keyword:"and false then defined module in return redo if BEGIN retry end for true self when "+"next until do begin unless END rescue nil else break undef not super class case "+"require yield alias while ensure elsif or include"};var YARDOCTAG={className:"yardoctag",begin:"@[A-Za-z]+"};var COMMENTS=[{className:"comment",begin:"#",end:"$",contains:[YARDOCTAG]},{className:"comment",begin:"^\\=begin",end:"^\\=end",contains:[YARDOCTAG],relevance:10},{className:"comment",begin:"^__END__",end:"\\n$"}];var SUBST={className:"subst",begin:"#\\{",end:"}",lexems:RUBY_IDENT_RE,keywords:RUBY_KEYWORDS};var STR_CONTAINS=[hljs.BACKSLASH_ESCAPE,SUBST];var STRINGS=[{className:"string",begin:"'",end:"'",contains:STR_CONTAINS,relevance:0},{className:"string",begin:'"',end:'"',contains:STR_CONTAINS,relevance:0},{className:"string",begin:"%[qw]?\\(",end:"\\)",contains:STR_CONTAINS},{className:"string",begin:"%[qw]?\\[",end:"\\]",contains:STR_CONTAINS},{className:"string",begin:"%[qw]?{",end:"}",contains:STR_CONTAINS},{className:"string",begin:"%[qw]?<",end:">",contains:STR_CONTAINS,relevance:10},{className:"string",begin:"%[qw]?/",end:"/",contains:STR_CONTAINS,relevance:10},{className:"string",begin:"%[qw]?%",end:"%",contains:STR_CONTAINS,relevance:10},{className:"string",begin:"%[qw]?-",end:"-",contains:STR_CONTAINS,relevance:10},{className:"string",begin:"%[qw]?\\|",end:"\\|",contains:STR_CONTAINS,relevance:10}];var FUNCTION={className:"function",beginWithKeyword:true,end:" |$|;",keywords:"def",contains:[{className:"title",begin:RUBY_METHOD_RE,lexems:RUBY_IDENT_RE,keywords:RUBY_KEYWORDS},{className:"params",begin:"\\(",end:"\\)",lexems:RUBY_IDENT_RE,keywords:RUBY_KEYWORDS}].concat(COMMENTS)};var RUBY_DEFAULT_CONTAINS=COMMENTS.concat(STRINGS.concat([{className:"class",beginWithKeyword:true,end:"$|;",keywords:"class module",contains:[{className:"title",begin:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?",relevance:0},{className:"inheritance",begin:"<\\s*",contains:[{className:"parent",begin:"("+hljs.IDENT_RE+"::)?"+hljs.IDENT_RE}]}].concat(COMMENTS)},FUNCTION,{className:"constant",begin:"(::)?(\\b[A-Z]\\w*(::)?)+",relevance:0},{className:"symbol",begin:":",contains:STRINGS.concat([{begin:RUBY_METHOD_RE}]),relevance:0},{className:"symbol",begin:RUBY_IDENT_RE+":",relevance:0},{className:"number",begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",relevance:0},{className:"number",begin:"\\?\\w"},{className:"variable",begin:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{begin:"("+hljs.RE_STARTERS_RE+")\\s*",contains:COMMENTS.concat([{className:"regexp",begin:"/",end:"/[a-z]*",illegal:"\\n",contains:[hljs.BACKSLASH_ESCAPE,SUBST]}]),relevance:0}]));SUBST.contains=RUBY_DEFAULT_CONTAINS;FUNCTION.contains[1].contains=RUBY_DEFAULT_CONTAINS;return{lexems:RUBY_IDENT_RE,keywords:RUBY_KEYWORDS,contains:RUBY_DEFAULT_CONTAINS}}},{name:"python",create:function(hljs){var PROMPT={className:"prompt",begin:/^(>>>|\.\.\.) /};var STRINGS=[{className:"string",begin:/(u|b)?r?'''/,end:/'''/,contains:[PROMPT],relevance:10},{className:"string",begin:/(u|b)?r?"""/,end:/"""/,contains:[PROMPT],relevance:10},{className:"string",begin:/(u|r|ur)'/,end:/'/,contains:[hljs.BACKSLASH_ESCAPE],relevance:10},{className:"string",begin:/(u|r|ur)"/,end:/"/,contains:[hljs.BACKSLASH_ESCAPE],relevance:10},{className:"string",begin:/(b|br)'/,end:/'/,contains:[hljs.BACKSLASH_ESCAPE]},{className:"string",begin:/(b|br)"/,end:/"/,contains:[hljs.BACKSLASH_ESCAPE]}].concat([hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE]);var TITLE={className:"title",begin:hljs.UNDERSCORE_IDENT_RE};var PARAMS={className:"params",begin:/\(/,end:/\)/,contains:["self",hljs.C_NUMBER_MODE,PROMPT].concat(STRINGS)};var FUNC_CLASS_PROTO={beginWithKeyword:true,end:/:/,illegal:/[${=;\n]/,contains:[TITLE,PARAMS],relevance:10};return{keywords:{keyword:"and elif is global as in if from raise for except finally print import pass return "+"exec else break not with class assert yield try while continue del or def lambda "+"nonlocal|10",built_in:"None True False Ellipsis NotImplemented"},illegal:/(<\/|->|\?)/,contains:STRINGS.concat([PROMPT,hljs.HASH_COMMENT_MODE,hljs.inherit(FUNC_CLASS_PROTO,{className:"function",keywords:"def"}),hljs.inherit(FUNC_CLASS_PROTO,{className:"class",keywords:"class"}),hljs.C_NUMBER_MODE,{className:"decorator",begin:/@/,end:/$/},{begin:/\b(print|exec)\(/}])}}},{name:"bash",create:function(hljs){var VAR1={className:"variable",begin:/\$[\w\d#@][\w\d_]*/};var VAR2={className:"variable",begin:/\$\{(.*?)\}/};var QUOTE_STRING={className:"string",begin:/"/,end:/"/,contains:[hljs.BACKSLASH_ESCAPE,VAR1,VAR2,{className:"variable",begin:/\$\(/,end:/\)/,contains:hljs.BACKSLASH_ESCAPE}],relevance:0};var APOS_STRING={className:"string",begin:/'/,end:/'/,relevance:0};return{lexems:/-?[a-z]+/,keywords:{keyword:"if then else elif fi for break continue while in do done exit return set "+"declare case esac export exec",literal:"true false",built_in:"printf echo read cd pwd pushd popd dirs let eval unset typeset readonly "+"getopts source shopt caller type hash bind help sudo",operator:"-ne -eq -lt -gt -f -d -e -s -l -a"},contains:[{className:"shebang",begin:/^#![^\n]+sh\s*$/,relevance:10},{className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:true,contains:[{className:"title",begin:/\w[\w\d_]*/}],relevance:0},hljs.HASH_COMMENT_MODE,hljs.NUMBER_MODE,QUOTE_STRING,APOS_STRING,VAR1,VAR2]}}},{name:"java",create:function(hljs){return{keywords:"false synchronized int abstract float private char boolean static null if const "+"for true while long throw strictfp finally protected import native final return void "+"enum else break transient new catch instanceof byte super volatile case assert short "+"package default double public try this switch continue throws",contains:[{className:"javadoc",begin:"/\\*\\*",end:"\\*/",contains:[{className:"javadoctag",begin:"(^|\\s)@[A-Za-z]+"}],relevance:10},hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE,{className:"class",beginWithKeyword:true,end:"{",keywords:"class interface",excludeEnd:true,illegal:":",contains:[{beginWithKeyword:true,keywords:"extends implements",relevance:10},{className:"title",begin:hljs.UNDERSCORE_IDENT_RE}]},hljs.C_NUMBER_MODE,{className:"annotation",begin:"@[A-Za-z]+"}]}}},{name:"php",create:function(hljs){var VARIABLE={className:"variable",begin:"\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"};var STRINGS=[hljs.inherit(hljs.APOS_STRING_MODE,{illegal:null}),hljs.inherit(hljs.QUOTE_STRING_MODE,{illegal:null}),{className:"string",begin:'b"',end:'"',contains:[hljs.BACKSLASH_ESCAPE]},{className:"string",begin:"b'",end:"'",contains:[hljs.BACKSLASH_ESCAPE]}];var NUMBERS=[hljs.BINARY_NUMBER_MODE,hljs.C_NUMBER_MODE];var TITLE={className:"title",begin:hljs.UNDERSCORE_IDENT_RE};return{case_insensitive:true,keywords:"and include_once list abstract global private echo interface as static endswitch "+"array null if endwhile or const for endforeach self var while isset public "+"protected exit foreach throw elseif include __FILE__ empty require_once do xor "+"return implements parent clone use __CLASS__ __LINE__ else break print eval new "+"catch __METHOD__ case exception php_user_filter default die require __FUNCTION__ "+"enddeclare final try this switch continue endfor endif declare unset true false "+"namespace trait goto instanceof insteadof __DIR__ __NAMESPACE__ __halt_compiler",contains:[hljs.C_LINE_COMMENT_MODE,hljs.HASH_COMMENT_MODE,{className:"comment",begin:"/\\*",end:"\\*/",contains:[{className:"phpdoc",begin:"\\s@[A-Za-z]+"}]},{className:"comment",excludeBegin:true,begin:"__halt_compiler.+?;",endsWithParent:true},{className:"string",begin:"<<<['\"]?\\w+['\"]?$",end:"^\\w+;",contains:[hljs.BACKSLASH_ESCAPE]},{className:"preprocessor",begin:"<\\?php",relevance:10},{className:"preprocessor",begin:"\\?>"},VARIABLE,{className:"function",beginWithKeyword:true,end:"{",keywords:"function",illegal:"\\$|\\[|%",contains:[TITLE,{className:"params",begin:"\\(",end:"\\)",contains:["self",VARIABLE,hljs.C_BLOCK_COMMENT_MODE].concat(STRINGS).concat(NUMBERS)}]},{className:"class",beginWithKeyword:true,end:"{",keywords:"class",illegal:"[:\\(\\$]",contains:[{beginWithKeyword:true,endsWithParent:true,keywords:"extends",contains:[TITLE]},TITLE]},{begin:"=>"}].concat(STRINGS).concat(NUMBERS)}}},{name:"perl",create:function(hljs){var PERL_KEYWORDS="getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc "+"ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime "+"readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qq"+"fileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent "+"shutdown dump chomp connect getsockname die socketpair close flock exists index shmget"+"sub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr "+"unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 "+"getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline "+"endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand "+"mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink "+"getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr "+"untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link "+"getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller "+"lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and "+"sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 "+"chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach "+"tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedir"+"ioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe "+"atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when";var SUBST={className:"subst",begin:"[$@]\\{",end:"\\}",keywords:PERL_KEYWORDS,relevance:10};var VAR1={className:"variable",begin:"\\$\\d"};var VAR2={className:"variable",begin:"[\\$\\%\\@\\*](\\^\\w\\b|#\\w+(\\:\\:\\w+)*|[^\\s\\w{]|{\\w+}|\\w+(\\:\\:\\w*)*)"};var STRING_CONTAINS=[hljs.BACKSLASH_ESCAPE,SUBST,VAR1,VAR2];var METHOD={begin:"->",contains:[{begin:hljs.IDENT_RE},{begin:"{",end:"}"}]};var COMMENT={className:"comment",begin:"^(__END__|__DATA__)",end:"\\n$",relevance:5};var PERL_DEFAULT_CONTAINS=[VAR1,VAR2,hljs.HASH_COMMENT_MODE,COMMENT,{className:"comment",begin:"^\\=\\w",end:"\\=cut",endsWithParent:true},METHOD,{className:"string",begin:"q[qwxr]?\\s*\\(",end:"\\)",contains:STRING_CONTAINS,relevance:5},{className:"string",begin:"q[qwxr]?\\s*\\[",end:"\\]",contains:STRING_CONTAINS,relevance:5},{className:"string",begin:"q[qwxr]?\\s*\\{",end:"\\}",contains:STRING_CONTAINS,relevance:5},{className:"string",begin:"q[qwxr]?\\s*\\|",end:"\\|",contains:STRING_CONTAINS,relevance:5},{className:"string",begin:"q[qwxr]?\\s*\\<",end:"\\>",contains:STRING_CONTAINS,relevance:5},{className:"string",begin:"qw\\s+q",end:"q",contains:STRING_CONTAINS,relevance:5},{className:"string",begin:"'",end:"'",contains:[hljs.BACKSLASH_ESCAPE],relevance:0},{className:"string",begin:'"',end:'"',contains:STRING_CONTAINS,relevance:0},{className:"string",begin:"`",end:"`",contains:[hljs.BACKSLASH_ESCAPE]},{className:"string",begin:"{\\w+}",relevance:0},{className:"string",begin:"-?\\w+\\s*\\=\\>",relevance:0},{className:"number",begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",relevance:0},{begin:"("+hljs.RE_STARTERS_RE+"|\\b(split|return|print|reverse|grep)\\b)\\s*",keywords:"split return print reverse grep",relevance:0,contains:[hljs.HASH_COMMENT_MODE,COMMENT,{className:"regexp",begin:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",relevance:10},{className:"regexp",begin:"(m|qr)?/",end:"/[a-z]*",contains:[hljs.BACKSLASH_ESCAPE],relevance:0}]},{className:"sub",beginWithKeyword:true,end:"(\\s*\\(.*?\\))?[;{]",keywords:"sub",relevance:5},{className:"operator",begin:"-\\w\\b",relevance:0}];SUBST.contains=PERL_DEFAULT_CONTAINS;METHOD.contains[1].contains=PERL_DEFAULT_CONTAINS;return{keywords:PERL_KEYWORDS,contains:PERL_DEFAULT_CONTAINS}}},{name:"cpp",create:function(hljs){var CPP_KEYWORDS={keyword:"false int float while private char catch export virtual operator sizeof "+"dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace "+"unsigned long throw volatile static protected bool template mutable if public friend "+"do return goto auto void enum else break new extern using true class asm case typeid "+"short reinterpret_cast|10 default double register explicit signed typename try this "+"switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype "+"noexcept nullptr static_assert thread_local restrict _Bool complex",built_in:"std string cin cout cerr clog stringstream istringstream ostringstream "+"auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set "+"unordered_map unordered_multiset unordered_multimap array shared_ptr"};return{keywords:CPP_KEYWORDS,illegal:"</",contains:[hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,hljs.QUOTE_STRING_MODE,{className:"string",begin:"'\\\\?.",end:"'",illegal:"."},{className:"number",begin:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},hljs.C_NUMBER_MODE,{className:"preprocessor",begin:"#",end:"$",contains:[{begin:"<",end:">",illegal:"\\n"},hljs.C_LINE_COMMENT_MODE]},{className:"stl_container",begin:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",end:">",keywords:CPP_KEYWORDS,relevance:10,contains:["self"]}]}}},{name:"objectivec",create:function(hljs){var OBJC_KEYWORDS={keyword:"int float while private char catch export sizeof typedef const struct for union "+"unsigned long volatile static protected bool mutable if public do return goto void "+"enum else break extern asm case short default double throw register explicit "+"signed typename try this switch continue wchar_t inline readonly assign property "+"self synchronized end synthesize id optional required "+"nonatomic super unichar finally dynamic IBOutlet IBAction selector strong "+"weak readonly",literal:"false true FALSE TRUE nil YES NO NULL",built_in:"NSString NSDictionary CGRect CGPoint UIButton UILabel UITextView UIWebView MKMapView "+"UISegmentedControl NSObject UITableViewDelegate UITableViewDataSource NSThread "+"UIActivityIndicator UITabbar UIToolBar UIBarButtonItem UIImageView NSAutoreleasePool "+"UITableView BOOL NSInteger CGFloat NSException NSLog NSMutableString NSMutableArray "+"NSMutableDictionary NSURL NSIndexPath CGSize UITableViewCell UIView UIViewController "+"UINavigationBar UINavigationController UITabBarController UIPopoverController "+"UIPopoverControllerDelegate UIImage NSNumber UISearchBar NSFetchedResultsController "+"NSFetchedResultsChangeType UIScrollView UIScrollViewDelegate UIEdgeInsets UIColor "+"UIFont UIApplication NSNotFound NSNotificationCenter NSNotification "+"UILocalNotification NSBundle NSFileManager NSTimeInterval NSDate NSCalendar "+"NSUserDefaults UIWindow NSRange NSArray NSError NSURLRequest NSURLConnection "+"UIInterfaceOrientation MPMoviePlayerController dispatch_once_t "+"dispatch_queue_t dispatch_sync dispatch_async dispatch_once"};return{keywords:OBJC_KEYWORDS,illegal:"</",contains:[hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,hljs.C_NUMBER_MODE,hljs.QUOTE_STRING_MODE,{className:"string",begin:"'",end:"[^\\\\]'",illegal:"[^\\\\][^']"},{className:"preprocessor",begin:"#import",end:"$",contains:[{className:"title",begin:'"',end:'"'},{className:"title",begin:"<",end:">"}]},{className:"preprocessor",begin:"#",end:"$"},{className:"class",beginWithKeyword:true,end:"({|$)",keywords:"interface class protocol implementation",contains:[{className:"id",begin:hljs.UNDERSCORE_IDENT_RE}]},{className:"variable",begin:"\\."+hljs.UNDERSCORE_IDENT_RE,relevance:0}]}}},{name:"cs",create:function(hljs){return{keywords:"abstract as base bool break byte case catch char checked class const continue decimal "+"default delegate do double else enum event explicit extern false finally fixed float "+"for foreach goto if implicit in int interface internal is lock long namespace new null "+"object operator out override params private protected public readonly ref return sbyte "+"sealed short sizeof stackalloc static string struct switch this throw true try typeof "+"uint ulong unchecked unsafe ushort using virtual volatile void while async await "+"ascending descending from get group into join let orderby partial select set value var "+"where yield",contains:[{className:"comment",begin:"///",end:"$",returnBegin:true,contains:[{className:"xmlDocTag",begin:"///|<!--|-->"},{className:"xmlDocTag",begin:"</?",end:">"}]},hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,{className:"preprocessor",begin:"#",end:"$",keywords:"if else elif endif define undef warning error line region endregion pragma checksum"},{className:"string",begin:'@"',end:'"',contains:[{begin:'""'}]},hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE,hljs.C_NUMBER_MODE]}}},{name:"sql",create:function(hljs){return{case_insensitive:true,contains:[{className:"operator",begin:"(begin|end|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma|grant)\\b(?!:)",end:";",endsWithParent:true,keywords:{keyword:"all partial global month current_timestamp using go revoke smallint "+"indicator end-exec disconnect zone with character assertion to add current_user "+"usage input local alter match collate real then rollback get read timestamp "+"session_user not integer bit unique day minute desc insert execute like ilike|2 "+"level decimal drop continue isolation found where constraints domain right "+"national some module transaction relative second connect escape close system_user "+"for deferred section cast current sqlstate allocate intersect deallocate numeric "+"public preserve full goto initially asc no key output collation group by union "+"session both last language constraint column of space foreign deferrable prior "+"connection unknown action commit view or first into float year primary cascaded "+"except restrict set references names table outer open select size are rows from "+"prepare distinct leading create only next inner authorization schema "+"corresponding option declare precision immediate else timezone_minute external "+"varying translation true case exception join hour default double scroll value "+"cursor descriptor values dec fetch procedure delete and false int is describe "+"char as at in varchar null trailing any absolute current_time end grant "+"privileges when cross check write current_date pad begin temporary exec time "+"update catalog user sql date on identity timezone_hour natural whenever interval "+"work order cascade diagnostics nchar having left call do handler load replace "+"truncate start lock show pragma exists number trigger if before after each row",aggregate:"count sum min max avg"},contains:[{className:"string",begin:"'",end:"'",contains:[hljs.BACKSLASH_ESCAPE,{begin:"''"}],relevance:0},{className:"string",begin:'"',end:'"',contains:[hljs.BACKSLASH_ESCAPE,{begin:'""'}],relevance:0},{className:"string",begin:"`",end:"`",contains:[hljs.BACKSLASH_ESCAPE]},hljs.C_NUMBER_MODE]},hljs.C_BLOCK_COMMENT_MODE,{className:"comment",begin:"--",end:"$"}]}
}},{name:"xml",create:function(hljs){var XML_IDENT_RE="[A-Za-z0-9\\._:-]+";var TAG_INTERNALS={endsWithParent:true,relevance:0,contains:[{className:"attribute",begin:XML_IDENT_RE,relevance:0},{begin:'="',returnBegin:true,end:'"',contains:[{className:"value",begin:'"',endsWithParent:true}]},{begin:"='",returnBegin:true,end:"'",contains:[{className:"value",begin:"'",endsWithParent:true}]},{begin:"=",contains:[{className:"value",begin:"[^\\s/>]+"}]}]};return{case_insensitive:true,contains:[{className:"pi",begin:"<\\?",end:"\\?>",relevance:10},{className:"doctype",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},{className:"comment",begin:"<!--",end:"-->",relevance:10},{className:"cdata",begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{title:"style"},contains:[TAG_INTERNALS],starts:{end:"</style>",returnEnd:true,subLanguage:"css"}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{title:"script"},contains:[TAG_INTERNALS],starts:{end:"</script>",returnEnd:true,subLanguage:"javascript"}},{begin:"<%",end:"%>",subLanguage:"vbscript"},{className:"tag",begin:"</?",end:"/?>",relevance:0,contains:[{className:"title",begin:"[^ /><]+"},TAG_INTERNALS]}]}}},{name:"css",create:function(hljs){var IDENT_RE="[a-zA-Z-][a-zA-Z0-9_-]*";var FUNCTION={className:"function",begin:IDENT_RE+"\\(",end:"\\)",contains:["self",hljs.NUMBER_MODE,hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE]};return{case_insensitive:true,illegal:"[=/|']",contains:[hljs.C_BLOCK_COMMENT_MODE,{className:"id",begin:"\\#[A-Za-z0-9_-]+"},{className:"class",begin:"\\.[A-Za-z0-9_-]+",relevance:0},{className:"attr_selector",begin:"\\[",end:"\\]",illegal:"$"},{className:"pseudo",begin:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{className:"at_rule",begin:"@(font-face|page)",lexems:"[a-z-]+",keywords:"font-face page"},{className:"at_rule",begin:"@",end:"[{;]",contains:[{className:"keyword",begin:/\S+/},{begin:/\s/,endsWithParent:true,excludeEnd:true,relevance:0,contains:[FUNCTION,hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE,hljs.NUMBER_MODE]}]},{className:"tag",begin:IDENT_RE,relevance:0},{className:"rules",begin:"{",end:"}",illegal:"[^\\s]",relevance:0,contains:[hljs.C_BLOCK_COMMENT_MODE,{className:"rule",begin:"[^\\s]",returnBegin:true,end:";",endsWithParent:true,contains:[{className:"attribute",begin:"[A-Z\\_\\.\\-]+",end:":",excludeEnd:true,illegal:"[^\\s]",starts:{className:"value",endsWithParent:true,excludeEnd:true,contains:[FUNCTION,hljs.NUMBER_MODE,hljs.QUOTE_STRING_MODE,hljs.APOS_STRING_MODE,hljs.C_BLOCK_COMMENT_MODE,{className:"hexcolor",begin:"#[0-9A-Fa-f]+"},{className:"important",begin:"!important"}]}}]}]}]}}},{name:"scala",create:function(hljs){var ANNOTATION={className:"annotation",begin:"@[A-Za-z]+"};var STRING={className:"string",begin:'u?r?"""',end:'"""',relevance:10};return{keywords:"type yield lazy override def with val var false true sealed abstract private trait "+"object null if for while throw finally protected extends import final return else "+"break new catch super class case package default try this match continue throws",contains:[{className:"javadoc",begin:"/\\*\\*",end:"\\*/",contains:[{className:"javadoctag",begin:"@[A-Za-z]+"}],relevance:10},hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,STRING,hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE,{className:"class",begin:"((case )?class |object |trait )",end:"({|$)",illegal:":",keywords:"case class trait object",contains:[{beginWithKeyword:true,keywords:"extends with",relevance:10},{className:"title",begin:hljs.UNDERSCORE_IDENT_RE},{className:"params",begin:"\\(",end:"\\)",contains:[hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE,STRING,ANNOTATION]}]},hljs.C_NUMBER_MODE,ANNOTATION]}}},{name:"coffeescript",create:function(hljs){var KEYWORDS={keyword:"in if for while finally new do return else break catch instanceof throw try this "+"switch continue typeof delete debugger super "+"then unless until loop of by when and or is isnt not",literal:"true false null undefined "+"yes no on off",reserved:"case default function var void with const let enum export import native "+"__hasProp __extends __slice __bind __indexOf",built_in:"npm require console print module exports global window document"};var JS_IDENT_RE="[A-Za-z$_][0-9A-Za-z$_]*";var TITLE={className:"title",begin:JS_IDENT_RE};var SUBST={className:"subst",begin:"#\\{",end:"}",keywords:KEYWORDS};var EXPRESSIONS=[hljs.BINARY_NUMBER_MODE,hljs.inherit(hljs.C_NUMBER_MODE,{starts:{end:"(\\s*/)?",relevance:0}}),{className:"string",begin:"'''",end:"'''",contains:[hljs.BACKSLASH_ESCAPE]},{className:"string",begin:"'",end:"'",contains:[hljs.BACKSLASH_ESCAPE],relevance:0},{className:"string",begin:'"""',end:'"""',contains:[hljs.BACKSLASH_ESCAPE,SUBST]},{className:"string",begin:'"',end:'"',contains:[hljs.BACKSLASH_ESCAPE,SUBST],relevance:0},{className:"regexp",begin:"///",end:"///",contains:[hljs.HASH_COMMENT_MODE]},{className:"regexp",begin:"//[gim]*",relevance:0},{className:"regexp",begin:"/\\S(\\\\.|[^\\n])*?/[gim]*(?=\\s|\\W|$)"},{className:"property",begin:"@"+JS_IDENT_RE},{begin:"`",end:"`",excludeBegin:true,excludeEnd:true,subLanguage:"javascript"}];SUBST.contains=EXPRESSIONS;return{keywords:KEYWORDS,contains:EXPRESSIONS.concat([{className:"comment",begin:"###",end:"###"},hljs.HASH_COMMENT_MODE,{className:"function",begin:"("+JS_IDENT_RE+"\\s*=\\s*)?(\\(.*\\))?\\s*[-=]>",end:"[-=]>",returnBegin:true,contains:[TITLE,{className:"params",begin:"\\(",returnBegin:true,contains:[{begin:/\(/,end:/\)/,keywords:KEYWORDS,contains:["self"].concat(EXPRESSIONS)}]}]},{className:"class",beginWithKeyword:true,keywords:"class",end:"$",illegal:"[:\\[\\]]",contains:[{beginWithKeyword:true,keywords:"extends",endsWithParent:true,illegal:":",contains:[TITLE]},TITLE]},{className:"attribute",begin:JS_IDENT_RE+":",end:":",returnBegin:true,excludeEnd:true}])}}},{name:"lisp",create:function(hljs){var LISP_IDENT_RE="[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#!]*";var LISP_SIMPLE_NUMBER_RE="(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s)(\\+|\\-)?\\d+)?";var SHEBANG={className:"shebang",begin:"^#!",end:"$"};var LITERAL={className:"literal",begin:"\\b(t{1}|nil)\\b"};var NUMBERS=[{className:"number",begin:LISP_SIMPLE_NUMBER_RE},{className:"number",begin:"#b[0-1]+(/[0-1]+)?"},{className:"number",begin:"#o[0-7]+(/[0-7]+)?"},{className:"number",begin:"#x[0-9a-f]+(/[0-9a-f]+)?"},{className:"number",begin:"#c\\("+LISP_SIMPLE_NUMBER_RE+" +"+LISP_SIMPLE_NUMBER_RE,end:"\\)"}];var STRING={className:"string",begin:'"',end:'"',contains:[hljs.BACKSLASH_ESCAPE],relevance:0};var COMMENT={className:"comment",begin:";",end:"$"};var VARIABLE={className:"variable",begin:"\\*",end:"\\*"};var KEYWORD={className:"keyword",begin:"[:&]"+LISP_IDENT_RE};var QUOTED_LIST={begin:"\\(",end:"\\)",contains:["self",LITERAL,STRING].concat(NUMBERS)};var QUOTED1={className:"quoted",begin:"['`]\\(",end:"\\)",contains:NUMBERS.concat([STRING,VARIABLE,KEYWORD,QUOTED_LIST])};var QUOTED2={className:"quoted",begin:"\\(quote ",end:"\\)",keywords:{title:"quote"},contains:NUMBERS.concat([STRING,VARIABLE,KEYWORD,QUOTED_LIST])};var LIST={className:"list",begin:"\\(",end:"\\)"};var BODY={endsWithParent:true,relevance:0};LIST.contains=[{className:"title",begin:LISP_IDENT_RE},BODY];BODY.contains=[QUOTED1,QUOTED2,LIST,LITERAL].concat(NUMBERS).concat([STRING,COMMENT,VARIABLE,KEYWORD]);return{illegal:"[^\\s]",contains:NUMBERS.concat([SHEBANG,LITERAL,STRING,COMMENT,QUOTED1,QUOTED2,LIST])}}},{name:"clojure",create:function(hljs){var keywords={built_in:"def cond apply if-not if-let if not not= = &lt; < > &lt;= <= >= == + / * - rem "+"quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? "+"set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? "+"class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? "+"string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . "+"inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last "+"drop-while while intern condp case reduced cycle split-at split-with repeat replicate "+"iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext "+"nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends "+"add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler "+"set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter "+"monitor-exit defmacro defn defn- macroexpand macroexpand-1 for doseq dosync dotimes and or "+"when when-not when-let comp juxt partial sequence memoize constantly complement identity assert "+"peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast "+"sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import "+"intern refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! "+"assoc! dissoc! pop! disj! import use class type num float double short byte boolean bigint biginteger "+"bigdec print-method print-dup throw-if throw printf format load compile get-in update-in pr pr-on newline "+"flush read slurp read-line subvec with-open memfn time ns assert re-find re-groups rand-int rand mod locking "+"assert-valid-fdecl alias namespace resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! "+"reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! "+"new next conj set! memfn to-array future future-call into-array aset gen-class reduce merge map filter find empty "+"hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list "+"disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer "+"chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate "+"unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta "+"lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"};var CLJ_IDENT_RE="[a-zA-Z_0-9\\!\\.\\?\\-\\+\\*\\/\\<\\=\\>\\&\\#\\$';]+";var SIMPLE_NUMBER_RE="[\\s:\\(\\{]+\\d+(\\.\\d+)?";var NUMBER={className:"number",begin:SIMPLE_NUMBER_RE,relevance:0};var STRING={className:"string",begin:'"',end:'"',contains:[hljs.BACKSLASH_ESCAPE],relevance:0};var COMMENT={className:"comment",begin:";",end:"$",relevance:0};var COLLECTION={className:"collection",begin:"[\\[\\{]",end:"[\\]\\}]"};var HINT={className:"comment",begin:"\\^"+CLJ_IDENT_RE};var HINT_COL={className:"comment",begin:"\\^\\{",end:"\\}"};var KEY={className:"attribute",begin:"[:]"+CLJ_IDENT_RE};var LIST={className:"list",begin:"\\(",end:"\\)"};var BODY={endsWithParent:true,keywords:{literal:"true false nil"},relevance:0};var TITLE={keywords:keywords,lexems:CLJ_IDENT_RE,className:"title",begin:CLJ_IDENT_RE,starts:BODY};LIST.contains=[{className:"comment",begin:"comment"},TITLE];BODY.contains=[LIST,STRING,HINT,HINT_COL,COMMENT,KEY,COLLECTION,NUMBER];COLLECTION.contains=[LIST,STRING,HINT,COMMENT,KEY,COLLECTION,NUMBER];return{illegal:"\\S",contains:[COMMENT,LIST]}}},{name:"http",create:function(hljs){return{illegal:"\\S",contains:[{className:"status",begin:"^HTTP/[0-9\\.]+",end:"$",contains:[{className:"number",begin:"\\b\\d{3}\\b"}]},{className:"request",begin:"^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",returnBegin:true,end:"$",contains:[{className:"string",begin:" ",end:" ",excludeBegin:true,excludeEnd:true}]},{className:"attribute",begin:"^\\w",end:": ",excludeEnd:true,illegal:"\\n|\\s|=",starts:{className:"string",end:"$"}},{begin:"\\n\\n",starts:{subLanguage:"",endsWithParent:true}}]}}}];for(var i=0;i<languages.length;++i){hljs.LANGUAGES[languages[i].name]=languages[i].create(hljs)}module.exports={styles:{far:".hljs-far{}.hljs-far pre code{display:block;padding:0.5em;background:#000080;}.hljs-far pre code,.hljs-far pre .subst{color:#0FF;}.hljs-far pre .string,.hljs-far pre .ruby .string,.hljs-far pre .haskell .type,.hljs-far pre .tag .value,.hljs-far pre .css .rules .value,.hljs-far pre .css .rules .value .number,.hljs-far pre .preprocessor,.hljs-far pre .ruby .symbol,.hljs-far pre .ruby .symbol .string,.hljs-far pre .built_in,.hljs-far pre .sql .aggregate,.hljs-far pre .django .template_tag,.hljs-far pre .django .variable,.hljs-far pre .smalltalk .class,.hljs-far pre .addition,.hljs-far pre .apache .tag,.hljs-far pre .apache .cbracket,.hljs-far pre .tex .command,.hljs-far pre .clojure .title,.hljs-far pre .coffeescript .attribute{color:#FF0;}.hljs-far pre .keyword,.hljs-far pre .css .id,.hljs-far pre .title,.hljs-far pre .haskell .type,.hljs-far pre .vbscript .built_in,.hljs-far pre .sql .aggregate,.hljs-far pre .rsl .built_in,.hljs-far pre .smalltalk .class,.hljs-far pre .xml .tag .title,.hljs-far pre .winutils,.hljs-far pre .flow,.hljs-far pre .change,.hljs-far pre .envvar,.hljs-far pre .bash .variable,.hljs-far pre .tex .special,.hljs-far pre .clojure .built_in{color:#FFF;}.hljs-far pre .comment,.hljs-far pre .phpdoc,.hljs-far pre .javadoc,.hljs-far pre .java .annotation,.hljs-far pre .template_comment,.hljs-far pre .deletion,.hljs-far pre .apache .sqbracket,.hljs-far pre .tex .formula{color:#888;}.hljs-far pre .number,.hljs-far pre .date,.hljs-far pre .regexp,.hljs-far pre .literal,.hljs-far pre .smalltalk .symbol,.hljs-far pre .smalltalk .char,.hljs-far pre .clojure .attribute{color:#0F0;}.hljs-far pre .python .decorator,.hljs-far pre .django .filter .argument,.hljs-far pre .smalltalk .localvars,.hljs-far pre .smalltalk .array,.hljs-far pre .attr_selector,.hljs-far pre .pseudo,.hljs-far pre .xml .pi,.hljs-far pre .diff .header,.hljs-far pre .chunk,.hljs-far pre .shebang,.hljs-far pre .nginx .built_in,.hljs-far pre .prompt{color:#008080;}.hljs-far pre .keyword,.hljs-far pre .css .id,.hljs-far pre .title,.hljs-far pre .haskell .type,.hljs-far pre .vbscript .built_in,.hljs-far pre .sql .aggregate,.hljs-far pre .rsl .built_in,.hljs-far pre .smalltalk .class,.hljs-far pre .winutils,.hljs-far pre .flow,.hljs-far pre .apache .tag,.hljs-far pre .nginx .built_in,.hljs-far pre .tex .command,.hljs-far pre .tex .special,.hljs-far pre .request,.hljs-far pre .status{font-weight:bold;}",dark:".hljs-dark{}.hljs-dark pre code{display:block;padding:0.5em;background:#444;}.hljs-dark pre .keyword,.hljs-dark pre .literal,.hljs-dark pre .change,.hljs-dark pre .winutils,.hljs-dark pre .flow,.hljs-dark pre .lisp .title,.hljs-dark pre .clojure .built_in,.hljs-dark pre .nginx .title,.hljs-dark pre .tex .special{color:white;}.hljs-dark pre code,.hljs-dark pre .subst{color:#DDD;}.hljs-dark pre .string,.hljs-dark pre .title,.hljs-dark pre .haskell .type,.hljs-dark pre .ini .title,.hljs-dark pre .tag .value,.hljs-dark pre .css .rules .value,.hljs-dark pre .preprocessor,.hljs-dark pre .ruby .symbol,.hljs-dark pre .ruby .symbol .string,.hljs-dark pre .ruby .class .parent,.hljs-dark pre .built_in,.hljs-dark pre .sql .aggregate,.hljs-dark pre .django .template_tag,.hljs-dark pre .django .variable,.hljs-dark pre .smalltalk .class,.hljs-dark pre .javadoc,.hljs-dark pre .ruby .string,.hljs-dark pre .django .filter .argument,.hljs-dark pre .smalltalk .localvars,.hljs-dark pre .smalltalk .array,.hljs-dark pre .attr_selector,.hljs-dark pre .pseudo,.hljs-dark pre .addition,.hljs-dark pre .stream,.hljs-dark pre .envvar,.hljs-dark pre .apache .tag,.hljs-dark pre .apache .cbracket,.hljs-dark pre .tex .command,.hljs-dark pre .prompt,.hljs-dark pre .coffeescript .attribute{color:#D88;}.hljs-dark pre .comment,.hljs-dark pre .java .annotation,.hljs-dark pre .python .decorator,.hljs-dark pre .template_comment,.hljs-dark pre .pi,.hljs-dark pre .doctype,.hljs-dark pre .deletion,.hljs-dark pre .shebang,.hljs-dark pre .apache .sqbracket,.hljs-dark pre .tex .formula{color:#777;}.hljs-dark pre .keyword,.hljs-dark pre .literal,.hljs-dark pre .title,.hljs-dark pre .css .id,.hljs-dark pre .phpdoc,.hljs-dark pre .haskell .type,.hljs-dark pre .vbscript .built_in,.hljs-dark pre .sql .aggregate,.hljs-dark pre .rsl .built_in,.hljs-dark pre .smalltalk .class,.hljs-dark pre .diff .header,.hljs-dark pre .chunk,.hljs-dark pre .winutils,.hljs-dark pre .bash .variable,.hljs-dark pre .apache .tag,.hljs-dark pre .tex .special,.hljs-dark pre .request,.hljs-dark pre .status{font-weight:bold;}.hljs-dark pre .coffeescript .javascript,.hljs-dark pre .javascript .xml,.hljs-dark pre .tex .formula,.hljs-dark pre .xml .javascript,.hljs-dark pre .xml .vbscript,.hljs-dark pre .xml .css,.hljs-dark pre .xml .cdata{opacity:0.5;}",docco:".hljs-docco{}.hljs-docco pre code{display:block;padding:0.5em;color:#000;background:#f8f8ff;}.hljs-docco pre .comment,.hljs-docco pre .template_comment,.hljs-docco pre .diff .header,.hljs-docco pre .javadoc{color:#408080;font-style:italic;}.hljs-docco pre .keyword,.hljs-docco pre .assignment,.hljs-docco pre .literal,.hljs-docco pre .css .rule .keyword,.hljs-docco pre .winutils,.hljs-docco pre .javascript .title,.hljs-docco pre .lisp .title,.hljs-docco pre .subst{color:#954121;}.hljs-docco pre .number,.hljs-docco pre .hexcolor{color:#40a070;}.hljs-docco pre .string,.hljs-docco pre .tag .value,.hljs-docco pre .phpdoc,.hljs-docco pre .tex .formula{color:#219161;}.hljs-docco pre .title,.hljs-docco pre .id{color:#19469D;}.hljs-docco pre .params{color:#00F;}.hljs-docco pre .javascript .title,.hljs-docco pre .lisp .title,.hljs-docco pre .subst{font-weight:normal;}.hljs-docco pre .class .title,.hljs-docco pre .haskell .label,.hljs-docco pre .tex .command{color:#458;font-weight:bold;}.hljs-docco pre .tag,.hljs-docco pre .tag .title,.hljs-docco pre .rules .property,.hljs-docco pre .django .tag .keyword{color:#000080;font-weight:normal;}.hljs-docco pre .attribute,.hljs-docco pre .variable,.hljs-docco pre .instancevar,.hljs-docco pre .lisp .body{color:#008080;}.hljs-docco pre .regexp{color:#bb6688;}.hljs-docco pre .class{color:#458;font-weight:bold;}.hljs-docco pre .symbol,.hljs-docco pre .ruby .symbol .string,.hljs-docco pre .ruby .symbol .keyword,.hljs-docco pre .ruby .symbol .keymethods,.hljs-docco pre .lisp .keyword,.hljs-docco pre .tex .special,.hljs-docco pre .input_number{color:#990073;}.hljs-docco pre .builtin,.hljs-docco pre .constructor,.hljs-docco pre .built_in,.hljs-docco pre .lisp .title{color:#0086b3;}.hljs-docco pre .preprocessor,.hljs-docco pre .pi,.hljs-docco pre .doctype,.hljs-docco pre .shebang,.hljs-docco pre .cdata{color:#999;font-weight:bold;}.hljs-docco pre .deletion{background:#ffdddd;}.hljs-docco pre .addition{background:#ddffdd;}.hljs-docco pre .diff .change{background:#0086b3;}.hljs-docco pre .chunk{color:#aaaaaa;}.hljs-docco pre .tex .formula{opacity:0.5;}",ascetic:".hljs-ascetic{}.hljs-ascetic pre code{display:block;padding:0.5em;background:white;color:black;}.hljs-ascetic pre .string,.hljs-ascetic pre .tag .value,.hljs-ascetic pre .filter .argument,.hljs-ascetic pre .addition,.hljs-ascetic pre .change,.hljs-ascetic pre .apache .tag,.hljs-ascetic pre .apache .cbracket,.hljs-ascetic pre .nginx .built_in,.hljs-ascetic pre .tex .formula{color:#888;}.hljs-ascetic pre .comment,.hljs-ascetic pre .template_comment,.hljs-ascetic pre .shebang,.hljs-ascetic pre .doctype,.hljs-ascetic pre .pi,.hljs-ascetic pre .javadoc,.hljs-ascetic pre .deletion,.hljs-ascetic pre .apache .sqbracket{color:#CCC;}.hljs-ascetic pre .keyword,.hljs-ascetic pre .tag .title,.hljs-ascetic pre .ini .title,.hljs-ascetic pre .lisp .title,.hljs-ascetic pre .clojure .title,.hljs-ascetic pre .http .title,.hljs-ascetic pre .nginx .title,.hljs-ascetic pre .css .tag,.hljs-ascetic pre .winutils,.hljs-ascetic pre .flow,.hljs-ascetic pre .apache .tag,.hljs-ascetic pre .tex .command,.hljs-ascetic pre .request,.hljs-ascetic pre .status{font-weight:bold;}",obsidian:".hljs-obsidian{}.hljs-obsidian pre code{display:block;padding:0.5em;background:#282B2E;}.hljs-obsidian pre .keyword,.hljs-obsidian pre .literal,.hljs-obsidian pre .change,.hljs-obsidian pre .winutils,.hljs-obsidian pre .flow,.hljs-obsidian pre .lisp .title,.hljs-obsidian pre .clojure .built_in,.hljs-obsidian pre .nginx .title,.hljs-obsidian pre .css .id,.hljs-obsidian pre .tex .special{color:#93C763;}.hljs-obsidian pre .number{color:#FFCD22;}.hljs-obsidian pre code{color:#E0E2E4;}.hljs-obsidian pre .css .tag,.hljs-obsidian pre .css .pseudo{color:#D0D2B5;}.hljs-obsidian pre .attribute,.hljs-obsidian pre code .constant{color:#668BB0;}.hljs-obsidian pre .xml .attribute{color:#B3B689;}.hljs-obsidian pre .xml .tag .value{color:#E8E2B7;}.hljs-obsidian pre .code,.hljs-obsidian pre .class .title,.hljs-obsidian pre .header{color:white;}.hljs-obsidian pre .class,.hljs-obsidian pre .hexcolor{color:#93C763;}.hljs-obsidian pre .regexp{color:#D39745;}.hljs-obsidian pre .at_rule,.hljs-obsidian pre .at_rule .keyword{color:#A082BD;}.hljs-obsidian pre .doctype{color:#557182;}.hljs-obsidian pre .link_url,.hljs-obsidian pre .tag,.hljs-obsidian pre .tag .title,.hljs-obsidian pre .bullet,.hljs-obsidian pre .subst,.hljs-obsidian pre .emphasis,.hljs-obsidian pre .haskell .type,.hljs-obsidian pre .preprocessor,.hljs-obsidian pre .ruby .class .parent,.hljs-obsidian pre .built_in,.hljs-obsidian pre .sql .aggregate,.hljs-obsidian pre .django .template_tag,.hljs-obsidian pre .django .variable,.hljs-obsidian pre .smalltalk .class,.hljs-obsidian pre .javadoc,.hljs-obsidian pre .django .filter .argument,.hljs-obsidian pre .smalltalk .localvars,.hljs-obsidian pre .smalltalk .array,.hljs-obsidian pre .attr_selector,.hljs-obsidian pre .pseudo,.hljs-obsidian pre .addition,.hljs-obsidian pre .stream,.hljs-obsidian pre .envvar,.hljs-obsidian pre .apache .tag,.hljs-obsidian pre .apache .cbracket,.hljs-obsidian pre .tex .command,.hljs-obsidian pre .prompt{color:#8CBBAD;}.hljs-obsidian pre .string{color:#EC7600;}.hljs-obsidian pre .comment,.hljs-obsidian pre .java .annotation,.hljs-obsidian pre .blockquote,.hljs-obsidian pre .horizontal_rule,.hljs-obsidian pre .python .decorator,.hljs-obsidian pre .template_comment,.hljs-obsidian pre .pi,.hljs-obsidian pre .deletion,.hljs-obsidian pre .shebang,.hljs-obsidian pre .apache .sqbracket,.hljs-obsidian pre .tex .formula{color:#818E96;}.hljs-obsidian pre .keyword,.hljs-obsidian pre .literal,.hljs-obsidian pre .css .id,.hljs-obsidian pre .phpdoc,.hljs-obsidian pre .title,.hljs-obsidian pre .header,.hljs-obsidian pre .haskell .type,.hljs-obsidian pre .vbscript .built_in,.hljs-obsidian pre .sql .aggregate,.hljs-obsidian pre .rsl .built_in,.hljs-obsidian pre .smalltalk .class,.hljs-obsidian pre .diff .header,.hljs-obsidian pre .chunk,.hljs-obsidian pre .winutils,.hljs-obsidian pre .bash .variable,.hljs-obsidian pre .apache .tag,.hljs-obsidian pre .tex .special,.hljs-obsidian pre .request,.hljs-obsidian pre .at_rule .keyword,.hljs-obsidian pre .status{font-weight:bold;}.hljs-obsidian pre .coffeescript .javascript,.hljs-obsidian pre .javascript .xml,.hljs-obsidian pre .tex .formula,.hljs-obsidian pre .xml .javascript,.hljs-obsidian pre .xml .vbscript,.hljs-obsidian pre .xml .css,.hljs-obsidian pre .xml .cdata{opacity:0.5;}",googlecode:".hljs-googlecode{}.hljs-googlecode pre code{display:block;padding:0.5em;background:white;color:black;}.hljs-googlecode pre .comment,.hljs-googlecode pre .template_comment,.hljs-googlecode pre .javadoc,.hljs-googlecode pre .comment *{color:#800;}.hljs-googlecode pre .keyword,.hljs-googlecode pre .method,.hljs-googlecode pre .list .title,.hljs-googlecode pre .clojure .built_in,.hljs-googlecode pre .nginx .title,.hljs-googlecode pre .tag .title,.hljs-googlecode pre .setting .value,.hljs-googlecode pre .winutils,.hljs-googlecode pre .tex .command,.hljs-googlecode pre .http .title,.hljs-googlecode pre .request,.hljs-googlecode pre .status{color:#008;}.hljs-googlecode pre .envvar,.hljs-googlecode pre .tex .special{color:#660;}.hljs-googlecode pre .string,.hljs-googlecode pre .tag .value,.hljs-googlecode pre .cdata,.hljs-googlecode pre .filter .argument,.hljs-googlecode pre .attr_selector,.hljs-googlecode pre .apache .cbracket,.hljs-googlecode pre .date,.hljs-googlecode pre .regexp,.hljs-googlecode pre .coffeescript .attribute{color:#080;}.hljs-googlecode pre .sub .identifier,.hljs-googlecode pre .pi,.hljs-googlecode pre .tag,.hljs-googlecode pre .tag .keyword,.hljs-googlecode pre .decorator,.hljs-googlecode pre .ini .title,.hljs-googlecode pre .shebang,.hljs-googlecode pre .prompt,.hljs-googlecode pre .hexcolor,.hljs-googlecode pre .rules .value,.hljs-googlecode pre .css .value .number,.hljs-googlecode pre .literal,.hljs-googlecode pre .symbol,.hljs-googlecode pre .ruby .symbol .string,.hljs-googlecode pre .number,.hljs-googlecode pre .css .function,.hljs-googlecode pre .clojure .attribute{color:#066;}.hljs-googlecode pre .class .title,.hljs-googlecode pre .haskell .type,.hljs-googlecode pre .smalltalk .class,.hljs-googlecode pre .javadoctag,.hljs-googlecode pre .yardoctag,.hljs-googlecode pre .phpdoc,.hljs-googlecode pre .typename,.hljs-googlecode pre .tag .attribute,.hljs-googlecode pre .doctype,.hljs-googlecode pre .class .id,.hljs-googlecode pre .built_in,.hljs-googlecode pre .setting,.hljs-googlecode pre .params,.hljs-googlecode pre .variable,.hljs-googlecode pre .clojure .title{color:#606;}.hljs-googlecode pre .css .tag,.hljs-googlecode pre .rules .property,.hljs-googlecode pre .pseudo,.hljs-googlecode pre .subst{color:#000;}.hljs-googlecode pre .css .class,.hljs-googlecode pre .css .id{color:#9B703F;}.hljs-googlecode pre .value .important{color:#ff7700;font-weight:bold;}.hljs-googlecode pre .rules .keyword{color:#C5AF75;}.hljs-googlecode pre .annotation,.hljs-googlecode pre .apache .sqbracket,.hljs-googlecode pre .nginx .built_in{color:#9B859D;}.hljs-googlecode pre .preprocessor,.hljs-googlecode pre .preprocessor *{color:#444;}.hljs-googlecode pre .tex .formula{background-color:#EEE;font-style:italic;}.hljs-googlecode pre .diff .header,.hljs-googlecode pre .chunk{color:#808080;font-weight:bold;}.hljs-googlecode pre .diff .change{background-color:#BCCFF9;}.hljs-googlecode pre .addition{background-color:#BAEEBA;}.hljs-googlecode pre .deletion{background-color:#FFC8BD;}.hljs-googlecode pre .comment .yardoctag{font-weight:bold;}",solarized_light:".hljs-solarized_light{}.hljs-solarized_light pre code{display:block;padding:0.5em;background:#fdf6e3;color:#657b83;}.hljs-solarized_light pre .comment,.hljs-solarized_light pre .template_comment,.hljs-solarized_light pre .diff .header,.hljs-solarized_light pre .doctype,.hljs-solarized_light pre .pi,.hljs-solarized_light pre .lisp .string,.hljs-solarized_light pre .javadoc{color:#93a1a1;font-style:italic;}.hljs-solarized_light pre .keyword,.hljs-solarized_light pre .winutils,.hljs-solarized_light pre .method,.hljs-solarized_light pre .addition,.hljs-solarized_light pre .css .tag,.hljs-solarized_light pre .request,.hljs-solarized_light pre .status,.hljs-solarized_light pre .nginx .title{color:#859900;}.hljs-solarized_light pre .number,.hljs-solarized_light pre .command,.hljs-solarized_light pre .string,.hljs-solarized_light pre .tag .value,.hljs-solarized_light pre .rules .value,.hljs-solarized_light pre .phpdoc,.hljs-solarized_light pre .tex .formula,.hljs-solarized_light pre .regexp,.hljs-solarized_light pre .hexcolor{color:#2aa198;}.hljs-solarized_light pre .title,.hljs-solarized_light pre .localvars,.hljs-solarized_light pre .chunk,.hljs-solarized_light pre .decorator,.hljs-solarized_light pre .built_in,.hljs-solarized_light pre .identifier,.hljs-solarized_light pre .vhdl .literal,.hljs-solarized_light pre .id,.hljs-solarized_light pre .css .function{color:#268bd2;}.hljs-solarized_light pre .attribute,.hljs-solarized_light pre .variable,.hljs-solarized_light pre .lisp .body,.hljs-solarized_light pre .smalltalk .number,.hljs-solarized_light pre .constant,.hljs-solarized_light pre .class .title,.hljs-solarized_light pre .parent,.hljs-solarized_light pre .haskell .type{color:#b58900;}.hljs-solarized_light pre .preprocessor,.hljs-solarized_light pre .preprocessor .keyword,.hljs-solarized_light pre .shebang,.hljs-solarized_light pre .symbol,.hljs-solarized_light pre .symbol .string,.hljs-solarized_light pre .diff .change,.hljs-solarized_light pre .special,.hljs-solarized_light pre .attr_selector,.hljs-solarized_light pre .important,.hljs-solarized_light pre .subst,.hljs-solarized_light pre .cdata,.hljs-solarized_light pre .clojure .title,.hljs-solarized_light pre .css .pseudo{color:#cb4b16;}.hljs-solarized_light pre .deletion{color:#dc322f;}.hljs-solarized_light pre .tex .formula{background:#eee8d5;}","mono-blue":".hljs-mono-blue{}.hljs-mono-blue pre code{display:block;padding:0.5em;background:#EAEEF3;color:#00193A;}.hljs-mono-blue pre .keyword,.hljs-mono-blue pre .title,.hljs-mono-blue pre .important,.hljs-mono-blue pre .request,.hljs-mono-blue pre .header{font-weight:bold;}.hljs-mono-blue pre .comment,.hljs-mono-blue pre .chunk,.hljs-mono-blue pre .template_comment{color:#738191;}.hljs-mono-blue pre .string,.hljs-mono-blue pre .title,.hljs-mono-blue pre .parent,.hljs-mono-blue pre .built_in,.hljs-mono-blue pre .literal,.hljs-mono-blue pre .filename,.hljs-mono-blue pre .value,.hljs-mono-blue pre .addition,.hljs-mono-blue pre .tag,.hljs-mono-blue pre .argument,.hljs-mono-blue pre .link_label,.hljs-mono-blue pre .blockquote,.hljs-mono-blue pre .header{color:#0048AB;}.hljs-mono-blue pre .decorator,.hljs-mono-blue pre .prompt,.hljs-mono-blue pre .yardoctag,.hljs-mono-blue pre .subst,.hljs-mono-blue pre .symbol,.hljs-mono-blue pre .doctype,.hljs-mono-blue pre .regexp,.hljs-mono-blue pre .preprocessor,.hljs-mono-blue pre .pi,.hljs-mono-blue pre .attribute,.hljs-mono-blue pre .attr_selector,.hljs-mono-blue pre .javadoc,.hljs-mono-blue pre .xmlDocTag,.hljs-mono-blue pre .deletion,.hljs-mono-blue pre .shebang,.hljs-mono-blue pre .string .variable,.hljs-mono-blue pre .link_url,.hljs-mono-blue pre .bullet{color:#4C81C9;}",github:".hljs-github{}.hljs-github pre code{display:block;padding:0.5em;color:#333;background:#f8f8ff;}.hljs-github pre .comment,.hljs-github pre .template_comment,.hljs-github pre .diff .header,.hljs-github pre .javadoc{color:#998;font-style:italic;}.hljs-github pre .keyword,.hljs-github pre .css .rule .keyword,.hljs-github pre .winutils,.hljs-github pre .javascript .title,.hljs-github pre .nginx .title,.hljs-github pre .subst,.hljs-github pre .request,.hljs-github pre .status{color:#333;font-weight:bold;}.hljs-github pre .number,.hljs-github pre .hexcolor,.hljs-github pre .ruby .constant{color:#099;}.hljs-github pre .string,.hljs-github pre .tag .value,.hljs-github pre .phpdoc,.hljs-github pre .tex .formula{color:#dd1144;}.hljs-github pre .title,.hljs-github pre .id,.hljs-github pre .coffeescript .params,.hljs-github pre .scss .preprocessor{color:#900;font-weight:bold;}.hljs-github pre .javascript .title,.hljs-github pre .lisp .title,.hljs-github pre .clojure .title,.hljs-github pre .subst{font-weight:normal;}.hljs-github pre .class .title,.hljs-github pre .haskell .type,.hljs-github pre .vhdl .literal,.hljs-github pre .tex .command{color:#458;font-weight:bold;}.hljs-github pre .tag,.hljs-github pre .tag .title,.hljs-github pre .rules .property,.hljs-github pre .django .tag .keyword{color:#000080;font-weight:normal;}.hljs-github pre .attribute,.hljs-github pre .variable,.hljs-github pre .lisp .body{color:#008080;}.hljs-github pre .regexp{color:#009926;}.hljs-github pre .class{color:#458;font-weight:bold;}.hljs-github pre .symbol,.hljs-github pre .ruby .symbol .string,.hljs-github pre .lisp .keyword,.hljs-github pre .tex .special,.hljs-github pre .prompt{color:#990073;}.hljs-github pre .built_in,.hljs-github pre .lisp .title,.hljs-github pre .clojure .built_in{color:#0086b3;}.hljs-github pre .preprocessor,.hljs-github pre .pi,.hljs-github pre .doctype,.hljs-github pre .shebang,.hljs-github pre .cdata{color:#999;font-weight:bold;}.hljs-github pre .deletion{background:#ffdddd;}.hljs-github pre .addition{background:#ddffdd;}.hljs-github pre .diff .change{background:#0086b3;}.hljs-github pre .chunk{color:#aaaaaa;}","tomorrow-night":".hljs-tomorrow-night{}.hljs-tomorrow-night .tomorrow-comment,.hljs-tomorrow-night pre .comment,.hljs-tomorrow-night pre .title{color:#969896;}.hljs-tomorrow-night .tomorrow-red,.hljs-tomorrow-night pre .variable,.hljs-tomorrow-night pre .attribute,.hljs-tomorrow-night pre .tag,.hljs-tomorrow-night pre .regexp,.hljs-tomorrow-night pre .ruby .constant,.hljs-tomorrow-night pre .xml .tag .title,.hljs-tomorrow-night pre .xml .pi,.hljs-tomorrow-night pre .xml .doctype,.hljs-tomorrow-night pre .html .doctype,.hljs-tomorrow-night pre .css .id,.hljs-tomorrow-night pre .css .class,.hljs-tomorrow-night pre .css .pseudo{color:#cc6666;}.hljs-tomorrow-night .tomorrow-orange,.hljs-tomorrow-night pre .number,.hljs-tomorrow-night pre .preprocessor,.hljs-tomorrow-night pre .built_in,.hljs-tomorrow-night pre .literal,.hljs-tomorrow-night pre .params,.hljs-tomorrow-night pre .constant{color:#de935f;}.hljs-tomorrow-night .tomorrow-yellow,.hljs-tomorrow-night pre .ruby .class .title,.hljs-tomorrow-night pre .css .rules .attribute{color:#f0c674;}.hljs-tomorrow-night .tomorrow-green,.hljs-tomorrow-night pre .string,.hljs-tomorrow-night pre .value,.hljs-tomorrow-night pre .inheritance,.hljs-tomorrow-night pre .header,.hljs-tomorrow-night pre .ruby .symbol,.hljs-tomorrow-night pre .xml .cdata{color:#b5bd68;}.hljs-tomorrow-night .tomorrow-aqua,.hljs-tomorrow-night pre .css .hexcolor{color:#8abeb7;}.hljs-tomorrow-night .tomorrow-blue,.hljs-tomorrow-night pre .function,.hljs-tomorrow-night pre .python .decorator,.hljs-tomorrow-night pre .python .title,.hljs-tomorrow-night pre .ruby .function .title,.hljs-tomorrow-night pre .ruby .title .keyword,.hljs-tomorrow-night pre .perl .sub,.hljs-tomorrow-night pre .javascript .title,.hljs-tomorrow-night pre .coffeescript .title{color:#81a2be;}.hljs-tomorrow-night .tomorrow-purple,.hljs-tomorrow-night pre .keyword,.hljs-tomorrow-night pre .javascript .function{color:#b294bb;}.hljs-tomorrow-night pre code{display:block;background:#1d1f21;color:#c5c8c6;padding:0.5em;}.hljs-tomorrow-night pre .coffeescript .javascript,.hljs-tomorrow-night pre .javascript .xml,.hljs-tomorrow-night pre .tex .formula,.hljs-tomorrow-night pre .xml .javascript,.hljs-tomorrow-night pre .xml .vbscript,.hljs-tomorrow-night pre .xml .css,.hljs-tomorrow-night pre .xml .cdata{opacity:0.5;}",solarized_dark:".hljs-solarized_dark{}.hljs-solarized_dark pre code{display:block;padding:0.5em;background:#002b36;color:#839496;}.hljs-solarized_dark pre .comment,.hljs-solarized_dark pre .template_comment,.hljs-solarized_dark pre .diff .header,.hljs-solarized_dark pre .doctype,.hljs-solarized_dark pre .pi,.hljs-solarized_dark pre .lisp .string,.hljs-solarized_dark pre .javadoc{color:#586e75;font-style:italic;}.hljs-solarized_dark pre .keyword,.hljs-solarized_dark pre .winutils,.hljs-solarized_dark pre .method,.hljs-solarized_dark pre .addition,.hljs-solarized_dark pre .css .tag,.hljs-solarized_dark pre .request,.hljs-solarized_dark pre .status,.hljs-solarized_dark pre .nginx .title{color:#859900;}.hljs-solarized_dark pre .number,.hljs-solarized_dark pre .command,.hljs-solarized_dark pre .string,.hljs-solarized_dark pre .tag .value,.hljs-solarized_dark pre .rules .value,.hljs-solarized_dark pre .phpdoc,.hljs-solarized_dark pre .tex .formula,.hljs-solarized_dark pre .regexp,.hljs-solarized_dark pre .hexcolor{color:#2aa198;}.hljs-solarized_dark pre .title,.hljs-solarized_dark pre .localvars,.hljs-solarized_dark pre .chunk,.hljs-solarized_dark pre .decorator,.hljs-solarized_dark pre .built_in,.hljs-solarized_dark pre .identifier,.hljs-solarized_dark pre .vhdl .literal,.hljs-solarized_dark pre .id,.hljs-solarized_dark pre .css .function{color:#268bd2;}.hljs-solarized_dark pre .attribute,.hljs-solarized_dark pre .variable,.hljs-solarized_dark pre .lisp .body,.hljs-solarized_dark pre .smalltalk .number,.hljs-solarized_dark pre .constant,.hljs-solarized_dark pre .class .title,.hljs-solarized_dark pre .parent,.hljs-solarized_dark pre .haskell .type{color:#b58900;}.hljs-solarized_dark pre .preprocessor,.hljs-solarized_dark pre .preprocessor .keyword,.hljs-solarized_dark pre .shebang,.hljs-solarized_dark pre .symbol,.hljs-solarized_dark pre .symbol .string,.hljs-solarized_dark pre .diff .change,.hljs-solarized_dark pre .special,.hljs-solarized_dark pre .attr_selector,.hljs-solarized_dark pre .important,.hljs-solarized_dark pre .subst,.hljs-solarized_dark pre .cdata,.hljs-solarized_dark pre .clojure .title,.hljs-solarized_dark pre .css .pseudo{color:#cb4b16;}.hljs-solarized_dark pre .deletion{color:#dc322f;}.hljs-solarized_dark pre .tex .formula{background:#073642;}",foundation:".hljs-foundation{}.hljs-foundation pre code{display:block;padding:0.5em;background:#eee;}.hljs-foundation pre .decorator,.hljs-foundation pre .annotation{color:#000077;}.hljs-foundation pre .attribute{color:#070;}.hljs-foundation pre .value,.hljs-foundation pre .string,.hljs-foundation pre .scss .value .string{color:#d14;}.hljs-foundation pre .comment{color:#998;font-style:italic;}.hljs-foundation pre .function .title{color:#900;}.hljs-foundation pre .class{color:#458;}.hljs-foundation pre .id,.hljs-foundation pre .pseudo,.hljs-foundation pre .constant,.hljs-foundation pre .hexcolor{color:teal;}.hljs-foundation pre .variable{color:#336699;}.hljs-foundation pre .javadoc{color:#997700;}.hljs-foundation pre .pi,.hljs-foundation pre .doctype{color:#3344bb;}.hljs-foundation pre .number{color:#099;}.hljs-foundation pre .important{color:#f00;}.hljs-foundation pre .label{color:#970;}.hljs-foundation pre .preprocessor{color:#579;}.hljs-foundation pre .reserved,.hljs-foundation pre .keyword,.hljs-foundation pre .scss .value{color:#000;}.hljs-foundation pre .regexp{background-color:#fff0ff;color:#880088;}.hljs-foundation pre .symbol{color:#990073;}.hljs-foundation pre .symbol .string{color:#a60;}.hljs-foundation pre .tag{color:#007700;}.hljs-foundation pre .at_rule,.hljs-foundation pre .at_rule .keyword{color:#088;}.hljs-foundation pre .at_rule .preprocessor{color:#808;}.hljs-foundation pre .scss .tag,.hljs-foundation pre .scss .attribute{color:#339;}",vs:".hljs-vs{}.hljs-vs pre code{display:block;padding:0.5em;}.hljs-vs pre .comment,.hljs-vs pre .annotation,.hljs-vs pre .template_comment,.hljs-vs pre .diff .header,.hljs-vs pre .chunk,.hljs-vs pre .apache .cbracket{color:#008000;}.hljs-vs pre .keyword,.hljs-vs pre .id,.hljs-vs pre .built_in,.hljs-vs pre .smalltalk .class,.hljs-vs pre .winutils,.hljs-vs pre .bash .variable,.hljs-vs pre .tex .command,.hljs-vs pre .request,.hljs-vs pre .status,.hljs-vs pre .nginx .title,.hljs-vs pre .xml .tag,.hljs-vs pre .xml .tag .value{color:#0000ff;}.hljs-vs pre .string,.hljs-vs pre .title,.hljs-vs pre .parent,.hljs-vs pre .tag .value,.hljs-vs pre .rules .value,.hljs-vs pre .rules .value .number,.hljs-vs pre .ruby .symbol,.hljs-vs pre .ruby .symbol .string,.hljs-vs pre .aggregate,.hljs-vs pre .template_tag,.hljs-vs pre .django .variable,.hljs-vs pre .addition,.hljs-vs pre .flow,.hljs-vs pre .stream,.hljs-vs pre .apache .tag,.hljs-vs pre .date,.hljs-vs pre .tex .formula,.hljs-vs pre .coffeescript .attribute{color:#a31515;}.hljs-vs pre .ruby .string,.hljs-vs pre .decorator,.hljs-vs pre .filter .argument,.hljs-vs pre .localvars,.hljs-vs pre .array,.hljs-vs pre .attr_selector,.hljs-vs pre .pseudo,.hljs-vs pre .pi,.hljs-vs pre .doctype,.hljs-vs pre .deletion,.hljs-vs pre .envvar,.hljs-vs pre .shebang,.hljs-vs pre .preprocessor,.hljs-vs pre .userType,.hljs-vs pre .apache .sqbracket,.hljs-vs pre .nginx .built_in,.hljs-vs pre .tex .special,.hljs-vs pre .prompt{color:#2b91af;}.hljs-vs pre .phpdoc,.hljs-vs pre .javadoc,.hljs-vs pre .xmlDocTag{color:#808080;}.hljs-vs pre .vhdl .typename{font-weight:bold;}.hljs-vs pre .vhdl .string{color:#666666;}.hljs-vs pre .vhdl .literal{color:#a31515;}.hljs-vs pre .vhdl .attribute{color:#00B0E8;}.hljs-vs pre .xml .attribute{color:#ff0000;}",sunburst:".hljs-sunburst{}.hljs-sunburst pre code{display:block;padding:0.5em;background:#000;color:#f8f8f8;}.hljs-sunburst pre .comment,.hljs-sunburst pre .template_comment,.hljs-sunburst pre .javadoc{color:#aeaeae;font-style:italic;}.hljs-sunburst pre .keyword,.hljs-sunburst pre .ruby .function .keyword,.hljs-sunburst pre .request,.hljs-sunburst pre .status,.hljs-sunburst pre .nginx .title{color:#E28964;}.hljs-sunburst pre .function .keyword,.hljs-sunburst pre .sub .keyword,.hljs-sunburst pre .method,.hljs-sunburst pre .list .title{color:#99CF50;}.hljs-sunburst pre .string,.hljs-sunburst pre .tag .value,.hljs-sunburst pre .cdata,.hljs-sunburst pre .filter .argument,.hljs-sunburst pre .attr_selector,.hljs-sunburst pre .apache .cbracket,.hljs-sunburst pre .date,.hljs-sunburst pre .tex .command,.hljs-sunburst pre .coffeescript .attribute{color:#65B042;}.hljs-sunburst pre .subst{color:#DAEFA3;}.hljs-sunburst pre .regexp{color:#E9C062;}.hljs-sunburst pre .title,.hljs-sunburst pre .sub .identifier,.hljs-sunburst pre .pi,.hljs-sunburst pre .tag,.hljs-sunburst pre .tag .keyword,.hljs-sunburst pre .decorator,.hljs-sunburst pre .shebang,.hljs-sunburst pre .prompt{color:#89BDFF;}.hljs-sunburst pre .class .title,.hljs-sunburst pre .haskell .type,.hljs-sunburst pre .smalltalk .class,.hljs-sunburst pre .javadoctag,.hljs-sunburst pre .yardoctag,.hljs-sunburst pre .phpdoc{text-decoration:underline;}.hljs-sunburst pre .symbol,.hljs-sunburst pre .ruby .symbol .string,.hljs-sunburst pre .number{color:#3387CC;}.hljs-sunburst pre .params,.hljs-sunburst pre .variable,.hljs-sunburst pre .clojure .attribute{color:#3E87E3;}.hljs-sunburst pre .css .tag,.hljs-sunburst pre .rules .property,.hljs-sunburst pre .pseudo,.hljs-sunburst pre .tex .special{color:#CDA869;}.hljs-sunburst pre .css .class{color:#9B703F;}.hljs-sunburst pre .rules .keyword{color:#C5AF75;}.hljs-sunburst pre .rules .value{color:#CF6A4C;}.hljs-sunburst pre .css .id{color:#8B98AB;}.hljs-sunburst pre .annotation,.hljs-sunburst pre .apache .sqbracket,.hljs-sunburst pre .nginx .built_in{color:#9B859D;}.hljs-sunburst pre .preprocessor{color:#8996A8;}.hljs-sunburst pre .hexcolor,.hljs-sunburst pre .css .value .number{color:#DD7B3B;}.hljs-sunburst pre .css .function{color:#DAD085;}.hljs-sunburst pre .diff .header,.hljs-sunburst pre .chunk,.hljs-sunburst pre .tex .formula{background-color:#0E2231;color:#F8F8F8;font-style:italic;}.hljs-sunburst pre .diff .change{background-color:#4A410D;color:#F8F8F8;}.hljs-sunburst pre .addition{background-color:#253B22;color:#F8F8F8;}.hljs-sunburst pre .deletion{background-color:#420E09;color:#F8F8F8;}.hljs-sunburst pre .coffeescript .javascript,.hljs-sunburst pre .javascript .xml,.hljs-sunburst pre .tex .formula,.hljs-sunburst pre .xml .javascript,.hljs-sunburst pre .xml .vbscript,.hljs-sunburst pre .xml .css,.hljs-sunburst pre .xml .cdata{opacity:0.5;}",arta:".hljs-arta{}.hljs-arta pre code{display:block;padding:0.5em;background:#222;}.hljs-arta pre .profile .header *,.hljs-arta pre .ini .title,.hljs-arta pre .nginx .title{color:#fff;}.hljs-arta pre .comment,.hljs-arta pre .javadoc,.hljs-arta pre .preprocessor,.hljs-arta pre .preprocessor .title,.hljs-arta pre .shebang,.hljs-arta pre .profile .summary,.hljs-arta pre .diff,.hljs-arta pre .pi,.hljs-arta pre .doctype,.hljs-arta pre .tag,.hljs-arta pre .template_comment,.hljs-arta pre .css .rules,.hljs-arta pre .tex .special{color:#444;}.hljs-arta pre .string,.hljs-arta pre .symbol,.hljs-arta pre .diff .change,.hljs-arta pre .regexp,.hljs-arta pre .xml .attribute,.hljs-arta pre .smalltalk .char,.hljs-arta pre .xml .value,.hljs-arta pre .ini .value,.hljs-arta pre .clojure .attribute,.hljs-arta pre .coffeescript .attribute{color:#ffcc33;}.hljs-arta pre .number,.hljs-arta pre .addition{color:#00cc66;}.hljs-arta pre .built_in,.hljs-arta pre .literal,.hljs-arta pre .vhdl .typename,.hljs-arta pre .go .constant,.hljs-arta pre .go .typename,.hljs-arta pre .ini .keyword,.hljs-arta pre .lua .title,.hljs-arta pre .perl .variable,.hljs-arta pre .php .variable,.hljs-arta pre .mel .variable,.hljs-arta pre .django .variable,.hljs-arta pre .css .funtion,.hljs-arta pre .smalltalk .method,.hljs-arta pre .hexcolor,.hljs-arta pre .important,.hljs-arta pre .flow,.hljs-arta pre .inheritance,.hljs-arta pre .parser3 .variable{color:#32AAEE;}.hljs-arta pre .keyword,.hljs-arta pre .tag .title,.hljs-arta pre .css .tag,.hljs-arta pre .css .class,.hljs-arta pre .css .id,.hljs-arta pre .css .pseudo,.hljs-arta pre .css .attr_selector,.hljs-arta pre .lisp .title,.hljs-arta pre .clojure .built_in,.hljs-arta pre .winutils,.hljs-arta pre .tex .command,.hljs-arta pre .request,.hljs-arta pre .status{color:#6644aa;}.hljs-arta pre .title,.hljs-arta pre .ruby .constant,.hljs-arta pre .vala .constant,.hljs-arta pre .parent,.hljs-arta pre .deletion,.hljs-arta pre .template_tag,.hljs-arta pre .css .keyword,.hljs-arta pre .objectivec .class .id,.hljs-arta pre .smalltalk .class,.hljs-arta pre .lisp .keyword,.hljs-arta pre .apache .tag,.hljs-arta pre .nginx .variable,.hljs-arta pre .envvar,.hljs-arta pre .bash .variable,.hljs-arta pre .go .built_in,.hljs-arta pre .vbscript .built_in,.hljs-arta pre .lua .built_in,.hljs-arta pre .rsl .built_in,.hljs-arta pre .tail,.hljs-arta pre .avrasm .label,.hljs-arta pre .tex .formula,.hljs-arta pre .tex .formula *{color:#bb1166;}.hljs-arta pre .yardoctag,.hljs-arta pre .phpdoc,.hljs-arta pre .profile .header,.hljs-arta pre .ini .title,.hljs-arta pre .apache .tag,.hljs-arta pre .parser3 .title{font-weight:bold;}.hljs-arta pre .coffeescript .javascript,.hljs-arta pre .javascript .xml,.hljs-arta pre .tex .formula,.hljs-arta pre .xml .javascript,.hljs-arta pre .xml .vbscript,.hljs-arta pre .xml .css,.hljs-arta pre .xml .cdata{opacity:0.6;}.hljs-arta pre code,.hljs-arta pre .javascript,.hljs-arta pre .css,.hljs-arta pre .xml,.hljs-arta pre .subst,.hljs-arta pre .diff .chunk,.hljs-arta pre .css .value,.hljs-arta pre .css .attribute,.hljs-arta pre .lisp .string,.hljs-arta pre .lisp .number,.hljs-arta pre .tail .params,.hljs-arta pre .container,.hljs-arta pre .haskell *,.hljs-arta pre .erlang *,.hljs-arta pre .erlang_repl *{color:#aaa;}","tomorrow-night-eighties":".hljs-tomorrow-night-eighties{}.hljs-tomorrow-night-eighties .tomorrow-comment,.hljs-tomorrow-night-eighties pre .comment,.hljs-tomorrow-night-eighties pre .title{color:#999999;}.hljs-tomorrow-night-eighties .tomorrow-red,.hljs-tomorrow-night-eighties pre .variable,.hljs-tomorrow-night-eighties pre .attribute,.hljs-tomorrow-night-eighties pre .tag,.hljs-tomorrow-night-eighties pre .regexp,.hljs-tomorrow-night-eighties pre .ruby .constant,.hljs-tomorrow-night-eighties pre .xml .tag .title,.hljs-tomorrow-night-eighties pre .xml .pi,.hljs-tomorrow-night-eighties pre .xml .doctype,.hljs-tomorrow-night-eighties pre .html .doctype,.hljs-tomorrow-night-eighties pre .css .id,.hljs-tomorrow-night-eighties pre .css .class,.hljs-tomorrow-night-eighties pre .css .pseudo{color:#f2777a;}.hljs-tomorrow-night-eighties .tomorrow-orange,.hljs-tomorrow-night-eighties pre .number,.hljs-tomorrow-night-eighties pre .preprocessor,.hljs-tomorrow-night-eighties pre .built_in,.hljs-tomorrow-night-eighties pre .literal,.hljs-tomorrow-night-eighties pre .params,.hljs-tomorrow-night-eighties pre .constant{color:#f99157;}.hljs-tomorrow-night-eighties .tomorrow-yellow,.hljs-tomorrow-night-eighties pre .ruby .class .title,.hljs-tomorrow-night-eighties pre .css .rules .attribute{color:#ffcc66;}.hljs-tomorrow-night-eighties .tomorrow-green,.hljs-tomorrow-night-eighties pre .string,.hljs-tomorrow-night-eighties pre .value,.hljs-tomorrow-night-eighties pre .inheritance,.hljs-tomorrow-night-eighties pre .header,.hljs-tomorrow-night-eighties pre .ruby .symbol,.hljs-tomorrow-night-eighties pre .xml .cdata{color:#99cc99;}.hljs-tomorrow-night-eighties .tomorrow-aqua,.hljs-tomorrow-night-eighties pre .css .hexcolor{color:#66cccc;}.hljs-tomorrow-night-eighties .tomorrow-blue,.hljs-tomorrow-night-eighties pre .function,.hljs-tomorrow-night-eighties pre .python .decorator,.hljs-tomorrow-night-eighties pre .python .title,.hljs-tomorrow-night-eighties pre .ruby .function .title,.hljs-tomorrow-night-eighties pre .ruby .title .keyword,.hljs-tomorrow-night-eighties pre .perl .sub,.hljs-tomorrow-night-eighties pre .javascript .title,.hljs-tomorrow-night-eighties pre .coffeescript .title{color:#6699cc;}.hljs-tomorrow-night-eighties .tomorrow-purple,.hljs-tomorrow-night-eighties pre .keyword,.hljs-tomorrow-night-eighties pre .javascript .function{color:#cc99cc;}.hljs-tomorrow-night-eighties pre code{display:block;background:#2d2d2d;color:#cccccc;padding:0.5em;}.hljs-tomorrow-night-eighties pre .coffeescript .javascript,.hljs-tomorrow-night-eighties pre .javascript .xml,.hljs-tomorrow-night-eighties pre .tex .formula,.hljs-tomorrow-night-eighties pre .xml .javascript,.hljs-tomorrow-night-eighties pre .xml .vbscript,.hljs-tomorrow-night-eighties pre .xml .css,.hljs-tomorrow-night-eighties pre .xml .cdata{opacity:0.5;}","default":".hljs-default{}.hljs-default pre code{display:block;padding:0.5em;background:#F0F0F0;}.hljs-default pre code,.hljs-default pre .subst,.hljs-default pre .tag .title,.hljs-default pre .lisp .title,.hljs-default pre .clojure .built_in,.hljs-default pre .nginx .title{color:black;}.hljs-default pre .string,.hljs-default pre .title,.hljs-default pre .constant,.hljs-default pre .parent,.hljs-default pre .tag .value,.hljs-default pre .rules .value,.hljs-default pre .rules .value .number,.hljs-default pre .preprocessor,.hljs-default pre .haml .symbol,.hljs-default pre .ruby .symbol,.hljs-default pre .ruby .symbol .string,.hljs-default pre .aggregate,.hljs-default pre .template_tag,.hljs-default pre .django .variable,.hljs-default pre .smalltalk .class,.hljs-default pre .addition,.hljs-default pre .flow,.hljs-default pre .stream,.hljs-default pre .bash .variable,.hljs-default pre .apache .tag,.hljs-default pre .apache .cbracket,.hljs-default pre .tex .command,.hljs-default pre .tex .special,.hljs-default pre .erlang_repl .function_or_atom,.hljs-default pre .asciidoc .header,.hljs-default pre .markdown .header,.hljs-default pre .coffeescript .attribute{color:#800;}.hljs-default pre .comment,.hljs-default pre .annotation,.hljs-default pre .template_comment,.hljs-default pre .diff .header,.hljs-default pre .chunk,.hljs-default pre .asciidoc .blockquote,.hljs-default pre .markdown .blockquote{color:#888;}.hljs-default pre .number,.hljs-default pre .date,.hljs-default pre .regexp,.hljs-default pre .literal,.hljs-default pre .hexcolor,.hljs-default pre .smalltalk .symbol,.hljs-default pre .smalltalk .char,.hljs-default pre .go .constant,.hljs-default pre .change,.hljs-default pre .lasso .variable,.hljs-default pre .asciidoc .bullet,.hljs-default pre .markdown .bullet,.hljs-default pre .asciidoc .link_url,.hljs-default pre .markdown .link_url{color:#080;}.hljs-default pre .label,.hljs-default pre .javadoc,.hljs-default pre .ruby .string,.hljs-default pre .decorator,.hljs-default pre .filter .argument,.hljs-default pre .localvars,.hljs-default pre .array,.hljs-default pre .attr_selector,.hljs-default pre .important,.hljs-default pre .pseudo,.hljs-default pre .pi,.hljs-default pre .haml .bullet,.hljs-default pre .doctype,.hljs-default pre .deletion,.hljs-default pre .envvar,.hljs-default pre .shebang,.hljs-default pre .apache .sqbracket,.hljs-default pre .nginx .built_in,.hljs-default pre .tex .formula,.hljs-default pre .erlang_repl .reserved,.hljs-default pre .prompt,.hljs-default pre .asciidoc .link_label,.hljs-default pre .markdown .link_label,.hljs-default pre .vhdl .attribute,.hljs-default pre .clojure .attribute,.hljs-default pre .asciidoc .attribute,.hljs-default pre .lasso .attribute,.hljs-default pre .coffeescript .property{color:#8888ff;}.hljs-default pre .keyword,.hljs-default pre .id,.hljs-default pre .title,.hljs-default pre .built_in,.hljs-default pre .aggregate,.hljs-default pre .css .tag,.hljs-default pre .javadoctag,.hljs-default pre .phpdoc,.hljs-default pre .yardoctag,.hljs-default pre .smalltalk .class,.hljs-default pre .winutils,.hljs-default pre .bash .variable,.hljs-default pre .apache .tag,.hljs-default pre .go .typename,.hljs-default pre .tex .command,.hljs-default pre .asciidoc .strong,.hljs-default pre .markdown .strong,.hljs-default pre .request,.hljs-default pre .status{font-weight:bold;}.hljs-default pre .asciidoc .emphasis,.hljs-default pre .markdown .emphasis{font-style:italic;}.hljs-default pre .nginx .built_in{font-weight:normal;}.hljs-default pre .coffeescript .javascript,.hljs-default pre .javascript .xml,.hljs-default pre .lasso .markup,.hljs-default pre .tex .formula,.hljs-default pre .xml .javascript,.hljs-default pre .xml .vbscript,.hljs-default pre .xml .css,.hljs-default pre .xml .cdata{opacity:0.5;}",magula:".hljs-magula{}.hljs-magula pre code{display:block;padding:0.5em;background-color:#f4f4f4;}.hljs-magula pre code,.hljs-magula pre .subst,.hljs-magula pre .lisp .title,.hljs-magula pre .clojure .built_in{color:black;}.hljs-magula pre .string,.hljs-magula pre .title,.hljs-magula pre .parent,.hljs-magula pre .tag .value,.hljs-magula pre .rules .value,.hljs-magula pre .rules .value .number,.hljs-magula pre .preprocessor,.hljs-magula pre .ruby .symbol,.hljs-magula pre .ruby .symbol .string,.hljs-magula pre .aggregate,.hljs-magula pre .template_tag,.hljs-magula pre .django .variable,.hljs-magula pre .smalltalk .class,.hljs-magula pre .addition,.hljs-magula pre .flow,.hljs-magula pre .stream,.hljs-magula pre .bash .variable,.hljs-magula pre .apache .cbracket,.hljs-magula pre .coffeescript .attribute{color:#050;}.hljs-magula pre .comment,.hljs-magula pre .annotation,.hljs-magula pre .template_comment,.hljs-magula pre .diff .header,.hljs-magula pre .chunk{color:#777;}.hljs-magula pre .number,.hljs-magula pre .date,.hljs-magula pre .regexp,.hljs-magula pre .literal,.hljs-magula pre .smalltalk .symbol,.hljs-magula pre .smalltalk .char,.hljs-magula pre .change,.hljs-magula pre .tex .special{color:#800;}.hljs-magula pre .label,.hljs-magula pre .javadoc,.hljs-magula pre .ruby .string,.hljs-magula pre .decorator,.hljs-magula pre .filter .argument,.hljs-magula pre .localvars,.hljs-magula pre .array,.hljs-magula pre .attr_selector,.hljs-magula pre .pseudo,.hljs-magula pre .pi,.hljs-magula pre .doctype,.hljs-magula pre .deletion,.hljs-magula pre .envvar,.hljs-magula pre .shebang,.hljs-magula pre .apache .sqbracket,.hljs-magula pre .nginx .built_in,.hljs-magula pre .tex .formula,.hljs-magula pre .prompt,.hljs-magula pre .clojure .attribute{color:#00e;}.hljs-magula pre .keyword,.hljs-magula pre .id,.hljs-magula pre .phpdoc,.hljs-magula pre .title,.hljs-magula pre .built_in,.hljs-magula pre .aggregate,.hljs-magula pre .smalltalk .class,.hljs-magula pre .winutils,.hljs-magula pre .bash .variable,.hljs-magula pre .apache .tag,.hljs-magula pre .xml .tag,.hljs-magula pre .tex .command,.hljs-magula pre .request,.hljs-magula pre .status{font-weight:bold;color:navy;}.hljs-magula pre .nginx .built_in{font-weight:normal;}.hljs-magula pre .coffeescript .javascript,.hljs-magula pre .javascript .xml,.hljs-magula pre .tex .formula,.hljs-magula pre .xml .javascript,.hljs-magula pre .xml .vbscript,.hljs-magula pre .xml .css,.hljs-magula pre .xml .cdata{opacity:0.5;}.hljs-magula pre .apache .tag{font-weight:bold;color:blue;}",tomorrow:".hljs-tomorrow{}.hljs-tomorrow .tomorrow-comment,.hljs-tomorrow pre .comment,.hljs-tomorrow pre .title{color:#8e908c;}.hljs-tomorrow .tomorrow-red,.hljs-tomorrow pre .variable,.hljs-tomorrow pre .attribute,.hljs-tomorrow pre .tag,.hljs-tomorrow pre .regexp,.hljs-tomorrow pre .ruby .constant,.hljs-tomorrow pre .xml .tag .title,.hljs-tomorrow pre .xml .pi,.hljs-tomorrow pre .xml .doctype,.hljs-tomorrow pre .html .doctype,.hljs-tomorrow pre .css .id,.hljs-tomorrow pre .css .class,.hljs-tomorrow pre .css .pseudo{color:#c82829;}.hljs-tomorrow .tomorrow-orange,.hljs-tomorrow pre .number,.hljs-tomorrow pre .preprocessor,.hljs-tomorrow pre .built_in,.hljs-tomorrow pre .literal,.hljs-tomorrow pre .params,.hljs-tomorrow pre .constant{color:#f5871f;}.hljs-tomorrow .tomorrow-yellow,.hljs-tomorrow pre .ruby .class .title,.hljs-tomorrow pre .css .rules .attribute{color:#eab700;}.hljs-tomorrow .tomorrow-green,.hljs-tomorrow pre .string,.hljs-tomorrow pre .value,.hljs-tomorrow pre .inheritance,.hljs-tomorrow pre .header,.hljs-tomorrow pre .ruby .symbol,.hljs-tomorrow pre .xml .cdata{color:#718c00;}.hljs-tomorrow .tomorrow-aqua,.hljs-tomorrow pre .css .hexcolor{color:#3e999f;}.hljs-tomorrow .tomorrow-blue,.hljs-tomorrow pre .function,.hljs-tomorrow pre .python .decorator,.hljs-tomorrow pre .python .title,.hljs-tomorrow pre .ruby .function .title,.hljs-tomorrow pre .ruby .title .keyword,.hljs-tomorrow pre .perl .sub,.hljs-tomorrow pre .javascript .title,.hljs-tomorrow pre .coffeescript .title{color:#4271ae;}.hljs-tomorrow .tomorrow-purple,.hljs-tomorrow pre .keyword,.hljs-tomorrow pre .javascript .function{color:#8959a8;}.hljs-tomorrow pre code{display:block;background:white;color:#4d4d4c;padding:0.5em;}.hljs-tomorrow pre .coffeescript .javascript,.hljs-tomorrow pre .javascript .xml,.hljs-tomorrow pre .tex .formula,.hljs-tomorrow pre .xml .javascript,.hljs-tomorrow pre .xml .vbscript,.hljs-tomorrow pre .xml .css,.hljs-tomorrow pre .xml .cdata{opacity:0.5;}",xcode:".hljs-xcode{}.hljs-xcode pre code{display:block;padding:0.5em;background:#fff;color:black;}.hljs-xcode pre .comment,.hljs-xcode pre .template_comment,.hljs-xcode pre .javadoc,.hljs-xcode pre .comment *{color:#006a00;}.hljs-xcode pre .keyword,.hljs-xcode pre .literal,.hljs-xcode pre .nginx .title{color:#aa0d91;}.hljs-xcode pre .method,.hljs-xcode pre .list .title,.hljs-xcode pre .tag .title,.hljs-xcode pre .setting .value,.hljs-xcode pre .winutils,.hljs-xcode pre .tex .command,.hljs-xcode pre .http .title,.hljs-xcode pre .request,.hljs-xcode pre .status{color:#008;}.hljs-xcode pre .envvar,.hljs-xcode pre .tex .special{color:#660;}.hljs-xcode pre .string{color:#c41a16;}.hljs-xcode pre .tag .value,.hljs-xcode pre .cdata,.hljs-xcode pre .filter .argument,.hljs-xcode pre .attr_selector,.hljs-xcode pre .apache .cbracket,.hljs-xcode pre .date,.hljs-xcode pre .regexp{color:#080;}.hljs-xcode pre .sub .identifier,.hljs-xcode pre .pi,.hljs-xcode pre .tag,.hljs-xcode pre .tag .keyword,.hljs-xcode pre .decorator,.hljs-xcode pre .ini .title,.hljs-xcode pre .shebang,.hljs-xcode pre .prompt,.hljs-xcode pre .hexcolor,.hljs-xcode pre .rules .value,.hljs-xcode pre .css .value .number,.hljs-xcode pre .symbol,.hljs-xcode pre .symbol .string,.hljs-xcode pre .number,.hljs-xcode pre .css .function,.hljs-xcode pre .clojure .title,.hljs-xcode pre .clojure .built_in,.hljs-xcode pre .function .title,.hljs-xcode pre .coffeescript .attribute{color:#1c00cf;}.hljs-xcode pre .class .title,.hljs-xcode pre .haskell .type,.hljs-xcode pre .smalltalk .class,.hljs-xcode pre .javadoctag,.hljs-xcode pre .yardoctag,.hljs-xcode pre .phpdoc,.hljs-xcode pre .typename,.hljs-xcode pre .tag .attribute,.hljs-xcode pre .doctype,.hljs-xcode pre .class .id,.hljs-xcode pre .built_in,.hljs-xcode pre .setting,.hljs-xcode pre .params,.hljs-xcode pre .clojure .attribute{color:#5c2699;}.hljs-xcode pre .variable{color:#3f6e74;}.hljs-xcode pre .css .tag,.hljs-xcode pre .rules .property,.hljs-xcode pre .pseudo,.hljs-xcode pre .subst{color:#000;}.hljs-xcode pre .css .class,.hljs-xcode pre .css .id{color:#9B703F;}.hljs-xcode pre .value .important{color:#ff7700;font-weight:bold;}.hljs-xcode pre .rules .keyword{color:#C5AF75;}.hljs-xcode pre .annotation,.hljs-xcode pre .apache .sqbracket,.hljs-xcode pre .nginx .built_in{color:#9B859D;}.hljs-xcode pre .preprocessor,.hljs-xcode pre .preprocessor *{color:#643820;}.hljs-xcode pre .tex .formula{background-color:#EEE;font-style:italic;}.hljs-xcode pre .diff .header,.hljs-xcode pre .chunk{color:#808080;font-weight:bold;}.hljs-xcode pre .diff .change{background-color:#BCCFF9;}.hljs-xcode pre .addition{background-color:#BAEEBA;}.hljs-xcode pre .deletion{background-color:#FFC8BD;}.hljs-xcode pre .comment .yardoctag{font-weight:bold;}.hljs-xcode pre .method .id{color:#000;}",monokai_sublime:".hljs-monokai_sublime{}.hljs-monokai_sublime pre code{display:block;padding:0.5em;background:#23241f;}.hljs-monokai_sublime pre .tag,.hljs-monokai_sublime pre code{color:#f8f8f2;}.hljs-monokai_sublime pre .keyword,.hljs-monokai_sublime pre .function,.hljs-monokai_sublime pre .literal,.hljs-monokai_sublime pre .change,.hljs-monokai_sublime pre .winutils,.hljs-monokai_sublime pre .flow,.hljs-monokai_sublime pre .lisp .title,.hljs-monokai_sublime pre .clojure .built_in,.hljs-monokai_sublime pre .nginx .title,.hljs-monokai_sublime pre .tex .special{color:#66d9ef;}.hljs-monokai_sublime pre .variable,.hljs-monokai_sublime pre .params{color:#fd9720;}.hljs-monokai_sublime pre .constant{color:#66d9ef;}.hljs-monokai_sublime pre .title,.hljs-monokai_sublime pre .class .title,.hljs-monokai_sublime pre .css .class{color:#a6e22e;}.hljs-monokai_sublime pre .attribute,.hljs-monokai_sublime pre .symbol,.hljs-monokai_sublime pre .symbol .string,.hljs-monokai_sublime pre .tag .title,.hljs-monokai_sublime pre .value,.hljs-monokai_sublime pre .css .tag{color:#f92672;}.hljs-monokai_sublime pre .number,.hljs-monokai_sublime pre .preprocessor,.hljs-monokai_sublime pre .regexp{color:#ae81ff;}.hljs-monokai_sublime pre .tag .value,.hljs-monokai_sublime pre .string,.hljs-monokai_sublime pre .css .id,.hljs-monokai_sublime pre .subst,.hljs-monokai_sublime pre .haskell .type,.hljs-monokai_sublime pre .ruby .class .parent,.hljs-monokai_sublime pre .built_in,.hljs-monokai_sublime pre .sql .aggregate,.hljs-monokai_sublime pre .django .template_tag,.hljs-monokai_sublime pre .django .variable,.hljs-monokai_sublime pre .smalltalk .class,.hljs-monokai_sublime pre .django .filter .argument,.hljs-monokai_sublime pre .smalltalk .localvars,.hljs-monokai_sublime pre .smalltalk .array,.hljs-monokai_sublime pre .attr_selector,.hljs-monokai_sublime pre .pseudo,.hljs-monokai_sublime pre .addition,.hljs-monokai_sublime pre .stream,.hljs-monokai_sublime pre .envvar,.hljs-monokai_sublime pre .apache .tag,.hljs-monokai_sublime pre .apache .cbracket,.hljs-monokai_sublime pre .tex .command,.hljs-monokai_sublime pre .prompt{color:#e6db74;}.hljs-monokai_sublime pre .comment,.hljs-monokai_sublime pre .javadoc,.hljs-monokai_sublime pre .java .annotation,.hljs-monokai_sublime pre .python .decorator,.hljs-monokai_sublime pre .template_comment,.hljs-monokai_sublime pre .pi,.hljs-monokai_sublime pre .doctype,.hljs-monokai_sublime pre .deletion,.hljs-monokai_sublime pre .shebang,.hljs-monokai_sublime pre .apache .sqbracket,.hljs-monokai_sublime pre .tex .formula{color:#75715e;}.hljs-monokai_sublime pre .coffeescript .javascript,.hljs-monokai_sublime pre .javascript .xml,.hljs-monokai_sublime pre .tex .formula{opacity:0.5;}.hljs-monokai_sublime pre .xml .javascript,.hljs-monokai_sublime pre .xml .vbscript,.hljs-monokai_sublime pre .xml .css,.hljs-monokai_sublime pre .xml .cdata{opacity:0.5;}",rainbow:".hljs-rainbow{}.hljs-rainbow pre ::-moz-selection{background:#FF5E99;color:#fff;text-shadow:none;}.hljs-rainbow pre ::selection{background:#FF5E99;color:#fff;text-shadow:none;}.hljs-rainbow pre code{display:block;padding:0.5em;background:#474949;color:#D1D9E1;}.hljs-rainbow pre .body,.hljs-rainbow pre .collection{color:#D1D9E1;}.hljs-rainbow pre .comment,.hljs-rainbow pre .template_comment,.hljs-rainbow pre .diff .header,.hljs-rainbow pre .doctype,.hljs-rainbow pre .lisp .string,.hljs-rainbow pre .javadoc{color:#969896;font-style:italic;}.hljs-rainbow pre .keyword,.hljs-rainbow pre .clojure .attribute,.hljs-rainbow pre .winutils,.hljs-rainbow pre .javascript .title,.hljs-rainbow pre .addition,.hljs-rainbow pre .css .tag{color:#cc99cc;}.hljs-rainbow pre .number{color:#f99157;}.hljs-rainbow pre .command,.hljs-rainbow pre .string,.hljs-rainbow pre .tag .value,.hljs-rainbow pre .phpdoc,.hljs-rainbow pre .tex .formula,.hljs-rainbow pre .regexp,.hljs-rainbow pre .hexcolor{color:#8abeb7;}.hljs-rainbow pre .title,.hljs-rainbow pre .localvars,.hljs-rainbow pre .function .title,.hljs-rainbow pre .chunk,.hljs-rainbow pre .decorator,.hljs-rainbow pre .built_in,.hljs-rainbow pre .lisp .title,.hljs-rainbow pre .identifier{color:#b5bd68;}.hljs-rainbow pre .class .keyword{color:#f2777a;}.hljs-rainbow pre .variable,.hljs-rainbow pre .lisp .body,.hljs-rainbow pre .smalltalk .number,.hljs-rainbow pre .constant,.hljs-rainbow pre .class .title,.hljs-rainbow pre .parent,.hljs-rainbow pre .haskell .label,.hljs-rainbow pre .id,.hljs-rainbow pre .lisp .title,.hljs-rainbow pre .clojure .title .built_in{color:#ffcc66;}.hljs-rainbow pre .tag .title,.hljs-rainbow pre .rules .property,.hljs-rainbow pre .django .tag .keyword,.hljs-rainbow pre .clojure .title .built_in{font-weight:bold;}.hljs-rainbow pre .attribute,.hljs-rainbow pre .clojure .title{color:#81a2be;}.hljs-rainbow pre .preprocessor,.hljs-rainbow pre .pi,.hljs-rainbow pre .shebang,.hljs-rainbow pre .symbol,.hljs-rainbow pre .symbol .string,.hljs-rainbow pre .diff .change,.hljs-rainbow pre .special,.hljs-rainbow pre .attr_selector,.hljs-rainbow pre .important,.hljs-rainbow pre .subst,.hljs-rainbow pre .cdata{color:#f99157;}.hljs-rainbow pre .deletion{color:#dc322f;}.hljs-rainbow pre .tex .formula{background:#eee8d5;}","tomorrow-night-bright":".hljs-tomorrow-night-bright{}.hljs-tomorrow-night-bright .tomorrow-comment,.hljs-tomorrow-night-bright pre .comment,.hljs-tomorrow-night-bright pre .title{color:#969896;}.hljs-tomorrow-night-bright .tomorrow-red,.hljs-tomorrow-night-bright pre .variable,.hljs-tomorrow-night-bright pre .attribute,.hljs-tomorrow-night-bright pre .tag,.hljs-tomorrow-night-bright pre .regexp,.hljs-tomorrow-night-bright pre .ruby .constant,.hljs-tomorrow-night-bright pre .xml .tag .title,.hljs-tomorrow-night-bright pre .xml .pi,.hljs-tomorrow-night-bright pre .xml .doctype,.hljs-tomorrow-night-bright pre .html .doctype,.hljs-tomorrow-night-bright pre .css .id,.hljs-tomorrow-night-bright pre .css .class,.hljs-tomorrow-night-bright pre .css .pseudo{color:#d54e53;}.hljs-tomorrow-night-bright .tomorrow-orange,.hljs-tomorrow-night-bright pre .number,.hljs-tomorrow-night-bright pre .preprocessor,.hljs-tomorrow-night-bright pre .built_in,.hljs-tomorrow-night-bright pre .literal,.hljs-tomorrow-night-bright pre .params,.hljs-tomorrow-night-bright pre .constant{color:#e78c45;}.hljs-tomorrow-night-bright .tomorrow-yellow,.hljs-tomorrow-night-bright pre .ruby .class .title,.hljs-tomorrow-night-bright pre .css .rules .attribute{color:#e7c547;}.hljs-tomorrow-night-bright .tomorrow-green,.hljs-tomorrow-night-bright pre .string,.hljs-tomorrow-night-bright pre .value,.hljs-tomorrow-night-bright pre .inheritance,.hljs-tomorrow-night-bright pre .header,.hljs-tomorrow-night-bright pre .ruby .symbol,.hljs-tomorrow-night-bright pre .xml .cdata{color:#b9ca4a;}.hljs-tomorrow-night-bright .tomorrow-aqua,.hljs-tomorrow-night-bright pre .css .hexcolor{color:#70c0b1;}.hljs-tomorrow-night-bright .tomorrow-blue,.hljs-tomorrow-night-bright pre .function,.hljs-tomorrow-night-bright pre .python .decorator,.hljs-tomorrow-night-bright pre .python .title,.hljs-tomorrow-night-bright pre .ruby .function .title,.hljs-tomorrow-night-bright pre .ruby .title .keyword,.hljs-tomorrow-night-bright pre .perl .sub,.hljs-tomorrow-night-bright pre .javascript .title,.hljs-tomorrow-night-bright pre .coffeescript .title{color:#7aa6da;}.hljs-tomorrow-night-bright .tomorrow-purple,.hljs-tomorrow-night-bright pre .keyword,.hljs-tomorrow-night-bright pre .javascript .function{color:#c397d8;}.hljs-tomorrow-night-bright pre code{display:block;background:black;color:#eaeaea;padding:0.5em;}.hljs-tomorrow-night-bright pre .coffeescript .javascript,.hljs-tomorrow-night-bright pre .javascript .xml,.hljs-tomorrow-night-bright pre .tex .formula,.hljs-tomorrow-night-bright pre .xml .javascript,.hljs-tomorrow-night-bright pre .xml .vbscript,.hljs-tomorrow-night-bright pre .xml .css,.hljs-tomorrow-night-bright pre .xml .cdata{opacity:0.5;}",ir_black:".hljs-ir_black{}.hljs-ir_black pre code{display:block;padding:0.5em;background:#000;color:#f8f8f8;}.hljs-ir_black pre .shebang,.hljs-ir_black pre .comment,.hljs-ir_black pre .template_comment,.hljs-ir_black pre .javadoc{color:#7c7c7c;}.hljs-ir_black pre .keyword,.hljs-ir_black pre .tag,.hljs-ir_black pre .tex .command,.hljs-ir_black pre .request,.hljs-ir_black pre .status,.hljs-ir_black pre .clojure .attribute{color:#96CBFE;}.hljs-ir_black pre .sub .keyword,.hljs-ir_black pre .method,.hljs-ir_black pre .list .title,.hljs-ir_black pre .nginx .title{color:#FFFFB6;}.hljs-ir_black pre .string,.hljs-ir_black pre .tag .value,.hljs-ir_black pre .cdata,.hljs-ir_black pre .filter .argument,.hljs-ir_black pre .attr_selector,.hljs-ir_black pre .apache .cbracket,.hljs-ir_black pre .date,.hljs-ir_black pre .coffeescript .attribute{color:#A8FF60;}.hljs-ir_black pre .subst{color:#DAEFA3;}.hljs-ir_black pre .regexp{color:#E9C062;}.hljs-ir_black pre .title,.hljs-ir_black pre .sub .identifier,.hljs-ir_black pre .pi,.hljs-ir_black pre .decorator,.hljs-ir_black pre .tex .special,.hljs-ir_black pre .haskell .type,.hljs-ir_black pre .constant,.hljs-ir_black pre .smalltalk .class,.hljs-ir_black pre .javadoctag,.hljs-ir_black pre .yardoctag,.hljs-ir_black pre .phpdoc,.hljs-ir_black pre .nginx .built_in{color:#FFFFB6;}.hljs-ir_black pre .symbol,.hljs-ir_black pre .ruby .symbol .string,.hljs-ir_black pre .number,.hljs-ir_black pre .variable,.hljs-ir_black pre .vbscript,.hljs-ir_black pre .literal{color:#C6C5FE;}.hljs-ir_black pre .css .tag{color:#96CBFE;}.hljs-ir_black pre .css .rules .property,.hljs-ir_black pre .css .id{color:#FFFFB6;}.hljs-ir_black pre .css .class{color:#FFF;}.hljs-ir_black pre .hexcolor{color:#C6C5FE;}.hljs-ir_black pre .number{color:#FF73FD;}.hljs-ir_black pre .coffeescript .javascript,.hljs-ir_black pre .javascript .xml,.hljs-ir_black pre .tex .formula,.hljs-ir_black pre .xml .javascript,.hljs-ir_black pre .xml .vbscript,.hljs-ir_black pre .xml .css,.hljs-ir_black pre .xml .cdata{opacity:0.7;}","tomorrow-night-blue":".hljs-tomorrow-night-blue{}.hljs-tomorrow-night-blue .tomorrow-comment,.hljs-tomorrow-night-blue pre .comment,.hljs-tomorrow-night-blue pre .title{color:#7285b7;}.hljs-tomorrow-night-blue .tomorrow-red,.hljs-tomorrow-night-blue pre .variable,.hljs-tomorrow-night-blue pre .attribute,.hljs-tomorrow-night-blue pre .tag,.hljs-tomorrow-night-blue pre .regexp,.hljs-tomorrow-night-blue pre .ruby .constant,.hljs-tomorrow-night-blue pre .xml .tag .title,.hljs-tomorrow-night-blue pre .xml .pi,.hljs-tomorrow-night-blue pre .xml .doctype,.hljs-tomorrow-night-blue pre .html .doctype,.hljs-tomorrow-night-blue pre .css .id,.hljs-tomorrow-night-blue pre .css .class,.hljs-tomorrow-night-blue pre .css .pseudo{color:#ff9da4;}.hljs-tomorrow-night-blue .tomorrow-orange,.hljs-tomorrow-night-blue pre .number,.hljs-tomorrow-night-blue pre .preprocessor,.hljs-tomorrow-night-blue pre .built_in,.hljs-tomorrow-night-blue pre .literal,.hljs-tomorrow-night-blue pre .params,.hljs-tomorrow-night-blue pre .constant{color:#ffc58f;}.hljs-tomorrow-night-blue .tomorrow-yellow,.hljs-tomorrow-night-blue pre .ruby .class .title,.hljs-tomorrow-night-blue pre .css .rules .attribute{color:#ffeead;}.hljs-tomorrow-night-blue .tomorrow-green,.hljs-tomorrow-night-blue pre .string,.hljs-tomorrow-night-blue pre .value,.hljs-tomorrow-night-blue pre .inheritance,.hljs-tomorrow-night-blue pre .header,.hljs-tomorrow-night-blue pre .ruby .symbol,.hljs-tomorrow-night-blue pre .xml .cdata{color:#d1f1a9;}.hljs-tomorrow-night-blue .tomorrow-aqua,.hljs-tomorrow-night-blue pre .css .hexcolor{color:#99ffff;}.hljs-tomorrow-night-blue .tomorrow-blue,.hljs-tomorrow-night-blue pre .function,.hljs-tomorrow-night-blue pre .python .decorator,.hljs-tomorrow-night-blue pre .python .title,.hljs-tomorrow-night-blue pre .ruby .function .title,.hljs-tomorrow-night-blue pre .ruby .title .keyword,.hljs-tomorrow-night-blue pre .perl .sub,.hljs-tomorrow-night-blue pre .javascript .title,.hljs-tomorrow-night-blue pre .coffeescript .title{color:#bbdaff;}.hljs-tomorrow-night-blue .tomorrow-purple,.hljs-tomorrow-night-blue pre .keyword,.hljs-tomorrow-night-blue pre .javascript .function{color:#ebbbff;}.hljs-tomorrow-night-blue pre code{display:block;background:#002451;color:white;padding:0.5em;}.hljs-tomorrow-night-blue pre .coffeescript .javascript,.hljs-tomorrow-night-blue pre .javascript .xml,.hljs-tomorrow-night-blue pre .tex .formula,.hljs-tomorrow-night-blue pre .xml .javascript,.hljs-tomorrow-night-blue pre .xml .vbscript,.hljs-tomorrow-night-blue pre .xml .css,.hljs-tomorrow-night-blue pre .xml .cdata{opacity:0.5;}",idea:".hljs-idea{}.hljs-idea pre code{display:block;padding:0.5em;color:#000;background:#fff;}.hljs-idea pre .subst,.hljs-idea pre .title{font-weight:normal;color:#000;}.hljs-idea pre .comment,.hljs-idea pre .template_comment,.hljs-idea pre .javadoc,.hljs-idea pre .diff .header{color:#808080;font-style:italic;}.hljs-idea pre .annotation,.hljs-idea pre .decorator,.hljs-idea pre .preprocessor,.hljs-idea pre .doctype,.hljs-idea pre .pi,.hljs-idea pre .chunk,.hljs-idea pre .shebang,.hljs-idea pre .apache .cbracket,.hljs-idea pre .prompt,.hljs-idea pre .http .title{color:#808000;}.hljs-idea pre .tag,.hljs-idea pre .pi{background:#efefef;}.hljs-idea pre .tag .title,.hljs-idea pre .id,.hljs-idea pre .attr_selector,.hljs-idea pre .pseudo,.hljs-idea pre .literal,.hljs-idea pre .keyword,.hljs-idea pre .hexcolor,.hljs-idea pre .css .function,.hljs-idea pre .ini .title,.hljs-idea pre .css .class,.hljs-idea pre .list .title,.hljs-idea pre .clojure .title,.hljs-idea pre .nginx .title,.hljs-idea pre .tex .command,.hljs-idea pre .request,.hljs-idea pre .status{font-weight:bold;color:#000080;}.hljs-idea pre .attribute,.hljs-idea pre .rules .keyword,.hljs-idea pre .number,.hljs-idea pre .date,.hljs-idea pre .regexp,.hljs-idea pre .tex .special{font-weight:bold;color:#0000ff;}.hljs-idea pre .number,.hljs-idea pre .regexp{font-weight:normal;}.hljs-idea pre .string,.hljs-idea pre .value,.hljs-idea pre .filter .argument,.hljs-idea pre .css .function .params,.hljs-idea pre .apache .tag{color:#008000;font-weight:bold;}.hljs-idea pre .symbol,.hljs-idea pre .ruby .symbol .string,.hljs-idea pre .char,.hljs-idea pre .tex .formula{color:#000;background:#d0eded;font-style:italic;}.hljs-idea pre .phpdoc,.hljs-idea pre .yardoctag,.hljs-idea pre .javadoctag{text-decoration:underline;}.hljs-idea pre .variable,.hljs-idea pre .envvar,.hljs-idea pre .apache .sqbracket,.hljs-idea pre .nginx .built_in{color:#660e7a;}.hljs-idea pre .addition{background:#baeeba;}.hljs-idea pre .deletion{background:#ffc8bd;}.hljs-idea pre .diff .change{background:#bccff9;}",zenburn:".hljs-zenburn{}.hljs-zenburn pre code{display:block;padding:0.5em;background:#3F3F3F;color:#DCDCDC;}.hljs-zenburn pre .keyword,.hljs-zenburn pre .tag,.hljs-zenburn pre .css .class,.hljs-zenburn pre .css .id,.hljs-zenburn pre .lisp .title,.hljs-zenburn pre .nginx .title,.hljs-zenburn pre .request,.hljs-zenburn pre .status,.hljs-zenburn pre .clojure .attribute{color:#E3CEAB;}.hljs-zenburn pre .django .template_tag,.hljs-zenburn pre .django .variable,.hljs-zenburn pre .django .filter .argument{color:#DCDCDC;}.hljs-zenburn pre .number,.hljs-zenburn pre .date{color:#8CD0D3;}.hljs-zenburn pre .dos .envvar,.hljs-zenburn pre .dos .stream,.hljs-zenburn pre .variable,.hljs-zenburn pre .apache .sqbracket{color:#EFDCBC;}.hljs-zenburn pre .dos .flow,.hljs-zenburn pre .diff .change,.hljs-zenburn pre .python .exception,.hljs-zenburn pre .python .built_in,.hljs-zenburn pre .literal,.hljs-zenburn pre .tex .special{color:#EFEFAF;}.hljs-zenburn pre .diff .chunk,.hljs-zenburn pre .subst{color:#8F8F8F;}.hljs-zenburn pre .dos .keyword,.hljs-zenburn pre .python .decorator,.hljs-zenburn pre .title,.hljs-zenburn pre .haskell .type,.hljs-zenburn pre .diff .header,.hljs-zenburn pre .ruby .class .parent,.hljs-zenburn pre .apache .tag,.hljs-zenburn pre .nginx .built_in,.hljs-zenburn pre .tex .command,.hljs-zenburn pre .prompt{color:#efef8f;}.hljs-zenburn pre .dos .winutils,.hljs-zenburn pre .ruby .symbol,.hljs-zenburn pre .ruby .symbol .string,.hljs-zenburn pre .ruby .string{color:#DCA3A3;}.hljs-zenburn pre .diff .deletion,.hljs-zenburn pre .string,.hljs-zenburn pre .tag .value,.hljs-zenburn pre .preprocessor,.hljs-zenburn pre .built_in,.hljs-zenburn pre .sql .aggregate,.hljs-zenburn pre .javadoc,.hljs-zenburn pre .smalltalk .class,.hljs-zenburn pre .smalltalk .localvars,.hljs-zenburn pre .smalltalk .array,.hljs-zenburn pre .css .rules .value,.hljs-zenburn pre .attr_selector,.hljs-zenburn pre .pseudo,.hljs-zenburn pre .apache .cbracket,.hljs-zenburn pre .tex .formula,.hljs-zenburn pre .coffeescript .attribute{color:#CC9393;}.hljs-zenburn pre .shebang,.hljs-zenburn pre .diff .addition,.hljs-zenburn pre .comment,.hljs-zenburn pre .java .annotation,.hljs-zenburn pre .template_comment,.hljs-zenburn pre .pi,.hljs-zenburn pre .doctype{color:#7F9F7F;}.hljs-zenburn pre .coffeescript .javascript,.hljs-zenburn pre .javascript .xml,.hljs-zenburn pre .tex .formula,.hljs-zenburn pre .xml .javascript,.hljs-zenburn pre .xml .vbscript,.hljs-zenburn pre .xml .css,.hljs-zenburn pre .xml .cdata{opacity:0.5;}",railscasts:".hljs-railscasts{}.hljs-railscasts pre code{display:block;padding:0.5em;background:#232323;color:#E6E1DC;}.hljs-railscasts pre .comment,.hljs-railscasts pre .template_comment,.hljs-railscasts pre .javadoc,.hljs-railscasts pre .shebang{color:#BC9458;font-style:italic;}.hljs-railscasts pre .keyword,.hljs-railscasts pre .ruby .function .keyword,.hljs-railscasts pre .request,.hljs-railscasts pre .status,.hljs-railscasts pre .nginx .title,.hljs-railscasts pre .method,.hljs-railscasts pre .list .title{color:#C26230;}.hljs-railscasts pre .string,.hljs-railscasts pre .number,.hljs-railscasts pre .regexp,.hljs-railscasts pre .tag .value,.hljs-railscasts pre .cdata,.hljs-railscasts pre .filter .argument,.hljs-railscasts pre .attr_selector,.hljs-railscasts pre .apache .cbracket,.hljs-railscasts pre .date,.hljs-railscasts pre .tex .command,.hljs-railscasts pre .markdown .link_label{color:#A5C261;}.hljs-railscasts pre .subst{color:#519F50;}.hljs-railscasts pre .tag,.hljs-railscasts pre .tag .keyword,.hljs-railscasts pre .tag .title,.hljs-railscasts pre .doctype,.hljs-railscasts pre .sub .identifier,.hljs-railscasts pre .pi,.hljs-railscasts pre .input_number{color:#E8BF6A;}.hljs-railscasts pre .identifier{color:#D0D0FF;}.hljs-railscasts pre .class .title,.hljs-railscasts pre .haskell .type,.hljs-railscasts pre .smalltalk .class,.hljs-railscasts pre .javadoctag,.hljs-railscasts pre .yardoctag,.hljs-railscasts pre .phpdoc{text-decoration:none;}.hljs-railscasts pre .constant{color:#DA4939;}.hljs-railscasts pre .symbol,.hljs-railscasts pre .built_in,.hljs-railscasts pre .ruby .symbol .string,.hljs-railscasts pre .ruby .symbol .identifier,.hljs-railscasts pre .markdown .link_url,.hljs-railscasts pre .attribute{color:#6D9CBE;}.hljs-railscasts pre .markdown .link_url{text-decoration:underline;}.hljs-railscasts pre .params,.hljs-railscasts pre .variable,.hljs-railscasts pre .clojure .attribute{color:#D0D0FF;}.hljs-railscasts pre .css .tag,.hljs-railscasts pre .rules .property,.hljs-railscasts pre .pseudo,.hljs-railscasts pre .tex .special{color:#CDA869;}.hljs-railscasts pre .css .class{color:#9B703F;}.hljs-railscasts pre .rules .keyword{color:#C5AF75;}.hljs-railscasts pre .rules .value{color:#CF6A4C;}.hljs-railscasts pre .css .id{color:#8B98AB;}.hljs-railscasts pre .annotation,.hljs-railscasts pre .apache .sqbracket,.hljs-railscasts pre .nginx .built_in{color:#9B859D;}.hljs-railscasts pre .preprocessor,.hljs-railscasts pre .preprocessor *{color:#8996A8 !important;}.hljs-railscasts pre .hexcolor,.hljs-railscasts pre .css .value .number{color:#A5C261;}.hljs-railscasts pre .title,.hljs-railscasts pre .decorator,.hljs-railscasts pre .css .function{color:#FFC66D;}.hljs-railscasts pre .diff .header,.hljs-railscasts pre .chunk{background-color:#2F33AB;color:#E6E1DC;display:inline-block;width:100%;}.hljs-railscasts pre .diff .change{background-color:#4A410D;color:#F8F8F8;display:inline-block;width:100%;}.hljs-railscasts pre .addition{background-color:#144212;color:#E6E1DC;display:inline-block;width:100%;}.hljs-railscasts pre .deletion{background-color:#600;color:#E6E1DC;display:inline-block;width:100%;}.hljs-railscasts pre .coffeescript .javascript,.hljs-railscasts pre .javascript .xml,.hljs-railscasts pre .tex .formula,.hljs-railscasts pre .xml .javascript,.hljs-railscasts pre .xml .vbscript,.hljs-railscasts pre .xml .css,.hljs-railscasts pre .xml .cdata{opacity:0.7;}",monokai:".hljs-monokai{}.hljs-monokai pre code{display:block;padding:0.5em;background:#272822;}.hljs-monokai pre .tag,.hljs-monokai pre .tag .title,.hljs-monokai pre .keyword,.hljs-monokai pre .literal,.hljs-monokai pre .strong,.hljs-monokai pre .change,.hljs-monokai pre .winutils,.hljs-monokai pre .flow,.hljs-monokai pre .lisp .title,.hljs-monokai pre .clojure .built_in,.hljs-monokai pre .nginx .title,.hljs-monokai pre .tex .special{color:#F92672;}.hljs-monokai pre code{color:#DDD;}.hljs-monokai pre code .constant{color:#66D9EF;}.hljs-monokai pre .code,.hljs-monokai pre .class .title,.hljs-monokai pre .header{color:white;}.hljs-monokai pre .link_label,.hljs-monokai pre .attribute,.hljs-monokai pre .symbol,.hljs-monokai pre .symbol .string,.hljs-monokai pre .value,.hljs-monokai pre .regexp{color:#BF79DB;}.hljs-monokai pre .link_url,.hljs-monokai pre .tag .value,.hljs-monokai pre .string,.hljs-monokai pre .bullet,.hljs-monokai pre .subst,.hljs-monokai pre .title,.hljs-monokai pre .emphasis,.hljs-monokai pre .haskell .type,.hljs-monokai pre .preprocessor,.hljs-monokai pre .ruby .class .parent,.hljs-monokai pre .built_in,.hljs-monokai pre .sql .aggregate,.hljs-monokai pre .django .template_tag,.hljs-monokai pre .django .variable,.hljs-monokai pre .smalltalk .class,.hljs-monokai pre .javadoc,.hljs-monokai pre .django .filter .argument,.hljs-monokai pre .smalltalk .localvars,.hljs-monokai pre .smalltalk .array,.hljs-monokai pre .attr_selector,.hljs-monokai pre .pseudo,.hljs-monokai pre .addition,.hljs-monokai pre .stream,.hljs-monokai pre .envvar,.hljs-monokai pre .apache .tag,.hljs-monokai pre .apache .cbracket,.hljs-monokai pre .tex .command,.hljs-monokai pre .prompt{color:#A6E22E;}.hljs-monokai pre .comment,.hljs-monokai pre .java .annotation,.hljs-monokai pre .blockquote,.hljs-monokai pre .horizontal_rule,.hljs-monokai pre .python .decorator,.hljs-monokai pre .template_comment,.hljs-monokai pre .pi,.hljs-monokai pre .doctype,.hljs-monokai pre .deletion,.hljs-monokai pre .shebang,.hljs-monokai pre .apache .sqbracket,.hljs-monokai pre .tex .formula{color:#75715E;}.hljs-monokai pre .keyword,.hljs-monokai pre .literal,.hljs-monokai pre .css .id,.hljs-monokai pre .phpdoc,.hljs-monokai pre .title,.hljs-monokai pre .header,.hljs-monokai pre .haskell .type,.hljs-monokai pre .vbscript .built_in,.hljs-monokai pre .sql .aggregate,.hljs-monokai pre .rsl .built_in,.hljs-monokai pre .smalltalk .class,.hljs-monokai pre .diff .header,.hljs-monokai pre .chunk,.hljs-monokai pre .winutils,.hljs-monokai pre .bash .variable,.hljs-monokai pre .apache .tag,.hljs-monokai pre .tex .special,.hljs-monokai pre .request,.hljs-monokai pre .status{font-weight:bold;}.hljs-monokai pre .coffeescript .javascript,.hljs-monokai pre .javascript .xml,.hljs-monokai pre .tex .formula,.hljs-monokai pre .xml .javascript,.hljs-monokai pre .xml .vbscript,.hljs-monokai pre .xml .css,.hljs-monokai pre .xml .cdata{opacity:0.5;}"},engine:hljs}
}()},{}],4:[function(require,module,exports){module.exports={documentStyles:"html.remark-container,body.remark-container{height:100%;width:100%;}.remark-container{background:#d7d8d2;margin:0;overflow:hidden;}.remark-container:focus{outline-style:solid;outline-width:1px;}:-webkit-full-screen .remark-container{width:100%;height:100%;}.remark-slides-area{position:relative;height:100%;width:100%;}.remark-slide-container{display:none;position:relative;height:100%;width:100%;page-break-after:always;}.remark-slide-scaler{background:#fff;overflow:hidden;position:absolute;-webkit-transform-origin:top left;-moz-transform-origin:top left;transform-origin:top-left;-moz-box-shadow:0 0 30px #888;-webkit-box-shadow:0 0 30px #888;box-shadow:0 0 30px #888;}.remark-slide{height:100%;width:100%;display:table;}.remark-slide>.left{text-align:left;}.remark-slide>.center{text-align:center;}.remark-slide>.right{text-align:right;}.remark-slide>.top{vertical-align:top;}.remark-slide>.middle{vertical-align:middle;}.remark-slide>.bottom{vertical-align:bottom;}.remark-slide .remark-slide-content{background-position:center;background-repeat:no-repeat;display:table-cell;padding:1em 4em 1em 4em;}.remark-slide .remark-slide-content .left{display:block;text-align:left;}.remark-slide .remark-slide-content .center{display:block;text-align:center;}.remark-slide .remark-slide-content .right{display:block;text-align:right;}.remark-slide .remark-slide-number{bottom:12px;opacity:0.5;position:absolute;right:20px;}.remark-visible{display:block;}.remark-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;display:none;opacity:0.95;background:#000;}.remark-help{bottom:0;top:0;right:0;left:0;display:none;position:absolute;z-index:1000;-webkit-transform-origin:top left;-moz-transform-origin:top left;transform-origin:top-left;}.remark-help .remark-help-content{color:white;font-family:Helvetica,arial,freesans,clean,sans-serif;font-size:12pt;position:absolute;top:10%;bottom:10%;left:10%;height:10%;}.remark-help .remark-help-content td{color:white;font-size:12pt;padding:10px;}.remark-help .remark-help-content td:first-child{padding-left:0;}.remark-help .remark-help-content .key{background:white;color:black;min-width:1em;display:inline-block;padding:3px 6px;text-align:center;border-radius:4px;}.remark-help .dismiss{top:85%;}.remark-container.remark-help-mode .remark-help{display:block;}.remark-container.remark-help-mode .remark-backdrop{display:block;}.remark-preview-area{bottom:2%;left:2%;display:none;opacity:0.5;position:absolute;height:47.25%;width:48%;}.remark-preview-area .remark-slide-container{display:block;}.remark-notes-area{background:#e7e8e2;bottom:0;display:none;left:52%;overflow:hidden;padding:1.5em;position:absolute;right:0;top:0;}.remark-toolbar{color:#979892;padding-bottom:1em;}.remark-toolbar .remark-toolbar-link{border:2px solid #d7d8d2;color:#979892;display:inline-block;padding:2px 2px;text-decoration:none;text-align:center;min-width:20px;}.remark-toolbar .remark-toolbar-link:hover{border-color:#979892;color:#676862;}.remark-container.remark-presenter-mode .remark-slides-area{top:2%;left:2%;height:47.25%;width:48%;}.remark-container.remark-presenter-mode .remark-preview-area{display:block;}.remark-container.remark-presenter-mode .remark-notes-area{display:block;}@media print{.remark-container{overflow:visible;} .remark-slide-container{display:block;}}@page {size:908px 681px;margin:0;}",containerLayout:'<div class="remark-notes-area">\n  <div class="remark-toolbar">\n    <a class="remark-toolbar-link" href="#increase">+</a>\n    <a class="remark-toolbar-link" href="#decrease">-</a>\n  </div>\n  <div class="remark-notes"></div>\n</div>\n<div class="remark-slides-area">\n\n</div>\n<div class="remark-preview-area">\n</div>\n<div class="remark-backdrop"></div>\n<div class="remark-help">\n  <div class="remark-help-content">\n    <h1>Help</h1>\n    <p><b>Keyboard shortcuts</b></p>\n    <table class="light-keys">\n      <tr>\n        <td>\n          <span class="key"><b>&uarr;</b></span>,\n          <span class="key"><b>&larr;</b></span>,\n          <span class="key">Pg Up</span>,\n          <span class="key">K</span>\n        </td>\n        <td>Go to previous slide</td>\n      </tr>\n      <tr>\n        <td>\n          <span class="key"><b>&darr;</b></span>,\n          <span class="key"><b>&rarr;</b></span>,\n          <span class="key">Pg Dn</span>,\n          <span class="key">Space</span>,\n          <span class="key">J</span>\n        </td>\n        <td>Go to next slide</td>\n      </tr>\n      <tr>\n        <td>\n          <span class="key">Home</span>\n        </td>\n        <td>Go to first slide</td>\n      </tr>\n      <tr>\n        <td>\n          <span class="key">End</span>\n        </td>\n        <td>Go to last slide</td>\n      </tr>\n      <tr>\n        <td>\n          <span class="key">F</span>\n        </td>\n        <td>Toggle fullscreen mode</td>\n      </tr>\n      <tr>\n        <td>\n          <span class="key">C</span>\n        </td>\n        <td>Clone slideshow</td>\n      </tr>\n      <tr>\n        <td>\n          <span class="key">P</span>\n        </td>\n        <td>Toggle presenter mode</td>\n      </tr>\n      <tr>\n        <td>\n          <span class="key">?</span>\n        </td>\n        <td>Toggle this help</td>\n      </tr>\n    </table>\n  </div>\n  <div class="content dismiss">\n    <table class="light-keys">\n      <tr>\n        <td>\n          <span class="key">Esc</span>\n        </td>\n        <td>Back to slideshow</td>\n      </tr>\n    </table>\n  </div>\n</div>\n'}},{}],5:[function(require,module,exports){var process=module.exports={};process.nextTick=function(){var canSetImmediate=typeof window!=="undefined"&&window.setImmediate;var canPost=typeof window!=="undefined"&&window.postMessage&&window.addEventListener;if(canSetImmediate){return function(f){return window.setImmediate(f)}}if(canPost){var queue=[];window.addEventListener("message",function(ev){if(ev.source===window&&ev.data==="process-tick"){ev.stopPropagation();if(queue.length>0){var fn=queue.shift();fn()}}},true);return function nextTick(fn){queue.push(fn);window.postMessage("process-tick","*")}}return function nextTick(fn){setTimeout(fn,0)}}();process.title="browser";process.browser=true;process.env={};process.argv=[];process.binding=function(name){throw new Error("process.binding is not supported")};process.cwd=function(){return"/"};process.chdir=function(dir){throw new Error("process.chdir is not supported")}},{}],6:[function(require,module,exports){!function(process){if(!process.EventEmitter)process.EventEmitter=function(){};var EventEmitter=exports.EventEmitter=process.EventEmitter;var isArray=typeof Array.isArray==="function"?Array.isArray:function(xs){return Object.prototype.toString.call(xs)==="[object Array]"};function indexOf(xs,x){if(xs.indexOf)return xs.indexOf(x);for(var i=0;i<xs.length;i++){if(x===xs[i])return i}return-1}var defaultMaxListeners=10;EventEmitter.prototype.setMaxListeners=function(n){if(!this._events)this._events={};this._events.maxListeners=n};EventEmitter.prototype.emit=function(type){if(type==="error"){if(!this._events||!this._events.error||isArray(this._events.error)&&!this._events.error.length){if(arguments[1]instanceof Error){throw arguments[1]}else{throw new Error("Uncaught, unspecified 'error' event.")}return false}}if(!this._events)return false;var handler=this._events[type];if(!handler)return false;if(typeof handler=="function"){switch(arguments.length){case 1:handler.call(this);break;case 2:handler.call(this,arguments[1]);break;case 3:handler.call(this,arguments[1],arguments[2]);break;default:var args=Array.prototype.slice.call(arguments,1);handler.apply(this,args)}return true}else if(isArray(handler)){var args=Array.prototype.slice.call(arguments,1);var listeners=handler.slice();for(var i=0,l=listeners.length;i<l;i++){listeners[i].apply(this,args)}return true}else{return false}};EventEmitter.prototype.addListener=function(type,listener){if("function"!==typeof listener){throw new Error("addListener only takes instances of Function")}if(!this._events)this._events={};this.emit("newListener",type,listener);if(!this._events[type]){this._events[type]=listener}else if(isArray(this._events[type])){if(!this._events[type].warned){var m;if(this._events.maxListeners!==undefined){m=this._events.maxListeners}else{m=defaultMaxListeners}if(m&&m>0&&this._events[type].length>m){this._events[type].warned=true;console.error("(node) warning: possible EventEmitter memory "+"leak detected. %d listeners added. "+"Use emitter.setMaxListeners() to increase limit.",this._events[type].length);console.trace()}}this._events[type].push(listener)}else{this._events[type]=[this._events[type],listener]}return this};EventEmitter.prototype.on=EventEmitter.prototype.addListener;EventEmitter.prototype.once=function(type,listener){var self=this;self.on(type,function g(){self.removeListener(type,g);listener.apply(this,arguments)});return this};EventEmitter.prototype.removeListener=function(type,listener){if("function"!==typeof listener){throw new Error("removeListener only takes instances of Function")}if(!this._events||!this._events[type])return this;var list=this._events[type];if(isArray(list)){var i=indexOf(list,listener);if(i<0)return this;list.splice(i,1);if(list.length==0)delete this._events[type]}else if(this._events[type]===listener){delete this._events[type]}return this};EventEmitter.prototype.removeAllListeners=function(type){if(arguments.length===0){this._events={};return this}if(type&&this._events&&this._events[type])this._events[type]=null;return this};EventEmitter.prototype.listeners=function(type){if(!this._events)this._events={};if(!this._events[type])this._events[type]=[];if(!isArray(this._events[type])){this._events[type]=[this._events[type]]}return this._events[type]}}(require("__browserify_process"))},{__browserify_process:5}],2:[function(require,module,exports){var EventEmitter=require("events").EventEmitter,highlighter=require("./highlighter"),Slideshow=require("./models/slideshow"),SlideshowView=require("./views/slideshowView"),Controller=require("./controller");module.exports.highlighter=highlighter;module.exports.create=function(options){var events,slideshow,slideshowView,controller;options=applyDefaults(options);events=new EventEmitter;events.setMaxListeners(0);slideshow=new Slideshow(events,options);slideshowView=new SlideshowView(events,options.container,slideshow);controller=new Controller(events,slideshowView);return slideshow};function applyDefaults(options){var sourceElement;options=options||{};if(!options.hasOwnProperty("source")){sourceElement=document.getElementById("source");if(sourceElement){options.source=sourceElement.innerHTML;sourceElement.style.display="none"}}if(!(options.container instanceof window.HTMLElement)){options.container=document.body}return options}},{events:6,"./highlighter":3,"./models/slideshow":7,"./views/slideshowView":8,"./controller":9}],9:[function(require,module,exports){module.exports=Controller;function Controller(events,slideshowView){addApiEventListeners(events,slideshowView);addNavigationEventListeners(events,slideshowView);addKeyboardEventListeners(events);addMouseEventListeners(events);addTouchEventListeners(events)}function addApiEventListeners(events,slideshowView){events.on("pause",function(event){removeKeyboardEventListeners(events);removeMouseEventListeners(events);removeTouchEventListeners(events)});events.on("resume",function(event){addKeyboardEventListeners(events);addMouseEventListeners(events);addTouchEventListeners(events)})}function addNavigationEventListeners(events,slideshowView){if(slideshowView.isEmbedded()){events.emit("gotoSlide",1)}else{events.on("hashchange",navigateByHash);events.on("slideChanged",updateHash);navigateByHash()}events.on("message",navigateByMessage);function navigateByHash(){var slideNoOrName=(window.location.hash||"").substr(1);events.emit("gotoSlide",slideNoOrName)}function updateHash(slideNoOrName){window.location.hash="#"+slideNoOrName}function navigateByMessage(message){var cap;if((cap=/^gotoSlide:(\d+)$/.exec(message.data))!==null){events.emit("gotoSlide",parseInt(cap[1],10))}}}function removeKeyboardEventListeners(events){events.removeAllListeners("keydown");events.removeAllListeners("keypress")}function addKeyboardEventListeners(events){events.on("keydown",function(event){switch(event.keyCode){case 33:case 37:case 38:events.emit("gotoPreviousSlide");break;case 32:case 34:case 39:case 40:events.emit("gotoNextSlide");break;case 36:events.emit("gotoFirstSlide");break;case 35:events.emit("gotoLastSlide");break;case 27:events.emit("hideOverlay");break}});events.on("keypress",function(event){if(event.metaKey||event.ctrlKey){return}switch(String.fromCharCode(event.which)){case"j":events.emit("gotoNextSlide");break;case"k":events.emit("gotoPreviousSlide");break;case"c":events.emit("createClone");break;case"p":events.emit("togglePresenterMode");break;case"f":events.emit("toggleFullscreen");break;case"?":events.emit("toggleHelp");break}})}function removeMouseEventListeners(events){events.removeAllListeners("mousewheel")}function addMouseEventListeners(events){events.on("mousewheel",function(event){if(event.wheelDeltaY>0){events.emit("gotoPreviousSlide")}else if(event.wheelDeltaY<0){events.emit("gotoNextSlide")}})}function removeTouchEventListeners(events){events.removeAllListeners("touchstart");events.removeAllListeners("touchend");events.removeAllListeners("touchmove")}function addTouchEventListeners(events){var touch,startX,endX;var isTap=function(){return Math.abs(startX-endX)<10};var handleTap=function(){events.emit("tap",endX)};var handleSwipe=function(){if(startX>endX){events.emit("gotoNextSlide")}else{events.emit("gotoPreviousSlide")}};events.on("touchstart",function(event){touch=event.touches[0];startX=touch.clientX});events.on("touchend",function(event){if(event.target.nodeName.toUpperCase()==="A"){return}touch=event.changedTouches[0];endX=touch.clientX;if(isTap()){handleTap()}else{handleSwipe()}});events.on("touchmove",function(event){event.preventDefault()})}},{}],7:[function(require,module,exports){var Navigation=require("./slideshow/navigation"),Events=require("./slideshow/events"),utils=require("../utils"),Slide=require("./slide"),Parser=require("../parser");module.exports=Slideshow;function Slideshow(events,options){var self=this,slides=[];options=options||{};Events.call(self,events);Navigation.call(self,events);self.loadFromString=loadFromString;self.getSlides=getSlides;self.getSlideCount=getSlideCount;self.getSlideByName=getSlideByName;self.getRatio=getOrDefault("ratio","4:3");self.getHighlightStyle=getOrDefault("highlightStyle","default");self.getHighlightLanguage=getOrDefault("highlightLanguage","");loadFromString(options.source);function loadFromString(source){source=source||"";slides=createSlides(source);expandVariables(slides);events.emit("slidesChanged")}function getSlides(){return slides.map(function(slide){return slide})}function getSlideCount(){return slides.length}function getSlideByName(name){return slides.byName[name]}function getOrDefault(key,defaultValue){return function(){if(options[key]===undefined){return defaultValue}return options[key]}}}function createSlides(slideshowSource){var parser=new Parser,parsedSlides=parser.parse(slideshowSource),slides=[],byName={},layoutSlide;slides.byName={};parsedSlides.forEach(function(slide,i){var template,slideViewModel;if(slide.properties.continued==="true"&&i>0){template=slides[slides.length-1]}else if(byName[slide.properties.template]){template=byName[slide.properties.template]}else if(slide.properties.layout==="false"){layoutSlide=undefined}else if(layoutSlide&&slide.properties.layout!=="true"){template=layoutSlide}slideViewModel=new Slide(slides.length+1,slide,template);if(slide.properties.layout==="true"){layoutSlide=slideViewModel}if(slide.properties.name){byName[slide.properties.name]=slideViewModel}if(slide.properties.layout!=="true"){slides.push(slideViewModel);if(slide.properties.name){slides.byName[slide.properties.name]=slideViewModel}}});return slides}function expandVariables(slides){slides.forEach(function(slide){slide.expandVariables()})}},{"./slideshow/navigation":10,"./slideshow/events":11,"../utils":12,"./slide":13,"../parser":14}],8:[function(require,module,exports){var SlideView=require("./slideView"),Scaler=require("../scaler"),resources=require("../resources"),addClass=require("../utils").addClass,toggleClass=require("../utils").toggleClass,getPrefixedProperty=require("../utils").getPrefixedProperty;module.exports=SlideshowView;function SlideshowView(events,containerElement,slideshow){var self=this;self.events=events;self.slideshow=slideshow;self.scaler=new Scaler(events,slideshow);self.slideViews=[];self.configureContainerElement(containerElement);self.configureChildElements();self.updateDimensions();self.scaleElements();self.updateSlideViews();events.on("slidesChanged",function(){self.updateSlideViews()});events.on("hideSlide",function(slideIndex){self.hideSlide(slideIndex)});events.on("showSlide",function(slideIndex){self.showSlide(slideIndex)});events.on("togglePresenterMode",function(){toggleClass(self.containerElement,"remark-presenter-mode");self.scaleElements()});events.on("toggleHelp",function(){toggleClass(self.containerElement,"remark-help-mode")});handleFullscreen(self)}function handleFullscreen(self){var requestFullscreen=getPrefixedProperty(self.containerElement,"requestFullScreen"),cancelFullscreen=getPrefixedProperty(document,"cancelFullScreen");self.events.on("toggleFullscreen",function(){var fullscreenElement=getPrefixedProperty(document,"fullscreenElement")||getPrefixedProperty(document,"fullScreenElement");if(!fullscreenElement&&requestFullscreen){requestFullscreen.call(self.containerElement,Element.ALLOW_KEYBOARD_INPUT)}else if(cancelFullscreen){cancelFullscreen.call(document)}self.scaleElements()})}SlideshowView.prototype.isEmbedded=function(){return this.containerElement!==document.body};SlideshowView.prototype.configureContainerElement=function(element){var self=this;self.containerElement=element;addClass(element,"remark-container");if(element===document.body){addClass(document.getElementsByTagName("html")[0],"remark-container");forwardEvents(self.events,window,["hashchange","resize","keydown","keypress","mousewheel","message"]);forwardEvents(self.events,document,["touchstart","touchmove","touchend"])}else{element.style.position="absolute";element.tabIndex=-1;forwardEvents(self.events,window,["resize"]);forwardEvents(self.events,element,["keydown","keypress","mousewheel","touchstart","touchmove","touchend"])}self.events.on("tap",function(endX){if(endX<self.getContainerWidth()/2){self.slideshow.gotoPreviousSlide()}else{self.slideshow.gotoNextSlide()}})};function forwardEvents(target,source,events){events.forEach(function(eventName){source.addEventListener(eventName,function(){var args=Array.prototype.slice.call(arguments);target.emit.apply(target,[eventName].concat(args))})})}SlideshowView.prototype.configureChildElements=function(){var self=this;self.containerElement.innerHTML+=resources.containerLayout;self.elementArea=self.containerElement.getElementsByClassName("remark-slides-area")[0];self.previewArea=self.containerElement.getElementsByClassName("remark-preview-area")[0];self.notesArea=self.containerElement.getElementsByClassName("remark-notes-area")[0];self.notesElement=self.notesArea.getElementsByClassName("remark-notes")[0];self.toolbarElement=self.notesArea.getElementsByClassName("remark-toolbar")[0];var commands={increase:function(){self.notesElement.style.fontSize=(parseFloat(self.notesElement.style.fontSize)||1)+.1+"em"},decrease:function(){self.notesElement.style.fontSize=(parseFloat(self.notesElement.style.fontSize)||1)-.1+"em"}};self.toolbarElement.getElementsByTagName("a").forEach(function(link){link.addEventListener("click",function(e){var command=e.target.hash.substr(1);commands[command]();e.preventDefault()})});self.backdropElement=self.containerElement.getElementsByClassName("remark-backdrop")[0];self.helpElement=self.containerElement.getElementsByClassName("remark-help")[0];self.events.on("propertiesChanged",function(changes){if(changes.hasOwnProperty("ratio")){self.updateDimensions()}});self.events.on("resize",onResize);if(window.matchMedia){window.matchMedia("print").addListener(function(e){if(e.matches){self.slideViews.forEach(function(slideView){slideView.scale({clientWidth:908,clientHeight:681})})}})}function onResize(){self.scaleElements()}};SlideshowView.prototype.updateSlideViews=function(){var self=this;self.slideViews.forEach(function(slideView){self.elementArea.removeChild(slideView.containerElement)});self.slideViews=self.slideshow.getSlides().map(function(slide){return new SlideView(self.events,self.slideshow,self.scaler,slide)});self.slideViews.forEach(function(slideView){self.elementArea.appendChild(slideView.containerElement)});self.updateDimensions();if(self.slideshow.getCurrentSlideNo()>0){self.showSlide(self.slideshow.getCurrentSlideNo()-1)}};SlideshowView.prototype.scaleSlideBackgroundImages=function(dimensions){var self=this;self.slideViews.forEach(function(slideView){slideView.scaleBackgroundImage(dimensions)})};SlideshowView.prototype.showSlide=function(slideIndex){var self=this,slideView=self.slideViews[slideIndex],nextSlideView=self.slideViews[slideIndex+1];self.events.emit("beforeShowSlide",slideIndex);slideView.show();self.notesElement.innerHTML=slideView.notesMarkup;if(nextSlideView){self.previewArea.innerHTML=nextSlideView.containerElement.outerHTML}else{self.previewArea.innerHTML=""}self.events.emit("afterShowSlide",slideIndex)};SlideshowView.prototype.hideSlide=function(slideIndex){var self=this,slideView=self.slideViews[slideIndex];self.events.emit("beforeHideSlide",slideIndex);slideView.hide();self.events.emit("afterHideSlide",slideIndex)};SlideshowView.prototype.updateDimensions=function(){var self=this,dimensions=self.scaler.dimensions;self.helpElement.style.width=dimensions.width+"px";self.helpElement.style.height=dimensions.height+"px";self.scaleSlideBackgroundImages(dimensions);self.scaleElements()};SlideshowView.prototype.scaleElements=function(){var self=this;self.slideViews.forEach(function(slideView){slideView.scale(self.elementArea)});if(self.previewArea.children.length){self.scaler.scaleToFit(self.previewArea.children[0].children[0],self.previewArea)}self.scaler.scaleToFit(self.helpElement,self.containerElement)}},{"./slideView":15,"../scaler":16,"../resources":4,"../utils":12}],10:[function(require,module,exports){module.exports=Navigation;function Navigation(events){var self=this,currentSlideNo=0;self.getCurrentSlideNo=getCurrentSlideNo;self.gotoSlide=gotoSlide;self.gotoPreviousSlide=gotoPreviousSlide;self.gotoNextSlide=gotoNextSlide;self.gotoFirstSlide=gotoFirstSlide;self.gotoLastSlide=gotoLastSlide;self.pause=pause;self.resume=resume;events.on("gotoSlide",gotoSlide);events.on("gotoPreviousSlide",gotoPreviousSlide);events.on("gotoNextSlide",gotoNextSlide);events.on("gotoFirstSlide",gotoFirstSlide);events.on("gotoLastSlide",gotoLastSlide);events.on("slidesChanged",function(){if(currentSlideNo>self.getSlideCount()){currentSlideNo=self.getSlideCount()}});events.on("createClone",function(){if(!self.clone||self.clone.closed){self.clone=window.open(location.href,"_blank","location=no")}else{self.clone.focus()}});function pause(){events.emit("pause")}function resume(){events.emit("resume")}function getCurrentSlideNo(){return currentSlideNo}function gotoSlide(slideNoOrName){var slideNo=getSlideNo(slideNoOrName),alreadyOnSlide=slideNo===currentSlideNo,slideOutOfRange=slideNo<1||slideNo>self.getSlideCount();if(alreadyOnSlide||slideOutOfRange){return}if(currentSlideNo!==0){events.emit("hideSlide",currentSlideNo-1)}events.emit("showSlide",slideNo-1);currentSlideNo=slideNo;events.emit("slideChanged",slideNoOrName||slideNo);if(self.clone&&!self.clone.closed){self.clone.postMessage("gotoSlide:"+currentSlideNo,"*")}if(window.opener){window.opener.postMessage("gotoSlide:"+currentSlideNo,"*")}}function gotoPreviousSlide(){self.gotoSlide(currentSlideNo-1)}function gotoNextSlide(){self.gotoSlide(currentSlideNo+1)}function gotoFirstSlide(){self.gotoSlide(1)}function gotoLastSlide(){self.gotoSlide(self.getSlideCount())}function getSlideNo(slideNoOrName){var slideNo,slide;if(typeof slideNoOrName==="number"){return slideNoOrName}slideNo=parseInt(slideNoOrName,10);if(slideNo.toString()===slideNoOrName){return slideNo}slide=self.getSlideByName(slideNoOrName);if(slide){return slide.getSlideNo()}return 1}}},{}],11:[function(require,module,exports){var EventEmitter=require("events").EventEmitter;module.exports=Events;function Events(events){var self=this,externalEvents=new EventEmitter;externalEvents.setMaxListeners(0);self.on=function(){externalEvents.on.apply(externalEvents,arguments);return self};["showSlide","hideSlide","beforeShowSlide","afterShowSlide","beforeHideSlide","afterHideSlide"].map(function(eventName){events.on(eventName,function(slideIndex){var slide=self.getSlides()[slideIndex];externalEvents.emit(eventName,slide)})})}},{events:6}],12:[function(require,module,exports){exports.addClass=function(element,className){element.className=exports.getClasses(element).concat([className]).join(" ")};exports.removeClass=function(element,className){element.className=exports.getClasses(element).filter(function(klass){return klass!==className}).join(" ")};exports.toggleClass=function(element,className){var classes=exports.getClasses(element),index=classes.indexOf(className);if(index!==-1){classes.splice(index,1)}else{classes.push(className)}element.className=classes.join(" ")};exports.getClasses=function(element){return element.className.split(" ").filter(function(s){return s!==""})};exports.getPrefixedProperty=function(element,propertyName){var capitalizedPropertName=propertyName[0].toUpperCase()+propertyName.slice(1);return element[propertyName]||element["moz"+capitalizedPropertName]||element["webkit"+capitalizedPropertName]};forEach([Array,window.NodeList,window.HTMLCollection],extend);function extend(object){var prototype=object&&object.prototype;if(!prototype){return}prototype.forEach=prototype.forEach||function(f){forEach(this,f)};prototype.filter=prototype.filter||function(f){var result=[];this.forEach(function(element){if(f(element,result.length)){result.push(element)}});return result};prototype.map=prototype.map||function(f){var result=[];this.forEach(function(element){result.push(f(element,result.length))});return result}}function forEach(list,f){var i;for(i=0;i<list.length;++i){f(list[i],i)}}},{}],13:[function(require,module,exports){module.exports=Slide;function Slide(slideNo,slide,template){var self=this;self.properties=slide.properties||{};self.source=slide.source||"";self.notes=slide.notes||"";self.number=slideNo;self.getSlideNo=function(){return slideNo};if(template){inherit(self,template)}}function inherit(slide,template){inheritProperties(slide,template);inheritSource(slide,template);inheritNotes(slide,template)}function inheritProperties(slide,template){var property,value;for(property in template.properties){if(!template.properties.hasOwnProperty(property)||ignoreProperty(property)){continue}value=[template.properties[property]];if(property==="class"&&slide.properties[property]){value.push(slide.properties[property])}if(property==="class"||slide.properties[property]===undefined){slide.properties[property]=value.join(", ")}}}function ignoreProperty(property){return property==="name"||property==="layout"}function inheritSource(slide,template){var expandedVariables;slide.properties.content=slide.source;slide.source=template.source;expandedVariables=slide.expandVariables(true);if(expandedVariables.content===undefined){slide.source+=slide.properties.content}delete slide.properties.content}function inheritNotes(slide,template){if(template.notes){slide.notes=template.notes+"\n\n"+slide.notes}}Slide.prototype.expandVariables=function(contentOnly){var properties=this.properties,expandResult={};this.source=this.source.replace(/(\\)?(\{\{([^\}\n]+)\}\})/g,function(match,escaped,unescapedMatch,property){var propertyName=property.trim(),propertyValue;if(escaped){return contentOnly?match[0]:unescapedMatch}if(contentOnly&&propertyName!=="content"){return match}propertyValue=properties[propertyName];if(propertyValue!==undefined){expandResult[propertyName]=propertyValue;return propertyValue}return propertyName==="content"?"":unescapedMatch});return expandResult}},{}],16:[function(require,module,exports){var referenceWidth=908,referenceHeight=681,referenceRatio=referenceWidth/referenceHeight;module.exports=Scaler;function Scaler(events,slideshow){var self=this;self.events=events;self.slideshow=slideshow;self.ratio=getRatio(slideshow);self.dimensions=getDimensions(self.ratio);self.events.on("propertiesChanged",function(changes){if(changes.hasOwnProperty("ratio")){self.ratio=getRatio(slideshow);self.dimensions=getDimensions(self.ratio)}})}Scaler.prototype.scaleToFit=function(element,container){var self=this,containerHeight=container.clientHeight,containerWidth=container.clientWidth,scale,scaledWidth,scaledHeight,ratio=self.ratio,dimensions=self.dimensions,direction,left,top;if(containerWidth/ratio.width>containerHeight/ratio.height){scale=containerHeight/dimensions.height}else{scale=containerWidth/dimensions.width}scaledWidth=dimensions.width*scale;scaledHeight=dimensions.height*scale;left=(containerWidth-scaledWidth)/2;top=(containerHeight-scaledHeight)/2;element.style["-webkit-transform"]="scale("+scale+")";element.style.MozTransform="scale("+scale+")";element.style.left=Math.max(left,0)+"px";element.style.top=Math.max(top,0)+"px"};function getRatio(slideshow){var ratioComponents=slideshow.getRatio().split(":"),ratio;ratio={width:parseInt(ratioComponents[0],10),height:parseInt(ratioComponents[1],10)};ratio.ratio=ratio.width/ratio.height;return ratio}function getDimensions(ratio){return{width:Math.floor(referenceWidth/referenceRatio*ratio.ratio),height:referenceHeight}}},{}],14:[function(require,module,exports){var Lexer=require("./lexer"),converter=require("./converter");module.exports=Parser;function Parser(){}Parser.prototype.parse=function(src){var lexer=new Lexer,tokens=lexer.lex(src),slides=[],slide=createSlide(),tag,classes;tokens.forEach(function(token){switch(token.type){case"text":case"code":case"fences":appendTo(slide,token.text);break;case"content_start":tag=token.block?"div":"span";classes=token.classes.join(" ");appendTo(slide,"&lt;"+tag+' class="'+classes+'"&gt;');break;case"content_end":tag=token.block?"div":"span";appendTo(slide,"&lt;/"+tag+"&gt;");break;case"separator":slides.push(slide);slide=createSlide();slide.properties.continued=(token.text==="--").toString();break;case"notes_separator":slide.notes="";break}});slides.push(slide);slides.forEach(function(slide){slide.source=extractProperties(slide.source,slide.properties)});return slides};function createSlide(){return{source:"",properties:{continued:"false"}}}function appendTo(slide,content){if(slide.notes!==undefined){slide.notes+=content}else{slide.source+=content}}function extractProperties(source,properties){var propertyFinder=/^\n*([-\w]+):([^$\n]*)/i,match;while((match=propertyFinder.exec(source))!==null){source=source.substr(0,match.index)+source.substr(match.index+match[0].length);properties[match[1].trim()]=match[2].trim();propertyFinder.lastIndex=match.index}return source}},{"./lexer":17,"./converter":18}],15:[function(require,module,exports){var converter=require("../converter"),highlighter=require("../highlighter"),utils=require("../utils");module.exports=SlideView;function SlideView(events,slideshow,scaler,slide){var self=this;self.events=events;self.slideshow=slideshow;self.scaler=scaler;self.slide=slide;self.notesMarkup=createNotesMarkup(slideshow,slide.notes);self.configureElements();self.updateDimensions();self.events.on("propertiesChanged",function(changes){if(changes.hasOwnProperty("ratio")){self.updateDimensions()
}})}SlideView.prototype.updateDimensions=function(){var self=this,dimensions=self.scaler.dimensions;self.scalingElement.style.width=dimensions.width+"px";self.scalingElement.style.height=dimensions.height+"px"};SlideView.prototype.scale=function(containerElement){var self=this;self.scaler.scaleToFit(self.scalingElement,containerElement)};SlideView.prototype.show=function(){utils.addClass(this.containerElement,"remark-visible")};SlideView.prototype.hide=function(){utils.removeClass(this.containerElement,"remark-visible")};SlideView.prototype.configureElements=function(){var self=this;self.containerElement=document.createElement("div");self.containerElement.className="remark-slide-container";self.scalingElement=document.createElement("div");self.scalingElement.className="remark-slide-scaler";self.element=document.createElement("div");self.element.className="remark-slide";self.contentElement=createContentElement(self.events,self.slideshow,self.slide);self.numberElement=document.createElement("div");self.numberElement.className="remark-slide-number";self.numberElement.innerHTML=self.slide.number+" / "+self.slideshow.getSlides().length;self.contentElement.appendChild(self.numberElement);self.element.appendChild(self.contentElement);self.scalingElement.appendChild(self.element);self.containerElement.appendChild(self.scalingElement)};SlideView.prototype.scaleBackgroundImage=function(dimensions){var self=this,styles=window.getComputedStyle(this.contentElement),backgroundImage=styles.backgroundImage,match,image;if((match=/^url\(("?)([^\)]+?)\1\)/.exec(backgroundImage))!==null){image=new Image;image.onload=function(){if(image.width>dimensions.width||image.height>dimensions.height){if(!self.originalBackgroundSize){self.originalBackgroundSize=self.contentElement.style.backgroundSize;self.backgroundSizeSet=true;self.contentElement.style.backgroundSize="contain"}}else{if(self.backgroundSizeSet){self.contentElement.style.backgroundSize=self.originalBackgroundSize;self.backgroundSizeSet=false}}};image.src=match[2]}};function createContentElement(events,slideshow,slide){var element=document.createElement("div");if(slide.properties.name){element.id="slide-"+slide.properties.name}styleContentElement(slideshow,element,slide.properties);element.innerHTML=converter.convertMarkdown(slide.source);element.innerHTML=element.innerHTML.replace(/<p>\s*<\/p>/g,"");highlightCodeBlocks(element,slideshow);return element}function styleContentElement(slideshow,element,properties){element.className="";setClassFromProperties(element,properties);setHighlightStyleFromProperties(element,properties,slideshow);setBackgroundFromProperties(element,properties)}function createNotesMarkup(slideshow,notes){var element=document.createElement("div");element.innerHTML=converter.convertMarkdown(notes);element.innerHTML=element.innerHTML.replace(/<p>\s*<\/p>/g,"");highlightCodeBlocks(element,slideshow);return element.innerHTML}function setBackgroundFromProperties(element,properties){var backgroundImage=properties["background-image"];if(backgroundImage){element.style.backgroundImage=backgroundImage}}function setHighlightStyleFromProperties(element,properties,slideshow){var highlightStyle=properties["highlight-style"]||slideshow.getHighlightStyle();if(highlightStyle){utils.addClass(element,"hljs-"+highlightStyle)}}function setClassFromProperties(element,properties){utils.addClass(element,"remark-slide-content");(properties["class"]||"").split(/,| /).filter(function(s){return s!==""}).forEach(function(c){utils.addClass(element,c)})}function highlightCodeBlocks(content,slideshow){var codeBlocks=content.getElementsByTagName("code");codeBlocks.forEach(function(block){if(block.className===""){block.className=slideshow.getHighlightLanguage()}if(block.className!==""){highlighter.engine.highlightBlock(block,"  ")}utils.addClass(block,"remark-code")})}},{"../converter":18,"../highlighter":3,"../utils":12}],17:[function(require,module,exports){module.exports=Lexer;var CODE=1,CONTENT=2,FENCES=3,SEPARATOR=4,NOTES_SEPARATOR=5;var regexByName={CODE:/(?:^|\n)( {4}[^\n]+\n*)+/,CONTENT:/(?:\\)?((?:\.[a-zA-Z_\-][a-zA-Z\-_0-9]*)+)\[/,FENCES:/(?:^|\n) *(`{3,}|~{3,}) *(?:\S+)? *\n(?:[\s\S]+?)\s*\3 *(?:\n+|$)/,SEPARATOR:/(?:^|\n)(---?)(?:\n|$)/,NOTES_SEPARATOR:/(?:^|\n)(\?{3})(?:\n|$)/};var block=replace(/CODE|CONTENT|FENCES|SEPARATOR|NOTES_SEPARATOR/,regexByName),inline=replace(/CODE|CONTENT|FENCES/,regexByName);function Lexer(){}Lexer.prototype.lex=function(src){var tokens=lex(src,block),i;for(i=tokens.length-2;i>=0;i--){if(tokens[i].type==="text"&&tokens[i+1].type==="text"){tokens[i].text+=tokens[i+1].text;tokens.splice(i+1,1)}}return tokens};function lex(src,regex,tokens){var cap,text;tokens=tokens||[];while((cap=regex.exec(src))!==null){if(cap.index>0){tokens.push({type:"text",text:src.substring(0,cap.index)})}if(cap[CODE]){tokens.push({type:"code",text:cap[0]})}else if(cap[FENCES]){tokens.push({type:"fences",text:cap[0]})}else if(cap[SEPARATOR]){tokens.push({type:"separator",text:cap[SEPARATOR]})}else if(cap[NOTES_SEPARATOR]){tokens.push({type:"notes_separator",text:cap[NOTES_SEPARATOR]})}else if(cap[CONTENT]){text=getTextInBrackets(src,cap.index+cap[0].length);if(text!==undefined){src=src.substring(text.length+1);tokens.push({type:"content_start",classes:cap[CONTENT].substring(1).split("."),block:text.indexOf("\n")!==-1});lex(text,inline,tokens);tokens.push({type:"content_end",block:text.indexOf("\n")!==-1})}else{tokens.push({type:"text",text:cap[0]})}}src=src.substring(cap.index+cap[0].length)}if(src||!src&&tokens.length===0){tokens.push({type:"text",text:src})}return tokens}function replace(regex,replacements){return new RegExp(regex.source.replace(/\w{2,}/g,function(key){return replacements[key].source}))}function getTextInBrackets(src,offset){var depth=1,pos=offset,chr;while(depth>0&&pos<src.length){chr=src[pos++];depth+=chr==="["&&1||chr==="]"&&-1||0}if(depth===0){src=src.substr(offset,pos-offset-1);return src}}},{}],18:[function(require,module,exports){var marked=require("marked"),converter=module.exports={};marked.setOptions({gfm:true,tables:true,breaks:false,pedantic:false,sanitize:false,smartLists:true,langPrefix:""});converter.convertMarkdown=function(source){source=source.replace(/(^|\n)( *)&gt;/g,"$1$2>");source=marked(source.replace(/^\s+/,""));source=source.replace(/&[l|g]t;/g,function(match){return match==="&lt;"?"<":">"});source=source.replace(/&amp;/g,"&");source=source.replace(/&quot;/g,'"');return source}},{marked:19}],19:[function(require,module,exports){!function(global){!function(){var block={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:noop,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:noop,lheading:/^([^\n]+)\n *(=|-){3,} *\n*/,blockquote:/^( *>[^\n]+(\n[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:noop,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};block.bullet=/(?:[*+-]|\d+\.)/;block.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;block.item=replace(block.item,"gm")(/bull/g,block.bullet)();block.list=replace(block.list)(/bull/g,block.bullet)("hr",/\n+(?=(?: *[-*_]){3,} *(?:\n+|$))/)();block._tag="(?!(?:"+"a|em|strong|small|s|cite|q|dfn|abbr|data|time|code"+"|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo"+"|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|@)\\b";block.html=replace(block.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,block._tag)();block.paragraph=replace(block.paragraph)("hr",block.hr)("heading",block.heading)("lheading",block.lheading)("blockquote",block.blockquote)("tag","<"+block._tag)("def",block.def)();block.normal=merge({},block);block.gfm=merge({},block.normal,{fences:/^ *(`{3,}|~{3,}) *(\w+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,paragraph:/^/});block.gfm.paragraph=replace(block.paragraph)("(?!","(?!"+block.gfm.fences.source.replace("\\1","\\2")+"|")();block.tables=merge({},block.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/});function Lexer(options){this.tokens=[];this.tokens.links={};this.options=options||marked.defaults;this.rules=block.normal;if(this.options.gfm){if(this.options.tables){this.rules=block.tables}else{this.rules=block.gfm}}}Lexer.rules=block;Lexer.lex=function(src,options){var lexer=new Lexer(options);return lexer.lex(src)};Lexer.prototype.lex=function(src){src=src.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n");return this.token(src,true)};Lexer.prototype.token=function(src,top){var src=src.replace(/^ +$/gm,""),next,loose,cap,bull,b,item,space,i,l;while(src){if(cap=this.rules.newline.exec(src)){src=src.substring(cap[0].length);if(cap[0].length>1){this.tokens.push({type:"space"})}}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);cap=cap[0].replace(/^ {4}/gm,"");this.tokens.push({type:"code",text:!this.options.pedantic?cap.replace(/\n+$/,""):cap});continue}if(cap=this.rules.fences.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"code",lang:cap[2],text:cap[3]});continue}if(cap=this.rules.heading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"heading",depth:cap[1].length,text:cap[2]});continue}if(top&&(cap=this.rules.nptable.exec(src))){src=src.substring(cap[0].length);item={type:"table",header:cap[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:cap[3].replace(/\n$/,"").split("\n")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]="right"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]="center"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]="left"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].split(/ *\| */)}this.tokens.push(item);continue}if(cap=this.rules.lheading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"heading",depth:cap[2]==="="?1:2,text:cap[1]});continue}if(cap=this.rules.hr.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"hr"});continue}if(cap=this.rules.blockquote.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"blockquote_start"});cap=cap[0].replace(/^ *> ?/gm,"");this.token(cap,top);this.tokens.push({type:"blockquote_end"});continue}if(cap=this.rules.list.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"list_start",ordered:isFinite(cap[2])});cap=cap[0].match(this.rules.item);if(this.options.smartLists){bull=block.bullet.exec(cap[0])[0]}next=false;l=cap.length;i=0;for(;i<l;i++){item=cap[i];space=item.length;item=item.replace(/^ *([*+-]|\d+\.) +/,"");if(~item.indexOf("\n ")){space-=item.length;item=!this.options.pedantic?item.replace(new RegExp("^ {1,"+space+"}","gm"),""):item.replace(/^ {1,4}/gm,"")}if(this.options.smartLists&&i!==l-1){b=block.bullet.exec(cap[i+1])[0];if(bull!==b&&!(bull[1]==="."&&b[1]===".")){src=cap.slice(i+1).join("\n")+src;i=l-1}}loose=next||/\n\n(?!\s*$)/.test(item);if(i!==l-1){next=item[item.length-1]==="\n";if(!loose)loose=next}this.tokens.push({type:loose?"loose_item_start":"list_item_start"});this.token(item,false);this.tokens.push({type:"list_item_end"})}this.tokens.push({type:"list_end"});continue}if(cap=this.rules.html.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:cap[1]==="pre",text:cap[0]});continue}if(top&&(cap=this.rules.def.exec(src))){src=src.substring(cap[0].length);this.tokens.links[cap[1].toLowerCase()]={href:cap[2],title:cap[3]};continue}if(top&&(cap=this.rules.table.exec(src))){src=src.substring(cap[0].length);item={type:"table",header:cap[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:cap[3].replace(/(?: *\| *)?\n$/,"").split("\n")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]="right"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]="center"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]="left"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */)}this.tokens.push(item);continue}if(top&&(cap=this.rules.paragraph.exec(src))){src=src.substring(cap[0].length);this.tokens.push({type:"paragraph",text:cap[1][cap[1].length-1]==="\n"?cap[1].slice(0,-1):cap[1]});continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"text",text:cap[0]});continue}if(src){throw new Error("Infinite loop on byte: "+src.charCodeAt(0))}}return this.tokens};var inline={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:noop,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:noop,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};inline._inside=/(?:\[[^\]]*\]|[^\]]|\](?=[^\[]*\]))*/;inline._href=/\s*<?([^\s]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;inline.link=replace(inline.link)("inside",inline._inside)("href",inline._href)();inline.reflink=replace(inline.reflink)("inside",inline._inside)();inline.normal=merge({},inline);inline.pedantic=merge({},inline.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/});inline.gfm=merge({},inline.normal,{escape:replace(inline.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:replace(inline.text)("]|","~]|")("|","|https?://|")()});inline.breaks=merge({},inline.gfm,{br:replace(inline.br)("{2,}","*")(),text:replace(inline.gfm.text)("{2,}","*")()});function InlineLexer(links,options){this.options=options||marked.defaults;this.links=links;this.rules=inline.normal;if(!this.links){throw new Error("Tokens array requires a `links` property.")}if(this.options.gfm){if(this.options.breaks){this.rules=inline.breaks}else{this.rules=inline.gfm}}else if(this.options.pedantic){this.rules=inline.pedantic}}InlineLexer.rules=inline;InlineLexer.output=function(src,links,options){var inline=new InlineLexer(links,options);return inline.output(src)};InlineLexer.prototype.output=function(src){var out="",link,text,href,cap;while(src){if(cap=this.rules.escape.exec(src)){src=src.substring(cap[0].length);out+=cap[1];continue}if(cap=this.rules.autolink.exec(src)){src=src.substring(cap[0].length);if(cap[2]==="@"){text=cap[1][6]===":"?this.mangle(cap[1].substring(7)):this.mangle(cap[1]);href=this.mangle("mailto:")+text}else{text=escape(cap[1]);href=text}out+='<a href="'+href+'">'+text+"</a>";continue}if(cap=this.rules.url.exec(src)){src=src.substring(cap[0].length);text=escape(cap[1]);href=text;out+='<a href="'+href+'">'+text+"</a>";continue}if(cap=this.rules.tag.exec(src)){src=src.substring(cap[0].length);out+=this.options.sanitize?escape(cap[0]):cap[0];continue}if(cap=this.rules.link.exec(src)){src=src.substring(cap[0].length);out+=this.outputLink(cap,{href:cap[2],title:cap[3]});continue}if((cap=this.rules.reflink.exec(src))||(cap=this.rules.nolink.exec(src))){src=src.substring(cap[0].length);link=(cap[2]||cap[1]).replace(/\s+/g," ");link=this.links[link.toLowerCase()];if(!link||!link.href){out+=cap[0][0];src=cap[0].substring(1)+src;continue}out+=this.outputLink(cap,link);continue}if(cap=this.rules.strong.exec(src)){src=src.substring(cap[0].length);out+="<strong>"+this.output(cap[2]||cap[1])+"</strong>";continue}if(cap=this.rules.em.exec(src)){src=src.substring(cap[0].length);out+="<em>"+this.output(cap[2]||cap[1])+"</em>";continue}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);out+="<code>"+escape(cap[2],true)+"</code>";continue}if(cap=this.rules.br.exec(src)){src=src.substring(cap[0].length);out+="<br>";continue}if(cap=this.rules.del.exec(src)){src=src.substring(cap[0].length);out+="<del>"+this.output(cap[1])+"</del>";continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);out+=escape(cap[0]);continue}if(src){throw new Error("Infinite loop on byte: "+src.charCodeAt(0))}}return out};InlineLexer.prototype.outputLink=function(cap,link){if(cap[0][0]!=="!"){return'<a href="'+escape(link.href)+'"'+(link.title?' title="'+escape(link.title)+'"':"")+">"+this.output(cap[1])+"</a>"}else{return'<img src="'+escape(link.href)+'" alt="'+escape(cap[1])+'"'+(link.title?' title="'+escape(link.title)+'"':"")+">"}};InlineLexer.prototype.mangle=function(text){var out="",l=text.length,i=0,ch;for(;i<l;i++){ch=text.charCodeAt(i);if(Math.random()>.5){ch="x"+ch.toString(16)}out+="&#"+ch+";"}return out};function Parser(options){this.tokens=[];this.token=null;this.options=options||marked.defaults}Parser.parse=function(src,options){var parser=new Parser(options);return parser.parse(src)};Parser.prototype.parse=function(src){this.inline=new InlineLexer(src.links,this.options);this.tokens=src.reverse();var out="";while(this.next()){out+=this.tok()}return out};Parser.prototype.next=function(){return this.token=this.tokens.pop()};Parser.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0};Parser.prototype.parseText=function(){var body=this.token.text;while(this.peek().type==="text"){body+="\n"+this.next().text}return this.inline.output(body)};Parser.prototype.tok=function(){switch(this.token.type){case"space":{return""}case"hr":{return"<hr>\n"}case"heading":{return"<h"+this.token.depth+">"+this.inline.output(this.token.text)+"</h"+this.token.depth+">\n"}case"code":{if(this.options.highlight){var code=this.options.highlight(this.token.text,this.token.lang);if(code!=null&&code!==this.token.text){this.token.escaped=true;this.token.text=code}}if(!this.token.escaped){this.token.text=escape(this.token.text,true)}return"<pre><code"+(this.token.lang?' class="'+this.options.langPrefix+this.token.lang+'"':"")+">"+this.token.text+"</code></pre>\n"}case"table":{var body="",heading,i,row,cell,j;body+="<thead>\n<tr>\n";for(i=0;i<this.token.header.length;i++){heading=this.inline.output(this.token.header[i]);body+=this.token.align[i]?'<th align="'+this.token.align[i]+'">'+heading+"</th>\n":"<th>"+heading+"</th>\n"}body+="</tr>\n</thead>\n";body+="<tbody>\n";for(i=0;i<this.token.cells.length;i++){row=this.token.cells[i];body+="<tr>\n";for(j=0;j<row.length;j++){cell=this.inline.output(row[j]);body+=this.token.align[j]?'<td align="'+this.token.align[j]+'">'+cell+"</td>\n":"<td>"+cell+"</td>\n"}body+="</tr>\n"}body+="</tbody>\n";return"<table>\n"+body+"</table>\n"}case"blockquote_start":{var body="";while(this.next().type!=="blockquote_end"){body+=this.tok()}return"<blockquote>\n"+body+"</blockquote>\n"}case"list_start":{var type=this.token.ordered?"ol":"ul",body="";while(this.next().type!=="list_end"){body+=this.tok()}return"<"+type+">\n"+body+"</"+type+">\n"}case"list_item_start":{var body="";while(this.next().type!=="list_item_end"){body+=this.token.type==="text"?this.parseText():this.tok()}return"<li>"+body+"</li>\n"}case"loose_item_start":{var body="";while(this.next().type!=="list_item_end"){body+=this.tok()}return"<li>"+body+"</li>\n"}case"html":{return!this.token.pre&&!this.options.pedantic?this.inline.output(this.token.text):this.token.text}case"paragraph":{return"<p>"+this.inline.output(this.token.text)+"</p>\n"}case"text":{return"<p>"+this.parseText()+"</p>\n"}}};function escape(html,encode){return html.replace(!encode?/&(?!#?\w+;)/g:/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function replace(regex,opt){regex=regex.source;opt=opt||"";return function self(name,val){if(!name)return new RegExp(regex,opt);val=val.source||val;val=val.replace(/(^|[^\[])\^/g,"$1");regex=regex.replace(name,val);return self}}function noop(){}noop.exec=noop;function merge(obj){var i=1,target,key;for(;i<arguments.length;i++){target=arguments[i];for(key in target){if(Object.prototype.hasOwnProperty.call(target,key)){obj[key]=target[key]}}}return obj}function marked(src,opt){try{if(opt)opt=merge({},marked.defaults,opt);return Parser.parse(Lexer.lex(src,opt),opt)}catch(e){e.message+="\nPlease report this to https://github.com/chjj/marked.";if((opt||marked.defaults).silent){return"<p>An error occured:</p><pre>"+escape(e.message+"",true)+"</pre>"}throw e}}marked.options=marked.setOptions=function(opt){merge(marked.defaults,opt);return marked};marked.defaults={gfm:true,tables:true,breaks:false,pedantic:false,sanitize:false,smartLists:false,silent:false,highlight:null,langPrefix:"lang-"};marked.Parser=Parser;marked.parser=Parser.parse;marked.Lexer=Lexer;marked.lexer=Lexer.lex;marked.InlineLexer=InlineLexer;marked.inlineLexer=InlineLexer.output;marked.parse=marked;if(typeof exports==="object"){module.exports=marked}else if(typeof define==="function"&&define.amd){define(function(){return marked})}else{this.marked=marked}}.call(function(){return this||(typeof window!=="undefined"?window:global)}())}(window)},{}]},{},[1]);

/*!
Deck JS - deck.core
Copyright (c) 2011 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
https://github.com/imakewebthings/deck.js/blob/master/GPL-license.txt
*/

/*
The deck.core module provides all the basic functionality for creating and
moving through a deck.  It does so by applying classes to indicate the state of
the deck and its slides, allowing CSS to take care of the visual representation
of each state.  It also provides methods for navigating the deck and inspecting
its state, as well as basic key bindings for going to the next and previous
slides.  More functionality is provided by wholly separate extension modules
that use the API provided by core.
*/

(function($, deck, document, undefined) {
  var slides, // Array of all the uh, slides...
  current, // Array index of the current slide
  $container, // Keeping this cached
  
  events = {
    /*
    This event fires whenever the current slide changes, whether by way of
    next, prev, or go. The callback function is passed two parameters, from
    and to, equal to the indices of the old slide and the new slide
    respectively. If preventDefault is called on the event within this handler
    the slide change does not occur.
    
    $(document).bind('deck.change', function(event, from, to) {
       alert('Moving from slide ' + from + ' to ' + to);
    });
    */
    change: 'deck.change',
    
    /*
    This event fires at the beginning of deck initialization, after the options
    are set but before the slides array is created.  This event makes a good hook
    for preprocessing extensions looking to modify the deck.
    */
    beforeInitialize: 'deck.beforeInit',
    
    /*
    This event fires at the end of deck initialization. Extensions should
    implement any code that relies on user extensible options (key bindings,
    element selectors, classes) within a handler for this event. Native
    events associated with Deck JS should be scoped under a .deck event
    namespace, as with the example below:
    
    var $d = $(document);
    $.deck.defaults.keys.myExtensionKeycode = 70; // 'h'
    $d.bind('deck.init', function() {
       $d.bind('keydown.deck', function(event) {
          if (event.which === $.deck.getOptions().keys.myExtensionKeycode) {
             // Rock out
          }
       });
    });
    */
    initialize: 'deck.init' 
  },
  
  options = {},
  $d = $(document),
  
  /*
  Internal function. Updates slide and container classes based on which
  slide is the current slide.
  */
  updateStates = function() {
    var oc = options.classes,
    osc = options.selectors.container,
    old = $container.data('onSlide'),
    $all = $();
    
    // Container state
    $container.removeClass(oc.onPrefix + old)
      .addClass(oc.onPrefix + current)
      .data('onSlide', current);
    
    // Remove and re-add child-current classes for nesting
    $('.' + oc.current).parentsUntil(osc).removeClass(oc.childCurrent);
    slides[current].parentsUntil(osc).addClass(oc.childCurrent);
    
    // Remove previous states
    $.each(slides, function(i, el) {
      $all = $all.add(el);
    });
    $all.removeClass([
      oc.before,
      oc.previous,
      oc.current,
      oc.next,
      oc.after
    ].join(" "));
    
    // Add new states back in
    slides[current].addClass(oc.current);
    if (current > 0) {
      slides[current-1].addClass(oc.previous);
    }
    if (current + 1 < slides.length) {
      slides[current+1].addClass(oc.next);
    }
    if (current > 1) {
      $.each(slides.slice(0, current - 1), function(i, el) {
        el.addClass(oc.before);
      });
    }
    if (current + 2 < slides.length) {
      $.each(slides.slice(current+2), function(i, el) {
        el.addClass(oc.after);
      });
    }
  },
  
  /* Methods exposed in the jQuery.deck namespace */
  methods = {
    
    /*
    jQuery.deck(selector, options)
    
    selector: string | jQuery | array
    options: object, optional
        
    Initializes the deck, using each element matched by selector as a slide.
    May also be passed an array of string selectors or jQuery objects, in
    which case each selector in the array is considered a slide. The second
    parameter is an optional options object which will extend the default
    values.
    
    $.deck('.slide');
    
    or
    
    $.deck([
       '#first-slide',
       '#second-slide',
       '#etc'
    ]);
    */  
    init: function(elements, opts) {
      var startTouch,
      tolerance,
      esp = function(e) {
        e.stopPropagation();
      };
      
      options = $.extend(true, {}, $[deck].defaults, opts);
      slides = [];
      current = 0;
      $container = $(options.selectors.container);
      tolerance = options.touch.swipeTolerance;
      
      // Pre init event for preprocessing hooks
      $d.trigger(events.beforeInitialize);
      
      // Hide the deck while states are being applied to kill transitions
      $container.addClass(options.classes.loading);
      
      // Fill slides array depending on parameter type
      if ($.isArray(elements)) {
        $.each(elements, function(i, e) {
          slides.push($(e));
        });
      }
      else {
        $(elements).each(function(i, e) {
          slides.push($(e));
        });
      }
      
      /* Remove any previous bindings, and rebind key events */
      $d.unbind('keydown.deck').bind('keydown.deck', function(e) {
        if (e.which === options.keys.next || $.inArray(e.which, options.keys.next) > -1) {
          methods.next();
          e.preventDefault();
        }
        else if (e.which === options.keys.previous || $.inArray(e.which, options.keys.previous) > -1) {
          methods.prev();
          e.preventDefault();
        }
      })
      /* Stop propagation of key events within editable elements */
      .undelegate('input, textarea, select, button, meter, progress, [contentEditable]', 'keydown', esp)
      .delegate('input, textarea, select, button, meter, progress, [contentEditable]', 'keydown', esp);
      
      /* Bind touch events for swiping between slides on touch devices */
      $container.unbind('touchstart.deck').bind('touchstart.deck', function(e) {
        if (!startTouch) {
          startTouch = $.extend({}, e.originalEvent.targetTouches[0]);
        }
      })
      .unbind('touchmove.deck').bind('touchmove.deck', function(e) {
        $.each(e.originalEvent.changedTouches, function(i, t) {
          if (startTouch && t.identifier === startTouch.identifier) {
            if (t.screenX - startTouch.screenX > tolerance || t.screenY - startTouch.screenY > tolerance) {
              $[deck]('prev');
              startTouch = undefined;
            }
            else if (t.screenX - startTouch.screenX < -1 * tolerance || t.screenY - startTouch.screenY < -1 * tolerance) {
              $[deck]('next');
              startTouch = undefined;
            }
            return false;
          }
        });
        e.preventDefault();
      })
      .unbind('touchend.deck').bind('touchend.deck', function(t) {
        $.each(t.originalEvent.changedTouches, function(i, t) {
          if (startTouch && t.identifier === startTouch.identifier) {
            startTouch = undefined;
          }
        });
      })
      .scrollLeft(0).scrollTop(0);
      
      /*
      Kick iframe videos, which dont like to redraw w/ transforms.
      Remove this if Webkit ever fixes it.
       */
      $.each(slides, function(i, $el) {
        $el.unbind('webkitTransitionEnd.deck').bind('webkitTransitionEnd.deck',
        function(event) {
          if ($el.hasClass($[deck]('getOptions').classes.current)) {
            var embeds = $(this).find('iframe').css('opacity', 0);
            window.setTimeout(function() {
              embeds.css('opacity', 1);
            }, 100);
          }
        });
      });
      
      if (slides.length) {
        updateStates();
      }
      
      // Show deck again now that slides are in place
      $container.removeClass(options.classes.loading);
      $d.trigger(events.initialize);
    },
    
    /*
    jQuery.deck('go', index)
    
    index: integer | string
    
    Moves to the slide at the specified index if index is a number. Index is
    0-based, so $.deck('go', 0); will move to the first slide. If index is a
    string this will move to the slide with the specified id. If index is out
    of bounds or doesn't match a slide id the call is ignored.
    */
    go: function(index) {
      var e = $.Event(events.change),
      ndx;
      
      /* Number index, easy. */
      if (typeof index === 'number' && index >= 0 && index < slides.length) {
        ndx = index;
      }
      /* Id string index, search for it and set integer index */
      else if (typeof index === 'string') {
        $.each(slides, function(i, $slide) {
          if ($slide.attr('id') === index) {
            ndx = i;
            return false;
          }
        });
      };
      
      /* Out of bounds, id doesn't exist, illegal input, eject */
      if (typeof ndx === 'undefined') return;
      
      $d.trigger(e, [current, ndx]);
      if (e.isDefaultPrevented()) {
        /* Trigger the event again and undo the damage done by extensions. */
        $d.trigger(events.change, [ndx, current]);
      }
      else {
        current = ndx;
        updateStates();
      }
    },
    
    /*
    jQuery.deck('next')
    
    Moves to the next slide. If the last slide is already active, the call
    is ignored.
    */
    next: function() {
      methods.go(current+1);
    },
    
    /*
    jQuery.deck('prev')
    
    Moves to the previous slide. If the first slide is already active, the
    call is ignored.
    */
    prev: function() {
      methods.go(current-1);
    },
    
    /*
    jQuery.deck('getSlide', index)
    
    index: integer, optional
    
    Returns a jQuery object containing the slide at index. If index is not
    specified, the current slide is returned.
    */
    getSlide: function(index) {
      var i = typeof index !== 'undefined' ? index : current;
      if (typeof i != 'number' || i < 0 || i >= slides.length) return null;
      return slides[i];
    },
    
    /*
    jQuery.deck('getSlides')
    
    Returns all slides as an array of jQuery objects.
    */
    getSlides: function() {
      return slides;
    },
    
    /*
    jQuery.deck('getContainer')
    
    Returns a jQuery object containing the deck container as defined by the
    container option.
    */
    getContainer: function() {
      return $container;
    },
    
    /*
    jQuery.deck('getOptions')
    
    Returns the options object for the deck, including any overrides that
    were defined at initialization.
    */
    getOptions: function() {
      return options;
    },
    
    /*
    jQuery.deck('extend', name, method)
    
    name: string
    method: function
    
    Adds method to the deck namespace with the key of name. This doesn’t
    give access to any private member data — public methods must still be
    used within method — but lets extension authors piggyback on the deck
    namespace rather than pollute jQuery.
    
    $.deck('extend', 'alert', function(msg) {
       alert(msg);
    });

    // Alerts 'boom'
    $.deck('alert', 'boom');
    */
    extend: function(name, method) {
      methods[name] = method;
    }
  };
  
  /* jQuery extension */
  $[deck] = function(method, arg) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    }
    else {
      return methods.init(method, arg);
    }
  };
  
  /*
  The default settings object for a deck. All deck extensions should extend
  this object to add defaults for any of their options.
  
  options.classes.after
    This class is added to all slides that appear after the 'next' slide.
  
  options.classes.before
    This class is added to all slides that appear before the 'previous'
    slide.
    
  options.classes.childCurrent
    This class is added to all elements in the DOM tree between the
    'current' slide and the deck container. For standard slides, this is
    mostly seen and used for nested slides.
    
  options.classes.current
    This class is added to the current slide.
    
  options.classes.loading
    This class is applied to the deck container during loading phases and is
    primarily used as a way to short circuit transitions between states
    where such transitions are distracting or unwanted.  For example, this
    class is applied during deck initialization and then removed to prevent
    all the slides from appearing stacked and transitioning into place
    on load.
    
  options.classes.next
    This class is added to the slide immediately following the 'current'
    slide.
    
  options.classes.onPrefix
    This prefix, concatenated with the current slide index, is added to the
    deck container as you change slides.
    
  options.classes.previous
    This class is added to the slide immediately preceding the 'current'
    slide.
    
  options.selectors.container
    Elements matched by this CSS selector will be considered the deck
    container. The deck container is used to scope certain states of the
    deck, as with the onPrefix option, or with extensions such as deck.goto
    and deck.menu.
    
  options.keys.next
    The numeric keycode used to go to the next slide.
    
  options.keys.previous
    The numeric keycode used to go to the previous slide.
    
  options.touch.swipeTolerance
    The number of pixels the users finger must travel to produce a swipe
    gesture.
  */
  $[deck].defaults = {
    classes: {
      after: 'deck-after',
      before: 'deck-before',
      childCurrent: 'deck-child-current',
      current: 'deck-current',
      loading: 'deck-loading',
      next: 'deck-next',
      onPrefix: 'on-slide-',
      previous: 'deck-previous'
    },
    
    selectors: {
      container: '.deck-container'
    },
    
    keys: {
      // enter, space, page down, right arrow, down arrow,
      next: [13, 32, 34, 39, 40],
      // backspace, page up, left arrow, up arrow
      previous: [8, 33, 37, 38]
    },
    
    touch: {
      swipeTolerance: 60
    }
  };
  
  $d.ready(function() {
    $('html').addClass('ready');
  });
  
  /*
  FF + Transforms + Flash video don't get along...
  Firefox will reload and start playing certain videos after a
  transform.  Blanking the src when a previously shown slide goes out
  of view prevents this.
  */
  $d.bind('deck.change', function(e, from, to) {
    var oldFrames = $[deck]('getSlide', from).find('iframe'),
    newFrames = $[deck]('getSlide', to).find('iframe');
    
    oldFrames.each(function() {
        var $this = $(this),
        curSrc = $this.attr('src');
            
            if(curSrc) {
              $this.data('deck-src', curSrc).attr('src', '');
            }
    });
    
    newFrames.each(function() {
      var $this = $(this),
      originalSrc = $this.data('deck-src');
      
      if (originalSrc) {
        $this.attr('src', originalSrc);
      }
    });
  });
})(jQuery, 'deck', document);
/*!
Deck JS - deck.hash
Copyright (c) 2011 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
https://github.com/imakewebthings/deck.js/blob/master/GPL-license.txt
*/

/*
This module adds deep linking to individual slides, enables internal links
to slides within decks, and updates the address bar with the hash as the user
moves through the deck. A permalink anchor is also updated. Standard themes
hide this link in browsers that support the History API, and show it for
those that do not. Slides that do not have an id are assigned one according to
the hashPrefix option. In addition to the on-slide container state class
kept by core, this module adds an on-slide state class that uses the id of each
slide.
*/

(function ($, deck, window, undefined) {
	var $d = $(document),
	$window = $(window),
	
	/* Collection of internal fragment links in the deck */
	$internals,
	
	/*
	Internal only function.  Given a string, extracts the id from the hash,
	matches it to the appropriate slide, and navigates there.
	*/
	goByHash = function(str) {
		var id = str.substr(str.indexOf("#") + 1),
		slides = $[deck]('getSlides');
		
		$.each(slides, function(i, $el) {
			if ($el.attr('id') === id) {
				$[deck]('go', i);
				return false;
			}
		});
		
		// If we don't set these to 0 the container scrolls due to hashchange
		$[deck]('getContainer').scrollLeft(0).scrollTop(0);
	};
	
	/*
	Extends defaults/options.
	
	options.selectors.hashLink
		The element matching this selector has its href attribute updated to
		the hash of the current slide as the user navigates through the deck.
		
	options.hashPrefix
		Every slide that does not have an id is assigned one at initialization.
		Assigned ids take the form of hashPrefix + slideIndex, e.g., slide-0,
		slide-12, etc.

	options.preventFragmentScroll
		When deep linking to a hash of a nested slide, this scrolls the deck
		container to the top, undoing the natural browser behavior of scrolling
		to the document fragment on load.
	*/
	$.extend(true, $[deck].defaults, {
		selectors: {
			hashLink: '.deck-permalink'
		},
		
		hashPrefix: 'slide-',
		preventFragmentScroll: true
	});
	
	
	$d.bind('deck.init', function() {
	   var opts = $[deck]('getOptions');
		$internals = $(),
		slides = $[deck]('getSlides');
		
		$.each(slides, function(i, $el) {
			var hash;
			
			/* Hand out ids to the unfortunate slides born without them */
			if (!$el.attr('id') || $el.data('deckAssignedId') === $el.attr('id')) {
				$el.attr('id', opts.hashPrefix + i);
				$el.data('deckAssignedId', opts.hashPrefix + i);
			}
			
			hash ='#' + $el.attr('id');
			
			/* Deep link to slides on init */
			if (hash === window.location.hash) {
				$[deck]('go', i);
			}
			
			/* Add internal links to this slide */
			$internals = $internals.add('a[href="' + hash + '"]');
		});
		
		if (!Modernizr.hashchange) {
			/* Set up internal links using click for the poor browsers
			without a hashchange event. */
			$internals.unbind('click.deckhash').bind('click.deckhash', function(e) {
				goByHash($(this).attr('href'));
			});
		}
		
		/* Set up first id container state class */
		if (slides.length) {
			$[deck]('getContainer').addClass(opts.classes.onPrefix + $[deck]('getSlide').attr('id'));
		};
	})
	/* Update permalink, address bar, and state class on a slide change */
	.bind('deck.change', function(e, from, to) {
		var hash = '#' + $[deck]('getSlide', to).attr('id'),
		hashPath = window.location.href.replace(/#.*/, '') + hash,
		opts = $[deck]('getOptions'),
		osp = opts.classes.onPrefix,
		$c = $[deck]('getContainer');
		
		$c.removeClass(osp + $[deck]('getSlide', from).attr('id'));
		$c.addClass(osp + $[deck]('getSlide', to).attr('id'));
		
		$(opts.selectors.hashLink).attr('href', hashPath);
		if (Modernizr.history) {
			window.history.replaceState({}, "", hashPath);
		}
	});
	
	/* Deals with internal links in modern browsers */
	$window.bind('hashchange.deckhash', function(e) {
		if (e.originalEvent && e.originalEvent.newURL) {
			goByHash(e.originalEvent.newURL);
		}
		else {
			goByHash(window.location.hash);
		}
	})
	/* Prevent scrolling on deep links */
	.bind('load', function() {
		if ($[deck]('getOptions').preventFragmentScroll) {
			$[deck]('getContainer').scrollLeft(0).scrollTop(0);
		}
	});
})(jQuery, 'deck', this);
/*!
Deck JS - deck.navigation
Copyright (c) 2011 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
https://github.com/imakewebthings/deck.js/blob/master/GPL-license.txt
*/

/*
This module adds clickable previous and next links to the deck.
*/

(function($, deck, undefined) {
	var $d = $(document),
	
	/* Updates link hrefs, and disabled states if last/first slide */
	updateButtons = function(e, from, to) {
		var opts = $[deck]('getOptions'),
		last = $[deck]('getSlides').length - 1,
		prevSlide = $[deck]('getSlide', to - 1),
		nextSlide = $[deck]('getSlide', to + 1),
		hrefBase = window.location.href.replace(/#.*/, ''),
		prevId = prevSlide ? prevSlide.attr('id') : undefined,
		nextId = nextSlide ? nextSlide.attr('id') : undefined;
		
		$(opts.selectors.previousLink)
			.toggleClass(opts.classes.navDisabled, !to)
			.attr('href', hrefBase + '#' + (prevId ? prevId : ''));
		$(opts.selectors.nextLink)
			.toggleClass(opts.classes.navDisabled, to === last)
			.attr('href', hrefBase + '#' + (nextId ? nextId : ''));
	};
	
	/*
	Extends defaults/options.
	
	options.classes.navDisabled
		This class is added to a navigation link when that action is disabled.
		It is added to the previous link when on the first slide, and to the
		next link when on the last slide.
		
	options.selectors.nextLink
		The elements that match this selector will move the deck to the next
		slide when clicked.
		
	options.selectors.previousLink
		The elements that match this selector will move to deck to the previous
		slide when clicked.
	*/
	$.extend(true, $[deck].defaults, {
		classes: {
			navDisabled: 'deck-nav-disabled'
		},
		
		selectors: {
			nextLink: '.deck-next-link',
			previousLink: '.deck-prev-link'
		}
	});

	$d.bind('deck.init', function() {
		var opts = $[deck]('getOptions'),
		slides = $[deck]('getSlides'),
		$current = $[deck]('getSlide'),
		ndx;
		
		// Setup prev/next link events
		$(opts.selectors.previousLink)
		.unbind('click.decknavigation')
		.bind('click.decknavigation', function(e) {
			$[deck]('prev');
			e.preventDefault();
		});
		
		$(opts.selectors.nextLink)
		.unbind('click.decknavigation')
		.bind('click.decknavigation', function(e) {
			$[deck]('next');
			e.preventDefault();
		});
		
		// Find where we started in the deck and set initial states
		$.each(slides, function(i, $slide) {
			if ($slide === $current) {
				ndx = i;
				return false;
			}
		});
		updateButtons(null, ndx, ndx);
	})
	.bind('deck.change', updateButtons);
})(jQuery, 'deck');

/*!
Deck JS - deck.status
Copyright (c) 2011 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
https://github.com/imakewebthings/deck.js/blob/master/GPL-license.txt
*/

/*
This module adds a (current)/(total) style status indicator to the deck.
*/

(function($, deck, undefined) {
	var $d = $(document),
	
	updateCurrent = function(e, from, to) {
		var opts = $[deck]('getOptions');
		
		$(opts.selectors.statusCurrent).text(opts.countNested ?
			to + 1 :
			$[deck]('getSlide', to).data('rootSlide')
		);
	};
	
	/*
	Extends defaults/options.
	
	options.selectors.statusCurrent
		The element matching this selector displays the current slide number.
		
	options.selectors.statusTotal
		The element matching this selector displays the total number of slides.
		
	options.countNested
		If false, only top level slides will be counted in the current and
		total numbers.
	*/
	$.extend(true, $[deck].defaults, {
		selectors: {
			statusCurrent: '.deck-status-current',
			statusTotal: '.deck-status-total'
		},
		
		countNested: true
	});
	
	$d.bind('deck.init', function() {
		var opts = $[deck]('getOptions'),
		slides = $[deck]('getSlides'),
		$current = $[deck]('getSlide'),
		ndx;
		
		// Set total slides once
		if (opts.countNested) {
			$(opts.selectors.statusTotal).text(slides.length);
		}
		else {
			/* Determine root slides by checking each slide's ancestor tree for
			any of the slide classes. */
			var rootIndex = 1,
			slideTest = $.map([
				opts.classes.before,
				opts.classes.previous,
				opts.classes.current,
				opts.classes.next,
				opts.classes.after
			], function(el, i) {
				return '.' + el;
			}).join(', ');
			
			/* Store the 'real' root slide number for use during slide changes. */
			$.each(slides, function(i, $el) {
				var $parentSlides = $el.parentsUntil(opts.selectors.container, slideTest);

				$el.data('rootSlide', $parentSlides.length ?
					$parentSlides.last().data('rootSlide') :
					rootIndex++
				);
			});
			
			$(opts.selectors.statusTotal).text(rootIndex - 1);
		}
		
		// Find where we started in the deck and set initial state
		$.each(slides, function(i, $el) {
			if ($el === $current) {
				ndx = i;
				return false;
			}
		});
		updateCurrent(null, ndx, ndx);
	})
	/* Update current slide number with each change event */
	.bind('deck.change', updateCurrent);
})(jQuery, 'deck');

// XRegExp 1.5.1
// (c) 2007-2012 Steven Levithan
// MIT License
// <http://xregexp.com>
// Provides an augmented, extensible, cross-browser implementation of regular expressions,
// including support for additional syntax, flags, and methods

var XRegExp;

if (XRegExp) {
    // Avoid running twice, since that would break references to native globals
    throw Error("can't load XRegExp twice in the same frame");
}

// Run within an anonymous function to protect variables and avoid new globals
(function (undefined) {

    //---------------------------------
    //  Constructor
    //---------------------------------

    // Accepts a pattern and flags; returns a new, extended `RegExp` object. Differs from a native
    // regular expression in that additional syntax and flags are supported and cross-browser
    // syntax inconsistencies are ameliorated. `XRegExp(/regex/)` clones an existing regex and
    // converts to type XRegExp
    XRegExp = function (pattern, flags) {
        var output = [],
            currScope = XRegExp.OUTSIDE_CLASS,
            pos = 0,
            context, tokenResult, match, chr, regex;

        if (XRegExp.isRegExp(pattern)) {
            if (flags !== undefined)
                throw TypeError("can't supply flags when constructing one RegExp from another");
            return clone(pattern);
        }
        // Tokens become part of the regex construction process, so protect against infinite
        // recursion when an XRegExp is constructed within a token handler or trigger
        if (isInsideConstructor)
            throw Error("can't call the XRegExp constructor within token definition functions");

        flags = flags || "";
        context = { // `this` object for custom tokens
            hasNamedCapture: false,
            captureNames: [],
            hasFlag: function (flag) {return flags.indexOf(flag) > -1;},
            setFlag: function (flag) {flags += flag;}
        };

        while (pos < pattern.length) {
            // Check for custom tokens at the current position
            tokenResult = runTokens(pattern, pos, currScope, context);

            if (tokenResult) {
                output.push(tokenResult.output);
                pos += (tokenResult.match[0].length || 1);
            } else {
                // Check for native multicharacter metasequences (excluding character classes) at
                // the current position
                if (match = nativ.exec.call(nativeTokens[currScope], pattern.slice(pos))) {
                    output.push(match[0]);
                    pos += match[0].length;
                } else {
                    chr = pattern.charAt(pos);
                    if (chr === "[")
                        currScope = XRegExp.INSIDE_CLASS;
                    else if (chr === "]")
                        currScope = XRegExp.OUTSIDE_CLASS;
                    // Advance position one character
                    output.push(chr);
                    pos++;
                }
            }
        }

        regex = RegExp(output.join(""), nativ.replace.call(flags, flagClip, ""));
        regex._xregexp = {
            source: pattern,
            captureNames: context.hasNamedCapture ? context.captureNames : null
        };
        return regex;
    };


    //---------------------------------
    //  Public properties
    //---------------------------------

    XRegExp.version = "1.5.1";

    // Token scope bitflags
    XRegExp.INSIDE_CLASS = 1;
    XRegExp.OUTSIDE_CLASS = 2;


    //---------------------------------
    //  Private variables
    //---------------------------------

    var replacementToken = /\$(?:(\d\d?|[$&`'])|{([$\w]+)})/g,
        flagClip = /[^gimy]+|([\s\S])(?=[\s\S]*\1)/g, // Nonnative and duplicate flags
        quantifier = /^(?:[?*+]|{\d+(?:,\d*)?})\??/,
        isInsideConstructor = false,
        tokens = [],
        // Copy native globals for reference ("native" is an ES3 reserved keyword)
        nativ = {
            exec: RegExp.prototype.exec,
            test: RegExp.prototype.test,
            match: String.prototype.match,
            replace: String.prototype.replace,
            split: String.prototype.split
        },
        compliantExecNpcg = nativ.exec.call(/()??/, "")[1] === undefined, // check `exec` handling of nonparticipating capturing groups
        compliantLastIndexIncrement = function () {
            var x = /^/g;
            nativ.test.call(x, "");
            return !x.lastIndex;
        }(),
        hasNativeY = RegExp.prototype.sticky !== undefined,
        nativeTokens = {};

    // `nativeTokens` match native multicharacter metasequences only (including deprecated octals,
    // excluding character classes)
    nativeTokens[XRegExp.INSIDE_CLASS] = /^(?:\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S]))/;
    nativeTokens[XRegExp.OUTSIDE_CLASS] = /^(?:\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S])|\(\?[:=!]|[?*+]\?|{\d+(?:,\d*)?}\??)/;


    //---------------------------------
    //  Public methods
    //---------------------------------

    // Lets you extend or change XRegExp syntax and create custom flags. This is used internally by
    // the XRegExp library and can be used to create XRegExp plugins. This function is intended for
    // users with advanced knowledge of JavaScript's regular expression syntax and behavior. It can
    // be disabled by `XRegExp.freezeTokens`
    XRegExp.addToken = function (regex, handler, scope, trigger) {
        tokens.push({
            pattern: clone(regex, "g" + (hasNativeY ? "y" : "")),
            handler: handler,
            scope: scope || XRegExp.OUTSIDE_CLASS,
            trigger: trigger || null
        });
    };

    // Accepts a pattern and flags; returns an extended `RegExp` object. If the pattern and flag
    // combination has previously been cached, the cached copy is returned; otherwise the newly
    // created regex is cached
    XRegExp.cache = function (pattern, flags) {
        var key = pattern + "/" + (flags || "");
        return XRegExp.cache[key] || (XRegExp.cache[key] = XRegExp(pattern, flags));
    };

    // Accepts a `RegExp` instance; returns a copy with the `/g` flag set. The copy has a fresh
    // `lastIndex` (set to zero). If you want to copy a regex without forcing the `global`
    // property, use `XRegExp(regex)`. Do not use `RegExp(regex)` because it will not preserve
    // special properties required for named capture
    XRegExp.copyAsGlobal = function (regex) {
        return clone(regex, "g");
    };

    // Accepts a string; returns the string with regex metacharacters escaped. The returned string
    // can safely be used at any point within a regex to match the provided literal string. Escaped
    // characters are [ ] { } ( ) * + ? - . , \ ^ $ | # and whitespace
    XRegExp.escape = function (str) {
        return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    };

    // Accepts a string to search, regex to search with, position to start the search within the
    // string (default: 0), and an optional Boolean indicating whether matches must start at-or-
    // after the position or at the specified position only. This function ignores the `lastIndex`
    // of the provided regex in its own handling, but updates the property for compatibility
    XRegExp.execAt = function (str, regex, pos, anchored) {
        var r2 = clone(regex, "g" + ((anchored && hasNativeY) ? "y" : "")),
            match;
        r2.lastIndex = pos = pos || 0;
        match = r2.exec(str); // Run the altered `exec` (required for `lastIndex` fix, etc.)
        if (anchored && match && match.index !== pos)
            match = null;
        if (regex.global)
            regex.lastIndex = match ? r2.lastIndex : 0;
        return match;
    };

    // Breaks the unrestorable link to XRegExp's private list of tokens, thereby preventing
    // syntax and flag changes. Should be run after XRegExp and any plugins are loaded
    XRegExp.freezeTokens = function () {
        XRegExp.addToken = function () {
            throw Error("can't run addToken after freezeTokens");
        };
    };

    // Accepts any value; returns a Boolean indicating whether the argument is a `RegExp` object.
    // Note that this is also `true` for regex literals and regexes created by the `XRegExp`
    // constructor. This works correctly for variables created in another frame, when `instanceof`
    // and `constructor` checks would fail to work as intended
    XRegExp.isRegExp = function (o) {
        return Object.prototype.toString.call(o) === "[object RegExp]";
    };

    // Executes `callback` once per match within `str`. Provides a simpler and cleaner way to
    // iterate over regex matches compared to the traditional approaches of subverting
    // `String.prototype.replace` or repeatedly calling `exec` within a `while` loop
    XRegExp.iterate = function (str, regex, callback, context) {
        var r2 = clone(regex, "g"),
            i = -1, match;
        while (match = r2.exec(str)) { // Run the altered `exec` (required for `lastIndex` fix, etc.)
            if (regex.global)
                regex.lastIndex = r2.lastIndex; // Doing this to follow expectations if `lastIndex` is checked within `callback`
            callback.call(context, match, ++i, str, regex);
            if (r2.lastIndex === match.index)
                r2.lastIndex++;
        }
        if (regex.global)
            regex.lastIndex = 0;
    };

    // Accepts a string and an array of regexes; returns the result of using each successive regex
    // to search within the matches of the previous regex. The array of regexes can also contain
    // objects with `regex` and `backref` properties, in which case the named or numbered back-
    // references specified are passed forward to the next regex or returned. E.g.:
    // var xregexpImgFileNames = XRegExp.matchChain(html, [
    //     {regex: /<img\b([^>]+)>/i, backref: 1}, // <img> tag attributes
    //     {regex: XRegExp('(?ix) \\s src=" (?<src> [^"]+ )'), backref: "src"}, // src attribute values
    //     {regex: XRegExp("^http://xregexp\\.com(/[^#?]+)", "i"), backref: 1}, // xregexp.com paths
    //     /[^\/]+$/ // filenames (strip directory paths)
    // ]);
    XRegExp.matchChain = function (str, chain) {
        return function recurseChain (values, level) {
            var item = chain[level].regex ? chain[level] : {regex: chain[level]},
                regex = clone(item.regex, "g"),
                matches = [], i;
            for (i = 0; i < values.length; i++) {
                XRegExp.iterate(values[i], regex, function (match) {
                    matches.push(item.backref ? (match[item.backref] || "") : match[0]);
                });
            }
            return ((level === chain.length - 1) || !matches.length) ?
                matches : recurseChain(matches, level + 1);
        }([str], 0);
    };


    //---------------------------------
    //  New RegExp prototype methods
    //---------------------------------

    // Accepts a context object and arguments array; returns the result of calling `exec` with the
    // first value in the arguments array. the context is ignored but is accepted for congruity
    // with `Function.prototype.apply`
    RegExp.prototype.apply = function (context, args) {
        return this.exec(args[0]);
    };

    // Accepts a context object and string; returns the result of calling `exec` with the provided
    // string. the context is ignored but is accepted for congruity with `Function.prototype.call`
    RegExp.prototype.call = function (context, str) {
        return this.exec(str);
    };


    //---------------------------------
    //  Overriden native methods
    //---------------------------------

    // Adds named capture support (with backreferences returned as `result.name`), and fixes two
    // cross-browser issues per ES3:
    // - Captured values for nonparticipating capturing groups should be returned as `undefined`,
    //   rather than the empty string.
    // - `lastIndex` should not be incremented after zero-length matches.
    RegExp.prototype.exec = function (str) {
        var match, name, r2, origLastIndex;
        if (!this.global)
            origLastIndex = this.lastIndex;
        match = nativ.exec.apply(this, arguments);
        if (match) {
            // Fix browsers whose `exec` methods don't consistently return `undefined` for
            // nonparticipating capturing groups
            if (!compliantExecNpcg && match.length > 1 && indexOf(match, "") > -1) {
                r2 = RegExp(this.source, nativ.replace.call(getNativeFlags(this), "g", ""));
                // Using `str.slice(match.index)` rather than `match[0]` in case lookahead allowed
                // matching due to characters outside the match
                nativ.replace.call((str + "").slice(match.index), r2, function () {
                    for (var i = 1; i < arguments.length - 2; i++) {
                        if (arguments[i] === undefined)
                            match[i] = undefined;
                    }
                });
            }
            // Attach named capture properties
            if (this._xregexp && this._xregexp.captureNames) {
                for (var i = 1; i < match.length; i++) {
                    name = this._xregexp.captureNames[i - 1];
                    if (name)
                       match[name] = match[i];
                }
            }
            // Fix browsers that increment `lastIndex` after zero-length matches
            if (!compliantLastIndexIncrement && this.global && !match[0].length && (this.lastIndex > match.index))
                this.lastIndex--;
        }
        if (!this.global)
            this.lastIndex = origLastIndex; // Fix IE, Opera bug (last tested IE 9.0.5, Opera 11.61 on Windows)
        return match;
    };

    // Fix browser bugs in native method
    RegExp.prototype.test = function (str) {
        // Use the native `exec` to skip some processing overhead, even though the altered
        // `exec` would take care of the `lastIndex` fixes
        var match, origLastIndex;
        if (!this.global)
            origLastIndex = this.lastIndex;
        match = nativ.exec.call(this, str);
        // Fix browsers that increment `lastIndex` after zero-length matches
        if (match && !compliantLastIndexIncrement && this.global && !match[0].length && (this.lastIndex > match.index))
            this.lastIndex--;
        if (!this.global)
            this.lastIndex = origLastIndex; // Fix IE, Opera bug (last tested IE 9.0.5, Opera 11.61 on Windows)
        return !!match;
    };

    // Adds named capture support and fixes browser bugs in native method
    String.prototype.match = function (regex) {
        if (!XRegExp.isRegExp(regex))
            regex = RegExp(regex); // Native `RegExp`
        if (regex.global) {
            var result = nativ.match.apply(this, arguments);
            regex.lastIndex = 0; // Fix IE bug
            return result;
        }
        return regex.exec(this); // Run the altered `exec`
    };

    // Adds support for `${n}` tokens for named and numbered backreferences in replacement text,
    // and provides named backreferences to replacement functions as `arguments[0].name`. Also
    // fixes cross-browser differences in replacement text syntax when performing a replacement
    // using a nonregex search value, and the value of replacement regexes' `lastIndex` property
    // during replacement iterations. Note that this doesn't support SpiderMonkey's proprietary
    // third (`flags`) parameter
    String.prototype.replace = function (search, replacement) {
        var isRegex = XRegExp.isRegExp(search),
            captureNames, result, str, origLastIndex;

        // There are too many combinations of search/replacement types/values and browser bugs that
        // preclude passing to native `replace`, so don't try
        //if (...)
        //    return nativ.replace.apply(this, arguments);

        if (isRegex) {
            if (search._xregexp)
                captureNames = search._xregexp.captureNames; // Array or `null`
            if (!search.global)
                origLastIndex = search.lastIndex;
        } else {
            search = search + ""; // Type conversion
        }

        if (Object.prototype.toString.call(replacement) === "[object Function]") {
            result = nativ.replace.call(this + "", search, function () {
                if (captureNames) {
                    // Change the `arguments[0]` string primitive to a String object which can store properties
                    arguments[0] = new String(arguments[0]);
                    // Store named backreferences on `arguments[0]`
                    for (var i = 0; i < captureNames.length; i++) {
                        if (captureNames[i])
                            arguments[0][captureNames[i]] = arguments[i + 1];
                    }
                }
                // Update `lastIndex` before calling `replacement` (fix browsers)
                if (isRegex && search.global)
                    search.lastIndex = arguments[arguments.length - 2] + arguments[0].length;
                return replacement.apply(null, arguments);
            });
        } else {
            str = this + ""; // Type conversion, so `args[args.length - 1]` will be a string (given nonstring `this`)
            result = nativ.replace.call(str, search, function () {
                var args = arguments; // Keep this function's `arguments` available through closure
                return nativ.replace.call(replacement + "", replacementToken, function ($0, $1, $2) {
                    // Numbered backreference (without delimiters) or special variable
                    if ($1) {
                        switch ($1) {
                            case "$": return "$";
                            case "&": return args[0];
                            case "`": return args[args.length - 1].slice(0, args[args.length - 2]);
                            case "'": return args[args.length - 1].slice(args[args.length - 2] + args[0].length);
                            // Numbered backreference
                            default:
                                // What does "$10" mean?
                                // - Backreference 10, if 10 or more capturing groups exist
                                // - Backreference 1 followed by "0", if 1-9 capturing groups exist
                                // - Otherwise, it's the string "$10"
                                // Also note:
                                // - Backreferences cannot be more than two digits (enforced by `replacementToken`)
                                // - "$01" is equivalent to "$1" if a capturing group exists, otherwise it's the string "$01"
                                // - There is no "$0" token ("$&" is the entire match)
                                var literalNumbers = "";
                                $1 = +$1; // Type conversion; drop leading zero
                                if (!$1) // `$1` was "0" or "00"
                                    return $0;
                                while ($1 > args.length - 3) {
                                    literalNumbers = String.prototype.slice.call($1, -1) + literalNumbers;
                                    $1 = Math.floor($1 / 10); // Drop the last digit
                                }
                                return ($1 ? args[$1] || "" : "$") + literalNumbers;
                        }
                    // Named backreference or delimited numbered backreference
                    } else {
                        // What does "${n}" mean?
                        // - Backreference to numbered capture n. Two differences from "$n":
                        //   - n can be more than two digits
                        //   - Backreference 0 is allowed, and is the entire match
                        // - Backreference to named capture n, if it exists and is not a number overridden by numbered capture
                        // - Otherwise, it's the string "${n}"
                        var n = +$2; // Type conversion; drop leading zeros
                        if (n <= args.length - 3)
                            return args[n];
                        n = captureNames ? indexOf(captureNames, $2) : -1;
                        return n > -1 ? args[n + 1] : $0;
                    }
                });
            });
        }

        if (isRegex) {
            if (search.global)
                search.lastIndex = 0; // Fix IE, Safari bug (last tested IE 9.0.5, Safari 5.1.2 on Windows)
            else
                search.lastIndex = origLastIndex; // Fix IE, Opera bug (last tested IE 9.0.5, Opera 11.61 on Windows)
        }

        return result;
    };

    // A consistent cross-browser, ES3 compliant `split`
    String.prototype.split = function (s /* separator */, limit) {
        // If separator `s` is not a regex, use the native `split`
        if (!XRegExp.isRegExp(s))
            return nativ.split.apply(this, arguments);

        var str = this + "", // Type conversion
            output = [],
            lastLastIndex = 0,
            match, lastLength;

        // Behavior for `limit`: if it's...
        // - `undefined`: No limit
        // - `NaN` or zero: Return an empty array
        // - A positive number: Use `Math.floor(limit)`
        // - A negative number: No limit
        // - Other: Type-convert, then use the above rules
        if (limit === undefined || +limit < 0) {
            limit = Infinity;
        } else {
            limit = Math.floor(+limit);
            if (!limit)
                return [];
        }

        // This is required if not `s.global`, and it avoids needing to set `s.lastIndex` to zero
        // and restore it to its original value when we're done using the regex
        s = XRegExp.copyAsGlobal(s);

        while (match = s.exec(str)) { // Run the altered `exec` (required for `lastIndex` fix, etc.)
            if (s.lastIndex > lastLastIndex) {
                output.push(str.slice(lastLastIndex, match.index));

                if (match.length > 1 && match.index < str.length)
                    Array.prototype.push.apply(output, match.slice(1));

                lastLength = match[0].length;
                lastLastIndex = s.lastIndex;

                if (output.length >= limit)
                    break;
            }

            if (s.lastIndex === match.index)
                s.lastIndex++;
        }

        if (lastLastIndex === str.length) {
            if (!nativ.test.call(s, "") || lastLength)
                output.push("");
        } else {
            output.push(str.slice(lastLastIndex));
        }

        return output.length > limit ? output.slice(0, limit) : output;
    };


    //---------------------------------
    //  Private helper functions
    //---------------------------------

    // Supporting function for `XRegExp`, `XRegExp.copyAsGlobal`, etc. Returns a copy of a `RegExp`
    // instance with a fresh `lastIndex` (set to zero), preserving properties required for named
    // capture. Also allows adding new flags in the process of copying the regex
    function clone (regex, additionalFlags) {
        if (!XRegExp.isRegExp(regex))
            throw TypeError("type RegExp expected");
        var x = regex._xregexp;
        regex = XRegExp(regex.source, getNativeFlags(regex) + (additionalFlags || ""));
        if (x) {
            regex._xregexp = {
                source: x.source,
                captureNames: x.captureNames ? x.captureNames.slice(0) : null
            };
        }
        return regex;
    }

    function getNativeFlags (regex) {
        return (regex.global     ? "g" : "") +
               (regex.ignoreCase ? "i" : "") +
               (regex.multiline  ? "m" : "") +
               (regex.extended   ? "x" : "") + // Proposed for ES4; included in AS3
               (regex.sticky     ? "y" : "");
    }

    function runTokens (pattern, index, scope, context) {
        var i = tokens.length,
            result, match, t;
        // Protect against constructing XRegExps within token handler and trigger functions
        isInsideConstructor = true;
        // Must reset `isInsideConstructor`, even if a `trigger` or `handler` throws
        try {
            while (i--) { // Run in reverse order
                t = tokens[i];
                if ((scope & t.scope) && (!t.trigger || t.trigger.call(context))) {
                    t.pattern.lastIndex = index;
                    match = t.pattern.exec(pattern); // Running the altered `exec` here allows use of named backreferences, etc.
                    if (match && match.index === index) {
                        result = {
                            output: t.handler.call(context, match, scope),
                            match: match
                        };
                        break;
                    }
                }
            }
        } catch (err) {
            throw err;
        } finally {
            isInsideConstructor = false;
        }
        return result;
    }

    function indexOf (array, item, from) {
        if (Array.prototype.indexOf) // Use the native array method if available
            return array.indexOf(item, from);
        for (var i = from || 0; i < array.length; i++) {
            if (array[i] === item)
                return i;
        }
        return -1;
    }


    //---------------------------------
    //  Built-in tokens
    //---------------------------------

    // Augment XRegExp's regular expression syntax and flags. Note that when adding tokens, the
    // third (`scope`) argument defaults to `XRegExp.OUTSIDE_CLASS`

    // Comment pattern: (?# )
    XRegExp.addToken(
        /\(\?#[^)]*\)/,
        function (match) {
            // Keep tokens separated unless the following token is a quantifier
            return nativ.test.call(quantifier, match.input.slice(match.index + match[0].length)) ? "" : "(?:)";
        }
    );

    // Capturing group (match the opening parenthesis only).
    // Required for support of named capturing groups
    XRegExp.addToken(
        /\((?!\?)/,
        function () {
            this.captureNames.push(null);
            return "(";
        }
    );

    // Named capturing group (match the opening delimiter only): (?<name>
    XRegExp.addToken(
        /\(\?<([$\w]+)>/,
        function (match) {
            this.captureNames.push(match[1]);
            this.hasNamedCapture = true;
            return "(";
        }
    );

    // Named backreference: \k<name>
    XRegExp.addToken(
        /\\k<([\w$]+)>/,
        function (match) {
            var index = indexOf(this.captureNames, match[1]);
            // Keep backreferences separate from subsequent literal numbers. Preserve back-
            // references to named groups that are undefined at this point as literal strings
            return index > -1 ?
                "\\" + (index + 1) + (isNaN(match.input.charAt(match.index + match[0].length)) ? "" : "(?:)") :
                match[0];
        }
    );

    // Empty character class: [] or [^]
    XRegExp.addToken(
        /\[\^?]/,
        function (match) {
            // For cross-browser compatibility with ES3, convert [] to \b\B and [^] to [\s\S].
            // (?!) should work like \b\B, but is unreliable in Firefox
            return match[0] === "[]" ? "\\b\\B" : "[\\s\\S]";
        }
    );

    // Mode modifier at the start of the pattern only, with any combination of flags imsx: (?imsx)
    // Does not support x(?i), (?-i), (?i-m), (?i: ), (?i)(?m), etc.
    XRegExp.addToken(
        /^\(\?([imsx]+)\)/,
        function (match) {
            this.setFlag(match[1]);
            return "";
        }
    );

    // Whitespace and comments, in free-spacing (aka extended) mode only
    XRegExp.addToken(
        /(?:\s+|#.*)+/,
        function (match) {
            // Keep tokens separated unless the following token is a quantifier
            return nativ.test.call(quantifier, match.input.slice(match.index + match[0].length)) ? "" : "(?:)";
        },
        XRegExp.OUTSIDE_CLASS,
        function () {return this.hasFlag("x");}
    );

    // Dot, in dotall (aka singleline) mode only
    XRegExp.addToken(
        /\./,
        function () {return "[\\s\\S]";},
        XRegExp.OUTSIDE_CLASS,
        function () {return this.hasFlag("s");}
    );


    //---------------------------------
    //  Backward compatibility
    //---------------------------------

    // Uncomment the following block for compatibility with XRegExp 1.0-1.2:
    /*
    XRegExp.matchWithinChain = XRegExp.matchChain;
    RegExp.prototype.addFlags = function (s) {return clone(this, s);};
    RegExp.prototype.execAll = function (s) {var r = []; XRegExp.iterate(s, this, function (m) {r.push(m);}); return r;};
    RegExp.prototype.forEachExec = function (s, f, c) {return XRegExp.iterate(s, this, f, c);};
    RegExp.prototype.validate = function (s) {var r = RegExp("^(?:" + this.source + ")$(?!\\s)", getNativeFlags(this)); if (this.global) this.lastIndex = 0; return s.search(r) === 0;};
    */

})();

//
// Begin anonymous function. This is used to contain local scope variables without polutting global scope.
//
if (typeof(SyntaxHighlighter) == 'undefined') var SyntaxHighlighter = function() { 

// CommonJS
if (typeof(require) != 'undefined' && typeof(XRegExp) == 'undefined')
{
  XRegExp = require('XRegExp').XRegExp;
}

// Shortcut object which will be assigned to the SyntaxHighlighter variable.
// This is a shorthand for local reference in order to avoid long namespace 
// references to SyntaxHighlighter.whatever...
var sh = {
  defaults : {
    /** Additional CSS class names to be added to highlighter elements. */
    'class-name' : '',
    
    /** First line number. */
    'first-line' : 1,
    
    /**
     * Pads line numbers. Possible values are:
     *
     *   false - don't pad line numbers.
     *   true  - automaticaly pad numbers with minimum required number of leading zeroes.
     *   [int] - length up to which pad line numbers.
     */
    'pad-line-numbers' : false,
    
    /** Lines to highlight. */
    'highlight' : null,
    
    /** Title to be displayed above the code block. */
    'title' : null,
    
    /** Enables or disables smart tabs. */
    'smart-tabs' : true,
    
    /** Gets or sets tab size. */
    'tab-size' : 4,
    
    /** Enables or disables gutter. */
    'gutter' : true,
    
    /** Enables or disables toolbar. */
    'toolbar' : true,
    
    /** Enables quick code copy and paste from double click. */
    'quick-code' : true,
    
    /** Forces code view to be collapsed. */
    'collapse' : false,
    
    /** Enables or disables automatic links. */
    'auto-links' : true,
    
    /** Gets or sets light mode. Equavalent to turning off gutter and toolbar. */
    'light' : false,

    'unindent' : true,
    
    'html-script' : false
  },
  
  config : {
    space : '&nbsp;',
    
    /** Enables use of <SCRIPT type="syntaxhighlighter" /> tags. */
    useScriptTags : true,
    
    /** Blogger mode flag. */
    bloggerMode : false,
    
    stripBrs : false,
    
    /** Name of the tag that SyntaxHighlighter will automatically look for. */
    tagName : 'pre',
    
    strings : {
      expandSource : 'expand source',
      help : '?',
      alert: 'SyntaxHighlighter\n\n',
      noBrush : 'Can\'t find brush for: ',
      brushNotHtmlScript : 'Brush wasn\'t configured for html-script option: ',
      
      // this is populated by the build script
      aboutDialog : '@ABOUT@'
    }
  },
  
  /** Internal 'global' variables. */
  vars : {
    discoveredBrushes : null,
    highlighters : {}
  },
  
  /** This object is populated by user included external brush files. */
  brushes : {},

  /** Common regular expressions. */
  regexLib : {
    multiLineCComments      : /\/\*[\s\S]*?\*\//gm,
    singleLineCComments     : /\/\/.*$/gm,
    singleLinePerlComments    : /#.*$/gm,
    doubleQuotedString      : /"([^\\"\n]|\\.)*"/g,
    singleQuotedString      : /'([^\\'\n]|\\.)*'/g,
    multiLineDoubleQuotedString : new XRegExp('"([^\\\\"]|\\\\.)*"', 'gs'),
    multiLineSingleQuotedString : new XRegExp("'([^\\\\']|\\\\.)*'", 'gs'),
    xmlComments         : /(&lt;|<)!--[\s\S]*?--(&gt;|>)/gm,
    url             : /\w+:\/\/[\w-.\/?%&=:@;#]*/g,
    
    /** <?= ?> tags. */
    phpScriptTags         : { left: /(&lt;|<)\?(?:=|php)?/g, right: /\?(&gt;|>)/g, 'eof' : true },
    
    /** <%= %> tags. */
    aspScriptTags       : { left: /(&lt;|<)%=?/g, right: /%(&gt;|>)/g },
    
    /** <script> tags. */
    scriptScriptTags      : { left: /(&lt;|<)\s*script.*?(&gt;|>)/gi, right: /(&lt;|<)\/\s*script\s*(&gt;|>)/gi }
  },

  toolbar: {
    /**
     * Generates HTML markup for the toolbar.
     * @param {Highlighter} highlighter Highlighter instance.
     * @return {String} Returns HTML markup.
     */
    getHtml: function(highlighter)
    {
      var html = '<div class="toolbar">',
        items = sh.toolbar.items,
        list = items.list
        ;
      
      function defaultGetHtml(highlighter, name)
      {
        return sh.toolbar.getButtonHtml(highlighter, name, sh.config.strings[name]);
      };
      
      for (var i = 0; i < list.length; i++)
        html += (items[list[i]].getHtml || defaultGetHtml)(highlighter, list[i]);
      
      html += '</div>';
      
      return html;
    },
    
    /**
     * Generates HTML markup for a regular button in the toolbar.
     * @param {Highlighter} highlighter Highlighter instance.
     * @param {String} commandName    Command name that would be executed.
     * @param {String} label      Label text to display.
     * @return {String}         Returns HTML markup.
     */
    getButtonHtml: function(highlighter, commandName, label)
    {
      return '<span><a href="#" class="toolbar_item'
        + ' command_' + commandName
        + ' ' + commandName
        + '">' + label + '</a></span>'
        ;
    },
    
    /**
     * Event handler for a toolbar anchor.
     */
    handler: function(e)
    {
      var target = e.target,
        className = target.className || ''
        ;

      function getValue(name)
      {
        var r = new RegExp(name + '_(\\w+)'),
          match = r.exec(className)
          ;

        return match ? match[1] : null;
      };
      
      var highlighter = getHighlighterById(findParentElement(target, '.syntaxhighlighter').id),
        commandName = getValue('command')
        ;
      
      // execute the toolbar command
      if (highlighter && commandName)
        sh.toolbar.items[commandName].execute(highlighter);

      // disable default A click behaviour
      e.preventDefault();
    },
    
    /** Collection of toolbar items. */
    items : {
      // Ordered lis of items in the toolbar. Can't expect `for (var n in items)` to be consistent.
      list: ['expandSource', 'help'],

      expandSource: {
        getHtml: function(highlighter)
        {
          if (highlighter.getParam('collapse') != true)
            return '';
            
          var title = highlighter.getParam('title');
          return sh.toolbar.getButtonHtml(highlighter, 'expandSource', title ? title : sh.config.strings.expandSource);
        },
      
        execute: function(highlighter)
        {
          var div = getHighlighterDivById(highlighter.id);
          removeClass(div, 'collapsed');
        }
      },

      /** Command to display the about dialog window. */
      help: {
        execute: function(highlighter)
        { 
          var wnd = popup('', '_blank', 500, 250, 'scrollbars=0'),
            doc = wnd.document
            ;
          
          doc.write(sh.config.strings.aboutDialog);
          doc.close();
          wnd.focus();
        }
      }
    }
  },

  /**
   * Finds all elements on the page which should be processes by SyntaxHighlighter.
   *
   * @param {Object} globalParams   Optional parameters which override element's 
   *                  parameters. Only used if element is specified.
   * 
   * @param {Object} element  Optional element to highlight. If none is
   *              provided, all elements in the current document 
   *              are returned which qualify.
   *
   * @return {Array}  Returns list of <code>{ target: DOMElement, params: Object }</code> objects.
   */
  findElements: function(globalParams, element)
  {
    var elements = element ? [element] : toArray(document.getElementsByTagName(sh.config.tagName)), 
      conf = sh.config,
      result = []
      ;

    // support for <SCRIPT TYPE="syntaxhighlighter" /> feature
    if (conf.useScriptTags)
      elements = elements.concat(getSyntaxHighlighterScriptTags());

    if (elements.length === 0) 
      return result;
  
    for (var i = 0; i < elements.length; i++) 
    {
      var item = {
        target: elements[i], 
        // local params take precedence over globals
        params: merge(globalParams, parseParams(elements[i].className))
      };

      if (item.params['brush'] == null)
        continue;
        
      result.push(item);
    }
    
    return result;
  },

  /**
   * Shorthand to highlight all elements on the page that are marked as 
   * SyntaxHighlighter source code.
   * 
   * @param {Object} globalParams   Optional parameters which override element's 
   *                  parameters. Only used if element is specified.
   * 
   * @param {Object} element  Optional element to highlight. If none is
   *              provided, all elements in the current document 
   *              are highlighted.
   */ 
  highlight: function(globalParams, element)
  {
    var elements = this.findElements(globalParams, element),
      propertyName = 'innerHTML', 
      highlighter = null,
      conf = sh.config
      ;

    if (elements.length === 0) 
      return;
  
    for (var i = 0; i < elements.length; i++) 
    {
      var element = elements[i],
        target = element.target,
        params = element.params,
        brushName = params.brush,
        code
        ;

      if (brushName == null)
        continue;

      // Instantiate a brush
      if (params['html-script'] == 'true' || sh.defaults['html-script'] == true) 
      {
        highlighter = new sh.HtmlScript(brushName);
        brushName = 'htmlscript';
      }
      else
      {
        var brush = findBrush(brushName);
        
        if (brush)
          highlighter = new brush();
        else
          continue;
      }
      
      code = target[propertyName];
      
      // remove CDATA from <SCRIPT/> tags if it's present
      if (conf.useScriptTags)
        code = stripCData(code);
        
      // Inject title if the attribute is present
      if ((target.title || '') != '')
        params.title = target.title;
        
      params['brush'] = brushName;
      highlighter.init(params);
      element = highlighter.getDiv(code);
      
      // carry over ID
      if ((target.id || '') != '')
        element.id = target.id;
      
      target.parentNode.replaceChild(element, target);
    }
  },

  /**
   * Main entry point for the SyntaxHighlighter.
   * @param {Object} params Optional params to apply to all highlighted elements.
   */
  all: function(params)
  {
    attachEvent(
      window,
      'load',
      function() { sh.highlight(params); }
    );
  }
}; // end of sh

/**
 * Checks if target DOM elements has specified CSS class.
 * @param {DOMElement} target Target DOM element to check.
 * @param {String} className Name of the CSS class to check for.
 * @return {Boolean} Returns true if class name is present, false otherwise.
 */
function hasClass(target, className)
{
  return target.className.indexOf(className) != -1;
};

/**
 * Adds CSS class name to the target DOM element.
 * @param {DOMElement} target Target DOM element.
 * @param {String} className New CSS class to add.
 */
function addClass(target, className)
{
  if (!hasClass(target, className))
    target.className += ' ' + className;
};

/**
 * Removes CSS class name from the target DOM element.
 * @param {DOMElement} target Target DOM element.
 * @param {String} className CSS class to remove.
 */
function removeClass(target, className)
{
  target.className = target.className.replace(className, '');
};

/**
 * Converts the source to array object. Mostly used for function arguments and 
 * lists returned by getElementsByTagName() which aren't Array objects.
 * @param {List} source Source list.
 * @return {Array} Returns array.
 */
function toArray(source)
{
  var result = [];
  
  for (var i = 0; i < source.length; i++) 
    result.push(source[i]);
    
  return result;
};

/**
 * Splits block of text into lines.
 * @param {String} block Block of text.
 * @return {Array} Returns array of lines.
 */
function splitLines(block)
{
  return block.split(/\r?\n/);
}

/**
 * Generates HTML ID for the highlighter.
 * @param {String} highlighterId Highlighter ID.
 * @return {String} Returns HTML ID.
 */
function getHighlighterId(id)
{
  var prefix = 'highlighter_';
  return id.indexOf(prefix) == 0 ? id : prefix + id;
};

/**
 * Finds Highlighter instance by ID.
 * @param {String} highlighterId Highlighter ID.
 * @return {Highlighter} Returns instance of the highlighter.
 */
function getHighlighterById(id)
{
  return sh.vars.highlighters[getHighlighterId(id)];
};

/**
 * Finds highlighter's DIV container.
 * @param {String} highlighterId Highlighter ID.
 * @return {Element} Returns highlighter's DIV element.
 */
function getHighlighterDivById(id)
{
  return document.getElementById(getHighlighterId(id));
};

/**
 * Stores highlighter so that getHighlighterById() can do its thing. Each
 * highlighter must call this method to preserve itself.
 * @param {Highilghter} highlighter Highlighter instance.
 */
function storeHighlighter(highlighter)
{
  sh.vars.highlighters[getHighlighterId(highlighter.id)] = highlighter;
};

/**
 * Looks for a child or parent node which has specified classname.
 * Equivalent to jQuery's $(container).find(".className")
 * @param {Element} target Target element.
 * @param {String} search Class name or node name to look for.
 * @param {Boolean} reverse If set to true, will go up the node tree instead of down.
 * @return {Element} Returns found child or parent element on null.
 */
function findElement(target, search, reverse /* optional */)
{
  if (target == null)
    return null;
    
  var nodes     = reverse != true ? target.childNodes : [ target.parentNode ],
    propertyToFind  = { '#' : 'id', '.' : 'className' }[search.substr(0, 1)] || 'nodeName',
    expectedValue,
    found
    ;

  expectedValue = propertyToFind != 'nodeName'
    ? search.substr(1)
    : search.toUpperCase()
    ;
    
  // main return of the found node
  if ((target[propertyToFind] || '').indexOf(expectedValue) != -1)
    return target;
  
  for (var i = 0; nodes && i < nodes.length && found == null; i++)
    found = findElement(nodes[i], search, reverse);
  
  return found;
};

/**
 * Looks for a parent node which has specified classname.
 * This is an alias to <code>findElement(container, className, true)</code>.
 * @param {Element} target Target element.
 * @param {String} className Class name to look for.
 * @return {Element} Returns found parent element on null.
 */
function findParentElement(target, className)
{
  return findElement(target, className, true);
};

/**
 * Finds an index of element in the array.
 * @ignore
 * @param {Object} searchElement
 * @param {Number} fromIndex
 * @return {Number} Returns index of element if found; -1 otherwise.
 */
function indexOf(array, searchElement, fromIndex)
{
  fromIndex = Math.max(fromIndex || 0, 0);

  for (var i = fromIndex; i < array.length; i++)
    if(array[i] == searchElement)
      return i;
  
  return -1;
};

/**
 * Generates a unique element ID.
 */
function guid(prefix)
{
  return (prefix || '') + Math.round(Math.random() * 1000000).toString();
};

/**
 * Merges two objects. Values from obj2 override values in obj1.
 * Function is NOT recursive and works only for one dimensional objects.
 * @param {Object} obj1 First object.
 * @param {Object} obj2 Second object.
 * @return {Object} Returns combination of both objects.
 */
function merge(obj1, obj2)
{
  var result = {}, name;

  for (name in obj1) 
    result[name] = obj1[name];
  
  for (name in obj2) 
    result[name] = obj2[name];
    
  return result;
};

/**
 * Attempts to convert string to boolean.
 * @param {String} value Input string.
 * @return {Boolean} Returns true if input was "true", false if input was "false" and value otherwise.
 */
function toBoolean(value)
{
  var result = { "true" : true, "false" : false }[value];
  return result == null ? value : result;
};

/**
 * Opens up a centered popup window.
 * @param {String} url    URL to open in the window.
 * @param {String} name   Popup name.
 * @param {int} width   Popup width.
 * @param {int} height    Popup height.
 * @param {String} options  window.open() options.
 * @return {Window}     Returns window instance.
 */
function popup(url, name, width, height, options)
{
  var x = (screen.width - width) / 2,
    y = (screen.height - height) / 2
    ;
    
  options +=  ', left=' + x + 
        ', top=' + y +
        ', width=' + width +
        ', height=' + height
    ;
  options = options.replace(/^,/, '');

  var win = window.open(url, name, options);
  win.focus();
  return win;
};

/**
 * Adds event handler to the target object.
 * @param {Object} obj    Target object.
 * @param {String} type   Name of the event.
 * @param {Function} func Handling function.
 */
function attachEvent(obj, type, func, scope)
{
  function handler(e)
  {
    e = e || window.event;
    
    if (!e.target)
    {
      e.target = e.srcElement;
      e.preventDefault = function()
      {
        this.returnValue = false;
      };
    }
      
    func.call(scope || window, e);
  };
  
  if (obj.attachEvent) 
  {
    obj.attachEvent('on' + type, handler);
  }
  else 
  {
    obj.addEventListener(type, handler, false);
  }
};

/**
 * Displays an alert.
 * @param {String} str String to display.
 */
function alert(str)
{
  window.alert(sh.config.strings.alert + str);
};

/**
 * Finds a brush by its alias.
 *
 * @param {String} alias    Brush alias.
 * @param {Boolean} showAlert Suppresses the alert if false.
 * @return {Brush}        Returns bursh constructor if found, null otherwise.
 */
function findBrush(alias, showAlert)
{
  var brushes = sh.vars.discoveredBrushes,
    result = null
    ;
  
  if (brushes == null) 
  {
    brushes = {};
    
    // Find all brushes
    for (var brush in sh.brushes) 
    {
      var info = sh.brushes[brush],
        aliases = info.aliases
        ;
      
      if (aliases == null) 
        continue;
      
      // keep the brush name
      info.brushName = brush.toLowerCase();
      
      for (var i = 0; i < aliases.length; i++) 
        brushes[aliases[i]] = brush;
    }
    
    sh.vars.discoveredBrushes = brushes;
  }
  
  result = sh.brushes[brushes[alias]];

  if (result == null && showAlert)
    alert(sh.config.strings.noBrush + alias);
  
  return result;
};

/**
 * Executes a callback on each line and replaces each line with result from the callback.
 * @param {Object} str      Input string.
 * @param {Object} callback   Callback function taking one string argument and returning a string.
 */
function eachLine(str, callback)
{
  var lines = splitLines(str);
  
  for (var i = 0; i < lines.length; i++)
    lines[i] = callback(lines[i], i);
    
  // include \r to enable copy-paste on windows (ie8) without getting everything on one line
  return lines.join('\r\n');
};

/**
 * This is a special trim which only removes first and last empty lines
 * and doesn't affect valid leading space on the first line.
 * 
 * @param {String} str   Input string
 * @return {String}      Returns string without empty first and last lines.
 */
function trimFirstAndLastLines(str)
{
  return str.replace(/^[ ]*[\n]+|[\n]*[ ]*$/g, '');
};

/**
 * Parses key/value pairs into hash object.
 * 
 * Understands the following formats:
 * - name: word;
 * - name: [word, word];
 * - name: "string";
 * - name: 'string';
 * 
 * For example:
 *   name1: value; name2: [value, value]; name3: 'value'
 *   
 * @param {String} str    Input string.
 * @return {Object}       Returns deserialized object.
 */
function parseParams(str)
{
  var match, 
    result = {},
    arrayRegex = new XRegExp("^\\[(?<values>(.*?))\\]$"),
    regex = new XRegExp(
      "(?<name>[\\w-]+)" +
      "\\s*:\\s*" +
      "(?<value>" +
        "[\\w-%#]+|" +    // word
        "\\[.*?\\]|" +    // [] array
        '".*?"|' +      // "" string
        "'.*?'" +     // '' string
      ")\\s*;?",
      "g"
    )
    ;

  while ((match = regex.exec(str)) != null) 
  {
    var value = match.value
      .replace(/^['"]|['"]$/g, '') // strip quotes from end of strings
      ;
    
    // try to parse array value
    if (value != null && arrayRegex.test(value))
    {
      var m = arrayRegex.exec(value);
      value = m.values.length > 0 ? m.values.split(/\s*,\s*/) : [];
    }
    
    result[match.name] = value;
  }
  
  return result;
};

/**
 * Wraps each line of the string into <code/> tag with given style applied to it.
 * 
 * @param {String} str   Input string.
 * @param {String} css   Style name to apply to the string.
 * @return {String}      Returns input string with each line surrounded by <span/> tag.
 */
function wrapLinesWithCode(str, css)
{
  if (str == null || str.length == 0 || str == '\n') 
    return str;

  str = str.replace(/</g, '&lt;');

  // Replace two or more sequential spaces with &nbsp; leaving last space untouched.
  str = str.replace(/ {2,}/g, function(m)
  {
    var spaces = '';
    
    for (var i = 0; i < m.length - 1; i++)
      spaces += sh.config.space;
    
    return spaces + ' ';
  });

  // Split each line and apply <span class="...">...</span> to them so that
  // leading spaces aren't included.
  if (css != null) 
    str = eachLine(str, function(line)
    {
      if (line.length == 0) 
        return '';
      
      var spaces = '';
      
      line = line.replace(/^(&nbsp;| )+/, function(s)
      {
        spaces = s;
        return '';
      });
      
      if (line.length == 0) 
        return spaces;
      
      return spaces + '<code class="' + css + '">' + line + '</code>';
    });

  return str;
};

/**
 * Pads number with zeros until it's length is the same as given length.
 * 
 * @param {Number} number Number to pad.
 * @param {Number} length Max string length with.
 * @return {String}     Returns a string padded with proper amount of '0'.
 */
function padNumber(number, length)
{
  var result = number.toString();
  
  while (result.length < length)
    result = '0' + result;
  
  return result;
};

/**
 * Replaces tabs with spaces.
 * 
 * @param {String} code   Source code.
 * @param {Number} tabSize  Size of the tab.
 * @return {String}     Returns code with all tabs replaces by spaces.
 */
function processTabs(code, tabSize)
{
  var tab = '';
  
  for (var i = 0; i < tabSize; i++)
    tab += ' ';

  return code.replace(/\t/g, tab);
};

/**
 * Replaces tabs with smart spaces.
 * 
 * @param {String} code    Code to fix the tabs in.
 * @param {Number} tabSize Number of spaces in a column.
 * @return {String}        Returns code with all tabs replaces with roper amount of spaces.
 */
function processSmartTabs(code, tabSize)
{
  var lines = splitLines(code),
    tab = '\t',
    spaces = ''
    ;
  
  // Create a string with 1000 spaces to copy spaces from... 
  // It's assumed that there would be no indentation longer than that.
  for (var i = 0; i < 50; i++) 
    spaces += '                    '; // 20 spaces * 50
      
  // This function inserts specified amount of spaces in the string
  // where a tab is while removing that given tab.
  function insertSpaces(line, pos, count)
  {
    return line.substr(0, pos)
      + spaces.substr(0, count)
      + line.substr(pos + 1, line.length) // pos + 1 will get rid of the tab
      ;
  };

  // Go through all the lines and do the 'smart tabs' magic.
  code = eachLine(code, function(line)
  {
    if (line.indexOf(tab) == -1) 
      return line;
    
    var pos = 0;
    
    while ((pos = line.indexOf(tab)) != -1) 
    {
      // This is pretty much all there is to the 'smart tabs' logic.
      // Based on the position within the line and size of a tab,
      // calculate the amount of spaces we need to insert.
      var spaces = tabSize - pos % tabSize;
      line = insertSpaces(line, pos, spaces);
    }
    
    return line;
  });
  
  return code;
};

/**
 * Performs various string fixes based on configuration.
 */
function fixInputString(str)
{
  var br = /<br\s*\/?>|&lt;br\s*\/?&gt;/gi;
  
  if (sh.config.bloggerMode == true)
    str = str.replace(br, '\n');

  if (sh.config.stripBrs == true)
    str = str.replace(br, '');
    
  return str;
};

/**
 * Removes all white space at the begining and end of a string.
 * 
 * @param {String} str   String to trim.
 * @return {String}      Returns string without leading and following white space characters.
 */
function trim(str)
{
  return str.replace(/^\s+|\s+$/g, '');
};

/**
 * Unindents a block of text by the lowest common indent amount.
 * @param {String} str   Text to unindent.
 * @return {String}      Returns unindented text block.
 */
function unindent(str)
{
  var lines = splitLines(fixInputString(str)),
    indents = new Array(),
    regex = /^\s*/,
    min = 1000
    ;
  
  // go through every line and check for common number of indents
  for (var i = 0; i < lines.length && min > 0; i++) 
  {
    var line = lines[i];
    
    if (trim(line).length == 0) 
      continue;
    
    var matches = regex.exec(line);
    
    // In the event that just one line doesn't have leading white space
    // we can't unindent anything, so bail completely.
    if (matches == null) 
      return str;
      
    min = Math.min(matches[0].length, min);
  }
  
  // trim minimum common number of white space from the begining of every line
  if (min > 0) 
    for (var i = 0; i < lines.length; i++) 
      lines[i] = lines[i].substr(min);
  
  return lines.join('\n');
};

/**
 * Callback method for Array.sort() which sorts matches by
 * index position and then by length.
 * 
 * @param {Match} m1  Left object.
 * @param {Match} m2    Right object.
 * @return {Number}     Returns -1, 0 or -1 as a comparison result.
 */
function matchesSortCallback(m1, m2)
{
  // sort matches by index first
  if(m1.index < m2.index)
    return -1;
  else if(m1.index > m2.index)
    return 1;
  else
  {
    // if index is the same, sort by length
    if(m1.length < m2.length)
      return -1;
    else if(m1.length > m2.length)
      return 1;
  }
  
  return 0;
};

/**
 * Executes given regular expression on provided code and returns all
 * matches that are found.
 * 
 * @param {String} code    Code to execute regular expression on.
 * @param {Object} regex   Regular expression item info from <code>regexList</code> collection.
 * @return {Array}         Returns a list of Match objects.
 */ 
function getMatches(code, regexInfo)
{
  function defaultAdd(match, regexInfo)
  {
    return match[0];
  };
  
  var index = 0,
    match = null,
    matches = [],
    func = regexInfo.func ? regexInfo.func : defaultAdd
    ;
  
  while((match = regexInfo.regex.exec(code)) != null)
  {
    var resultMatch = func(match, regexInfo);
    
    if (typeof(resultMatch) == 'string')
      resultMatch = [new sh.Match(resultMatch, match.index, regexInfo.css)];

    matches = matches.concat(resultMatch);
  }
  
  return matches;
};

/**
 * Turns all URLs in the code into <a/> tags.
 * @param {String} code Input code.
 * @return {String} Returns code with </a> tags.
 */
function processUrls(code)
{
  var gt = /(.*)((&gt;|&lt;).*)/;
  
  return code.replace(sh.regexLib.url, function(m)
  {
    var suffix = '',
      match = null
      ;
    
    // We include &lt; and &gt; in the URL for the common cases like <http://google.com>
    // The problem is that they get transformed into &lt;http://google.com&gt;
    // Where as &gt; easily looks like part of the URL string.
  
    if (match = gt.exec(m))
    {
      m = match[1];
      suffix = match[2];
    }
    
    return '<a href="' + m + '">' + m + '</a>' + suffix;
  });
};

/**
 * Finds all <SCRIPT TYPE="syntaxhighlighter" /> elementss.
 * @return {Array} Returns array of all found SyntaxHighlighter tags.
 */
function getSyntaxHighlighterScriptTags()
{
  var tags = document.getElementsByTagName('script'),
    result = []
    ;
  
  for (var i = 0; i < tags.length; i++)
    if (tags[i].type == 'syntaxhighlighter')
      result.push(tags[i]);
      
  return result;
};

/**
 * Strips <![CDATA[]]> from <SCRIPT /> content because it should be used
 * there in most cases for XHTML compliance.
 * @param {String} original Input code.
 * @return {String} Returns code without leading <![CDATA[]]> tags.
 */
function stripCData(original)
{
  var left = '<![CDATA[',
    right = ']]>',
    // for some reason IE inserts some leading blanks here
    copy = trim(original),
    changed = false,
    leftLength = left.length,
    rightLength = right.length
    ;
  
  if (copy.indexOf(left) == 0)
  {
    copy = copy.substring(leftLength);
    changed = true;
  }
  
  var copyLength = copy.length;
  
  if (copy.indexOf(right) == copyLength - rightLength)
  {
    copy = copy.substring(0, copyLength - rightLength);
    changed = true;
  }
  
  return changed ? copy : original;
};


/**
 * Quick code mouse double click handler.
 */
function quickCodeHandler(e)
{
  var target = e.target,
    highlighterDiv = findParentElement(target, '.syntaxhighlighter'),
    container = findParentElement(target, '.code-container'),
    textarea = document.createElement('textarea'),
    highlighter
    ;

  if (!container || !highlighterDiv || findElement(container, 'textarea'))
    return;

  highlighter = getHighlighterById(highlighterDiv.id);
  
  // add source class name
  addClass(highlighterDiv, 'source');

  // Have to go over each line and grab it's text, can't just do it on the
  // container because Firefox loses all \n where as Webkit doesn't.
  var lines = container.childNodes,
    code = []
    ;
  
  for (var i = 0; i < lines.length; i++)
    code.push(lines[i].innerText || lines[i].textContent);
  
  // using \r instead of \r or \r\n makes this work equally well on IE, FF and Webkit
  code = code.join('\r');

    // For Webkit browsers, replace nbsp with a breaking space
    code = code.replace(/\u00a0/g, " ");
  
  // inject <textarea/> tag
  textarea.appendChild(document.createTextNode(code));
  container.appendChild(textarea);
  
  // preselect all text
  textarea.focus();
  textarea.select();
  
  // set up handler for lost focus
  attachEvent(textarea, 'blur', function(e)
  {
    textarea.parentNode.removeChild(textarea);
    removeClass(highlighterDiv, 'source');
  });
};

/**
 * Match object.
 */
sh.Match = function(value, index, css)
{
  this.value = value;
  this.index = index;
  this.length = value.length;
  this.css = css;
  this.brushName = null;
};

sh.Match.prototype.toString = function()
{
  return this.value;
};

/**
 * Simulates HTML code with a scripting language embedded.
 * 
 * @param {String} scriptBrushName Brush name of the scripting language.
 */
sh.HtmlScript = function(scriptBrushName)
{
  var brushClass = findBrush(scriptBrushName),
    scriptBrush,
    xmlBrush = new sh.brushes.Xml(),
    bracketsRegex = null,
    ref = this,
    methodsToExpose = 'getDiv getHtml init'.split(' ')
    ;

  if (brushClass == null)
    return;
  
  scriptBrush = new brushClass();
  
  for(var i = 0; i < methodsToExpose.length; i++)
    // make a closure so we don't lose the name after i changes
    (function() {
      var name = methodsToExpose[i];
      
      ref[name] = function()
      {
        return xmlBrush[name].apply(xmlBrush, arguments);
      };
    })();
  
  if (scriptBrush.htmlScript == null)
  {
    alert(sh.config.strings.brushNotHtmlScript + scriptBrushName);
    return;
  }
  
  xmlBrush.regexList.push(
    { regex: scriptBrush.htmlScript.code, func: process }
  );
  
  function offsetMatches(matches, offset)
  {
    for (var j = 0; j < matches.length; j++) 
      matches[j].index += offset;
  }
  
  function process(match, info)
  {
    var code = match.code,
      matches = [],
      regexList = scriptBrush.regexList,
      offset = match.index + match.left.length,
      htmlScript = scriptBrush.htmlScript,
      result
      ;

    // add all matches from the code
    for (var i = 0; i < regexList.length; i++)
    {
      result = getMatches(code, regexList[i]);
      offsetMatches(result, offset);
      matches = matches.concat(result);
    }
    
    // add left script bracket
    if (htmlScript.left != null && match.left != null)
    {
      result = getMatches(match.left, htmlScript.left);
      offsetMatches(result, match.index);
      matches = matches.concat(result);
    }
    
    // add right script bracket
    if (htmlScript.right != null && match.right != null)
    {
      result = getMatches(match.right, htmlScript.right);
      offsetMatches(result, match.index + match[0].lastIndexOf(match.right));
      matches = matches.concat(result);
    }
    
    for (var j = 0; j < matches.length; j++)
      matches[j].brushName = brushClass.brushName;
      
    return matches;
  }
};

/**
 * Main Highlither class.
 * @constructor
 */
sh.Highlighter = function()
{
  // not putting any code in here because of the prototype inheritance
};

sh.Highlighter.prototype = {
  /**
   * Returns value of the parameter passed to the highlighter.
   * @param {String} name       Name of the parameter.
   * @param {Object} defaultValue   Default value.
   * @return {Object}         Returns found value or default value otherwise.
   */
  getParam: function(name, defaultValue)
  {
    var result = this.params[name];
    return toBoolean(result == null ? defaultValue : result);
  },
  
  /**
   * Shortcut to document.createElement().
   * @param {String} name   Name of the element to create (DIV, A, etc).
   * @return {HTMLElement}  Returns new HTML element.
   */
  create: function(name)
  {
    return document.createElement(name);
  },
  
  /**
   * Applies all regular expression to the code and stores all found
   * matches in the `this.matches` array.
   * @param {Array} regexList   List of regular expressions.
   * @param {String} code     Source code.
   * @return {Array}        Returns list of matches.
   */
  findMatches: function(regexList, code)
  {
    var result = [];
    
    if (regexList != null)
      for (var i = 0; i < regexList.length; i++) 
        // BUG: length returns len+1 for array if methods added to prototype chain (oising@gmail.com)
        if (typeof (regexList[i]) == "object")
          result = result.concat(getMatches(code, regexList[i]));
    
    // sort and remove nested the matches
    return this.removeNestedMatches(result.sort(matchesSortCallback));
  },
  
  /**
   * Checks to see if any of the matches are inside of other matches. 
   * This process would get rid of highligted strings inside comments, 
   * keywords inside strings and so on.
   */
  removeNestedMatches: function(matches)
  {
    // Optimized by Jose Prado (http://joseprado.com)
    for (var i = 0; i < matches.length; i++) 
    { 
      if (matches[i] === null)
        continue;
      
      var itemI = matches[i],
        itemIEndPos = itemI.index + itemI.length
        ;
      
      for (var j = i + 1; j < matches.length && matches[i] !== null; j++) 
      {
        var itemJ = matches[j];
        
        if (itemJ === null) 
          continue;
        else if (itemJ.index > itemIEndPos) 
          break;
        else if (itemJ.index == itemI.index && itemJ.length > itemI.length)
          matches[i] = null;
        else if (itemJ.index >= itemI.index && itemJ.index < itemIEndPos) 
          matches[j] = null;
      }
    }
    
    return matches;
  },
  
  /**
   * Creates an array containing integer line numbers starting from the 'first-line' param.
   * @return {Array} Returns array of integers.
   */
  figureOutLineNumbers: function(code)
  {
    var lines = [],
      firstLine = parseInt(this.getParam('first-line'))
      ;
    
    eachLine(code, function(line, index)
    {
      lines.push(index + firstLine);
    });
    
    return lines;
  },
  
  /**
   * Determines if specified line number is in the highlighted list.
   */
  isLineHighlighted: function(lineNumber)
  {
    var list = this.getParam('highlight', []);
    
    if (typeof(list) != 'object' && list.push == null) 
      list = [ list ];
    
    return indexOf(list, lineNumber.toString()) != -1;
  },
  
  /**
   * Generates HTML markup for a single line of code while determining alternating line style.
   * @param {Integer} lineNumber  Line number.
   * @param {String} code Line  HTML markup.
   * @return {String}       Returns HTML markup.
   */
  getLineHtml: function(lineIndex, lineNumber, code)
  {
    var classes = [
      'line',
      'number' + lineNumber,
      'index' + lineIndex,
      'alt' + (lineNumber % 2 == 0 ? 1 : 2).toString()
    ];
    
    if (this.isLineHighlighted(lineNumber))
      classes.push('highlighted');
    
    if (lineNumber == 0)
      classes.push('break');
      
    return '<div class="' + classes.join(' ') + '">' + code + '</div>';
  },
  
  /**
   * Generates HTML markup for line number column.
   * @param {String} code     Complete code HTML markup.
   * @param {Array} lineNumbers Calculated line numbers.
   * @return {String}       Returns HTML markup.
   */
  getLineNumbersHtml: function(code, lineNumbers)
  {
    var html = '',
      count = splitLines(code).length,
      firstLine = parseInt(this.getParam('first-line')),
      pad = this.getParam('pad-line-numbers')
      ;
    
    if (pad == true)
      pad = (firstLine + count - 1).toString().length;
    else if (isNaN(pad) == true)
      pad = 0;
      
    for (var i = 0; i < count; i++)
    {
      var lineNumber = lineNumbers ? lineNumbers[i] : firstLine + i,
        code = lineNumber == 0 ? sh.config.space : padNumber(lineNumber, pad)
        ;
        
      html += this.getLineHtml(i, lineNumber, code);
    }
    
    return html;
  },
  
  /**
   * Splits block of text into individual DIV lines.
   * @param {String} code     Code to highlight.
   * @param {Array} lineNumbers Calculated line numbers.
   * @return {String}       Returns highlighted code in HTML form.
   */
  getCodeLinesHtml: function(html, lineNumbers)
  {
    html = trim(html);
    
    var lines = splitLines(html),
      padLength = this.getParam('pad-line-numbers'),
      firstLine = parseInt(this.getParam('first-line')),
      html = '',
      brushName = this.getParam('brush')
      ;

    for (var i = 0; i < lines.length; i++)
    {
      var line = lines[i],
        indent = /^(&nbsp;|\s)+/.exec(line),
        spaces = null,
        lineNumber = lineNumbers ? lineNumbers[i] : firstLine + i;
        ;

      if (indent != null)
      {
        spaces = indent[0].toString();
        line = line.substr(spaces.length);
        spaces = spaces.replace(' ', sh.config.space);
      }

      line = trim(line);
      
      if (line.length == 0)
        line = sh.config.space;
      
      html += this.getLineHtml(
        i,
        lineNumber, 
        (spaces != null ? '<code class="' + brushName + ' spaces">' + spaces + '</code>' : '') + line
      );
    }
    
    return html;
  },
  
  /**
   * Returns HTML for the table title or empty string if title is null.
   */
  getTitleHtml: function(title)
  {
    return title ? '<caption>' + title + '</caption>' : '';
  },
  
  /**
   * Finds all matches in the source code.
   * @param {String} code   Source code to process matches in.
   * @param {Array} matches Discovered regex matches.
   * @return {String} Returns formatted HTML with processed mathes.
   */
  getMatchesHtml: function(code, matches)
  {
    var pos = 0, 
      result = '',
      brushName = this.getParam('brush', '')
      ;
    
    function getBrushNameCss(match)
    {
      var result = match ? (match.brushName || brushName) : brushName;
      return result ? result + ' ' : '';
    };
    
    // Finally, go through the final list of matches and pull the all
    // together adding everything in between that isn't a match.
    for (var i = 0; i < matches.length; i++) 
    {
      var match = matches[i],
        matchBrushName
        ;
      
      if (match === null || match.length === 0) 
        continue;
      
      matchBrushName = getBrushNameCss(match);
      
      result += wrapLinesWithCode(code.substr(pos, match.index - pos), matchBrushName + 'plain')
          + wrapLinesWithCode(match.value, matchBrushName + match.css)
          ;

      pos = match.index + match.length + (match.offset || 0);
    }

    // don't forget to add whatever's remaining in the string
    result += wrapLinesWithCode(code.substr(pos), getBrushNameCss() + 'plain');

    return result;
  },
  
  /**
   * Generates HTML markup for the whole syntax highlighter.
   * @param {String} code Source code.
   * @return {String} Returns HTML markup.
   */
  getHtml: function(code)
  {
    var html = '',
      classes = [ 'syntaxhighlighter' ],
      tabSize,
      matches,
      lineNumbers
      ;
    
    // process light mode
    if (this.getParam('light') == true)
      this.params.toolbar = this.params.gutter = false;

    className = 'syntaxhighlighter';

    if (this.getParam('collapse') == true)
      classes.push('collapsed');
    
    if ((gutter = this.getParam('gutter')) == false)
      classes.push('nogutter');

    // add custom user style name
    classes.push(this.getParam('class-name'));

    // add brush alias to the class name for custom CSS
    classes.push(this.getParam('brush'));

    code = trimFirstAndLastLines(code)
      .replace(/\r/g, ' ') // IE lets these buggers through
      ;

    tabSize = this.getParam('tab-size');

    // replace tabs with spaces
    code = this.getParam('smart-tabs') == true
      ? processSmartTabs(code, tabSize)
      : processTabs(code, tabSize)
      ;

    // unindent code by the common indentation
    if (this.getParam('unindent'))
      code = unindent(code);

    if (gutter)
      lineNumbers = this.figureOutLineNumbers(code);
    
    // find matches in the code using brushes regex list
    matches = this.findMatches(this.regexList, code);
    // processes found matches into the html
    html = this.getMatchesHtml(code, matches);
    // finally, split all lines so that they wrap well
    html = this.getCodeLinesHtml(html, lineNumbers);

    // finally, process the links
    if (this.getParam('auto-links'))
      html = processUrls(html);
    
    if (typeof(navigator) != 'undefined' && navigator.userAgent && navigator.userAgent.match(/MSIE/))
      classes.push('ie');
    
    html = 
      '<div id="' + getHighlighterId(this.id) + '" class="' + classes.join(' ') + '">'
        + (this.getParam('toolbar') ? sh.toolbar.getHtml(this) : '')
        + '<table border="0" cellpadding="0" cellspacing="0">'
          + this.getTitleHtml(this.getParam('title'))
          + '<tbody>'
            + '<tr>'
              + (gutter ? '<td class="gutter">' + this.getLineNumbersHtml(code) + '</td>' : '')
              + '<td class="code">'
                + '<div class="code-container">'
                  + html
                + '</div>'
              + '</td>'
            + '</tr>'
          + '</tbody>'
        + '</table>'
      + '</div>'
      ;
      
    return html;
  },
  
  /**
   * Highlights the code and returns complete HTML.
   * @param {String} code     Code to highlight.
   * @return {Element}        Returns container DIV element with all markup.
   */
  getDiv: function(code)
  {
    if (code === null) 
      code = '';
    
    this.code = code;

    var div = this.create('div');

    // create main HTML
    div.innerHTML = this.getHtml(code);
    
    // set up click handlers
    if (this.getParam('toolbar'))
      attachEvent(findElement(div, '.toolbar'), 'click', sh.toolbar.handler);
    
    if (this.getParam('quick-code'))
      attachEvent(findElement(div, '.code'), 'dblclick', quickCodeHandler);
    
    return div;
  },
  
  /**
   * Initializes the highlighter/brush.
   *
   * Constructor isn't used for initialization so that nothing executes during necessary
   * `new SyntaxHighlighter.Highlighter()` call when setting up brush inheritence.
   *
   * @param {Hash} params Highlighter parameters.
   */
  init: function(params)
  {
    this.id = guid();
    
    // register this instance in the highlighters list
    storeHighlighter(this);
    
    // local params take precedence over defaults
    this.params = merge(sh.defaults, params || {})
    
    // process light mode
    if (this.getParam('light') == true)
      this.params.toolbar = this.params.gutter = false;
  },
  
  /**
   * Converts space separated list of keywords into a regular expression string.
   * @param {String} str    Space separated keywords.
   * @return {String}       Returns regular expression string.
   */
  getKeywords: function(str)
  {
    str = str
      .replace(/^\s+|\s+$/g, '')
      .replace(/\s+/g, '|')
      ;
    
    return '\\b(?:' + str + ')\\b';
  },
  
  /**
   * Makes a brush compatible with the `html-script` functionality.
   * @param {Object} regexGroup Object containing `left` and `right` regular expressions.
   */
  forHtmlScript: function(regexGroup)
  {
    var regex = { 'end' : regexGroup.right.source };

    if(regexGroup.eof)
      regex.end = "(?:(?:" + regex.end + ")|$)";
    
    this.htmlScript = {
      left : { regex: regexGroup.left, css: 'script' },
      right : { regex: regexGroup.right, css: 'script' },
      code : new XRegExp(
        "(?<left>" + regexGroup.left.source + ")" +
        "(?<code>.*?)" +
        "(?<right>" + regex.end + ")",
        "sgi"
        )
    };
  }
}; // end of Highlighter

return sh;
}(); // end of anonymous function

// CommonJS
typeof(exports) != 'undefined' ? exports.SyntaxHighlighter = SyntaxHighlighter : null;
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['text', 'plain'];

	SyntaxHighlighter.brushes.Plain = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		function process(match, regexInfo)
		{
			var constructor = SyntaxHighlighter.Match,
				code = match[0],
				tag = XRegExp.exec(code, XRegExp('(&lt;|<)[\\s\\/\\?!]*(?<name>[:\\w-\\.]+)', 'xg')),
				result = []
				;

			if (match.attributes != null)
			{
				var attributes,
					pos = 0,
					regex = XRegExp('(?<name> [\\w:.-]+)' +
									'\\s*=\\s*' +
									'(?<value> ".*?"|\'.*?\'|\\w+)',
									'xg');

				while ((attributes = XRegExp.exec(code, regex, pos)) != null)
				{
					result.push(new constructor(attributes.name, match.index + attributes.index, 'color1'));
					result.push(new constructor(attributes.value, match.index + attributes.index + attributes[0].indexOf(attributes.value), 'string'));
					pos = attributes.index + attributes[0].length;
				}
			}

			if (tag != null)
				result.push(
					new constructor(tag.name, match.index + tag[0].indexOf(tag.name), 'keyword')
				);

			return result;
		}

		this.regexList = [
			{ regex: XRegExp('(\\&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](\\&gt;|>)', 'gm'),			css: 'color2' },	// <![ ... [ ... ]]>
			{ regex: SyntaxHighlighter.regexLib.xmlComments,												css: 'comments' },	// <!-- ... -->
			{ regex: XRegExp('(&lt;|<)[\\s\\/\\?!]*(\\w+)(?<attributes>.*?)[\\s\\/\\?]*(&gt;|>)', 'sg'), func: process }
		];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['xml', 'xhtml', 'xslt', 'html', 'plist'];

	SyntaxHighlighter.brushes.Xml = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
;(function()
{
  // CommonJS
  SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

  function Brush()
  {
    // Contributed by Erik Peterson.
  
    var keywords =  'alias and BEGIN begin break case class def define_method defined do each else elsif ' +
            'END end ensure false for if in module new next nil not or raise redo rescue retry return ' +
            'self super then throw true undef unless until when while yield';

    var builtins =  'Array Bignum Binding Class Continuation Dir Exception FalseClass File::Stat File Fixnum Fload ' +
            'Hash Integer IO MatchData Method Module NilClass Numeric Object Proc Range Regexp String Struct::TMS Symbol ' +
            'ThreadGroup Thread Time TrueClass';

    this.regexList = [
      { regex: SyntaxHighlighter.regexLib.singleLinePerlComments, css: 'comments' },    // one line comments
      { regex: SyntaxHighlighter.regexLib.doubleQuotedString,   css: 'string' },    // double quoted strings
      { regex: SyntaxHighlighter.regexLib.singleQuotedString,   css: 'string' },    // single quoted strings
      { regex: /\b[A-Z0-9_]+\b/g,                 css: 'constants' },   // constants
      { regex: /:[a-z][A-Za-z0-9_]*/g,              css: 'color2' },    // symbols
      { regex: /(\$|@@|@)\w+/g,                 css: 'variable bold' }, // $global, @instance, and @@class variables
      { regex: new RegExp(this.getKeywords(keywords), 'gm'),    css: 'keyword' },   // keywords
      { regex: new RegExp(this.getKeywords(builtins), 'gm'),    css: 'color1' }     // builtins
      ];

    this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
  };

  Brush.prototype = new SyntaxHighlighter.Highlighter();
  Brush.aliases = ['ruby', 'rails', 'ror', 'rb'];

  SyntaxHighlighter.brushes.Ruby = Brush;

  // CommonJS
  typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
;(function()
{
  // CommonJS
  SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

  function Brush()
  {
    var keywords =  'if fi then elif else for do done until while break continue case esac function return in eq ne ge le';
    var commands =  'alias apropos awk basename bash bc bg builtin bzip2 cal cat cd cfdisk chgrp chmod chown chroot' +
            'cksum clear cmp comm command cp cron crontab csplit cut date dc dd ddrescue declare df ' +
            'diff diff3 dig dir dircolors dirname dirs du echo egrep eject enable env ethtool eval ' +
            'exec exit expand export expr false fdformat fdisk fg fgrep file find fmt fold format ' +
            'free fsck ftp gawk getopts grep groups gzip hash head history hostname id ifconfig ' +
            'import install join kill less let ln local locate logname logout look lpc lpr lprint ' +
            'lprintd lprintq lprm ls lsof make man mkdir mkfifo mkisofs mknod more mount mtools ' +
            'mv netstat nice nl nohup nslookup open op passwd paste pathchk ping popd pr printcap ' +
            'printenv printf ps pushd pwd quota quotacheck quotactl ram rcp read readonly renice ' +
            'remsync rm rmdir rsync screen scp sdiff sed select seq set sftp shift shopt shutdown ' +
            'sleep sort source split ssh strace su sudo sum symlink sync tail tar tee test time ' +
            'times touch top traceroute trap tr true tsort tty type ulimit umask umount unalias ' +
            'uname unexpand uniq units unset unshar useradd usermod users uuencode uudecode v vdir ' +
            'vi watch wc whereis which who whoami Wget xargs yes'
            ;

    this.regexList = [
      { regex: /^#!.*$/gm,                      css: 'preprocessor bold' },
      { regex: /\/[\w-\/]+/gm,                    css: 'plain' },
      { regex: SyntaxHighlighter.regexLib.singleLinePerlComments,   css: 'comments' },    // one line comments
      { regex: SyntaxHighlighter.regexLib.doubleQuotedString,     css: 'string' },    // double quoted strings
      { regex: SyntaxHighlighter.regexLib.singleQuotedString,     css: 'string' },    // single quoted strings
      { regex: new RegExp(this.getKeywords(keywords), 'gm'),      css: 'keyword' },   // keywords
      { regex: new RegExp(this.getKeywords(commands), 'gm'),      css: 'functions' }    // commands
      ];
  }

  Brush.prototype = new SyntaxHighlighter.Highlighter();
  Brush.aliases = ['bash', 'shell', 'sh'];

  SyntaxHighlighter.brushes.Bash = Brush;

  // CommonJS
  typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
;(function()
{
  // CommonJS
  SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

  function Brush()
  {
    var keywords =  'break case catch class continue ' +
        'default delete do else enum export extends false  ' +
        'for function if implements import in instanceof ' +
        'interface let new null package private protected ' +
        'static return super switch ' +
        'this throw true try typeof var while with yield';

    var r = SyntaxHighlighter.regexLib;
    
    this.regexList = [
      { regex: r.multiLineDoubleQuotedString,         css: 'string' },      // double quoted strings
      { regex: r.multiLineSingleQuotedString,         css: 'string' },      // single quoted strings
      { regex: r.singleLineCComments,             css: 'comments' },      // one line comments
      { regex: r.multiLineCComments,              css: 'comments' },      // multiline comments
      { regex: /\s*#.*/gm,                  css: 'preprocessor' },    // preprocessor tags like #region and #endregion
      { regex: new RegExp(this.getKeywords(keywords), 'gm'),  css: 'keyword' }      // keywords
      ];
  
    this.forHtmlScript(r.scriptScriptTags);
  };

  Brush.prototype = new SyntaxHighlighter.Highlighter();
  Brush.aliases = ['js', 'jscript', 'javascript', 'json'];

  SyntaxHighlighter.brushes.JScript = Brush;

  // CommonJS
  typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		function getKeywordsCSS(str)
		{
			return '\\b([a-z_]|)' + str.replace(/ /g, '(?=:)\\b|\\b([a-z_\\*]|\\*|)') + '(?=:)\\b';
		};
	
		function getValuesCSS(str)
		{
			return '\\b' + str.replace(/ /g, '(?!-)(?!:)\\b|\\b()') + '\:\\b';
		};

		var keywords =	'ascent azimuth background-attachment background-color background-image background-position ' +
						'background-repeat background baseline bbox border-collapse border-color border-spacing border-style border-top ' +
						'border-right border-bottom border-left border-top-color border-right-color border-bottom-color border-left-color ' +
						'border-top-style border-right-style border-bottom-style border-left-style border-top-width border-right-width ' +
						'border-bottom-width border-left-width border-width border bottom cap-height caption-side centerline clear clip color ' +
						'content counter-increment counter-reset cue-after cue-before cue cursor definition-src descent direction display ' +
						'elevation empty-cells float font-size-adjust font-family font-size font-stretch font-style font-variant font-weight font ' +
						'height left letter-spacing line-height list-style-image list-style-position list-style-type list-style margin-top ' +
						'margin-right margin-bottom margin-left margin marker-offset marks mathline max-height max-width min-height min-width orphans ' +
						'outline-color outline-style outline-width outline overflow padding-top padding-right padding-bottom padding-left padding page ' +
						'page-break-after page-break-before page-break-inside pause pause-after pause-before pitch pitch-range play-during position ' +
						'quotes right richness size slope src speak-header speak-numeral speak-punctuation speak speech-rate stemh stemv stress ' +
						'table-layout text-align top text-decoration text-indent text-shadow text-transform unicode-bidi unicode-range units-per-em ' +
						'vertical-align visibility voice-family volume white-space widows width widths word-spacing x-height z-index';

		var values =	'above absolute all always aqua armenian attr aural auto avoid baseline behind below bidi-override black blink block blue bold bolder '+
						'both bottom braille capitalize caption center center-left center-right circle close-quote code collapse compact condensed '+
						'continuous counter counters crop cross crosshair cursive dashed decimal decimal-leading-zero default digits disc dotted double '+
						'embed embossed e-resize expanded extra-condensed extra-expanded fantasy far-left far-right fast faster fixed format fuchsia '+
						'gray green groove handheld hebrew help hidden hide high higher icon inline-table inline inset inside invert italic '+
						'justify landscape large larger left-side left leftwards level lighter lime line-through list-item local loud lower-alpha '+
						'lowercase lower-greek lower-latin lower-roman lower low ltr marker maroon medium message-box middle mix move narrower '+
						'navy ne-resize no-close-quote none no-open-quote no-repeat normal nowrap n-resize nw-resize oblique olive once open-quote outset '+
						'outside overline pointer portrait pre print projection purple red relative repeat repeat-x repeat-y rgb ridge right right-side '+
						'rightwards rtl run-in screen scroll semi-condensed semi-expanded separate se-resize show silent silver slower slow '+
						'small small-caps small-caption smaller soft solid speech spell-out square s-resize static status-bar sub super sw-resize '+
						'table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group teal '+
						'text-bottom text-top thick thin top transparent tty tv ultra-condensed ultra-expanded underline upper-alpha uppercase upper-latin '+
						'upper-roman url visible wait white wider w-resize x-fast x-high x-large x-loud x-low x-slow x-small x-soft xx-large xx-small yellow';

		var fonts =		'[mM]onospace [tT]ahoma [vV]erdana [aA]rial [hH]elvetica [sS]ans-serif [sS]erif [cC]ourier mono sans serif';
	
		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },	// multiline comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },	// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },	// single quoted strings
			{ regex: /\#[a-fA-F0-9]{3,6}/g,								css: 'value' },		// html colors
			{ regex: /(-?\d+)(\.\d+)?(px|em|pt|\:|\%|)/g,				css: 'value' },		// sizes
			{ regex: /!important/g,										css: 'color3' },	// !important
			{ regex: new RegExp(getKeywordsCSS(keywords), 'gm'),		css: 'keyword' },	// keywords
			{ regex: new RegExp(getValuesCSS(values), 'g'),				css: 'value' },		// values
			{ regex: new RegExp(this.getKeywords(fonts), 'g'),			css: 'color1' }		// fonts
			];

		this.forHtmlScript({ 
			left: /(&lt;|<)\s*style.*?(&gt;|>)/gi, 
			right: /(&lt;|<)\/\s*style\s*(&gt;|>)/gi 
			});
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['css'];

	SyntaxHighlighter.brushes.CSS = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		function getKeywordsCSS(str)
		{
			return '\\b([a-z_]|)' + str.replace(/ /g, '(?=:)\\b|\\b([a-z_\\*]|\\*|)') + '(?=:)\\b';
		};
	
		function getValuesCSS(str)
		{
			return '\\b' + str.replace(/ /g, '(?!-)(?!:)\\b|\\b()') + '\:\\b';
		};
		
		function getKeywordsPrependedBy(keywords, by)
		{
			return '(?:' + keywords.replace(/^\s+|\s+$/g, '').replace(/\s+/g, '|' + by + '\\b').replace(/^/, by + '\\b') + ')\\b';
		}

		var keywords =	'ascent azimuth background-attachment background-color background-image background-position ' +
						'background-repeat background baseline bbox border-collapse border-color border-spacing border-style border-top ' +
						'border-right border-bottom border-left border-top-color border-right-color border-bottom-color border-left-color ' +
						'border-top-style border-right-style border-bottom-style border-left-style border-top-width border-right-width ' +
						'border-bottom-width border-left-width border-width border bottom cap-height caption-side centerline clear clip color ' +
						'content counter-increment counter-reset cue-after cue-before cue cursor definition-src descent direction display ' +
						'elevation empty-cells float font-size-adjust font-family font-size font-stretch font-style font-variant font-weight font ' +
						'height left letter-spacing line-height list-style-image list-style-position list-style-type list-style margin-top ' +
						'margin-right margin-bottom margin-left margin marker-offset marks mathline max-height max-width min-height min-width orphans ' +
						'outline-color outline-style outline-width outline overflow padding-top padding-right padding-bottom padding-left padding page ' +
						'page-break-after page-break-before page-break-inside pause pause-after pause-before pitch pitch-range play-during position ' +
						'quotes right richness size slope src speak-header speak-numeral speak-punctuation speak speech-rate stemh stemv stress ' +
						'table-layout text-align top text-decoration text-indent text-shadow text-transform unicode-bidi unicode-range units-per-em ' +
						'vertical-align visibility voice-family volume white-space widows width widths word-spacing x-height z-index zoom';
		
		var values =	'above absolute all always aqua armenian attr aural auto avoid baseline behind below bidi-override black blink block blue bold bolder '+
						'both bottom braille capitalize caption center center-left center-right circle close-quote code collapse compact condensed '+
						'continuous counter counters crop cross crosshair cursive dashed decimal decimal-leading-zero digits disc dotted double '+
						'embed embossed e-resize expanded extra-condensed extra-expanded fantasy far-left far-right fast faster fixed format fuchsia '+
						'gray green groove handheld hebrew help hidden hide high higher icon inline-table inline inset inside invert italic '+
						'justify landscape large larger left-side left leftwards level lighter lime line-through list-item local loud lower-alpha '+
						'lowercase lower-greek lower-latin lower-roman lower low ltr marker maroon medium message-box middle mix move narrower '+
						'navy ne-resize no-close-quote none no-open-quote no-repeat normal nowrap n-resize nw-resize oblique olive once open-quote outset '+
						'outside overline pointer portrait pre print projection purple red relative repeat repeat-x repeat-y rgb ridge right right-side '+
						'rightwards rtl run-in screen scroll semi-condensed semi-expanded separate se-resize show silent silver slower slow '+
						'small small-caps small-caption smaller soft solid speech spell-out square s-resize static status-bar sub super sw-resize '+
						'table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group teal '+
						'text-bottom text-top thick thin top transparent tty tv ultra-condensed ultra-expanded underline upper-alpha uppercase upper-latin '+
						'upper-roman url visible wait white wider w-resize x-fast x-high x-large x-loud x-low x-slow x-small x-soft xx-large xx-small yellow';
		
		var fonts =		'[mM]onospace [tT]ahoma [vV]erdana [aA]rial [hH]elvetica [sS]ans-serif [sS]erif [cC]ourier mono sans serif';
		
		var statements		= 'important default';
		var preprocessor	= 'import extend debug warn if else for while mixin function include content media';
		
		var r = SyntaxHighlighter.regexLib;
		
		this.regexList = [
			{ regex: r.multiLineCComments,											css: 'comments' },		// multiline comments
			{ regex: r.singleLineCComments,											css: 'comments' },		// singleline comments
			{ regex: r.doubleQuotedString,											css: 'string' },		// double quoted strings
			{ regex: r.singleQuotedString,											css: 'string' },		// single quoted strings
			{ regex: /\#[a-fA-F0-9]{3,6}/g,											css: 'value' },			// html colors
			{ regex: /\b(-?\d+)(\.\d+)?(px|em|rem|pt|\:|\%|)\b/g,					css: 'value' },			// sizes
			{ regex: /\$[\w-]+/g,													css: 'variable' },		// variables
			{ regex: new RegExp(getKeywordsPrependedBy(statements, '!'), 'g'),		css: 'color3' },		// statements
			{ regex: new RegExp(getKeywordsPrependedBy(preprocessor, '@'), 'g'),	css: 'preprocessor' },	// preprocessor
			{ regex: new RegExp(getKeywordsCSS(keywords), 'gm'),					css: 'keyword' },		// keywords
			{ regex: new RegExp(getValuesCSS(values), 'g'),							css: 'value' },			// values
			{ regex: new RegExp(this.getKeywords(fonts), 'g'),						css: 'color1' }			// fonts
			];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['sass', 'scss'];

	SyntaxHighlighter.brushes.Sass = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();


















$(function() {  
  // Init deck
  $.deck('.slide');
  
  // SyntaxHighlighter init
  SyntaxHighlighter.all();
});
