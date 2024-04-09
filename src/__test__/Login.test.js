import { render, screen } from "@testing-library/react"
import Login from "../Login"

describe("Test Login Component", () => {
  test("render form with 1 button", async () => {
    render(<Login />);
    // eslint-disable-next-line testing-library/await-async-query
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(1);
  });
})