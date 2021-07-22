function vegetarianMenu(menu) {
  const menuNode = document.querySelector("#menu");
  const vegetarianOptions = menu.filter((option) => option.isVegetarian);

  vegetarianOptions.forEach((option) => {
    let dish = document.createElement("li");
    dish.textContent = option.name;
    menuNode.appendChild(dish);
  });
}

vegetarianMenu([
  {
    name: "Chicken parmesan",
    isVegetarian: false,
  },
  {
    name: "Penne a la vodka",
    isVegetarian: true,
  },
  {
    name: "Mushroom risotto",
    isVegetarian: true,
  },
  {
    name: "Veal saltambuca",
    isVegetarian: false,
  },
  {
    name: "Filet mignon",
    isVegetarian: false,
  },
]);
