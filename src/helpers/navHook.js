import { useCallback } from "react";
import routes from "../routes";

const useNav = () => {
  const navAddClickListener = useCallback(() => {
    const btnNuts = document.querySelector('#btnNuts');
    const btnAbout = document.querySelector('#btnAbout');
    const btnRoadmap = document.querySelector('#btnRoadmap');
    const btnTeam = document.querySelector('#btnTeam');
    const btnFAQs = document.querySelector('#btnFAQs');
    // Btns
    btnNuts?.addEventListener("click", () => window.location.hash = routes.home)
    btnAbout?.addEventListener("click", () => window.location.hash = routes.about)
    btnRoadmap?.addEventListener("click", () => window.location.hash = routes.roadmap)
    btnTeam?.addEventListener("click", () => window.location.hash = routes.team)
    btnFAQs?.addEventListener("click", () => window.location.hash = routes.faqs)
  }, []);

  return {
    navAddClickListener
  };
}
export default useNav;
