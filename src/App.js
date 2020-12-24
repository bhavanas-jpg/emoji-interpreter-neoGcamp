import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍞": "Bread",
  "🥐": "Croissant",
  "🥖": "Baguette Bread",
  "🍌": "Banana",
  "🥭": "Mango",
  "🥯": "Bagel",
  "🥞": "Pancakes",
  "🍔": "Hamburger",
  "🍟": "French fries",
  "🥪": "Sandwich",
  "🍕": "Pizza",
  "🧇": "Waffle",
  "🍍": "Pineapple",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🥝": "Kiwi Fruit",
  "🥥": "Coconut",
  "🥑": "Avocado",
  "🍆": "Egg Plant",
  "🥔": "Potato",
  "🌮 ": "Taco",
  "🌯": "Burrito",
  "🧆": "Falafel",
  "🥗": "Green Salad",
  "🍿": "Popcorn",
  "🧈": "Butter",
  "🍱": "Bento Box",
  "🍚": "Cooked Rice",
  "🍢": "Oden",
  "🥮": "Moon Cake",
  "🍩": "Doughnut",
  "🍨": "Ice Cream",
  "🍷 ": "Red Wine",
  "🍸": "Cocktail",
  "🥕": "Carrot",
  "🌽": "Corn",
  "🍹": "Tiki Drink",
  "🍺": "Beer",
  "🥤": "Soft Drink",
  "🥛": "Milk",
  "☕": "Coffee",
  "🍵": "Green Tea",
  "🍛": "Curry Rice",
  "🌶️": "Hot Pepper",
  "🥒": "Cucumber",
  "🥬": "Leafy Green",
  "🧄": "Garlic",
  "🧅": "Onion",
  "🍄": "Mushroom",
  "🍝": "Spaghetti",
  "🥧": "Pie"
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>Freshavia</h1>
      <input
        className="input"
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji or select from the below"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2> {}
      <h3 style={{ fontSize: "2.2rem" }}> {meaning} </h3> {}
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "3rem", padding: "0.3rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
