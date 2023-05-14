import React from "react";
import { Collapse } from "react-collapse";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
export default function Question({ open, toggle, title, desc }) {
  return (
    <div className="pt-[10px] font-Montserrat">
      <div
        className="bg-white py-[25px] px-10 md:px-32 flex justify-between items-start cursor-pointer"
        onClick={toggle}
      >
        <p className="text-xl text-start md:text-[28px]  font-medium">{title}</p>
        <div className="text-[30px]">
          {open ? (
            <AiFillCaretUp></AiFillCaretUp>
          ) : (
            <AiFillCaretDown></AiFillCaretDown>
          )}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="bg-white px-[50px] pb-[20px]">{desc}</div>
      </Collapse>
    </div>
  );
}
