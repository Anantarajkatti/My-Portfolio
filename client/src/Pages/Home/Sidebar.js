import React from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-2 bottom-0 left-5 fixed items-center  justify-between tablet:static">
      <button
        className="bg-[#9cf8d3] rounded-full p-1"
        onClick={() => {
          navigate("/admin-login");
        }}
      >
        {" "}
        Admin Login
      </button>
      <div className="text-2xl flex flex-col tablet:flex-row">
        <a href="https://www.instagram.com/anantaraj_r_k/" target="blank">
          {" "}
          <i class="ri-instagram-fill"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/anantaraj-katti-9b4aa1178/"
          target="blank"
        >
          <i class="ri-linkedin-box-fill"></i>
        </a>

        <a href="www.anantarajkatti@gmail.com" target="blank">
          {" "}
          <i class="ri-mail-line"></i>
        </a>

        <a href="https://github.com/Anantarajkatti" target="blank">
          {" "}
          <i class="ri-github-fill"></i>
        </a>
      </div>
      <div className="w-[1px] bg-[#25b174] h-[200px] tablet:hidden"></div>
    </div>
  );
}

export default Sidebar;
