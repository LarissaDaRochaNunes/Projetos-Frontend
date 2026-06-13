function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano){
        alert('[Erro] Verifique o ano e tente novamente!')

    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            gênero = 'homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/bebem.png')

            }else if (idade >= 10 && idade < 21){
                img.setAttribute('src', 'imagens/jovemm.png')

            }else if (idade >= 21 && idade < 50){
                img.setAttribute('src', 'imagens/homem.png')

            }else{
                img.setAttribute('src', 'imagens/idoso.png')
                
            }

        }else if (fsex[1].checked){
            gênero = 'mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/bebef.png')
                

            }else if (idade >= 10 && idade < 21){
                img.setAttribute('src', 'imagens/jovemf.png')

            }else if (idade >= 21 && idade < 50){
                img.setAttribute('src', 'imagens/mulher.png')

            }else{
                img.setAttribute('src', 'imagens/idosa.png')
                
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}