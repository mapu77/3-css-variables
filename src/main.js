const spacingInput = document.querySelector("#spacing");
const blurInput = document.querySelector("#blur");
const baseInput = document.querySelector("#base");

function handleUpdate() {
    let suffixValue = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffixValue);
}

spacingInput.addEventListener('change', handleUpdate);
blurInput.addEventListener('change', handleUpdate);
baseInput.addEventListener('change', handleUpdate);

spacingInput.addEventListener('mousemove', handleUpdate);
blurInput.addEventListener('mousemove', handleUpdate);
baseInput.addEventListener('mousemove', handleUpdate);