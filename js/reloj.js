function obtenerfecha(){
    let fecha = document.querySelector('#fecha');
    let hora = document.querySelector('#hora'), ampm;
    let fechaActual = new Date();
    let pmam = document.getElementById ('pmam');
    
    /*console.log(fechaActual)
    console.log(fechaActual.getDate)
    console.log(fechaActual.getDay)
    console.log(fechaActual.getMonth)*/
    
    //Martes 11 de Abril del 2023
    //10:35:00
    
    
    // Array de días de la semana
    const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    
    // Array de meses
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    if (hora >= 12){
        hora = hora - 12;
        pmam = 'AM';
    }else {
        pmam = 'PM'
    }
    if (hora == 0){
        horas == 12;
    }
    
    
    fecha.innerHTML = `${daysOfWeek[fechaActual.getDay()]}  ${fechaActual.getDate()} de ${months[fechaActual.getMonth()]}  del ${fechaActual.getFullYear()}`
    
    
    hora.innerHTML = `${fechaActual.getHours()}:${fechaActual.getMinutes()}:${fechaActual.getSeconds()} ${pmam}`;
    
    }
    
    
    setInterval(obtenerfecha)
    