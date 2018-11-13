//obtener valores de los inputs
var anchoValue = document.getElementById('ancho-input');
var altoValue = document.getElementById('alto-input');
var boxSizingValue;
var marginValue = document.getElementById('margin-input');
var borderValue = document.getElementById('border-input');
var paddingValue = document.getElementById('padding-input');
var contentValue = 0;

//seleccionar las cajas.
var cajaMargin = document.querySelector('.margin');
var cajaBorder = document.querySelector('.border');
var cajaPadding = document.querySelector('.padding');
var cajaContent = document.querySelector('.content');
var message = document.querySelector('.message');
document.addEventListener('change', function() {
  boxSizingValue = document.querySelector('input[name="box-sizing"]:checked').value;
    if (boxSizingValue === 'content-box') {
      var cajaWidth = parseInt(anchoValue.value) + (parseInt(paddingValue.value) * 2) + (parseInt(borderValue.value) * 2);
      var cajaHeight = parseInt(altoValue.value) + (parseInt(paddingValue.value) * 2) + (parseInt(borderValue.value) * 2);
      cajaMargin.style.width = cajaWidth + parseInt(marginValue.value) * 2 + 'px';
      cajaMargin.style.height = cajaHeight + parseInt(marginValue.value) * 2 + 'px';
      cajaBorder.style.width = parseInt(anchoValue.value) + (parseInt(paddingValue.value) * 2) + (parseInt(borderValue.value) * 2) + 'px';
      cajaBorder.style.height = parseInt(altoValue.value) + (parseInt(paddingValue.value) * 2) + (parseInt(borderValue.value) * 2) + 'px';
      // cajaBorder.style.borderWidth = parseInt(borderValue.value) + 'px';
      cajaPadding.style.width = parseInt(anchoValue.value) + (parseInt(paddingValue.value) * 2) + 'px';
      cajaPadding.style.height = parseInt(altoValue.value) + (parseInt(paddingValue.value) * 2) + 'px';
      cajaContent.style.width = parseInt(anchoValue.value) + 'px';
      cajaContent.style.height = parseInt(altoValue.value) +'px';
    } else {
      var cajaWidth = parseInt(anchoValue.value);
      var cajaHeight = parseInt(altoValue.value);
      cajaMargin.style.width = cajaWidth + (parseInt(marginValue.value) * 2) + 'px';
      cajaMargin.style.height = cajaHeight + (parseInt(marginValue.value) * 2) + 'px';
      cajaBorder.style.width = parseInt(anchoValue.value) + 'px';
      cajaBorder.style.height = parseInt(altoValue.value) + 'px';
      // cajaBorder.style.borderWidth = parseInt(borderValue.value) + 'px';
      cajaPadding.style.width = parseInt(anchoValue.value) - parseInt(borderValue.value) * 2 + 'px';
      cajaPadding.style.height = parseInt(altoValue.value) - parseInt(borderValue.value) * 2 + 'px';
      cajaContent.style.width = parseInt(anchoValue.value) - parseInt(borderValue.value) * 2- parseInt(paddingValue.value) * 2 + 'px';
      cajaContent.style.height = parseInt(altoValue.value) - parseInt(borderValue.value) * 2 - parseInt(paddingValue.value) * 2 + 'px';
    }
      message.innerText = 'El ancho de nuestra caja es: ' + cajaWidth + ' px y el alto es: ' + cajaHeight + ' px';
});
