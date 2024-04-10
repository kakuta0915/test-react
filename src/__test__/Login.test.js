import { render, screen } from "@testing-library/react"
import Login, { validateEmail } from "../Login"
import userEvent from "@testing-library/user-event";

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

  // validateEmailが正常に動作しているかをテスト (成功したらtrue)
  test("should be succeeded on email validation", () => {
    const testEmail = "kakuta@gmail.com";
    expect(validateEmail(testEmail)).toBe(true);
  });

  // パスワードが正しく入力されているかテスト
  test("password input should have type password", () => {
    render(<Login />);
    const password = screen.getByPlaceholderText("パスワード入力");
    expect(password).toHaveAttribute("type", "password");
  });

  // 送信できるかをテスト
  test("should be able to submit the form", () => {
    render(<Login />);
    const submitButton = screen.getByTestId("submit");
    const email = screen.getByPlaceholderText("メールアドレス入力");
    const password = screen.getByPlaceholderText("パスワード入力");

    userEvent.type(email, "kakuta@gmail.com");
    userEvent.type(password, "kakuta0915");

    userEvent.click(submitButton);
    const userInfo = screen.getByText("kakuta@gmail.com");
    expect(userInfo).toBeInTheDocument();
  });
});