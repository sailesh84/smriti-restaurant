import React from 'react';
import { BrowserRouter as Router, Routes, Switch, Route, Link } from "react-router-dom";
import MenuAppetizers from './MenuAppetizers';
import MenuDesserts from './MenuDesserts';
import MenuJuiceBar from './MenuJuiceBar';

export default function Menu() {
  return (
    <div>
   <MenuAppetizers />,
   <MenuDesserts />,
   <MenuJuiceBar />
   </div>
  );
}
