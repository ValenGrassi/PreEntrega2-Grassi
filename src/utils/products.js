const products = [
    {
      id: 30,
      name: "Pikador - Alien XL- Cogonauts",
      stock: 2,
      cost: 2300,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 1500,
      image: [
        "https://www.upgrowshop.com/image.php?width=650&height=650&image=/images/products/1012/picador-grinder-cogonauts-unaki-alien-xl_7660.jpeg"
      ],
      categoryId: "pikadores",
      brandId: 95,
      packingId: null,
      category: {
        name: "pikadores",
        id: 9
      },
      brand: {
        id: 95,
        name: "Eco de los Andes"
      },
      reviews: []
    },
    {
      id: 29,
      name: "Pikador - Cubo Rubik - Lion Rolling Circus",
      stock: 5,
      cost: 1400,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 1500,
      image: [
        "https://www.upgrowshop.com/image.php?width=650&height=650&image=/images/products/993/cubo-rubik_6422.jpeg"
      ],
      categoryId: "pikadores",
      brandId: 95,
      packingId: null,
      category: {
        name: "pikadores",
        id: 9
      },
      brand: {
        id: 95,
        name: "Eco de los Andes"
      },
      reviews: [
        {
          "comment": "Muy rico y refrescante",
          "rating": "4"
        }
      ]
    },
    {
      id: 76,
      name: "Pikador - Diseño Barril - 3 Partes",
      stock: 8,
      cost: 1800,
      description: "Se muestra con tonos amarillo verdoso de intensidad media. En la nariz encontramos frutas blancas maduras, peras, manzanas y banana, frutas tropicales, con notas de la maduración en barricas sobre las borras como vainilla, manteca y miel. Buen volumen, complejo, maduro, con una entrada untuosa en la boca, buen desarrollo y largo final. Se repiten las notas frutales del aroma.",
      capacity: 750,
      image: [
        "https://www.upgrowshop.com/image.php?width=650&height=650&image=/images/products/706/picador-grinder-diseno-barril-3-partes_4234.jpeg"
      ],
      categoryId: "pikadores",
      brandId: 10,
      packingId: null,
      category: {
        name: "pikadores",
        id: 1
      },
      brand: {
        id: 10,
        name: "Alambrado"
      },
      reviews: []
    },
    {
      id: 170,
      name: "Pikador - Aluminio 3 Partes - Ámsterdam",
      stock: 15,
      cost: 2000,
      description: "Rojo violáceo, profundo y vivaz con visos azulados. Nariz de frutos rojos y negros como cerezas, cassis, ciruelas y moras, integrados con los aromas de maduración en barrica como vainilla, tabaco y chocolate. Entrada en boca sedosa, buena estructura, con una marcada presencia de frutas rojas, taninos amables y dulces, concluyendo en un largo final de boca.",
      capacity: 750,
      image: [
        "https://www.upgrowshop.com/image.php?width=650&height=650&image=/images/products/160/picador-aluminio-3-partes-amsterdam_70.png"
      ],
      categoryId: "pikadores",
      brandId: 10,
      packingId: null,
      category: {
        name: "pikadores",
        id: 1
      },
      brand: {
        id: 10,
        name: "Alambrado"
      },
      reviews: []
    },
    {
      id: 233,
      name: "Papelillos - Oro K Size- Lion Rolling Circus",
      stock: 20,
      cost: 1450,
      description: "La linea Alambrado esta compuesta por vinos elegantes y de estilo moderno, donde se destacan claramente las características frutales de las variedades que los componen. Su paso por madera les otorgan una complejidad muy particular, acompañando de manera armónica y sutil la calidad obtenida desde el viñedo. Poseen un potencial de guarda de entre 4 y 6 años.\nAlambrado Malbec fue elaborado a partir de una cuidosa selección de uvas cosechadas de forma manual y criado en barricas de roble francés durante 10 meses.",
      capacity: 750,
      image: [
        "https://www.upgrowshop.com/image.php?width=650&height=650&image=/images/products/1174/sedas-lion-rolling-circus-gold-oro-pre-rolled-king-size_9287.jpeg"
      ],
      categoryId: "papelillos",
      brandId: 10,
      packingId: null,
      category: {
        name: "papelillos",
        id: 1
      },
      brand: {
        id: 10,
        name: "Alambrado"
      },
      reviews: []
    },
    {
      id: 139,
      name: "Papelillos - Duki 1 1/4 - Lion Rolling Circus",
      stock: 50,
      cost: 300,
      description: "Color: Rojo rubí con sutiles reflejos terracota. Aroma: Se destacan los aromas a frutas negras como higos, ciruelas y confitura de moras, armónicamente acompañados por notas de pimiento rojo, regaliz y tostado. Boca: Se percibe la untuosidad de la fruta madura junto a una elegante estructura tánica y persistencia en boca.",
      capacity: 750,
      image: [
        "https://www.upgrowshop.com/image.php?width=650&height=650&image=/images/products/1090/sedas-duki-ssj-lion-rolling-circus-papel-para-armar-1-1-4_6043.jpeg"
      ],
      categoryId: "papelillos",
      brandId: 16,
      packingId: null,
      category: {
        name: "papelillos",
        id: 1
      },
      brand: {
        id: 16,
        name: "Altos del Plata"
      },
      reviews: []
    },
    {
      id: 68,
      name: "Papelillos - Dollar King Size - HoneyPuff",
      stock: 16,
      cost: 490,
      description: "Altos del Plata Chardonnay pertenece a la bodega Terrazas de los Andes. Su vino es de color amarillo dorado con destellos verdes. Su perfil fresco y frutado revela notas a flores blancas como jazmín y aromas a pera, durazno blanco y ananá. Acompañan sutiles notas tostadas y dulces como vainilla y miel. Presenta ligeros toques tostados y una acidez persistente.",
      capacity: 750,
      image: [
        "https://www.upgrowshop.com/image.php?width=650&height=650&image=/images/products/704/sedas-honeypuff-dollar-king-size_5179.jpeg"
      ],
      categoryId: "papelillos",
      brandId: 16,
      packingId: null,
      category: {
        name: "papelillos",
        id: 1
      },
      brand: {
        id: 16,
        name: "Altos del Plata"
      },
      reviews: []
    },
    {
      id: 222,
      name: "Filtros - Biodegradables 6mm",
      stock: 8,
      cost: 300,
      description: "Altos del Plata Malbec pertenece a la bodega Terrazas de los Andes. Su vino es de color rojo con destellos morados. Predomina la presencia de aromas a fruta negra como ciruela y mora en armonía con un toque tostado. Se distinguen notas especiadas a pimienta blanca.",
      capacity: 375,
      image: [
        "https://www.upgrowshop.com/image.php?width=650&height=650&image=/images/products/738/filtros-biodegradables-6mm-tuqueros-420_8985.jpeg"
      ],
      categoryId: "papelillos",
      brandId: 16,
      packingId: null,
      category: {
        name: "papelillos",
        id: 1
      },
      brand: {
        id: 16,
        name: "Altos del Plata"
      },
      reviews: []
    },
    {
      id: 135,
      name: "Bong - Máscara de Gas - 2 en 1",
      stock: 3,
      cost: 4900,
      description: "Altos del Plata Malbec pertenece a la bodega Terrazas de los Andes. Su vino es de color rojo con destellos morados. Predomina la presencia de aromas a fruta negra como ciruela y mora en armonía con un toque tostado. Se distinguen notas especiadas a pimienta blanca.",
      capacity: 750,
      image: [
        "https://www.upgrowshop.com/image.php?width=650&height=650&image=/images/products/597/bong-mascara-de-gas_6392.jpeg"
      ],
      categoryId: "bongs",
      brandId: 16,
      packingId: null,
      category: {
        name: "bongs",
        id: 1
      },
      brand: {
        id: 16,
        name: "Altos del Plata"
      },
      reviews: []
    },
    {
      id: 31,
      name: "Bong - Acrílico 15cm - Zeus",
      stock: 10,
      cost: 2500,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 700,
      image: [
        "https://www.upgrowshop.com/image.php?width=650&height=650&image=/images/products/984/bong-zeus-acrilico-15cm-varios-colores_7240.jpeg"
      ],
      categoryId: "bongs",
      brandId: 17,
      packingId: null,
      category: {
        name: "bongs",
        id: 5
      },
      brand: {
        id: 17,
        name: "Amareto Disaronno"
      },
      reviews: []
    }
  ];

  module.exports = {
    products,
  }