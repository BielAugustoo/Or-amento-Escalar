function getSelectedPlan(value) {
  const divGraph = document.getElementsByClassName('showGraph')
  const canBronze = document.getElementById('bronze')
  const canPrata = document.getElementById('prata')
  const canOuro = document.getElementById('ouro')
  const canDiamante = document.getElementById('diamante')
  const mensality = document.getElementById('mensality')

  if (value === 'PlanoBronze') {
    chartBronze()
    canBronze.style.display = 'block'
    canPrata.style.display = 'none'
    canOuro.style.display = 'none'
    canDiamante.style.display = 'none'
    mensality.innerHTML = 'R$ 390'
  } else if (value === 'PlanoPrata') {
    chartPrata()
    canPrata.style.display = 'block'
    canBronze.style.display = 'none'
    canDiamante.style.display = 'none'
    canOuro.style.display = 'none'
    mensality.innerHTML = 'R$ 490'
  } else if (value === 'PlanoOuro') {
    chartOuro()
    canOuro.style.display = 'block'
    canBronze.style.display = 'none'
    canPrata.style.display = 'none'
    canDiamante.style.display = 'none'
    mensality.innerHTML = 'R$ 590'
  } else if (value === 'PlanoDiamante') {
    chartDiamante()
    canDiamante.style.display = 'block'
    canBronze.style.display = 'none'
    canOuro.style.display = 'none'
    canPrata.style.display = 'none'
    mensality.innerHTML = 'R$ 690'
  }
}

function chartBronze() {
  const ctx = document.getElementById('bronze').getContext('2d')
  const labels = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]
  const data = {
    labels,
    datasets: [
      {
        data: [9472, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390],
        label: 'progressão de vendas',
        fill: true,
        backgroundColor: 'rgb(64,51,186)'
      }
    ]
  }
  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true
    }
  }
  chart = new Chart(ctx, config)
}

function chartPrata() {
  const ctj = document.getElementById('prata').getContext('2d')
  const labels = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]
  const data = {
    labels,
    datasets: [
      {
        data: [9572, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490, 490],
        label: 'progressão de vendas',
        fill: true,
        backgroundColor: 'rgb(64,51,186)'
      }
    ]
  }
  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true
    }
  }
  const chart = new Chart(ctj, config)
}

function chartOuro() {
  const cti = document.getElementById('ouro').getContext('2d')
  const labels = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]
  const data = {
    labels,
    datasets: [
      {
        data: [9672, 590, 590, 590, 590, 590, 590, 590, 590, 590, 590, 590],
        label: 'progressão de vendas',
        fill: true,
        backgroundColor: 'rgb(64,51,186)'
      }
    ]
  }
  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true
    }
  }
  const chart = new Chart(cti, config)
}

function chartDiamante() {
  const ctu = document.getElementById('diamante').getContext('2d')
  const labels = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]
  const data = {
    labels,
    datasets: [
      {
        data: [9772, 690, 690, 690, 690, 690, 690, 690, 690, 690, 690, 690],
        label: 'progressão de vendas',
        fill: true,
        backgroundColor: 'rgb(64,51,186)'
      }
    ]
  }
  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true
    }
  }
  const chart = new Chart(ctu, config)
}
