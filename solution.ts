// Problem 1

const formatValue = (value: number | string | boolean) => {
  if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "boolean") {
    return !value;
  } else {
    return "Invalid value";
  }
};

const getLength = (value: string | Array<any>) => {
  if (typeof value === "string" || Array.isArray(value)) {
    return value.length;
  }
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const filterByRating = <T extends { title: string; rating: number }>(itemList: Array<T>) => {
  return itemList.filter((item) => item.rating >= 4);
};

type user = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (userList: user[]) => {
  return userList.filter((user) => user.isActive);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (bookDetails: Book) => {
  const result = `Title: ${bookDetails.title}, Author: ${bookDetails.author}, Published: ${
    bookDetails.publishedYear
  }, Available: ${bookDetails.isAvailable ? "Yes" : "No"}`;

  console.log(result);
};

const getUniqueValues = <T>(arr1: Array<T>, arr2: Array<T>): Array<T> => {
  const mySet = new Set([...arr1, ...arr2]);
  return Array.from(mySet);
};

type product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (productList: product[]) => {
  if (productList.length === 0) {
    return 0;
  }

  return productList.reduce((total, product) => {
    const price = product.price * product.quantity;
    let discount = 0;
    if (product.discount && product.discount > 0 && product.discount < 100) {
      discount = (price * product.discount) / 100;
    }
    return total + price - discount;
  }, 0);
};
