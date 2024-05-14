import { reactive } from "vue";

export const store = reactive({
  menu: [
    // per evitare errori, i routeName delle pagine non previste dal progetto (es. blog) puntano tutte su HOME
    {
      title: "Home",
      routeName: "home",
    },
    {
      title: "About",
      routeName: "about",
    },
    {
      title: "Contact",
      routeName: "contact",
    },
    {
      title: "Blog",
      routeName: "home",
    },
    {
      title: "Shop",
      routeName: "home",
    },
    {
      title: "Pages",
      routeName: "home",
    },
  ],
  services: [
    {
      title: "About Us",
      routeName: "home",
    },
    {
      title: "Latest Turnament",
      routeName: "home",
    },
    {
      title: "Uocoming Game",
      routeName: "home",
    },
    {
      title: "Faqs",
      routeName: "home",
    },
    {
      title: "Privacy",
      routeName: "home",
    },
    {
      title: "Terms & Conditions",
      routeName: "home",
    },
  ],
  contacts: [
    {
      title: "69 Broklyn Street, New York city, United States of America,",
      routeName: "home",
      path_icon: "fa-location-pin",
    },
    {
      title: "+880 222 333 2580",
      routeName: "home",
      path_icon: "fa-phone",
    },
    {
      title: "example@gmail.com",
      routeName: "home",
      path_icon: "fa-envelope",
    },
    {
      title: "www.example.com",
      routeName: "home",
      path_icon: "fa-globe",
    },
  ],
  // variabile per salvare l'indice che sarà utilizzato per AppHero
  activeIndex: null,
});
