import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

const items = document.querySelectorAll("#horisontalliste li");
scroll(
  animate("#horisontalliste", {
    transform: ["none", `translateX(-${items.length - 1}00vw)`],
  }),
  { target: document.querySelector("#horisontalscrollsection") }
);
