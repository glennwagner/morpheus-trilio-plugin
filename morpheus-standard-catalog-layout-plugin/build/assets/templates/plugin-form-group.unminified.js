
	  	 (function(){
			var template = HandlebarsCustom.template, templates = HandlebarsCustom.templates = HandlebarsCustom.templates || {};
				templates['plugin-form-group'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "collapsed";
},"3":function(container,depth0,helpers,partials,data) {
    return " collapsible=\"\" ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<fieldset>\n	<legend class=\""
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.isCollapsed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" "
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.isCollapsible : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</legend>\n	<div group-code=\""
    + ((stack1 = ((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"code","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\"></div>\n</fieldset>";
},"useData":true});
		}());
	  	
