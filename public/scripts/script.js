const cep = document.querySelector("#input-cep");

const showData = (result) => {
  if (result.logradouro != undefined && result.logradouro.length > 0) {
    (document.querySelector("#input-logradouro").value = result.logradouro),
      (document.querySelector("#input-bairro").value = result.bairro),
      (document.querySelector("#input-localidade").value = result.localidade),
      (document.querySelector("#input-uf").value = result.uf);
  } else {
    alert("Cep inválido! Tente novamente!");
  }
};

cep.addEventListener("blur", async function getContent() {
  try {
    let search = await cep.value.replace("-", "");

    const response = await fetch(`https://viacep.com.br/ws/${search}/json/`);

    const data = await response.json();

    await showData(data);
    }
  catch (error) {
    alert("Cep inválido! Tente novamente!");
  }
});
