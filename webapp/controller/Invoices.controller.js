sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"Walkthrough/model/formatter"

], function(Controller,JSONModel,formatter) {
	"use strict";

	return Controller.extend("Walkthrough.controller.Invoices", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Walkthrough.view.Invoices
		 */
		    formatter: formatter,
			onInit: function() {
					var oViewModel = new JSONModel({
						currency: "EUR"
					});
					this.getView().setModel(oViewModel, "view_one");
			}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Walkthrough.view.Invoices
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Walkthrough.view.Invoices
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Walkthrough.view.Invoices
		 */
		//	onExit: function() {
		//
		//	}

	});

});