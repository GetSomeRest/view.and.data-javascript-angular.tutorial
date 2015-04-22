var app = angular.module("myApp", []);

app.controller ("PanelController", function () {
	this.tab = 0;

	this.selectTab = function (setTab) {
		this.tab = setTab;
		initialize(setTab);
	};
	this.isSelected = function (checkTab) {
		return this.tab === checkTab;
	}
});