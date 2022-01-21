// ==UserScript==
// @name         Pixiv Browsing History Without Premium
// @namespace    https://www.pixiv.net/
// @version      1.0
// @description  View your Pixiv browsing history without premium.
// @author       flazepe
// @match        https://www.pixiv.net/history.php
// @grant        none
// ==/UserScript==

(function() {
	"use strict";

	document.querySelector("._history-invitation-modal").remove();

	setInterval(() => {
		for (const element of document.querySelectorAll("._history-item.trial")) {
			if (!element.classList.value.includes("trial")) continue;
			element.classList = "_history-item";
			element.style.cursor = "pointer";
			element.onclick = () => window.open(`https://www.pixiv.net/en/artworks/${element.style.backgroundImage.split("/").pop().split("_").shift()}`);
		}
	}, 100);
})();
