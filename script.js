function Parilidade(){
        let Número = Number(document.getElementById("entrada").value)   //Esta parte é a responsável por receber o valor do input no HTML
        
        if (Número % 2 === 0){    //se o resto da divisão do npumero obtido for = 0 ele envia um alerta de PAR
          alert("PAR");
        } else {                   //se não ele envia um alerta de impar
          alert("IMPAR");
        }
    }