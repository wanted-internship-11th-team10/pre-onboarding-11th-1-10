import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postMemberApi } from '../lib/customAxios';

// 이메일 패스워드 유효성 검사
export const isValidate = (_id: string, _pw: string) => {
  const regexId = /@/g; // '@' 포함
  const regexPw = /.{8,}/g; // 8자 이상

  if (regexId.test(_id) && regexPw.test(_pw)) return false;
  else return true;
};

const signup = () => {
  const navigate = useNavigate();
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const [disable, setDisable] = useState<boolean>(true);
  // 회원 가입
  const postMember = async () => {
    try {
      await postMemberApi(id, pw);
      navigate('/signin');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setDisable(isValidate(id, pw));
  }, [id, pw]);

  return (
    <div>
      <label htmlFor="id">이메일</label>
      <input
        id="id"
        type="text"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <label htmlFor="password">비밀번호</label>
      <input
        id="password"
        type="password"
        value={pw}
        onChange={(e) => {
          setPw(e.target.value);
        }}
      />
      <button disabled={disable} onClick={postMember}>
        회원가입
      </button>
    </div>
  );
};

export default signup;
