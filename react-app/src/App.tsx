import "./App.css";
import { useState } from "react";
import ListGroup from "./assets/components/ListGroup/ListGroup";
import Alert from "./assets/components/Alert";
import Exercise from "./assets/components/Exercise1";
import Exercise2 from "./assets/components/Exercise2";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./assets/components/Like/Like";
import Person from "./assets/components/Person";
import Arr from "./assets/components/Arr";
import ArrOb from "./assets/components/ArrOb";
import NavBar from "./assets/components/NavBar";
import Cart from "./assets/components/Cart";
import Exercise3 from "./assets/components/Exercise3";
import Exercise4 from "./assets/components/Exercise4";
import Exercise5 from "./assets/components/Exercise5";
import Exercise6 from "./assets/components/Exercise6";
import FormRef from "./assets/components2/FormRef";
import FormState from "./assets/components2/FormState";
import FormHook from "./assets/components2/FormHook";
import FormZod from "./assets/components2/FormZod";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/components/categories";
import Lesson1 from "./assets/backend/lesson1";
import ProductList from "./assets/backend/ProductList";
import CategoryClick from "./assets/backend/CategoryClick";
import RequesAxios from "./assets/backend/RequesAxios";

function App() {
  let items = [
    "Mandarill",
    "Brown Spider",
    "Golden Lion",
    "Gorilla",
    "Chimpanzee",
  ];

  const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);

  const handleSelectItem = (status: string) => {
    console.log(status);
  };

  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 100, category: "Utilities" },
    { id: 2, description: "bbb", amount: 200, category: "Groceries" },
    { id: 3, description: "ccc", amount: 300, category: "Groceries" },
    { id: 4, description: "ddd", amount: 400, category: "Entertainment" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      {/* <BsFillCalendarFill color="red" size={50} />
      <ListGroup
        items={items}
        heading={"Monkeys The NightFall"}
        onSelectItem={handleSelectItem}
      /> */}
      {/* <Alert>
        <div>Hello this is the fucking Alert</div>
      </Alert> */}
      {/* <Exercise onClick={() => console.log("Click")} color="success" /> */}
      {/* <Exercise2 /> */}
      {/* <Like onSelectItem={(status) => console.log(status)} /> */}
      {/* <Person /> */}
      {/* <Arr /> */}
      {/* <ArrOb /> */}
      {/* <NavBar cartItemCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} /> */}
      {/* <Exercise3 /> */}
      {/* <Exercise4 /> */}
      {/* <Exercise5 /> */}
      {/* <Exercise6 max_length={10}>gargamelzonabatzona</Exercise6> */}
      {/* <FormRef /> */}
      {/* <FormState /> */}
      {/* <FormHook /> */}
      {/* <FormZod /> */}
      {/* <Project_1_1 />
      <Project_1_2 /> */}
      {/* <div className="mb-5">
        <ExpenseForm
          onSubmit={(expese) =>
            setExpenses([...expenses, { ...expese, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      /> */}
      {/* <Lesson1 /> */}
      {/* <CategoryClick />
      <ProductList category={"counter hooooo"} /> */}
      <RequesAxios />
    </>
  );
}

export default App;
