function buscar(){
    var pattern = document.getElementById('input').value;
    var solicitud = new XMLHttpRequest();
    var data  = new FormData();
    var url = 'resultado.php';

    data.append("busqueda", pattern);
    solicitud.open('POST',url, true);
    solicitud.send(data);

    solicitud.addEventListener('load', function(e){

        var cajadatos = document.getElementById('datagrid');
        cajadatos.innerHTML = e.target.responseText;
        
    }, false);
}

window.addEventListener('load', function(){
    document.getElementById('input').addEventListener('input', buscar, false);
}, false);
