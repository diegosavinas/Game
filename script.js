const gameContainer = document.querySelector(".container"),

    userResult = document.querySelector(".user_result img"),

    cpuResult = document.querySelector(".cpu_result img"),

    result = document.querySelector(".result"),

    optionImages = document.querySelectorAll(".option_image");

 // Agregar event listeners a las imágenes de opción   

optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {

        // Agregar clase activa a la opción seleccionada
        image.classList.add("active");

        // Restablecer imágenes y texto de resultado    
        userResult.src = cpuResult.src = "img/piedra.png";
        result.textContent = "¡Piedra, Papel o Tijera.!"

        // Remover clase activa de las opciones no seleccionadas
        optionImages.forEach((image2, index2) => {

            index !== index2 && image2.classList.remove("active");
        });

        // Agregar clase de inicio al contenedor del juego
        gameContainer.classList.add("start");

        // Ejecutar el juego después de un tiempo
        let time = setTimeout(() =>{
            // Remover clase de inicio del contenedor del juego
            gameContainer.classList.remove("start");

            // Obtener la imagen seleccionada por el usuario
            let imageSrc = e.target.querySelector("img").src;

            userResult.src = imageSrc;
    
            // Obtener un número aleatorio para la opción de la CPU
            let randomNumber = Math.floor(Math.random() * 3);
            
            let cpuImages = ["img/piedra.png", "img/papel.png", "img/tijera.png"];
    
            cpuResult.src = cpuImages[randomNumber];

            // Asignar valores para las opciones de usuario y CPU
            let cpuValue = ["R", "P", "S"][randomNumber];
    
            let userValue = ["R", "P", "S"][index];

            // Calcular el resultado del juego
            let outComeValue;
                if (userValue === cpuValue) {
                    outComeValue = "Empate! (≖_≖ )";
                } else if ((userValue === "R" && cpuValue === "S") || 
                        (userValue === "P" && cpuValue === "R") || 
                        (userValue === "S" && cpuValue === "P")) {
                    outComeValue = "Ganaste! (◠ᴥ◠)";
                } else {
                    outComeValue = "Perdiste! (╥﹏╥)";
                }
    
            result.textContent = outComeValue;
        },2200)

    });
});

