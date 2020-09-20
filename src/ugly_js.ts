function switchTab(idx: number) {
    const container = document.getElementById("preview-pane");
    if (!container) {
        return;
    }

    const buttons = container.getElementsByClassName("btn");

    for (let i = 0, btn: HTMLButtonElement; (btn = buttons[i] as HTMLButtonElement); i++) {
        if (i == idx) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    }

    const panes = container.getElementsByTagName("section");
    for (let i = 0, pane; (pane = panes[i]); i++) {
        if (i == idx) {
            pane.removeAttribute("aria-hidden");
        } else {
            pane.setAttribute("aria-hidden", "true");
        }
    }
}

export function bindTabs() {
    const container = document.getElementById("preview-pane");
    if (!container) {
        return;
    }

    const buttons = container.getElementsByClassName("btn");
    for (let i = 0, btn: HTMLButtonElement; (btn = buttons[i] as HTMLButtonElement); i++) {
        (btn as HTMLButtonElement).onclick = (e) => switchTab(i);
    }
}
