
	  	 (function(){
			var template = HandlebarsCustom.template, templates = HandlebarsCustom.templates = HandlebarsCustom.templates || {};
				templates['plugin-configurable-option'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"form-group "
    + container.escapeExpression(((helper = (helper = helpers.formGroupClass || (depth0 != null ? depth0.formGroupClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"formGroupClass","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.visibleOnCode : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.requiredOnCode : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" style=\"display:none;\">\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " visible-on-wrapper";
},"4":function(container,depth0,helpers,partials,data) {
    return " require-on-wrapper";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"form-group "
    + container.escapeExpression(((helper = (helper = helpers.formGroupClass || (depth0 != null ? depth0.formGroupClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"formGroupClass","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.visibleOnCode : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.requiredOnCode : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	<label class=\"control-label col-sm-3\" for=\""
    + container.escapeExpression(((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"code","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.label : depth0),undefined,(depth0 != null ? depth0.defaultLabel : depth0),{"name":"i18n","hash":{},"data":data}))
    + "</label>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "lockable";
},"12":function(container,depth0,helpers,partials,data) {
    return "checkbox-container col-sm-offset-3";
},"14":function(container,depth0,helpers,partials,data) {
    return "			<span class=\"required-bar\"></span>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.hideLock : depth0),{"name":"unless","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "			<label class=\"hide-toggle\" "
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.canHide : depth0),{"name":"unless","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n				<input type=\"checkbox\" class=\"hide\" name=\"hide."
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" data-for-hidden=\""
    + container.escapeExpression(((helper = (helper = helpers.lockName || (depth0 != null ? depth0.lockName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"lockName","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.excludeFromSearch : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/>\n			</label>\n			<label class=\"lock\" "
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.canLock : depth0),{"name":"unless","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n				<input type=\"checkbox\" class=\"lock\" name=\"lock."
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" data-for=\""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.excludeFromSearch : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/>\n			</label>\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "style=\"display:none;\"";
},"20":function(container,depth0,helpers,partials,data) {
    return "exclude-search=\"true\"";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "			<input type=\"hidden\" id=\""
    + container.escapeExpression(((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"code","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control input-sm "
    + container.escapeExpression(((helper = (helper = helpers.fieldClass || (depth0 != null ? depth0.fieldClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"fieldClass","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + container.escapeExpression(((helper = (helper = helpers.placeHolder || (depth0 != null ? depth0.placeHolder : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"placeHolder","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" data-option-type-id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-code=\""
    + container.escapeExpression(((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"code","hash":{},"data":data}) : helper)))
    + "\" data-depends-on-code=\""
    + container.escapeExpression(((helper = (helper = helpers.dependsOnCode || (depth0 != null ? depth0.dependsOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dependsOnCode","hash":{},"data":data}) : helper)))
    + "\" data-depends-on-value=\""
    + container.escapeExpression(((helper = (helper = helpers.dependsOnValue || (depth0 != null ? depth0.dependsOnValue : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dependsOnValue","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.excludeFromSearch : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/>\n";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.addOn : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			<input type=\"text\" id=\""
    + container.escapeExpression(((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"code","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control input-sm "
    + container.escapeExpression(((helper = (helper = helpers.fieldClass || (depth0 != null ? depth0.fieldClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"fieldClass","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + container.escapeExpression(((helper = (helper = helpers.placeHolder || (depth0 != null ? depth0.placeHolder : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"placeHolder","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" data-option-type-id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-code=\""
    + container.escapeExpression(((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"code","hash":{},"data":data}) : helper)))
    + "\" data-depends-on-code=\""
    + container.escapeExpression(((helper = (helper = helpers.dependsOnCode || (depth0 != null ? depth0.dependsOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dependsOnCode","hash":{},"data":data}) : helper)))
    + "\" data-depends-on-value=\""
    + container.escapeExpression(((helper = (helper = helpers.dependsOnValue || (depth0 != null ? depth0.dependsOnValue : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dependsOnValue","hash":{},"data":data}) : helper)))
    + "\" autocomplete=\"new-username\" data-visible-on=\""
    + container.escapeExpression(((helper = (helper = helpers.visibleOnCode || (depth0 != null ? depth0.visibleOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"visibleOnCode","hash":{},"data":data}) : helper)))
    + "\" data-required-on=\""
    + container.escapeExpression(((helper = (helper = helpers.requiredOnCode || (depth0 != null ? depth0.requiredOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"requiredOnCode","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.excludeFromSearch : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/>\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.addOn : depth0),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"25":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<div class=\"input-group input-group-sm "
    + container.escapeExpression(((helper = (helper = helpers.inputGroupClass || (depth0 != null ? depth0.inputGroupClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"inputGroupClass","hash":{},"data":data}) : helper)))
    + "\">\n";
},"27":function(container,depth0,helpers,partials,data) {
    var helper;

  return "					<span class=\"input-group-addon\">"
    + container.escapeExpression(((helper = (helper = helpers.addOnLabel || (depth0 != null ? depth0.addOnLabel : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"addOnLabel","hash":{},"data":data}) : helper)))
    + "</span>\n				</div>\n";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.addOn : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			<input type=\"number\" min=\""
    + container.escapeExpression(((helper = (helper = helpers.minValue || (depth0 != null ? depth0.minValue : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"minValue","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + container.escapeExpression(((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"code","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control input-sm "
    + container.escapeExpression(((helper = (helper = helpers.fieldClass || (depth0 != null ? depth0.fieldClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"fieldClass","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + container.escapeExpression(((helper = (helper = helpers.placeHolder || (depth0 != null ? depth0.placeHolder : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"placeHolder","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" data-option-type-id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-code=\""
    + container.escapeExpression(((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"code","hash":{},"data":data}) : helper)))
    + "\" data-depends-on-code=\""
    + container.escapeExpression(((helper = (helper = helpers.dependsOnCode || (depth0 != null ? depth0.dependsOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dependsOnCode","hash":{},"data":data}) : helper)))
    + "\" data-depends-on-value=\""
    + container.escapeExpression(((helper = (helper = helpers.dependsOnValue || (depth0 != null ? depth0.dependsOnValue : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dependsOnValue","hash":{},"data":data}) : helper)))
    + "\" data-visible-on=\""
    + container.escapeExpression(((helper = (helper = helpers.visibleOnCode || (depth0 != null ? depth0.visibleOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"visibleOnCode","hash":{},"data":data}) : helper)))
    + "\" data-required-on=\""
    + container.escapeExpression(((helper = (helper = helpers.requiredOnCode || (depth0 != null ? depth0.requiredOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"requiredOnCode","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.excludeFromSearch : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/>\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.addOn : depth0),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"31":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "			<input type=\"password\" id=\""
    + container.escapeExpression(((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"code","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control input-sm "
    + container.escapeExpression(((helper = (helper = helpers.fieldClass || (depth0 != null ? depth0.fieldClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"fieldClass","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + container.escapeExpression(((helper = (helper = helpers.placeHolder || (depth0 != null ? depth0.placeHolder : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"placeHolder","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" data-option-type-id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-code=\""
    + container.escapeExpression(((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"code","hash":{},"data":data}) : helper)))
    + "\" data-depends-on-code=\""
    + container.escapeExpression(((helper = (helper = helpers.dependsOnCode || (depth0 != null ? depth0.dependsOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dependsOnCode","hash":{},"data":data}) : helper)))
    + "\" data-depends-on-value=\""
    + container.escapeExpression(((helper = (helper = helpers.dependsOnValue || (depth0 != null ? depth0.dependsOnValue : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dependsOnValue","hash":{},"data":data}) : helper)))
    + "\" autocomplete=\"new-password\" data-visible-on=\""
    + container.escapeExpression(((helper = (helper = helpers.visibleOnCode || (depth0 != null ? depth0.visibleOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"visibleOnCode","hash":{},"data":data}) : helper)))
    + "\" data-required-on=\""
    + container.escapeExpression(((helper = (helper = helpers.requiredOnCode || (depth0 != null ? depth0.requiredOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"requiredOnCode","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.excludeFromSearch : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n";
},"33":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "			<m-typeahead class=\"custom-form-element "
    + container.escapeExpression(((helper = (helper = helpers.fieldClass || (depth0 != null ? depth0.fieldClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"fieldClass","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + container.escapeExpression(((helper = (helper = helpers.placeHolder || (depth0 != null ? depth0.placeHolder : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"placeHolder","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" config=\""
    + container.escapeExpression(((helper = (helper = helpers.configStr || (depth0 != null ? depth0.configStr : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"configStr","hash":{},"data":data}) : helper)))
    + "\" data-depends-on-code=\""
    + container.escapeExpression(((helper = (helper = helpers.dependsOnCode || (depth0 != null ? depth0.dependsOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dependsOnCode","hash":{},"data":data}) : helper)))
    + "\" data-depends-on-value=\""
    + container.escapeExpression(((helper = (helper = helpers.dependsOnValue || (depth0 != null ? depth0.dependsOnValue : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dependsOnValue","hash":{},"data":data}) : helper)))
    + "\" autocomplete=\"new-password\" data-visible-on=\""
    + container.escapeExpression(((helper = (helper = helpers.visibleOnCode || (depth0 != null ? depth0.visibleOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"visibleOnCode","hash":{},"data":data}) : helper)))
    + "\" data-required-on=\""
    + container.escapeExpression(((helper = (helper = helpers.requiredOnCode || (depth0 != null ? depth0.requiredOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"requiredOnCode","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.excludeFromSearch : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "></m-typeahead>\n";
},"35":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "			<m-radio-group class=\"custom-form-element "
    + container.escapeExpression(((helper = (helper = helpers.fieldClass || (depth0 != null ? depth0.fieldClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"fieldClass","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + container.escapeExpression(((helper = (helper = helpers.placeHolder || (depth0 != null ? depth0.placeHolder : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"placeHolder","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" config=\""
    + container.escapeExpression(((helper = (helper = helpers.configStr || (depth0 != null ? depth0.configStr : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"configStr","hash":{},"data":data}) : helper)))
    + "\" data-depends-on-code=\""
    + container.escapeExpression(((helper = (helper = helpers.dependsOnCode || (depth0 != null ? depth0.dependsOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dependsOnCode","hash":{},"data":data}) : helper)))
    + "\" data-depends-on-value=\""
    + container.escapeExpression(((helper = (helper = helpers.dependsOnValue || (depth0 != null ? depth0.dependsOnValue : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dependsOnValue","hash":{},"data":data}) : helper)))
    + "\" autocomplete=\"new-password\" data-visible-on=\""
    + container.escapeExpression(((helper = (helper = helpers.visibleOnCode || (depth0 != null ? depth0.visibleOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"visibleOnCode","hash":{},"data":data}) : helper)))
    + "\" data-required-on=\""
    + container.escapeExpression(((helper = (helper = helpers.requiredOnCode || (depth0 != null ? depth0.requiredOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"requiredOnCode","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.excludeFromSearch : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n			</m-radio-group>\n";
},"37":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "			<label class=\"\">\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.isChecked : depth0),{"name":"if","hash":{},"fn":container.program(38, data, 0),"inverse":container.program(40, data, 0),"data":data})) != null ? stack1 : "")
    + "			<span class=\"custom\"></span>\n			<input type=\"hidden\" name=\""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" value="
    + container.escapeExpression(((helper = (helper = helpers.checkedValue || (depth0 != null ? depth0.checkedValue : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"checkedValue","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.excludeFromSearch : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/>\n			<span class=\"control-label\">"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.label : depth0),undefined,(depth0 != null ? depth0.defaultLabel : depth0),{"name":"i18n","hash":{},"data":data}))
    + "</span></label>\n";
},"38":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "				<input type=\"checkbox\" id=\""
    + container.escapeExpression(((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"code","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control "
    + container.escapeExpression(((helper = (helper = helpers.fieldClass || (depth0 != null ? depth0.fieldClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"fieldClass","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + container.escapeExpression(((helper = (helper = helpers.hiddenName || (depth0 != null ? depth0.hiddenName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"hiddenName","hash":{},"data":data}) : helper)))
    + "\" checked=\"true\" data-option-type-id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-code=\""
    + container.escapeExpression(((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"code","hash":{},"data":data}) : helper)))
    + "\" data-depends-on-code=\""
    + container.escapeExpression(((helper = (helper = helpers.dependsOnCode || (depth0 != null ? depth0.dependsOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dependsOnCode","hash":{},"data":data}) : helper)))
    + "\" data-depends-on-value=\""
    + container.escapeExpression(((helper = (helper = helpers.dependsOnValue || (depth0 != null ? depth0.dependsOnValue : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dependsOnValue","hash":{},"data":data}) : helper)))
    + "\" data-visible-on=\""
    + container.escapeExpression(((helper = (helper = helpers.visibleOnCode || (depth0 != null ? depth0.visibleOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"visibleOnCode","hash":{},"data":data}) : helper)))
    + "\" data-required-on=\""
    + container.escapeExpression(((helper = (helper = helpers.requiredOnCode || (depth0 != null ? depth0.requiredOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"requiredOnCode","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.excludeFromSearch : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/>\n";
},"40":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "				<input type=\"checkbox\" id=\""
    + container.escapeExpression(((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"code","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control "
    + container.escapeExpression(((helper = (helper = helpers.fieldClass || (depth0 != null ? depth0.fieldClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"fieldClass","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + container.escapeExpression(((helper = (helper = helpers.hiddenName || (depth0 != null ? depth0.hiddenName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"hiddenName","hash":{},"data":data}) : helper)))
    + "\" data-option-type-id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-code=\""
    + container.escapeExpression(((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"code","hash":{},"data":data}) : helper)))
    + "\" data-depends-on-code=\""
    + container.escapeExpression(((helper = (helper = helpers.dependsOnCode || (depth0 != null ? depth0.dependsOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dependsOnCode","hash":{},"data":data}) : helper)))
    + "\" data-depends-on-value=\""
    + container.escapeExpression(((helper = (helper = helpers.dependsOnValue || (depth0 != null ? depth0.dependsOnValue : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dependsOnValue","hash":{},"data":data}) : helper)))
    + "\" data-visible-on=\""
    + container.escapeExpression(((helper = (helper = helpers.visibleOnCode || (depth0 != null ? depth0.visibleOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"visibleOnCode","hash":{},"data":data}) : helper)))
    + "\" data-required-on=\""
    + container.escapeExpression(((helper = (helper = helpers.requiredOnCode || (depth0 != null ? depth0.requiredOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"requiredOnCode","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.excludeFromSearch : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/>\n";
},"42":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.optionSource : depth0),{"name":"if","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(45, data, 0),"data":data})) != null ? stack1 : "");
},"43":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "				<m-multi-select class=\"custom-form-element "
    + container.escapeExpression(((helper = (helper = helpers.fieldClass || (depth0 != null ? depth0.fieldClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"fieldClass","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" config=\""
    + container.escapeExpression(((helper = (helper = helpers.configStr || (depth0 != null ? depth0.configStr : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"configStr","hash":{},"data":data}) : helper)))
    + "\" data-editable=\""
    + container.escapeExpression(((helper = (helper = helpers.editable || (depth0 != null ? depth0.editable : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"editable","hash":{},"data":data}) : helper)))
    + "\" data-visible-on=\""
    + container.escapeExpression(((helper = (helper = helpers.visibleOnCode || (depth0 != null ? depth0.visibleOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"visibleOnCode","hash":{},"data":data}) : helper)))
    + "\" data-depends-on-code=\""
    + container.escapeExpression(((helper = (helper = helpers.dependsOnCode || (depth0 != null ? depth0.dependsOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dependsOnCode","hash":{},"data":data}) : helper)))
    + "\" data-depends-on-value=\""
    + container.escapeExpression(((helper = (helper = helpers.dependsOnValue || (depth0 != null ? depth0.dependsOnValue : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dependsOnValue","hash":{},"data":data}) : helper)))
    + "\" data-required-on=\""
    + container.escapeExpression(((helper = (helper = helpers.requiredOnCode || (depth0 != null ? depth0.requiredOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"requiredOnCode","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.excludeFromSearch : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "></m-multi-select>\n";
},"45":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "				<select id=\""
    + container.escapeExpression(((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"code","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control input-sm "
    + container.escapeExpression(((helper = (helper = helpers.fieldClass || (depth0 != null ? depth0.fieldClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"fieldClass","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" data-value=\""
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" data-no-blank=\""
    + container.escapeExpression(((helper = (helper = helpers.noBlank || (depth0 != null ? depth0.noBlank : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"noBlank","hash":{},"data":data}) : helper)))
    + "\" data-option-type-id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-code=\""
    + container.escapeExpression(((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"code","hash":{},"data":data}) : helper)))
    + "\" data-default-value=\""
    + container.escapeExpression(((helper = (helper = helpers.defaultValue || (depth0 != null ? depth0.defaultValue : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"defaultValue","hash":{},"data":data}) : helper)))
    + "\" data-visible-on=\""
    + container.escapeExpression(((helper = (helper = helpers.visibleOnCode || (depth0 != null ? depth0.visibleOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"visibleOnCode","hash":{},"data":data}) : helper)))
    + "\" data-depends-on-code=\""
    + container.escapeExpression(((helper = (helper = helpers.dependsOnCode || (depth0 != null ? depth0.dependsOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dependsOnCode","hash":{},"data":data}) : helper)))
    + "\" data-required-on=\""
    + container.escapeExpression(((helper = (helper = helpers.requiredOnCode || (depth0 != null ? depth0.requiredOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"requiredOnCode","hash":{},"data":data}) : helper)))
    + "\" data-depends-on-value=\""
    + container.escapeExpression(((helper = (helper = helpers.dependsOnValue || (depth0 != null ? depth0.dependsOnValue : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dependsOnValue","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.noOptions : depth0),{"name":"if","hash":{},"fn":container.program(46, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.excludeFromSearch : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.noBlank : depth0),{"name":"unless","hash":{},"fn":container.program(48, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":container.program(50, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</select>\n";
},"46":function(container,depth0,helpers,partials,data) {
    return "disabled=\"disabled\"";
},"48":function(container,depth0,helpers,partials,data) {
    return "						<option value=\"\">"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0,"gomorpheus.label.select",{"name":"i18n","hash":{},"data":data}))
    + "</option>\n";
},"50":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.isSelected : depth0),{"name":"if","hash":{},"fn":container.program(51, data, 0),"inverse":container.program(53, data, 0),"data":data})) != null ? stack1 : "");
},"51":function(container,depth0,helpers,partials,data) {
    return "							<option value=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.value : depth0), depth0))
    + "\" selected>"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</option>\n";
},"53":function(container,depth0,helpers,partials,data) {
    return "							<option value=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.value : depth0), depth0))
    + "\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</option>\n";
},"55":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "			<textarea data-format=\""
    + container.escapeExpression(((helper = (helper = helpers.codeFormat || (depth0 != null ? depth0.codeFormat : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"codeFormat","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + container.escapeExpression(((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"code","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control input-sm spud-formatted-editor\" name=\""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + container.escapeExpression(((helper = (helper = helpers.placeHolder || (depth0 != null ? depth0.placeHolder : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"placeHolder","hash":{},"data":data}) : helper)))
    + "\" data-visible-on=\""
    + container.escapeExpression(((helper = (helper = helpers.visibleOnCode || (depth0 != null ? depth0.visibleOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"visibleOnCode","hash":{},"data":data}) : helper)))
    + "\" data-required-on=\""
    + container.escapeExpression(((helper = (helper = helpers.requiredOnCode || (depth0 != null ? depth0.requiredOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"requiredOnCode","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.excludeFromSearch : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "</textarea>\n";
},"57":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "			<textarea id=\""
    + container.escapeExpression(((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"code","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control input-sm "
    + container.escapeExpression(((helper = (helper = helpers.fieldClass || (depth0 != null ? depth0.fieldClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"fieldClass","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + container.escapeExpression(((helper = (helper = helpers.placeHolder || (depth0 != null ? depth0.placeHolder : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"placeHolder","hash":{},"data":data}) : helper)))
    + "\" data-visible-on=\""
    + container.escapeExpression(((helper = (helper = helpers.visibleOnCode || (depth0 != null ? depth0.visibleOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"visibleOnCode","hash":{},"data":data}) : helper)))
    + "\" data-required-on=\""
    + container.escapeExpression(((helper = (helper = helpers.requiredOnCode || (depth0 != null ? depth0.requiredOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"requiredOnCode","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.excludeFromSearch : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "</textarea>\n";
},"59":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "			<input type=\"text\" class=\"typeahead form-control input-sm "
    + container.escapeExpression(((helper = (helper = helpers.fieldClass || (depth0 != null ? depth0.fieldClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"fieldClass","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + container.escapeExpression(((helper = (helper = helpers.placeHolder || (depth0 != null ? depth0.placeHolder : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"placeHolder","hash":{},"data":data}) : helper)))
    + "\" value="
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + " data-depends-on-code=\""
    + container.escapeExpression(((helper = (helper = helpers.dependsOnCode || (depth0 != null ? depth0.dependsOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dependsOnCode","hash":{},"data":data}) : helper)))
    + "\" data-depends-on-value=\""
    + container.escapeExpression(((helper = (helper = helpers.dependsOnValue || (depth0 != null ? depth0.dependsOnValue : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dependsOnValue","hash":{},"data":data}) : helper)))
    + "\" data-visible-on=\""
    + container.escapeExpression(((helper = (helper = helpers.visibleOnCode || (depth0 != null ? depth0.visibleOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"visibleOnCode","hash":{},"data":data}) : helper)))
    + "\" data-required-on=\""
    + container.escapeExpression(((helper = (helper = helpers.requiredOnCode || (depth0 != null ? depth0.requiredOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"requiredOnCode","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.excludeFromSearch : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/>\n";
},"61":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<button class=\"configure-instance\">"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0,"gomorpheus.label.configure",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.configEditable : depth0),{"name":"if","hash":{},"fn":container.program(62, data, 0),"inverse":container.program(64, data, 0),"data":data})) != null ? stack1 : "");
},"62":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "				<textarea data-format=\""
    + container.escapeExpression(((helper = (helper = helpers.codeFormat || (depth0 != null ? depth0.codeFormat : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"codeFormat","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + container.escapeExpression(((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"code","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control input-sm spud-formatted-editor\" name=\""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + container.escapeExpression(((helper = (helper = helpers.placeHolder || (depth0 != null ? depth0.placeHolder : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"placeHolder","hash":{},"data":data}) : helper)))
    + "\" data-visible-on=\""
    + container.escapeExpression(((helper = (helper = helpers.visibleOnCode || (depth0 != null ? depth0.visibleOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"visibleOnCode","hash":{},"data":data}) : helper)))
    + "\" data-required-on=\""
    + container.escapeExpression(((helper = (helper = helpers.requiredOnCode || (depth0 != null ? depth0.requiredOnCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"requiredOnCode","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.excludeFromSearch : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "</textarea>\n";
},"64":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "				<input type=\"hidden\" name=\""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.excludeFromSearch : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/>\n";
},"66":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<button class=\"configure-app\">"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0,"gomorpheus.label.configure",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.configEditable : depth0),{"name":"if","hash":{},"fn":container.program(55, data, 0),"inverse":container.program(64, data, 0),"data":data})) != null ? stack1 : "");
},"68":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "			<div class=\"icon-picker\" data-name="
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + " data-context=\""
    + container.escapeExpression(((helper = (helper = helpers.context || (depth0 != null ? depth0.context : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"context","hash":{},"data":data}) : helper)))
    + "\" data-icon-path=\""
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.excludeFromSearch : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "></div>\n			<label class=\"file-label catalog-logo\" uploadtxt=\""
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0,"gomorpheus.action.uploadPhoto",{"name":"i18n","hash":{},"data":data}))
    + "\" style=\"display:none;\">\n			<input type=\"file\" class=\"form-control icon-picker-file\" name=\""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" data-preview disabled=\"disabled\" "
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.excludeFromSearch : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/>\n			<span class=\"file-name\" style=\"display:none;\"></span>\n			</label>\n";
},"70":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "			<div>\n		"
    + ((stack1 = ((helper = (helper = helpers.customElement || (depth0 != null ? depth0.customElement : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"customElement","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n		</div>\n";
},"72":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "		<div class=\"help-block\" block-text=\"\">"
    + ((stack1 = ((helper = (helper = helpers.helpBlock || (depth0 != null ? depth0.helpBlock : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"helpBlock","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.hidden : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.isCheckbox : depth0),{"name":"unless","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		<div class=\"col-sm-9 "
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.hideLock : depth0),{"name":"unless","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + container.escapeExpression(((helper = (helper = helpers.blockClass || (depth0 != null ? depth0.blockClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"blockClass","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.isCheckbox : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.isHidden : depth0),{"name":"unless","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.isHidden : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.isText : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.isNumber : depth0),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.isPassword : depth0),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.isMultiTypeahead : depth0),{"name":"if","hash":{},"fn":container.program(33, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.isRadio : depth0),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.isCheckbox : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.isSelect : depth0),{"name":"if","hash":{},"fn":container.program(42, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.isCodeEditor : depth0),{"name":"if","hash":{},"fn":container.program(55, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.isTextarea : depth0),{"name":"if","hash":{},"fn":container.program(57, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.isTypeahead : depth0),{"name":"if","hash":{},"fn":container.program(59, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.isInstanceWiz : depth0),{"name":"if","hash":{},"fn":container.program(61, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.isAppWiz : depth0),{"name":"if","hash":{},"fn":container.program(66, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.isLogo : depth0),{"name":"if","hash":{},"fn":container.program(68, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.isCustomElement : depth0),{"name":"if","hash":{},"fn":container.program(70, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.helpBlock : depth0),{"name":"if","hash":{},"fn":container.program(72, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		<div class=\"help-block error-block\" error-for=\""
    + container.escapeExpression(((helper = (helper = helpers.errorName || (depth0 != null ? depth0.errorName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"errorName","hash":{},"data":data}) : helper)))
    + "\"></div>\n	</div>\n</div>\n";
},"useData":true});
		}());
	  	
