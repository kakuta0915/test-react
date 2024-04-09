import { render, screen } from "@testing-library/react"
import Login, { validateEmail } from "../Login"

describe("Test Login Component", () => {
  test("render form with 1 button", async () => {
    render(<Login />);
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(1);
  });

  // validateEmailが正常に動作しているかをテスト (失敗したらtrue)
  test("should be failed on email validation", () => {
    const testEmail = "kakuta.com";
    expect(validateEmail(testEmail)).not.toBe(true);
  });
});