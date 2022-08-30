import React from "react";

export default function Home() {
  const exit = () => {
    window.localStorage.removeItem('user-info');
    window.localStorage.removeItem('tokens');
    window.location.reload()
  }
  return <div>
    <h1>Home Giriş Yapıldı</h1>
    <button
      type="button"
      className="btn btn-danger btn-block"
      onClick={exit}
    >
      Çıkış Yap
    </button>
  </div>
}
