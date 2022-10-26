import '@testing-library/jest-dom';
const request = require("supertest");
import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import Overview from '../Overview.jsx';
// import Style from '../Style.jsx';
// import Styles from '../Styles.jsx';
// import CartFavorite from '../CartFavorite.jsx';
// import ImgCarousel from '../ImgCarousel.jsx';
// import ImgSlide from '../ImgSlide.jsx';

// afterEach(cleanup);

describe('SDC Overview Test', () => {
  it('tests get all /products endpoint', async() => {
      const response = await request("http://localhost:3000").get("/products");
      expect(response.body).toHaveLength(5);
      expect(response.statusCode).toBe(200);
      // Testing a single element in the array
      //expect(response.body).toEqual(expect.arrayContaining(['Earth']));

  });

  it('tests get one /products ', async() => {
    const response = await request("http://localhost:3000").get("/products/5");
    expect(response.statusCode).toBe(200);
  });

  it('tests get styles of one /product ', async() => {
    const response = await request("http://localhost:3000").get("/products/5/styles");
    expect(response.statusCode).toBe(200);
  });

  it('tests get related products of one /product ', async() => {
    const response = await request("http://localhost:3000").get("/products/5/related");
    expect(response.statusCode).toBe(200);
  });

  // it('tests get /products//styles endpoint', async() => {
  //   const response = await request(app).get("/products");
  //   expect(response.body[0].description).toEqual(["Mars", "Moon", "Earth", "Mercury", "Venus", "Jupiter"]);
  //   expect(response.body).toHaveLength(5);
  //   expect(response.statusCode).toBe(200);
    // Testing a single element in the array
    //expect(response.body).toEqual(expect.arrayContaining(['Earth']));

// });

  // Insert other tests below this line

  // Insert other tests above this line
});
