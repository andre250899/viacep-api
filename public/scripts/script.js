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

cep.addEventListener("blur", () => {
  let search = cep.value.replace("-", "");

  console.log(search);

  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then((response) => {
      response.json().then((data) => {
        showData(data);
      });
    })
    .catch((e) => alert("Cep inválido! Tente novamente!"));
});
