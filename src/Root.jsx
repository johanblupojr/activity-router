import { Outlet } from "react-router";
import NavNames from "./components/NavNames";

export default function Root() {

  return <>
  <NavNames/>
  <Outlet/>
  </>;
}
