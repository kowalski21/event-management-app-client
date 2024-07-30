import { assetUrl } from "@/lib/asset";
import React from "react";
import { useBoolean } from "usehooks-ts";
import Link from "next/link";
import { directus } from "@/lib";
import { useMutation } from "react-query";
import { useRouter } from "next/router";
const MainAvatarMenu = ({ user }) => {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: async () => {
      await directus.auth.logout();
    },
    onSuccess: () => {
      router.push(`/auth/login`);
    },
    onError: (e) => {
      alert(e.message);
    },
  });
  const handleLogout = () => {
    mutation.mutate();
  };
  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);
  return (
    <div className={`cursor-pointer symbol symbol-30px symbol-lg-40px`} onClick={toggle}>
      <img
        style={{ objectFit: "cover" }}
        className="symbol symbol-30px symbol-lg-40px "
        src={`${assetUrl(user?.avatar)}`}
        alt="user"
      />

      <div
        className={`avatar__menu ${
          value && "show"
        }  menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px`}
      >
        <div className="menu-item px-3">
          <div className="menu-content d-flex align-items-center px-3">
            <div className="symbol symbol-50px me-5">
              <img style={{ objectFit: "cover" }} alt="Logo" src={assetUrl(user?.avatar)} />
            </div>

            <div className="d-flex flex-column">
              <div className="fw-bolder d-flex align-items-center fs-7">
                {user?.first_name} {user?.last_name}
              </div>
              <span className="badge badge-light-success fw-bold fs-8  py-1 ">{user?.role?.name}</span>
              <a className="fw-semibold cursor-pointer  text-dark fs-8">{user?.email}</a>
            </div>
          </div>
        </div>

        <div className="separator my-2"></div>

        <div className="menu-item px-5">
          <Link href={`/dashboard/profile/${user?.id}`} legacyBehavior>
            <a className="menu-link px-5">My Profile</a>
          </Link>
        </div>

        {/* <div className="menu-item px-5">
          <a href="apps/projects/list.html" className="menu-link px-5">
            <span className="menu-text">My Projects</span>
            <span className="menu-badge">
              <span className="badge badge-light-danger badge-circle fw-bold fs-7">3</span>
            </span>
          </a>
        </div> */}

        <div className="menu-item px-5">
          <Link href={`/dashboard/manage/events/`} legacyBehavior>
            <a className="menu-link px-5">My Events</a>
          </Link>
        </div>

        <div className="separator my-2"></div>

        <div className="menu-item px-5 my-1">
          <a href="#" className="menu-link px-5">
            Account Settings
          </a>
        </div>

        <div className="menu-item px-5">
          <a onClick={handleLogout} className="menu-link px-5">
            Sign Out
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainAvatarMenu;
