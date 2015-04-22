# Simple Angular.js + Node.js + Autodesk Viewer API App
In this tutorial we will make an app that display a few 3D models on your page with Angular.js and Node.js!

## Setting Up
Create `index.html` and `app.js`

Reference the following:
```
<script type="text/javascript" src="angular.min.js"></script>
<script type="text/javascript" src="app.js"></script>
```

## The Scope
index.html:
```
<html ng-app="myApp">
```
App.js
```
var app = angular.module("myApp", []);
```

## Controller
index.html:
```
<section ng-controller="PanelController as panel">
	<ul class="nav nav-pills">
		<li ng-class="{ active:panel.isSelected(0) }">
			<a href ng-click="panel.selectTab(0)">House</a>
		</li>
		<li ng-class="{ active:panel.isSelected(1) }">
			<a href ng-click="panel.selectTab(1)">Car</a>
		</li>
	</ul>
</section>
```

app.js:
```
app.controller ("PanelController", function () {
	this.tab = 0;

	this.selectTab = function (setTab) {
		this.tab = setTab;
	};
	this.isSelected = function (checkTab) {
		return this.tab === checkTab;
	}
});
```

## To include the 3D viewer on your page
Reference JS libraries
```
<link rel="stylesheet" href="https://viewing.api.autodesk.com/viewingservice/v1/viewers/style.css" type="text/css">
<script src="https://viewing.api.autodesk.com/viewingservice/v1/viewers/viewer3D.min.js"></script>
```

Put a div element with id "viewer"
```
<div id="viewer" class="col-md-11" style="height:600px;"></div>
```

Include `viewer.js` in your `index.html`
```
<script type="text/javascript" src="./viewer.js"></script>
```

Initialize in your tab selectTab function
```
initialize(setTab);
```

## Run the app
Go to your folder in terminal, type `python -m SimpleHTTPServer`
Open the app in `http://localhost:8000/`

## Best Practices

#### Good vs Bad experience
Shopping Cart
- [Amazon Shopping Cart](http://www.amazon.com/gp/cart/view.html/ref=nav_flyout_viewcart?ie=UTF8&hasWorkingJavascript=1)
- [Target Shopping Cart](http://www.target.com/checkout_cartview?updatePrices=1&calculationUsageId=-1&calculationUsageId=-2&calculationUsageId=-7&orderId=.&lnk=atc_overlay)
- [Simple Shopping Cart](http://jsfiddle.net/slav123/75m7e/3/)

#### A more comprehensive example...
https://github.com/Developer-Autodesk/workflow-node-angular-view.and.data.api

#### Architecting an entire app
https://github.com/angular/angular-seed
