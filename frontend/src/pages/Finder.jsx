import React from "react";

function Finder() {
  return (
    <div className="finder">
      <div className="finder__container">
        <div className="finder__search-section">
          <h1>Basics</h1>
          <div className="finder__basic">
            <select className="finder__make">
              <option value="">-- Make --</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <select className="finder__model">
              <option value="">-- Model --</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <select className="finder__year">
              <option value="">-- Year --</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <h1>Style</h1>
          <div className="finder__style">
            <select className="finder__body-style">
              <option value="">-- Body style --</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <select className="finder__exterior-color">
              <option value="">-- Exterior color --</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <select className="finder__interior-color">
              <option value="">-- Interior color --</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <h1>Features</h1>
          <div className="finder__features">
            <select className="finder__engine-type">
              <option value="">-- Body style --</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="finder__btn">
            <button className="">Submit</button>
          </div>
        </div>

        {/* mobile */}
        <div className="finder__mobile">
          <div className="mobile__container">
            <div className="mobile__filter">
              <button>Filter</button>
            </div>
            <span className="mobile__vert-line"></span>
            <div className="mobile__btn">
              <button>b1</button>
              <button>b2</button>
              <button>b3</button>
              <button>b4</button>
              <button>b5</button>
            </div>
          </div>
        </div>
        {/* mobile */}

        <div className="finder__contents">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            voluptatem quae delectus in. Maiores ipsam, quidem praesentium
            deserunt commodi quaerat labore, repudiandae corrupti nobis
            blanditiis aliquam laudantium cum fuga repellendus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            voluptatem quae delectus in. Maiores ipsam, quidem praesentium
            deserunt commodi quaerat labore, repudiandae corrupti nobis
            blanditiis aliquam laudantium cum fuga repellendus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            voluptatem quae delectus in. Maiores ipsam, quidem praesentium
            deserunt commodi quaerat labore, repudiandae corrupti nobis
            blanditiis aliquam laudantium cum fuga repellendus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            voluptatem quae delectus in. Maiores ipsam, quidem praesentium
            deserunt commodi quaerat labore, repudiandae corrupti nobis
            blanditiis aliquam laudantium cum fuga repellendus?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Finder;
