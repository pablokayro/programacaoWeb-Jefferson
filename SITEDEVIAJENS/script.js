const urlUF = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
const cidade = document.getElementById('cidade');
const uf = document.getElementById('uf');

uf.addEventListener('change', async function(){
  const URLcidades = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+uf.value+'/municipios'
  const request = await fetch(URLcidades)
  const response = await request.json()
  let option = ''
  response.forEach(function(cidades){
    option += '<option>'+cidades.nome+'</option>'
  })
  cidade.innerHTML = option;
})

window.addEventListener('load', async ()=>{
  const request = await fetch(urlUF);
  const response = await request.json();

  const options = document.createElement("optgroup")
  options.setAttribute('label', 'UFs')
  response.forEach(function(uf){
    options.innerHTML += '<option>'+uf.sigla+'</option>'
  })
  uf.append(options)
});

function alerta(){
  alert("FORMULARIO ENVIADO COM SUCESSO")
}