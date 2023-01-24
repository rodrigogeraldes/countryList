const fetchCountries = async () => {
  const countriesArray = [];

  countriesArray.push(
    await fetch("https://restcountries.com/v3.1/all").then((res) => res.json())
  );

  let countriesLi = "";

  if (countriesArray.length !== 0) {
    countriesArray[0].forEach((country) => {
      const countriesEach = `
      <li class="countryCard ${country.region}">
      <div class="countryCard__flip-card-inner">
          <div class="countryCard__flip-card-front">
              <img class="countryCard__flag" alt="${country.name.common}" src="${country.flags.png}" />
          </div>
          <div class="countryCard__flip-card-back">
              <h3>${country.name.common}</h3>
              <p>Nome nativo: ${country.name.official}</p>
              <p>Capital: ${country.capital}</p>
              <p>Região: ${country.region}</p>
              <p>Sub-região: ${country.subregion}</p>
          </div>
      </div>
  </li>
      `;
      countriesLi += countriesEach;
    });
  }

  const ul = document.getElementById("countryList__ul");
  ul.innerHTML = countriesLi;
};

fetchCountries();
