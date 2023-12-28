// all images imported from images directory
import product_01_image_01 from "../images/product_01.1.png";
import product_01_image_02 from "../images/product_01.2.png";
import product_01_image_03 from "../images/product_01.3.png";

import product_02_image_01 from "../images/product_01.4.png";
import product_02_image_02 from "../images/product_01.5.png";
import product_02_image_03 from "../images/product_01.6.png";

import product_03_image_01 from "../images/product_02.1.png";
import product_03_image_02 from "../images/product_02.2.png";
import product_03_image_03 from "../images/product_02.3.png";

import product_04_image_01 from "../images/product_02.4.png";
import product_04_image_02 from "../images/product_02.5.png";
import product_04_image_03 from "../images/product_02.6.png";

import product_05_image_01 from "../images/product_03.1.png";
import product_05_image_02 from "../images/product_03.2.png";
import product_05_image_03 from "../images/product_03.3.png";

import product_06_image_01 from "../images/product_03.4.png";
import product_06_image_02 from "../images/product_03.5.png";
import product_06_image_03 from "../images/product_03.6.png";

const products = [
  {
    id: "01",
    title: "Thai Beef Salad with Mango",
    price: '35.000',
    image01: product_01_image_01,
    category: "Salad",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
  },

  {
    id: "02",
    title: "Greek Salad Caesar with Chicken ",
    price: '35.000',
    image01: product_01_image_02,
    category: "Salad",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "03",
    title: "Grilled Vegetable Salad",
    price: '25.000',
    image01: product_01_image_03,
    category: "Salad",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "04",
    title: "Citrus Shrimp Salad with Avocado",
    price: '35.000',
    image01: product_02_image_01,
    category: "Salad",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "05",
    title: "Grill Chicken Chop Salad with Honey",
    price: '30.000',
    image01: product_02_image_02,
    category: "Salad",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "06",
    title: "Salmon Avocado Salad",
    price: '35.000',
    image01: product_02_image_03,
    category: "Salad",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "07",
    title: "Sesame Noodle Bowls",
    price: '20.000',
    image01: product_03_image_01,
    category: "Noodle",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "08",
    title: "Pasta Salad",
    price: '20.000',
    image01: product_03_image_02,
    category: "Noodle",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "09",
    title: "Vegan Pesto Spinach Mushroom Pasta",
    price: '25.000',
    image01: product_03_image_03,
    category: "Noodle",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "10",
    title: "Creamy Broccoli Pasta",
    price: '25.000',
    image01: product_04_image_01,
    category: "Noodle",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "11",
    title: "Vegan Japchae ",
    price: '20.000',
    image01: product_04_image_02,
    category: "Noodle",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "12",
    title: "Vegan Thai Drunken Noodles ",
    price: '25.000',
    image01: product_04_image_03,
    category: "Noodle",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "13",
    title: "Acai Bowl ",
    price: '30.000',
    image01: product_05_image_01,
    category: "Smoothies",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "14",
    title: "Mango and Kiwi Smoothies",
    price: '20.000',
    image01: product_05_image_02,
    category: "Smoothies",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "15",
    title: "Superfood Green Smoothies",
    price: '25.000',
    image01: product_05_image_03,
    category: "Smoothies",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "16",
    title: "Spiriluna Smoothie Bowl",
    price: '30.000',
    image01: product_06_image_01,
    category: "Smoothies",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "17",
    title: "Blueberry Smoothies",
    price: '25.000',
    image01: product_06_image_02,
    category: "Smoothies",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "18",
    title: "Chocolate Cherry Smoothies",
    price: '30.000',
    image01: product_06_image_03,
    category: "Smoothies",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
];

export default products;