let calculator = {
  a:0,
  b:0,  
  read (a,b) {
     this.a = prompt("Значение a ", " ");
     this.b = prompt("Значение b ", " ");
      },
  sum () {
    alert (this.a + this.b);
  },
  mul () {
   alert (this.a * this.b); 
  } 
  
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
