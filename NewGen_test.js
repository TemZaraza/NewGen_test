// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] }
  ];
  
  // Варианты цен (фильтры), которые ищет пользователь
  let requiredRange1 = [null, 200];
  let requiredRange2 = [100, 350];
  let requiredRange3 = [200, null];
  
  //Функция для фильтрации курсов по заданному диапазону цен
  const filteredCourses = (courses, requiredRange) => {
    requiredRange[1] = requiredRange[1] ?? Infinity;
    return courses.filter((course) => {
      if (!course.prices[1]) {
        return requiredRange[0] <= course.prices[0] && requiredRange[1] === Infinity 
      } else {
        return requiredRange[0] <= course.prices[0] && requiredRange[1] >= course.prices[1]
      }
    });
  };
  
  //Функция для сортировки курсов по цене
  const sortCourses = (courses) => {
    return courses.sort((course1, course2) => {
      return course1.prices[0] - course2.prices[0];
    });
  };
  
  //Вывод отфильтрованных курсов
  console.log("Courses1", filteredCourses(courses, requiredRange1));
  console.log("Courses2", filteredCourses(courses, requiredRange2));
  console.log("Courses3", filteredCourses(courses, requiredRange3));
  
  //Вывод отсортированных курсов
  console.log("Sorted Courses", sortCourses(courses));

  //Вывод отфильтрованных курсов с сортировкой по цене
  console.log("SortedCourses1", sortCourses(filteredCourses(courses, requiredRange1)));
  console.log("SortedCourses2", sortCourses(filteredCourses(courses, requiredRange2)));
  console.log("SortedCourses3", sortCourses(filteredCourses(courses, requiredRange3)));