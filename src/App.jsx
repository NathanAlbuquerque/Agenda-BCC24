import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Modal from "./Modal";

const modeloCategorias = [
  { name: "Algebra", style: "primary" },
  { name: "Português", style: "secondary" },
  { name: "POO", style: "success" },
  { name: "Cálculo I", style: "dark" },
  { name: "Estrutura", style: "success" },
  { name: "Administração", style: "info" },
  { name: "Prova", style: "danger" },
  { name: "Atividade", style: "warning" },
];

const atividades = [
  {
    title: "Entrega do Projeto Final de POO",
    slug: "entrega-projeto-final-poo",
    description: "Entrega do projeto final de Programação Orientada a Objetos, que será utilizado para calcular as três notas.",
    date: "28 de novembro de 2024",
    categories: [
      { name: "POO", style: "success" },
      { name: "Prova", style: "danger" },
    ],
  },
  {
    title: "Prova de Álgebra Vetorial",
    slug: "prova-algebra-vetorial",
    description: "Prova correspondente à segunda nota, adiada para terça-feira.",
    date: "19 de novembro de 2024",
    categories: [
      { name: "Álgebra", style: "primary" },
      { name: "Prova", style: "danger" },
    ],
  },
  {
    title: "Atividade 1 de Álgebra",
    slug: "atividade-1-algebra",
    description: "Atividade abordando conceitos de combinação linear, dependência e base.",
    date: "14 de novembro de 2024",
    categories: [
      { name: "Álgebra", style: "primary" },
      { name: "Atividade", style: "warning" },
    ],
  },
  {
    title: "Atividade 2 de Álgebra",
    slug: "atividade-2-algebra",
    description: "Atividade sobre produto escalar e produto vetorial.",
    date: "14 de novembro de 2024",
    categories: [
      { name: "Álgebra", style: "primary" },
      { name: "Atividade", style: "warning" },
    ],
  },
];


const App = () => {
  return (
    <>
      <Header />

      <div className="row p-5 cards">
        {atividades.map((atividade, i) => <Card key={"card" + atividade.slug + i} atividade={atividade} />)}
      </div>

      <div className="modals">
        {atividades.map((atividade, i) => <Modal key={"modal" + atividade.slug + i} atividade={atividade} />)}
      </div>

      <Footer />
    </>
  );
};

export default App;
