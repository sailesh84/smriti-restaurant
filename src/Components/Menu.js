import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Switch, Route, Link } from "react-router-dom";
import MenuAppetizers from './MenuAppetizers';
import MenuDesserts from './MenuDesserts';
import MenuJuiceBar from './MenuJuiceBar';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, container, Row } from 'bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
import 'swiper/css';

export default function Menu() {
  return (
   <section>
   <MenuAppetizers />
   <MenuDesserts />
   <MenuJuiceBar />   
   </section>
  );
}
