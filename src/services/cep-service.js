import axios from "axios";

const cepEndpoint = (cep) => {
  return `ws/${cep}/json/`;
};

const cepBaseUrl = axios.create({
  baseURL: "https://viacep.com.br/",
});

export function getCEP(cep, callback) {
  cepBaseUrl
    .get(cepEndpoint(cep))
    .then((response) => callback(response.data))
    .catch((err) => console.log(err));
}
