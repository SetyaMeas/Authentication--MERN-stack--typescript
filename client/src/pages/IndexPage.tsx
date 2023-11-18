
const IndexPage = () => {
  
  return (
    <div className="flex justify-center items-center gap-[18px]">
      <a href="/auth/register">
        <button className="w-[90px] py-[3px] rounded-md text-[18px] text-black bg-[#45f984]">Register</button>
      </a>

      <a href="/auth/login">
        <button className="w-[90px] py-[3px] rounded-md text-[18px] text-white bg-[#464ffd]">Login</button>
      </a>
    </div>
  )
}

export default IndexPage