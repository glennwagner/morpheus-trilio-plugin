package com.morpheusdata.guidance

import com.morpheusdata.core.Plugin

public class GuidancePlugin extends Plugin {

	@Override
	void initialize() {
		this.setName("Agent Upgrade Check")
		this.registerProvider(new GuidanceProvider(this,morpheus))
	}

	@Override
	void onDestroy() {

	}

	@Override
	String getCode() {
		return "morpheus-guidance-plugin"
	}
}