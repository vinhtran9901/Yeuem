/* script.js */
function showQuestion() {
    alert("Bạn có muốn tham gia trò chơi dễ thương không?");
}

function showMessage() {
    alert("Chúc bạn một ngày tràn đầy niềm vui và hạnh phúc!");
}

document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-music");
    audio.volume = 0.5;
    
    // Thêm hiệu ứng chuyển động cho các nhân vật (di chuyển lên xuống liên tục)
    const characters = document.querySelectorAll(".character");
    characters.forEach(character => {
        character.style.position = "relative";
        character.animate(
            [
                { transform: "translateY(0px)" },
                { transform: "translateY(-10px)" },
                { transform: "translateY(0px)" }
            ], 
            {
                duration: 2000,
                iterations: Infinity,
                easing: "ease-in-out"
            }
        );
    });
});
