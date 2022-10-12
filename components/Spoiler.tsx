import React, { RefObject, useEffect, useRef, useState } from "react";

interface OwnProps {
  className: string;
  title: string;
  content: string;
}

type Props = OwnProps;

export function Spoiler(props: Props) {
  const [className, setClassName] = useState(["spoiler"]);
  const [maxHeight, setMaxHeight] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const spoilerBody: RefObject<HTMLDivElement> = useRef();
  const spoilerTitle: RefObject<HTMLButtonElement> = useRef();
  useEffect(() => {
    setMaxHeight(spoilerBody.current.clientHeight);
    if (props.className) {
      setClassName((prev) => [...prev, props.className]);
    }
    setIsOpen(false);
    console.log(maxHeight);
  }, []);
  useEffect(() => {
    isOpen
      ? spoilerTitle.current.classList.add("spoiler-open")
      : spoilerTitle.current.classList.remove("spoiler-open");
  }, [isOpen]);

  const handleSpolierClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={className.join(" ")}>
      <button
        ref={spoilerTitle}
        onClick={handleSpolierClick}
        className="spoiler__title"
      >
        <p>{props.title}</p>
        <span className="spoiler__open">
          <span></span>
          <span></span>
        </span>
      </button>
      <div
        ref={spoilerBody}
        style={
          isOpen ? { "max-height": `${maxHeight}px` } : { "max-height": "0px" }
        }
        className="spoiler__content"
      >
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default Spoiler;
