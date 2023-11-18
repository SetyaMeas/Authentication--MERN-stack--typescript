import Cookies from "js-cookie"

const Logout = () => {

  function handleLogout() {
    Cookies.remove("token");
    window.location.pathname = "/";
  }
  return (
    <button role="button" onClick={handleLogout} className="text-[16px] py-[6px] px-[9px] bg-red-500 text-white rounded-sm">
      Logout
    </button>
  )
}

export default Logout;