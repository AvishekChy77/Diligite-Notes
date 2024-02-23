import { Switch } from "@nextui-org/react";
import { LuMoon, LuSun } from "react-icons/lu";

export default function ToggleTheme() {
  return (
    <Switch
      defaultSelected
      size="lg"
      color="success"
      startContent={<LuSun />}
      endContent={<LuMoon />}
    ></Switch>
  );
}
