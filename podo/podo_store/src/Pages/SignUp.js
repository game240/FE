import './SignUp.css';
import MainNav from './MainNav';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const User = {
  email: 'test@naver.com',
  pw: 'qwer123@@@',
};

function SignUp() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePassword = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(pw)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const onClickConfirmButton = () => {
    if (email === User.email && pw === User.pw) {
      alert('로그인 성공');
    } else {
      alert('로그인 실패');
    }
  };

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  return (
    <div className="Signin">
      <MainNav />
      <div className="page">
        <div className="titleWrap">
          귀한 곳에
          <br />
          누추한 분이...
        </div>
        <div className="contentWrap">
          <div className="inputTitle">아이디</div>
          <div className="inputWrap">
            <input
              type="text"
              className="input"
              placeholder="podo@naver.com"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="errorMessageWrap">
            {!emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )}
          </div>

          <div style={{ marginTop: '26px' }} className="inputTitle">
            비밀번호
          </div>
          <div className="inputWrap">
            <input
              type="password"
              className="input"
              placeholder="영문, 숫자, 특수문자 포함 8자 이상"
              value={pw}
              onChange={handlePassword}
            />
          </div>
          <div className="errorMessageWrap">
            {!pwValid && pw.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
          </div>

          <div style={{ marginTop: '26px' }} className="inputTitle">
            비밀번호 확인
          </div>
          <div className="inputWrap">
            <input
              type="password"
              className="input"
              placeholder="영문, 숫자, 특수문자 포함 8자 이상"
              onChange={handlePassword}
            />
          </div>
          <div className="errorMessageWrap">
            {!pwValid && pw.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
          </div>

          <div style={{ marginTop: '26px' }} className="inputTitle">
            닉네임
          </div>
          <div className="inputWrap">
            <input
              type="text"
              className="input"
              placeholder="3글자 이상 입력해주세요."
            />
          </div>
          <div className="errorMessageWrap">
            {!pwValid && pw.length > 0 && <div>3글자 이상 입력해주세요.</div>}
          </div>

          <div style={{ marginTop: '26px' }} className="inputTitle">
            전화번호
          </div>
          <div className="inputWrap">
            <input
              type="tel"
              className="input"
              placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            />
          </div>
          <div className="errorMessageWrap">
            {!pwValid && pw.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
          </div>
        </div>
        <div>
          <button
            onClick={onClickConfirmButton}
            disabled={notAllow}
            className="bottomButton"
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
