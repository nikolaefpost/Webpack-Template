import camera from "../assets/img/headphone2_hover.png"

export const mult = (a, b) => a * b;
export const sum = async (a, b) => a + b;

const footer = document.querySelector(".img_footer");

const img = new Image();
img.src = camera;
footer.append(img );