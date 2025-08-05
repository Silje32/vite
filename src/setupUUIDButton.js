import { v4 as uuidv4 } from "uuid";

export const setupUUIDButton = (buttonElement) => {
  buttonElement.addEventListener("click", () => {
    const uuid = uuidv4();
    alert("Your UUID is: ${uuid}");
  });
};
