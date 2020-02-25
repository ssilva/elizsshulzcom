// Author: SauloSilva.com

// My own, extremely simplified jQuery '$' :)
function _(selector) {
	if (!selector) return this;
	return document.getElementById(selector);
}

function attachEvents() {
	window.onload = goToAnchorOnLoad;
	_('select-en').onclick = function(e) {
		show(e.target.lang);
	};
	_('select-fr').onclick = function(e) {
		show(e.target.lang);
	};
	_('select-pt').onclick = function(e) {
		show(e.target.lang);
	};
}

// This function is to allow bookmarking
function goToAnchorOnLoad() {
	var url = location.href;
	var indexOfHash = url.indexOf("#");
	var anchor = url.substring(indexOfHash + 1);
	if(anchor == "en" || anchor == "fr" || anchor == "pt") {
		show(anchor);
	} else { // Default is English
		show("en");
	}
}

function show(lang) {
	// Hide all and display the one selected
	// A little hacky, but it works ;)
	_('en').style.display = "none";
	_('fr').style.display = "none";
	_('pt').style.display = "none";
	_(lang).style.display = "block";

	_('select-en').className = "nonSelectedLang";
	_('select-fr').className = "nonSelectedLang";
	_('select-pt').className = "nonSelectedLang";
	_('select-' + lang).className = 'selectedLang';
}
