import React from "react";
import { useSelector } from "react-redux";
import "./style.css";

export const Profile = () => {
  const { profile } = useSelector((state) => state.profile);

  const profileName =
    !!profile && !!profile.name && profile.name.length > 0 ? profile.name : "Имя не указано";

  const profileLastName =
    !!profile && !!profile.lastName && profile.lastName.length > 0
      ? profile.lastName
      : "Фамилия не указана";

  return (
    <div className="profile">
      {!!profile ? (
        <div>
          <h3>
            {profileName} {profileLastName}
          </h3>
        </div>
      ) : (
        <h1>Данных нет</h1>
      )}
    </div>
  );
};
