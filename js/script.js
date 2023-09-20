function CalculaAgua() {
    let span = document.querySelector('span')
    let peso = document.querySelector('input').value
    let result = peso * 35
    console.log(result)
    return span.innerText = `Com base em seu peso corporal você deve beber ${result} ml de água por dia`
}