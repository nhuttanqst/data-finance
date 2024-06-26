import { useEffect, useRef, useState } from "react";

const useClickOutSide = () => {
  const [show, setShow] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        !e.target.matches("svg")
      )
        setShow(false);
    };

    document.addEventListener("click", handleClickOutSide);

    return () => document.removeEventListener("click", handleClickOutSide);
  }, []);

  return {
    show,
    setShow,
    nodeRef,
  };
};

export default useClickOutSide;
