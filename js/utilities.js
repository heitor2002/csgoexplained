const mapListUtilities = document.getElementById("map-list-utilities");
const smokeButton = document.getElementById("smoke-button");
const flashButton = document.getElementById("flash-button");
const molotovButton = document.getElementById("molotov-button");
const utilitiesButtons = document.querySelectorAll(".utilities-buttons");

const mainColor = "rgb(241, 169, 35)";

const linkMapImages = {
  mirage: "https://noticias.maisesports.com.br/wp-content/uploads/2022/03/CSGO_Mirage_latest_version.jpg",
  inferno: "https://img.redbull.com/images/c_fill,w_1200,h_630,g_auto,f_auto,q_auto/redbullcom/2016/12/07/1331833433802_2/you-want-the-fountain...smaller-and-more-coffins.jpg",
  dust: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/7/15/mdlhtjaz85gjhahyakce/csgo-dust-2-map",
  cache: "https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2020/02/erbmqjjwaaakmbb.jpg",
  nuke: "https://gumlet.assettype.com/afkgaming%2F2021-07%2F9c698074-819a-46a3-a28b-964e63861453%2FCover_Image___This_Simple_Feature_On_Nuke_Has_Caught_The_CSGO_Community_By_Surprise.jpg?compress=true&dpr=1&w=1200",
  overpass: "https://criticalhits.com.br/wp-content/uploads/2019/07/Overpass.jpg",
  train: "https://cdn.akamai.steamstatic.com/apps/csgo/images/reintroducing_train/BSiteOverview-new.jpg",
  vertigo: "https://external-preview.redd.it/8QH3OEwdoAKQ2BAt9IhG4inFU0XuVSeYRkBGLsDvjpo.jpg?auto=webp&s=dfc88b6405c6b3e130fb4c9adac244049be987e0",
}

const slugMaps = "/mapas/"
const slugUtilities = "/utilitarios/"

const mapsList = [
  {
    id: 1,
    mapName: "Mirage",
    slug: slugMaps,
    imgSrc: "../media/maps/mirage_map.png"
  },
  {
    id: 2,
    mapName: "Inferno",
    slug: slugMaps,
    imgSrc: "../media/maps/inferno_map.png"
  },
  {
    id: 3,
    mapName: "Dust 2",
    slug: slugMaps,
    imgSrc: "../media/maps/d2_map.png"
  },
  {
    id: 4,
    mapName: "Cache",
    slug: slugMaps,
    imgSrc: "../media/maps/cache_map.png"
  },
  {
    id: 5,
    mapName: "Nuke",
    slug: slugMaps,
    imgSrc: "../media/maps/nuke_map.png"
  },
  {
    id: 6,
    mapName: "Overpass",
    slug: slugMaps,
    imgSrc: "../media/maps/overpass_map.png"
  },
  {
    id: 7,
    mapName: "Train",
    slug: slugMaps,
    imgSrc: "../media/maps/train_map.png"
  },
  {
    id: 8,
    mapName: "Vertigo",
    slug: slugMaps,
    imgSrc: "../media/maps/vertigo_map.png"
  },
]

const utilitiesMapList = [
  {
    mapName: "Mirage",
    utilitie: "smoke",
    mapImage: linkMapImages.mirage,
    slug: slugUtilities,
    imgUrl: "../media/smokes/mirage_map_smoke.png"
  },
  {
    mapName: "Inferno",
    utilitie: "smoke",
    mapImage: linkMapImages.inferno,
    slug: slugUtilities,
    imgUrl: "../media/smokes/inferno_map_smoke.png"
  },
  {
    mapName: "Dust 2",
    utilitie: "smoke",
    mapImage: linkMapImages.dust,
    slug: slugUtilities,
    imgUrl: "../media/smokes/dust2_map_smoke.png"
  },
  {
    mapName: "Cache",
    utilitie: "smoke",
    mapImage: linkMapImages.cache,
    slug: slugUtilities,
    imgUrl: "../media/smokes/cache_map_smoke.png"
  },
  {
    mapName: "Nuke",
    utilitie: "smoke",
    mapImage: linkMapImages.nuke,      
    slug: slugUtilities,
    imgUrl: "../media/smokes/nuke_map_smoke.png"
  },
  {
    mapName: "Overpass",
    utilitie: "smoke",
    mapImage: linkMapImages.overpass,
    slug: slugUtilities,
    imgUrl: "../media/smokes/overpass_map_smoke.png"
  },
  {
    mapName: "Train",
    utilitie: "smoke",
    mapImage: linkMapImages.train,      
    slug: slugUtilities,
    imgUrl: "../media/smokes/train_map_smoke.png"
  },
  {
    mapName: "Vertigo",
    utilitie: "smoke",
    mapImage: linkMapImages.vertigo,
    slug: slugUtilities,
    imgUrl: "../media/smokes/vertigo_map_smoke.png"
  },
  {
    mapName: "Mirage",
    utilitie: "molotov",
    mapImage: linkMapImages.mirage,
    slug: slugUtilities,
    imgUrl: "../media/molotovs/mirage_map_molotov.png"
  },
  {
    mapName: "Inferno",
    utilitie: "molotov",
    mapImage: linkMapImages.inferno,
    slug: slugUtilities,
    imgUrl: "../media/molotovs/inferno_map_molotov.png"
  },
  {
    mapName: "Dust 2",
    utilitie: "molotov",
    mapImage: linkMapImages.dust,
    slug: slugUtilities,
    imgUrl: "../media/molotovs/dust2_map_molotov.png"
  },
  {
    mapName: "Cache",
    utilitie: "molotov",
    mapImage: linkMapImages.cache,
    slug: slugUtilities,
    imgUrl: "../media/molotovs/cache_map_molotov.png"
  },
  {
    mapName: "Nuke",
    utilitie: "molotov",
    mapImage: linkMapImages.nuke,
    slug: slugUtilities,
    imgUrl: "../media/molotovs/nuke_map_molotov.png"
  },
  {
    mapName: "Overpass",
    utilitie: "molotov",
    mapImage: linkMapImages.overpass,
    slug: slugUtilities,
    imgUrl: "../media/molotovs/overpass_map_molotov.png"
  },
  {
    mapName: "Train",
    utilitie: "molotov",
    mapImage: linkMapImages.train,
    slug: slugUtilities,
    imgUrl: "../media/molotovs/train_map_molotov.png"
  },
  {
    mapName: "Vertigo",
    utilitie: "molotov",
    mapImage: linkMapImages.vertigo,
    slug: slugUtilities,
    imgUrl: "../media/molotovs/vertigo_map_molotov.png"
  },
  {
    mapName: "Mirage",
    utilitie: "flash",
    mapImage: linkMapImages.mirage,
    slug: slugUtilities,
    imgUrl: "../media/flashs/mirage_map_flash.png"
  },
  {
    mapName: "Inferno",
    utilitie: "flash",
    mapImage: linkMapImages.inferno,
    slug: slugUtilities,
    imgUrl: "../media/flashs/inferno_map_flash.png"
  },
  {
    mapName: "Dust 2",
    utilitie: "flash",
    mapImage: linkMapImages.dust,
    slug: slugUtilities,
    imgUrl: "../media/flashs/dust2_map_flash.png"
  },
  {
    mapName: "Cache",
    utilitie: "flash",
    mapImage: linkMapImages.cache,
    slug: slugUtilities,
    imgUrl: "../media/flashs/cache_map_flash.png"
  },
  {
    mapName: "Nuke",
    utilitie: "flash",
    mapImage: linkMapImages.nuke,
    slug: slugUtilities,
    imgUrl: "../media/flashs/nuke_map_flash.png"
  },
  {
    mapName: "Overpass",
    utilitie: "flash",
    mapImage: linkMapImages.overpass,
    slug: slugUtilities,
    imgUrl: "../media/flashs/overpass_map_flash.png"
  },
  {
    mapName: "Train",
    utilitie: "flash",
    mapImage: linkMapImages.train,
    slug: slugUtilities,
    imgUrl: "../media/flashs/train_map_flash.png"
  },
  {
    mapName: "Vertigo",
    utilitie: "flash",
    mapImage: linkMapImages.vertigo,
    slug: slugUtilities,
    imgUrl: "../media/flashs/vertigo_map_flash.png"
  },
];

const filterPerUtilitie = utilitiesMapList.filter(
  (item) => item.utilitie === "smoke"
);

const mapListPerUtilitie = filterPerUtilitie.reduce((accumulator, data) => {
  accumulator += `
    <li>
        <a href="${data.slug}?name=${data.mapName}&imgUrl=${data.imgUrl}&utilitie=${data.utilitie}">
        <div class="overlay"><h2>${data.mapName}</h2></div>
          <img
            src="${data.mapImage}"
            alt="${data.mapName}"
          />
        </a>
      </li>
    `;

  return accumulator;
}, "");

mapListUtilities.innerHTML = mapListPerUtilitie;

smokeButton.onclick = () => {
  const mapListPerUtilitie = filterPerUtilitie.reduce((accumulator, data) => {
    accumulator += `
        <li>
            <a href="${data.slug}?name=${data.mapName}&imgUrl=${data.imgUrl}&utilitie=${data.utilitie}">
            <div class="overlay"><h2>${data.mapName}</h2></div>
              <img
                src="${data.mapImage}"
                alt="${data.mapName}"
              />
            </a>
          </li>
        `;

    return accumulator;
  }, "");

  flashButton.style.backgroundColor = "transparent";
  flashButton.style.color = `${mainColor}`;
  molotovButton.style.backgroundColor = "transparent";
  molotovButton.style.color = `${mainColor}`;
  mapListUtilities.innerHTML = mapListPerUtilitie;
};

flashButton.onclick = () => {
  const filterPerUtilitie = utilitiesMapList.filter(
    (item) => item.utilitie === "flash"
  );
  const mapListPerUtilitie = filterPerUtilitie.reduce((accumulator, data) => {
    accumulator += `
        <li>
            <a href="${data.slug}?name=${data.mapName}&imgUrl=${data.imgUrl}&utilitie=${data.utilitie}">
            <div class="overlay"><h2>${data.mapName}</h2></div>
              <img
                src="${data.mapImage}"
                alt="${data.mapName}"
              />
            </a>
          </li>
        `;

    return accumulator;
  }, "");

  smokeButton.style.backgroundColor = "transparent";
  smokeButton.style.color = `${mainColor}`;
  molotovButton.style.backgroundColor = "transparent";
  molotovButton.style.color = `${mainColor}`;

  mapListUtilities.innerHTML = mapListPerUtilitie;
};

molotovButton.onclick = () => {
  const filterPerUtilitie = utilitiesMapList.filter(
    (item) => item.utilitie === "molotov"
  );
  const mapListPerUtilitie = filterPerUtilitie.reduce((accumulator, data) => {
    accumulator += `
        <li>
            <a href="${data.slug}?name=${data.mapName}&imgUrl=${data.imgUrl}&utilitie=${data.utilitie}">
            <div class="overlay"><h2>${data.mapName}</h2></div>
              <img
                src="${data.mapImage}"
                alt="${data.mapName}"
              />
            </a>
          </li>
        `;

    return accumulator;
  }, "");

  smokeButton.style.backgroundColor = "transparent";
  smokeButton.style.color = `${mainColor}`;
  flashButton.style.backgroundColor = "transparent";
  flashButton.style.color = `${mainColor}`;

  mapListUtilities.innerHTML = mapListPerUtilitie;
};

utilitiesButtons.forEach((item) => {
  item.addEventListener("click", () => {
    item.style.backgroundColor = `${mainColor}`;
    item.style.color = "white";
  });
});

// SETAR LISTA DE MAPAS

const asideMaps = document.getElementById("map-list");
const htmlMapsList = mapsList.reduce((accumulator, item) => {
  accumulator += `
    <a href="${item.slug}?id=${item.id}&name=${item.mapName}&image=${item.imgSrc}"><li>${item.mapName}</li></a>
  `

  return accumulator
}, "")

asideMaps.innerHTML = htmlMapsList;


