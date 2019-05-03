//lista de Botões que Incremetam
var listaButtonIncrement = document.querySelectorAll(".btn_incrementar");
//lista de Botões que Decremetam
var listaInputDecrement = document.querySelectorAll(".btn_decrementar");

//adicionar a operação de Incremente
for (let buttonIncrement of listaButtonIncrement) {
    buttonIncrement.addEventListener("click", function () {
        let item = buttonIncrement.closest(".item");
        let inputValor = item.querySelector(".valor_item");
        inputValor.value++;
    });
};

//adicionar a operação de Decremente
for (let buttonDecrement of listaInputDecrement) {
    buttonDecrement.addEventListener("click", function () {
        let item = buttonDecrement.closest(".item");
        let inputValor = item.querySelector(".valor_item");
        inputValor.value--;
    });
};
