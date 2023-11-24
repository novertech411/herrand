const AdminLogin = () => {
  return (
    <div className="admin-login-container">
      <div className="log-bx-cont">
        <div className="tit-top">Admin Login</div>
        <form action="">
          <input
            type="email"
            className="adm-inp"
            placeholder="Enter your email address"
          />
          <input type="password" className="adm-inp" placeholder="Password" />
          <button className="log-bbtn">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
