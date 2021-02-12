import React from "react";

function handleClick(event) {
  const priceTag = document.querySelector(".card h1");
  const priceTag2 = document.querySelector(".card:nth-child(2) h1");
  const priceTag3 = document.querySelector(".card:nth-child(3) h1");
  if (event.target.checked) {
    priceTag.innerHTML = "<h1><span>$</span>19.99</>";
    priceTag2.innerHTML = "<h1><span>$</span>24.99</>";
    priceTag3.innerHTML = "<h1><span>$</span>39.99</>";
  } else {
    priceTag.innerHTML = "<h1><span>$</span>199.99</>";
    priceTag2.innerHTML = "<h1><span>$</span>249.99</>";
    priceTag3.innerHTML = "<h1><span>$</span>399.99</>";
  }
}

function Header() {
  return (
    <div>
      <header>
        <h1>Our Pricing</h1>
      </header>
      <ul>
        <li>Annually</li>
        <li>
          <input type="checkbox" name="" id="" onClick={handleClick} />
        </li>
        <li>Monthly</li>
      </ul>
    </div>
  );
}

export default Header;
