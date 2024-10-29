var observer = new MutationObserver(() => {
	observer.disconnect();
	patchCodeblocks();
	observer.observe(document, { childList: true, subtree: true });
});

function patchCodeblocks() {
	document.querySelectorAll(".shiki.monokai:has(button.copy-button)").forEach(code => {
		code.removeAttribute("title");

		const div = document.createElement("div");
		div.className = "copy-button";
		code.appendChild(div);

		if (["pluto", "lua"].indexOf(code.querySelector(".language-id")?.textContent) != -1 && !code.hasAttribute("norun")) {
			const button = document.createElement("button");
			button.textContent = "Try It";
			button.onclick = () => {
				window.open("https://pluto-lang.org/web/#code=" + encodeURIComponent([...code.querySelectorAll(".code-container .line")].map(x => x.textContent).join("\n")));
			};
			div.appendChild(button);
		}

		div.appendChild(code.querySelector(".copy-button")).className = "";
	});
}

patchCodeblocks();
observer.observe(document, { childList: true, subtree: true });
