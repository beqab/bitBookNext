import React, { useRef, useState, useEffect, useLayoutEffect } from "react";

const menuItems = [
  {
    name: "Hotels",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17.791"
        height="20.333"
        viewBox="0 0 17.791 20.333"
      >
        <path
          id="Icon_awesome-building"
          data-name="Icon awesome-building"
          d="M17.315,19.062h-.794V.953A.953.953,0,0,0,15.567,0H2.224a.953.953,0,0,0-.953.953V19.062H.477A.477.477,0,0,0,0,19.539v.794H17.791v-.794A.477.477,0,0,0,17.315,19.062ZM5.083,3.018a.477.477,0,0,1,.477-.477H7.148a.477.477,0,0,1,.477.477V4.607a.477.477,0,0,1-.477.477H5.56a.477.477,0,0,1-.477-.477Zm0,3.812a.477.477,0,0,1,.477-.477H7.148a.477.477,0,0,1,.477.477V8.419a.477.477,0,0,1-.477.477H5.56a.477.477,0,0,1-.477-.477Zm2.065,5.878H5.56a.477.477,0,0,1-.477-.477V10.643a.477.477,0,0,1,.477-.477H7.148a.477.477,0,0,1,.477.477v1.589A.477.477,0,0,1,7.148,12.708Zm3.018,6.354H7.625V15.726A.477.477,0,0,1,8.1,15.25H9.69a.477.477,0,0,1,.477.477Zm2.542-6.831a.477.477,0,0,1-.477.477H10.643a.477.477,0,0,1-.477-.477V10.643a.477.477,0,0,1,.477-.477h1.589a.477.477,0,0,1,.477.477Zm0-3.812a.477.477,0,0,1-.477.477H10.643a.477.477,0,0,1-.477-.477V6.831a.477.477,0,0,1,.477-.477h1.589a.477.477,0,0,1,.477.477Zm0-3.812a.477.477,0,0,1-.477.477H10.643a.477.477,0,0,1-.477-.477V3.018a.477.477,0,0,1,.477-.477h1.589a.477.477,0,0,1,.477.477Z"
          fill="#032087"
        />
      </svg>
    ),
  },
  {
    name: "Flights",
    icon: (
      <svg
        style={{ transform: "translateY(-3px)" }}
        xmlns="http://www.w3.org/2000/svg"
        width="48.519"
        height="48.519"
        viewBox="0 0 28.519 28.519"
      >
        <path
          id="Icon_ionic-md-airplane"
          data-name="Icon ionic-md-airplane"
          d="M23.86,17.895V15.878l-8.067-5.243V4.948a1.614,1.614,0,0,0-3.227,0v5.687L4.5,15.878v2.017l8.067-2.42V21.2l-2.42,1.573v1.573l4.033-.807,4.033.807V22.775L15.793,21.2V15.475Z"
          transform="translate(14.035 -5.568) rotate(45)"
          fill="#032087"
        />
      </svg>
    ),
  },
  {
    name: "Hotels+Flights",
    icon: (
      <svg
        style={{ transform: "translateY(-3px)" }}
        xmlns="http://www.w3.org/2000/svg"
        width="31.6"
        height="23.132"
        viewBox="0 0 31.6 23.132"
      >
        <path
          id="Icon_awesome-building"
          data-name="Icon awesome-building"
          d="M16.194,17.829h-.743V.891A.891.891,0,0,0,14.56,0H2.08a.891.891,0,0,0-.891.891V17.829H.446A.446.446,0,0,0,0,18.274v.743H16.64v-.743A.446.446,0,0,0,16.194,17.829ZM4.754,2.823A.446.446,0,0,1,5.2,2.377H6.686a.446.446,0,0,1,.446.446V4.309a.446.446,0,0,1-.446.446H5.2a.446.446,0,0,1-.446-.446Zm0,3.566A.446.446,0,0,1,5.2,5.943H6.686a.446.446,0,0,1,.446.446V7.874a.446.446,0,0,1-.446.446H5.2a.446.446,0,0,1-.446-.446Zm1.931,5.5H5.2a.446.446,0,0,1-.446-.446V9.954A.446.446,0,0,1,5.2,9.509H6.686a.446.446,0,0,1,.446.446V11.44A.446.446,0,0,1,6.686,11.886Zm2.823,5.943H7.131v-3.12a.446.446,0,0,1,.446-.446H9.063a.446.446,0,0,1,.446.446Zm2.377-6.389a.446.446,0,0,1-.446.446H9.954a.446.446,0,0,1-.446-.446V9.954a.446.446,0,0,1,.446-.446H11.44a.446.446,0,0,1,.446.446Zm0-3.566a.446.446,0,0,1-.446.446H9.954a.446.446,0,0,1-.446-.446V6.389a.446.446,0,0,1,.446-.446H11.44a.446.446,0,0,1,.446.446Zm0-3.566a.446.446,0,0,1-.446.446H9.954a.446.446,0,0,1-.446-.446V2.823a.446.446,0,0,1,.446-.446H11.44a.446.446,0,0,1,.446.446Z"
          transform="translate(0 4.115)"
          fill="#032087"
        />
        <path
          id="Icon_ionic-md-airplane"
          data-name="Icon ionic-md-airplane"
          d="M11.556,8.667v-1.2L6.741,4.333V.939a.963.963,0,0,0-1.926,0V4.333L0,7.463v1.2L4.815,7.222v3.419L3.37,11.58v.939l2.407-.481,2.407.481V11.58l-1.444-.939V7.222Z"
          transform="translate(23.428 0) rotate(45)"
          fill="#032087"
        />
      </svg>
    ),
  },
  {
    name: "Cars",
    icon: (
      <svg
        style={{ transform: "translateY(2px)" }}
        xmlns="http://www.w3.org/2000/svg"
        width="20.065"
        height="16.052"
        viewBox="0 0 20.065 16.052"
      >
        <path
          id="Icon_awesome-car-alt"
          data-name="Icon awesome-car-alt"
          d="M18.337,10.7l-.47-1.175-.833-2.083A4.659,4.659,0,0,0,12.687,4.5H7.378A4.66,4.66,0,0,0,3.031,7.443L2.2,9.526,1.728,10.7A2.67,2.67,0,0,0,0,13.195V15.2a2.654,2.654,0,0,0,.669,1.753v2.26a1.338,1.338,0,0,0,1.338,1.338H3.344a1.338,1.338,0,0,0,1.338-1.338V17.877h10.7v1.338a1.338,1.338,0,0,0,1.338,1.338h1.338A1.338,1.338,0,0,0,19.4,19.214v-2.26a2.652,2.652,0,0,0,.669-1.753V13.195A2.67,2.67,0,0,0,18.337,10.7ZM5.515,8.437A2.007,2.007,0,0,1,7.378,7.175h5.309A2.007,2.007,0,0,1,14.55,8.437l.833,2.083H4.682l.833-2.083ZM3.344,15.193A1.262,1.262,0,0,1,2.007,13.86a1.262,1.262,0,0,1,1.338-1.333,2.574,2.574,0,0,1,2.007,2C5.351,15.326,4.147,15.193,3.344,15.193Zm13.377,0c-.8,0-2.007.133-2.007-.667a2.574,2.574,0,0,1,2.007-2,1.262,1.262,0,0,1,1.338,1.333A1.262,1.262,0,0,1,16.721,15.193Z"
          transform="translate(0 -4.5)"
          fill="#032087"
        />
      </svg>
    ),
  },
];

const Search = () => {
  const [menuItemPosition, setMenuItemPosition] = useState<any>(1);
  const [activeMenu, setActiveMenu] = useState(0);
  const [menuLeftPosition, getMenuLeftPosition] = useState<any>(0);
  const menuItemRef = useRef();
  const SearchMenuRef = useRef<any>();

  useEffect(() => {
    // console.log(SearchMenuRef.current.getBoundingClientRect(), "ccc");
    // if(SearchMenuRef.current &&  SearchMenuRef.current.getBoundingClientRect()){

    getMenuLeftPosition(SearchMenuRef.current.getBoundingClientRect().left);
    // }
    const element = SearchMenuRef.current.getBoundingClientRect();
    window.addEventListener("resize", function () {
      console.log(SearchMenuRef.current.getBoundingClientRect(), "left");
      getMenuLeftPosition(SearchMenuRef.current.getBoundingClientRect().left);
      console.log(this.innerWidth);
      //   console.log(left);
    });
  }, []);

  //   useLayoutEffect(() => {
  //     function updateSize() {
  //         getMenuLeftPosition(document.get);
  //     }
  //     window.addEventListener('resize', updateSize);
  //     updateSize();
  //     return () => window.removeEventListener('resize', updateSize);
  //   }, []);

  const menuClick = (e: any) => {
    // console.log(e.nativeEvent.clientX);
    // setMenuItemPosition(e.nativeEvent.clientX);
    setMenuItemPosition(e);
    // debugger;
  };

  const clac = () => {
    let c = menuItemPosition - 108 + menuItemPosition * 120;

    // debugger;

    return c;
  };

  return (
    <div className="searchContainer">
      <div ref={SearchMenuRef} className="SearchMenu">
        <ul className="SearchMenu_ul">
          {menuItems.map((item, i) => {
            return (
              <li
                className={menuItemPosition - 1 == i ? "active" : ""}
                onClick={(e) => menuClick(i + 1)}
                key={i}
              >
                {item.icon}
                {item.name}
              </li>
            );
          })}
        </ul>
        <div
          style={{
            left: clac() + "px",
          }}
          className="menuLine"
        />
      </div>
      <div className="search_options">
        <div className="container">
          <input
            className="CtOrAirport"
            placeholder="Enter a city or Airport"
          />

          <input placeholder="Check in - Check out" />
          <select>
            <option>1 room</option>
          </select>
          <select>
            <option>1 guest</option>
          </select>
          <button className="btn btn-primary">Find your deal</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
