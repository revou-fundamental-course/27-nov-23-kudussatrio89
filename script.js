const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');


btn1.addEventListener('click', () => {
  const tinggi = parseInt(document.getElementById('tinggi').value);
  const alas = parseInt(document.getElementById('alas').value);
  const result = document.getElementById('hasil');

  let tinggi_status = false, alas_status = false;

  const tinggi_error = 'tinggi_error';
  const alas_error = 'alas_error';

  if (tinggi === '' || isNaN(tinggi) || (tinggi <= 0)) {
    document.getElementById(tinggi_error).innerHTML = 'Tolong isi Tinggi';
  } else {
    document.getElementById(tinggi_error).innerHTML = '';
    tinggi_status = true;
  }

  if (alas === '' || isNaN(alas) || (alas <= 0)) {
    document.getElementById(alas_error).innerHTML = "Tolong isi Alas";
  } else {
    document.getElementById(alas_error).innerHTML = '';
    alas_status = true;
  }

  if (tinggi_status && alas_status) {
    const luas = ((tinggi * alas) / 2);
    result.innerHTML = `L = 1/2 x ${tinggi} x ${alas} = ${luas}`;
  }
});


btn2.addEventListener('click', () => {
  const a = parseInt(document.getElementById('sisi-a').value);
  const b = parseInt(document.getElementById('sisi-b').value);
  const c = parseInt(document.getElementById('sisi-c').value);
  const result = document.getElementById('hasil2');

  let a_status = false, b_status = false, c_status = false;

  const a_error = 'a_error';
  const b_error = 'b_error';
  const c_error = 'c_error';

  if (a === '' || isNaN(a) || (a <= 0)) {
    document.getElementById(a_error).innerHTML = 'Tolong isi sisi A';
  } else {
    document.getElementById(a_error).innerHTML = '';
    a_status = true;
  }

  if (b === '' || isNaN(b) || (b <= 0)) {
    document.getElementById(b_error).innerHTML = "Tolong isi sisi B";
  } else {
    document.getElementById(b_error).innerHTML = '';
    b_status = true;
  }

  if(c === '' || isNaN(c) || (c<=0)){
    document.getElementById(c_error).innerHTML = 'Tolong isi sisi C';
  }else {
    document.getElementById(c_error).innerHTML = '';
    c_status = true;
  }

  if (a_status && b_status && c_status) {
    const keliling = (a + b + c);
    result.innerHTML = `Keliling = ${a} + ${b} + ${c} = ${keliling}`;
  }
});


