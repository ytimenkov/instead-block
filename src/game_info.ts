export interface GameMetaData {
    name: string;
    version: string;
    author: string;
};

export async function showInfoDialog(data?: GameMetaData): Promise<GameMetaData | undefined> {
    const backdropDiv = document.createElement('div');
    const style = backdropDiv.style;
    style.position = "absolute";
    style.top = "0";
    style.left = "0";
    style.right = "0";
    style.bottom = "0";
    style.backgroundColor = "rgba(0, 0, 0, .7)";
    style.zIndex = "100"
    style.display = "block";

    try {
        document.body.appendChild(backdropDiv);
        backdropDiv.innerHTML = require("./game_info.html");
        // const dialog = document.getElementById("game_info_dialog") as HTMLElement;
        // dialog.onclick = (e) => { e.stopPropagation(); };
        const okButton = document.getElementById("game_info_dialog_ok") as HTMLButtonElement;
        const cancelButton = document.getElementById("game_info_dialog_cancel") as HTMLButtonElement;
        const nameField = document.getElementById("game_info_dialog_name") as HTMLInputElement;
        const authorField = document.getElementById("game_info_dialog_author") as HTMLInputElement;
        const versionField = document.getElementById("game_info_dialog_version") as HTMLInputElement;

        if (data) {
            nameField.value = data.name;
            authorField.value = data.author;
            versionField.value = data.version;
        }

        return await new Promise<GameMetaData | undefined>((resolve, reject) => {
            okButton.onclick = (e) => {
                resolve({
                    name: nameField.value,
                    author: authorField.value,
                    version: versionField.value,
                });
            };
            cancelButton.onclick = (e) => {
                resolve();
            }
        });
    } finally {
        backdropDiv.remove();
    }
}
