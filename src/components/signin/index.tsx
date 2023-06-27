export default function SignInForm() {
  return (
    <>
      <form>
        <input type="email" placeholder="이메일" />
        <input type="password" placeholder="비밀번호" />
        <button type="submit">로그인</button>
      </form>
      <div>
        <a href="/signup">회원가입</a>
      </div>
    </>
  );
}
