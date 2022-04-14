const productList = [
  {
    id: 1,
    name: "Lotlux",
    category: "Cuadros",
    image: "http://dummyimage.com/225x119.png/cc0000/ffffff",
    price: 3535.56,
    description:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    shortDescription:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    stock: 53,
  },
  {
    id: 2,
    name: "Duobam",
    category: "Cuadros",
    image: "http://dummyimage.com/191x125.png/dddddd/000000",
    price: 7569.1,
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    stock: 58,
  },
  {
    id: 3,
    name: "It",
    category: "Cuadros",
    image: "http://dummyimage.com/107x115.png/5fa2dd/ffffff",
    price: 34826.79,
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    shortDescription: "In congue. Etiam justo. Etiam pretium iaculis justo.",
    stock: 84,
  },
  {
    id: 4,
    name: "Stringtough",
    category: "Cuadros",
    image: "http://dummyimage.com/243x119.png/cc0000/ffffff",
    price: 22617.65,
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    shortDescription:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    stock: 69,
  },
  {
    id: 5,
    name: "Quo Lux",
    category: "Cuadros",
    image: "http://dummyimage.com/223x130.png/ff4444/ffffff",
    price: 17274.52,
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    shortDescription:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    stock: 41,
  },
  {
    id: 6,
    name: "Job",
    category: "Cuadros",
    image: "http://dummyimage.com/190x102.png/cc0000/ffffff",
    price: 5154.88,
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    shortDescription:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    stock: 24,
  },
  {
    id: 7,
    name: "Fintone",
    category: "Cuadros",
    image: "http://dummyimage.com/129x102.png/cc0000/ffffff",
    price: 40424.22,
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    shortDescription:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    stock: 33,
  },
  {
    id: 8,
    name: "Gembucket",
    category: "Cuadros",
    image: "http://dummyimage.com/208x121.png/cc0000/ffffff",
    price: 26147.71,
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    shortDescription:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    stock: 31,
  },
  {
    id: 9,
    name: "Redhold",
    category: "Cuadros",
    image: "http://dummyimage.com/241x121.png/cc0000/ffffff",
    price: 14393.59,
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    shortDescription:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    stock: 52,
  },
  {
    id: 10,
    name: "Fix San",
    category: "Cuadros",
    image: "http://dummyimage.com/139x106.png/cc0000/ffffff",
    price: 35665.68,
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    shortDescription:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    stock: 11,
  },
  {
    id: 11,
    name: "Stim",
    category: "Objetos",
    image: "http://dummyimage.com/204x140.png/dddddd/000000",
    price: 39229.09,
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    shortDescription:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    stock: 43,
  },
  {
    id: 12,
    name: "Latlux",
    category: "Objetos",
    image: "http://dummyimage.com/234x109.png/ff4444/ffffff",
    price: 20457.19,
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    shortDescription:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    stock: 93,
  },
  {
    id: 13,
    name: "Tresom",
    category: "Objetos",
    image: "http://dummyimage.com/145x113.png/ff4444/ffffff",
    price: 36756.81,
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    shortDescription:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    stock: 29,
  },
  {
    id: 14,
    name: "Flexidy",
    category: "Objetos",
    image: "http://dummyimage.com/229x139.png/dddddd/000000",
    price: 6127.95,
    description:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    shortDescription:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    stock: 76,
  },
  {
    id: 15,
    name: "Konklab",
    category: "Objetos",
    image: "http://dummyimage.com/189x125.png/dddddd/000000",
    price: 28923.94,
    description:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    shortDescription: "Duis bibendum. Morbi non quam nec dui luctus rutrum. ",
    stock: 58,
  },
  {
    id: 16,
    name: "Bigtax",
    category: "Objetos",
    image: "http://dummyimage.com/151x140.png/cc0000/ffffff",
    price: 1896.53,
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    shortDescription:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    stock: 84,
  },
];

export const getProducts = (categoryId) => {
  const filterProducts = productList.filter(
    (prod) => prod.category === categoryId
  );
    if (filterProducts.length > 0) {
    return filterProducts;
  } else {
    return productList;
  }
};

export const getProduct = (id) => {
  const product = productList.find((prod) => prod.id === Number(id));
  return product;
};
