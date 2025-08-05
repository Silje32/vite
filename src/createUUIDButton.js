import { v4 as uuidv4 } from "uuid";

const createUUIDButton = (buttonElement) => {
  buttonElement.addEventListener("click", () => {
    const uuid = uuidv4();
    alert("Your UUID is: ${uuid}");
  });
};
