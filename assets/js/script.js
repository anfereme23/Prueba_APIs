const pesoChilenoInput = document.querySelector("#pesoChileno")
const slctMoneda = document.querySelector(".slctMoneda")
const btnBuscar = document.querySelector("#btnbuscar")
const resultado = document.querySelector("#resultado")

btnBuscar.addEventListener("click", () => {
  renderConver()
})

async function getConversion() {
  // URL de la API que deseas acceder
  const apiUrl = "https://mindicador.cl/api"
  try {
    const res = await fetch(apiUrl)
    const data = await res.json()
    return data
  } catch (e) {
    alert(`Error: ${e.message}`)
    resultado.textContent = `Error: ${e.message}`
  }
}
//getConversion()

async function renderConver() {
  const monedas = await getConversion()
  const dolar = monedas.dolar.valor
  const euro = monedas.euro.valor

  switch (slctMoneda.value) {
    case "dolar":
      resultado.innerHTML = `${pesoChilenoInput.value / dolar}`
      break
    case "euro":
      resultado.innerHTML = `${pesoChilenoInput.value / euro}`
      break
    default:
      alert("debe seleccionar una divisa")
      break
  }
}

renderConver()
