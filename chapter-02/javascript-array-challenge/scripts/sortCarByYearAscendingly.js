function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
      
  var counter = false;
  while (!counter) {
    counter = true;
    for (var i = 1; i < result.length; i++) {
      if (result[i - 1].year > result[i].year) {
        counter = false;
        var tmp = result[i - 1];
        result[i - 1] = result[i];
        result[i] = tmp;
      }
    }
  } 
    
  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}




