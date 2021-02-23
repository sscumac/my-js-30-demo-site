// DOM

const inputs = document.querySelectorAll(".controls input");

console.log(inputs)

// functions

function handleUpdate() {
  console.log(this.value); // (it is always the value of the slider thumb
  console.log(this.dataset.sizing);
  console.log(this.name);

  const suffix = this.dataset.sizing || '';

  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); // whole document is selected and values for our CSS variables set (--base etc.)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); // to enable a value before letting go 