// Models you wish to display
var models = [{
    name : "House",
    urn : "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YW1hemluZy1idWNrZXQtMS9yYWNfYmFzaWNfc2FtcGxlX3Byb2plY3QucnZ0"
}, {
    name : "Car",
    urn : "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YW1hemluZy1idWNrZXQtMS9jYXIuZjNk"
}];

function initialize(modelnumber) {
    if (!modelnumber) {
        modelnumber = 0;
    }
    var options = {
        'document' : 'urn:' + models[modelnumber].urn,
        'env':'AutodeskProduction',
        'getAccessToken': getToken,
        'refreshToken': getToken,
        };
    var viewerElement = document.getElementById('viewer');
    var viewer = new Autodesk.Viewing.Viewer3D(viewerElement, {});

    Autodesk.Viewing.Initializer(options,function() {
        viewer.initialize();
        loadDocument(viewer, options.document);
    });
}

function loadDocument(viewer, documentId) {
    // Find the first 3d geometry and load that.
    Autodesk.Viewing.Document.load(documentId, function(doc) {
    var geometryItems = [];
    geometryItems = Autodesk.Viewing.Document.getSubItemsWithProperties(doc.getRootItem(), {
        'type' : 'geometry',
        'role' : '3d'
    }, true);

    if (geometryItems.length > 0) {
        viewer.load(doc.getViewablePath(geometryItems[0]));
    }
 }, function(errorMsg) {// onErrorCallback
    alert("Load Error: " + errorMsg);
    });
}

function getToken() {
    return "8oUyOQkPRqqIJsrD2LvKtdwi0om1";
}

initialize();
