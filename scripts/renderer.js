$('body').append('<link rel="stylesheet" href="css/mm_common.css" type="text/css" />');
$('body').append('<link rel="stylesheet" href="css/mm_binder.css" type="text/css" />');
$('body').append('<link rel="stylesheet" href="css/mm_elements.css" type="text/css" />');
$('body').append('<link rel="stylesheet" href="css/mm_hotbar.css" type="text/css" />');
$('body').append('<link rel="stylesheet" href="css/mm_maji.css" type="text/css" />');

HTML_TEMPLATE_CACHE = {};

loadTemplate = function(path) {
    if ( path in HTML_TEMPLATE_CACHE ) return HTML_TEMPLATE_CACHE[path];
    let html = $.get({
        url: path,
        dataType: 'html',
        async: false
    }).responseText;
    HTML_TEMPLATE_CACHE[path] = html;
    return html;
};

sync.render("mm_binder", function(obj, app, scope) {
    let html = loadTemplate("html/binder.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display : html});
    rendered.on('mousedown', '.mm_die', function(){
     runCommand("music", {src : "/sounds/dice.mp3"});
    });
    return rendered;
});

sync.render("mm_binder_hotbar", function(obj, app, scope) {
    let html = loadTemplate("html/binder_hotbar.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display : html});
    rendered.on('mousedown', '.hb_half', function(){
     runCommand("music", {src : "/sounds/dice.mp3"});
    });
    return rendered;
});

sync.render("mm_majimonster", function(obj, app, scope) {
    let html = loadTemplate("html/majimonster.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display : html});
    rendered.on('mousedown', '.mm_die-mstr', function(){
     runCommand("music", {src : "/sounds/dice.mp3"});
    });
    return rendered;
});

sync.render("mm_majimonster_hotbar", function(obj, app, scope) {
    let html = loadTemplate("html/majimonster_hotbar.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display : html});
    return rendered;
});

sync.render("mm_technique", function(obj, app, scope) {
    let html = loadTemplate("html/technique.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display : html});
    return rendered;
});


sync.render("mm_item", function(obj, app, scope) {
    let html = loadTemplate("html/item.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display : html});
    return rendered;
});


sync.render("mm_feature", function(obj, app, scope) {
    let html = loadTemplate("html/feature.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display : html});
    return rendered;
});

sync.render("mm_trait", function(obj, app, scope) {
    let html = loadTemplate("html/feature.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display : html});
    return rendered;
});


sync.render("mm_drajule", function(obj, app, scope) {
    let html = loadTemplate("html/drajule.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display : html});
    return rendered;
});

sync.render("mm_ProcessedNote", function(obj, app, scope) {
    let proc = util.processPage(obj.data.drajules[scope.drajule].info.notes.current, obj, app, scope);
    return proc;
});