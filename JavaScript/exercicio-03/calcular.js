function calcular() {
    const medidaMetros = Number(prompt(`Insira uma medida em METROS:`))
    const opcoesMedidas = prompt(`Milímetros (mm) \n Centímetro (cm) \n Decímetro (dm) \n Decâmetro (dam) \n Hectômetro (hm) \n Quilômetro (km)`)
    let resultado = 0

    switch (opcoesMedidas) {
        case "mm": 
            resultado = medidaMetros * 1000
            alert(`A medida Convertida é ${resultado} Milímetros`)
        break
        case 'cm': 
            resultado = medidaMetros * 100
            alert(`A medida Convertida é ${resultado} Centímetros`)
        break
        case 'dm': 
            resultado = medidaMetros * 10
            alert(`A medida Convertida é ${resultado} Decímetros`)
        break
        case 'dam': 
            resultado = medidaMetros * 0.1
            alert(`A medida Convertida é ${resultado} Decâmetros`)
        break
        case 'hm': 
            resultado = medidaMetros * 0.01
            alert(`A medida Convertida é ${resultado} Hectômetros`)
        break
        case 'km':
             resultado = medidaMetros * 0.001
             alert(`A medida Convertida é ${resultado} Quilômetros`)
        break
        default: 
            alert(`A medida escolhido é INVÁLIDA, tente novamente`)
    }
}