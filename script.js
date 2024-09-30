function mudarImg(Img){
    let body = document.body;

    switch(Img){
        case 'homem aranha': body.style.backgroundImage = "url('aranha.png')"; break;
        case 'peter parker': body.style.backgroundImage = "url('aran.png')"; break;

      
      
        default: body.style.backgroundImage = 'black';

    }
}