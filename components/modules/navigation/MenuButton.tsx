import React from "react";

type Props = {
  isOpen?: boolean;
  onClick?: any;
};

const MenuButton = ({ isOpen, onClick }: Props) => {
  const getMenuButton = () => {
    if (isOpen) {
      return (
        <button onClick={() => onClick()} className="hover:text-white hover:bg-black hover:rounded-full">
          <svg
            width="63"
            height="63"
            viewBox="0 0 63 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="material-symbols:menu">
              <path
                id="Vector"
                d="M7.85693 47.1428V41.9047H54.9998V47.1428H7.85693ZM7.85693 34.0476V28.8095H54.9998V34.0476H7.85693ZM7.85693 20.9523V15.7142H54.9998V20.9523H7.85693Z"
                fill="black"
              />
            </g>
          </svg>
        </button>
      );
    } else {
      return (
        <button onClick={() => onClick()} className="hover:text-white hover:bg-black hover:rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="63"
            height="63"
            viewBox="0 0 63 63"
            fill="none"
          >
            <path
              d="M13 13L49 49M13 49L49 13"
              stroke="black"
              stroke-width="5.2"
            />
          </svg>
        </button>
      );
    }
  };

  return getMenuButton();
};

export default MenuButton;
